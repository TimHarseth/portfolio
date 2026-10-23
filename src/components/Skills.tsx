"use client";

import { useLanguage } from "@/lib/language";
import { Section } from "./Section";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" heading={t.skills.heading}>
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {t.skills.groups.map((group) => (
          <div key={group.name}>
            <h3 className="font-semibold text-text">{group.name}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 leading-relaxed text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
