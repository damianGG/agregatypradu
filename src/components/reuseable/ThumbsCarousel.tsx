"use client";

import Image from "next/image";
import { useState } from "react";

import type Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";
// -------- CUSTOM HOOK -------- //
import useLightBox from "@/hooks/useLightBox";


export default function ThumbsCarousel() {
  // FOR FULL VIEW IMAGE
  useLightBox();

  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const slideImages = [
    { id: 1, url: "/img/photos/IMG_6274.jpg", fullImage: "/img/photos/IMG_6274.jpg" },
    { id: 2, url: "/img/photos/IMG_6275.jpg", fullImage: "/img/photos/IMG_6275.jpg" },
    { id: 3, url: "/img/photos/1.png", fullImage: "/img/photos/1.png" },
    { id: 4, url: "/img/photos/2.png", fullImage: "/img/photos/2.png" },
    { id: 5, url: "/img/photos/3.png", fullImage: "/img/photos/3.png" },
    { id: 6, url: "/img/photos/4.png", fullImage: "/img/photos/4.png" },
    { id: 7, url: "/img/photos/5.png", fullImage: "/img/photos/5.png" },
    { id: 8, url: "/img/photos/6.png", fullImage: "/img/photos/6.png" },
    { id: 9, url: "/img/photos/7.png", fullImage: "/img/photos/7.png" },
  ];

  const thumbImages = [
    { id: 1, url: "/img/photos/IMG_6274.jpg" },
    { id: 2, url: "/img/photos/IMG_6275.jpg" },
    { id: 3, url: "/img/photos/1.png" },
    { id: 4, url: "/img/photos/2.png" },
    { id: 5, url: "/img/photos/3.png" },
    { id: 6, url: "/img/photos/4.png" },
    { id: 7, url: "/img/photos/5.png" },
    { id: 8, url: "/img/photos/6.png" },
    { id: 9, url: "/img/photos/7.png" },
  ];

  return (
    <div className="swiper-container swiper-thumbs-container">
      <SwiperCarousel
        spaceBetween={10}
        pagination={false}
        navigation={{ prevEl, nextEl }}
        //  navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
        {slideImages.map(({ url, id, fullImage }) => (
          <SwiperSlide key={id}>
            <figure className="rounded">
              <Image width={610} height={455} src={url} alt="product" className="w-100 " />
              <a className="item-link" href={fullImage} data-glightbox data-gallery="product-group">
                <i className="uil uil-focus-add" />
              </a>
            </figure>
          </SwiperSlide>
        ))}
      </SwiperCarousel>

      {/* CUSTOM NAVIGATION */}
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev" />
          <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
        </div>
      </div>

      <SwiperCarousel
        freeMode
        threshold={2}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}>
        {thumbImages.map(({ url, id }) => (
          <SwiperSlide key={id}>
            <Image width={114} height={120} src={url} alt="product" className="w-100 h-auto" />
          </SwiperSlide>
        ))}
      </SwiperCarousel>
    </div>
  );
}
