import NextLink from "../links/NextLink";
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from "@/utils/currency";
import ratingGenerate from "@/utils/ratings";
import Link from "next/link";

// =========================================
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
}
// =========================================

export default function ProductCard(props: ProductCardProps) {
  const { image, title, new: newProduct, sale, category, salePrice, regularPrice, rating, className = "", power } = props;

  const badge = (title: string, color: string) => {
    return (
      <span
        style={{ top: "1rem", left: "1rem" }}
        className={`avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`}>
        <span>{title}</span>
      </span>
    );
  };

  return (
    <div className={`project item ${className}`}>
      <Link href={`/agregaty/agregat-pluspower-${power}-kw`}>
        <figure className="rounded mb-6 position-relative overflow-hidden">
          <img src={`/img/photos/${image}.webp`} srcSet={`/img/photos/${image}@2x.jpg 2x`} alt="" />

          <a
            href="#"
            title=""
            className="item-like"
            aria-label="Add to wishlist"
            data-bs-toggle="white-tooltip"
            data-bs-original-title="Add to wishlist">
            <i className="uil uil-heart" />
          </a>

          <a
            href="#"
            title=""
            className="item-view"
            aria-label="Quick view"
            data-bs-toggle="white-tooltip"
            data-bs-original-title="Quick view">
            <i className="uil uil-eye" />
          </a>

          <a className="item-cart">
            <i className="uil uil-shopping-bag" /> Zobacz
          </a>

          {newProduct && badge("Nowy", "bg-aqua")}
          {sale && badge("Promocja", "bg-pink")}
        </figure>

        <div className="post-header">
          <div className="d-flex flex-row align-items-center justify-content-between mb-2">
            <div className="post-category text-ash mb-0">{category}</div>
            <span className={`ratings ${ratingGenerate(rating)}`} />
          </div>

          <h2 className="post-title h3 fs-22">
            <NextLink title={title} href="#" className="link-dark" />
          </h2>

          <p className="price">
            {salePrice && salePrice > 0 ? (
              <>
                <del>
                  <span className="amount">{salePrice} zł</span>
                </del>{" "}
                <ins>
                  <span className="amount">{regularPrice} zł</span>
                </ins>
              </>
            ) : (
              <span className="amount">{regularPrice} zł</span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
