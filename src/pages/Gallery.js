import React, { useState, useEffect } from 'react';
import { Loader2, Play, Image as ImageIcon, Film } from 'lucide-react';

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('adakmov'); // Başlangıçta Tanıtım Filmi

  const cloudName = "dm8llgurk";

  // Klasördeki tag yapısına göre sekmeler
  const tabs = [
    { id: 'adakmov', label: 'Tanıtım Filmi', icon: <Film size={18} /> },
    { id: 'adakvideo', label: 'Videolar', icon: <Play size={18} /> },
    { id: 'adak', label: 'Fotoğraflar', icon: <ImageIcon size={18} /> },
  ];

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        // Tag bazlı çekim yapıyoruz
        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/${activeTab}.json`
        );
        
        if (!response.ok) throw new Error("İçerik bulunamadı");
        
        const data = await response.json();
        setMedia(data.resources);
        setLoading(false);
      } catch (err) {
        setMedia([]);
        setLoading(false);
      }
    };

    fetchMedia();
  }, [activeTab]);

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Galeri & Medya</h2>
        <p className="text-slate-500 mt-2">Erzurum Adakçısı modern tesisinden görüntüler.</p>
      </div>

      {/* Sekme Menüsü */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-slate-100 p-1.5 rounded-[2rem] shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-white text-[#2D6A4F] shadow-md scale-105' 
                : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="animate-spin text-[#2D6A4F] mb-4" size={48} />
          <p className="text-slate-400 font-medium">Yükleniyor...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {media.map((item) => (
            <div 
              key={item.public_id} 
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {activeTab === 'adakvideo' || activeTab === 'adakmov' ? (
                // VİDEO VE MOV ALANI
                <div className="relative aspect-[9/16]">
                  <video 
                    key={item.public_id}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    // Tanıtım filmi MOV olsa bile MP4 olarak çağırıyoruz[cite: 1]
                    poster={`https://res.cloudinary.com/${cloudName}/video/upload/w_600,h_1000,c_fill,so_0/${item.public_id}.jpg`}
                  >
                    <source src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_mp4/${item.public_id}`} type="video/mp4" />
                  </video>
                  <div className="absolute top-4 left-4 bg-[#2D6A4F] text-white text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest">
                    {activeTab === 'adakmov' ? 'Tanıtım Filmi' : 'Video'}
                  </div>
                </div>
              ) : (
                // FOTOĞRAF ALANI
                <div className="relative aspect-square">
                  <img 
                    src={`https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/${item.public_id}`} 
                    alt="Erzurum Adak"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Boş Durum */}
      {!loading && media.length === 0 && (
        <div className="text-center py-24 bg-white rounded-[3.5rem] border border-slate-100">
          <p className="text-slate-400 font-medium">Bu kategoride henüz içerik bulunmuyor.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;