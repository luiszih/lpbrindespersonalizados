import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Products } from "@/components/landing/Products";
import { WhyEliza } from "@/components/landing/WhyEliza";
import { Personas } from "@/components/landing/Personas";
import { Process } from "@/components/landing/Process";
import { Portfolio } from "@/components/landing/Portfolio";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brindes Corporativos Personalizados | Eliza Acessórios & Design" },
      {
        name: "description",
        content:
          "Brindes metálicos personalizados com acabamento premium. Pins, chaveiros e acessórios para empresas. Fábrica própria há 30 anos. Pedido mínimo 250 unidades.",
      },
      { property: "og:title", content: "Brindes Corporativos Personalizados | Eliza Acessórios & Design" },
      {
        property: "og:description",
        content:
          "Pins, chaveiros e acessórios metálicos personalizados para empresas. Fábrica própria há 30 anos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <WhyEliza />
        <Personas />
        <Process />
        <Portfolio />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
