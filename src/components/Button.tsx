import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Accent } from "@/data/portfolio";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-tight select-none whitespace-nowrap " +
  "border-[length:var(--border-w)] border-[var(--border)] transition-[transform,box-shadow,background-color,color] duration-150 ease-[cubic-bezier(0.2,0.8,0.2,1)] " +
  "shadow-[var(--shadow-size)_var(--shadow-size)_0_var(--shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)_var(--shadow-hover)_0_var(--shadow)] " +
  "active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-press)_var(--shadow-press)_0_var(--shadow)] " +
  "motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8rem]",
  md: "h-11 px-5 text-[0.92rem]",
  lg: "h-13 px-6 text-base",
};

const accentFill: Record<Accent, string> = {
  yellow: "fill-yellow",
  orange: "fill-orange",
  pink: "fill-pink",
  blue: "fill-blue",
  green: "fill-green",
};

function variantClass(variant: Variant, accent: Accent) {
  switch (variant) {
    case "primary":
      return accentFill[accent];
    case "outline":
      return "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-raised)]";
    case "ghost":
      return "bg-transparent border-transparent shadow-none hover:shadow-none hover:bg-[var(--surface-raised)] hover:translate-x-0 hover:translate-y-0 active:shadow-none";
  }
}

interface CommonProps {
  variant?: Variant;
  accent?: Accent;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "outline", accent = "yellow", size = "md", className, children, ...rest } = props;
  const classes = cn(base, sizes[size], variantClass(variant, accent), className);

  if ("href" in rest && typeof rest.href === "string") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const external = /^https?:\/\//.test(anchorProps.href ?? "");
    return (
      <a
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
