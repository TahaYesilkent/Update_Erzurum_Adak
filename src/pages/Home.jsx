// HOME.JSX

import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  Play,
  ArrowRight,
  Star,
  CheckCircle2,
  Heart,
  Medal,
  Image as ImageIcon,
} from "lucide-react";

import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

import koyun1 from "../assets/koyun.jpg";
import koyun2 from "../assets/koyun2.jpg";
import tanitimVideo from "../assets/erzurum-adak-tanitim.mov";

import ProcessSection from "../sections/ProcessSection";
import TrustSection from "../sections/TrustSection";
import DonationSection from "../sections/DonationSection";
import ReviewsSection from "../sections/ReviewsSection";
import FaqSection from "../sections/FaqSection";
import StatsSection from "../sections/StatsSection";
import SeoContentSection from "../sections/SeoContentSection";
import GoogleTrustSection from "../sections/GoogleTrustSection";

const Home = ({ setActivePage }) => {
  const [galleryImages, setGalleryImages] = useState([]);

  const cloudName = "dm8llgurk";

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/adak.json`
        );

        const data = await response.json();

        setGalleryImages(data.resources.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#fdfdfd]">
      <Seo
        title="Erzurum Adak & Kurban Hizmeti | Vekaletle Kesim"
        description="Erzurum adak, kurbanlık koyun, adaklık fiyatları, vekaletle kesim ve islami usullere uygun hijyenik kurban hizmeti."
      />

      {/* BG */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2"></div>

      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] -z-10 -translate-x-1/2"></div>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 lg:pt-48">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <Reveal>
            <div className="order-2 lg:order-1 relative z-10">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[#2D6A4F] border border-emerald-100 mb-8 shadow-sm">
                <ShieldCheck size={18} className="animate-pulse" />

                <span className="text-sm font-black tracking-tight uppercase">
                  Erzurum'un En Güvenilir Adak Merkezi
                </span>
              </div>

              <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-slate-900 mb-8">
                Erzurum <br />
                <span className="text-[#2D6A4F]">
                  Adak & Kurban
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                İslami usullere tam uyumlu tesisimizde
                <span className="font-bold text-slate-900 underline decoration-emerald-400 decoration-4 underline-offset-4">
                  {" "}
                  vekaletle kesim
                </span>{" "}
                ve anında video gönderimi sağlıyoruz.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mb-16">

                <button
                  onClick={() => setActivePage("contact")}
                  className="group bg-[#2D6A4F] text-white px-10 py-6 rounded-[2rem] font-black text-xl flex items-center gap-3 hover:bg-emerald-800 transition-all shadow-[0_20px_40px_rgba(45,106,79,0.25)] hover:-translate-y-1 active:scale-95"
                >
                  Hemen Bilgi Al

                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={() => setActivePage("gallery")}
                  className="group bg-white border-2 border-slate-100 text-slate-800 px-10 py-6 rounded-[2rem] font-black text-xl flex items-center gap-3 hover:border-emerald-200 transition-all hover:-translate-y-1 active:scale-95 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#2D6A4F] group-hover:bg-emerald-100">
                    <Play size={18} fill="currentColor" />
                  </div>

                  Galeriyi İncele
                </button>

              </div>

              {/* BADGES */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-100 pt-12">

                <div className="flex flex-col gap-2">
                  <CheckCircle2
                    className="text-[#2D6A4F]"
                    size={28}
                  />

                  <span className="font-bold text-slate-800 tracking-tight text-lg">
                    Video Kaydı
                  </span>

                  <span className="text-sm text-slate-500">
                    Kesim anı cebinizde
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <Heart
                    className="text-rose-500"
                    size={28}
                  />

                  <span className="font-bold text-slate-800 tracking-tight text-lg">
                    Bağış Desteği
                  </span>

                  <span className="text-sm text-slate-500">
                    Kurumlara teslimat
                  </span>
                </div>

                <div className="flex flex-col gap-2 hidden md:flex">
                  <Medal
                    className="text-amber-500"
                    size={28}
                  />

                  <span className="font-bold text-slate-800 tracking-tight text-lg">
                    Helal Kesim
                  </span>

                  <span className="text-sm text-slate-500">
                    Dini usullere uygun
                  </span>
                </div>

              </div>

            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal>
            <div className="order-1 lg:order-2 relative">

              <div className="relative z-10 w-full aspect-[4/5] md:h-[700px] rounded-[4rem] overflow-hidden rotate-2 shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-[12px] border-white">

                <img
                  src={koyun1}
                  alt="Erzurum Adakçısı"
                  className="w-full h-full object-cover -rotate-2 scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              </div>

              {/* FLOAT CARD */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 animate-bounce-slow">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 bg-amber-400 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                    <Star size={32} fill="currentColor" />
                  </div>

                  <div>

                    <div className="text-3xl font-black text-slate-900 leading-none">
                      4.7
                    </div>

                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                      Google Puanı
                    </div>

                  </div>

                </div>

              </div>

              {/* SMALL IMAGE */}
              <div className="absolute -top-12 -right-12 z-20 w-48 h-48 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block">

                <img
                  src={koyun2}
                  alt="Adak Merkezi"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <Reveal>
              <div>

                <span className="inline-flex px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#2D6A4F] font-bold text-sm mb-6">
                  Tanıtım Videosu
                </span>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                  Erzurum Adakçısı

                  <span className="text-[#2D6A4F] block mt-2">
                    Hizmet Süreci
                  </span>
                </h2>

                <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                  Modern tesisimizde gerçekleştirilen adak ve kurban süreçlerini
                  profesyonel çekimlerle yakından inceleyebilirsiniz.
                </p>

                <div className="space-y-4 mb-10">

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#2D6A4F]"
                      size={22}
                    />

                    <span className="text-slate-700 font-medium">
                      Hijyenik kesim ortamı
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#2D6A4F]"
                      size={22}
                    />

                    <span className="text-slate-700 font-medium">
                      Profesyonel ekip ve ekipman
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#2D6A4F]"
                      size={22}
                    />

                    <span className="text-slate-700 font-medium">
                      Şeffaf ve güvenilir hizmet
                    </span>
                  </div>

                </div>

                <button
                  onClick={() => setActivePage("gallery")}
                  className="group inline-flex items-center gap-3 bg-[#2D6A4F] text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all shadow-[0_20px_40px_rgba(45,106,79,0.25)] hover:-translate-y-1"
                >
                  Galeriyi İncele

                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

              </div>
            </Reveal>

            {/* RIGHT VIDEO */}
            <Reveal>
              <div className="relative">

                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>

                <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border-[8px] border-white bg-black">

                  <video
                    className="w-full max-h-[520px] object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={tanitimVideo} type="video/mp4" />
                  </video>

                </div>

              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* MINI GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-14">

              <div>

                <span className="inline-flex px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#2D6A4F] font-bold text-sm mb-6">
                  Gerçek Görseller
                </span>

                <h2 className="text-5xl font-black text-slate-900 tracking-tight">
                  Fotoğraf <br />
                  <span className="text-[#2D6A4F]">
                    Galerisi
                  </span>
                </h2>

              </div>

              <button
                onClick={() => setActivePage("gallery")}
                className="flex items-center gap-3 bg-[#2D6A4F] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all"
              >
                <ImageIcon size={18} />
                Tüm Galeri
              </button>

            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryImages.map((item) => (
              <Reveal key={item.public_id}>

                <div className="overflow-hidden rounded-[2.5rem] shadow-xl border border-white/30 bg-white group">

                  <img
                    src={`https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_900,q_auto,f_auto/${item.public_id}`}
                    alt="Erzurum Adakçısı"
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div className="relative z-20">
        <StatsSection />
        <ProcessSection />
        <TrustSection />
        <DonationSection />
        <GoogleTrustSection />
        <ReviewsSection />
        <FaqSection />
        <SeoContentSection />
      </div>

    </div>
  );
};

export default Home;