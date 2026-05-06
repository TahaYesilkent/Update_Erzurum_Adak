import React from 'react';
import { MessageCircle, ShieldCheck, Video, Users, Package, ArrowRight } from 'lucide-react';

// src/assets altındaki fotoğrafları içeri aktarıyoruz
import koyun1 from '../assets/koyun.jpg';
import koyun2 from '../assets/koyun2.jpg';

const Home = ({ setActivePage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="anim-fadeup">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} />
            Erzurum Adak Merkezi
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
            Güvenilir, Hijyenik <br/> 
            <span className="text-slate-400">& Şeffaf Kesim.</span>
          </h1>
          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-md">
            İbadetinizi huzurla yerine getirmeniz için Erzurum'da profesyonel adak ve kurban hizmeti sunuyoruz. Her adımda İslami usullere tam uygunluk sağlıyoruz.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button 
              onClick={() => setActivePage('contact')}
              className="group bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-200"
            >
              Hemen Bilgi Al
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setActivePage('gallery')}
              className="bg-white text-slate-600 border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              Galeriyi İncele
            </button>
          </div>
        </div>
        
        {/* Görsel Alanı */}
        <div className="grid grid-cols-2 gap-6 relative">
          <div className="space-y-6">
            <div className="h-72 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group relative">
              <img 
                src={koyun1} 
                alt="Erzurum Adak Kurbanlık" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="h-44 bg-[#2D6A4F] rounded-[2.5rem] p-8 text-white flex flex-col justify-end shadow-xl shadow-emerald-900/20">
              <span className="text-4xl font-black italic tracking-tighter">10+</span>
              <span className="text-xs opacity-80 font-bold uppercase tracking-widest mt-1">Yıllık Tecrübe</span>
            </div>
          </div>
          
          <div className="space-y-6 pt-12">
            <div className="h-44 bg-white rounded-[2.5rem] p-8 flex flex-col justify-end shadow-xl border border-slate-50">
              <div className="text-[#2D6A4F] mb-2"><Users size={28} /></div>
              <span className="text-4xl font-black text-slate-900 italic tracking-tighter">%100</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Helal Güvence</span>
            </div>
            <div className="h-72 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group relative">
              <img 
                src={koyun2} 
                alt="Erzurum Adak Hizmeti" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Hizmet Kartları */}
      <section className="bg-white py-28 px-6 border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Neler Sunuyoruz?</h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Erzurum'daki tesisimizde, modern imkanları geleneksel hassasiyetlerle birleştiriyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Vekaletle Kesim", 
                icon: <Users className="text-emerald-600" />, 
                desc: "Siz gelemeseniz de kurbanınız Erzurum'da adınıza niyet ve dua ile kesilir."
              },
              { 
                title: "Video Kaydı", 
                icon: <Video className="text-emerald-600" />, 
                desc: "Kesim anı anlık olarak WhatsApp üzerinden tarafınıza yüksek kalitede iletilir."
              },
              { 
                title: "Hijyenik Hazırlık", 
                icon: <Package className="text-emerald-600" />, 
                desc: "Kesim sonrası etleriniz steril ortamda paylara ayrılarak hijyenik şekilde paketlenir."
              }
            ].map((s, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;