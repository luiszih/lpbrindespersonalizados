import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5519995411832?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20brindes.";

export function FinalCta() {
  return (
    <section id="orcamento" className="bg-accent py-20 text-accent-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Seu próximo brinde começa com um briefing.
        </h2>
        <p className="mt-4 text-base text-accent-foreground/80 md:text-lg">
          Fale com a nossa equipe e receba uma proposta personalizada.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Solicitar orçamento via WhatsApp
          </a>
          <a
            href="mailto:contato@elizadesign.com.br"
            className="inline-flex items-center rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            contato@elizadesign.com.br
          </a>
        </div>
        <p className="mt-6 text-sm text-accent-foreground/80">{"\n"}</p>
      </div>
    </section>
  );
}
