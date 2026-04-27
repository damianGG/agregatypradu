"use client";

import { useState } from "react";
import Image from "next/image";
import { AggregateModel, aggregateBaseEquipment, aggregateControllerFeatures } from "@/data/aggregate-models";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const tabs = ["Opis agregatu", "Parametry", "Wyposażenie"];

interface ProductDescriptionProps {
  model: AggregateModel;
}

export default function ProductDescription({ model }: ProductDescriptionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const normalizeSpecificationLabel = (label: string) => label.replace(/\s+/g, " ").replace(/\s*\(/g, "(").trim();
  const getSpecification = (label: string) =>
    model.specifications.find(
      ([specificationLabel]) => normalizeSpecificationLabel(specificationLabel) === normalizeSpecificationLabel(label)
    )?.[1] ?? "—";

  const descriptionSections = [
    {
      heading: "Zastosowanie modelu",
      image: "/img/photos/1.png",
      imageAlt: `zastosowanie agregatu ${model.power} kW`,
      imageRight: false,
      items: model.applications,
    },
    {
      heading: "Parametry elektryczne",
      image: "/img/photos/pluspower150kw_mainphoto-removebg-preview.png",
      imageAlt: `parametry elektryczne agregatu ${model.power} kW`,
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
      image: "/img/photos/IMG_6274.jpg",
      imageAlt: `silnik agregatu ${model.power} kW`,
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
      image: "/img/photos/pradnica.webp",
      imageAlt: `prądnica agregatu ${model.power} kW`,
      imageRight: true,
      items: [
        `Zbiornik paliwa ma pojemność ${getSpecification("Pojemność zbiornika (l)")}.`,
        `Zużycie paliwa wynosi ${getSpecification("Zużycie paliwa (50% obciążenia) (l/h)")} przy 50% obciążenia, ${getSpecification("Zużycie paliwa (75% obciążenia) (l/h)")} przy 75% obciążenia i ${getSpecification("Zużycie paliwa (100% obciążenia) (l/h)")} przy 100% obciążenia.`,
        `Zabudowa ma wymiary ${getSpecification("Długość (mm)")} x ${getSpecification("Szerokość (mm)")} x ${getSpecification("Wysokość (mm)")}, a masa bez paliwa wynosi ${getSpecification("Waga bez paliwa (kg)")}.`,
        `Prądnica ${getSpecification("Model prądnicy")} pracuje w technologii ${getSpecification("Technologia")} z regulatorem ${getSpecification("Regulator napięcia")} i izolacją klasy ${getSpecification("Klasa izolacji")}.`,
        `Poziom hałasu to ${getSpecification("Gwarantowany poziom hałasu (dBA)")}, ciśnienie akustyczne z 7 metrów ${getSpecification("Ciśnienie akustyczne z 7 metrów (dBA)")}, a stopień ochrony prądnicy wynosi ${getSpecification("Stopień ochrony prądnicy")}.`,
      ],
    },
  ];

  return (
    <div className="mt-16">
      {/* Tab navigation */}
      <div className="border-b border-gray-200 mb-10">
        <div className="flex gap-1 sm:gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold border-b-2 transition-colors duration-150 -mb-px ${
                activeTab === i
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
          {descriptionSections.map((spec, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${spec.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <figure className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={spec.image}
                    width={600}
                    height={420}
                    alt={spec.imageAlt}
                    className="w-full h-64 sm:h-72 object-contain bg-gray-50"
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

      {/* Tab 3: Wyposażenie */}
      {activeTab === 2 && (
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
