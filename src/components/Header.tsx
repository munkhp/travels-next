"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tours", label: "Tours" },
  { href: "/group-departures", label: "Group Departures" },
  { href: "/travel-tools", label: "Travel Tools" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-[22px] text-ink">Travels in Mongolia</span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-rust">
            Tour operator · Est. 2011
          </span>
        </Link>

        <nav className="hidden items-center gap-[30px] lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13.5px] font-medium tracking-[0.02em] transition-colors hover:text-ochre ${
                isActive(pathname, l.href) ? "text-ochre" : "text-[#3b3833]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[3px] bg-amber px-5 py-[11px] text-[13px] font-semibold tracking-[0.03em] text-charcoal transition-opacity hover:opacity-90"
          >
            Plan your journey
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-paper px-6 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-[15px] font-medium ${
                isActive(pathname, l.href) ? "text-ochre" : "text-[#3b3833]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-[3px] bg-amber px-5 py-3 text-[13px] font-semibold text-charcoal"
          >
            Plan your journey
          </Link>
        </nav>
      )}
    </header>
  );
}
