"use client";

import { FormEvent, useState } from "react";
// CUSTOM DATA
import data from "@/data/product-details-page";
import Link from "next/link";

export default function ProductActions120() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(data.sizeList[0].value);
  const [color, setColor] = useState(data.productColors[0].value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(quantity, color, size);
  };

  return (
    <div className="col-lg-6">
      <div className="post-header mb-5">
        <h2 className="post-title display-5">
          <a href="#" className="link-dark">
            Agregat Plus Power 120 kW
          </a>
        </h2>

        <p className="price fs-20 mb-2">
          <span className="amount">75 000 zł</span>
        </p>

        {/* <a href="#" className="link-body ratings-wrapper">
          <span className="ratings five" />
          <span>(25 Ocen)</span>
        </a> */}
      </div>

      <p className="mb-6">
        Agregat Plus Power 120 kW to niezawodne źródło energii, idealne dla wymagających warunków. Jego kompaktowy design i wysoka wydajność sprawiają, że doskonale sprawdza się w zastosowaniach przemysłowych i budowlanych. Wytrzymałość i prostota obsługi gwarantują długotrwałe użytkowanie bez awarii.
      </p>

      <form >
        <fieldset className="picker">
          <legend className="h6 fs-16 text-body mb-3">Dostępne moce agregatów:</legend>

          <Link href="/agregaty/agregat-pluspower-150-kw">
            <label htmlFor={`size-120`} key="120" style={{ inlineSize: "4rem", blockSize: "3rem" }}>
              <input
                type="radio"
                name="sizes"
                value="150kW"
                id={`size-150`}
                checked={false}
              />
              <span>150 kW</span>
            </label>
          </Link>
          <Link href="/agregaty/agregat-pluspower-120-kw">
            <label htmlFor={`size-120`} key="120" style={{ inlineSize: "4rem", blockSize: "3rem" }}>
              <input
                type="radio"
                name="sizes"
                value="120kW"
                id={`size-120`}
                checked={true}
              />
              <span>120 kW</span>
            </label>
          </Link>
        </fieldset>
        <fieldset className="picker">
          <legend className="h6 fs-16 text-body mb-3">Dostępne moce agregatów pod zamówienie:</legend>
          <label htmlFor={`size-120`} key="120" style={{ inlineSize: "4rem", blockSize: "2rem" }}>
            <input
              type="radio"
              name="sizes"
              value="150kW"
              id={`size-150`}
              checked={false}
            />
            <span>80 kW</span>
          </label>
          <label htmlFor={`size-120`} key="120" style={{ inlineSize: "4rem", blockSize: "2rem" }}>
            <input
              type="radio"
              name="sizes"
              value="120kW"
              id={`size-120`}
              checked={false}
            />
            <span>100 kW</span>
          </label>
          <label htmlFor={`size-120`} key="120" style={{ inlineSize: "4rem", blockSize: "2rem" }}>
            <input
              type="radio"
              name="sizes"
              value="150kW"
              id={`size-150`}
              checked={false}
            />
            <span>200 kW</span>
          </label>

        </fieldset>
        <div className="row">
          <div className="col-lg-9 d-flex flex-row pt-2">


            <div className="flex-grow-1 ">
              <button type="submit" className="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1">
                Zamów
              </button>
            </div>
          </div>
          <h3 className="mt-3">lub zadzwoń +48 606 392 657</h3>
        </div>
      </form>
    </div>
  );
}
