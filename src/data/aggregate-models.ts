export interface AggregateModel {
  power: number;
  kva: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  price?: number;
}

const aggregateModels: AggregateModel[] = [
  {
    power: 24,
    kva: 30,
    slug: "agregat-pluspower-24-kw",
    title: "Agregat PlusPower 24 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Kompaktowy agregat prądotwórczy do zasilania awaryjnego i codziennej pracy w firmach, gospodarstwach oraz na placach budowy.",
  },
  {
    power: 40,
    kva: 50,
    slug: "agregat-pluspower-40-kw",
    title: "Agregat PlusPower 40 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Uniwersalny agregat PlusPower 40 kW do zabezpieczenia zasilania instalacji przemysłowych, usługowych i technicznych.",
  },
  {
    power: 50,
    kva: 63,
    slug: "agregat-pluspower-50-kw",
    title: "Agregat PlusPower 50 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Stabilne źródło energii dla obiektów komercyjnych, zaplecza technicznego oraz zasilania rezerwowego w wymagających warunkach.",
  },
  {
    power: 80,
    kva: 100,
    slug: "agregat-pluspower-80-kw",
    title: "Agregat PlusPower 80 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Wydajny agregat dużej mocy zaprojektowany z myślą o pracy ciągłej i awaryjnej w biznesie, przemyśle oraz budownictwie.",
  },
  {
    power: 100,
    kva: 125,
    slug: "agregat-pluspower-100-kw",
    title: "Agregat PlusPower 100 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Mocny agregat prądotwórczy do zabezpieczenia kluczowych procesów, linii technologicznych oraz infrastruktury energetycznej.",
  },
  {
    power: 120,
    kva: 150,
    slug: "agregat-pluspower-120-kw",
    title: "Agregat PlusPower 120 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Niezawodne źródło energii dla wymagających inwestycji przemysłowych, obiektów magazynowych i rozbudowanej infrastruktury.",
    price: 75000,
  },
  {
    power: 150,
    kva: 180,
    slug: "agregat-pluspower-150-kw",
    title: "Agregat PlusPower 150 kW",
    image: "pluspower150kw_mainphoto",
    description:
      "Flagowy agregat PlusPower do zasilania awaryjnego i podstawowego tam, gdzie liczy się wysoka moc oraz pełna niezawodność.",
    price: 95000,
  },
];

export function findAggregateModelByPower(power: number): AggregateModel | undefined {
  return aggregateModels.find((model) => model.power === power);
}

export default aggregateModels;
