import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", type: "string" }),
    defineField({ name: "metaDescription", type: "text", rows: 3 }),
    defineField({ name: "hero", type: "sectionHeading" }),
    defineField({
      name: "story",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "paragraphs", type: "array", of: [{ type: "text", rows: 4 }] }),
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "founder",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "name", type: "string" }),
        defineField({ name: "text", type: "text", rows: 5 }),
        defineField({ name: "quote", type: "text", rows: 2 }),
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({ name: "valuesSection", title: "Values heading", type: "sectionHeading" }),
    defineField({
      name: "values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({ name: "stats", type: "array", of: [{ type: "stat" }] }),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
});
