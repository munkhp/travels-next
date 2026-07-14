import { defineField, defineType } from "sanity";

export default defineType({
  name: "travelEvent",
  title: "Festival / Event",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "description", type: "text", rows: 8 }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Controls display order (lowest first).",
    }),
  ],
  orderings: [
    { title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", media: "image" } },
});
