import { Pin, KeyRound, Sparkles, Award } from "lucide-react";
import { SectionHead } from "./SectionHead";

const products = [
  { icon: Pin, title: "Pins de Lapela", desc: "Detalhes que comunicam pertencimento e identidade corporativa." },
  { icon: KeyRound, title: "Chaveiros Personalizados", desc: "Presença diária com a sua marca na rotina de quem importa." },
  { icon: Sparkles, title: "Charms e Medalhas", desc: "Reconhecimento em metal que emociona e é guardado para sempre." },
  { icon: Award, title: "Acessórios com Logo", desc: "Identidade de marca aplicada em metal com acabamento premium." },
];

const stats = [
  { v: "250 un.", l: "Pedido mínimo por modelo" },
  { v: "45 dias", l: "Prazo a partir da aprovação" },
  { v: "30 anos", l: "De fábrica própria" },
];

export function Products() {
  return (
    <section id="produtos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="NOSSOS PRODUTOS"
          title={
            <>
              Brindes que viram <span className="font-light text-primary">símbolo da sua marca</span>
            </>
          }
          description="Cada peça desenvolvida sob demanda com acabamento de joalheria."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/60 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-accent/60 px-6 py-8 md:py-10">
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.v}
                className="relative px-6 py-4 text-center sm:py-0 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-16 after:-translate-x-1/2 after:bg-foreground/10 sm:after:bottom-auto sm:after:left-auto sm:after:right-0 sm:after:top-1/2 sm:after:h-10 sm:after:w-px sm:after:translate-x-0 sm:after:-translate-y-1/2 last:after:hidden"
              >
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-3xl font-extrabold text-primary md:text-4xl">{s.v}</dd>
                <p className="mt-1 text-sm text-foreground/70">{s.l}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
