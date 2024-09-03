import NextLink from "@/components/reuseable/links/NextLink";
import { TestimonialCard1 } from "@/components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList1 } from "@/data/testimonial-list";

export default function Testimonial1() {
  return (
    <section className="wrapper">
      <div className="container py-14 py-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <div className="row gx-md-5 gy-5">
              {testimonialList1.map((item, i) => (
                <div className={`col-md-6 ${item.columnClasses}`} key={i}>
                  <TestimonialCard1 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">Nasi klienci o nas</h2>
            <h3 className="display-4 mb-5">
              Zobacz co kliencie mówią o naszych agregatach
            </h3>
            <p>
              Wybór naszych agregatów to gwarancja niezawodności i zaufania.
              Przez lata dostarczamy sprzęt najwyższej jakości, spełniając oczekiwania firm z różnych branż.
              Dbałość o szczegóły i ciągłe wsparcie to fundament naszej działalności.
              Przekonaj się, dlaczego liderzy rynku wybierają właśnie nas.
            </p>
            {/* <NextLink
              href="#"
              title="All Testimonials"
              className="btn btn-primary rounded-pill mt-3"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
