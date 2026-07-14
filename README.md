# Travels in Mongolia — Next.js + Tailwind + Sanity

A tour-operator website generated from the "Travels in Mongolia" Claude design. All content —
every tour, destination, day program, festival, and every piece of page text and imagery — is
edited in **Sanity Studio**, embedded at [`/studio`](http://localhost:3000/studio).

## Pages

- `/` — home (hero, stats, featured tours, destinations, festivals, testimonials)
- `/tours` — all tours
- `/tours/[slug]` — tour detail: overview, highlights, day-by-day, prices, group schedules, gallery, booking form
- `/group-departures` — tours with group departures and their scheduled dates
- `/about`, `/travel-tools`, `/contact` — content pages; the contact form posts to MongoDB
- `/studio` — Sanity Studio (content editing)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The app works out of the box using the bundled JSON snapshot in
`src/data/`, so no external services are required for development.

## Connecting Sanity (content editing)

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage) (or run
   `npx sanity init --bare`). Note the **project id**.
2. Copy `.env.example` to `.env.local` and set:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=<Editor token from sanity.io/manage → API → Tokens>
   ```

3. In sanity.io/manage → **API → CORS origins**, add `http://localhost:3000` (with credentials) —
   plus your production URL when you deploy.
4. Run the one-time migration. It uploads every Cloudinary image into Sanity's asset store and
   imports all tours, destinations, itineraries, activities, events and page copy:

   ```bash
   npm run sanity:migrate
   ```

5. Restart `npm run dev` and open [http://localhost:3000/studio](http://localhost:3000/studio)
   to edit content. Published edits appear on the site within a minute (ISR, 60 s).

The migration is idempotent — rerunning it re-syncs documents without duplicating images
(uploads are cached in `scripts/.image-cache.json`).

### How content is wired

- `src/sanity/schemaTypes/` — schemas: 5 collections (`tour`, `destination`, `itinerary`,
  `activity`, `travelEvent`) plus singletons for each page's copy (`homePage`, `aboutPage`,
  `toursPage`, `groupDeparturesPage`, `travelToolsPage`, `contactPage`) and `siteSettings`
  (brand, contact details, footer, tour-page shared text).
- `src/sanity/queries.ts` — GROQ queries that project documents into the app's existing
  TypeScript shapes (images → URL strings, references → id strings).
- `src/lib/data.ts` — collection reads (Sanity, falling back to `src/data/*.json` when
  Sanity is unconfigured or unreachable).
- `src/lib/content.ts` — page copy reads; `src/data/pageContent.json` provides the defaults
  and fills any field left empty in the Studio.

## MongoDB (optional — form submissions only)

Booking enquiries (`POST /api/orders`) and contact messages (`POST /api/messages`) persist to
MongoDB when `MONGODB_URI` is set in `.env.local`. Without it, form endpoints validate and
accept but skip persistence.

## Stack

- Next.js 14 (App Router) + TypeScript
- Sanity v3 (embedded Studio via `next-sanity`)
- Tailwind CSS 3 (brand palette: paper `#faf8f3`, charcoal `#211f1c`, amber `#e8a23d`, gold `#f0b860`, rust `#b26a12`)
- Fonts: Newsreader (serif), Archivo (sans), Space Mono (mono) via `next/font`
- Mongoose 8 for form submissions
- `next/image` with `cdn.sanity.io` (and Cloudinary for the pre-migration fallback) allowed in `next.config.mjs`
