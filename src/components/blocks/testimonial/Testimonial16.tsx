import Carousel from "@/components/reuseable/Carousel";
// CUSTOM DATA
import { testimonialList5 } from "@/data/testimonial-list";

export default function Testimonial16() {
  return (
    <div className="card shadow-lg mt-n21 mt-md-n23">
      <div className="row gx-0">
        <div
          className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
          style={{ backgroundImage: "url(/img/photos/tm2.jpg)" }}
        />

        <div className="col-lg-6">
          <div className="p-10 p-md-11 px-lg-13 py-lg-14">
            <div className="swiper-container dots-closer mb-6">

              <div className="text-center">
                <span className="ratings five mt-4 mb-3" />
                <blockquote className="border-0 fs-lg text-center">
                  <p>
                    “Agregat dostarczony przez firmę agregatypradu.pl działa u nas już 3 rok non stop”
                  </p>
                  <div className="blockquote-details justify-content-center text-center">
                    <div className="info ps-0">
                      <h5 className="mb-1">Jozef Pierscionek</h5>
                      <p className="mb-0">Prezes Betoniarni</p>
                    </div>
                  </div>
                </blockquote>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
