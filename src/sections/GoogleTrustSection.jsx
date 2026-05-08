import React from "react";

import {
  Star,
  MapPin,
  ExternalLink,
} from "lucide-react";

const GoogleTrustSection = () => {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-12 md:p-16 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-6">
                <div className="w-10 h-[2px] bg-emerald-400"></div>
                Google İşletme Profili
              </div>

              <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
                Erzurum’da
                <span className="text-emerald-400">
                  Güvenilir Hizmet
                </span>
              </h2>

              <p className="mt-8 text-slate-300 text-lg leading-relaxed">
                Google kullanıcı yorumlarıyla doğrulanmış güvenilir adak ve kurban hizmeti sunuyoruz.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-6 mt-10">

                <div className="flex items-center gap-1 text-amber-400">
                  {[1,2,3,4,5].map((i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      size={26}
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

              <a
                href="https://maps.app.goo.gl/tim3DwV6o4DrNhpg8"
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black hover:scale-105 transition-all w-fit"
              >
                Google İşletmesini Aç

                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[500px]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Erzurum Adak Google Maps"
              ></iframe>

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-2xl">

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center font-black text-xl">
                    E
                  </div>

                  <div>
                    <h3 className="font-black text-slate-900">
                      Erzurum Adak
                    </h3>

                    <div className="flex items-center gap-2 text-slate-500 text-sm">
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