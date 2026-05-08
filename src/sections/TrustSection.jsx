import React from "react";
import {
  ShieldCheck,
  Camera,
  HeartHandshake,
  BadgeCheck,
  PackageCheck,
  Users,
} from "lucide-react";

const items = [
  {
    icon: <ShieldCheck />,
    title: "%100 İslami Usul",
    desc: "Kesimler islami şartlara uygun şekilde yapılır.",
  },
  {
    icon: <Camera />,
    title: "Video Kayıt Sistemi",
    desc: "Kesim videoları müşterilere iletilir.",
  },
  {
    icon: <HeartHandshake />,
    title: "Güvenilir Teslim",
    desc: "Bağışlar ihtiyaç sahiplerine ulaştırılır.",
  },
  {
    icon: <BadgeCheck />,
    title: "Hijyenik Ortam",
    desc: "Steril ve düzenli çalışma alanı.",
  },
  {
    icon: <PackageCheck />,
    title: "Profesyonel Paketleme",
    desc: "Etler düzenli şekilde hazırlanır.",
  },
  {
    icon: <Users />,
    title: "Memnun Müşteri",
    desc: "Yıllardır güvenle tercih ediliyor.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-32 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-black tracking-tight text-slate-900">
            Neden
            <span className="text-[#2D6A4F]"> Erzurum Adakçısı?</span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Yılların verdiği tecrübe ile güvenilir, hijyenik ve şeffaf hizmet sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-slate-50 hover:bg-white border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;