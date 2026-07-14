import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getContactContent, getSiteSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactContent();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default async function ContactPage() {
  const [content, settings] = await Promise.all([
    getContactContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-[1240px] px-6 pb-[60px] pt-20 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            {content.hero.kicker}
          </span>
          <h1 className="mt-4 max-w-[720px] font-serif text-[42px] font-light leading-tight lg:text-6xl">
            {content.hero.heading}
          </h1>
          <p className="mt-[18px] max-w-[540px] text-base leading-[1.7] text-cream/80">
            {content.hero.text}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 px-6 pb-24 pt-[72px] lg:grid-cols-[1fr_380px] lg:gap-16 lg:px-8">
        <ContactForm />

        <aside>
          <div className="bg-sand p-[30px]">
            <h3 className="font-serif text-2xl">{content.sidebarHeading}</h3>
            <div className="mt-[22px] flex flex-col gap-[18px]">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-mist">
                  Phone
                </div>
                <div className="mt-1 text-[15px]">{settings.phone}</div>
              </div>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-mist">
                  Email
                </div>
                <div className="mt-1 text-[15px]">{settings.email}</div>
              </div>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-mist">
                  Office
                </div>
                <div className="mt-1 whitespace-pre-line text-[15px] leading-[1.55]">
                  {settings.address}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-mist">
                  Hours
                </div>
                <div className="mt-1 text-[15px]">{content.hoursText}</div>
              </div>
            </div>
          </div>
          {content.mapImage && (
            <div className="relative mt-4 h-[200px] overflow-hidden rounded">
              <Image
                src={content.mapImage}
                alt="Ulaanbaatar"
                fill
                className="object-cover"
                sizes="380px"
              />
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
