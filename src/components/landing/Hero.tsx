import { Camera, Factory } from "lucide-react";

const trust = ["30 anos de mercado", "Certificação FAMA", "ABVTEX Ouro", "Fábrica própria"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-0 opacity-60" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary-foreground/85">
              <Factory className="h-3.5 w-3.5" aria-hidden />
              FÁBRICA PRÓPRIA · DESDE 1995
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              O brinde que a sua marca merece —{" "}
              <span className="font-light text-accent">
                fabricado com 30 anos de precisão.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              Pins, chaveiros e acessórios metálicos personalizados para empresas que não abrem mão da qualidade. A partir de 250 unidades.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Solicitar orçamento →
              </a>
              <a
                href="#produtos"
                className="hidden md:inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Ver produtos
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[5/4] w-full rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm">
              <div className="flex h-full flex-col items-center justify-center gap-3 text-primary-foreground/70">
                <Camera className="h-10 w-10" aria-hidden />
                <p className="text-sm">Flat lay de brindes metálicos dourados</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/85 md:grid-cols-4">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
