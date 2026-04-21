import { ServiceCard1 } from "@/components/reuseable/service-cards";
import { serviceList11 } from "@/data/service";

export default function Services21() {
  return (
    <>
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Dlaczego wybrać agregatypradu.pl?</p>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Co nas <span className="text-blue-600 underline decoration-blue-300">wyróżnia?</span>
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
