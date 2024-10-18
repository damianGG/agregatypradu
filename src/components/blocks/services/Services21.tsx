import { ServiceCard1 } from "@/components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList11 } from "@/data/service";

export default function Services21() {
  return (
    <>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Dlaczego wybrać agregatypradu.pl?</h2>
          <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">
            Co nas  <span className="underline-3 style-2 blue">wyróżnia?</span>
          </h3>
        </div>
      </div>
      <div className="row gx-md-5 gy-5  mb-14 mb-md-17">
        {serviceList11.map(({ id, Icon, linkUrl, ...item }) => (
          <ServiceCard1 {...item} key={id} linkUrl={linkUrl} Icon={Icon} />
        ))}
      </div>
    </>
  );
}
