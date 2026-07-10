import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-coal text-cream">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8 lg:pb-10 lg:pt-[72px]">
        <div>
          <div className="font-serif text-2xl">Travels in Mongolia</div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
            Tour Operator · Est. 2011
          </div>
          <p className="mt-[18px] max-w-[300px] text-sm leading-[1.7] text-cream/60">
            A local, Ulaanbaatar-based operator crafting private and small-group
            journeys across Mongolia.
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
            <Link className="text-cream/80 hover:text-gold" href="/tours">Gobi Desert</Link>
            <Link className="text-cream/80 hover:text-gold" href="/tours">Central Mongolia</Link>
            <Link className="text-cream/80 hover:text-gold" href="/tours">Northern Mongolia</Link>
            <Link className="text-cream/80 hover:text-gold" href="/tours">Western Mongolia</Link>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">
            Contact
          </div>
          <div className="mt-4 flex flex-col gap-[11px] text-sm text-cream/80">
            <span>+976 – 99277699</span>
            <span>info@sunpath-mongolia.com</span>
            <span>Ulaanbaatar, Mongolia</span>
            <a
              href="https://www.facebook.com/TravelsinMongolia"
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
          <span>© Copyright Travels in Mongolia {new Date().getFullYear()}</span>
          <span>Sustainable ecotourism · Member of MTA</span>
        </div>
      </div>
    </footer>
  );
}
