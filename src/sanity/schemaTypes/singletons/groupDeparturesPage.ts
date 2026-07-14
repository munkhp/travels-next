import { defineField, defineType } from "sanity";

export default defineType({
  name: "groupDeparturesPage",
  title: "Group departures page",
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
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "how",
      title: "“How it works” cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number label (e.g. 01)", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "number" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Group departures page" }) },
});
