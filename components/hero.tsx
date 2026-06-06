"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-32 pb-24 md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 font-display text-[0.7rem] tracking-luxe text-muted-foreground"
        >
          00 — OVERVIEW · QUANTITATIVE INVESTMENT FIRM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="max-w-5xl font-display text-[1.75rem] font-600 leading-[1.08] text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          SYSTEMIC RIGOR.
          <br />
          <span className="text-muted-foreground">UNCONVENTIONAL ALPHA.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
          className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Joveyra is a quantitative investment firm founded on a singular
          conviction: that market complexity yields only to absolute structural
          discipline. We operate exclusively within highly controlled
          mathematical parameters, translating empirical research into
          non-consensus institutional execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#manifesto"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-border px-8 py-4 font-display text-[0.72rem] tracking-luxe text-foreground transition-all duration-500 hover:border-accent"
          >
            <span
              className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 120% at 50% 50%, rgba(196,205,218,0.16) 0%, transparent 70%)",
              }}
            />
            <span className="relative z-10">ENTER PORTAL</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <span className="font-display text-[0.65rem] tracking-[0.2em] text-muted-foreground">
            EST. UNDER STRICT OPERATIONAL DISCIPLINE
          </span>
        </motion.div>
      </div>
    </section>
  );
}
