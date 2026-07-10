# Travels in Mongolia — Next.js + Tailwind

A tour-operator website generated from the "Travels in Mongolia" Claude design, wired to the real
data from the MongoDB dump in the parent `travels` folder (images served from Cloudinary).

## Pages

- `/` — home (hero, stats, featured tours, destinations, festivals, testimonials)
- `/tours` — all 9 tours from the `tours` collection
- `/tours/[slug]` — tour detail: overview, highlights (`reasons`), day-by-day (`itineraries` + `activities`), prices, group schedules, gallery, booking form
- `/group-departures` — tours with `group: true` and their `schedules`
- `/about`, `/travel-tools`, `/contact` — content pages; the contact form posts to the `messages` collection

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The app works out of the box using the JSON snapshot in
`src/data/` (exported from the BSON dump), so no database is required for development.

## Connecting MongoDB (optional)

1. Restore the dump from the parent folder:

   ```bash
   mongorestore --db travels /path/to/travels
   ```

2. Copy `.env.example` to `.env.local` and set:

   ```
   MONGODB_URI=mongodb://localhost:27017/travels
   ```

When `MONGODB_URI` is set, all pages read live from MongoDB (falling back to the JSON
snapshot on connection errors), and the booking/contact forms persist to the `orders`
and `messages` collections — matching the schemas of the original dump.

## Data model

| Collection    | Used for                                        |
| ------------- | ----------------------------------------------- |
| `tours`       | listings, detail pages, prices, group schedules |
| `destinations`| region labels + destination grid on home        |
| `itineraries` | day-by-day sections on tour detail pages        |
| `activities`  | activity chips on itinerary days                |
| `events`      | festival cards + hero imagery                   |
| `orders`      | booking-form submissions (`POST /api/orders`)   |
| `messages`    | contact-form submissions (`POST /api/messages`) |

Tour URLs use a `slug` derived from the last segment of each tour's `path`
(e.g. `central-mongolia/classic-central-mongolia-tour/` → `/tours/classic-central-mongolia-tour`).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 (brand palette: paper `#faf8f3`, charcoal `#211f1c`, amber `#e8a23d`, gold `#f0b860`, rust `#b26a12`)
- Fonts: Newsreader (serif), Archivo (sans), Space Mono (mono) via `next/font`
- Mongoose 8 for MongoDB access
- `next/image` with Cloudinary (`res.cloudinary.com/dmyps1mg3`) allowed in `next.config.mjs`
