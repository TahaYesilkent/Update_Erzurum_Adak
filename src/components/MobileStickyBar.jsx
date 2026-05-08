import React from "react";

import {
  Phone,
  MessageCircle,
} from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] md:hidden">

      <div className="m-4 bg-white/90 backdrop-blur-2xl border border-white/30 rounded-[2rem] shadow-2xl p-3 flex items-center gap-3">

        <a
          href="tel:+905327421383"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-black"
        >
          <Phone size={18} />
          Ara
        </a>

        <a
          href="https://wa.me/905327421383"
          target="_blank"
          rel="noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-black"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;