import { groq } from "next-sanity";

/**
 * All queries project Sanity documents into the exact shapes the app already
 * uses (see src/lib/types.ts): images become URL strings and references become
 * plain id strings, so components work identically on Sanity data and on the
 * bundled JSON fallback.
 */

export const toursQuery = groq`*[_type == "tour"] | order(coalesce(order, 999), name) {
  _id,
  name,
  "slug": slug.current,
  summary,
  "mediaUrl": image.asset->url,
  "mediaUrls": coalesce(gallery[].asset->url, []),
  "destination": destination._ref,
  duration,
  "prices": coalesce(prices[]{ "_id": _key, label, amount }, []),
  "schedules": coalesce(schedules[]{ "_id": _key, start, end }, []),
  supplement,
  group,
  groupAvailable,
  groupPrice,
  "reasons": coalesce(reasons, []),
  "itineraries": coalesce(days[]{ "_id": _key, label, "itinerary": itinerary._ref }, [])
}`;

export const destinationsQuery = groq`*[_type == "destination"] | order(coalesce(order, 999), title) {
  _id,
  title,
  tagline,
  "featuredImage": featuredImage.asset->url
}`;

export const itinerariesQuery = groq`*[_type == "itinerary"] {
  _id,
  title,
  description,
  "featuredImage": featuredImage.asset->url,
  "activities": coalesce(activities[]._ref, []),
  "meals": coalesce(meals, [])
}`;

export const activitiesQuery = groq`*[_type == "activity"] {
  _id,
  title,
  "featuredImage": featuredImage.asset->url
}`;

export const eventsQuery = groq`*[_type == "travelEvent"] | order(coalesce(order, 999), name) {
  _id,
  name,
  summary,
  description,
  "mediaUrl": image.asset->url,
  "mediaUrls": coalesce(gallery[].asset->url, [])
}`;

/* ---------- page content singletons ---------- */

export const siteSettingsQuery = groq`*[_id == "siteSettings"][0] {
  brandName, brandTagline, headerCtaLabel,
  phone, email, address, facebookUrl,
  footerBlurb, footerNote,
  tourIncludedItems, tourSidebarNote,
  metaTitle, metaDescription
}`;

export const homePageQuery = groq`*[_id == "homePage"][0] {
  hero{ kicker, heading, text, primaryCtaLabel, secondaryCtaLabel, "image": image.asset->url },
  specialOffer{ kicker, title, text, linkLabel, "tourSlug": tour->slug.current },
  stats[]{ value, label },
  intro{ kicker, heading, paragraphs, primaryCtaLabel, secondaryCtaLabel, "image": image.asset->url },
  toursSection{ kicker, heading },
  destinationsSection{ kicker, heading },
  eventsBand{ kicker, heading, text, ctaLabel, "image": image.asset->url },
  eventsSection{ kicker, heading },
  testimonialsSection{ kicker, heading },
  testimonials[]{ quote, name, place },
  cta{ heading, text, ctaLabel }
}`;

export const aboutPageQuery = groq`*[_id == "aboutPage"][0] {
  metaTitle, metaDescription,
  hero{ kicker, heading },
  story{ kicker, heading, paragraphs, "image": image.asset->url },
  founder{ kicker, name, text, quote, image },
  valuesSection{ kicker, heading },
  values[]{ title, text },
  stats[]{ value, label }
}`;

export const toursPageQuery = groq`*[_id == "toursPage"][0] {
  metaTitle, metaDescription,
  hero{ kicker, heading, text }
}`;

export const groupDeparturesPageQuery = groq`*[_id == "groupDeparturesPage"][0] {
  metaTitle, metaDescription,
  hero{ kicker, heading, text, "image": image.asset->url },
  how[]{ number, title, text }
}`;

export const travelToolsPageQuery = groq`*[_id == "travelToolsPage"][0] {
  metaTitle, metaDescription,
  hero{ kicker, heading, "image": image.asset->url },
  essentials[]{ label, title, text },
  faqsHeading,
  faqs[]{ question, answer }
}`;

export const contactPageQuery = groq`*[_id == "contactPage"][0] {
  metaTitle, metaDescription,
  hero{ kicker, heading, text },
  sidebarHeading, hoursText,
  "mapImage": mapImage.asset->url
}`;
