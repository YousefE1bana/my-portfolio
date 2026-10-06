import { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Copy, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { links, profile } from '@/data/portfolio';
import { Note, SceneLayer } from './Fragments';
import { DiscordContact } from '@/components/DiscordContact';

export function RoadAhead() {
  const [copyMessage, setCopyMessage] = useState('');
  useEffect(() => {
    if (!copyMessage) return;
    const timer = window.setTimeout(() => setCopyMessage(''), 2500);
    return () => window.clearTimeout(timer);
  }, [copyMessage]);
  async function copy() {
    try { await navigator.clipboard.writeText(profile.email); setCopyMessage('Email copied'); }
    catch { setCopyMessage('Copy unavailable'); }
  }
  return <section id="contact" className="sb-road sb-night" aria-labelledby="road-title"><SceneLayer image="road-ahead" />
    <div className="sb-ambition"><p className="sb-hand">The next chapter</p><h2 id="road-title">Build something<br />worth remembering.</h2><p>I want my name to mean good work and honest advice.<br />Keep learning. Finish the hard thing. Then ask what comes next.</p>
      <details><summary className="sb-hand">A bigger playground, one day ↗</summary><p>Build my own company — my personal target is around 35, maybe 40. Travel the world with my future wife. Keep growing without losing the curious kid who started all of this.</p></details>
      <div className="sb-contact-links"><a className="sb-button sb-button-paper" href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" />Let’s build something</a><button className="sb-button" onClick={copy}><Copy size={16} aria-hidden="true" /><span aria-live="polite">{copyMessage || 'Copy email'}</span></button></div>
      {copyMessage === 'Copy unavailable' && <p className="sr-only" role="status">Select the email address below to copy it manually.</p>}
      <p className="sb-road-email">{profile.email}</p><div className="sb-socials"><a href={links.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={18} aria-hidden="true" />GitHub</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} aria-hidden="true" />LinkedIn</a><a href={links.tryhackme} target="_blank" rel="noopener noreferrer">TryHackMe<ArrowUpRight size={14} aria-hidden="true" /></a></div>
      <DiscordContact />
    </div><Note className="sb-road-note">Good ideas.<br />Late nights.<br />Bigger plans.<span>Same Yousef.</span></Note>
    <footer className="sb-footer"><span className="sb-hand">Yousef.</span><p>My story. Original scene illustrations, not personal photographs.<br />© {new Date().getFullYear()} Yousef Elbana</p><a href="#top">Back to my desk<ArrowUp size={16} aria-hidden="true" /></a></footer>
  </section>;
}
