import { ArrowUpRight, Copy, Check, FileDown, Mail, Terminal } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { DiscordContact } from "@/components/DiscordContact";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { links, profile } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  const socials = [
    links.github && { label: "GitHub", href: links.github, icon: <GithubIcon size={16} /> },
    links.linkedin && { label: "LinkedIn", href: links.linkedin, icon: <LinkedinIcon size={16} /> },
    links.tryhackme && { label: "TryHackMe", href: links.tryhackme, icon: <Terminal size={16} /> },
  ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-x">
        <Reveal className="contact-composition relative overflow-hidden">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:p-14">
            <div>
              <p className="label mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--green)]" aria-hidden />
                Let's connect · {profile.location}
              </p>
              <h2 id="contact-title" className="text-[clamp(2.2rem,5.5vw,4rem)]">
                Hiring for a <span className="text-yellow">SOC</span> or defensive-security role?
                <br />
                Let's talk.
              </h2>
              <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-[var(--muted)]">
                I'm looking for SOC Analyst and defensive-security opportunities. Email is the fastest way to reach me.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} variant="primary" accent="yellow" size="lg">
                  <Mail size={17} strokeWidth={2.3} />
                  {profile.email}
                </Button>
                <Button onClick={copyEmail} variant="outline" size="lg" aria-live="polite">
                  {copied ? <Check size={17} strokeWidth={2.5} className="text-green" /> : <Copy size={17} strokeWidth={2.2} />}
                  {copied ? "Copied" : "Copy email"}
                </Button>
              </div>
              <DiscordContact />
            </div>

            <RevealGroup as="ul" className="grid gap-3 self-end sm:grid-cols-2 lg:grid-cols-1" staggerChildren={0.08} delayChildren={0.2}>
              {socials.map((s) => (
                <RevealItem as="li" key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="contact-link group flex items-center justify-between gap-4 py-4 no-underline">
                    <span className="flex items-center gap-3">
                      <span className="fill-pink grid h-10 w-10 place-items-center rounded-[10px] border-[length:var(--border-w)] border-[var(--border)]">{s.icon}</span>
                      <span>
                        <span className="label block">Profile</span>
                        <span className="font-display text-[0.95rem] font-bold">{s.label}</span>
                      </span>
                    </span>
                    <ArrowUpRight size={18} className="icon-shift-diag text-[var(--muted)]" />
                  </a>
                </RevealItem>
              ))}
              {links.resume && (
                <RevealItem as="li">
                  <a href={links.resume} download className="contact-link group flex items-center justify-between gap-4 py-4 no-underline">
                    <span className="flex items-center gap-3">
                      <span className="fill-orange grid h-10 w-10 place-items-center rounded-[10px] border-[length:var(--border-w)] border-[var(--border)]">
                        <FileDown size={17} strokeWidth={2.3} />
                      </span>
                      <span>
                        <span className="label block">Resume</span>
                        <span className="font-display text-[0.95rem] font-bold">Download CV (PDF)</span>
                      </span>
                    </span>
                    <ArrowUpRight size={18} className="icon-shift-diag text-[var(--muted)]" />
                  </a>
                </RevealItem>
              )}
            </RevealGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
