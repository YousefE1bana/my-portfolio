import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups, type Accent } from "@/data/portfolio";

const accentVar: Record<Accent, string> = {
  yellow: "var(--yellow)",
  orange: "var(--orange)",
  pink: "var(--pink)",
  blue: "var(--blue)",
  green: "var(--green)",
};

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Technical arsenal"
          id="skills-title"
          accent="blue"
          title={
            <>
              The <span className="text-blue">toolbox</span>, grouped by job.
            </>
          }
          description="Detection tooling first, then the offensive kit that informs it. Experience from projects, practical labs, and structured training."
        />

        <Reveal className="brut overflow-hidden">
          <div className="flex items-center justify-between border-b-[length:var(--border-w)] border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2.5 sm:px-5">
            <span className="label">Tools I work with</span>
            <span className="label hidden sm:inline">{skillGroups.length} groups</span>
          </div>

          <RevealGroup as="ul" className="divide-y-2 divide-[var(--border)]" staggerChildren={0.06}>
            {skillGroups.map((g, i) => (
              <RevealItem
                as="li"
                key={g.id}
                className="group grid gap-3 px-4 py-4 transition-colors hover:bg-[var(--surface-raised)]/60 sm:px-5 md:grid-cols-[13.5rem_1fr] md:gap-6 md:py-5"
              >
                <div className="flex items-center gap-3">
                  <span className="mono text-[0.66rem] text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-6 w-1.5 rounded-sm transition-transform group-hover:scale-y-125" style={{ background: accentVar[g.accent] }} aria-hidden />
                  <h3 className="font-display text-[1.02rem] font-bold tracking-tight">{g.label}</h3>
                </div>
                <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="mono rounded-md border-[1.5px] border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[0.74rem] leading-tight transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[2px_2px_0_var(--shadow)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mono flex items-center gap-2 border-t-[length:var(--border-w)] border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2.5 text-[0.7rem] text-[var(--muted)] sm:px-5">
            <span className="text-green">✓</span> projects · labs · structured training
          </div>
        </Reveal>
      </div>
    </section>
  );
}
