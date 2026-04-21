"use client";

import { useState } from "react";
import Image from "next/image";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const specs = [
  {
    heading: "Parametry Elektryczne",
    image: "/img/photos/1.png",
    imageAlt: "parametry elektryczne",
    imageRight: false,
    items: [
      "Moc maksymalna: 188 kVA (150 kW)",
      "Moc znamionowa: 170 kVA (135 kW)",
      "Napięcie: 230/400V",
      "Prąd znamionowy: 244 A",
      "Częstotliwość: 50 Hz",
      "Ilość faz: 3",
    ],
  },
  {
    heading: "Wymiary i Waga",
    image: "/img/photos/pluspower150kw_mainphoto-removebg-preview.png",
    imageAlt: "wymiary agregatu",
    imageRight: true,
    items: [
      "Długość: 3105 mm",
      "Szerokość: 1145 mm",
      "Wysokość: 1455 mm",
      "Waga: 1980 kg",
    ],
  },
  {
    heading: "Dane Silnika",
    image: "/img/photos/IMG_6274.jpg",
    imageAlt: "dane silnika",
    imageRight: false,
    items: [
      "Model: NM6108ZLDS",
      "Typ: Wysokoprężny, wolnossący",
      "Pojemność skokowa: 7,42 l",
      "Ilość cylindrów: 6",
      "Moc silnika: 167 kW",
      "Rodzaj rozruchu: Elektryczny",
    ],
  },
  {
    heading: "Parametry Eksploatacyjne",
    image: "/img/photos/6.png",
    imageAlt: "parametry eksploatacyjne",
    imageRight: true,
    items: [
      "Zużycie paliwa (50% obciążenia): 22 l/h",
      "Zużycie paliwa (75% obciążenia): 31 l/h",
      "Zużycie paliwa (100% obciążenia): 41 l/h",
      "Poziom hałasu: 108 dB(A)",
    ],
  },
  {
    heading: "Dane Prądnicy",
    image: "/img/photos/pradnica.webp",
    imageAlt: "dane prądnicy",
    imageRight: false,
    items: [
      "Model prądnicy: BRUSHLESS Stamford UC274G",
      "Regulacja napięcia: Automatyczna (AVR)",
      "Klasa izolacji: H",
      "Stopień ochrony: IP23",
    ],
  },
  {
    heading: "System Sterowania",
    image: "/img/photos/1.png",
    imageAlt: "system sterowania",
    imageRight: true,
    items: [
      "Sterownik mikroprocesorowy: Plus Power RF6120U",
      "Funkcje: AUTO / MANUAL / TEST / STOP",
      "Kontrola napięcia 3-fazowego: Tak",
      "Współpraca z SZR: RTSE i ATSE",
    ],
  },
];

const tableRows = [
  ["Moc maksymalna (kVA)", "150"],
  ["Moc maksymalna (kW)", "120"],
  ["Moc znamionowa (kVA)", "135"],
  ["Moc znamionowa (kW)", "108"],
  ["Napięcie (V)", "230/400V"],
  ["Współczynnik mocy", "0,8"],
  ["Prąd znamionowy (A)", "195 A"],
  ["Częstotliwość (Hz)", "50 Hz"],
  ["Ilość faz", "3"],
  ["Długość (mm)", "2905 mm"],
  ["Szerokość (mm)", "1107 mm"],
  ["Wysokość (mm)", "1455 mm"],
  ["Waga bez paliwa (kg)", "1690 kg"],
  ["Model silnika", "NM6105BZLD"],
  ["Rodzaj silnika", "Wysokoprężny"],
  ["Typ silnika", "Wolnossący"],
  ["Rodzaj paliwa", "Olej napędowy (ON)"],
  ["Pojemność skokowa (l)", "6,75 l"],
  ["Ilość cylindrów", "6"],
  ["Moc silnika (kW)", "132 kW"],
  ["Prędkość obrotowa (obr/min)", "1500 obr/min"],
  ["Ilość czynnika chłodzącego", "25 l"],
  ["Ilość oleju w układzie smarowania", "16 l"],
  ["Rodzaj rozruchu", "Elektryczny"],
  ["Zużycie paliwa (50% obciążenia) (l/h)", "16"],
  ["Zużycie paliwa (75% obciążenia) (l/h)", "23"],
  ["Zużycie paliwa (100% obciążenia) (l/h)", "30"],
  ["Gwarantowany poziom hałasu (dB)", "108 dBa"],
  ["Model prądnicy", "BRUSHLESS (brand Stamford), UC274F"],
  ["Rodzaj prądnicy", "Synchroniczna 3F"],
  ["Regulacja prądnicy", "Automatyczna regulacja AVR"],
  ["Klasa izolacji", "Klasa H"],
  ["Stopień ochrony prądnicy", "IP 23"],
];

const tabs = ["Opis agregatu", "Parametry", "Dostawa"];

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState(0);

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
                    className="w-full h-64 sm:h-72 object-cover"
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
