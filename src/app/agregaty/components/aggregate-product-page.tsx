import { Fragment } from "react";
import type { Metadata } from "next";
import { ProductCard } from "@/components/reuseable/product-cards";
import ThumbsCarousel from "@/components/reuseable/ThumbsCarousel";
import aggregateModels, { AggregateModel } from "@/data/aggregate-models";
import products from "@/data/product-list";
import ProductActions from "./product-actions";
import ProductDescription from "./product-description";

interface AggregateProductPageProps {
  model: AggregateModel;
}

export function buildAggregateMetadata(model: AggregateModel): Metadata {
  return {
    title: `${model.title} (${model.kva} kVA) | agregatypradu.pl`,
    description: `${model.description} Parametry techniczne, wyposażenie i szybki kontakt w sprawie modelu ${model.power} kW (${model.kva} kVA).`,
  };
}

export default function AggregateProductPage({ model }: AggregateProductPageProps) {
  const relatedProducts = products.filter((item) => item.slug !== model.slug).slice(0, 4);

  return (
    <Fragment>
      <section
        className="relative min-h-[260px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            {model.title} ({model.kva} kVA)
          </h1>
          <p className="mt-3 text-blue-100 text-lg">{model.description}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <ThumbsCarousel />
            </div>
            <ProductActions model={model} />
          </div>

          <ProductDescription model={model} />
        </div>
      </section>

      <section className="bg-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
            Zobacz również inne nasze agregaty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <ProductCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
