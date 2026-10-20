import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getTravelToolsContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getTravelToolsContent();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default async function TravelToolsPage() {
  const content = await getTravelToolsContent();
  const { hero, essentials, faqsHeading, faqs } = content;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="relative overflow-hidden bg-charcoal text-cream">
        {hero.image && (
          <Image
            src={hero.image}
            alt="Mongolian festival"
            fill
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14120f]/85 to-[#14120f]/55" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-[72px] pt-[88px] lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            {hero.kicker}
          </span>
          <h1 className="mt-4 max-w-[720px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            {hero.heading}
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
          {faqsHeading}
        </h2>
        {faqs.map((f) => (
          <details key={f.question} className="border-b border-ink/15 py-[22px]">
            <summary className="flex items-center justify-between gap-5">
              <span className="font-serif text-[21px] text-ink">
                {f.question}
              </span>
              <span className="faq-plus shrink-0 text-[22px] text-amber">
                +
              </span>
            </summary>
            <p className="mt-3.5 max-w-[680px] text-[15px] leading-[1.75] text-stone">
              {f.answer}
            </p>
          </details>
        ))}
      </section>
    </>
  );
}
