import { useCallback, useState } from 'react';
import { achievements, credentials, education, skillGroups, training } from '@/data/portfolio';
import { Lightbox } from '@/components/Lightbox';

interface Preview { src: string; title: string; caption: string; verifyUrl?: string; }
export function Notebook() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const close = useCallback(() => setPreview(null), []);
  return <section className="sb-notebook sb-paper" aria-label="The professional notebook"><div className="sb-notebook-title"><h2>The work has receipts.</h2><p className="sb-hand">A few pages from the other side of the desk.</p></div>
    <div className="sb-notebook-folders">
      <details id="skills"><summary>In the toolbox <span aria-hidden="true">↗</span></summary><div className="sb-toolbox">{skillGroups.map(group => <div key={group.id}><h3>{group.label}</h3><p>{group.items.join(' / ')}</p></div>)}</div><p className="sb-file-source">Experience from projects, labs and structured training.</p></details>
      <details id="training"><summary>Learning, on record <span aria-hidden="true">↗</span></summary><ul>{training.map(item => <li key={item.id}><h3>{item.title}</h3><p>{item.provider} · {item.period} · {item.status === 'Course' ? 'Course completed' : item.status}{item.hours && ` · ${item.hours}`}</p>{item.image && <button onClick={() => setPreview({ src: item.image!, title: item.title, caption: item.provider, verifyUrl: item.verifyUrl })}>Read certificate ↗</button>}</li>)}</ul><p className="sb-file-source">{credentials.length} certificate and award records. The eJPTv2-aligned item is a course, not an INE certification. Palo Alto completed September 8, 2026; the Innovera certificate confirms 40 hours of the same training, counted once.</p><div className="sb-credential-gallery">{credentials.map(item => <button key={item.id} onClick={() => setPreview({ src:item.image, title:item.title, caption:`${item.provider} · ${item.caption}`, verifyUrl:item.verifyUrl })} aria-label={`Open certificate: ${item.provider} — ${item.title}`}><img src={item.thumbnail} alt={`${item.provider} certificate thumbnail`} width={item.thumbnailWidth} height={item.thumbnailHeight} loading="lazy" decoding="async" /><span>{item.provider} / {item.title}</span></button>)}</div></details>
      <details id="achievements"><summary>Shared wins <span aria-hidden="true">↗</span></summary><ul>{achievements.map(item => <li key={item.id}><h3>{item.placement} / {item.title}</h3><p>{item.date}{item.context && ` · ${item.context}`}</p>{item.image && <button onClick={() => setPreview({ src: item.image!, title: item.title, caption: item.date })}>Read certificate ↗</button>}</li>)}</ul><p>{education.institution} · {education.degree} · {education.period}</p></details>
    </div><Lightbox open={!!preview} onClose={close} src={preview?.src} title={preview?.title ?? ''} alt={preview ? `${preview.title} certificate` : ''} caption={preview?.caption} verifyUrl={preview?.verifyUrl} />
  </section>;
}
