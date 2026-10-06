import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { isTheme, themes, THEME_STORAGE_KEY, type Theme } from "@/data/themes";
export type { Theme } from "@/data/themes";
function readInitial(): Theme {
  const attribute = document.documentElement.dataset.theme;
  return isTheme(attribute) ? attribute : "dark";
}
function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themes.find((t) => t.id === theme)!.color);
}
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readInitial);
  useEffect(() => { applyTheme(theme); }, [theme]);
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      try { if (isTheme(localStorage.getItem(THEME_STORAGE_KEY))) return; } catch { /* Storage may be unavailable. */ }
      setThemeState(event.matches ? "light" : "dark");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  const setTheme = useCallback((next: Theme) => {
    try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch { /* Works for this visit. */ }
    const change = () => {
      flushSync(() => setThemeState(next)); applyTheme(next);
      if (next !== theme && (next === 'after-hours' || theme === 'after-hours')) {
        history.replaceState(null, '', location.pathname + location.search);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && document.startViewTransition) { document.startViewTransition(change); }
    else { change(); }
  }, [theme]);
  return { theme, setTheme };
}
