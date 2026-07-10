import Image from "next/image";
import type { Metadata } from "next";
import { getEvents, getTours } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Travels in Mongolia",
  description:
    "One of the most professional tour operators in Mongolia — local, independent and committed to sustainable ecotourism since 2011.",
};

const values = [
  {
    title: "Local & independent",
    text: "Owned and run in Ulaanbaatar, working directly with the people who host you.",
  },
  {
    title: "Responsible tourism",
    text: "We invest in the herding communities and landscapes we travel through.",
  },
  {
    title: "Small by design",
    text: "Limited group sizes for deeper access and lighter impact.",
  },
  {
    title: "Ready when you are",
    text: "24/7 support and seasoned crews on every route across the country.",
  },
];

const stats = [
  { big: "9", label: "Signature tours" },
  { big: "2011", label: "Operating since" },
  { big: "7", label: "Regions of Mongolia" },
  { big: "24/7", label: "Support on the road" },
];

export default async function AboutPage() {
  const [tours, events] = await Promise.all([getTours(), getEvents()]);
  const storyImage = tours.find((t) => t.slug === "gobi-central-tour")
    ?.mediaUrl;
  const founderImage = events.find((e) => e.name === "Eagle Festival")
    ?.mediaUrl;

  return (
    <>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-20 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            About us
          </span>
          <h1 className="mt-4 max-w-[800px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            One of the most professional tour operators in Mongolia.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-[88px]">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            Our story
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] lg:text-[42px]">
            Built on local roots and hard-won trust.
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-soil">
            Travels in Mongolia is a local tour operator specializing in
            unforgettable Mongolian tour experiences. Since 2011 we have worked
            directly with the herding families, camp owners, drivers and guides
            who make each trip possible — no middlemen, no compromises.
          </p>
          <p className="mt-4 text-base leading-[1.8] text-soil">
            Our aim is to develop sustainable ecotourism, deliver overall
            satisfaction to our customers, and introduce Mongolia&apos;s
            culture, history and wild nature to travelers who care as much as
            we do.
          </p>
        </div>
        <div className="relative h-[360px] overflow-hidden rounded lg:h-[540px]">
          {storyImage && (
            <Image
              src={storyImage}
              alt="Mongolian landscape"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 588px, 100vw"
            />
          )}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[340px_1fr] lg:gap-14 lg:px-8 lg:py-[88px]">
          <div className="relative h-[320px] overflow-hidden rounded lg:h-[400px]">
            {founderImage && (
              <Image
                src={founderImage}
                alt="Western Mongolia"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 340px, 100vw"
              />
            )}
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
              Founder &amp; CEO
            </span>
            <h2 className="mt-3.5 font-serif text-[38px]">Doljmaa Songorov</h2>
            <p className="mt-[18px] text-base leading-[1.8] text-soil">
              A great expert in the Mongolian tourism field, Doljmaa personally
              organizes the tours and oversees the standards our guests rely
              on. Her decades in the field — and her network across every
              region — are the reason journeys with us feel effortless and go
              deeper than most.
            </p>
            <p className="mt-5 font-serif text-[19px] italic text-rust">
              &ldquo;We don&apos;t sell Mongolia. We introduce you to it, the
              way we know it.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-[88px]">
        <div className="mb-[52px] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            What guides us
          </span>
          <h2 className="mt-3.5 font-serif text-4xl lg:text-[44px]">
            Our values
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-amber pt-5">
              <h3 className="font-serif text-[23px]">{v.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-stone">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-6 py-14 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-[40px] font-light text-gold">
                {s.big}
              </div>
              <div className="mt-1 text-[12.5px] text-cream/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
