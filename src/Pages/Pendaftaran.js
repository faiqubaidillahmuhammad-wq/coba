import { useState } from "react";
import Headers from "../MainPage/Headers";
import Footer from "../MainPage/Footer";

function Pendaftaran() {
  const fotos = [
    { id: 1, img: "./images1/nikah1.jpg", desc: "Gambar 1", url: "mfsakna" },
    { id: 2, img: "./images1/nikah2.jpg", desc: "Gambar 2", url: "mfsakna" },
    {
      id: 3,
      img: "./images1/keuntungan.jpg",
      desc: "Gambar 3",
      url: "mfsakna",
    },
    { id: 4, img: "./images1/kerugian.jpg", desc: "Gambar 4", url: "mfsakna" },
    { id: 5, img: "./images1/pen2.jpg", desc: "Gambar 5", url: "mfsakna" },
    { id: 6, img: "./images1/pen1.jpg", desc: "Gambar 6", url: "mfsakna" },
    { id: 6, img: "./images1/pen3.jpg", desc: "Gambar 6", url: "mfsakna" },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % fotos.length);
  };

  return (
    <>
      <div className="text-[40px] font-bold text-center mt-20 mb-20">
        <h3>Daftar Nikah Ribet Nggak Sih?</h3>
        <div className="flex flex-col justify-center items-center gap-10 mt-10 mb-10">
          <img
            src={fotos[index].img}
            alt={fotos[index].desc}
            onClick={handleNext}
            className="w-[500px] rounded-2xl cursor-pointer shadow-lg hover:scale-105 transition-all duration-300"
          />
          <div className="mt-4 flex items-center gap-3  transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
            <a
              href="https://simkah4.kemenag.go.id/admin/authentication"
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow"
            >
              Ayo Daftar Sekarang
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
      </div>
      <Footer />
    </>
  );
}

export default Pendaftaran;
