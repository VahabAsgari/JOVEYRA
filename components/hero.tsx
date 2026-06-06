"use client";

import { motion } from "framer-motion";
import { WaveWatermark } from "./watermarks";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-32 text-center"
    >
      <div className="watermark-grid" aria-hidden />
      <WaveWatermark />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted-foreground"
        >
          [00] — Overview · Quantitative Investment Firm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="font-display text-3xl font-700 uppercase leading-[1.12] tracking-[0.1em] text-balance text-foreground sm:text-5xl md:text-6xl"
        >
          Systemic Rigor.
          <br />
          <span className="text-muted-foreground">Unconventional Alpha.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
          className="mt-12 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground md:text-xl"
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
          className="mt-16"
        >
          <a
            href="#manifesto"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-border px-9 py-4 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:border-accent"
          >
            <span
              className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 120% at 50% 50%, rgba(196,205,218,0.18) 0%, transparent 70%)",
              }}
            />
            <span className="relative z-10">Enter Portal</span>
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground/60"
      >
        Scroll · Established under strict operational discipline
      </motion.div>
    </section>
  );
}
