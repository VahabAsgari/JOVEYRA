export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="#C5C6C7"
      aria-hidden="true"
    >
      {/* USER LOGO REPLACEMENT PATH HERE */}
      {/* Stylized "J" built from thin concentric golden-ratio arcs */}
      <circle cx="24" cy="24" r="20" strokeWidth="0.6" opacity="0.35" />
      <circle cx="24" cy="24" r="13" strokeWidth="0.6" opacity="0.5" />
      {/* Outer J hook */}
      <path
        d="M30 11 V27 A8 8 0 0 1 14 27"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Inner concentric arc accent */}
      <path
        d="M25 24 A5 5 0 0 1 18.5 27.4"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Top serif tick */}
      <path d="M25 11 H34" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
