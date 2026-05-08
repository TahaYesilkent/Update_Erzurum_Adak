import React from "react";
import {
  PhoneCall,
  ShieldCheck,
  Scissors,
  Video,
  Truck,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={28} />,
    title: "İletişime Geçin",
    desc: "WhatsApp veya telefon üzerinden hızlıca bilgi alın.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Vekalet Verin",
    desc: "İslami usullere uygun şekilde vekaletiniz alınır.",
  },
  {
    icon: <Scissors size={28} />,
    title: "Kesim Yapılır",
    desc: "Hijyenik ortamda profesyonel kesim gerçekleştirilir.",
  },
  {
    icon: <Video size={28} />,
    title: "Video Gönderilir",
    desc: "Kesim anı yüksek kalitede tarafınıza iletilir.",
  },
  {
    icon: <Truck size={28} />,
    title: "Pay Edilir",
    desc: "Etler düzenli şekilde hazırlanır ve dağıtılır.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "İhtiyaç Sahiplerine Ulaşır",
    desc: "Talebiniz doğrultusunda bağış teslim edilir.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Blur */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-emerald-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-50 text-[#2D6A4F] font-bold text-sm mb-6">
            Süreç Nasıl İşliyor?
          </span>

          <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Güvenilir ve Şeffaf
            <span className="block text-[#2D6A4F]">
              Kurban Süreci
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Tüm süreç islami hassasiyetlere uygun, şeffaf ve profesyonel şekilde yürütülmektedir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200/20 blur-3xl rounded-full"></div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-100">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center shadow-xl shadow-emerald-500/20 mb-8 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;