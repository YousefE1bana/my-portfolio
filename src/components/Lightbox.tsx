import { X, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { containDialogFocus } from "@/lib/dialog";
interface Props { open: boolean; onClose: () => void; src?: string; alt: string; title: string; caption?: string; verifyUrl?: string; }
export function Lightbox({ open, onClose, src, alt, title, caption, verifyUrl }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  useLockBodyScroll(open);
  useEffect(() => {
    const element = dialog.current;
    if (open && !element?.open) element?.showModal();
    else if (!open && element?.open) element.close();
  }, [open]);
  return createPortal(<dialog ref={dialog} className="certificate-dialog" aria-labelledby="preview-title" aria-describedby={caption ? "preview-caption" : undefined}
    onKeyDown={containDialogFocus} onCancel={onClose} onClose={onClose} onClick={(event) => { if(event.target === event.currentTarget) onClose(); }}>
    {open && <figure className="m-0">
      <div className="flex items-start justify-between gap-4 p-4 sm:p-5 border-b border-[var(--border)]">
        <div className="min-w-0"><h2 id="preview-title" className="text-lg leading-snug">{title}</h2>{caption && <p id="preview-caption" className="mt-1 text-sm text-[var(--muted)]">{caption}</p>}</div>
        <button type="button" onClick={onClose} className="icon-button shrink-0" aria-label="Close preview" autoFocus><X size={20} aria-hidden /></button>
      </div>
      {src ? <img src={src} alt={alt} className="certificate-full" decoding="async" /> : <p className="p-8">No certificate image available.</p>}
      {src && <figcaption className="px-5 py-3 flex flex-wrap gap-x-6 gap-y-3"><a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 link-editorial text-sm">Open full-size certificate<ExternalLink size={14} aria-hidden /></a>{verifyUrl && <a href={verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 link-editorial text-sm">Open issuer verification<ExternalLink size={14} aria-hidden /></a>}</figcaption>}
    </figure>}
  </dialog>, document.body);
}
