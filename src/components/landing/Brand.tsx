type Props = { tone?: "light" | "dark" };

export function Brand({ tone = "light" }: Props) {
  const ring = tone === "light" ? "border-primary-foreground/40 text-primary-foreground" : "border-foreground/20 text-foreground";
  const sub = tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground";
  const main = tone === "light" ? "text-primary-foreground" : "text-foreground";
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${ring} font-semibold text-base`}
        aria-hidden
      >
        e.
      </span>
      <div className="min-w-0 leading-tight">
        <div className={`text-sm font-semibold tracking-[0.18em] ${main}`}>ELIZA</div>
        <div className={`text-[10px] font-medium tracking-[0.22em] ${sub}`}>ACESSÓRIOS &amp; DESIGN</div>
      </div>
    </div>
  );
}
