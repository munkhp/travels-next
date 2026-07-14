import { defineField, defineType } from "sanity";

export default defineType({
  name: "toursPage",
  title: "Tours page",
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
  ],
  preview: { prepare: () => ({ title: "Tours page" }) },
});
