import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "brand", title: "Brand", default: true },
    { name: "contact", title: "Contact details" },
    { name: "footer", title: "Footer" },
    { name: "tour", title: "Tour page" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "brandName", type: "string", group: "brand" }),
    defineField({
      name: "brandTagline",
      title: "Brand tagline (under the logo)",
      type: "string",
      group: "brand",
    }),
    defineField({ name: "headerCtaLabel", title: "Header button label", type: "string", group: "brand" }),
    defineField({ name: "phone", type: "string", group: "contact" }),
    defineField({ name: "email", type: "string", group: "contact" }),
    defineField({ name: "address", type: "text", rows: 3, group: "contact" }),
    defineField({ name: "facebookUrl", type: "url", group: "contact" }),
    defineField({ name: "footerBlurb", type: "text", rows: 3, group: "footer" }),
    defineField({
      name: "footerNote",
      title: "Footer bottom note",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "tourIncludedItems",
      title: "“What’s included” list (tour pages)",
      type: "array",
      of: [{ type: "string" }],
      group: "tour",
    }),
    defineField({
      name: "tourSidebarNote",
      title: "Tour sidebar note",
      type: "text",
      rows: 2,
      group: "tour",
    }),
    defineField({ name: "metaTitle", title: "Default meta title", type: "string", group: "seo" }),
    defineField({
      name: "metaDescription",
      title: "Default meta description",
      type: "text",
      rows: 3,
      group: "seo",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
