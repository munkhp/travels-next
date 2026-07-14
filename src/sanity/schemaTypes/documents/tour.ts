import { defineField, defineType } from "sanity";

export default defineType({
  name: "tour",
  title: "Tour",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "pricing", title: "Pricing & departures" },
    { name: "days", title: "Day by day" },
    { name: "media", title: "Media" },
  ],
  fields: [
    defineField({ name: "name", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      group: "content",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", type: "text", rows: 5, group: "content" }),
    defineField({
      name: "destination",
      type: "reference",
      to: [{ type: "destination" }],
      group: "content",
    }),
    defineField({ name: "duration", title: "Duration (days)", type: "number", group: "content" }),
    defineField({
      name: "reasons",
      title: "Tour highlights",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
    }),
    defineField({
      name: "order",
      type: "number",
      group: "content",
      description: "Controls display order (lowest first). The first three tours are featured on the home page.",
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      group: "media",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      group: "media",
    }),
    defineField({
      name: "prices",
      title: "Prices (per person, by group size)",
      type: "array",
      group: "pricing",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "amount", title: "Amount (USD)", type: "number" }),
          ],
          preview: {
            select: { title: "label", amount: "amount" },
            prepare: ({ title, amount }) => ({ title, subtitle: amount != null ? `$${amount}` : "" }),
          },
        },
      ],
    }),
    defineField({
      name: "supplement",
      title: "Single supplement (USD)",
      type: "number",
      group: "pricing",
    }),
    defineField({ name: "group", title: "Group departures offered", type: "boolean", group: "pricing" }),
    defineField({ name: "groupAvailable", title: "Group seats available", type: "boolean", group: "pricing" }),
    defineField({ name: "groupPrice", title: "Group departure price (USD)", type: "number", group: "pricing" }),
    defineField({
      name: "schedules",
      title: "Group departure dates",
      type: "array",
      group: "pricing",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "start", title: "Start (e.g. Jun 15)", type: "string" }),
            defineField({ name: "end", title: "End (e.g. Jun 22)", type: "string" }),
          ],
          preview: {
            select: { start: "start", end: "end" },
            prepare: ({ start, end }) => ({ title: `${start ?? ""} – ${end ?? ""}` }),
          },
        },
      ],
    }),
    defineField({
      name: "days",
      title: "Day by day",
      type: "array",
      group: "days",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label (e.g. Day 01)", type: "string" }),
            defineField({
              name: "itinerary",
              type: "reference",
              to: [{ type: "itinerary" }],
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "itinerary.title" },
          },
        },
      ],
    }),
  ],
  orderings: [
    { title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", media: "image" } },
});
