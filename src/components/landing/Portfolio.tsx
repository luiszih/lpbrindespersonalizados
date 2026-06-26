import { Camera, Download } from "lucide-react";
import { SectionHead } from "./SectionHead";

const tiles = [
  "Pins corporativos dourados",
  "Chaveiros personalizados",
  "Charms com logo aplicado",
  "Medalhas e condecorações",
  "Kit brinde premium",
  "Acessórios licenciados",
];

export function Portfolio() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="PORTFÓLIO"
          title={
            <>
              Conheça nosso <span className="font-light text-primary">portfólio</span>
            </>
          }
          description="@elizaacessoriodesign"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((caption) => (
            <figure
              key={caption}
              className="aspect-square rounded-3xl border border-border bg-accent/30 p-6"
            >
              <div className="flex h-full flex-col items-center justify-center gap-3 text-primary/70">
                <Camera className="h-8 w-8" aria-hidden />
                <figcaption className="text-xs font-medium text-primary">{caption}</figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" aria-hidden />
            Baixar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
