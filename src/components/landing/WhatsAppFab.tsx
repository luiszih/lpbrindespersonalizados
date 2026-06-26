import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5519995411832?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20brindes.";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
