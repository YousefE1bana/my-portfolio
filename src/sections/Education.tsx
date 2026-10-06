import { BookOpen, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container-x">
        <SectionHeading
          index="06"
          eyebrow="Education"
          id="education-title"
          accent="green"
          align="left"
          title={
            <>
              Studying it <span className="text-green">formally</span>, too.
            </>
          }
        />

        <Reveal as="article" className="brut brut-interactive overflow-hidden" aria-label="Education details">
          <div className="grid md:grid-cols-[auto_1fr]">
            <div className="fill-green dot-grid flex items-center gap-4 border-b-[length:var(--border-w)] border-[var(--border)] p-6 md:w-56 md:flex-col md:items-start md:justify-between md:border-b-0 md:border-r-[length:var(--border-w)]">
              <span className="grid h-12 w-12 place-items-center rounded-[12px] border-[length:var(--border-w)] border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[3px_3px_0_var(--shadow)]">
                <BookOpen size={22} strokeWidth={2.3} />
              </span>
              <div>
                <p className="font-display text-3xl font-bold leading-none tracking-tight">{education.short}</p>
                <p className="mono mt-1 text-[0.68rem] uppercase tracking-[0.12em] opacity-80">bachelor's</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="label mb-2">{education.institution}</p>
              <h3 className="text-[1.5rem] leading-tight sm:text-[1.8rem]">
                {education.degree} <span className="text-[var(--muted)]">—</span> {education.specialization}
              </h3>
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Period</dt>
                  <CalendarDays size={15} className="text-[var(--muted)]" aria-hidden />
                  <dd className="mono m-0 text-[0.8rem]">{education.period}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Location</dt>
                  <MapPin size={15} className="text-[var(--muted)]" aria-hidden />
                  <dd className="mono m-0 text-[0.8rem]">{education.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
