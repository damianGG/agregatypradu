"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/img/photos/zdjecieWtle.png", alt: "Agregat prądotwórczy PlusPower" },
  { src: "/img/photos/main_photo.jpg", alt: "Agregaty prądotwórcze" },
  { src: "/img/photos/IMG_6274.jpg", alt: "Silnik RICARDO" },
  { src: "/img/photos/IMG_6275.jpg", alt: "Agregat PlusPower 150 kW" },
  { src: "/img/photos/IMG_6277.jpg", alt: "Agregat prądotwórczy" },
  { src: "/img/photos/pluspower150kw_mainphoto.webp", alt: "PlusPower 150 kW" },
];

export default function Hero19() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(380px, 65vw, 700px)" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Poprzedni slajd"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M15.28 5.22a.75.75 0 010 1.06L9.56 12l5.72 5.72a.75.75 0 11-1.06 1.06l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Następny slajd"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.72 18.78a.75.75 0 010-1.06L14.44 12 8.72 6.28a.75.75 0 111.06-1.06l6.25 6.25a.75.75 0 010 1.06l-6.25 6.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dot pagination */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slajd ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              i === current
                ? "bg-white scale-125 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
