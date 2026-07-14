import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", type: "string" }),
    defineField({ name: "metaDescription", type: "text", rows: 3 }),
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "text", type: "text", rows: 3 }),
      ],
    }),
    defineField({ name: "sidebarHeading", type: "string" }),
    defineField({ name: "hoursText", title: "Office hours text", type: "string" }),
    defineField({
      name: "mapImage",
      title: "Map / location image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
});
