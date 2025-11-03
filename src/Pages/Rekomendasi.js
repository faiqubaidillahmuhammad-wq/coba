import React from "react";
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import Footers from "../MainPage/Footer";
import { Briefcase, Heart, CheckCircle } from "lucide-react";

const recommendations = [
  {
    category: "Administrasi & Perencanaan Awal",
    icon: Briefcase,
    items: [
      "Usia Ideal Menikah (21th P, 25th L)",
      "Urus surat pengantar (model N1) di desa/kelurahan",
      "Daftar online via Simkah Kemenag",
      "Wajib ikuti bimbingan perkawinan",
    ],
  },
  {
    category: "Konsep & Tema Pernikahan",
    icon: Heart,
    items: [
      "Intimate Wedding (privat & akrab)",
      "Garden Party (nuansa taman asri)",
      "Industrial (modern & unik)",
      "Modern Minimalis (simpel & elegan)",
      "Adat (kaya makna & budaya)",
    ],
  },
  {
    category: "Lokasi (Venue) Pernikahan",
    icon: MapPin,
    items: [
      "Gedung/Ballroom (kapasitas besar)",
      "Semi Outdoor/Taman (estetik & segar)",
      "Rumah/Masjid (intim & sakral)",
      "Pantai (unik & indah)",
    ],
  },
  {
    category: "Vendor Pernikahan",
    icon: CheckCircle,
    items: [
      "Wedding Organizer (WO)/Planner",
      "Dekorasi (hidupkan tema)",
      "Katering (sesuai selera & jumlah tamu)",
      "Fotografi & Videografi (dokumentasi)",
      "Perhiasan & Busana (sesuai gaya & budget)",
    ],
  },
  {
    category: "Rekomendasi Tambahan",
    icon: Clock,
    items: [
      "Tentukan Anggaran di awal",
      "Buat Skala Prioritas",
      "Mulai Merencanakan Jauh Hari",
    ],
  },
];

function Rekomendasi() {
  return (
    <>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800 border-b pb-4">
            Rekomendasi Pernikahan
          </h1>
          <img
            src="./images1/formR.png"
            alt="err"
            className="w-[300px] relative mx-auto object-cover rounded-xl transition-transform duration-500 hover:scale-150 cursor-pointer"
          />
          <br />
          <p className=" text-center text-blue-900  hover:text-blue-200">
            <a href="FormR.pdf"> Download Surat Disini </a>
          </p>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((section) => (
              <div
                key={section.category}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <section.icon className="w-6 h-6 text-pink-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-700">
                    {section.category}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Catatan Penting
            </h3>
            <p className="text-gray-600">
              Pernikahan adalah momen sakral. Perencanaan yang matang akan
              membantu mengurangi stres dan memastikan hari bahagia Anda
              berjalan lancar. Selalu diskusikan setiap keputusan dengan
              pasangan Anda!
            </p>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Rekomendasi;
