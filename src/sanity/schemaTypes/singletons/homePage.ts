import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "sections", title: "Sections" },
    { name: "testimonials", title: "Testimonials" },
  ],
  fields: [
    defineField({
      name: "hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "heading", type: "text", rows: 3 }),
        defineField({ name: "text", type: "text", rows: 3 }),
        defineField({ name: "primaryCtaLabel", type: "string" }),
        defineField({ name: "secondaryCtaLabel", type: "string" }),
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "specialOffer",
      title: "Special offer card (over the hero)",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "text", type: "text", rows: 2 }),
        defineField({ name: "linkLabel", type: "string" }),
        defineField({
          name: "tour",
          title: "Linked tour",
          type: "reference",
          to: [{ type: "tour" }],
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Trust strip stats",
      type: "array",
      of: [{ type: "stat" }],
      group: "sections",
    }),
    defineField({
      name: "intro",
      title: "“Who we are” intro",
      type: "object",
      group: "sections",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "paragraphs", type: "array", of: [{ type: "text", rows: 4 }] }),
        defineField({ name: "primaryCtaLabel", type: "string" }),
        defineField({ name: "secondaryCtaLabel", type: "string" }),
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({ name: "toursSection", title: "Featured tours heading", type: "sectionHeading", group: "sections" }),
    defineField({ name: "destinationsSection", title: "Destinations heading", type: "sectionHeading", group: "sections" }),
    defineField({
      name: "eventsBand",
      title: "Festivals band (dark section)",
      type: "object",
      group: "sections",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "text", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string" }),
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({ name: "eventsSection", title: "Festivals & events heading", type: "sectionHeading", group: "sections" }),
    defineField({ name: "testimonialsSection", title: "Testimonials heading", type: "sectionHeading", group: "testimonials" }),
    defineField({
      name: "testimonials",
      type: "array",
      group: "testimonials",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "quote", type: "text", rows: 4 }),
            defineField({ name: "name", type: "string" }),
            defineField({ name: "place", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "place" } },
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "Bottom call to action",
      type: "object",
      group: "sections",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "text", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});
