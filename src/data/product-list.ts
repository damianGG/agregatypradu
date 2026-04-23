import aggregateModels from "./aggregate-models";

const products = aggregateModels.map((model) => ({
  rating: 5,
  new: model.power >= 100,
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
