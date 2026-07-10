import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-[700px] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-rust">
        404
      </span>
      <h1 className="mt-4 font-serif text-5xl font-light">
        You&apos;ve wandered off the steppe.
      </h1>
      <p className="mt-4 max-w-[420px] text-base leading-[1.7] text-stone">
        The page you&apos;re looking for doesn&apos;t exist — but Mongolia is
        vast, and there&apos;s plenty more to explore.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-[3px] bg-amber px-7 py-3.5 text-sm font-semibold text-charcoal"
      >
        Back to home
      </Link>
    </section>
  );
}
