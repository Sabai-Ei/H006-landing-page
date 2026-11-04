import type { ReactNode } from "react";

/** Primary pill button (approved style: blue fill, on-primary text). */
export const btnPrimary =
  "inline-flex items-center justify-center rounded-pill bg-primary text-on-primary font-semibold transition-opacity hover:opacity-90";

export const btnSecondary =
  "inline-flex items-center justify-center rounded-pill border-[1.5px] border-ink bg-white text-ink font-medium transition-colors hover:bg-secondary";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.2em] text-muted lg:text-[11px] lg:tracking-[0.22em] ${className}`}>
      {children}
    </p>
  );
}

/** Decorative mesh/grid layers are never exposed to assistive tech. */
export function Deco({ className }: { className: string }) {
  return <div aria-hidden="true" className={className} />;
}
