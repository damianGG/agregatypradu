import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  new?: boolean;
  sale?: boolean;
  rating: number;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice: number;
  power?: string;
  slug?: string;
}

export default function ProductCard(props: ProductCardProps) {
  const { image, title, new: newProduct, sale, category, salePrice, regularPrice, rating, className = "", power, slug } = props;
  const href = slug ? `/agregaty/${slug}` : power ? `/agregaty/agregat-pluspower-${power}-kw` : "/agregaty";
  const imageSrc = image.includes("/") || image.includes(".")
    ? (image.startsWith("/") ? image : `/img/photos/${image}`)
    : `/img/photos/${image}.png`;

  return (
    <div className={`group ${className}`}>
      <Link href={href}>
        <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
          <Image
            fill
            src={imageSrc}
            alt={title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            quality={78}
          />
          {newProduct && (
            <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Nowy
            </span>
          )}
          {sale && (
            <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Promocja
            </span>
          )}
          <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 flex items-center justify-center">
            <span className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
              Zobacz
            </span>
          </div>
        </div>
        <div>
          <p className="text-blue-600 text-sm font-medium mb-1">{category}</p>
          <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{title}</h2>
          <p className="text-gray-700 font-semibold">
            {salePrice && salePrice > 0 ? (
              <>
                <del className="text-gray-400 mr-2">{salePrice} zł</del>
                <span className="text-blue-600">{regularPrice} zł netto</span>
              </>
            ) : regularPrice > 0 ? (
              <span>{regularPrice} zł netto</span>
            ) : (
              <span>Zapytaj o cenę</span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
