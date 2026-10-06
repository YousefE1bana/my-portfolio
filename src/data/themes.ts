import type { Variants } from "framer-motion";
import { fadeIn, technicalReveal, editorialReveal } from "@/lib/motion";

export const themes = [
  { id: "dark", label: "Dark", description: "Precise systems. Inspectable evidence.", color: "#090f17", reveal: technicalReveal },
  { id: "light", label: "Light", description: "Clear space. Sharp focus.", color: "#ffffff", reveal: editorialReveal },
  { id: "after-hours", label: "After Hours", description: "My desk. My stories. An open book.", color: "#11120f", reveal: fadeIn },
] as const satisfies readonly { id: string; label: string; description: string; color: string; reveal: Variants }[];
export type Theme = (typeof themes)[number]["id"];
export const THEME_STORAGE_KEY = "yo-theme";
export function isTheme(value: unknown): value is Theme {
  return themes.some((theme) => theme.id === value);
}
