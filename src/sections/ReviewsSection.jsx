import React from "react";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [

    
  {
    name: "Ayhan Çelik",
    text: "Erzurum'da adak kurbanı için en doğru adres. Çok ilgililer, kesim ve paketleme çok hijyenik. Allah razı olsun.",
    rating: 5,
    link: "https://maps.app.goo.gl/tim3DwV6o4DrNhpg8"
  },
  {
    name: "Murat Gökçe",
    text: "Vekaletle kurban kestirdik, video kaydı anında geldi. Süreç çok şeffaf ve güven verici. Kesinlikle tavsiye ederim.",
    rating: 5,
    link: "https://maps.app.goo.gl/KqVDwFMmnaiGc4e5A"
  },
  {
    name: "Yunus Emre",
    text: "Hem fiyat hem hizmet kalitesi olarak çok memnun kaldık. İhtiyaç sahiplerine ulaştırılması konusunda da çok titizler.",
    rating: 5,
    link: "https://maps.app.goo.gl/Tg4dkcgmfSQ6UZvE7"
  },
  {
    name: "Sefa B.",
    text: "Hijyenik bir yer, çalışanlar çok beyefendi insanlar. Erzurum'da bu kadar profesyonel bir adak merkezi bulmak zor.",
    rating: 5,
    link: "https://maps.app.goo.gl/W4rDmg97PMqvkhem6"
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-32 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
              <div className="w-12 h-[2px] bg-emerald-600"></div>
              Müşteri Deneyimleri
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">
              Güveniniz Bizim İçin <br />
              <span className="text-[#2D6A4F]">En Büyük Değer.</span>
            </h2>
          </div>
          <a 
            href="https://www.google.com/search?q=erzurum+adak+merkezi" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-full text-slate-600 font-bold hover:text-[#2D6A4F] hover:border-emerald-200 transition-all shadow-sm"
          >
            Tüm Yorumları Oku 
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Yorum Kartları */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group"
            >
              <div>
                <Quote className="text-emerald-50 group-hover:text-emerald-100 transition-colors mb-4" size={40} fill="currentColor" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <div>
                  <h4 className="font-black text-slate-900">{review.name}</h4>
                  <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mt-0.5">Doğrulanmış Müşteri</p>
                </div>
                
                {/* Bozuk ikon yerine temiz bir link ikonu */}
                <a 
                  href={review.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  title="Yorumu Kaynağında Gör"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;