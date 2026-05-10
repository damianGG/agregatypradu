import Image from "next/image";

const trainingAccordionItems = [
  {
    id: "One",
    title: "Szkolenia i warsztaty",
    description: "kompetencje miękkie, wellbeing, zarządzanie, komunikacja, prawo nowych technologii, wdrażanie AI"
  },
  {
    id: "Two",
    title: "Programy rozwojowe",
    description: "dla pracowników, menedżerów i kadry zarządzającej"
  },
  {
    id: "Three",
    title: "Pojedyncze szkolenia",
    description: "lub akademie liderów"
  },
  {
    id: "Four",
    title: "Diagnoza potrzeb",
    description: "projekt, realizacja i ewaluacja"
  },
  {
    id: "Five",
    title: "Elastyczna forma przekazu",
    description: "stacjonarne lub online"
  }
];

export default function TrainingPage() {
  return (
    <>
      <section
        className="wrapper"
        style={{
          position: "relative",
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <div className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3" style={{ color: "#f48118" }}>
                Szkolenia
              </h1>
              <p className="lead px-xxl-10"></p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-15 mt-15">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 align-items-center">
          <div className="col-lg-6 position-relative order-lg-1">
            <div className="overlap-grid overlap-grid-2">
              <div>
                <figure className="rounded shadow">
                  <Image src="/img/photos/photo-1.jpg" width={600} height={1000} alt="Szkolenia" />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="display-6 mb-3">Skills in action</p>

            <p className="lead fs-lg mb-0">
              Dobre szkolenie to nie tylko wiedza, to zmiana sposobu myślenia i podejmowania decyzji. Takie zmiany
              biorą się z głębokiego zrozumienia zachowań ludzi i organizacji. Właśnie w tym jesteśmy ekspertami.
              <br />
              Nie pracujemy na zamkniętym katalogu szkoleń. Projektujemy rozwiązania szyte na miarę za każdym razem.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-6 mb-6 text-center">Co możemy dla Ciebie zrobić?</h2>

            <div className="accordion-wrapper" id="training-accordion">
              {trainingAccordionItems.map(({ id, title, description }, index) => {
                const collapseId = `training-collapse-${id}`;
                const headingId = `training-heading-${id}`;
                const expanded = index === 0;

                return (
                  <div className="card accordion-item" key={id}>
                    <div className="card-header" id={headingId}>
                      <button
                        aria-controls={collapseId}
                        aria-expanded={expanded}
                        className={expanded ? "" : "collapsed"}
                        data-bs-target={`#${collapseId}`}
                        data-bs-toggle="collapse"
                        type="button">
                        {title}
                      </button>
                    </div>

                    <div
                      aria-labelledby={headingId}
                      className={`accordion-collapse collapse${expanded ? " show" : ""}`}
                      data-bs-parent="#training-accordion"
                      id={collapseId}>
                      <div className="card-body">
                        <p className="mb-0">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
