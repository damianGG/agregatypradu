
import Hero15 from "@/components/blocks/hero/Hero15";
import About6 from "@/components/blocks/about/About6";
import Hero19 from "@/components/blocks/hero/Hero19";
import Services21 from "@/components/blocks/services/Services21";
import Services22 from "@/components/blocks/services/Services22";
import Facts13 from "@/components/blocks/facts/Facts13";
import Testimonial16 from "@/components/blocks/testimonial/Testimonial16";
import Portfolio10 from "@/components/blocks/portfolio/Portfolio10";
import About20 from "@/components/blocks/about/About20";
import { ProductCard } from "@/components/reuseable/product-cards";
import products from "@/data/product-list";
import Testimonial1 from "@/components/blocks/testimonial/Testimonial1";

export default function Home() {
  return (
    <main >
      <div>
        {/* ========== main content ========== */}
        <main className="content-wrapper">
          {/* ========== hero section ========== */}
          <Hero19 />

          <section className="wrapper bg-light">
            <div className="container pb-15 pb-md-17">
              {/* ========== services section ========== */}
              <Services21 />

              {/* ========== why choose sandbox section ========== */}
              <Services22 />
            </div>
          </section>

          {/* ========== what makes section ========== */}

          <section className="wrapper bg-gray pb-15">
            {/* <Facts13 /> */}
            <div className="container">
              <Testimonial1 />
              {/* ========== testimonial section ========== */}

            </div>
          </section>


          {/* ========== product page ========== */}
          <section className="wrapper bg-light">
            <div className="container py-14 py-md-16">
              <div className="row align-items-center mb-10 position-relative zindex-1">

                <h2 className="display-6 text-center">Nasze agregaty</h2>


                <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                  {/* <Select options={options} /> */}
                </div>
              </div>

              <div className="row gx-md-8 gy-10 gy-md-13 mb-13">
                {products.map((item) => (
                  <ProductCard {...item} key={item.id} className="col-md-6 col-xl-4" />
                ))}
              </div>
            </div>
          </section>
          {/* ========== product page ========== */}
          <section className="wrapper bg-light">
            {/* <div className="container py-16 py-md-18"> */}
            {/* ========== testimonial section ========== */}


            {/* ========== latest project section ========== */}


            {/* ========== what make us section ========== */}
            {/* <About20 /> */}
            {/* </div> */}
          </section>
          {/* ========== call to action section ========== */}
          {/* <CTA8 /> */}
        </main>
      </div>
    </main>
  );
}
