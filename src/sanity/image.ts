import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

/**
 * CDN URL for a Sanity image object, honoring the crop/hotspot drawn in the
 * Studio. Plain string URLs (bundled JSON fallback) pass through unchanged.
 */
export function imageUrl(source: SanityImageSource | string | null | undefined): string | null {
  if (!source) return null;
  if (typeof source === "string") return source;
  return builder.image(source).url();
}
