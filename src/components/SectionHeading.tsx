import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";
import type { Accent } from "@/data/portfolio";

interface Props {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  accent?: Accent;
  align?: "left" | "split";
  id?: string;
  className?: string;
}

const accentText: Record<Accent, string> = {
  yellow: "text-yellow",
  orange: "text-orange",
  pink: "text-pink",
  blue: "text-blue",
  green: "text-green",
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  accent = "yellow",
  align = "split",
  id,
  className,
}: Props) {
  return (
    <Reveal className={cn("mb-10 md:mb-14", className)}>
      <div className="flex items-center gap-3 mb-4">
        <span
          className={cn(
            "mono text-[0.72rem] font-semibold tracking-[0.14em] px-2 py-0.5 rounded-md border-[length:var(--border-w)] border-[var(--border)]",
            accentText[accent],
          )}
        >
          {index}
        </span>
        <span className="label">{eyebrow}</span>
        <span className="h-px flex-1 bg-[var(--border)] opacity-40 hidden sm:block" aria-hidden />
      </div>
      <div
        className={cn(
          align === "split" ? "grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end" : "max-w-3xl",
        )}
      >
        <h2 id={id} className="text-[clamp(2rem,4.6vw,3.25rem)]">
          {title}
        </h2>
        {description && (
          <p className="text-[var(--muted)] text-[0.98rem] leading-relaxed md:justify-self-end md:max-w-[26rem]">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
