import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async"; // 1. Bunu yukarıya import ekle

import Navbar from "./components/Navbar";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MobileStickyBar from "./components/MobileStickyBar";
import { MessageCircle, Phone, MapPin } from "lucide-react";

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
      
      {/* 2. GOOGLE BOTLARI İÇİN DİNAMİK META ETİKETLERİ */}
      <Helmet>
        <title>Erzurum Adak Merkezi | Güvenilir Adak ve Kurban Hizmetleri</title>
        <meta name="description" content="Erzurum'da İslami usullere uygun adaklık, akika ve şükür kurbanı satışı. Profesyonel, hijyenik kesim ve anında video kayıt gönderimi." />
        <meta name="robots" content="index, follow" /> {/* Google'a 'bu siteyi kaydet ve linkleri takip et' der */}
        <link rel="canonical" href="https://erzurumadakcisi.com" />
      </Helmet>

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
        {/* Mevcut footer kodların aynen kalıyor... */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* ... */}
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
            © 2026 Erzurum Adakçısı — Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;