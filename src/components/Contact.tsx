"use client";

import { useState } from "react";
import { contact } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Section } from "./Section";

type CopyState = "idle" | "copied" | "failed";

export function Contact() {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), 2500);
  }

  const copyLabel =
    copyState === "copied" ? t.contactSection.copied : copyState === "failed" ? t.contactSection.copyFailed : t.contactSection.copy;

  return (
    <Section id="contact" heading={t.contactSection.heading}>
      <p className="text-lg text-text/85">{t.contactSection.body}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={`mailto:${contact.email}`}
          className="font-display text-[clamp(1.5rem,6vw,2.75rem)] font-bold tracking-tight text-text underline decoration-sage/50 decoration-2 underline-offset-[0.18em] transition-colors hover:decoration-sage"
        >
          {contact.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-sage hover:text-text"
        >
          <span aria-live="polite">{copyLabel}</span>
        </button>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg">
        <li>
          <a href={contact.github} target="_blank" rel="noreferrer" className="font-semibold text-sage underline decoration-sage/40 underline-offset-4 hover:decoration-sage">
            GitHub
          </a>
        </li>
        <li>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="font-semibold text-sage underline decoration-sage/40 underline-offset-4 hover:decoration-sage">
            LinkedIn
          </a>
        </li>
      </ul>
    </Section>
  );
}
