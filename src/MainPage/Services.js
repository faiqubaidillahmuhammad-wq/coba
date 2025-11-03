function Services() {
  const card1 = "Ayo Daftarkan Pernikahanmu";
  const card2 = "Memahami pilar-pilar kelurga yang sakinah";
  const card3 = "Galeri kegiatan bimbingan perkawinan di KUA Paciran";

  const cards = [
    {
      title: "Pernikahan",
      url: " https://simkah4.kemenag.go.id/",
      desc: card1,
      img: "https://weddingmarket.com/storage/images/artikelidea/8e74eead7335d9fff15ea278431c281873644a5c.webp",
    },
    {
      title: "Keluarga Sakinah",
      url: "/KeluargaSakinah",
      desc: card2,
      img: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1638031993/lpu6mynoascukdomlxzs.jpg",
    },
    {
      title: "Galery Bimbingan Perkawinan",
      url: "Gallery                                                                                                                                                                                                                                                                                                                                                               ",
      desc: card3,
      img: "https://pwmu.co/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-25-at-13.01.24.webp",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Kami Melayani
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 brightness-130"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white drop-shadow text-lg\400">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-white/90 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                  {c.desc}
                </p>

                <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <a
                    href={c.url}
                    className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow"
                  >
                    Selengkapnya
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
