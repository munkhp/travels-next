export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://travelsinmongolia.com"
).replace(/\/$/, "");

export const SITE_NAME = "Travels in Mongolia";

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Static pages that belong in the sitemap and llms.txt. */
export const STATIC_PAGES = [
  { path: "/", name: "Home", priority: 1 },
  { path: "/tours", name: "Tours", priority: 0.9 },
  { path: "/group-departures", name: "Group departures", priority: 0.8 },
  { path: "/travel-tools", name: "Travel tools and FAQ", priority: 0.7 },
  { path: "/about", name: "About us", priority: 0.6 },
  { path: "/contact", name: "Contact", priority: 0.6 },
] as const;
