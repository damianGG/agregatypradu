"use client";

import { ReactElement, useEffect, useMemo, useState } from "react";

// ==================================================================
type CarouselBreakpoints = Record<number, { slidesPerView?: number }>;

interface CarouselProps {
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slideClassName?: string;
  children: ReactElement[];
  slidesPerView?: number | "auto";
  breakpoints?: CarouselBreakpoints;
  autoplay?: boolean | { delay?: number };
  className?: string;
  grabCursor?: boolean;
}
// ==================================================================

export default function Carousel({
  children,
  slideClassName,
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  breakpoints,
  autoplay = false,
  className = "",
  grabCursor = false,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(
    typeof slidesPerView === "number" ? slidesPerView : 1
  );

  const totalSlides = children.length;

  const maxIndex = useMemo(() => {
    return Math.max(0, totalSlides - currentSlidesPerView);
  }, [totalSlides, currentSlidesPerView]);

  useEffect(() => {
    const resolveSlidesPerView = () => {
      const viewportWidth = window.innerWidth;
      let resolvedSlides = typeof slidesPerView === "number" ? slidesPerView : 1;

      if (breakpoints) {
        const sortedBreakpoints = Object.keys(breakpoints)
          .map(Number)
          .sort((a, b) => a - b);

        sortedBreakpoints.forEach((point) => {
          if (viewportWidth >= point) {
            const pointSlides = breakpoints[point]?.slidesPerView;
            if (typeof pointSlides === "number") resolvedSlides = pointSlides;
          }
        });
      }

      setCurrentSlidesPerView(Math.max(1, resolvedSlides));
    };

    resolveSlidesPerView();
    window.addEventListener("resize", resolveSlidesPerView);
    return () => window.removeEventListener("resize", resolveSlidesPerView);
  }, [slidesPerView, breakpoints]);

  useEffect(() => {
    setActiveIndex((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoplay || totalSlides <= currentSlidesPerView) return;

    const delay = typeof autoplay === "object" ? autoplay.delay ?? 3500 : 3500;

    const interval = setInterval(() => {
      setActiveIndex((previous) => {
        if (previous >= maxIndex) return 0;
        return previous + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [autoplay, totalSlides, currentSlidesPerView, maxIndex]);

  const translateX = (100 / currentSlidesPerView) * activeIndex;

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  const goPrev = () => {
    setActiveIndex((previous) => Math.max(0, previous - 1));
  };

  const goNext = () => {
    setActiveIndex((previous) => Math.min(maxIndex, previous + 1));
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-out ${grabCursor ? "cursor-grab active:cursor-grabbing" : ""
            }`}
          style={{
            transform: `translateX(-${translateX}%)`,
            gap: `${spaceBetween}px`,
          }}
        >
          {children.map((slide, index) => (
            <div
              key={index}
              className={slideClassName}
              style={{
                flex: `0 0 calc(${100 / currentSlidesPerView}% - ${(spaceBetween * (currentSlidesPerView - 1)) / currentSlidesPerView}px)`,
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {navigation ? (
        <>
          <button
            type="button"
            aria-label="Poprzedni slajd"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-gray-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Następny slajd"
            onClick={goNext}
            disabled={!canGoNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-gray-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </>
      ) : null}

      {pagination ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Przejdź do slajdu ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#e5740e]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
