import React, { useState } from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Pendaftaran Nikah",
    img: "./images1/nikah1.jpg",
    back: "Situs ini adalah sistem manajemen nikah yang dikelola oleh Kementerian Agama untuk memudahkan proses pendaftaran pernikahan secara daring. ",
    urlLink: "Pendaftaran",
  },
  {
    title: "Surat Rekomendasi Nikah",
    img: "./images1/Galery/Gnikah.jpeg",
    back: "Surat rekomendasi nikah (atau surat numpang nikah) adalah dokumen dari Kantor Urusan Agama (KUA) domisili yang diperlukan jika calon pengantin akan menikah di luar wilayah KTP mereka",
    urlLink: "Rekomendasi",
  },
  {
    title: "Duplikat Buku Nikah",
    img: "./images1/solusiBukuRusak.jpg",
    back: " Anda harus datang ke Kantor Urusan Agama (KUA) tempat pernikahan dicatat dengan membawa surat keterangan kehilangan dari kepolisian (jika hilang), buku nikah yang rusak (jika rusak), KTP suami istri, dan pas foto latar belakang biru. ",
    urlLink: "Duplikat",
  },
  {
    title: "Legalisir Buku Nikah",
    img: "https://cnc-magazine.oramiland.com/parenting/images/1_ciuDsce.width-800.format-webp.webp",
    back: "membawa buku nikah asli dan fotokopi KTP serta fotokopi buku nikah. Petugas KUA akan memverifikasi dokumen dan memberikan cap legalisir pada salinan buku nikah Anda. Selain di KUA, legalisir juga bisa dilakukan di Kementerian Agama atau kantor pos, tergantung keperluan. ",
    urlLink: "Legalisir",
  },
];

function RotatingCard({ title, img, back, urlLink, isLogo }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-96 perspective cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-gray-100 backface-hidden">
          {isLogo ? (
            <div className="flex flex-col justify-center items-center h-full bg-white">
              <img
                src={img}
                alt={title}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="font-bold text-lg text-center text-gray-700">
                {title}
              </h3>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <span className="text-white text-xl font-bold drop-shadow-lg">
                  {title}
                </span>
              </div>
            </div>
          )}
        </div>
        {/* Back */}
        <div className="absolute w-full h-full rounded-xl bg-white flex flex-col justify-center items-center p-6 text-center shadow-lg rotate-y-180 backface-hidden">
          <div className="text-gray-800 font-semibold text-lg mb-2">
            {title}
          </div>
          <div className="text-gray-500">{back}</div>
          <br />
          <Link to={urlLink} className="hover:text-blue-400 text-blue-600">
            {urlLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OurPartner() {
  return (
    <div className="px-8 py-12 bg-white min-h-screen" id="PERNIKAHAN">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
          <h1 className="text-4xl font-bold mb-2 md:mb-0 text-align-center w-[90vw] ">
            Layanan Pernikahan KUA PACIRAN
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card, idx) => (
          <RotatingCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
