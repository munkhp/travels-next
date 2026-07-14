import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { getSiteSettings } from "@/lib/content";
import {
  MEAL_LABELS,
  formatPrice,
  getDestinationMap,
  getTourBySlug,
  getTourDays,
  getTours,
  minPrice,
} from "@/lib/data";

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = await getTourBySlug(params.slug);
  if (!tour) return { title: "Tour not found — Travels in Mongolia" };
  return {
    title: `${tour.name} — Travels in Mongolia`,
    description: tour.summary,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = await getTourBySlug(params.slug);
  if (!tour) notFound();

  const [days, destinationMap, settings] = await Promise.all([
    getTourDays(tour),
    getDestinationMap(),
    getSiteSettings(),
  ]);
  const region = destinationMap[tour.destination] ?? "Mongolia";

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[440px] flex-col justify-end bg-charcoal lg:h-[60vh]">
        {tour.mediaUrl && (
          <Image
            src={tour.mediaUrl}
            alt={tour.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14120f]/30 to-[#14120f]/80" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-11 pt-24 lg:px-8">
          <Link
            href="/tours"
            className="mb-4 inline-block text-[13px] text-gold hover:underline"
          >
            ← All tours
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
            {region}
          </div>
          <h1 className="mt-3 max-w-[820px] font-serif text-[40px] font-light text-cream lg:text-6xl">
            {tour.name}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-6 pb-24 pt-14 lg:grid-cols-[1fr_360px] lg:gap-14 lg:px-8">
        <div>
          {/* Facts */}
          <div className="flex flex-wrap gap-9 border-b border-ink/10 pb-8">
            {[
              { k: "Duration", v: `${tour.duration} days` },
              { k: "Region", v: region },
              { k: "From", v: formatPrice(minPrice(tour)) },
              ...(tour.supplement
                ? [{ k: "Single supplement", v: formatPrice(tour.supplement) }]
                : []),
            ].map((f) => (
              <div key={f.k}>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
                  {f.k}
                </div>
                <div className="mt-1.5 font-serif text-2xl">{f.v}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <h2 className="mt-10 font-serif text-[32px]">Overview</h2>
          <p className="mt-4 text-base leading-[1.8] text-soil">
            {tour.summary}
          </p>

          {/* Highlights */}
          {tour.reasons?.length > 0 && (
            <>
              <h2 className="mt-11 font-serif text-[32px]">Tour highlights</h2>
              <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {tour.reasons.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="mt-2 h-[7px] w-[7px] shrink-0 rounded-full bg-amber" />
                    <span className="text-[15px] leading-[1.6] text-soil">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Day by day */}
          {days.length > 0 && (
            <>
              <h2 className="mt-12 font-serif text-[32px]">Day by day</h2>
              <div className="mt-5">
                {days.map((d, i) => (
                  <div
                    key={`${d.label}-${i}`}
                    className="grid grid-cols-1 gap-4 border-b border-ink/10 py-[22px] sm:grid-cols-[90px_1fr] sm:gap-6"
                  >
                    <div className="pt-[3px] font-mono text-xs tracking-[0.05em] text-rust">
                      {d.label.toUpperCase()}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-start gap-4">
                        <h3 className="font-serif text-[22px]">
                          {d.itinerary?.title ?? d.label}
                        </h3>
                      </div>
                      {d.itinerary?.description && (
                        <p className="mt-2 text-[14.5px] leading-[1.7] text-stone">
                          {d.itinerary.description}
                        </p>
                      )}
                      {(d.activities.length > 0 ||
                        (d.itinerary?.meals?.length ?? 0) > 0) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {d.activities.map((a) => (
                            <span
                              key={a._id}
                              className="rounded-full bg-amber/15 px-[11px] py-[5px] text-[11.5px] text-rust"
                            >
                              {a.title}
                            </span>
                          ))}
                          {(d.itinerary?.meals ?? []).map((m) =>
                            MEAL_LABELS[m] ? (
                              <span
                                key={`meal-${m}`}
                                className="rounded-full border border-ink/15 px-[11px] py-[5px] text-[11.5px] text-stone"
                              >
                                {MEAL_LABELS[m]}
                              </span>
                            ) : null
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Included */}
          <h2 className="mt-12 font-serif text-[32px]">What&apos;s included</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {settings.tourIncludedItems.map((i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-[14.5px] text-soil"
              >
                <span className="text-rust">✓</span>
                {i}
              </div>
            ))}
          </div>

          {/* Prices */}
          {tour.prices?.length > 0 && (
            <>
              <h2 className="mt-12 font-serif text-[32px]">Prices</h2>
              <div className="mt-5 overflow-hidden border border-ink/10">
                {tour.prices.map((p, i) => (
                  <div
                    key={p._id}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i % 2 === 0 ? "bg-cream" : "bg-sand/60"
                    }`}
                  >
                    <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-soil">
                      {p.label}
                    </span>
                    <span className="font-serif text-xl">
                      {formatPrice(p.amount)}{" "}
                      <span className="text-sm text-mist">per person</span>
                    </span>
                  </div>
                ))}
              </div>
              {tour.supplement ? (
                <p className="mt-3 text-[13px] text-mist">
                  Single room / ger supplement: {formatPrice(tour.supplement)}
                </p>
              ) : null}
            </>
          )}

          {/* Departures */}
          {tour.schedules?.length > 0 && (
            <>
              <h2 className="mt-12 font-serif text-[32px]">
                {new Date().getFullYear()} group departures
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {tour.schedules.map((s) => (
                  <div
                    key={s._id}
                    className="border border-ink/15 bg-cream px-5 py-3 font-mono text-[13px] text-soil"
                  >
                    {s.start.trim()} – {s.end.trim()}
                  </div>
                ))}
              </div>
              {tour.groupPrice ? (
                <p className="mt-3 text-[14px] text-soil">
                  Group departure price:{" "}
                  <span className="font-semibold">
                    {formatPrice(tour.groupPrice)}
                  </span>{" "}
                  per person
                </p>
              ) : null}
            </>
          )}

          {/* Gallery */}
          {tour.mediaUrls?.length > 1 && (
            <>
              <h2 className="mt-12 font-serif text-[32px]">Gallery</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tour.mediaUrls.map((url) => (
                  <div key={url} className="relative h-[160px] sm:h-[190px]">
                    <Image
                      src={url}
                      alt={tour.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Booking */}
          <h2 id="book" className="mt-14 scroll-mt-28 font-serif text-[32px]">
            Book this tour
          </h2>
          <div className="mt-6">
            <Suspense>
              <BookingForm tourName={tour.name} />
            </Suspense>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-charcoal p-8 text-cream lg:sticky lg:top-[100px]">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
            From
          </div>
          <div className="mt-1 font-serif text-[44px] font-light">
            {formatPrice(minPrice(tour))}
          </div>
          <div className="text-[12.5px] text-cream/65">
            per person · privately guided
          </div>
          <div className="my-6 h-px bg-cream/15" />
          <div className="flex flex-col gap-3.5 text-[13.5px]">
            <div className="flex justify-between">
              <span className="text-cream/70">Duration</span>
              <span>{tour.duration} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/70">Group size</span>
              <span>{tour.group ? "Private / 2–8" : "Private"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/70">Region</span>
              <span>{region}</span>
            </div>
            {tour.groupPrice ? (
              <div className="flex justify-between">
                <span className="text-cream/70">Group price</span>
                <span>{formatPrice(tour.groupPrice)}</span>
              </div>
            ) : null}
          </div>
          <a
            href="#book"
            className="mt-[26px] block rounded-[3px] bg-amber py-3.5 text-center text-sm font-semibold text-charcoal transition-opacity hover:opacity-90"
          >
            Enquire about this trip
          </a>
          <Link
            href="/contact"
            className="mt-2.5 block text-center text-[13px] text-gold hover:underline"
          >
            Request a tailored version →
          </Link>
          <div className="mt-[22px] border-t border-cream/15 pt-5 text-[12.5px] leading-[1.6] text-cream/70">
            {settings.tourSidebarNote}
            <br />
            <span className="text-gold">{settings.phone}</span>
          </div>
        </aside>
      </section>
    </>
  );
}
