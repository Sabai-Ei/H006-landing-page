"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/content/navigation";

/** Accessible disclosure menu for < lg. Closes on Escape, outside click and link activation. */
export function MobileMenu({ items, phoneTel, phoneDisplay }: { items: readonly NavItem[]; phoneTel: string; phoneDisplay: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/[0.18] bg-white p-0 text-ink"
      >
        {open ? <X size={20} strokeWidth={1.6} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.6} aria-hidden="true" />}
      </button>
      <nav
        id={panelId}
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 border-b border-ink/[0.12] bg-white px-5 pb-6 pt-2 shadow-[0_30px_50px_-36px_rgba(14,26,34,0.5)]"
      >
        <ul className="m-0 list-none p-0">
          {items.map((item) => (
            <li key={item.href} className="border-b border-ink/10 last:border-b-0">
              <a href={item.href} onClick={() => setOpen(false)} className="flex min-h-[52px] items-center text-[17px] font-medium">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={phoneTel} className="mt-4 inline-flex min-h-11 items-center text-[15px] font-medium underline">
          Call {phoneDisplay}
        </a>
      </nav>
    </div>
  );
}
