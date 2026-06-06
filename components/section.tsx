"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { PolarWatermark, WaveWatermark } from "./watermarks";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  watermark?: "polar" | "wave" | "none";
  align?: "center" | "left";
}

export function Section({
  id,
  index,
  title,
  children,
  watermark = "polar",
  align = "center",
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-32"
    >
      <div className="watermark-grid" aria-hidden />
      {watermark === "polar" && <PolarWatermark />}
      {watermark === "wave" && <WaveWatermark />}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className={`relative z-10 flex w-full max-w-3xl flex-col ${
          align === "center" ? "items-center text-center" : "items-start text-left"
        }`}
      >
        <span className="mb-8 font-mono text-[0.62rem] uppercase tracking-[0.32em] text-accent/60">
          {index}
        </span>
        <h2 className="font-display text-3xl font-700 uppercase leading-tight tracking-[0.12em] text-balance text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <div
          className={`mt-12 text-pretty text-lg leading-loose text-muted-foreground md:text-xl ${
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          }`}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}
