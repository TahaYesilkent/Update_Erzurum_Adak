import React from "react";

const institutions = [
  "Yetimler Derneği",
  "Aşevleri",
  "Öğrenci Yurtları",
  "Kur’an Kursları",
  "İhtiyaç Sahibi Aileler",
  "Medrese ve Talebe Yurtları",
];

const DonationSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-[#0f172a]"></div>

      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-bold mb-8">
              Güvenilir Bağış Sistemi
            </span>

            <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
              Kurbanlarınız
              <span className="block text-emerald-400">
                İhtiyaç Sahiplerine
              </span>
              Ulaştırılır
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-relaxed">
              Talebiniz doğrultusunda adak ve kurbanlarınız güvenilir kurum,
              kuruluş ve ihtiyaç sahibi ailelere teslim edilmektedir.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-5">

            {institutions.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-white hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-emerald-400 text-4xl font-black mb-4">
                  0{i + 1}
                </div>

                <h3 className="text-xl font-bold leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;