import { Brand } from "./Brand";

const nav = [
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
  { href: "#orcamento", label: "Orçamento" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-primary text-primary-foreground shadow-[0_1px_0_oklch(0_0_0_/_0.06)]">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#top" aria-label="Eliza Acessórios e Design" className="min-w-0">
          <Brand tone="light" />
        </a>
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden lg:flex items-center gap-7 text-sm text-primary-foreground/80">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-primary-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#orcamento"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
