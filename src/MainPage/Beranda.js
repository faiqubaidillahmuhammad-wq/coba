import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Beranda() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const section = document.getElementById(location.state.targetId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <header className="relative">
      <div className="relative">
        <img
          src="./images1/kantor.jpg"
          alt="students studying outdoors"
          className="w-full h-[720px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            role="region"
            aria-label="Hero overview"
            className="pointer-events-auto backdrop-blur-sm bg-white/25 border border-white/30 rounded-3xl p-8 md:p-12 max-w-3xl md:max-w-5xl mx-4 text-center transform transition duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-black drop-shadow">
              KUA PACIRAN
              <span className="block text-3xl md:text-4xl font-semibold mt-3 text-black/90">
                KANTOR URUSAN AGAMA PACIRAN
              </span>
            </h1>

            <p className="mt-6 text-white/90 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
              Kantor Urusan Agama Kecamatan Paciran merupakan instansi vertikal
              di bawah naungan Kementerian Agama Kabupaten Lamongan yang
              memiliki tugas dan fungsi dalam penyelenggaraan sebagian urusan
              pemerintahan di bidang agama Islam di wilayah Kecamatan Paciran.
            </p>

            <div className="mt-8 flex justify-center"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Beranda;
