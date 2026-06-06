"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Low-opacity vector field of mathematical wave frequencies that
 * shift calmly in response to scroll position.
 */
export function MathWaves() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const shift1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const shift2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 0.14, 0.14, 0.08]);

  const buildWave = (amp: number, freq: number, phase: number, y: number) => {
    const pts: string[] = [];
    for (let x = 0; x <= 1440; x += 12) {
      const yy = y + Math.sin((x / 1440) * Math.PI * 2 * freq + phase) * amp;
      pts.push(`${x},${yy.toFixed(1)}`);
    }
    return `M ${pts.join(" L ")}`;
  };

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        style={{ opacity }}
        fill="none"
      >
        <motion.g style={{ x: shift1 }} stroke="#c4cdda" strokeWidth="0.6">
          {Array.from({ length: 7 }).map((_, i) => (
            <path key={`a${i}`} d={buildWave(34, 3, i * 0.5, 180 + i * 90)} />
          ))}
        </motion.g>
        <motion.g style={{ x: shift2 }} stroke="#6f8095" strokeWidth="0.5" opacity={0.6}>
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={`b${i}`}
              stroke="#6f8095"
              strokeWidth="0.5"
              d={buildWave(22, 5, i * 0.9 + 1, 260 + i * 130)}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  );
}
