import { useEffect, useState } from "react";

/** Tracks which section id is currently most visible in the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (visible.size === 0) {
          if (window.scrollY < 200) setActive(null);
          return;
        }
        // Pick the section that appears first in document order among visible ones
        const ordered = ids.filter((id) => visible.has(id));
        setActive(ordered[0] ?? null);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.5] },
    );

    // Theme-specific sections can arrive after the lazy page has loaded.
    const attach = () => {
      const elements = ids.map((id) => document.getElementById(id));
      if (elements.some((element) => !element)) return false;
      elements.forEach((element) => observer.observe(element!));
      return true;
    };
    const pending = new MutationObserver(() => {
      if (attach()) pending.disconnect();
    });
    if (!attach()) pending.observe(document.getElementById('main') ?? document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); pending.disconnect(); };
  }, [ids]);

  return active;
}
