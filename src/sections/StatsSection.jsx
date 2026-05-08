import React from "react";

const stats = [
  {
    number: "10+",
    label: "Yıllık Tecrübe",
  },
  {
    number: "5000+",
    label: "Başarılı Kesim",
  },
  {
    number: "1000+",
    label: "Mutlu Müşteri",
  },
  {
    number: "50+",
    label: "Kuruma Teslim",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-[#0f172a]"></div>

      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 text-center hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-6xl font-black text-emerald-400 tracking-tight">
                {item.number}
              </div>

              <div className="mt-4 text-slate-300 font-semibold text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;