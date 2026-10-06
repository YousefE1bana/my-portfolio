import { useCallback, useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Lightbox } from '@/components/Lightbox';
import { SectionHeading } from '@/components/SectionHeading';
import { credentials, training } from '@/data/portfolio';

type Credential = (typeof credentials)[number];
export function Training() {
  const [preview, setPreview] = useState<Credential | null>(null);
  const close = useCallback(() => setPreview(null), []);
  return <section id="training" className="section" aria-labelledby="training-title"><div className="container-x"><SectionHeading index="05" eyebrow="Training & credentials" id="training-title" title="Study it. Then put it to work." description="Structured offensive and defensive training, followed by practical labs. Course completion and professional certification are different things." />
    <ol className="training-ledger">{training.map(item => <li key={item.id}><div className="training-date"><span>{item.period}</span><span className="training-status">{item.status === 'Course' ? 'Course completed' : item.status}</span></div><div><h3>{item.title}</h3><p className="training-provider">{item.provider}{item.hours && ` / ${item.hours}`}</p><details className="training-details"><summary>Training focus<Plus size={15} aria-hidden="true" /></summary><p>{item.description ?? 'Completed an eJPTv2-aligned penetration-testing course. This is a course certificate, not an INE eJPT certification.'}</p><p>{item.focus.join(' · ')}</p></details></div>{item.image ? <button type="button" className="training-proof" onClick={() => setPreview(credentials.find(c => c.id === item.id)!)} aria-label={`Preview certificate: ${item.title}`}>Certificate<ArrowUpRight size={16} aria-hidden="true" /></button> : <span className="training-proof text-[var(--muted)]">160h program</span>}</li>)}</ol>
    <div className="credentials-heading"><h3>Evidence, in view.</h3><p>{credentials.length} original certificates and award records. Select one to read it.</p></div><ul className="credential-gallery">{credentials.map(item => <li key={item.id}><button type="button" onClick={() => setPreview(item)} aria-label={`Open certificate: ${item.provider} — ${item.title}`}><img src={item.thumbnail} alt={`${item.provider}: ${item.title} certificate thumbnail`} loading="lazy" decoding="async" width={item.thumbnailWidth} height={item.thumbnailHeight} /><span>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></span></button></li>)}</ul>
    <p className="credential-note">Network Security Fundamentals: Palo Alto Academy completion dated September 8, 2026, validation m8PPpCl5P7. The supplied Innovera Academy certificate confirms 40 training hours for the same training; those hours are counted once. Its original has no printed date or certificate identifier.</p>
  </div><Lightbox open={!!preview} onClose={close} src={preview?.image} verifyUrl={preview?.verifyUrl} alt={preview ? `${preview.title} certificate` : ''} title={preview?.title ?? ''} caption={preview ? `${preview.provider} · ${preview.caption}` : undefined} /></section>;
}
