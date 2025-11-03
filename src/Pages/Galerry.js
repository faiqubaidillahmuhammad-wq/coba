import Footers from "../MainPage/Footer";
// ubah title jan Lupa
function Gallery() {
  const data = [
    {
      url: "./images1/Galery/Gnikah.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah1.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah2.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah3.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah4.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah5.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah6.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah7.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah8.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah9.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah10.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah11.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah12.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah13.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah14.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah15.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah16.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah17.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah18.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah19.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah20.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah21.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah22.jpeg",
      content: "Gallery Pernikahan",
    },
    {
      url: "./images1/Galery/Gnikah23.jpeg",
      content: "Gallery Pernikahan",
    },
  ];
  return (
    <>
      <h1 className="text-[48px] text-center font-bold text-[sans-sherif]">
        GALLERY BIMBINGAN PERNIKAHAN
      </h1>
      <div
        id="Card"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-12 mx-4 w-[90%] text-center mx-auto"
      >
        {data.map((c, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={c.url}
              alt={c.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 brightness-130"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* <h3 className="text-xl font-semibold text-white drop-shadow text-lg\400">
                {c.title}
              </h3> */}
              <p className="mt-2 text-sm text-white/90 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                {c.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
      <Footers />
    </>
  );
}

export default Gallery;
