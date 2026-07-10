import Image from "next/image";
import type { Metadata } from "next";
import { getEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Travel Tools — Travels in Mongolia",
  description:
    "Everything you need to know before you go — visas, timing, packing, health, money and connectivity in Mongolia.",
};

const essentials = [
  {
    label: "Documents",
    title: "Visas & entry",
    text: "Many nationalities enter visa-free for up to 30 days; we'll confirm your requirements and provide any invitation letters needed.",
  },
  {
    label: "Timing",
    title: "When to travel",
    text: "June to September brings green steppe and warm days. October is eagle-festival season. Winter travel is possible for the intrepid.",
  },
  {
    label: "Packing",
    title: "What to bring",
    text: "Layers for wide temperature swings, sturdy footwear, sun protection and a good camera. We send a full packing list on booking.",
  },
  {
    label: "Health",
    title: "Staying well",
    text: "No mandatory vaccinations, but routine ones should be current. We carry first-aid kits and satellite communication on remote routes.",
  },
  {
    label: "Money",
    title: "Currency & tipping",
    text: "The local currency is the tögrög. Carry some cash for remote areas; cards work in Ulaanbaatar. Tipping is appreciated, never expected.",
  },
  {
    label: "Connectivity",
    title: "Staying in touch",
    text: "Mobile coverage is good near towns and patchy in the wild. We provide satellite contact on all remote departures.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For festival departures and peak summer we recommend six to nine months. Tailored private trips can often be arranged with less notice — get in touch and we'll advise honestly.",
  },
  {
    q: "Are your trips private or group?",
    a: "Both. Most journeys are run privately just for you, at your own pace. We also offer a limited number of small-group departures each year on fixed dates.",
  },
  {
    q: "What is the accommodation like?",
    a: "A mix of comfortable hotels in Ulaanbaatar and authentic tourist ger camps in the countryside — real Mongolian felt tents with proper beds, and shared or private facilities depending on the camp.",
  },
  {
    q: "Is Mongolia suitable for families or older travelers?",
    a: "Yes. We tailor pace, driving distances and activity levels to your group. Tell us about your travelers and we'll design accordingly.",
  },
  {
    q: "How do payments and deposits work?",
    a: "A deposit secures your dates, with the balance due before travel. We'll set out clear terms in writing before anything is confirmed.",
  },
  {
    q: "Can you arrange flights within Mongolia?",
    a: "Absolutely — domestic flights to the Gobi, west and north are built into many itineraries and we handle all the booking for you.",
  },
];

export default async function TravelToolsPage() {
  const events = await getEvents();
  const heroImage = events.find((e) => e.name === "Naadam Festival")?.mediaUrl;

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-cream">
        {heroImage && (
          <Image
            src={heroImage}
            alt="Mongolian festival"
            fill
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14120f]/85 to-[#14120f]/55" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-[72px] pt-[88px] lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            Travel tools
          </span>
          <h1 className="mt-4 max-w-[720px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            Everything you need to know before you go.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-12 pt-[72px] lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {essentials.map((e) => (
            <div key={e.label} className="border border-ink/10 bg-white p-7">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-rust">
                {e.label}
              </span>
              <h3 className="mt-3 font-serif text-2xl">{e.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-stone">
                {e.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[860px] px-6 pb-24 pt-8 lg:px-8">
        <h2 className="mb-9 text-center font-serif text-[38px]">
          Frequently asked
        </h2>
        {faqs.map((f) => (
          <details key={f.q} className="border-b border-ink/15 py-[22px]">
            <summary className="flex items-center justify-between gap-5">
              <span className="font-serif text-[21px] text-ink">{f.q}</span>
              <span className="faq-plus shrink-0 text-[22px] text-amber">
                +
              </span>
            </summary>
            <p className="mt-3.5 max-w-[680px] text-[15px] leading-[1.75] text-stone">
              {f.a}
            </p>
          </details>
        ))}
      </section>
    </>
  );
}
