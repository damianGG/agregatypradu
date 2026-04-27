import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findAggregateModelByPower } from "@/data/aggregate-models";
import AggregateProductPage, { buildAggregateMetadata } from "../../components/aggregate-product-page";

const model = findAggregateModelByPower(40);

export const metadata: Metadata = model
  ? buildAggregateMetadata(model)
  : {
      title: "Agregaty PlusPower | agregatypradu.pl",
      description: "Sprawdź ofertę agregatów PlusPower dostępnych na osobnych stronach produktowych.",
    };

export default function ProductDetails() {
  if (!model) {
    notFound();
  }

  return <AggregateProductPage model={model} />;
}
