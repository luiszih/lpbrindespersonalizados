import { Factory } from "lucide-react";
import heroImage from "@/assets/hero-chaveiros.jpeg.asset.json";

const trust = ["30 anos de mercado", "Certificação FAMA", "ABVTEX Ouro", "Fábrica própria"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background text-foreground lg:bg-primary lg:text-primary-foreground"
    >
      {/* Desktop background: original copper gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 hidden opacity-60 lg:block"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-foreground/80 lg:border-primary-foreground/30 lg:text-primary-foreground/85">
              <Factory className="h-3.5 w-3.5" aria-hidden />
              FÁBRICA PRÓPRIA · DESDE 1995
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Acessórios corporativos&nbsp;
              <span className="block font-light text-primary lg:text-accent">
                Que elevam o valor da sua marca.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-foreground/75 md:text-lg lg:mx-0 lg:text-primary-foreground/85">
              Materializamos a sua ideia em acessórios metálicos de alto valor percebido, unindo inteligência industrial a um cuidado único no desenvolvimento.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] lg:bg-accent lg:text-accent-foreground"
              >
                Solicitar orçamento →
              </a>
              <a
                href="#produtos"
                className="hidden md:inline-flex items-center justify-center rounded-full border border-primary/60 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 lg:border-primary-foreground/40 lg:text-primary-foreground lg:hover:bg-primary-foreground/10"
              >
                Ver produtos
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm">
              <img
                src={heroImage.url}
                alt="Modelo segurando chaveiros metálicos personalizados"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-foreground/10 pt-6 text-sm text-foreground/80 md:grid-cols-4 lg:border-primary-foreground/15 lg:text-primary-foreground/85">
          {trust.map((t) => (
            <li key={t} className="flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary lg:bg-accent" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
