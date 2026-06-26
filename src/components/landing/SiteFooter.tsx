import { Brand } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8">
        <div>
          <Brand tone="light" />
          <p className="mt-4 max-w-sm text-sm text-surface-dark-foreground/70">
            30 anos fabricando o detalhe que faz a diferença.
          </p>
        </div>
        <div className="grid gap-2 text-sm md:text-right">
          <a
            href="https://instagram.com/elizaacessoriodesign"
            target="_blank"
            rel="noreferrer"
            className="text-surface-dark-foreground hover:text-accent"
          >
            @elizaacessoriodesign
          </a>
          <a href="https://www.elizadesign.com.br" className="text-surface-dark-foreground/80 hover:text-accent">
            www.elizadesign.com.br
          </a>
          <p className="text-surface-dark-foreground/70">
            R. Cedro, 229 A, Vila Queiroz, Limeira/SP — CEP 13485-053
          </p>
        </div>
      </div>
      <div className="border-t border-surface-dark-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-surface-dark-foreground/60 md:px-8">
          © 2026 Eliza Acessórios &amp; Design. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
