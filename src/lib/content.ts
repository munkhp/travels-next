import pageContent from "@/data/pageContent.json";
import { fromSanity, sanityFetch } from "@/sanity/client";
import { imageUrl } from "@/sanity/image";
import {
  aboutPageQuery,
  contactPageQuery,
  groupDeparturesPageQuery,
  homePageQuery,
  siteSettingsQuery,
  toursPageQuery,
  travelToolsPageQuery,
} from "@/sanity/queries";

/**
 * Editable page copy. Every text and image on the static pages is served from
 * the matching Sanity singleton; src/data/pageContent.json provides the
 * defaults used before Sanity is configured (and fills any field an editor
 * clears in the Studio).
 */

export type SiteSettings = typeof pageContent.siteSettings;
export type HomeContent = typeof pageContent.homePage;
export type AboutContent = typeof pageContent.aboutPage;
export type ToursPageContent = typeof pageContent.toursPage;
export type GroupDeparturesContent = typeof pageContent.groupDeparturesPage;
export type TravelToolsContent = typeof pageContent.travelToolsPage;
export type ContactContent = typeof pageContent.contactPage;

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Overlay a (possibly partial, null-holed) Sanity document onto the defaults. */
function mergeWithDefaults<T>(defaults: T, overlay: unknown): T {
  if (overlay === null || overlay === undefined) return defaults;
  if (isObject(defaults) && isObject(overlay)) {
    const merged: Record<string, unknown> = {};
    for (const key of Object.keys(defaults)) {
      merged[key] = mergeWithDefaults(
        (defaults as Record<string, unknown>)[key],
        overlay[key]
      );
    }
    return merged as T;
  }
  return overlay as T;
}

async function getContent<T>(defaults: T, query: string): Promise<T> {
  const doc = await fromSanity(() => sanityFetch<unknown>(query));
  return mergeWithDefaults(defaults, doc);
}

export function getSiteSettings(): Promise<SiteSettings> {
  return getContent(pageContent.siteSettings, siteSettingsQuery);
}

export function getHomeContent(): Promise<HomeContent> {
  return getContent(pageContent.homePage, homePageQuery);
}

export async function getAboutContent(): Promise<AboutContent> {
  const content = await getContent(pageContent.aboutPage, aboutPageQuery);
  // founder.image arrives from Sanity as an image object (so the Studio crop
  // survives); resolve it to a CDN URL here to keep the page string-typed.
  return {
    ...content,
    founder: {
      ...content.founder,
      image: imageUrl(content.founder.image) ?? pageContent.aboutPage.founder.image,
    },
  };
}

export function getToursPageContent(): Promise<ToursPageContent> {
  return getContent(pageContent.toursPage, toursPageQuery);
}

export function getGroupDeparturesContent(): Promise<GroupDeparturesContent> {
  return getContent(pageContent.groupDeparturesPage, groupDeparturesPageQuery);
}

export function getTravelToolsContent(): Promise<TravelToolsContent> {
  return getContent(pageContent.travelToolsPage, travelToolsPageQuery);
}

export function getContactContent(): Promise<ContactContent> {
  return getContent(pageContent.contactPage, contactPageQuery);
}
