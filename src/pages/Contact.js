import React, { useState } from "react";

import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  Send,
  ShieldCheck,
} from "lucide-react";

import Seo from "../components/Seo";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba, ben ${form.name}. ${form.message}`
  );

  const whatsappLink = `https://wa.me/905327421383?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] pt-32 pb-24 px-6">

      <Seo
        title="İletişim | Erzurum Adakçısı"
        description="Erzurum Adakçısı iletişim bilgileri, WhatsApp destek hattı, adres ve hızlı bilgi alma formu."
      />

      {/* BG */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-200/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg text-[#2D6A4F] text-sm font-bold mb-6">
            <ShieldCheck size={16} />
            Hızlı & Güvenilir İletişim
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Bizimle
            <span className="text-[#2D6A4F]"> İletişime Geçin</span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Adak, kurbanlık fiyatları, vekaletle kesim ve teslim süreçleri
            hakkında hızlıca bilgi alın.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group block bg-[#25D366] rounded-[2.5rem] p-8 text-white shadow-[0_25px_60px_rgba(37,211,102,0.25)] hover:scale-[1.02] transition-all"
            >
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MessageCircle size={30} />
                </div>

                <div>
                  <h2 className="text-3xl font-black">
                    WhatsApp Destek
                  </h2>

                  <p className="mt-3 text-white/90 leading-relaxed">
                    Tek tıkla bize ulaşın, hızlıca bilgi alın.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-bold">
                    Mesaj Gönder
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

              </div>
            </a>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-7 shadow-xl">

                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center mb-5">
                  <Phone size={26} />
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  Telefon
                </h3>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  +90 532 742 13 83
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-7 shadow-xl">

                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center mb-5">
                  <Clock3 size={26} />
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  Çalışma Saatleri
                </h3>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  Her Gün
                  <br />
                  08:00 - 22:00
                </p>
              </div>

            </div>

            {/* ADDRESS */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-8 shadow-xl">

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center">
                  <MapPin size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Adres
                  </h3>

                  <p className="mt-4 text-slate-500 leading-relaxed">
                    Palandöken / Erzurum
                    <br />
                    Erzurum Adakçısı Hizmet Noktası
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            {/* FORM */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[3rem] p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

              <h2 className="text-3xl font-black text-slate-900 mb-8">
                Hızlı Bilgi Formu
              </h2>

              <div className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Ad Soyad"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:border-emerald-300 transition-all"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Telefon Numaranız"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:border-emerald-300 transition-all"
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Mesajınız"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none resize-none focus:border-emerald-300 transition-all"
                />

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#2D6A4F] hover:bg-emerald-800 text-white py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.01]"
                >
                  <Send size={20} />
                  WhatsApp Üzerinden Gönder
                </a>

              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[3rem] border border-white/30 shadow-2xl h-[400px]">

              <iframe
                src="https://maps.google.com/maps?q=Palandöken%20Erzurum&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                title="Erzurum Adak Harita"
              ></iframe>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;