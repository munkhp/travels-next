import { defineField, defineType } from "sanity";

export default defineType({
  name: "travelToolsPage",
  title: "Travel tools page",
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
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "essentials",
      title: "Essentials cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Small label (e.g. Documents)", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "title", subtitle: "label" } },
        },
      ],
    }),
    defineField({ name: "faqsHeading", type: "string" }),
    defineField({
      name: "faqs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", type: "string" }),
            defineField({ name: "answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Travel tools page" }) },
});
