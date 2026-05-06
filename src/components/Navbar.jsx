import React from 'react';
import { MessageCircle } from 'lucide-react'; // İkon için (npm install lucide-react)

const Navbar = ({ setActivePage, activePage }) => {
  const waMessage = encodeURIComponent("Merhaba, Erzurum Adak hizmeti hakkında bilgi almak istiyorum.");
  const waLink = `https://wa.me/905327421383?text=${waMessage}`;

  return (
    <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="group flex items-center gap-2 cursor-pointer" 
          onClick={() => setActivePage('home')}
        >
          <div className="w-10 h-10 bg-[#2D6A4F] rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">
            E
          </div>
          <div className="font-black text-xl tracking-tighter text-slate-900">
            ERZURUM<span className="text-[#2D6A4F]">ADAK</span>
          </div>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl">
          {[
            { id: 'home', name: 'Ana Sayfa' },
            { id: 'gallery', name: 'Galeri' },
            { id: 'contact', name: 'İletişim' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                activePage === link.id 
                ? 'bg-white text-[#2D6A4F] shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a 
          href={waLink} 
          target="_blank" 
          rel="noreferrer" 
          className="group flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-2.5 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-green-500/20 transition-all active:scale-95"
        >
          <MessageCircle size={18} className="group-hover:animate-bounce" />
          <span>Bilgi Al</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;