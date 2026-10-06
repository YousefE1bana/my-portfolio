import { Moon, Sun, Headphones } from "lucide-react";
import { themes, type Theme } from "@/data/themes";
export function ThemeToggle({ theme, onSelect }: { theme: Theme; onSelect: (theme: Theme) => void }) {
  const icons = { dark: Moon, light: Sun, "after-hours": Headphones };
  return <div className="theme-switch" role="group" aria-label="Choose your experience">
    {themes.map((option) => {
      const Icon = icons[option.id];
      return <button key={option.id} type="button" aria-label={`${option.label} theme`} aria-pressed={theme === option.id}
        onClick={() => onSelect(option.id)} title={option.description}>
        <Icon size={16} aria-hidden /><span>{option.label}</span>
      </button>;
    })}
  </div>;
}
