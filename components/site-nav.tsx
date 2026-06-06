"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "manifesto", label: "01 — Manifesto" },
  { id: "architecture", label: "02 — Architecture" },
  { id: "rigor", label: "03 — Empirical Rigor" },
  { id: "capital", label: "04 — Intellectual Capital" },
  { id: "contact", label: "05 — Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center border border-border">
            <span className="h-2 w-2 bg-accent transition-transform duration-500 group-hover:rotate-45" />
          </span>
          <span className="font-display text-sm font-600 tracking-luxe text-foreground">
            JOVEYRA
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="font-display text-[0.68rem] tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden border border-border px-5 py-2 font-display text-[0.68rem] tracking-[0.22em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/5 md:inline-block"
        >
          INQUIRE
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-xs tracking-[0.22em] text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
