"use client";

import { motion } from "framer-motion";

/**
 * Ultra-thin concentric polar grid watermark.
 * Locked in the background, slowly drifts/pulsates. Silver, opacity ~10-15%.
 */
export function PolarWatermark() {
  const rings = [40, 80, 120, 160, 200, 240];
  const spokes = Array.from({ length: 24 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <motion.svg
        viewBox="0 0 600 600"
        className="h-[140%] w-auto max-w-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
      >
        <g stroke="#C5C6C7" fill="none" opacity={0.12}>
          {rings.map((r) => (
            <circle key={r} cx="300" cy="300" r={r} strokeWidth="0.75" />
          ))}
          {spokes.map((_, i) => {
            const a = (i / spokes.length) * Math.PI * 2;
            const x = +(300 + Math.cos(a) * 240).toFixed(2);
            const y = +(300 + Math.sin(a) * 240).toFixed(2);
            return (
              <line key={i} x1="300" y1="300" x2={x} y2={y} strokeWidth="0.5" />
            );
          })}
        </g>
      </motion.svg>
    </motion.div>
  );
}

/**
 * Single ultra-thin vector wave frequency line watermark.
 */
export function WaveWatermark() {
  const width = 1200;
  const path = (amp: number, freq: number, phase: number) => {
    let d = `M 0 ${300}`;
    for (let x = 0; x <= width; x += 6) {
      const y = 300 + Math.sin((x / width) * Math.PI * freq + phase) * amp;
      d += ` L ${x} ${y.toFixed(2)}`;
    }
    return d;
  };

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <svg viewBox="0 0 1200 600" className="h-full w-[180%] max-w-none">
        <g stroke="#C5C6C7" fill="none" opacity={0.13}>
          {[
            { amp: 90, freq: 6, phase: 0 },
            { amp: 60, freq: 9, phase: 1.4 },
            { amp: 120, freq: 4, phase: 2.6 },
          ].map((w, i) => (
            <motion.path
              key={i}
              d={path(w.amp, w.freq, w.phase)}
              strokeWidth="0.75"
              animate={{ x: [0, -40, 0] }}
              transition={{
                duration: 30 + i * 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
