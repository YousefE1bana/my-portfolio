import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Coffee, FileDown } from 'lucide-react';
import { links } from '@/data/portfolio';
import { media } from '@/data/scrapbook';
import { Note } from './Fragments';

export function Desk() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const [coffees, setCoffees] = useState(0);
  const [flipped, setFlipped] = useState(false);
  return <section ref={ref} id="top" className="sb-desk" aria-labelledby="desk-title">
    <motion.img className="sb-desk-bg" src={media('desk')} alt="A late-night room with a multi-monitor workstation, city lights, coffee, headphones, a sketchbook and jasmine." width="1536" height="1024" fetchPriority="high" style={{ y }} />
    <div className="sb-desk-copy"><p className="sb-small">After Hours / an open book</p><h1 id="desk-title"><span className="sb-signature">Yousef.</span><span>Same curiosity.<br />More of me.</span></h1>
      <p>A cybersecurity student. A builder.<br />And a life that doesn’t fit on a CV.</p>
      <div className="sb-actions"><a className="sb-button sb-button-paper" href="#about">Open my world<ArrowDown size={16} aria-hidden="true" /></a><a className="sb-button" href={links.resume} download>My CV<FileDown size={16} aria-hidden="true" /></a></div>
      <p className="sb-hand sb-desk-scribble">Good ideas. Late nights. Bigger plans.</p>
    </div>
    <button className={`sb-note sb-hand sb-desk-note ${flipped ? 'is-turned' : ''}`} aria-label="Turn the desk note" aria-pressed={flipped} onClick={() => setFlipped(!flipped)}><span className="sb-tape" aria-hidden="true" />{flipped ? <>Same curious kid.<br />Bigger playground.<span>↶ turn it back</span></> : <>Build.<br />Learn.<br />Stay curious.<span>↷ turn the note</span></>}</button>
    <div className="sb-desk-photo"><img src={media('swim')} alt="A small pinned swimming scene" width="900" height="675" /><span className="sb-hand">There’s more outside the screen.</span></div>
    <button className="sb-coffee" onClick={() => setCoffees(coffees + 1)} aria-label="Take a coffee break"><Coffee size={22} aria-hidden="true" /><span className="sb-hand" aria-live="polite">{coffees ? `Coffee break ${coffees}. Back to it?` : 'Coffee? Always.'}</span></button>
    <div className="sb-desk-index" aria-label="Explore the scrapbook">{[
      ['projects','security-desk','The things I build'],['personal','gym','A life off-screen'],['gaming','gaming','One more round'],['music','music','Always on repeat'],['fuel','koshari','Essential fuel'],
    ].map(([id, image, label]) => <a href={`#${id}`} key={id}><img src={media(image)} alt="" width="300" height="225" /><span>{label}<ArrowUpRight size={13} aria-hidden="true" /></span></a>)}</div>
    <Note className="sb-desk-margin">Cairo, Egypt.<br />Still asking “what if?”</Note>
  </section>;
}
