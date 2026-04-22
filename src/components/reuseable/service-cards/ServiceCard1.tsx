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
      <div className={`h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl ${cardClassName}`}>
        <div className="mb-4">
          <Icon className={`h-12 w-12 text-blue-800 ${iconClassName}`} />
        </div>
        <h4 className="mb-3 text-lg font-bold text-slate-900">{title}</h4>
        <p className="mb-4 text-sm leading-relaxed text-slate-600">{description}</p>
        <Link href={linkUrl} className="inline-flex items-center gap-1 text-sm font-medium text-blue-800 transition-colors hover:text-blue-600">
          Czytaj więcej →
        </Link>
      </div>
    </div>
  );
}
