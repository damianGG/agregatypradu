"use client"

import { useState } from "react";
import Image from "next/image";
import { aggregateGalleryImages } from "@/data/aggregate-gallery";

interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const photos: Photo[] = aggregateGalleryImages.map(({ src, alt }) => ({
  id: src,
  width: 600,
  height: 400,
  src,
  alt,
}));

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Galeria</h1>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map(({ id, src, alt, width, height }) => (
              <button
                key={id}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setSelectedPhoto({ id, src, alt, width, height })}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
