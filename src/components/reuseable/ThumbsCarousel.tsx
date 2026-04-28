"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { aggregateGalleryImages } from "@/data/aggregate-gallery";

export default function ThumbsCarousel() {
    const [active, setActive] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const total = aggregateGalleryImages.length;
    const activeThumbRef = useRef<HTMLButtonElement | null>(null);
    const activeImage = useMemo(() => aggregateGalleryImages[active], [active]);

    const goPrev = () => setActive((i) => (i - 1 + total) % total);
    const goNext = () => setActive((i) => (i + 1) % total);

    useEffect(() => {
        activeThumbRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [active]);

    useEffect(() => {
        if (!isLightboxOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsLightboxOpen(false);
            if (event.key === "ArrowLeft") goPrev();
            if (event.key === "ArrowRight") goNext();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isLightboxOpen, total]);

    return (
        <div className="w-full select-none">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    aria-label="Poprzednie zdjęcie"
                    onClick={goPrev}
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-200 hover:bg-gray-50 transition-colors text-xl font-bold"
                >
                    ‹
                </button>

                <button
                    type="button"
                    aria-label="Powiększ zdjęcie"
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative flex-1 aspect-square rounded-2xl overflow-hidden"
                >
                    <Image
                        key={activeImage.src}
                        fill
                        src={activeImage.src}
                        alt={activeImage.alt}
                        className="object-cover"
                        sizes="(max-width: 1024px) calc(100vw - 5rem), 50vw"
                        quality={82}
                        priority={active < 2}
                    />
                </button>

                <button
                    type="button"
                    aria-label="Następne zdjęcie"
                    onClick={goNext}
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-200 hover:bg-gray-50 transition-colors text-xl font-bold"
                >
                    ›
                </button>
            </div>

            <div className="mt-3 mx-auto flex max-w-[460px] gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
                {aggregateGalleryImages.map((image, i) => (
                    <button
                        key={i}
                        ref={i === active ? activeThumbRef : null}
                        type="button"
                        aria-label={image.alt}
                        onClick={() => setActive(i)}
                        className={`relative snap-start flex-shrink-0 h-16 w-20 rounded-lg overflow-hidden border-2 transition-all ${i === active
                            ? "border-[#e5740e] opacity-100 shadow-md"
                            : "border-transparent opacity-60 hover:opacity-90"
                            }`}
                    >
                        <Image
                            fill
                            src={image.src}
                            alt={image.alt}
                            className="object-cover"
                            sizes="80px"
                            quality={60}
                        />
                    </button>
                ))}
            </div>

            {isLightboxOpen ? (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        type="button"
                        aria-label="Zamknij podgląd"
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 text-gray-900 text-2xl leading-none hover:bg-white"
                    >
                        ×
                    </button>

                    <button
                        type="button"
                        aria-label="Poprzednie zdjęcie"
                        onClick={(event) => {
                            event.stopPropagation();
                            goPrev();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 text-gray-900 text-2xl hover:bg-white"
                    >
                        ‹
                    </button>

                    <div
                        className="relative w-full max-w-6xl h-[80vh]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            key={`${activeImage.src}-lightbox`}
                            fill
                            src={activeImage.src}
                            alt={activeImage.alt}
                            className="object-contain"
                            sizes="100vw"
                            quality={90}
                            priority
                        />
                    </div>

                    <button
                        type="button"
                        aria-label="Następne zdjęcie"
                        onClick={(event) => {
                            event.stopPropagation();
                            goNext();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 text-gray-900 text-2xl hover:bg-white"
                    >
                        ›
                    </button>
                </div>
            ) : null}
        </div>
    );
}
