"use client";

import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes, singletonTypes } from "./src/sanity/schemaTypes";

const singletonSet = new Set<string>(singletonTypes);

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem().title("Home page").child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem().title("About page").child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem().title("Tours page").child(S.document().schemaType("toursPage").documentId("toursPage")),
      S.listItem()
        .title("Group departures page")
        .child(S.document().schemaType("groupDeparturesPage").documentId("groupDeparturesPage")),
      S.listItem()
        .title("Travel tools page")
        .child(S.document().schemaType("travelToolsPage").documentId("travelToolsPage")),
      S.listItem()
        .title("Contact page")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonSet.has(String(item.getId()))
      ),
    ]);

export default defineConfig({
  name: "travels-in-mongolia",
  title: "Travels in Mongolia",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Singletons cannot be created or duplicated from the "new document" menu.
    templates: (templates) => templates.filter((t) => !singletonSet.has(t.schemaType)),
  },
  document: {
    actions: (actions, context) =>
      singletonSet.has(context.schemaType)
        ? actions.filter((a) => !["delete", "duplicate", "unpublish"].includes(a.action ?? ""))
        : actions,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
