import { SectionHead } from "./SectionHead";

const steps = ["Briefing", "Ficha Técnica", "Aprovação", "Produção", "Entrega"];

export function Process() {
  return (
    <section id="processo" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="COMO FUNCIONA"
          title={
            <>
              Um processo <span className="font-light text-primary">enxuto,</span> do conceito à entrega.
            </>
          }
        />

        <div className="relative mt-16">
          {/* connector */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent md:left-0 md:right-0 md:top-7 md:bottom-auto md:h-px md:w-auto" aria-hidden />
          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-4">
            {steps.map((label, i) => (
              <li key={label} className="flex items-center gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                  {i + 1}
                </span>
                <span className="text-base font-semibold text-foreground">{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
