import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsapp = () => {
  const waMessage = encodeURIComponent(
    "Merhaba, Erzurum Adak hizmeti hakkında bilgi almak istiyorum."
  );

  return (
    <a
      href={`https://wa.me/905327421383?text=${waMessage}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>

      <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-105 transition-all">
        <MessageCircle size={24} />

        <div className="hidden md:block">
          <div className="font-bold leading-none">
            Online Destek
          </div>

          <div className="text-xs opacity-80">
            Hızlı Bilgi Al
          </div>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsapp;