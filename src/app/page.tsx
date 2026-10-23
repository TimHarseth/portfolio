"use client";

import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { useLanguage } from "@/lib/language";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        <Hero />
        <Section id="about" heading={t.about.heading}>
          <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-text/90">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-4 sm:px-8">
        <p className="border-t border-line py-10 text-sm text-muted">{t.footer}</p>
      </footer>
    </>
  );
}
