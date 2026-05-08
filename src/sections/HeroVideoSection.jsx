import React from "react";
import {
  PlayCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import tanitimVideo from "../assets/Erzurum Adakçısı Revize.mov";

const HeroVideoSection = ({ setActivePage }) => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-200/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#2D6A4F] font-bold text-sm mb-6">
              <ShieldCheck size={16} />
              Şeffaf & Güvenilir Hizmet
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6">
              Kesim Sürecini
              <span className="text-[#2D6A4F] block mt-2">
                Baştan Sona İzleyin
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Erzurum Adakçısı olarak tüm süreçleri şeffaf şekilde
              yürütüyor, hijyenik tesisimizde gerçekleştirilen kesimleri
              profesyonel kayıtlarla sizlere iletiyoruz.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2D6A4F]" size={22} />
                <span className="text-slate-700 font-medium">
                  İslami usullere uygun kesim
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2D6A4F]" size={22} />
                <span className="text-slate-700 font-medium">
                  Anlık video ve fotoğraf gönderimi
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2D6A4F]" size={22} />
                <span className="text-slate-700 font-medium">
                  Hijyenik ve profesyonel tesis
                </span>
              </div>

            </div>

            {/* CTA */}
            <button
              onClick={() => setActivePage("contact")}
              className="group inline-flex items-center gap-3 bg-[#2D6A4F] hover:bg-emerald-800 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(45,106,79,0.25)] hover:-translate-y-1"
            >
              Bilgi Al
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

          </div>

          {/* RIGHT VIDEO */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.12)] bg-black">

              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src={tanitimVideo} type="video/mp4" />
              </video>

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                    <PlayCircle size={28} />
                  </div>

                  <div>
                    <h3 className="text-white text-xl font-black">
                      Erzurum Adakçısı
                    </h3>

                    <p className="text-white/70 text-sm mt-1">
                      Modern tesis • Helal kesim • Güvenilir hizmet
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroVideoSection;