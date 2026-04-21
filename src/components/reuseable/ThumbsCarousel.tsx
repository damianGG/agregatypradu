"use client";

import Image from "next/image";
import { useState } from "react";

import type Swiper from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";
// -------- CUSTOM HOOK -------- //
import useLightBox from "@/hooks/useLightBox";

const IMAGES = [
  "/img/photos/IMG_6274.jpg",
  "/img/photos/IMG_6275.jpg",
  "/img/photos/1.png",
  "/img/photos/2.png",
  "/img/photos/3.png",
  "/img/photos/4.png",
  "/img/photos/5.png",
  "/img/photos/6.png",
  "/img/photos/7.png",
];

export default function ThumbsCarousel() {
  useLightBox();

  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  return (
    <div className="swiper-container swiper-thumbs-container w-full">
      {/* ─── Main slide ─── */}
      <div className="relative">
        <SwiperCarousel
          spaceBetween={8}
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true, el: paginationEl }}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="rounded-2xl overflow-hidden"
        >
          {IMAGES.map((url, i) => (
            <SwiperSlide key={i}>
              <figure className="relative m-0 aspect-[4/3] bg-gray-50">
                <Image
                  fill
                  src={url}
                  alt={`agregat zdjęcie ${i + 1}`}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <a
                  aria-label="Powiększ zdjęcie"
                  className="item-link absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-opacity"
                  href={url}
                  data-glightbox
                  data-gallery="product-group"
                >
                  <span className="bg-white/80 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-800">
                      <path d="M11 3a8 8 0 100 16A8 8 0 0011 3zM1 11a10 10 0 1118.032 5.99l3.98 3.98a1 1 0 01-1.414 1.414l-3.98-3.98A10 10 0 011 11z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </figure>
            </SwiperSlide>
          ))}
        </SwiperCarousel>

        {/* Navigation arrows — shown on tablet/desktop only */}
        <div className="swiper-controls hidden sm:block">
          <div className="swiper-navigation">
            <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev" />
            <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
          </div>
        </div>
      </div>

      {/* Pagination dots — shown on mobile only */}
      <div
        ref={(node) => setPaginationEl(node)}
        className="swiper-pagination sm:hidden relative mt-3"
      />

      {/* ─── Thumbnails ─── */}
      <SwiperCarousel
        freeMode
        threshold={2}
        spaceBetween={8}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        className="swiper-thumbs mt-2"
        breakpoints={{
          0: { slidesPerView: 4 },
          480: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
        }}
      >
        {IMAGES.map((url, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100">
              <Image
                width={100}
                height={100}
                src={url}
                alt={`miniatura ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperCarousel>
    </div>
  );
}
