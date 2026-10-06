import { useState } from "react";
import { ArrowUpRight, Coffee, Cpu, Gamepad2, Headphones, Music2, MoveUpRight, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { chapters, origin, workingStyle } from "@/data/personal";
import type { Theme } from "@/data/themes";
import { assetUrl } from "@/lib/assets";
import { SpotifyPlayer } from "@/components/SpotifyPlayer";

const icons = { cpu: Cpu, music: Music2, game: Gamepad2, movement: MoveUpRight, coffee: Coffee };

export function Personal({ theme, onSelectTheme }: { theme: Theme; onSelectTheme: (theme: Theme) => void }) {
  const [selected, setSelected] = useState<string>(chapters[0].id);
  const chapter = chapters.find((item) => item.id === selected) ?? chapters[0];
  const Icon = icons[chapter.icon];
  return <section id="personal" className="personal-world" aria-labelledby="personal-title">
    <div className="personal-threshold">
      <div className="container-x">
        <figure className="night-scene">
          <img src={assetUrl("images/after-hours.webp")} alt="Symbolic still life of headphones, iced coffee, PC components, a sketchbook and white jasmine in warm lamplight." loading="lazy" decoding="async" width="1536" height="1024" />
          <figcaption>After Hours · An original AI-generated still life, inspired by my interests.</figcaption>
          <div className="night-scene-copy">
            <p className="mono text-sm mb-4">A little further from the CV.</p>
            <h2 id="personal-title">Same curiosity.<br />More of me.</h2>
            <p className="mt-5 max-w-sm">Behind the labs and project plans: music, movement, small obsessions, and a lot of questions.</p>
            {theme !== "after-hours" ? <button className="night-invite" onClick={() => onSelectTheme("after-hours")}><Headphones size={18} aria-hidden />Enter After Hours<ArrowUpRight size={18} aria-hidden /></button>
              : <p className="night-invite night-active"><Headphones size={18} aria-hidden />You’re in After Hours.</p>}
          </div>
        </figure>
      </div>
    </div>

    <section id="origin" className="section origin-section" aria-labelledby="origin-title">
      <div className="container-x">
        <Reveal className="origin-intro"><p className="personal-label">Where it started</p><h2 id="origin-title">I was taking things apart<br className="hidden md:block" /> before I knew what I wanted to build.</h2><p>The questions changed. The instinct didn’t.</p></Reveal>
        <ol className="origin-timeline">{origin.map((step, index) => <li key={step.title}>
          <span className="origin-number" aria-hidden>{String(index + 1).padStart(2, "0")}</span>
          <p className="origin-chapter">{step.chapter}</p><h3>{step.title}</h3><p>{step.text}</p>
        </li>)}</ol>
      </div>
    </section>

    <section id="off-clock" className="section interests-section" aria-labelledby="interests-title">
      <div className="container-x">
        <div className="chapter-heading"><p className="personal-label">Off the clock</p><h2 id="interests-title">Many tabs open.<br />All of them me.</h2><p>Pick a chapter. There’s more behind each one.</p></div>
        <div className="chapter-layout">
          <div className="chapter-picker" role="group" aria-label="Personal chapters">{chapters.map((item) => {
            const ChapterIcon = icons[item.icon];
            return <button key={item.id} type="button" aria-pressed={selected === item.id} aria-controls="chapter-content" onClick={() => setSelected(item.id)}><ChapterIcon size={18} aria-hidden />{item.label}<ArrowUpRight size={15} className="chapter-arrow" aria-hidden /></button>;
          })}</div>
          <article id="chapter-content" className="chapter-content" aria-labelledby="chapter-title">
            <div key={chapter.id} className="chapter-reveal"><Icon className="chapter-icon" size={40} strokeWidth={1.2} aria-hidden /><h3 id="chapter-title">{chapter.title}</h3><p className="chapter-intro">{chapter.intro}</p>
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <details className="personal-disclosure"><summary>{chapter.detailsTitle}<Plus size={16} aria-hidden /></summary><p>{chapter.details}</p></details>
              {"link" in chapter && <a href={chapter.link.href} target="_blank" rel="noopener noreferrer" className="chapter-link">{chapter.link.label}<ArrowUpRight size={16} aria-hidden /></a>}
            </div>
          </article>
        </div>
        <SpotifyPlayer />
      </div>
    </section>

    <section className="section working-section" aria-labelledby="working-title">
      <div className="container-x">
        <div className="working-intro"><p className="personal-label">How I work</p><h2 id="working-title">Carry the work.<br />Keep the warmth.</h2><p>I like taking responsibility. I also like making a team feel like a team.</p></div>
        <div className="working-principles">{workingStyle.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <blockquote className="ownership-quote"><p>“I own my choices. I learn from them, build on them, and keep moving.”</p><footer>How I try to approach decisions.</footer></blockquote>
      </div>
    </section>

    <section className="section vision-section" aria-labelledby="vision-title">
      <div className="container-x vision-layout"><div><p className="personal-label">What comes next</p><h2 id="vision-title">A name earned.<br />A world explored.</h2></div><div className="vision-copy"><p>I want Yousef Elbana to become a name people in Egypt trust for good work and honest advice. There’s a real rush in finishing something difficult. Then I start wondering what comes next.</p><p>One day, I want to build my own company. My personal target is around 35, with enough perspective to know it might take until 40. It’s an ambition I’m working toward.</p><p>And outside work? A life with room to travel, see the world with my future wife, and keep finding new things to be curious about.</p></div></div>
    </section>
  </section>;
}
