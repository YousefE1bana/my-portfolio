import { Crosshair, Radar, Search, Wrench } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutParagraphs } from "@/data/portfolio";

const loop = [
  { icon: Crosshair, title: "Attack", text: "Authorized scenarios from Kali: brute force, web exploitation, reverse shells, privilege escalation, persistence.", accent: "var(--orange)" },
  { icon: Radar, title: "Detect", text: "Ingest logs with Splunk Universal Forwarder; write SPL searches, dashboards and alerts. Network-security tooling in labs and training.", accent: "var(--yellow)" },
  { icon: Search, title: "Investigate", text: "Sysmon, Windows Event Logs and MITRE ATT&CK mapping to reconstruct what happened across hosts.", accent: "var(--blue)" },
  { icon: Wrench, title: "Respond", text: "Investigate first, then apply a bounded manual response. NetShield V2 verifies nftables changes and supports rollback.", accent: "var(--green)" },
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          id="about-title"
          title={
            <>
              Defensive by target, <span className="text-yellow">offensive</span> by training.
            </>
          }
          description="The short version: I attack my own lab so I can learn what good detection actually looks like."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <Reveal className="space-y-5 text-[1.02rem] leading-[1.75] text-[var(--text)]/90">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[1.15rem] font-medium leading-[1.6]" : "text-[var(--muted)]"}>
                {p}
              </p>
            ))}
          </Reveal>

          <RevealGroup as="ol" className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-1" staggerChildren={0.09} aria-label="Attack-detect-investigate-mitigate loop">
            {loop.map((step, i) => (
              <RevealItem as="li" key={step.title} className="workflow-step flex gap-4 py-4">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border-[length:var(--border-w)] border-[var(--border)] text-[var(--on-accent)]"
                  style={{ background: step.accent }}
                >
                  <step.icon size={19} strokeWidth={2.3} />
                </span>
                <div className="min-w-0">
                  <p className="flex items-baseline gap-2 font-display text-base font-bold tracking-tight">
                    <span className="mono text-[0.66rem] text-[var(--muted)]">0{i + 1}</span>
                    {step.title}
                  </p>
                  <p className="mt-1 text-[0.86rem] leading-snug text-[var(--muted)]">{step.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
