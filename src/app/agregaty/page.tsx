import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Carousel from "@/components/reuseable/Carousel";
import Breadcrumb from "@/components/reuseable/Breadcrumb";
import { ProductCard } from "@/components/reuseable/product-cards";

// LOCAL CUSTOM COMPONENTS
import ProductReviews from "./components/product-reviews";
import ProductDescription from "./components/product-description";
import ProductReviewAside from "./components/product-review-aside";
// CUSTOM DATA
import products from "@/data/product-list";
import data from "@/data/product-details-page";
import ThumbsCarousel from "@/components/reuseable/ThumbsCarousel";
import ProductActions from "./components/product-actions";
import Link from "next/link";

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((item) => ({ id: item.toString() }));
}

export default function ProductDetails() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <Fragment>
      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white "
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}>
        <div className="container pt-10 pb-10 pt-md-10 pb-md-10 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-1 mb-3 text-white">Agregaty</h1>

            </div>
          </div>
        </div>
      </section>
      {/* ========== product info section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-8">
            <div className="col-lg-6">
              <ThumbsCarousel />
            </div>

            {/* ========== product actions (size, color, add to cart) section ========== */}
            <ProductActions />
          </div>

          {/* ========== product description tab section ========== */}
          <ProductDescription />
        </div>
      </section>

      {/* ========== liked products section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          <h3 className="h2 mb-6 text-center">Zobacz również inne nasze agregaty</h3>

          <div className="swiper-container blog grid-view shop mb-6">
            <Carousel navigation={true} breakpoints={carouselBreakpoints} >
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
