import React from "react";

const SeoContentSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-50 border border-slate-100 rounded-[32px] md:rounded-[40px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)]">

          {/* Header */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs md:text-sm font-semibold text-emerald-700 tracking-wide">
               Erzurum Adak ve Kurban Hizmetleri
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-black leading-[1.15] tracking-tight text-slate-900">
              Erzurum’da Güvenilir <br className="hidden md:inline" />
              <span className="text-emerald-600">Adak ve Kurban</span> Hizmeti
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
              Erzurum Adakçısı olarak; adak kurbanı, akika kurbanı, şükür kurbanı ve vekaletle kurban kesim hizmetlerini İslami usullere uygun şekilde, tamamen profesyonel ve steril bir ortamda gerçekleştirmekteyiz.
            </p>
          </div>

          {/* Content */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left - Vurgulu Bilgi Maddeleri */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <div className="p-5 bg-white/60 rounded-2xl border border-slate-100/80">
                <p>
                  <strong className="text-slate-900 font-semibold">Güncel ve Şeffaf Fiyatlandırma:</strong> Erzurum’da adaklık fiyatları, küçükbaş fiyatları, kurbanlık koyun fiyatları ve adaklık koyun fiyatları hakkında güncel bilgi almak isteyen müşterilerimize her zaman güvenilir ve şeffaf hizmet sunuyoruz.
                </p>
              </div>

              <div className="p-5 bg-white/60 rounded-2xl border border-slate-100/80">
                <p>
                  <strong className="text-slate-900 font-semibold">Veteriner Kontrollü Küçükbaşlar:</strong> Erzurum’da küçükbaş satış yeri arayan vatandaşlarımız için sağlıklı, bakımlı ve tüm veteriner kontrolleri eksiksiz yapılmış koyun ve keçi seçenekleri sağlamaktayız.
                </p>
              </div>

              <div className="p-5 bg-white/60 rounded-2xl border border-slate-100/80">
                <p>
                  <strong className="text-slate-900 font-semibold">Her Bütçeye Uygun Alternatifler:</strong> Erzurum’da keçi fiyatları, küçükbaş kurbanlık fiyatları ve şükür kurbanı fiyatları dönemsel olarak değişmekte olup, bütçenizi sarsmayacak en uygun çözümleri üretiyoruz.
                </p>
              </div>

              <div className="p-5 bg-white/60 rounded-2xl border border-slate-100/80">
                <p>
                  <strong className="text-slate-900 font-semibold">Video Kayıtlı ve Hijyenik Kesim:</strong> Kesim işlemleri tamamen hijyenik ortamda, deneyimli ekiplerimiz tarafından gerçekleştirilmekte olup süreç video kayıt sistemiyle kayıt altına alınarak anında tarafınıza iletilmektedir.
                </p>
              </div>

              <div className="p-5 bg-white/60 rounded-2xl border border-slate-100/80">
                <p>
                  <strong className="text-slate-900 font-semibold">İhtiyaç Sahiplerine Doğrudan Dağıtım:</strong> Talep etmeniz halinde kurban etleri sizin adınıza titizlikle pay edilerek ihtiyaç sahibi ailelere, öğrenci yurtlarına, Kur’an kurslarına ve yardım kuruluşlarına ulaştırılır.
                </p>
              </div>
            </div>

            {/* Right - Kartlar */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">

              {/* Transport Card */}
              <div className="rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Şehre Yakın ve Kolay Ulaşım
                </h3>
                <div className="mt-4 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                  <p>Şehrin kalbinde, otobüs mesafesinde! İbadetiniz için kilometrelerce yol gitmenize gerek kalmadan kolay ulaşım avantajı sunuyoruz.</p>
                  <p>Kapınızın önünden otobüse binin, kesim alanımızda inin. Şehre yakın konumumuz sayesinde toplu taşımayla bile rahatça gelebilirsiniz.</p>
                </div>
              </div>

              {/* Why Us */}
              <div className="rounded-3xl bg-emerald-950 text-emerald-100 p-6 md:p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 text-emerald-900/20 pointer-events-none transform -rotate-12">
                  <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.522L3.54 10.123a1.75 1.75 0 001.666 2.277h3.332v5.35a.75.75 0 001.32.482l6.223-7.53a1.75 1.75 0 00-1.343-2.859H11.41l1.637-4.52a.75.75 0 00-.54-.973l-6.24-1.355z" clipRule="evenodd" /></svg>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Neden Bizi Tercih Etmelisiniz?
                </h3>
                
                <div className="mt-6 space-y-4 text-sm md:text-base">
                  {[
                    "Merkezi konum — şehir merkezine dakikalar uzaklıkta",
                    "Otobüs duraklarına yürüme mesafesinde kolay ulaşım",
                    "Hijyenik, steril ve profesyonel kesim alanı",
                    "Vekaletle kesim, paylama ve paketleme hizmeti",
                    "Video kayıt sistemi ile %100 şeffaf süreç yönetimi"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <p className="text-emerald-200/90">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* SEO Keywords */}
          <div className="mt-14 pt-10 border-t border-slate-200/60">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              Erzurum’da Adaklık ve Kurbanlık Hizmetleri
            </h3>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "Erzurum’da adaklık koyun fiyatları",
                "Erzurum’da küçükbaş fiyatları",
                "Erzurum’da kurbanlık küçükbaş fiyatları",
                "Erzurum’da kurbanlık koyun fiyatları",
                "Erzurum’da keçi fiyatları",
                "Erzurum’da adak kesim yeri",
                "Erzurum’da adakçı",
                "Erzurum’da küçükbaş satış yeri",
                "Erzurum’da şükür kurbanı fiyatları",
                "Erzurum vekaletle kurban kesimi",
              ].map((item, index) => (
                <span
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs md:text-sm text-slate-600 font-medium transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/30 hover:text-emerald-700 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeoContentSection;