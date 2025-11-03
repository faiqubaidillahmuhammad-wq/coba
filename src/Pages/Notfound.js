import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWV6fVr2W6cpOXtTc_g6G-SpRDCFzbNRMJRw&s"
        alt="404 Not Found"
        className="w-80 h-80 object-cover rounded-2xl shadow-lg mb-8"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! Halaman yang kamu cari tidak ditemukan.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
