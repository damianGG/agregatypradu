"use client";

import { useState } from "react";
import Image from "next/image";
import {
  aggregateCardImageByPower,
  aggregateDescriptionImages,
  aggregateGalleryImages,
  aggregateHighlightImages,
} from "@/data/aggregate-gallery";
import { AggregateModel, aggregateBaseEquipment, aggregateControllerFeatures } from "@/data/aggregate-models";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const tabs = ["Opis agregatu", "Parametry", "Galeria", "Wyposażenie"];

interface ProductDescriptionProps {
  model: AggregateModel;
}

export default function ProductDescription({ model }: ProductDescriptionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const overviewImage = aggregateCardImageByPower[model.power] ?? aggregateDescriptionImages.overview;
  const normalizeSpecificationLabel = (label: string) => label.replace(/\s+/g, " ").replace(/\s*\(/g, "(").trim();
  const getSpecification = (label: string) =>
    model.specifications.find(
      ([specificationLabel]) => normalizeSpecificationLabel(specificationLabel) === normalizeSpecificationLabel(label)
    )?.[1] ?? "—";

  const descriptionSections = [
    {
      heading: "Zastosowanie modelu",
      image: aggregateDescriptionImages.applications.src,
      imageAlt: aggregateDescriptionImages.applications.alt,
      imageRight: false,
      items: model.applications,
    },
    {
      heading: "Parametry elektryczne",
      image: aggregateDescriptionImages.electrical.src,
      imageAlt: aggregateDescriptionImages.electrical.alt,
      imageRight: true,
      items: [
        `Moc maksymalna E.S.P. wynosi ${getSpecification("Moc maksymalna E.S.P. (kW)")} / ${getSpecification("Moc maksymalna E.S.P. (kVA)")}.`,
        `Moc znamionowa P.R.P. to ${getSpecification("Moc znamionowa P.R.P. (kW)")} / ${getSpecification("Moc znamionowa P.R.P. (kVA)")}.`,
        `Agregat pracuje przy napięciu ${getSpecification("Napięcie (V)")}, częstotliwości ${getSpecification("Częstotliwość (Hz)")} i współczynniku mocy ${getSpecification("Współczynnik mocy (cos ф)")}.`,
        `Prąd znamionowy wynosi ${getSpecification("Prąd znamionowy (A)")}, a układ pracuje jako ${getSpecification("Ilość faz")}-fazowy.`,
      ],
    },
    {
      heading: "Silnik i układ paliwowy",
      image: aggregateDescriptionImages.engine.src,
      imageAlt: aggregateDescriptionImages.engine.alt,
      imageRight: false,
      items: [
        `Model silnika: ${getSpecification("Model silnika")} (${getSpecification("Typ silnika")}, ${getSpecification("Doładowanie silnika").toLowerCase()}).`,
        `Jednostka napędowa osiąga ${getSpecification("Moc silnika (kW)")}, ma ${getSpecification("Ilość cylindrów")} cylindry i pojemność ${getSpecification("Pojemność skokowa (cm3)")}.`,
        `Układ paliwowy oparty jest o ${getSpecification("System paliwowy")}, paliwo: ${getSpecification("Rodzaj paliwa")}.`,
        `Rozruch ${getSpecification("Rodzaj rozruchu").toLowerCase()}, napięcie instalacji ${getSpecification("Napięcie instalacji (V)")}, prędkość obrotowa ${getSpecification("Prędkość obrotowa (obr./min.)")}.`,
      ],
    },
    {
      heading: "Eksploatacja i prądnica",
      image: aggregateDescriptionImages.alternator.src,
      imageAlt: aggregateDescriptionImages.alternator.alt,
      imageRight: true,
      items: [
        `Zbiornik paliwa ma pojemność ${getSpecification("Pojemność zbiornika (l)")}.`,
        `Zużycie paliwa wynosi ${getSpecification("Zużycie paliwa (50% obciążenia) (l/h)")} przy 50% obciążenia, ${getSpecification("Zużycie paliwa (75% obciążenia) (l/h)")} przy 75% obciążenia i ${getSpecification("Zużycie paliwa (100% obciążenia) (l/h)")} przy 100% obciążenia.`,
        `Zabudowa ma wymiary ${getSpecification("Długość (mm)")} x ${getSpecification("Szerokość (mm)")} x ${getSpecification("Wysokość (mm)")}, a masa bez paliwa wynosi ${getSpecification("Waga bez paliwa (kg)")}.`,
        `Prądnica ${getSpecification("Model prądnicy")} pracuje w technologii ${getSpecification("Technologia")} z regulatorem ${getSpecification("Regulator napięcia")} i izolacją klasy ${getSpecification("Klasa izolacji")}.`,
        `Poziom hałasu to ${getSpecification("Gwarantowany poziom hałasu (dBA)")}, ciśnienie akustyczne z 7 metrów ${getSpecification("Ciśnienie akustyczne z 7 metrów (dBA)")}, a stopień ochrony prądnicy wynosi ${getSpecification("Stopień ochrony prądnicy")}.`,
      ],
    },
    {
      heading: "Parametry pracy i wydajność",
      image: aggregateGalleryImages[6]?.src ?? aggregateDescriptionImages.electrical.src,
      imageAlt: aggregateGalleryImages[6]?.alt ?? aggregateDescriptionImages.electrical.alt,
      imageRight: false,
      items: [
        `Model pracuje z częstotliwością ${getSpecification("Częstotliwość (Hz)")} i napięciem ${getSpecification("Napięcie (V)")}, dzięki czemu jest gotowy do standardowych odbiorów przemysłowych oraz obiektowych.`,
        `Współczynnik mocy ${getSpecification("Współczynnik mocy (cos ф)")} oraz prąd znamionowy ${getSpecification("Prąd znamionowy (A)")} zapewniają stabilną pracę pod obciążeniem.`,
        `Sprawność układu utrzymuje się na poziomie ${getSpecification("Sprawność dla obciążenia 70% (%)")} przy 70%, ${getSpecification("Sprawność dla obciążenia 80% (%)")} przy 80% i ${getSpecification("Sprawność dla obciążenia 100% (%)")} przy pełnym obciążeniu.`,
      ],
    },
    {
      heading: "Autonomia i zabudowa",
      image: aggregateGalleryImages[1]?.src ?? aggregateDescriptionImages.applications.src,
      imageAlt: aggregateGalleryImages[1]?.alt ?? aggregateDescriptionImages.applications.alt,
      imageRight: true,
      items: [
        `Zbiornik paliwa o pojemności ${getSpecification("Pojemność zbiornika (l)")} pozwala zaplanować dłuższą pracę bez częstego tankowania.`,
        `Zużycie paliwa przy 50%, 75% i 100% obciążenia wynosi odpowiednio ${getSpecification("Zużycie paliwa (50% obciążenia) (l/h)")}, ${getSpecification("Zużycie paliwa (75% obciążenia) (l/h)")} oraz ${getSpecification("Zużycie paliwa (100% obciążenia) (l/h)")}.`,
        `Gabaryty ${getSpecification("Długość (mm)")} x ${getSpecification("Szerokość (mm)")} x ${getSpecification("Wysokość (mm)")} oraz masa ${getSpecification("Waga bez paliwa (kg)")} ułatwiają zaplanowanie miejsca montażu i transportu.`,
      ],
    },
    {
      heading: "Rozruch i bezpieczeństwo pracy",
      image: aggregateGalleryImages[8]?.src ?? aggregateDescriptionImages.engine.src,
      imageAlt: aggregateGalleryImages[8]?.alt ?? aggregateDescriptionImages.engine.alt,
      imageRight: false,
      items: [
        `Rozruch ${getSpecification("Rodzaj rozruchu").toLowerCase()} i instalacja ${getSpecification("Napięcie instalacji (V)")} wspierają pewne uruchomienie jednostki nawet przy wymagających warunkach.`,
        `Układ chłodzenia ${getSpecification("Czynnik chłodzący").toLowerCase()} z pojemnością ${getSpecification("Ilość czynnika chłodzącego (l)")} oraz układ smarowania ${getSpecification("Rodzaj oleju")} poprawiają trwałość eksploatacyjną.`,
        `Prądnica o stopniu ochrony ${getSpecification("Stopień ochrony prądnicy")} i regulatorze ${getSpecification("Regulator napięcia")} pomaga utrzymać bezpieczne parametry pracy odbiorów.`,
      ],
    },
  ];

  const descriptionHighlights = model.highlights.map((item, index) => ({
    text: item,
    image: aggregateHighlightImages[index % aggregateHighlightImages.length],
  }));

  const extraFeatureHighlights = [
    {
      text: `Pojemność zbiornika ${getSpecification("Pojemność zbiornika (l)")} i spalanie ${getSpecification("Zużycie paliwa (100% obciążenia) (l/h)")} przy pełnym obciążeniu dają wysoką autonomię pracy.`,
      image: aggregateGalleryImages[7] ?? aggregateHighlightImages[0],
    },
    {
      text: `Prądnica ${getSpecification("Model prądnicy")} z regulatorem ${getSpecification("Regulator napięcia")} zapewnia stabilne parametry zasilania odbiorników.`,
      image: aggregateGalleryImages[19] ?? aggregateHighlightImages[1],
    },
    {
      text: `Silnik ${getSpecification("Model silnika")} o mocy ${getSpecification("Moc silnika (kW)")} i układzie ${getSpecification("Ilość cylindrów")}-cylindrowym wspiera niezawodną pracę w wymagających warunkach.`,
      image: aggregateGalleryImages[14] ?? aggregateHighlightImages[2],
    },
  ];

  const allDescriptionHighlights = [...descriptionHighlights, ...extraFeatureHighlights];

  return (
    <div className="mt-16">
      {/* Tab navigation */}
      <div className="border-b border-gray-200 mb-10">
        <div className="flex gap-1 sm:gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold border-b-2 transition-colors duration-150 -mb-px ${activeTab === i
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Opis agregatu */}
      {activeTab === 0 && (
        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 shadow-sm">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                Model {model.power} kW / {model.kva} kVA
              </span>
              <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-800">Opis modelu {model.title}</h2>
              <p className="mt-4 text-gray-600 leading-8">{model.description}</p>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={overviewImage.src}
                fill
                alt={overviewImage.alt}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={82}
              />
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allDescriptionHighlights.map((highlight, index) => (
              <article key={index} className="overflow-hidden rounded-2xl shadow-sm">
                <figure className="relative aspect-[4/3]">
                  <Image
                    src={highlight.image.src}
                    fill
                    alt={highlight.image.alt}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    quality={76}
                  />
                </figure>
                <div className="p-5">
                  <p className="text-gray-700 font-medium leading-7">{highlight.text}</p>
                </div>
              </article>
            ))}
          </div>

          {descriptionSections.map((spec, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${spec.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={spec.image}
                    fill
                    alt={spec.imageAlt}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={80}
                  />
                </figure>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-5">{spec.heading}</h2>
                <ul className="space-y-3">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <CheckIcon />
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Parametry */}
      {activeTab === 1 && (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="text-left px-5 py-3 font-semibold">Parametr</th>
                <th className="text-left px-5 py-3 font-semibold">Wartość</th>
              </tr>
            </thead>
            <tbody>
              {model.specifications.map(([param, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <td className="px-5 py-3 text-gray-700 font-medium">{param}</td>
                  <td className="px-5 py-3 text-gray-600">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Galeria */}
      {activeTab === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aggregateGalleryImages.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={image.src}
                fill
                alt={image.alt}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={78}
              />
            </figure>
          ))}
        </div>
      )}

      {/* Tab 4: Wyposażenie */}
      {activeTab === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Wyposażenie podstawowe agregatu</h3>
            <ul className="space-y-3">
              {aggregateBaseEquipment.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-blue-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sterownik agregatu PLUS POWER 6120</h3>
            <ul className="space-y-3">
              {aggregateControllerFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
