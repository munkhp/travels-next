import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { formatPrice, getTours, minPrice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Group Departures — Travels in Mongolia",
  description:
    "Join a small group on a fixed departure — scheduled dates timed around Mongolia's festivals and finest seasons.",
};

const groupHow = [
  {
    n: "01",
    title: "Guaranteed to run",
    text: "Once a date is listed it departs — no last-minute cancellations for low numbers.",
  },
  {
    n: "02",
    title: "Maximum eight guests",
    text: "Small enough to stay with nomadic families and keep the experience personal.",
  },
  {
    n: "03",
    title: "Reserved festival access",
    text: "We hold seats and homestays at Mongolia's most in-demand events.",
  },
];

export default async function GroupDeparturesPage() {
  const tours = await getTours();
  const groupTours = tours.filter(
    (t) => t.group && (t.schedules?.length ?? 0) > 0
  );
  const heroImage = tours.find((t) => t.slug === "khuvsgul-lake-tour")?.mediaUrl;

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-cream">
        {heroImage && (
          <Image
            src={heroImage}
            alt="Group tour in Mongolia"
            fill
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14120f]/85 to-[#14120f]/55" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-[72px] pt-[88px] lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            Group departures
          </span>
          <h1 className="mt-4 max-w-[720px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            Join a small group on a fixed departure.
          </h1>
          <p className="mt-5 max-w-[580px] text-base leading-[1.7] text-cream/85">
            A handful of set dates each year — timed around Mongolia&apos;s
            festivals and finest seasons. Maximum eight guests, guaranteed to
            run.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1040px] px-6 pb-10 pt-16 lg:px-8">
        <div className="flex flex-col gap-8">
          {groupTours.map((t) => (
            <div key={t._id} className="border border-ink/10 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 px-7 py-6">
                <div>
                  <h3 className="font-serif text-[23px]">{t.name}</h3>
                  <p className="mt-1 text-[13.5px] text-stone">
                    {t.duration} days · from{" "}
                    {formatPrice(t.groupPrice ?? minPrice(t))} per person on
                    group departures
                  </p>
                </div>
                <Link
                  href={`/tours/${t.slug}#book`}
                  className="rounded-[3px] bg-amber px-5 py-2.5 text-[13px] font-semibold text-charcoal transition-opacity hover:opacity-90"
                >
                  Reserve →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {t.schedules.map((s, i) => (
                  <div
                    key={s._id}
                    className={`px-7 py-5 ${
                      i % 2 === 0 ? "bg-cream" : "bg-sand/60"
                    }`}
                  >
                    <div className="font-serif text-xl">
                      {s.start.trim()} – {s.end.trim()}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a7c59]">
                      Available
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {groupTours.length === 0 && (
            <p className="text-center text-stone">
              No scheduled group departures right now —{" "}
              <Link href="/contact" className="text-rust underline">
                contact us
              </Link>{" "}
              for a private departure on your dates.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1040px] px-6 pb-24 pt-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groupHow.map((g) => (
            <div key={g.n} className="bg-sand p-7">
              <div className="font-serif text-[34px] text-amber">{g.n}</div>
              <h3 className="mt-2.5 font-serif text-[21px]">{g.title}</h3>
              <p className="mt-2 text-sm leading-[1.65] text-stone">{g.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
