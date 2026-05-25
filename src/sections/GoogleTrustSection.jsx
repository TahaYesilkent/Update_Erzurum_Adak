import React from "react";

import {
  Star,
  MapPin,
  ExternalLink,
} from "lucide-react";

const GoogleTrustSection = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.15)]">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-6">
                <div className="w-10 h-[2px] bg-emerald-400"></div>
                Google İşletme Profili
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Erzurum’da
                <br />
                <span className="text-emerald-400">
                  Güvenilir Hizmet
                </span>
              </h2>

              <p className="mt-8 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                Google kullanıcı yorumlarıyla doğrulanmış güvenilir adak ve
                kurban hizmeti sunuyoruz. Hijyenik tesis, islami usullere uygun
                kesim ve şeffaf süreç anlayışıyla hizmet veriyoruz.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-5 mt-10 flex-wrap">

                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      size={24}
                    />
                  ))}
                </div>

                <div>
                  <div className="text-4xl font-black text-white">
                    4.7
                  </div>

                  <div className="text-slate-400 text-sm">
                    Google Puanı
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="https://maps.app.goo.gl/tim3DwV6o4DrNhpg8"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-slate-900 px-7 py-4 rounded-2xl font-black hover:scale-105 transition-all"
                >
                  Google İşletmesini Aç

                  <ExternalLink
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl text-white px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  <MapPin size={18} />
                  Yol Tarifi
                </a>

              </div>
            </div>

            {/* RIGHT */}
            <div className="relative h-[350px] md:h-[500px] lg:h-auto min-h-[400px]">

              <iframe
                src="https://maps.google.com/maps?q=Palandöken%20Erzurum&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Erzurum Adak Harita"
              ></iframe>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white/40">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center font-black text-2xl shadow-lg">
                    E
                  </div>

                  <div>
                    <h3 className="font-black text-slate-900 text-lg">
                      Erzurum Adakçısı
                    </h3>

                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                      <MapPin size={14} />
                      Palandöken / Erzurum
                    </div>
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

export default GoogleTrustSection;