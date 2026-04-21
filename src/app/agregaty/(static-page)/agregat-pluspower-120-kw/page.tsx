import { Fragment } from "react";
import Carousel from "@/components/reuseable/Carousel";
import { ProductCard } from "@/components/reuseable/product-cards";
import ProductDescription from "../../components/product-description";
import products from "@/data/product-list";
import ThumbsCarousel from "@/components/reuseable/ThumbsCarousel";
import Link from "next/link";
import ProductActions120 from "../../components/product-actions-120";

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((item) => ({ id: item.toString() }));
}

export default function ProductDetails() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  };

  return (
    <Fragment>
      {/* Hero */}
      <section
        className="relative min-h-[260px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Agregat PlusPower 120 kW</h1>
          <p className="mt-3 text-blue-100 text-lg">Niezawodne źródło energii dużej mocy</p>
        </div>
      </section>

      {/* Product info */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <ThumbsCarousel />
            </div>
            <ProductActions120 />
          </div>

          <ProductDescription />
        </div>
      </section>

      {/* Related products */}
      <section className="bg-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
            Zobacz również inne nasze agregaty
          </h3>
          <div className="swiper-container blog grid-view shop mb-6">
            <Carousel navigation={true} breakpoints={carouselBreakpoints}>
              {products.slice(0, 5).map((item) => (
                <Link href={`/agregaty/${item.id}`} key={item.id}>
                  <ProductCard {...item} key={item.id} />
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
