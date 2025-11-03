import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const profile = ["Visi Misi", "Struktur Organisasi"];

function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi scroll ke section
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Jika bukan di homepage → navigasi ke "/" sambil kirim targetId
      navigate("/", { state: { targetId: id } });
    } else {
      // Jika sudah di homepage → langsung scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // Tutup menu jika di mobile
  };

  return (
    <>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="./images1/logo.png"
            alt="KUA logo"
            className="w-20 h-auto"
          />
          <p className="ml-[-10px] text-lg font-semibold font-[Lora] cursor-pointer">
            KUA PACIRAN
          </p>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-indigo-600 ${
                location.pathname === "/" ? "text-indigo-600" : ""
              }`}
            >
              Beranda
            </Link>
          </li>

          <li className="relative group">
            <button className="hover:text-indigo-600 flex items-center gap-2">
              <span onClick={() => scrollToSection("kua")}>Profil</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown profil */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 z-50 hidden group-hover:block bg-white border rounded-md shadow-lg py-2 w-40">
              {profile.map((item, i) => {
                const sectionId = item.replace(/\s+/g, "-").toUpperCase();
                return (
                  <button
                    key={i}
                    onClick={() => scrollToSection(sectionId)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("PERNIKAHAN")}
              className="hover:text-indigo-600"
            >
              Pernikahan
            </button>
          </li>
          <li>
            <a
              href="https://wa.me/+6285859639433"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="p-2 rounded-md bg-white/90 backdrop-blur-sm border"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
            <button
              onClick={() => scrollToSection("beranda")}
              className="block w-full text-left py-2 px-3 rounded hover:bg-gray-100"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("kua")}
              className="block w-full text-left py-2 px-3 rounded hover:bg-gray-100"
            >
              Profil
            </button>
            <button
              onClick={() => scrollToSection("PERNIKAHAN")}
              className="block w-full text-left py-2 px-3 rounded hover:bg-gray-100"
            >
              Pernikahan
            </button>
            <Link
              to="/konseling"
              className="block py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Kepenyuluhan
            </Link>
            <a
              href="https://wa.me/+6285859639433"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Headers;
