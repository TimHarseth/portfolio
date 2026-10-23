"use client";

import { useLanguage } from "@/lib/language";
import { Section } from "./Section";

export function Projects() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.projects.items;

  return (
    <Section id="projects" heading={t.projects.heading}>
      <article className="rounded-lg border border-line bg-pine p-6 sm:p-9">
        <ProjectMeta kind={featured.kind} year={featured.year} />
        <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{featured.name}</h3>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-text/90">{featured.summary}</p>
        {featured.points && (
          <ul className="mt-6 max-w-[62ch] space-y-2.5 text-text/85">
            {featured.points.map((point) => (
              <li key={point} className="relative pl-5 leading-relaxed">
                <span aria-hidden className="absolute top-[0.7em] left-0 h-1.5 w-1.5 rounded-full bg-sage" />
                {point}
              </li>
            ))}
          </ul>
        )}
        <ProjectFooter stack={featured.stack} repo={featured.repo} />
      </article>

      <div className="mt-6">
        {rest.map((project) => (
          <article key={project.repo} className="border-b border-line py-9 last:border-b-0">
            <ProjectMeta kind={project.kind} year={project.year} />
            <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.name}</h3>
            <p className="mt-3 max-w-[62ch] leading-relaxed text-text/90">{project.summary}</p>
            <ProjectFooter stack={project.stack} repo={project.repo} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectMeta({ kind, year }: { kind: string; year: string }) {
  return (
    <p className="flex gap-3 font-display text-sm">
      <span className="font-medium text-sage">{kind}</span>
      <span className="text-muted">{year}</span>
    </p>
  );
}

function ProjectFooter({ stack, repo }: { stack: string[]; repo: string }) {
  const { t } = useLanguage();
  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <p className="max-w-[56ch] text-sm leading-relaxed text-muted">
        <span className="text-text/70">{t.projects.stackLabel}: </span>
        {stack.join(", ")}
      </p>
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 text-sm font-semibold text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
      >
        {t.projects.repoLabel}
      </a>
    </div>
  );
}
