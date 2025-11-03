import React from "react";
import Footers from "../MainPage/Footer";
function Legalisir() {
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 border-b pb-2 text-center">
          Legalisir Buku Nikah
        </h1>
        <p className="text-gray-600">
          Legalisir buku nikah adalah proses pengesahan fotokopi buku nikah agar
          memiliki kekuatan hukum yang sama dengan aslinya. Proses ini
          diperlukan untuk berbagai keperluan administrasi, baik di dalam maupun
          luar negeri.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          Tempat dan Prosedur Legalisir
        </h2>
        <p className="text-gray-600">
          Tempat legalisir buku nikah tergantung pada kebutuhan Anda:
        </p>

        {/* Bagian KUA */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            1. Kantor Urusan Agama (KUA) Setempat
          </h3>
          <p className="text-gray-600 mt-1">
            Ini adalah tempat paling umum untuk legalisir, biasanya untuk
            keperluan domestik (dalam negeri).
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-gray-600">
            <li>**Tempat:** KUA tempat pernikahan Anda dicatat.</li>
            <li>
              **Biaya:** Umumnya{" "}
              <strong className="text-green-600">gratis</strong>.
            </li>
          </ul>
        </div>

        {/* Bagian Kemenag, Kemenkumham, Kemenlu */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            2. Instansi Lain (Kemenag, Kemenkumham, Kemenlu)
          </h3>
          <p className="text-gray-600 mt-1">
            Diperlukan jika dokumen akan digunakan untuk keperluan luar negeri
            atau Apostille.
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-gray-600">
            <li>**Kemenag:** Untuk keperluan luar negeri.</li>
            <li>
              **Kemenkumham & Kemenlu:** Untuk legalisasi bertingkat atau sistem
              Apostille.
            </li>
          </ul>
        </div>

        <div
          className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md"
          role="alert"
        >
          <p className="font-bold">Catatan Penting:</p>
          <p>
            Pastikan Anda membawa dokumen asli untuk proses verifikasi di setiap
            tingkatan legalisir.
          </p>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default Legalisir;
