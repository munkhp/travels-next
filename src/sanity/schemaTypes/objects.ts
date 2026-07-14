import { defineField, defineType } from "sanity";

/** Small reusable objects shared by the page singletons. */

export const sectionHeading = defineType({
  name: "sectionHeading",
  title: "Section heading",
  type: "object",
  fields: [
    defineField({ name: "kicker", title: "Kicker (small label above)", type: "string" }),
    defineField({ name: "heading", type: "string" }),
  ],
});

export const stat = defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Big value (e.g. 24/7)", type: "string" }),
    defineField({ name: "label", type: "string" }),
  ],
  preview: {
    select: { value: "value", label: "label" },
    prepare: ({ value, label }) => ({ title: `${value ?? ""} — ${label ?? ""}` }),
  },
});
