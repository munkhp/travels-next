import type { SchemaTypeDefinition } from "sanity";

import { sectionHeading, stat } from "./objects";
import activity from "./documents/activity";
import destination from "./documents/destination";
import itinerary from "./documents/itinerary";
import tour from "./documents/tour";
import travelEvent from "./documents/travelEvent";
import aboutPage from "./singletons/aboutPage";
import contactPage from "./singletons/contactPage";
import groupDeparturesPage from "./singletons/groupDeparturesPage";
import homePage from "./singletons/homePage";
import siteSettings from "./singletons/siteSettings";
import toursPage from "./singletons/toursPage";
import travelToolsPage from "./singletons/travelToolsPage";

/** Document types that exist exactly once and are edited in place. */
export const singletonTypes = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "toursPage",
  "groupDeparturesPage",
  "travelToolsPage",
  "contactPage",
] as const;

export const schemaTypes: SchemaTypeDefinition[] = [
  // objects
  sectionHeading,
  stat,
  // collections
  tour,
  destination,
  itinerary,
  activity,
  travelEvent,
  // singletons
  siteSettings,
  homePage,
  aboutPage,
  toursPage,
  groupDeparturesPage,
  travelToolsPage,
  contactPage,
];
