import React from "react";
import usePhotoCharousel from "../Function/usePhotoCharousel";
const photos = ["./images1/Lib1.jpg", "./images1/fotBar.jpeg"];
const Second = () => {
  const { index, next, prev } = usePhotoCharousel(photos, 4000);
  return (
    <section
      id="kua"
      className="max-w-6xl mx-auto p-8 mt-10 mb-10 rounded-xl shadow-md text-gray-900"
    >
      <div className="md:flex md:gap-8 items-start">
        <img
          src={photos[index]}
          alt="Team discussing education consulting"
          className="w-full md:w-96 h-auto object-cover rounded-lg flex-shrink-0"
        />
        <div className="mt-5 md:mt-0 flex-1 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold">
            TENTANG KUA PACIRAN
          </h2>

          <p className="mt-4 text-justify text-base md:text-lg leading-relaxed text-gray-700 w-[40vw] mobiles">
            KUA secara institusional telah ada sejak masa pra-kemerdekaan
            sebagai lembaga kepenghuluan dan didirikan secara resmi pada tahun
            1946 setelah kemerdekaan Indonesia. Tujuannya adalah untuk mencatat
            pernikahan dan menjaga legalitasnya sesuai syariat Islam, dan
            fungsinya terus berkembang seiring waktu. KUA Paciran dikenal karena
            inovasinya.
            <span className="overflow-hidden text-ellipsis w-[128px] whitespace-nowrap h-auto absolute">
              Pada November 2021
            </span>
            ,
            {/* KUA Paciran meluncurkan program
            Pusat Layanan Keluarga Sakinah (Pusaka Sakinah) dan menjadi KUA
            pertama di Kabupaten Lamongan yang memiliki layanan tersebut.
            Program ini bertujuan untuk menekan angka perceraian dan mewujudkan
            keluarga yang harmonis. */}
          </p>

          <div className="mt-8 flex justify-end">
            <a
              href="/About"
              aria-label="Lanjutkan Membaca about Indocreva"
              className="inline-flex items-center gap-3 text-lg md:text-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <span>Lanjutkan Membaca</span>
              <svg
                className="w-6 h-6"
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
    </section>
  );
};

export default Second;
