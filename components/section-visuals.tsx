"use client";

import { motion } from "framer-motion";

const STROKE = "#c4cdda";

/** Rotating clarity ring — manifesto */
export function VisualManifesto() {
  return (
    <svg viewBox="0 0 320 320" className="h-72 w-72 md:h-80 md:w-80" fill="none">
      {[140, 110, 80, 50].map((r, i) => (
        <motion.circle
          key={r}
          cx="160"
          cy="160"
          r={r}
          stroke={STROKE}
          strokeWidth="0.6"
          opacity={0.18 + i * 0.06}
          strokeDasharray={i % 2 === 0 ? "2 6" : undefined}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + i * 12, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "160px 160px" }}
        />
      ))}
      <circle cx="160" cy="160" r="3" fill={STROKE} opacity={0.6} />
    </svg>
  );
}

/** Network architecture nodes */
export function VisualArchitecture() {
  const nodes = [
    [60, 60], [160, 40], [260, 70], [90, 160], [230, 170], [160, 260], [50, 250], [270, 250],
  ];
  return (
    <svg viewBox="0 0 320 320" className="h-72 w-72 md:h-80 md:w-80" fill="none">
      {nodes.map(([x1, y1], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => {
          const d = Math.hypot(x2 - x1, y2 - y1);
          if (d > 150) return null;
          return (
            <motion.line
              key={`${i}-${j}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={STROKE}
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.22 }}
              transition={{ duration: 1.5, delay: (i + j) * 0.05 }}
              viewport={{ once: true }}
            />
          );
        })
      )}
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r="2.5"
          fill={STROKE}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

/** Empirical data scatter / regression */
export function VisualRigor() {
  const pts = Array.from({ length: 36 }).map((_, i) => {
    const x = +(30 + (i / 36) * 260).toFixed(2);
    const base = 250 - (i / 36) * 190;
    const y = +(base + (Math.sin(i * 1.7) * 18 + Math.cos(i * 0.9) * 12)).toFixed(2);
    return [x, y];
  });
  return (
    <svg viewBox="0 0 320 320" className="h-72 w-72 md:h-80 md:w-80" fill="none">
      <line x1="30" y1="30" x2="30" y2="280" stroke={STROKE} strokeWidth="0.5" opacity={0.3} />
      <line x1="30" y1="280" x2="290" y2="280" stroke={STROKE} strokeWidth="0.5" opacity={0.3} />
      <motion.line
        x1="30" y1="250" x2="290" y2="60"
        stroke={STROKE} strokeWidth="0.8" opacity={0.4}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      {pts.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r="2"
          fill={STROKE}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.02 }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  );
}

/** Converging intellectual capital */
export function VisualCapital() {
  return (
    <svg viewBox="0 0 320 320" className="h-72 w-72 md:h-80 md:w-80" fill="none">
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = +(160 + Math.cos(a) * 130).toFixed(2);
        const y = +(160 + Math.sin(a) * 130).toFixed(2);
        return (
          <motion.line
            key={i}
            x1={x} y1={y} x2="160" y2="160"
            stroke={STROKE} strokeWidth="0.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 1.2, delay: i * 0.06 }}
            viewport={{ once: true }}
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = +(160 + Math.cos(a) * 130).toFixed(2);
        const y = +(160 + Math.sin(a) * 130).toFixed(2);
        return <circle key={i} cx={x} cy={y} r="2" fill={STROKE} opacity={0.5} />;
      })}
      <motion.circle
        cx="160" cy="160" r="5" fill={STROKE}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}
