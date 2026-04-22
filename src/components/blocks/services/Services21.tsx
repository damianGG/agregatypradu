import { ServiceCard1 } from "@/components/reuseable/service-cards";
import { serviceList11 } from "@/data/service";

export default function Services21() {
  return (
    <>
      <div className="text-center mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-800">Dlaczego wybrać agregatypradu.pl?</p>
        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Co nas <span className="text-blue-800 underline decoration-blue-200">wyróżnia?</span>
        </h3>
      </div>
      <div className="flex flex-wrap -mx-3">
        {serviceList11.map(({ id, Icon, linkUrl, ...item }) => (
          <ServiceCard1 {...item} key={id} linkUrl={linkUrl} Icon={Icon} />
        ))}
      </div>
    </>
  );
}
