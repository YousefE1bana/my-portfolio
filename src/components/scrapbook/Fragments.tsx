import { useRef, type CSSProperties, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { media } from '@/data/scrapbook';

interface PhotoProps { image: string; title: string; note?: string; className?: string; rotation?: number; children?: ReactNode; }
export function Photo({ image, title, note, className = '', rotation = 0, children }: PhotoProps) {
  return <figure className={`sb-photo ${className}`} style={{ '--tilt': `${rotation}deg` } as CSSProperties}>
    <span className="sb-tape" aria-hidden="true" />
    <img src={media(image)} alt={title} width="900" height="675" loading="lazy" decoding="async" />
    <figcaption><strong>{title}</strong>{note && <span className="sb-hand">{note}</span>}{children}</figcaption>
  </figure>;
}

export function Note({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`sb-note sb-hand ${className}`}><span className="sb-tape" aria-hidden="true" />{children}</div>;
}

/** A few large scene layers have depth; the readable content never moves. */
export function SceneLayer({ image, className = '', alt = '' }: { image: string; className?: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  return <div ref={ref} className={`sb-scene-layer ${className}`}><motion.img src={media(image)} alt={alt} loading="lazy" decoding="async" width="1536" height="1024" style={{ y }} /></div>;
}

export function Heading({ title, note, id }: { title: string; note?: string; id?: string }) {
  return <div className="sb-heading"><h2 id={id}>{title}</h2>{note && <p className="sb-hand">{note}</p>}</div>;
}
