import type { MetadataRoute } from "next";
import { getTours } from "@/lib/data";
import { STATIC_PAGES, absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tours = await getTours();
  const now = new Date();
  return [
    ...STATIC_PAGES.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...tours.map((t) => ({
      url: absoluteUrl(`/tours/${t.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
