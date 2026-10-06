import { ArrowUpRight, FileDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { links, navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { Theme } from "@/data/themes";
import { ThemeToggle } from "./ThemeToggle";
import { containDialogFocus } from "@/lib/dialog";
import { afterHoursNav } from "@/data/scrapbook";

export function Header({ theme, onSelectTheme }: { theme: Theme; onSelectTheme: (theme: Theme) => void }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const destination = useRef<string | null>(null);
  const items = theme === "after-hours" ? afterHoursNav : navItems;
  const ids = useMemo(() => items.map((n) => n.id), [items]);
  const active = useActiveSection(ids);
  const close = useCallback(() => setOpen(false), []);
  useLockBodyScroll(open);
  useEffect(() => {
    const element = dialog.current;
    let anchorFrame = 0;
    if (open) element?.showModal();
    else if (element?.open) {
      element.close();
      opener.current?.focus({ preventScroll: true });
      const id = destination.current;
      destination.current = null;
      // Native dialog closure and scrollbar restoration settle over a frame.
      // Align the anchor after that reflow, rather than against the locked layout.
      if (id) anchorFrame = requestAnimationFrame(() => {
        anchorFrame = requestAnimationFrame(() => {
          history.pushState(null, "", `#${id}`);
          document.getElementById(id)?.scrollIntoView({ block: "start" });
        });
      });
    }
    const onResize = () => { if (window.innerWidth >= 1280) close(); };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); cancelAnimationFrame(anchorFrame); };
  }, [open, close]);
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header sticky top-0 z-50">
      <div className="container-x flex h-[72px] items-center justify-between gap-3">
        <a href="#top" className="brand brut brut-sm flex h-11 items-center gap-2.5 rounded-full pl-1.5 pr-3.5 no-underline" aria-label={`${profile.name} — back to top`}>
          <span className="fill-yellow grid h-7 w-7 place-items-center rounded-full font-display text-[0.7rem] font-bold">{profile.initials}</span>
          <span className="font-display text-[0.9rem] font-bold tracking-tight">Yousef<span className="text-yellow">.</span></span>
        </a>
        <nav aria-label="Primary" className="hidden xl:block"><ul className="flex items-center gap-5">
          {items.map((item) => <li key={item.id}><a href={`#${item.id}`} className="nav-link" aria-current={active === item.id ? "location" : undefined}>{item.label}</a></li>)}
        </ul></nav>
        <div className="flex items-center gap-2">
          {links.resume && <a href={links.resume} download className="header-cv brut brut-sm fill-yellow hidden h-11 items-center gap-2 rounded-full px-3 font-display text-sm font-bold no-underline sm:inline-flex"><FileDown size={15} aria-hidden />CV</a>}
          <ThemeToggle theme={theme} onSelect={onSelectTheme} />
          <button ref={opener} type="button" className="brut brut-sm grid h-11 w-11 place-items-center rounded-full xl:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={18} aria-hidden /></button>
        </div>
      </div>
    </header>
    <dialog ref={dialog} id="mobile-nav" className="menu-dialog" aria-label="Navigation" onKeyDown={containDialogFocus} onCancel={close} onClose={close} onClick={(event) => { if(event.target === event.currentTarget) close(); }}>
      <div className="menu-panel">
        <div className="flex items-center justify-between gap-4 mb-6"><p className="font-display text-xl font-bold">Where to?</p><button type="button" onClick={close} className="icon-button" aria-label="Close menu"><X size={20} aria-hidden /></button></div>
        <nav aria-label="Mobile"><ul className="space-y-1">{items.map((item) => <li key={item.id}><a href={`#${item.id}`} onClick={(event) => { event.preventDefault(); destination.current = item.id; close(); }} className="menu-link" aria-current={active === item.id ? "location" : undefined}>{item.label}<ArrowUpRight size={18} aria-hidden /></a></li>)}</ul></nav>
        <div className="mt-6 flex flex-wrap gap-4"><a href={`mailto:${profile.email}`} className="link-editorial py-2">Email me</a>{links.resume && <a href={links.resume} download className="link-editorial py-2">Download CV</a>}</div>
      </div>
    </dialog>
  </>;
}
