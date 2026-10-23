"use client";

import { languages } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { lang, t, setLang } = useLanguage();
  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-8">
        <a href="#top" className="font-display font-semibold tracking-tight text-text">
          Tim Harseth
        </a>
        <div className="flex items-center gap-8">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-7 text-sm text-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-text">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div role="group" aria-label={t.langLabel} className="flex rounded-md border border-line p-0.5 text-sm">
              {languages.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  lang={code === "no" ? "nb" : "en"}
                  className="rounded px-2.5 py-1 font-display font-medium text-muted transition-colors hover:text-text aria-pressed:bg-sage aria-pressed:text-ink"
                >
                  {code === "en" ? "EN" : "NO"}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
