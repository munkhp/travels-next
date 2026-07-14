import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getToursPageContent } from "@/lib/content";
import { formatPrice, getDestinationMap, getTours, minPrice } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getToursPageContent();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default async function ToursPage() {
  const [content, tours, destinationMap] = await Promise.all([
    getToursPageContent(),
    getTours(),
    getDestinationMap(),
  ]);

  return (
    <>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-20 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            {content.hero.kicker}
          </span>
          <h1 className="mt-4 max-w-[720px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            {content.hero.heading}
          </h1>
          <p className="mt-5 max-w-[560px] text-base leading-[1.7] text-cream/80">
            {content.hero.text}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-24 pt-10 lg:px-8">
        <div className="grid grid-cols-1 gap-[22px]">
          {tours.map((t) => (
            <Link
              key={t._id}
              href={`/tours/${t.slug}`}
              className="group grid grid-cols-1 border border-ink/10 bg-white transition-shadow hover:shadow-lg md:grid-cols-[400px_1fr]"
            >
              <div className="relative min-h-[240px] md:min-h-[280px]">
                {t.mediaUrl && (
                  <Image
                    src={t.mediaUrl}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 400px, 100vw"
                  />
                )}
                <span className="absolute left-4 top-4 bg-[#211f1c]/85 px-[11px] py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  {destinationMap[t.destination] ?? "Mongolia"}
                </span>
              </div>
              <div className="flex flex-col p-7 md:p-[34px]">
                <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.05em] text-mist">
                  <span>{t.duration} days</span>
                  <span>·</span>
                  <span>{t.group ? "Private or small group" : "Private"}</span>
                  <span>·</span>
                  <span>from {formatPrice(minPrice(t))}</span>
                </div>
                <h3 className="mt-3.5 font-serif text-[26px] leading-[1.1] lg:text-[32px]">
                  {t.name}
                </h3>
                <p className="mt-3 max-w-[560px] text-[15px] leading-[1.7] text-stone">
                  {t.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {(t.reasons ?? []).slice(0, 3).map((r) => (
                    <span
                      key={r}
                      className="rounded-full bg-amber/15 px-[11px] py-[5px] text-[11.5px] text-rust"
                    >
                      {r}
                    </span>
                  ))}
                </div>
                <span className="mt-auto pt-[18px] text-sm font-semibold text-rust group-hover:underline">
                  View full itinerary →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
