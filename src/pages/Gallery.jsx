// GALLERY.JSX

import React, { useEffect, useState } from "react";

import {
  Loader2,
  Play,
  Image as ImageIcon,
  X,
} from "lucide-react";

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("adak");

  const [selectedItem, setSelectedItem] = useState(null);

  const cloudName = "dm8llgurk";

  const tabs = [
    {
      id: "adak",
      label: "Fotoğraflar",
      icon: <ImageIcon size={18} />,
    },
    {
      id: "adakvideo",
      label: "Videolar",
      icon: <Play size={18} />,
    },
  ];

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);

        const type =
          activeTab === "adakvideo" ? "video" : "image";

        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/${type}/list/${activeTab}.json`
        );

        if (!response.ok) {
          throw new Error("İçerik bulunamadı");
        }

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
    <div className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-teal-200/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg text-[#2D6A4F] text-sm font-bold mb-6">
            Erzurum Adakçısı Medya Galerisi
          </span>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Galeri &
            <span className="text-[#2D6A4F]"> Medya</span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Modern tesisimizden görüntüler, kesim videoları ve hizmet süreçleri.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap gap-3 bg-white/60 backdrop-blur-2xl border border-white/40 p-3 rounded-[2rem] shadow-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#2D6A4F] text-white shadow-lg shadow-emerald-500/30 scale-105"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2
              className="animate-spin text-[#2D6A4F] mb-6"
              size={54}
            />

            <p className="text-slate-400 text-lg font-medium">
              İçerikler yükleniyor...
            </p>
          </div>
        ) : (
          <>
            {/* GRID */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {media.map((item) => {
                const isVideo = activeTab === "adakvideo";

                return (
                  <div
                    key={item.public_id}
                    onClick={() => setSelectedItem(item)}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/30 shadow-xl cursor-pointer break-inside-avoid"
                  >
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>

                    {/* LABEL */}
                    <div className="absolute top-5 left-5 z-30">
                      <div className="bg-white/20 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                        {isVideo ? "Video" : "Fotoğraf"}
                      </div>
                    </div>

                    {/* ICON */}
                    <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white shadow-2xl">
                        {isVideo ? (
                          <Play fill="currentColor" size={30} />
                        ) : (
                          <ImageIcon size={30} />
                        )}
                      </div>
                    </div>

                    {/* MEDIA */}
                    {isVideo ? (
                      <video
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        muted
                        autoPlay
                        loop
                        playsInline
                      >
                        <source
                          src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_mp4/${item.public_id}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={`https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_900,q_auto,f_auto/${item.public_id}`}
                        alt="Erzurum Adakçısı"
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* EMPTY */}
            {media.length === 0 && (
              <div className="text-center py-32">
                <p className="text-slate-400 text-lg">
                  Bu kategoride içerik bulunmuyor.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X />
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            {activeTab === "adakvideo" ? (
              <video
                controls
                autoPlay
                className="w-full max-h-[90vh] object-contain bg-black"
              >
                <source
                  src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_mp4/${selectedItem.public_id}`}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto/${selectedItem.public_id}`}
                alt="Erzurum Adak"
                className="w-full max-h-[90vh] object-contain bg-black"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;