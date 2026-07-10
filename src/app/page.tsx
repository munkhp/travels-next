import Image from "next/image";
import Link from "next/link";
import {
  formatPrice,
  getDestinationMap,
  getDestinations,
  getEvents,
  getTours,
  minPrice,
} from "@/lib/data";

const stats = [
  { big: "9", label: "Signature tours" },
  { big: "2011", label: "Operating since" },
  { big: "7", label: "Regions of Mongolia" },
  { big: "24/7", label: "Support on the road" },
];

const destinationTags: Record<string, string> = {
  "Gobi Desert": "Dunes & canyons",
  "Central Mongolia": "Imperial heartland",
  "Northern Mongolia": "Lakes & taiga",
  "Central & Northern Mongolia": "Best of both worlds",
  "Around Ulaanbaatar": "City & national parks",
  "Gobi & Central Mongolia": "Desert to steppe",
  "Western Mongolia": "Altai & eagle hunters",
};

const testimonials = [
  {
    quote:
      "We had a great time traveling around the Gobi. The driver was skilled and friendly, the guide knowledgeable and fluent. Every destination was amazing and diverse — strongly recommend Travels in Mongolia to anyone looking for adventure.",
    name: "Felix Assouly",
    place: "Paris, France",
  },
  {
    quote:
      "Very professional throughout our 7-day Central Mongolia tour. Horse riding, camel riding, visiting nomadic families — we will never forget this. We highly recommend them.",
    name: "Kim Jon Pak",
    place: "Seoul, South Korea",
  },
  {
    quote:
      "From the first email to the last goodbye, everything was seamless. The small-group size and the access to local families made it feel personal, not packaged. Exceptional.",
    name: "Sofia Marchetti",
    place: "Milan, Italy",
  },
];

export default async function HomePage() {
  const [tours, destinations, events, destinationMap] = await Promise.all([
    getTours(),
    getDestinations(),
    getEvents(),
    getDestinationMap(),
  ]);
  const featured = tours.slice(0, 3);
  const eagleTour = tours.find((t) => t.slug === "golden-eagle-festival-tour");
  const heroImage = tours[0]?.mediaUrl;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[600px] flex-col bg-charcoal lg:h-[86vh]">
        {heroImage && (
          <Image
            src={heroImage}
            alt="Mongolian landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14120f]/80 via-[#14120f]/40 to-[#14120f]/10" />
        <div className="relative mx-auto flex h-full w-full max-w-[1240px] flex-1 flex-col justify-center px-6 py-20 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.34em] text-gold">
            One of Mongolia&apos;s leading tour operators
          </span>
          <h1 className="mt-5 max-w-[840px] font-serif text-[44px] font-light leading-[1.05] text-cream sm:text-[60px] lg:text-[74px] lg:leading-[1.03]">
            Safe, reliable and
            <br />
            adventurous journeys
            <br />
            across Mongolia.
          </h1>
          <p className="mt-6 max-w-[500px] text-[17px] leading-[1.65] text-cream/90">
            Delivering unforgettable, responsibly run tours since 2011 — to
            every region of Mongolia, with well-trained guides and drivers who
            know the land.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/tours"
              className="rounded-[3px] bg-amber px-7 py-[15px] text-sm font-semibold tracking-[0.03em] text-charcoal transition-opacity hover:opacity-90"
            >
              Explore our tours
            </Link>
            <Link
              href="/contact"
              className="rounded-[3px] border border-cream/45 px-7 py-[15px] text-sm font-medium tracking-[0.03em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Contact us
            </Link>
          </div>
        </div>

        {eagleTour && (
          <Link
            href={`/tours/${eagleTour.slug}`}
            className="relative mx-6 mb-8 block w-auto border border-gold/40 bg-[#211f1c]/70 p-[22px] backdrop-blur-sm lg:absolute lg:bottom-[34px] lg:right-8 lg:mx-0 lg:mb-0 lg:w-[300px]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
              Special offer
            </span>
            <h3 className="mt-2.5 font-serif text-2xl text-cream">
              Golden Eagle Festival
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-cream/80">
              Explore western Mongolian cultures and customs — limited October
              places.
            </p>
            <span className="mt-3.5 inline-block text-[12.5px] tracking-[0.04em] text-gold">
              Learn more →
            </span>
          </Link>
        )}
      </section>

      {/* Trust strip */}
      <section className="bg-charcoal text-cream">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-6 py-9 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-[38px] font-light text-gold">
                {s.big}
              </div>
              <div className="mt-1 text-[12.5px] tracking-[0.03em] text-cream/75">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative h-[340px] overflow-hidden rounded lg:h-[520px]">
          {tours[1]?.mediaUrls?.[0] && (
            <Image
              src={tours[1].mediaUrls[0]}
              alt="Nomadic life in Mongolia"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 588px, 100vw"
            />
          )}
        </div>
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            Who we are
          </span>
          <h2 className="mt-[18px] max-w-[460px] font-serif text-4xl leading-[1.08] lg:text-[46px]">
            A local operator with an insider&apos;s Mongolia.
          </h2>
          <p className="mt-[22px] text-base leading-[1.75] text-soil">
            Travels in Mongolia specializes in unforgettable Mongolian tour
            experiences. We develop sustainable ecotourism and introduce
            Mongolia&apos;s culture, history and wild nature to travelers from
            around the world.
          </p>
          <p className="mt-4 text-base leading-[1.75] text-soil">
            Founded and led by Doljmaa Songorov, a great expert in Mongolian
            tourism, our professional team keeps groups small, standards high
            and logistics invisible — so you&apos;re free to simply be present.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3.5">
            <Link
              href="/about"
              className="rounded-[3px] border border-ink px-[26px] py-[13px] text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Our story
            </Link>
            <Link
              href="/tours"
              className="px-2 py-[13px] text-sm font-semibold text-rust hover:underline"
            >
              View all tours →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-[92px]">
          <div className="mb-[46px] flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
                Our tours
              </span>
              <h2 className="mt-3.5 font-serif text-4xl lg:text-[46px]">
                Go on an unforgettable adventure.
              </h2>
            </div>
            <Link
              href="/tours"
              className="pb-2 text-sm font-semibold text-ink hover:text-rust"
            >
              All tours →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <Link
                key={t._id}
                href={`/tours/${t.slug}`}
                className="group border border-ink/10 bg-cream transition-shadow hover:shadow-lg"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={t.mediaUrl}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 396px, (min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute left-3.5 top-3.5 bg-[#211f1c]/80 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {destinationMap[t.destination] ?? "Mongolia"}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between font-mono text-[11px] tracking-[0.05em] text-mist">
                    <span>{t.duration} days</span>
                    <span>from {formatPrice(minPrice(t))}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-[25px] leading-[1.15]">
                    {t.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone">
                    {t.summary.length > 140
                      ? `${t.summary.slice(0, 140).trimEnd()}…`
                      : t.summary}
                  </p>
                  <span className="mt-4 inline-block text-[13px] font-semibold text-rust group-hover:underline">
                    View tour →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            Seven regions, one country
          </span>
          <h2 className="mt-3.5 font-serif text-4xl lg:text-[46px]">
            Explore by destination
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Link
              key={d._id}
              href="/tours"
              className={`group relative h-[280px] overflow-hidden ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={d.featuredImage}
                alt={d.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#14120f]/85" />
              <div className="absolute bottom-[18px] left-5">
                <h3 className="font-serif text-[26px] text-cream">{d.title}</h3>
                <span className="text-[12.5px] text-cream/80">
                  {destinationTags[d.title] ?? "Discover the region"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Events band */}
      <section className="relative min-h-[460px] bg-charcoal">
        {events[1]?.mediaUrl && (
          <Image
            src={events[1].mediaUrl}
            alt="Mongolian festival"
            fill
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-[#14120f]/60" />
        <div className="relative mx-auto flex min-h-[460px] max-w-[1240px] flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            Only in Mongolia
          </span>
          <h2 className="mt-4 max-w-[700px] font-serif text-4xl font-light text-cream lg:text-[52px]">
            Naadam, the Golden Eagle Festival &amp; living traditions
          </h2>
          <p className="mt-[18px] max-w-[560px] text-base leading-[1.65] text-cream/90">
            Time your journey to Mongolia&apos;s great gatherings — we hold
            places on the most sought-after departures each year.
          </p>
          <Link
            href="/group-departures"
            className="mt-7 rounded-[3px] bg-amber px-7 py-3.5 text-sm font-semibold text-charcoal transition-opacity hover:opacity-90"
          >
            See scheduled departures
          </Link>
        </div>
      </section>

      {/* Festivals & events */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            Festivals &amp; events
          </span>
          <h2 className="mt-3.5 font-serif text-4xl lg:text-[46px]">
            A calendar of living culture
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e._id} className="border border-ink/10 bg-cream">
              <div className="relative h-[200px]">
                <Image
                  src={e.mediaUrl}
                  alt={e.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 396px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[22px]">{e.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {e.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1080px] px-6 py-16 lg:px-8 lg:py-[92px]">
          <div className="mb-[52px] text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
              Hear from our customers
            </span>
            <h2 className="mt-3.5 font-serif text-4xl lg:text-[46px]">
              Trusted by travelers worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((r) => (
              <div
                key={r.name}
                className="border border-ink/10 bg-cream p-[30px]"
              >
                <div className="font-serif text-[40px] leading-[0.6] text-amber">
                  &ldquo;
                </div>
                <p className="mt-1.5 font-serif text-[15px] italic leading-[1.7] text-[#3c3a35]">
                  {r.quote}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-[18px]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/20 font-serif text-lg text-rust">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="font-mono text-xs text-mist">{r.place}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center lg:px-8 lg:py-24">
          <h2 className="font-serif text-4xl font-light text-cream lg:text-5xl">
            Let&apos;s design your Mongolia.
          </h2>
          <p className="mx-auto mt-[18px] max-w-[520px] text-base leading-[1.7] text-cream/85">
            Tell us how you like to travel and we&apos;ll craft a private
            itinerary shaped entirely around you.
          </p>
          <Link
            href="/contact"
            className="mt-[30px] inline-block rounded-[3px] bg-amber px-8 py-[15px] text-sm font-semibold text-charcoal transition-opacity hover:opacity-90"
          >
            Start planning
          </Link>
        </div>
      </section>
    </>
  );
}
