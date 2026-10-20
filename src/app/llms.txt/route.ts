import { getSiteSettings } from "@/lib/content";
import { getDestinationMap, getTours, minPrice, formatPrice } from "@/lib/data";
import { SITE_NAME, STATIC_PAGES, absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export async function GET() {
  const [settings, tours, destinations] = await Promise.all([
    getSiteSettings(),
    getTours(),
    getDestinationMap(),
  ]);

  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${settings.metaDescription}`,
    "",
    `${settings.footerBlurb} Based in Ulaanbaatar, Mongolia. Contact: ${settings.email}, ${settings.phone}.`,
    "",
    "## Pages",
    ...STATIC_PAGES.map((p) => `- [${p.name}](${absoluteUrl(p.path)})`),
    "",
    "## Tours",
    ...tours.map((t) => {
      const summary = t.summary.trim().split(/(?<=\.)\s/)[0];
      const price = minPrice(t) ? `, from ${formatPrice(minPrice(t))} per person` : "";
      return `- [${t.name}](${absoluteUrl(`/tours/${t.slug}`)}): ${t.duration} days, ${destinations[t.destination] ?? "Mongolia"}${price}. ${summary}`;
    }),
    "",
    "## Optional",
    `- [Full text for AI assistants](${absoluteUrl("/llms-full.txt")})`,
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
