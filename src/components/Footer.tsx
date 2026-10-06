import { ArrowUp } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-[length:var(--border-w)] border-[var(--border)] py-8">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="fill-yellow grid h-9 w-9 place-items-center rounded-full border-[length:var(--border-w)] border-[var(--border)] font-display text-[0.75rem] font-bold shadow-[2px_2px_0_var(--shadow)]">
            {profile.initials}
          </span>
          <div>
            <p className="font-display text-[0.95rem] font-bold tracking-tight">{profile.name}</p>
            <p className="mono text-[0.68rem] text-[var(--muted)]">
              © {year} · {profile.targetRoles}
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="nav-link">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#top"
          className="group brut brut-interactive brut-sm inline-flex h-10 w-fit items-center gap-2 rounded-full bg-[var(--surface-raised)] px-4 font-display text-[0.82rem] font-bold no-underline"
        >
          Back to top
          <ArrowUp size={15} strokeWidth={2.4} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
