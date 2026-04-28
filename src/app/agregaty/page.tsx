import { ProductCard } from "@/components/reuseable/product-cards";
import products from "@/data/product-list";

export default function ProductDetails() {
  return (
    <>
      <section
        className="relative min-h-[260px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Agregaty PlusPower</h1>
          <p className="mt-3 text-blue-100 text-lg">Osobne strony produktowe dla modeli od 24 kW do 150 kW</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Dostępne moce
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Wybierz agregat dopasowany do potrzeb Twojej inwestycji
            </h2>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((item) => (
              <ProductCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
