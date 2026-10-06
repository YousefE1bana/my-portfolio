import { useCallback, useState } from "react";
import { Award, ArrowUpRight } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements, type Achievement } from "@/data/portfolio";
export function Achievements() {
  const [preview, setPreview] = useState<Achievement | null>(null);
  const close = useCallback(() => setPreview(null), []);
  return <section id="achievements" className="section" aria-labelledby="achievements-title"><div className="container-x">
    <SectionHeading index="04" eyebrow="Achievements & contribution" id="achievements-title" title="Good work. Shared wins." description="Cybersecurity and project-day wins, a programming honorable mention, and student-club contribution." />
    <Reveal className="award-grid">{achievements.map((award) => <article key={award.id} className={award.major ? "award-major" : "award-minor"}>
      <p className="award-date">{award.date}</p><div className="award-placement"><Award size={24} strokeWidth={1.5} aria-hidden /><p>{award.placement}</p></div><h3>{award.title}</h3>{award.context && <p className="award-context">{award.context}</p>}
      {award.image && <button type="button" className="award-preview" onClick={() => setPreview(award)} aria-label={`Preview certificate: ${award.title}`}>View certificate<ArrowUpRight size={15} aria-hidden /></button>}
    </article>)}</Reveal>
  </div><Lightbox open={Boolean(preview)} onClose={close} src={preview?.image} alt={preview ? `${preview.title} certificate` : ""} title={preview?.title ?? ""} caption={preview ? `${preview.placement} · ${preview.context ?? preview.date}` : undefined} /></section>;
}
