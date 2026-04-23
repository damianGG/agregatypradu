"use client";

import { useState } from "react";
import Image from "next/image";
import { AggregateModel } from "@/data/aggregate-models";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const specs = [
  {
    heading: "Zastosowanie i wydajność",
    image: "/img/photos/1.png",
    imageAlt: "zastosowanie agregatu",
    imageRight: false,
    items: [
      "Agregaty PlusPower sprawdzają się jako zasilanie awaryjne oraz podstawowe.",
      "Dobieramy rozwiązanie do obiektów przemysłowych, magazynowych i budowlanych.",
      "Stabilna praca pozwala zabezpieczyć kluczowe procesy w firmie.",
      "Modele są przystosowane do wielogodzinnej eksploatacji w wymagających warunkach.",
    ],
  },
  {
    heading: "Silnik i podzespoły",
    image: "/img/photos/pluspower150kw_mainphoto-removebg-preview.png",
    imageAlt: "podzespoły agregatu",
    imageRight: true,
    items: [
      "Stawiamy na sprawdzone komponenty zapewniające wysoką niezawodność.",
      "Agregaty są projektowane z myślą o łatwym serwisie i wygodnej obsłudze.",
      "Każdy model może zostać dopasowany do potrzeb konkretnej inwestycji.",
      "Szczegółowa konfiguracja techniczna zostanie rozpisana dla każdej mocy osobno.",
    ],
  },
  {
    heading: "Obsługa i wsparcie",
    image: "/img/photos/IMG_6274.jpg",
    imageAlt: "wsparcie techniczne agregatu",
    imageRight: false,
    items: [
      "Pomagamy w doborze mocy, konfiguracji i przygotowaniu oferty.",
      "Zapewniamy transport, uruchomienie i opiekę serwisową.",
      "Możesz szybko zamówić wycenę lub skonsultować wymagania techniczne.",
      "Dla każdego modelu przygotujemy osobną kartę parametrów w kolejnym etapie prac.",
    ],
  },
];

const tabs = ["Opis agregatu", "Parametry", "Dostawa"];

interface ProductDescriptionProps {
  model: AggregateModel;
}

export default function ProductDescription({ model }: ProductDescriptionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tableRows = [
    ["Moc agregatu", `${model.power} kW`],
    ["Moc pozorna", `${model.kva} kVA`],
    ["Rodzaj zasilania", "Agregat prądotwórczy dużej mocy"],
    ["Napięcie robocze", "230/400 V"],
    ["Częstotliwość", "50 Hz"],
    ["Ilość faz", "3"],
    ["Zastosowanie", "Przemysł, budownictwo, zasilanie awaryjne"],
    ["Szczegółowe parametry", "W przygotowaniu dla tego modelu"],
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
          {specs.map((spec, idx) => (
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
              {tableRows.map(([param, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <td className="px-5 py-3 text-gray-700 font-medium">{param}</td>
                  <td className="px-5 py-3 text-gray-600">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Dostawa */}
      {activeTab === 2 && (
        <div className="max-w-3xl space-y-5">
          {[
            "Dokładamy wszelkich starań, aby proces dostawy naszych agregatów prądotwórczych był tak samo niezawodny, jak nasze produkty. Oferujemy darmową dostawę na terenie całego kraju, jak i do krajów europejskich, dbając o to, aby zamówione urządzenia dotarły do Ciebie w nienaruszonym stanie i w ustalonym terminie.",
            "Nasz zespół logistyczny, składający się z doświadczonych specjalistów, zapewnia profesjonalną obsługę na każdym etapie realizacji zamówienia. Od momentu złożenia zamówienia, aż do dostarczenia agregatu na wskazane miejsce, możesz liczyć na pełne wsparcie oraz bieżące informacje o statusie przesyłki.",
            "Jesteśmy dumni z naszej niezawodności i terminowości dostaw, co jest kluczowe w branży, w której działamy. Dzięki rozbudowanej sieci transportowej i współpracy z najlepszymi przewoźnikami, jesteśmy w stanie realizować dostawy nawet w najbardziej wymagających lokalizacjach. Każdy agregat jest starannie zabezpieczony na czas transportu, abyś mógł mieć pewność, że otrzymasz produkt gotowy do natychmiastowego użytkowania.",
            "Niezależnie od tego, gdzie znajduje się Twoja firma, dostarczymy agregat w sposób szybki, bezpieczny i całkowicie darmowy. Twoje zadowolenie jest naszym priorytetem, dlatego dokładamy wszelkich starań, aby każda dostawa była realizowana z najwyższą starannością i zgodnie z ustalonym harmonogramem.",
            `Jeżeli interesuje Cię model ${model.power} kW (${model.kva} kVA), przygotujemy także indywidualną ofertę wraz z pełną specyfikacją techniczną.`,
          ].map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
