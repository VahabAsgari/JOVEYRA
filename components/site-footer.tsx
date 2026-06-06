import { Monogram } from "./monogram";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border px-8 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2.5">
          <Monogram className="h-6 w-6" />
          <span className="font-display text-xs tracking-[0.24em] text-foreground">JOVEYRA</span>
        </div>
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-muted-foreground">
          Quantitative Investment Firm · Non-Consensus Institutional Execution
        </p>
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} Joveyra
        </p>
      </div>
    </footer>
  );
}
