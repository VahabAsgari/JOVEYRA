"use client";

import { motion } from "framer-motion";

/**
 * Slow ambient gradient loop that drifts between charcoal black and
 * deep midnight blue over a long, ultra-smooth cycle.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(120% 120% at 20% 10%, #121921 0%, #0b0c10 55%, #0b0c10 100%)",
            "radial-gradient(120% 120% at 80% 30%, #16202b 0%, #0b0c10 55%, #0b0c10 100%)",
            "radial-gradient(120% 120% at 50% 90%, #121921 0%, #0b0c10 60%, #0b0c10 100%)",
            "radial-gradient(120% 120% at 20% 10%, #121921 0%, #0b0c10 55%, #0b0c10 100%)",
          ],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Drifting soft glow accents */}
      <motion.div
        aria-hidden
        className="absolute left-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full blur-[140px]"
        style={{ background: "rgba(36, 58, 84, 0.35)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 50, 0] }}
        transition={{ duration: 32, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 h-[34rem] w-[34rem] rounded-full blur-[150px]"
        style={{ background: "rgba(22, 32, 43, 0.5)" }}
        animate={{ x: [0, -70, 40, 0], y: [0, 50, -40, 0] }}
        transition={{ duration: 36, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
