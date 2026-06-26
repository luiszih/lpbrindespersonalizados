import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "dark";
};

export function SectionHead({ eyebrow, title, description, align = "center", tone = "default" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowCls = tone === "dark" ? "text-accent" : "text-primary";
  const titleCls = tone === "dark" ? "text-surface-dark-foreground" : "text-foreground";
  const descCls = tone === "dark" ? "text-surface-dark-foreground/70" : "text-muted-foreground";
  return (
    <div className={`${alignCls} max-w-3xl`}>
      <p className={`text-[11px] font-semibold tracking-[0.22em] ${eyebrowCls}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl ${titleCls}`}>
        {title}
      </h2>
      {description ? <p className={`mt-4 text-base md:text-lg ${descCls}`}>{description}</p> : null}
    </div>
  );
}
