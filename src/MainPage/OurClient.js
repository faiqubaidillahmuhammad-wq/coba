import { useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewStart, setViewStart] = useState(0); // index of first visible card in the 2-card window
  const [slideDir, setSlideDir] = useState(0); // -1 left, 1 right

  const cards = [
    {
      title: "Kepala",
      desc: "Hafidl, S.Ag. M.Pd.I.",
      color: "bg-white text-black border",
      img: "./images1/pengurus/hafidi.jpeg",
    },
    {
      title: "Penghulu",
      desc: "Muhammad Faiq Ubaidillah, S.Ag ",
      color: "bg-white text-black border",
      img: "./images1/pengurus/faiqu.jpeg",
    },
    {
      title: "Penghulu",
      desc: "Ach. Qomaruzzaman, S.Sos.",
      color: "bg-white text-black border",
      img: "./images1/pengurus/qomaruz.jpeg",
    },
    {
      title: "Penyuluh Agama Islam",
      desc: "Tatimul Kholidah, S.H.I.",
      color: "bg-gray-50 text-gray-400 border",
      img: "./images1/pengurus/tatimul.jpeg",
    },
    {
      title: "Penyuluh Agama Islam",
      desc: "La Gani Siompo, S.Ag.",
      color: "bg-gray-50 text-gray-400 border",
      img: "./images1/pengurus/laGani.jpeg",
    },
    {
      title: "Penyuluh Agama Islam",
      desc: "Ihlal Fauqi, S.T.",
      color: "bg-gray-50 text-gray-400 border",
      img: "./images1/pengurus/ihlalF.jpeg",
    },
    {
      title: "Penyusun Bahan Urusan Agama",
      desc: "Nur Laila S.E.",
      color: "bg-white text-black border",
      img: "./images1/pengurus/nurLail.jpeg",
    },
    {
      title: "Staff Pendukung Lainnya",
      desc: " Abdurrohman Ubed, S.H.",
      color: "bg-white text-black border",
      img: "./images1/pengurus/abdUbed.jpeg",
    },
    {
      title: "Penata Layanan Operasional",
      desc: " Ni’matur Rohmah, S.Pd.",
      color: "bg-white text-black border",
      img: "./images1/pengurus/niMatur.jpeg",
    },
  ];

  const handlePrev = () => {
    // move window left
    setSlideDir(-1);
    setViewStart((s) => {
      const newStart = s === 0 ? cards.length - 1 : s - 1;
      setActiveIndex(newStart);
      return newStart;
    });
  };

  const handleNext = () => {
    // move window right
    setSlideDir(1);
    setViewStart((s) => {
      const newStart = s === cards.length - 1 ? 0 : s + 1;
      setActiveIndex(newStart);
      return newStart;
    });
  };

  return (
    <section className="w-full bg-gray-200 py-12 px-6" id="STRUKTUR-ORGANISASI">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          STRUKTUR ORGANISASI
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT IMAGE (follows active card) */}
          <div className="w-full">
            <motion.img
              key={activeIndex}
              src={cards[activeIndex]?.img}
              alt={cards[activeIndex]?.title}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl shadow-xl w-full h-[480px] object-fill"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {(() => {
                const visible = [viewStart, (viewStart + 1) % cards.length];

                const slideVariants = {
                  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
                };

                return (
                  <AnimatePresence
                    initial={false}
                    custom={slideDir}
                    mode="wait"
                  >
                    <motion.div
                      key={viewStart}
                      custom={slideDir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35 }}
                      className="flex flex-col gap-4"
                    >
                      {visible.map((i) => {
                        const card = cards[i];
                        return (
                          <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{
                              opacity: activeIndex === i ? 1 : 0.75,
                              y: activeIndex === i ? 0 : 6,
                              scale: activeIndex === i ? 1.03 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setActiveIndex(i)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ")
                                setActiveIndex(i);
                            }}
                            tabIndex={0}
                            role="button"
                            aria-pressed={activeIndex === i}
                            className={`relative p-6 rounded-2xl transition-shadow backdrop-blur-sm cursor-pointer flex flex-col md:flex-row items-center md:items-start gap-4 ${
                              card.color
                            } ${
                              activeIndex === i
                                ? "ring-2 ring-indigo-300 shadow-lg"
                                : "shadow-md"
                            }`}
                          >
                            {activeIndex === i && (
                              <motion.div
                                layoutId="activeCardBg"
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(99,102,241,0.06), rgba(14,165,233,0.04))",
                                }}
                              />
                            )}

                            <div className="flex-1 min-w-0">
                              <h3
                                className={`text-lg md:text-xl font-semibold ${
                                  card.color.includes("text-white")
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {card.title}
                              </h3>
                              <p
                                className={`mt-2 text-sm md:text-base leading-relaxed ${
                                  card.color.includes("text-white")
                                    ? "text-white/90"
                                    : "text-gray-700"
                                }`}
                              >
                                {card.desc}
                              </p>
                            </div>

                            <div className="ml-2 flex-shrink-0 hidden md:flex items-center">
                              <ArrowUpRight
                                size={20}
                                className={
                                  activeIndex === i
                                    ? "text-indigo-600"
                                    : "text-gray-400"
                                }
                              />
                            </div>
                          </motion.article>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                );
              })()}

              {/* NAV BUTTONS - moved to end of list */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="p-2 bg-white border rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="p-2 bg-white border rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
