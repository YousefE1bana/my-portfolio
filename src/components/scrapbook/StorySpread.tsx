import { origin, workingStyle } from '@/data/personal';
import { storyNotes, storyPhotos } from '@/data/scrapbook';
import { Heading, Note, Photo } from './Fragments';

export function StorySpread() {
  return <div className="sb-spread sb-paper sb-story-spread">
    <section id="about" className="sb-origin" aria-label="The origin"><Heading title="The origin" note="Same kid. Different tools." />
      <p className="sb-intro">Before security, before the projects, there was a screwdriver and a question.</p>
      <ol className="sb-origin-trail">{origin.map((beat, i) => <li key={beat.title}>
        <Photo image={storyPhotos[i]} title={i === 3 ? 'Break it. Understand it. Secure it.' : beat.title} note={storyNotes[i]} rotation={[-4,3,-2,4][i]} />
        <details><summary className="sb-hand">{i === 3 ? 'The incident that changed the question' : beat.chapter}<span aria-hidden="true"> ↗</span></summary><p>{beat.text}</p></details>
        {i < 3 && <span className="sb-story-arrow sb-hand" aria-hidden="true">↝</span>}
      </li>)}</ol>
    </section>
    <section id="work-with-me" className="sb-work" aria-label="Work with me"><Heading title="Work with me" note="Lead. Explain. Build. Finish." />
      <p className="sb-intro">I like turning a difficult idea into a plan people can actually build. And keeping the room human while we do it.</p>
      <div className="sb-team-canvas"><Photo image="team" title="Make a plan. Together." note="Good people. Better ideas." rotation={4} />
        <Note className="sb-team-note">What I bring<br /><span>✓ Ownership<br />✓ Clear explanations<br />✓ Responsibility<br />✓ Direct communication<br />✓ A little chaos :)<br />✓ Getting it finished</span></Note>
        <Photo image="build-it" title="Explain it. Then build it." note="Everyone should understand the plan." rotation={-6} className="sb-team-small" />
      </div>
      <div className="sb-work-notes">{workingStyle.map(item => <details key={item.title}><summary>{item.title}</summary><p>{item.text}</p></details>)}</div>
      <p className="sb-hand sb-work-signoff">I own my choices. Learn from them.<br />Keep moving. — Yousef</p>
    </section>
  </div>;
}
