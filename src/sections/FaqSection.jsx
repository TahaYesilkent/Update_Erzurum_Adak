import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Adak kurbanı fiyatları ne kadar?",
    answer:
      "Fiyatlar kurbanlığın durumuna göre değişmektedir. Güncel fiyat bilgisi için WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.",
  },
  {
    question: "Vekaletle kesim yapılıyor mu?",
    answer:
      "Evet. Vekaletiniz islami usullere uygun şekilde alınır ve kesim işlemi gerçekleştirilir.",
  },
  {
    question: "Kesim videosu gönderiliyor mu?",
    answer:
      "Kesim anı video kaydı alınarak müşterilerimize WhatsApp üzerinden gönderilmektedir.",
  },
  {
    question: "Kurban bağışı yapılabiliyor mu?",
    answer:
      "Evet. Talebiniz doğrultusunda ihtiyaç sahibi ailelere, Kur’an kurslarına ve yardım kuruluşlarına teslim edilir.",
  },
  {
    question: "Hijyenik ortamda kesim yapılıyor mu?",
    answer:
      "Tüm kesim işlemleri temiz, düzenli ve hijyenik ortamda gerçekleştirilmektedir.",
  },
];

const FaqItem = ({ item, open, onClick }) => {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-8 text-left"
      >
        <h3 className="text-xl font-black text-slate-900 pr-8">
          {item.question}
        </h3>

        <div
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-8 pb-8 text-slate-500 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 px-6 bg-slate-50">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">

          <span className="inline-flex px-5 py-2 rounded-full bg-emerald-50 text-[#2D6A4F] font-bold text-sm mb-6">
            Sık Sorulan Sorular
          </span>

          <h2 className="text-5xl font-black tracking-tight text-slate-900">
            Merak Edilen
            <span className="text-[#2D6A4F]"> Sorular</span>
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-6">

          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              open={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;