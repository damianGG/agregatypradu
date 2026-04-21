"use client";

import Link from "next/link";

export default function ProductActions120() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          Agregat Plus Power 120 kW
        </h1>
        <p className="text-3xl font-bold text-blue-600">75 000 zł</p>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Agregat Plus Power 120 kW to niezawodne źródło energii, idealne dla wymagających warunków. Jego
        kompaktowy design i wysoka wydajność sprawiają, że doskonale sprawdza się w zastosowaniach
        przemysłowych i budowlanych. Wytrzymałość i prostota obsługi gwarantują długotrwałe użytkowanie bez awarii.
      </p>

      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Dostępne moce agregatów:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/agregaty/agregat-pluspower-150-kw">
            <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold text-sm hover:border-blue-400 transition-colors">
              150 kW
            </span>
          </Link>
          <Link href="/agregaty/agregat-pluspower-120-kw">
            <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold text-sm">
              120 kW
            </span>
          </Link>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Dostępne moce pod zamówienie:</p>
        <div className="flex flex-wrap gap-3">
          {["80 kW", "100 kW", "200 kW"].map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 font-semibold text-sm"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition-colors duration-200 text-base mb-3"
        >
          Zamów
        </button>
        <p className="text-center text-gray-600">
          lub zadzwoń{" "}
          <a href="tel:+48606392657" className="text-blue-600 font-bold hover:underline">
            +48 606 392 657
          </a>
        </p>
      </div>
    </div>
  );
}
