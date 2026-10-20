import { getSiteSettings, getTravelToolsContent } from "@/lib/content";
import {
  formatPrice,
  getDestinationMap,
  getTourDays,
  getTours,
} from "@/lib/data";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export async function GET() {
  const [settings, tools, tours, destinations] = await Promise.all([
    getSiteSettings(),
    getTravelToolsContent(),
    getTours(),
    getDestinationMap(),
  ]);

  const out: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${settings.metaDescription}`,
    "",
    `Address: ${settings.address.replace(/\n/g, " ")}`,
    `Email: ${settings.email}`,
    `Phone: ${settings.phone}`,
    "",
    "## Included in every tour",
    ...settings.tourIncludedItems.map((i) => `- ${i}`),
    "",
    "## Tours",
    "",
  ];

  for (const t of tours) {
    const days = await getTourDays(t);
    out.push(
      `### ${t.name}`,
      `URL: ${absoluteUrl(`/tours/${t.slug}`)}`,
      `Region: ${destinations[t.destination] ?? "Mongolia"}`,
      `Duration: ${t.duration} days`,
      ...(t.prices?.length
        ? [`Prices (per person): ${t.prices.map((p) => `${p.label} ${formatPrice(p.amount)}`).join("; ")}`]
        : []),
      "",
      t.summary.trim(),
      ""
    );
    if (days.length) {
      out.push("Itinerary:");
      for (const d of days) {
        out.push(
          `- ${d.label}${d.itinerary ? `: ${d.itinerary.title}. ${d.itinerary.description.replace(/\s+/g, " ").trim()}` : ""}`
        );
      }
      out.push("");
    }
  }

  out.push("## Travel information", "");
  for (const e of tools.essentials) out.push(`- ${e.title}: ${e.text}`);
  out.push("", "## Frequently asked questions", "");
  for (const f of tools.faqs) out.push(`Q: ${f.question}`, `A: ${f.answer}`, "");

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
