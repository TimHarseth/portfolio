export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid gap-6 border-t border-line py-16 md:grid-cols-[11rem_1fr] md:gap-10 md:py-24"
    >
      <h2 id={`${id}-heading`} className="text-lg font-semibold text-sage md:sticky md:top-24 md:self-start">
        {heading}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
