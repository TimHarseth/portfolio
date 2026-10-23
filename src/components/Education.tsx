"use client";

import { useLanguage } from "@/lib/language";
import { Section } from "./Section";

export function Education() {
  const { t } = useLanguage();
  const { master, bachelor, columns, courses } = t.education;

  return (
    <Section id="education" heading={t.education.heading}>
      <div className="space-y-12">
        <Degree {...master} current />
        <div>
          <Degree {...bachelor} />
          <p className="mt-3 max-w-[62ch] leading-relaxed text-text/85">{bachelor.thesis}</p>

          <h3 className="mt-10 font-semibold">{t.education.coursesIntro}</h3>
          <div className="mt-4 overflow-hidden rounded-lg border border-line">
            <table className="w-full text-left">
              <thead className="bg-pine text-sm text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium sm:px-5">{columns.course}</th>
                  <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">{columns.code}</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium sm:px-5">{columns.grade}</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.code} className="border-t border-line">
                    <td className="px-4 py-3 sm:px-5">{course.name}</td>
                    <td className="hidden px-4 py-3 font-display text-sm text-muted sm:table-cell">{course.code}</td>
                    <td className="px-4 py-3 text-right font-display text-lg font-bold text-sage sm:px-5">{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">{t.education.gradeNote}</p>
        </div>
      </div>
    </Section>
  );
}

function Degree({
  title,
  school,
  years,
  status,
  current = false,
}: {
  title: string;
  school: string;
  years: string;
  status: string;
  current?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="font-display text-sm text-muted">{years}</p>
      </div>
      <p className="mt-1 flex flex-wrap gap-x-3 text-muted">
        <span>{school}</span>
        <span className={current ? "font-medium text-sage" : undefined}>{status}</span>
      </p>
    </div>
  );
}
