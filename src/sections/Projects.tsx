import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ProjectDisclosure, ProjectLinks, ProjectMedia } from '@/components/ProjectRecord';
import { projects, reservedRepository, type Project } from '@/data/portfolio';

const categories = ['All', ...new Set(projects.map(p => p.category))];
function ProjectPreview({ project: p, flagship = false }: { project: Project; flagship?: boolean }) {
  return <Reveal as="article" className={`work-project${flagship ? ' work-flagship' : ''}${p.id === 'shifaa' ? ' work-blueprint' : ''}`} aria-labelledby={`project-${p.id}`}>
    <div className="work-project-media"><ProjectMedia project={p} /><span>{p.id === 'shifaa' ? 'Engineering document / proposed architecture' : 'Actual project / supplied screenshot'}</span></div>
    <div className="work-project-copy"><p className="work-category">{p.domain}<span>{p.status}</span></p><h3 id={`project-${p.id}`}>{p.name}</h3><p className="work-subtitle">{p.subtitle}</p><p className="work-summary">{p.summary}</p>{p.award && <p className="work-award">{p.award}</p>}<p className="work-tools">{p.stack.join(' · ')}</p><ProjectLinks project={p} /><ProjectDisclosure project={p} /></div>
  </Reveal>;
}
export function Projects() {
  const [category, setCategory] = useState('All');
  const visible = projects.filter(p => category === 'All' || p.category === category);
  const main = visible.filter(p => p.featured);
  const compact = visible.filter(p => !p.featured);
  return <section id="projects" className="section project-workshop" aria-labelledby="projects-title"><div className="container-x">
    <div className="work-heading"><div><p className="label">02 / One body of work</p><h2 id="projects-title">What I build.</h2><p>Security systems, scientific worlds, and software people can use.</p></div><span>{projects.length} projects · one workshop</span></div>
    <div className="project-filters" role="group" aria-label="Filter projects by discipline">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <p className="sr-only" role="status">{visible.length} projects shown</p>
    <div className="work-project-list">{main.map(p => <ProjectPreview key={p.id} project={p} flagship={p.id === 'netshield'} />)}</div>
    {compact.length > 0 && <details className="workshop-drawer" open={category !== 'All'}><summary>More from the workshop <span>{compact.length} project records ↓</span></summary><div>{compact.map(p => <article className="compact-project" key={p.id}><div><p className="label">{p.category} / {p.status}</p><h3>{p.name}</h3><p>{p.summary}</p></div><div><ProjectLinks project={p} /><ProjectDisclosure project={p} /></div></article>)}</div></details>}
    {category === 'All' && <div className="reserved-project"><span>On the shelf / {reservedRepository.name}</span><p>{reservedRepository.note} It is excluded from the project count.</p><a href={reservedRepository.github} target="_blank" rel="noopener noreferrer">View reserved repository<ArrowUpRight size={15} aria-hidden="true" /></a></div>}
  </div></section>;
}
