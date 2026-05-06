import React from 'react';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        {/* İletişim Bilgileri ve Form */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <h2 className="text-3xl font-black mb-6">İletişime Geçin</h2>
          <div className="space-y-4 mb-8">
            <p className="text-slate-600"><strong>Adres:</strong> Hüseyin Avni Ulaş, Palandöken / Erzurum</p>
            <p className="text-slate-600"><strong>Telefon:</strong> 0532 742 13 83</p>
          </div>
          
          <form className="space-y-4">
            <input className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2D6A4F]" placeholder="Adınız" />
            <input className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2D6A4F]" placeholder="Telefon" />
            <textarea className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2D6A4F] h-32" placeholder="Mesajınız"></textarea>
            <button className="w-full bg-[#2D6A4F] text-white py-4 rounded-2xl font-bold">Gönder</button>
          </form>
        </div>

        {/* Canlı Harita */}
        <div className="w-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl border border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.5!2d41.2819!3d39.9048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5d18ab02f76b%3A0x9ec9d5b79ed45845!2sErzurum%20Adak%C3%A7%C4%B1s%C4%B1!5e0!3m2!1str!2str!4v1"
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Erzurum Adak Konum"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;