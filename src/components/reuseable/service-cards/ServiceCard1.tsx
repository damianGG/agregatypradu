import Link from "next/link";
import IconProps from "@/types/icon";
import { LinkType } from "@/types/demo-1";

interface ServiceCard1Props {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: (props: IconProps) => JSX.Element;
}

export default function ServiceCard1({
  title,
  Icon,
  linkUrl,
  linkType,
  description,
  cardClassName = "",
  iconClassName = ""
}: ServiceCard1Props) {
  return (
    <div className="w-full md:w-1/2 xl:w-1/4 px-3 mb-6">
      <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full border border-blue-50 ${cardClassName}`}>
        <div className="mb-4">
          <Icon className={`w-12 h-12 text-blue-600 ${iconClassName}`} />
        </div>
        <h4 className="text-lg font-bold text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <Link href={linkUrl} className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 transition-colors">
          Czytaj więcej →
        </Link>
      </div>
    </div>
  );
}
