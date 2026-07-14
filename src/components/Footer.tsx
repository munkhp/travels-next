import Link from "next/link";
import { getSiteSettings } from "@/lib/content";
import { getDestinations } from "@/lib/data";

export default async function Footer() {
  const [settings, destinations] = await Promise.all([
    getSiteSettings(),
    getDestinations(),
  ]);

  return (
    <footer className="bg-coal text-cream">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8 lg:pb-10 lg:pt-[72px]">
        <div>
          <div className="font-serif text-2xl">{settings.brandName}</div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
            {settings.brandTagline}
          </div>
          <p className="mt-[18px] max-w-[300px] text-sm leading-[1.7] text-cream/60">
            {settings.footerBlurb}
          </p>
        </div>

        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
            Explore
          </div>
          <div className="mt-4 flex flex-col gap-[11px] text-sm">
            <Link className="text-cream/80 hover:text-gold" href="/tours">Tours</Link>
            <Link className="text-cream/80 hover:text-gold" href="/group-departures">Group departures</Link>
            <Link className="text-cream/80 hover:text-gold" href="/about">About us</Link>
            <Link className="text-cream/80 hover:text-gold" href="/travel-tools">Travel tools</Link>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
            Destinations
          </div>
          <div className="mt-4 flex flex-col gap-[11px] text-sm">
            {destinations.slice(0, 4).map((d) => (
              <Link key={d._id} className="text-cream/80 hover:text-gold" href="/tours">
                {d.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
            Contact
          </div>
          <div className="mt-4 flex flex-col gap-[11px] text-sm text-cream/80">
            <span>{settings.phone}</span>
            <span>{settings.email}</span>
            <span>Ulaanbaatar, Mongolia</span>
            <a
              href={settings.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              Facebook →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-2 px-6 py-[22px] text-[12.5px] text-cream/50 sm:flex-row lg:px-8">
          <span>© Copyright {settings.brandName} {new Date().getFullYear()}</span>
          <span>{settings.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
