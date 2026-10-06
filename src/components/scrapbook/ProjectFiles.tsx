import { ArrowUpRight } from 'lucide-react';
import { projects, reservedRepository, type Project } from '@/data/portfolio';
import { ProjectEvidence, ProjectLinks, ProjectMedia } from '@/components/ProjectRecord';
import { Heading, Note } from './Fragments';

const notes: Record<string,string> = {netshield:'Don’t stop at an alert.', 'e-banking-security':'Good data. Better questions.', shifaa:'Six people. One direction.', 'solar-odyssey':'A whole solar system to get lost in.', 'al-tayyibat':'Make the useful thing easy to use.'};
function File({ p, index }: { p: Project; index: number }) {
  return <article className={`sb-file${p.id === 'shifaa' ? ' sb-file-blueprint' : ''}`}><details><summary><span className="sb-file-tab">{String(index+1).padStart(2,'0')} / {p.status}</span><ProjectMedia project={p} /><h3>{p.name}</h3><p className="sb-hand">{notes[p.id]}</p><span className="sb-file-open">Open dossier <span aria-hidden="true">↗</span></span></summary><div className="sb-file-content"><p>{p.summary}</p><ProjectEvidence project={p} /></div></details><ProjectLinks project={p} /></article>;
}
export function ProjectFiles() {
  return <section id="projects" className="sb-files sb-paper" aria-labelledby="files-title"><div className="sb-files-heading"><Heading id="files-title" title="What I build" note={`${projects.length} projects. Same restless curiosity.`} /><Note>Open a file.<br />There’s real work inside.</Note></div>
    <div className="sb-file-shelf">{projects.slice(0,3).map((p,i) => <File p={p} index={i} key={p.id} />)}</div>
    <details className="sb-workshop-drawer"><summary className="sb-hand">More from the workshop ↓<span>Graphics. Useful software. Tools from my own desk.</span></summary><div className="sb-workshop-contents"><div className="sb-file-shelf sb-extra-files">{projects.slice(3,5).map((p,i) => <File p={p} index={i+3} key={p.id} />)}</div><div className="sb-index-records">{projects.slice(5).map(p => <article key={p.id}><p className="sb-file-tab">{p.status}</p><h3>{p.name}</h3><p>{p.summary}</p><details><summary>Read the index card ↗</summary><ProjectEvidence project={p} /></details><ProjectLinks project={p} /></article>)}</div><div className="sb-reserved-note"><p className="sb-hand">A folder with nothing inside yet.</p><p>{reservedRepository.name} / {reservedRepository.note}</p><a href={reservedRepository.github} target="_blank" rel="noopener noreferrer">View reserved repository<ArrowUpRight size={14} aria-hidden="true" /></a></div></div></details>
    <p className="sb-source-note">Real project screenshots, original engineering documents, source-backed notes. NetShield and its SOC lab are one project.</p></section>;
}
