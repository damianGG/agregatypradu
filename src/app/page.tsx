import Hero19 from "@/components/blocks/hero/Hero19";
import BestsellersSlider from "@/components/blocks/products/BestsellersSlider";
import Services21 from "@/components/blocks/services/Services21";
import Testimonial1 from "@/components/blocks/testimonial/Testimonial1";
import Image from "next/image";
import Link from "next/link";
import { aggregateDescriptionImages } from "@/data/aggregate-gallery";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero19 />

      {/* Best Sellers Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">Nasze bestsellery:</h2>
          <div className="mb-16">
            <BestsellersSlider />
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="bg-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-16">
            Najważniejsze elementy agregatu PlusPower
          </h2>

          {/* Ricardo Engine */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="w-full lg:w-1/2 lg:order-2">
              <figure className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={aggregateDescriptionImages.engine.src}
                  alt={aggregateDescriptionImages.engine.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={82}
                />
              </figure>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Silnik RICARDO</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Silniki RICARDO to połączenie ponad stuletniej tradycji innowacji z nowoczesnymi technologiami, oferując wyjątkową wydajność, niezawodność i trwałość w różnych branżach przemysłowych.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ponad 100 lat innowacji i doświadczenia w inżynierii silników.",
                  "Twórca nowoczesnej teorii spalania wewnętrznego, poprawiającej wydajność i zmniejszającej zużycie paliwa.",
                  "Zaawansowane systemy zarządzania spalaniem, które optymalizują moc i redukują emisję spalin.",
                  "Niezwykle trwałe materiały, zapewniające długowieczność silników w trudnych warunkach pracy.",
                  "Wysoka wydajność oraz niskie koszty eksploatacyjne dzięki zaawansowanym rozwiązaniom technologicznym.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/silnik-ricardo"
                className="inline-block bg-[#e5740e] hover:bg-[#cf650c] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                Poznaj silniki RICARDO
              </Link>
            </div>
          </div>

          {/* Stamford Generator */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="w-full lg:w-1/2 lg:order-1">
              <figure className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={aggregateDescriptionImages.alternator.src}
                  alt={aggregateDescriptionImages.alternator.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={82}
                />
              </figure>
            </div>
            <div className="w-full lg:w-1/2 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Prądnica STAMFORD</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prądnice Stamford, produkowane przez renomowaną firmę Cummins Generator Technologies, łączą wieloletnie doświadczenie z nowoczesnymi technologiami, oferując niezawodność, wydajność oraz trwałość w różnych sektorach przemysłowych.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Produkowane przez Cummins Generator Technologies, jednego z liderów w branży energetycznej.",
                  "Wieloletnie doświadczenie w projektowaniu prądnic synchronicznych, znanych z niezawodności.",
                  "Zastosowanie w kluczowych sektorach, takich jak energetyka, przemysł i transport.",
                  "Modułowa budowa, ułatwiająca konserwację i przyspieszająca naprawy.",
                  "Wysoka sprawność energetyczna, zapewniająca oszczędność i przyjazność dla środowiska.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pradnica-stanford"
                className="inline-block bg-[#e5740e] hover:bg-[#cf650c] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                Poznaj prądnice STAMFORD
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Services21 />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50">
        <Testimonial1 />
      </section>
    </main>
  );
}
