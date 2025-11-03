import { useState, useEffect } from "react";

function usePhotoCarousel(images = [], interval = 3000) {
  const [index, setIndex] = useState(0);

  // fungsi pindah ke slide berikutnya
  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // fungsi pindah ke slide sebelumnya
  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // auto play
  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return { index, setIndex, next, prev };
}

export default usePhotoCarousel;
