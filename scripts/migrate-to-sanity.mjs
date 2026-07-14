/**
 * One-time migration: imports the bundled JSON snapshot (src/data/*.json)
 * into Sanity, uploading every Cloudinary image to Sanity's asset store.
 *
 * Usage:
 *   1. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN (an Editor
 *      token from https://sanity.io/manage) in .env.local
 *   2. npm run sanity:migrate
 *
 * The script is idempotent: documents are createOrReplace'd with stable ids,
 * and uploaded images are remembered in scripts/.image-cache.json so reruns
 * don't re-upload.
 */
import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/* ---------- env ---------- */

for (const file of [".env.local", ".env"]) {
  const p = path.join(root, file);
  if (!fs.existsSync(p) || !fs.statSync(p).isFile()) continue;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing configuration. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN in .env.local\n" +
      "(create the token at https://sanity.io/manage → your project → API → Tokens, with Editor permissions)."
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-10-01", useCdn: false });

/* ---------- data ---------- */

const readJson = (f) => JSON.parse(fs.readFileSync(path.join(root, "src/data", f), "utf8"));
const tours = readJson("tours.json");
const destinations = readJson("destinations.json");
const itineraries = readJson("itineraries.json");
const activities = readJson("activities.json");
const events = readJson("events.json");
const pageContent = readJson("pageContent.json");

/* ---------- image uploads (cached) ---------- */

const cachePath = path.join(root, "scripts/.image-cache.json");
const imageCache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};
let uploaded = 0;
const missingImages = [];

async function imageFor(url) {
  if (!url) return undefined;
  if (!imageCache[url]) {
    const res = await fetch(url);
    if (!res.ok) {
      // Source no longer exists on Cloudinary — leave the field empty and
      // report at the end so the image can be re-added in the Studio.
      console.warn(`  ⚠ skipping (HTTP ${res.status}): ${url}`);
      missingImages.push(url);
      return undefined;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = url.split("/").pop() ?? "image";
    const asset = await client.assets.upload("image", buffer, {
      filename,
      source: { name: "cloudinary", id: url, url },
    });
    imageCache[url] = asset._id;
    fs.writeFileSync(cachePath, JSON.stringify(imageCache, null, 1));
    uploaded += 1;
    console.log(`  ↑ uploaded image ${uploaded}: ${filename}`);
  }
  return { _type: "image", asset: { _type: "reference", _ref: imageCache[url] } };
}

async function galleryFor(urls, keyPrefix) {
  const out = [];
  for (const [i, url] of (urls ?? []).entries()) {
    const img = await imageFor(url);
    if (img) out.push({ ...img, _key: `${keyPrefix}-${i}` });
  }
  return out;
}

const ref = (id) => ({ _type: "reference", _ref: id });

/* ---------- collection documents ---------- */

async function buildDocs() {
  const docs = [];

  for (const a of activities) {
    docs.push({
      _id: a._id,
      _type: "activity",
      title: a.title,
      featuredImage: await imageFor(a.featuredImage),
    });
  }

  for (const it of itineraries) {
    docs.push({
      _id: it._id,
      _type: "itinerary",
      title: it.title,
      description: it.description,
      featuredImage: await imageFor(it.featuredImage),
      activities: (it.activities ?? []).map((id, i) => ({ ...ref(id), _key: `act-${i}` })),
      meals: it.meals ?? [],
    });
  }

  for (const [i, d] of destinations.entries()) {
    docs.push({
      _id: d._id,
      _type: "destination",
      title: d.title,
      tagline: d.tagline,
      featuredImage: await imageFor(d.featuredImage),
      order: i,
    });
  }

  for (const [i, t] of tours.entries()) {
    docs.push({
      _id: t._id,
      _type: "tour",
      name: t.name,
      slug: { _type: "slug", current: t.slug },
      summary: t.summary,
      image: await imageFor(t.mediaUrl),
      gallery: await galleryFor(t.mediaUrls, "img"),
      destination: t.destination ? ref(t.destination) : undefined,
      duration: t.duration,
      prices: (t.prices ?? []).map((p) => ({ _key: p._id, label: p.label, amount: p.amount })),
      schedules: (t.schedules ?? []).map((s) => ({ _key: s._id, start: s.start, end: s.end })),
      supplement: t.supplement,
      group: t.group,
      groupAvailable: t.groupAvailable,
      groupPrice: t.groupPrice,
      reasons: t.reasons ?? [],
      days: (t.itineraries ?? []).map((d) => ({
        _key: d._id,
        label: d.label,
        itinerary: ref(d.itinerary),
      })),
      order: i,
    });
  }

  for (const [i, e] of events.entries()) {
    docs.push({
      _id: e._id,
      _type: "travelEvent",
      name: e.name,
      summary: e.summary,
      description: e.description,
      image: await imageFor(e.mediaUrl),
      gallery: await galleryFor(e.mediaUrls, "img"),
      order: i,
    });
  }

  return docs;
}

/* ---------- page-content singletons ---------- */

/**
 * Converts the pageContent.json defaults into Sanity documents:
 * image-URL fields become uploaded image assets, object array items get
 * stable _key values, and the special-offer tour slug becomes a reference.
 */
async function convert(value, key) {
  if (typeof value === "string" && (key === "image" || key === "mapImage")) {
    return imageFor(value);
  }
  if (Array.isArray(value)) {
    const items = await Promise.all(value.map((v) => convert(v, undefined)));
    return items.map((v, i) =>
      v && typeof v === "object" && !Array.isArray(v) ? { _key: `k${i}`, ...v } : v
    );
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = await convert(v, k);
    return out;
  }
  return value;
}

async function buildSingletons() {
  const docs = [];
  for (const [id, content] of Object.entries(pageContent)) {
    const doc = { _id: id, _type: id, ...(await convert(content, undefined)) };
    if (id === "homePage" && doc.specialOffer?.tourSlug) {
      const tour = tours.find((t) => t.slug === doc.specialOffer.tourSlug);
      delete doc.specialOffer.tourSlug;
      if (tour) doc.specialOffer.tour = ref(tour._id);
    }
    docs.push(doc);
  }
  return docs;
}

/* ---------- run ---------- */

console.log(`Migrating to Sanity project "${projectId}", dataset "${dataset}"…\n`);

console.log("Uploading images & building collection documents…");
const collectionDocs = await buildDocs();
console.log("Building page-content documents…");
const singletonDocs = await buildSingletons();

const all = [...collectionDocs, ...singletonDocs];
console.log(`\nWriting ${all.length} documents…`);
let tx = client.transaction();
for (const doc of all) tx = tx.createOrReplace(doc);
await tx.commit();

console.log(`\nDone. ${uploaded} new images uploaded, ${all.length} documents written.`);
if (missingImages.length) {
  console.warn(
    `\n${missingImages.length} source image(s) no longer exist on Cloudinary and were skipped —` +
      ` upload replacements in the Studio:\n` +
      missingImages.map((u) => `  - ${u}`).join("\n")
  );
}
console.log(`Open http://localhost:3000/studio to edit your content.`);
