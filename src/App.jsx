import React, { useMemo, useState } from "react";

// Bileşenlerini içe aktarırken yolların doğruluğundan emin ol
import Navbar from "./components/Navbar";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MobileStickyBar from "./components/MobileStickyBar";
// Sadece en temel ve hata verme olasılığı düşük ikonları alıyoruz
import { MessageCircle, Phone, MapPin, ChevronRight } from "lucide-react";

function App() {
  const [activePage, setActivePage] = useState("home");

  const pages = useMemo(
    () => ({
      home: <Home setActivePage={setActivePage} />,
      gallery: <Gallery />,
      contact: <Contact />,
    }),
    []
  );

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ARKA PLAN */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-300/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-200/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar setActivePage={setActivePage} activePage={activePage} />

      <main className="relative z-10">
        {pages[activePage] || <Home setActivePage={setActivePage} />}
      </main>

      <FloatingWhatsapp />
      <MobileStickyBar />

      <footer className="relative mt-32 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          {/* CTA KARTI */}
          <div className="mb-20 bg-gradient-to-br from-emerald-600 to-green-700 p-10 rounded-[2rem] shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Adak ve Kurban Hizmeti</h2>
                <p className="text-emerald-50">Erzurum'un her yerine güvenilir ve hijyenik teslimat.</p>
              </div>
              <a 
                href="https://wa.me/905327421383" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-colors"
              >
                <MessageCircle size={20} /> WhatsApp Bilgi Al
              </a>
            </div>
          </div>

          {/* ALT MENÜ */}
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Erzurum Adak</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                İslami usullere uygun, hijyenik ortamda adak ve kurban kesim hizmeti.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6">Hızlı Menü</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => setActivePage("home")} className="hover:text-emerald-400">Ana Sayfa</button></li>
                <li><button onClick={() => setActivePage("gallery")} className="hover:text-emerald-400">Galeri</button></li>
                <li><button onClick={() => setActivePage("contact")} className="hover:text-emerald-400">İletişim</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Hizmetlerimiz</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>Adak Kurbanı</li>
                <li>Akika Kurbanı</li>
                <li>Şükür Kurbanı</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">İletişim</h4>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-400" /> 0532 742 13 83
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-emerald-400" /> Palandöken / Erzurum
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
            © 2026 Erzurum Adak Merkezi — Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;