"use client";

import { useLanguage } from "@/lib/language";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero-rise flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
      <p className="font-display text-sm text-muted sm:text-base">{t.hero.location}</p>
      <h1 className="mt-4 font-hero text-[clamp(2.75rem,13.5vw,10rem)] leading-[0.9] font-extrabold tracking-[-0.02em] text-text">
        Tim
        <br />
        Harseth
      </h1>
      <p className="mt-8 max-w-[30ch] text-xl leading-snug text-text/85 sm:text-2xl md:text-[1.75rem]">
        {t.hero.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-sage px-5 py-3 font-semibold text-ink transition-colors hover:bg-sage-bright"
        >
          {t.hero.ctaProjects}
        </a>
        <a
          href="#contact"
          className="rounded-md border border-line px-5 py-3 font-semibold text-text transition-colors hover:border-sage"
        >
          {t.hero.ctaContact}
        </a>
      </div>
    </section>
  );
}
