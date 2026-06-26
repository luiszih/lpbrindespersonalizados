import { ShieldCheck, Medal, Factory } from "lucide-react";
import { SectionHead } from "./SectionHead";

const items = [
  {
    icon: ShieldCheck,
    title: "Certificação FAMA, Walt Disney",
    desc: "Habilitados a produzir para marcas globais licenciadas com segurança jurídica, rastreabilidade total e rigorosos padrões de qualidade.",
  },
  {
    icon: Medal,
    title: "ABVTEX Ouro",
    desc: "Processo produtivo ético, sustentável e alinhado aos mais altos padrões do mercado global de responsabilidade socioambiental.",
  },
  {
    icon: Factory,
    title: "30 Anos de Fábrica Própria",
    desc: "Três décadas fabricando com controle total de qualidade e atenção a cada detalhe, do briefing à entrega.",
  },
];

export function WhyEliza() {
  return (
    <section id="diferenciais" className="bg-surface-dark py-20 text-surface-dark-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          tone="dark"
          eyebrow="POR QUE ELIZA"
          title={
            <>
              Tradição certificada, <span className="font-light text-accent">precisão industrial.</span>
            </>
          }
          description="Três décadas fabricando com controle total de qualidade e atenção a cada detalhe, do briefing à entrega."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-3xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/[0.04] p-8 transition-colors hover:border-accent/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-surface-dark-foreground/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
