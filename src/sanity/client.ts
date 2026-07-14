import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

/** True once NEXT_PUBLIC_SANITY_PROJECT_ID is set — until then the app serves the bundled JSON snapshot. */
export const sanityConfigured = Boolean(projectId);

export const client = createClient({
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion,
  useCdn: false,
});

/** Fetch published content with ISR — edits in the Studio go live within a minute. */
export function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  return client.fetch<T>(query, params, { next: { revalidate: 60 } });
}

/** Run a Sanity read, returning null when Sanity is unconfigured or unreachable. */
export async function fromSanity<T>(fn: () => Promise<T>): Promise<T | null> {
  if (!sanityConfigured) return null;
  try {
    return await fn();
  } catch (err) {
    console.error("Sanity unavailable, falling back to bundled data:", err);
    return null;
  }
}
