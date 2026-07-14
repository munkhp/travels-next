import { defineField, defineType } from "sanity";

export default defineType({
  name: "itinerary",
  title: "Itinerary (day program)",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 5 }),
    defineField({ name: "featuredImage", type: "image", options: { hotspot: true } }),
    defineField({
      name: "activities",
      type: "array",
      of: [{ type: "reference", to: [{ type: "activity" }] }],
    }),
    defineField({
      name: "meals",
      title: "Meals included",
      type: "array",
      of: [
        {
          type: "number",
          options: {
            list: [
              { title: "Breakfast", value: 1 },
              { title: "Lunch", value: 2 },
              { title: "Dinner", value: 3 },
            ],
          },
        },
      ],
    }),
  ],
  preview: { select: { title: "title", media: "featuredImage" } },
});
