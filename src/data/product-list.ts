import aggregateModels from "./aggregate-models";

const NEW_PRODUCT_POWER_THRESHOLD = 100;

const products = aggregateModels.map((model) => ({
  rating: 5,
  new: model.power >= NEW_PRODUCT_POWER_THRESHOLD,
  sale: false,
  salePrice: 0,
  regularPrice: model.price ?? 0,
  category: `${model.kva} kVA`,
  title: model.title,
  image: model.image,
  id: model.slug,
  power: model.power.toString(),
  slug: model.slug,
}));

export default products;
