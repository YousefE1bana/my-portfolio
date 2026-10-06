import { motion, useReducedMotion } from 'framer-motion';
import { useContext } from 'react';
import { ArrowDown, FileDown, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { Button } from '@/components/Button';
import { ProjectMedia } from '@/components/ProjectRecord';
import { links, profile, projects } from '@/data/portfolio';
import { MotionPreset } from '@/lib/motion-context';

export function Hero() {
  const reduce = useReducedMotion();
  const preset = useContext(MotionPreset);
  return <section id="top" className="professional-hero"><div className="container-x hero-composition">
    <motion.div className="hero-copy" initial={reduce ? false : 'hidden'} animate="show" variants={preset}>
      <p className="hero-kicker label"><span aria-hidden="true" />{profile.headline} · {profile.location}</p>
      <h1 className="hero-headline"><span className="hero-line">Yousef builds</span><span className="hero-line">labs where</span><span className="hero-line hero-emphasis">attacks get</span><span className="hero-line hero-emphasis">caught.</span></h1>
      <p className="hero-intro">Cybersecurity Engineering student targeting <strong>SOC Analyst</strong> and defensive-security roles. I build attack-and-detection labs — using offensive training to understand the activity I’m trying to detect.</p>
      <div className="hero-actions"><Button href="#projects" variant="primary" size="lg">View projects<ArrowDown size={17} aria-hidden="true" /></Button><Button href={`mailto:${profile.email}`} size="lg"><Mail size={17} aria-hidden="true" />Email me</Button>{links.resume && <Button href={links.resume} download size="lg"><FileDown size={17} aria-hidden="true" />Download CV</Button>}</div>
      <ul className="hero-socials"><li><a href={links.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={19} />GitHub</a></li><li><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={19} />LinkedIn</a></li><li><a href={links.tryhackme} target="_blank" rel="noopener noreferrer"><Terminal size={19} aria-hidden="true" />TryHackMe</a></li></ul>
    </motion.div>
    <motion.div className="hero-work" initial={reduce ? false : 'hidden'} animate="show" variants={preset}>
      <a className="hero-main-preview" href="#projects" aria-label="Explore NetShield and the project workshop"><ProjectMedia project={projects[0]} eager /></a>
      <div className="hero-preview-caption"><strong>NetShield</strong><span>Observe → Detect → Investigate → Respond → Verify</span></div>
      <div className="hero-secondary-previews">{[projects[3], projects[2]].map(p => <a key={p.id} className={p.id === 'shifaa' ? 'hero-blueprint' : ''} href="#projects"><ProjectMedia project={p} /><span>{p.name}<small>{p.id === 'shifaa' ? 'Proposed architecture' : 'C++ / OpenGL exploration'}</small></span></a>)}</div>
      <p className="hero-evidence-note">Real work. Inspectable evidence.</p>
    </motion.div>
  </div></section>;
}
