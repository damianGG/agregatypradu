"use client";

import Link from "next/link";
import { AggregateModel } from "@/data/aggregate-models";
import aggregateModels from "@/data/aggregate-models";

interface ProductActionsProps {
  model: AggregateModel;
}

const priceFormatter = new Intl.NumberFormat("pl-PL");

export default function ProductActions({ model }: ProductActionsProps) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          {model.title} ({model.kva} kVA)
        </h1>
        <p className="text-3xl font-bold text-blue-600">
          {model.price ? `${priceFormatter.format(model.price)} zł` : "Zapytaj o wycenę"}
        </p>
      </div>

      <p className="text-gray-600 leading-relaxed">{model.description}</p>

      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Dostępne moce agregatów:</p>
        <div className="flex flex-wrap gap-3">
          {aggregateModels.map((aggregate) => {
            const isActive = aggregate.slug === model.slug;

            return (
              <Link href={`/agregaty/${aggregate.slug}`} key={aggregate.slug}>
                <span
                  className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 font-semibold text-sm transition-colors ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 text-gray-700 hover:border-blue-400"
                  }`}
                >
                  {aggregate.power} kW ({aggregate.kva} kVA)
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
        <p className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Najważniejsze informacje</p>
        <ul className="space-y-2 text-gray-600">
          <li>• Osobna podstrona przygotowana pod konkretną moc agregatu.</li>
          <li>• Szczegółowe parametry techniczne dla modelu {model.power} kW dodamy w kolejnym etapie.</li>
          <li>• Dobieramy agregat do zastosowań przemysłowych, awaryjnych i budowlanych.</li>
        </ul>
      </div>

      <div className="pt-2">
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition-colors duration-200 text-base mb-3"
        >
          Zapytaj o ten model
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
