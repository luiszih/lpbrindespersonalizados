import { SectionHead } from "./SectionHead";
import butterfly from "@/assets/portfolio-butterfly.png.asset.json";
import agro from "@/assets/portfolio-agro.png.asset.json";
import dog from "@/assets/portfolio-dog.jpg.asset.json";
import wepink from "@/assets/portfolio-wepink.jpg.asset.json";
import lanyard from "@/assets/portfolio-lanyard.jpg.asset.json";
import wepinkBottle from "@/assets/portfolio-wepink-bottle.jpeg.asset.json";

const tiles = [
  { src: butterfly.url, caption: "Chaveiro borboleta em esmalte" },
  { src: agro.url, caption: "Chaveiro oval Agro Cretá" },
  { src: dog.url, caption: "Chaveiro pet personalizado" },
  { src: wepink.url, caption: "Pingente metálico Wepink" },
  { src: lanyard.url, caption: "Cordão e pin Great Place To Work" },
  { src: wepinkBottle.url, caption: "Colar pingente Wepink" },
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
          {tiles.map((tile) => (
            <figure
              key={tile.caption}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-border bg-accent/30"
            >
              <img
                src={tile.src}
                alt={tile.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-xs font-medium text-white">
                {tile.caption}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
