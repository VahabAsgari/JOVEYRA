"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  flip?: boolean;
}

export function Section({ id, index, title, children, visual, flip }: SectionProps) {
  return (
    <section
      id={id}
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-36"
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="mb-6 font-display text-[0.7rem] tracking-luxe text-accent/70">
            [{index}]
          </p>
          <h2 className="max-w-md font-display text-2xl font-600 leading-tight text-balance text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <div className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {children}
          </div>
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  );
}
