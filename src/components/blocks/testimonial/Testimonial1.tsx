import { TestimonialCard1 } from "@/components/reuseable/testimonial-cards";
import { testimonialList1 } from "@/data/testimonial-list";

export default function Testimonial1() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialList1.map((item, i) => (
                <TestimonialCard1 key={i} {...item} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Nasi klienci o nas</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Zobacz co klienci mówią o naszych agregatach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Wybór naszych agregatów to gwarancja niezawodności i zaufania.
              Przez lata dostarczamy sprzęt najwyższej jakości, spełniając oczekiwania firm z różnych branż.
              Dbałość o szczegóły i ciągłe wsparcie to fundament naszej działalności.
              Przekonaj się, dlaczego liderzy rynku wybierają właśnie nas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
