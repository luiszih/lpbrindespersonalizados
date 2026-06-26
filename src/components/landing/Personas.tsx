import { Users, BarChart3, PartyPopper, Trophy } from "lucide-react";
import { SectionHead } from "./SectionHead";

const personas = [
  {
    icon: Users,
    title: "Gestor de RH / Endomarketing",
    dor: "Brindes genéricos que não geram pertencimento nem são guardados.",
    sol: "Pins e acessórios premium que viram símbolos de reconhecimento da equipe.",
  },
  {
    icon: BarChart3,
    title: "Diretor de Marketing B2B",
    dor: "Brindes de baixo valor percebido que não representam a marca.",
    sol: "Peças metálicas exclusivas com acabamento de joalheria que elevam a percepção da marca.",
  },
  {
    icon: PartyPopper,
    title: "Coordenador de Eventos Corporativos",
    dor: "Fornecedores que não entregam no prazo nem na quantidade certa.",
    sol: "Fábrica própria com controle total do processo e prazo garantido desde o briefing.",
  },
  {
    icon: Trophy,
    title: "Licenciado de Grandes Marcas",
    dor: "Falta de fornecedores homologados para produzir itens licenciados com segurança.",
    sol: "Certificação FAMA Disney garantindo conformidade, rastreabilidade e segurança jurídica.",
  },
];

export function Personas() {
  return (
    <section className="bg-surface-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="PARA QUE É:"
          title={
            <>
              Feito para quem <span className="font-light text-primary">não negocia a imagem da marca.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {personas.map(({ icon: Icon, title, dor, sol }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/60 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="min-w-0 text-lg font-bold text-foreground">{title}</h3>
              </div>
              <div className="mt-6 grid gap-4">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.22em] text-primary">DOR</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/85">{dor}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-[10px] font-bold tracking-[0.22em] text-primary">SOLUÇÃO</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/85">{sol}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
