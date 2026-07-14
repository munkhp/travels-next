import Image from "next/image";
import type { Metadata } from "next";
import { getAboutContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAboutContent();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default async function AboutPage() {
  const content = await getAboutContent();
  const { hero, story, founder, valuesSection, values, stats } = content;

  return (
    <>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-20 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            {hero.kicker}
          </span>
          <h1 className="mt-4 max-w-[800px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            {hero.heading}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-[88px]">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            {story.kicker}
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] lg:text-[42px]">
            {story.heading}
          </h2>
          {story.paragraphs.map((p, i) => (
            <p
              key={p.slice(0, 32)}
              className={`${i === 0 ? "mt-5" : "mt-4"} text-base leading-[1.8] text-soil`}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="relative h-[360px] overflow-hidden rounded lg:h-[540px]">
          {story.image && (
            <Image
              src={story.image}
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
            {founder.image && (
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 340px, 100vw"
              />
            )}
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
              {founder.kicker}
            </span>
            <h2 className="mt-3.5 font-serif text-[38px]">{founder.name}</h2>
            <p className="mt-[18px] text-base leading-[1.8] text-soil">
              {founder.text}
            </p>
            <p className="mt-5 font-serif text-[19px] italic text-rust">
              &ldquo;{founder.quote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-[88px]">
        <div className="mb-[52px] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
            {valuesSection.kicker}
          </span>
          <h2 className="mt-3.5 font-serif text-4xl lg:text-[44px]">
            {valuesSection.heading}
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
                {s.value}
              </div>
              <div className="mt-1 text-[12.5px] text-cream/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
