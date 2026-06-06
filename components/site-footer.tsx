export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center border border-border">
            <span className="h-1.5 w-1.5 bg-accent" />
          </span>
          <span className="font-display text-xs tracking-luxe text-foreground">JOVEYRA</span>
        </div>
        <p className="font-display text-[0.6rem] tracking-[0.2em] text-muted-foreground">
          QUANTITATIVE INVESTMENT FIRM · NON-CONSENSUS INSTITUTIONAL EXECUTION
        </p>
        <p className="font-display text-[0.6rem] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} JOVEYRA
        </p>
      </div>
    </footer>
  );
}
