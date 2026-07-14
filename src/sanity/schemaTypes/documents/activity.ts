import { defineField, defineType } from "sanity";

export default defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "featuredImage", type: "image", options: { hotspot: true } }),
  ],
  preview: { select: { title: "title", media: "featuredImage" } },
});
