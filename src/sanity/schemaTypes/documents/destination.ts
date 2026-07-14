import { defineField, defineType } from "sanity";

export default defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "tagline",
      type: "string",
      description: "Short line shown under the destination name on the home page.",
    }),
    defineField({
      name: "featuredImage",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
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
  preview: { select: { title: "title", media: "featuredImage" } },
});
