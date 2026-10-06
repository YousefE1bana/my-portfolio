import { ArrowUpRight, Plus } from 'lucide-react';
import { GithubIcon } from './icons';
import type { Project } from '@/data/portfolio';
import { assetUrl } from '@/lib/assets';

export function ProjectMedia({ project: p, eager = false }: { project: Project; eager?: boolean }) {
  if (!p.image) return null;
  const screenshot = p.id !== 'shifaa';
  return <img src={p.image} srcSet={screenshot ? `${p.image.replace('.webp', '-640.webp')} 640w, ${p.image} 1600w` : undefined} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw" alt={p.imageAlt} width={p.id === 'shifaa' ? 1900 : 1600} height={p.id === 'shifaa' ? 1230 : p.id === 'al-tayyibat' ? 840 : 900} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
}
export function ProjectLinks({ project: p }: { project: Project }) {
  return <div className="project-actions">
    {p.github ? <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`View repository: ${p.name}`}><GithubIcon size={16} />View repository<ArrowUpRight size={15} aria-hidden="true" /></a> : <span className="project-source-note">University project · repository not public</span>}
    {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open live site: ${p.name}`}>Live site<ArrowUpRight size={15} aria-hidden="true" /></a>}
  </div>;
}
export function ProjectEvidence({ project: p }: { project: Project }) {
  return <div className="project-evidence"><p className="project-period">{p.period}{p.role && ` / ${p.role}`}</p><h4>Implementation</h4><ul>{p.highlights.map(text => <li key={text}>{text}</li>)}</ul><h4>Result & scope</h4><p>{p.result}</p><p className="project-stack">{p.stack.join(' / ')}</p>{p.id === 'shifaa' && <a href={assetUrl('images/shifaa-architecture.webp')} target="_blank" rel="noopener noreferrer">Open the original architecture diagram<ArrowUpRight size={15} aria-hidden="true" /></a>}</div>;
}
export function ProjectDisclosure({ project: p }: { project: Project }) {
  return <details className="project-disclosure"><summary>Inside the project<Plus size={17} aria-hidden="true" /></summary><ProjectEvidence project={p} /></details>;
}
