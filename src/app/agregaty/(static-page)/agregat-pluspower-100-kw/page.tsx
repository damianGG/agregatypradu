import type { Metadata } from "next";
import aggregateModels from "@/data/aggregate-models";
import AggregateProductPage, { buildAggregateMetadata } from "../../components/aggregate-product-page";

const model = aggregateModels.find((item) => item.power === 100)!;

export const metadata: Metadata = buildAggregateMetadata(model);

export default function ProductDetails() {
  return <AggregateProductPage model={model} />;
}
