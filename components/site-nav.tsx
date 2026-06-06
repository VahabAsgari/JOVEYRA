"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "./monogram";

const LINKS = [
  { id: "manifesto", label: "[01] MANIFESTO" },
  { id: "architecture", label: "[02] ARCHITECTURE" },
  { id: "rigor", label: "[03] RIGOR" },
  { id: "capital", label: "[04] CAPITAL" },
  { id: "contact", label: "[05] PORTAL" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-white/[0.05] bg-black/35 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <a href="#top" className="group flex items-center gap-2.5">
          <Monogram className="h-7 w-7" />
          <span className="font-display text-[0.8rem] font-600 tracking-[0.24em] text-foreground">
            JOVEYRA
          </span>
        </a>

        <span className="hidden h-4 w-px bg-white/10 lg:block" />

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group relative font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent opacity-0 shadow-[0_0_8px_2px_rgba(196,205,218,0.6)] transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {open && (
        <div className="fixed left-1/2 top-24 z-40 w-[88vw] max-w-sm -translate-x-1/2 rounded-2xl border border-white/[0.06] bg-black/80 p-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
