import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  Menu,
  X,
  Phone,
  ChevronRight,
} from "lucide-react";

const Navbar = ({ setActivePage, activePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const waMessage = encodeURIComponent(
    "Merhaba, Erzurum Adak hizmeti hakkında bilgi almak istiyorum."
  );

  const waLink = `https://wa.me/905327421383?text=${waMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navItems = [
    { id: "home", name: "Ana Sayfa" },
    { id: "gallery", name: "Galeri" },
    { id: "contact", name: "İletişim" },
  ];

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="fixed top-0 left-0 w-full z-[1000] bg-[#1f513b] text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <Phone size={14} />
              <span className="font-medium">
                0532 742 13 83
              </span>
            </div>

            <div className="text-white/70">
              Erzurum'da Profesyonel Adak & Kurban Hizmeti
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-[0.2em]">
            Hijyenik • Güvenilir • Vekaletli Kesim
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed left-0 w-full z-[999] transition-all duration-500 ${
          scrolled
            ? "top-0 lg:top-10 py-3"
            : "top-0 lg:top-10 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div
            className={`relative flex items-center justify-between rounded-[2rem] border transition-all duration-500 ${
              scrolled
                ? "bg-white/75 backdrop-blur-2xl border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-5 py-4"
                : "bg-white/60 backdrop-blur-xl border-white/20 px-5 py-5 shadow-[0_10px_50px_rgba(0,0,0,0.05)]"
            }`}
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-50/40 via-white/0 to-emerald-50/40 pointer-events-none"></div>

            {/* LOGO */}
            <div
              onClick={() => {
                setActivePage("home");
                setMobileOpen(false);
              }}
              className="relative z-10 flex items-center gap-4 cursor-pointer group"
            >

              <div className="relative">

                <div className="absolute inset-0 bg-emerald-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative w-14 h-14 rounded-[1.4rem] bg-gradient-to-br from-[#2D6A4F] via-emerald-500 to-emerald-400 flex items-center justify-center text-white font-black text-2xl shadow-[0_15px_30px_rgba(45,106,79,0.35)] group-hover:scale-105 transition-transform duration-300">
                  E
                </div>

              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                  ERZURUM
                  <span className="text-[#2D6A4F]">
                    {" "}ADAKÇISI
                  </span>
                </h1>

                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.35em] mt-1">
                  Modern Kesim Merkezi
                </div>
              </div>

            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-2 relative z-10">

              <div className="flex items-center gap-2 bg-slate-100/70 backdrop-blur-xl border border-white/40 rounded-full p-2 shadow-inner">

                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`relative px-6 py-3 rounded-full text-sm font-black tracking-tight transition-all duration-300 ${
                      activePage === item.id
                        ? "bg-[#2D6A4F] text-white shadow-lg shadow-emerald-500/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative z-10 flex items-center gap-3">

              {/* WHATSAPP */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-full font-black shadow-[0_15px_35px_rgba(37,211,102,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
              >

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-full h-full bg-white/30 rounded-full animate-ping"></div>

                  <MessageCircle size={20} className="relative z-10" />

                </div>

                Bilgi Al

              </a>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-lg flex items-center justify-center active:scale-95 transition-all"
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>

            </div>

          </div>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[998] lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >

        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        ></div>

        {/* MENU */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white transition-transform duration-500 shadow-2xl ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="p-6 flex flex-col h-full">

            {/* TOP */}
            <div className="flex items-center justify-between mb-10">

              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Menü
                </h2>

                <p className="text-sm text-slate-400 mt-1">
                  Erzurum Adak Merkezi
                </p>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center"
              >
                <X />
              </button>

            </div>

            {/* NAV ITEMS */}
            <div className="flex flex-col gap-3">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center justify-between px-5 py-5 rounded-3xl text-left font-black transition-all ${
                    activePage === item.id
                      ? "bg-[#2D6A4F] text-white shadow-xl shadow-emerald-500/20"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700"
                  }`}
                >

                  {item.name}

                  <ChevronRight size={18} />

                </button>
              ))}

            </div>

            {/* SPACER */}
            <div className="flex-1"></div>

            {/* CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-3xl font-black shadow-2xl shadow-green-500/20"
            >

              <MessageCircle size={22} />

              WhatsApp Bilgi Al

            </a>

            {/* FOOTER */}
            <div className="mt-8 text-center text-xs text-slate-400 leading-relaxed">
              Hijyenik • Güvenilir • İslami Usullere Uygun Kesim Hizmeti
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Navbar; 