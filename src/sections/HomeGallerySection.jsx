import React from "react";

const images = [
  "https://res.cloudinary.com/dm8llgurk/image/upload/v1/adak/1",
  "https://res.cloudinary.com/dm8llgurk/image/upload/v1/adak/2",
  "https://res.cloudinary.com/dm8llgurk/image/upload/v1/adak/3",
  "https://res.cloudinary.com/dm8llgurk/image/upload/v1/adak/4",
];

const HomeGallerySection = () => {
  return (
    <section className="py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-14">

        <h2 className="text-5xl font-black tracking-tight text-slate-900">
          Tesisimizden
          <span className="text-[#2D6A4F]"> Kareler</span>
        </h2>

        <p className="mt-5 text-lg text-slate-500 max-w-2xl">
          Modern kesim alanlarımızdan, hijyenik ortamımızdan ve teslim süreçlerinden görüntüler.
        </p>

      </div>

      {/* Slider */}
      <div className="flex gap-8 animate-marquee w-max">

        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="w-[400px] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img
              src={img}
              alt="Erzurum Adakçısı"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default HomeGallerySection;