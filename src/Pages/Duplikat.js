import { XCircle, CheckCircle, Clock } from "lucide-react";
import Footers from "../MainPage/Footer";
import React from "react";

function Duplikat() {
  return (
    <>
      <div className="mt-20 mb-20 px-4 md:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Duplikat Buku Nikah
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
          {/* Gambar */}
          <img
            src="./images1/duplikat.jpg"
            alt="Duplikat Buku Nikah"
            className="w-full max-w-[350px] md:max-w-[400px] rounded-xl shadow-md object-cover"
          />

          {/* Konten Utama */}
          <div className="p-6 bg-white shadow-xl rounded-2xl w-full md:max-w-3xl">
            <header className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">
                Mengurus Duplikat Buku Nikah
              </h1>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Proses ini dilakukan di Kantor Urusan Agama (KUA) tempat
                pernikahan dicatat dan bersifat{" "}
                <span className="font-semibold text-green-600">
                  gratis (tidak dipungut biaya)
                </span>
                .
              </p>
            </header>

            {/* Dua Kolom Persyaratan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Jika Hilang */}
              <div className="bg-red-50 p-5 rounded-xl border border-red-100 hover:shadow-md transition">
                <div className="flex items-center mb-3">
                  <XCircle className="w-6 h-6 text-red-600 mr-2" />
                  <h2 className="text-lg md:text-xl font-semibold text-red-800">
                    Jika Buku Nikah Hilang
                  </h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Surat Keterangan Kehilangan dari Kepolisian.",
                    "Fotokopi KTP suami dan istri.",
                    "Fotokopi Kartu Keluarga (KK).",
                    "Pas foto 2x3 latar biru (2 lembar masing-masing).",
                    "Surat permohonan tertulis di atas materai.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jika Rusak */}
              <div className="bg-green-50 p-5 rounded-xl border border-green-100 hover:shadow-md transition">
                <div className="flex items-center mb-3">
                  <XCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h2 className="text-lg md:text-xl font-semibold text-green-800">
                    Jika Buku Nikah Rusak
                  </h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Buku Nikah asli yang rusak (diserahkan).",
                    "Fotokopi KTP suami dan istri.",
                    "Pas foto 2x3 latar biru (2 lembar masing-masing).",
                    "Surat permohonan tertulis di atas materai.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prosedur */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                Prosedur Pengurusan
              </h2>

              <ol className="space-y-4 text-gray-700">
                {[
                  "Siapkan dokumen: lengkapi semua persyaratan yang diperlukan.",
                  "Datang ke KUA: kunjungi KUA tempat akad nikah dilangsungkan (bukan KUA domisili).",
                  "Ajukan permohonan: serahkan dokumen kepada petugas KUA.",
                  "Verifikasi data: petugas KUA akan memverifikasi data pernikahan di arsip mereka.",
                  "Penerbitan duplikat: jika data valid, duplikat Kutipan Akta Nikah akan diterbitkan.",
                  "Pengambilan buku: duplikat buku nikah dapat diambil setelah proses selesai.",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 font-semibold">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default Duplikat;
