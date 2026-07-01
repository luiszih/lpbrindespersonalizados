import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHead } from "./SectionHead";

const items = [
  {
    q: "Qual o pedido mínimo para brindes corporativos?",
    a: "O pedido mínimo é de 250 unidades por modelo. Esse volume garante o melhor custo por peça e viabiliza o acabamento de joalheria que entregamos.",
  },
  {
    q: "Quais acabamentos estão disponíveis?",
    a: "Trabalhamos com Banho dourado, níquel, grafite, ouro velha, prata velha. Cada peça passa por rigoroso controle de qualidade para garantir durabilidade e acabamento premium",
  },
  {
    q: "Como funciona o desenvolvimento personalizado?",
    a: "A partir do seu briefing, nossa equipe de design desenvolve a ficha técnica com vistas, cores e medidas. Após sua aprovação, produzimos uma amostra física para validação antes da produção em série.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo padrão é de 45 dias corridos a partir da aprovação da amostra. Projetos com peças mais simples ou volumes menores podem sair em menos tempo.",
  },
  {
    q: "A certificação FAMA cobre quais produtos?",
    a: "Nossa habilitação FAMA Walt Disney abrange a linha de pins, chaveiros, charms e acessórios metálicos licenciados, com rastreabilidade completa de matéria-prima e processo.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-surface-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHead
          eyebrow="PERGUNTAS FREQUENTES"
          title={
            <>
              Tudo o que <span className="font-light text-primary">você precisa saber.</span>
            </>
          }
        />

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={it.q}
              value={`q-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)]"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
