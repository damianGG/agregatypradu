"use client";

import { FormEvent, useState } from "react";
// CUSTOM DATA
import data from "@/data/product-details-page";

export default function ProductActions() {
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

        <a href="#" className="link-body ratings-wrapper">
          <span className="ratings five" />
          <span>(25 Ocen)</span>
        </a>
      </div>

      <p className="mb-6">
        Agregat Plus Power 120 kW to niezawodne źródło energii, idealne dla wymagających warunków. Jego kompaktowy design i wysoka wydajność sprawiają, że doskonale sprawdza się w zastosowaniach przemysłowych i budowlanych. Wytrzymałość i prostota obsługi gwarantują długotrwałe użytkowanie bez awarii.
      </p>

      <form onSubmit={handleFormSubmit}>
        <fieldset className="picker">
          <legend className="h6 fs-16 text-body mb-3">Wybierz moc</legend>

          {data.sizeList.map(({ value, title }) => (
            <label htmlFor={`size-${value}`} key={title} style={{ inlineSize: "4rem", blockSize: "3rem" }}>
              <input
                type="radio"
                name="sizes"
                value={value}
                id={`size-${value}`}
                checked={value === size}
                onChange={(e) => setSize(e.target.value)}

              />
              <span>{title}</span>
            </label>
          ))}
        </fieldset>

        {/* <fieldset className="picker">
          <legend className="h6 fs-16 text-body mb-3">Choose a color</legend>

          {data.productColors.map(({ id, value }) => (
            <label htmlFor={id} key={id}>
              <input
                id={id}
                type="radio"
                name="colors"
                value={value}
                checked={value === color}
                onChange={(e) => setColor(e.target.value)}
              />
              <span style={{ color: value }}>Yellow</span>
            </label>
          ))}
        </fieldset> */}

        <div className="row">
          <div className="col-lg-9 d-flex flex-row pt-2">


            <div className="flex-grow-1 ">
              <button type="submit" className="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1">
                Zamów
              </button>
            </div>
          </div>
          <h3 className="mt-3">lub zadzwoń XXXXXXXXX</h3>
        </div>
      </form>
    </div>
  );
}
