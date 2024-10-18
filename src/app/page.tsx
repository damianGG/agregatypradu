
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
import Link from "next/link";
type ListProps = { color: "fuchsia" | "violet" | "green"; title: string };
const List2 = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Nasze agregaty prądotwórcze są zaprojektowane z myślą o najwyższej niezawodności i trwałości, co czyni je idealnym wyborem dla zastosowań wymagających nieprzerwanego zasilania, nawet w najtrudniejszych warunkach
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Testowane w ekstremalnych warunkach
        </li>
        <li>
          <i className="uil uil-check" /> Wysoka efektywność energetyczna
        </li>
        <li>
          <i className="uil uil-check" /> Długi okres eksploatacji bez awarii
        </li>
      </ul>


    </div>
  );
};

export default function Home() {
  return (
    <main >
      <div>
        {/* ========== main content ========== */}
        <main className="content-wrapper">
          {/* ========== hero section ========== */}
          <Hero19 />
          <section className="wrapper bg-light">
            <div className="container py-14 py-md-16">
              <div className="row align-items-center mb-10 position-relative zindex-1">

                <h2 className="display-6 text-center">Nasze bestsellery:</h2>


                <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                  {/* <Select options={options} /> */}
                </div>
              </div>

              <div className="row gx-md-8 gy-10 gy-md-13 mb-13">
                {products.map((item) => (
                  <ProductCard {...item} key={item.id} className="col-md-6 col-xl-6" />
                ))}
              </div>
            </div>
          </section>
          <section className="wrapper bg-light">
            <div className="container pb-10 pb-md-13 text-center">
              <h2>Najważniejsze elemnety agregatu PlusPower</h2>
            </div>
          </section>
          <section className="wrapper bg-light">
            <div className="container pb-15 pb-md-17">
              <div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                  <div className="col-lg-6 order-lg-2">
                    <figure className="rounded shadow-lg">
                      <img src="/img/photos/IMG_6274.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="order-lg-1 col-lg-6">

                    <h2 className="mb-3">Silnik RICARDO</h2>
                    <p>
                      Silniki RICARDO to połączenie ponad stuletniej tradycji innowacji z nowoczesnymi technologiami, oferując wyjątkową wydajność, niezawodność i trwałość w różnych branżach przemysłowych.
                    </p>

                    <ul className={`icon-list bullet-bg bullet-soft-sky mb-10`}>
                      <li>
                        <i className="uil uil-check" /> Ponad 100 lat innowacji i doświadczenia w inżynierii silników.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Twórca nowoczesnej teorii spalania wewnętrznego, poprawiającej wydajność i zmniejszającej zużycie paliwa.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Zaawansowane systemy zarządzania spalaniem, które optymalizują moc i redukują emisję spalin.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Niezwykle trwałe materiały, zapewniające długowieczność silników w trudnych warunkach pracy.
                      </li>

                      <li>
                        <i className="uil uil-check" /> Wysoka wydajność oraz niskie koszty eksploatacyjne dzięki zaawansowanym rozwiązaniom technologicznym.
                      </li>
                    </ul>

                    <Link href={"/silnik-ricardo"} >
                      <button className="btn btn-sky rounded mb-10 mb-xxl-5">  Poznaj silniki RICARDO</button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="wrapper bg-light">
            <div className="container pb-15 pb-md-17">
              <div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                  <div className="col-lg-6 order-lg-1">
                    <figure className="rounded shadow-lg">
                      <img src="/img/photos/pradnica.webp" alt="" />
                    </figure>
                  </div>
                  <div className="order-lg-2 col-lg-6">

                    <h2 className="mb-3">Prądnica STAMFORD</h2>
                    <p>
                      Prądnice Stamford, produkowane przez renomowaną firmę Cummins Generator Technologies, łączą wieloletnie doświadczenie z nowoczesnymi technologiami, oferując niezawodność, wydajność oraz trwałość w różnych sektorach przemysłowych.
                    </p>

                    <ul className={`icon-list bullet-bg bullet-soft-sky mb-10`}>
                      <li>
                        <i className="uil uil-check" /> Produkowane przez Cummins Generator Technologies, jednego z liderów w branży energetycznej.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Wieloletnie doświadczenie w projektowaniu prądnic synchronicznych, znanych z niezawodności.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Zastosowanie w kluczowych sektorach, takich jak energetyka, przemysł i transport.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Modułowa budowa, ułatwiająca konserwację i przyspieszająca naprawy.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Wysoka sprawność energetyczna, zapewniająca oszczędność i przyjazność dla środowiska.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Odporność na trudne warunki pracy, dzięki zastosowaniu zaawansowanych technologii.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Inwestycja w technologię przyszłości, opartą na solidnych fundamentach innowacji.
                      </li>
                      <li>
                        <i className="uil uil-check" /> Wsparcie techniczne na całym świecie, oferowane przez globalną sieć Cummins.
                      </li>
                    </ul>

                    <Link href={"/pradnica-stanford"} >
                      <button className="btn btn-sky rounded mb-10 mb-xxl-5">  Poznaj prądnice STANFORD</button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wrapper bg-light">
            <div className="container pb-15 pb-md-17">
              {/* ========== services section ========== */}
              <Services21 />
              {/* ========== why choose sandbox section ==========
              <Services22 /> */}

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

          {/* ========== product page ========== */}
          <section className="wrapper bg-light">
          </section>
          {/* ========== call to action section ========== */}
          {/* <CTA8 /> */}
        </main>
      </div>
    </main>
  );
}
