import { Fragment } from "react";
import clsx from "clsx";
// CUSTOM DATA
import data from "@/data/product-details-page";
import Image from "next/image";

export default function ProductDescription() {
  return (
    <Fragment>
      <ul className="nav nav-tabs nav-tabs-basic mt-12">
        {data.tabList.map(({ id, title }: { id: string, title: string }, i) => (
          <li className="nav-item" key={id}>
            <a data-bs-toggle="tab" href={id} className={clsx({ "nav-link": true, active: i === 0 })}>
              {title}
            </a>
          </li>
        ))}
      </ul>

      {/* tab content */}
      <div className="tab-content mt-0 mt-md-5">
        <div className="tab-pane fade show active" id="tab-1">
          <section className="wrapper bg-light angled upper-end">
            <div className="container mb-15 mt-15">

              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                <div className="col-lg-6 position-relative order-lg">
                  <div className="overlap-grid overlap-grid-2">
                    <div>
                      <figure className="rounded shadow">
                        <Image src="/img/photos/1.png" width={600} height={1000} alt="parametry elektryczne" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h2 className="display-6 mb-3">Parametry Elektryczne</h2>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" /> Moc maksymalna: 188 kVA (150 kW)</li>
                    <li className="mt-3"><i className="uil uil-check" /> Moc znamionowa: 170 kVA (135 kW)</li>
                    <li className="mt-3"><i className="uil uil-check" /> Napięcie: 230/400V</li>
                    <li className="mt-3"><i className="uil uil-check" /> Prąd znamionowy: 244 A</li>
                    <li className="mt-3"><i className="uil uil-check" /> Częstotliwość: 50 Hz</li>
                    <li className="mt-3"><i className="uil uil-check" /> Ilość faz: 3</li>
                  </ul>
                </div>
              </div>
              {/* ###########################  WYMIARY I WAGA ###########################   */}
              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                <div className="col-lg-6">
                  <h2 className="display-6 mb-3">Wymiary i Waga</h2>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" /> Długość: 3105 mm</li>
                    <li className="mt-3"><i className="uil uil-check" /> Szerokość: 1145 mm</li>
                    <li className="mt-3"><i className="uil uil-check" /> Wysokość: 1455 mm</li>
                    <li className="mt-3"><i className="uil uil-check" /> Waga: 1980 kg</li>
                  </ul>
                </div>

                <div className="col-lg-6 position-relative">
                  <div className="overlap-grid overlap-grid-2">
                    <div>
                      <figure className="rounded shadow">
                        <Image src="/img/photos/pluspower150kw_mainphoto-removebg-preview.png" width={600} height={1000} alt="wymiary agregatu" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              {/* ###########################  DANE SILNIKA ###########################   */}
              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                <div className="col-lg-6 position-relative order-lg-">
                  <div className="overlap-grid overlap-grid-2">
                    <div>
                      <figure className="rounded shadow">
                        <Image src="/img/photos/IMG_6274.jpg" width={600} height={1000} alt="dane silnika" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h2 className="display-6 mb-3">Dane Silnika</h2>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" /> Model: NM6108ZLDS</li>
                    <li className="mt-3"><i className="uil uil-check" /> Typ: Wysokoprężny, wolnossący</li>
                    <li className="mt-3"><i className="uil uil-check" /> Pojemność skokowa: 7,42 l</li>
                    <li className="mt-3"><i className="uil uil-check" /> Ilość cylindrów: 6</li>
                    <li className="mt-3"><i className="uil uil-check" /> Moc silnika: 167 kW</li>
                    <li className="mt-3"><i className="uil uil-check" /> Rodzaj rozruchu: Elektryczny</li>
                  </ul>
                </div>
              </div>
              {/* ###########################  PARAMETRY EKSPLOATACYJNE ###########################   */}
              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                <div className="col-lg-6">
                  <h2 className="display-6 mb-3">Parametry Eksploatacyjne</h2>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" /> Zużycie paliwa (50% obciążenia): 22 l/h</li>
                    <li className="mt-3"><i className="uil uil-check" /> Zużycie paliwa (75% obciążenia): 31 l/h</li>
                    <li className="mt-3"><i className="uil uil-check" /> Zużycie paliwa (100% obciążenia): 41 l/h</li>
                    <li className="mt-3"><i className="uil uil-check" /> Poziom hałasu: 108 dB(A)</li>
                  </ul>
                </div>

                <div className="col-lg-6 position-relative">
                  <div className="overlap-grid overlap-grid-2">
                    <div>
                      <figure className="rounded shadow">
                        <Image src="/img/photos/6.png" width={600} height={1000} alt="parametry eksploatacyjne" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              {/* ###########################  DANE PRĄDNICY ###########################   */}
              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                <div className="col-lg-6 position-relative ">
                  <div className="overlap-grid overlap-grid-2">
                    <div>
                      <figure className="rounded shadow">
                        <Image src="/img/photos/pradnica.webp" width={600} height={1000} alt="dane prądnicy" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h2 className="display-6 mb-3">Dane Prądnicy</h2>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" /> Model prądnicy: BRUSHLESS Stamford UC274G</li>
                    <li className="mt-3"><i className="uil uil-check" /> Regulacja napięcia: Automatyczna (AVR)</li>
                    <li className="mt-3"><i className="uil uil-check" /> Klasa izolacji: H</li>
                    <li className="mt-3"><i className="uil uil-check" /> Stopień ochrony: IP23</li>
                  </ul>
                </div>
              </div>
              {/* ###########################  SYSTEM STEROWANIA ###########################   */}
              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                <div className="col-lg-6">
                  <h2 className="display-6 mb-3">System Sterowania</h2>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" /> Sterownik mikroprocesorowy: Plus Power RF6120U</li>
                    <li className="mt-3"><i className="uil uil-check" /> Funkcje: AUTO / MANUAL / TEST / STOP</li>
                    <li className="mt-3"><i className="uil uil-check" /> Kontrola napięcia 3-fazowego: Tak</li>
                    <li className="mt-3"><i className="uil uil-check" /> Współpraca z SZR: RTSE i ATSE</li>
                  </ul>
                </div>

                <div className="col-lg-6 position-relative">
                  <div className="overlap-grid overlap-grid-2">
                    <div>
                      <figure className="rounded shadow">
                        <Image src="/img/photos/1.png" width={600} height={1000} alt="system sterowania" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>

        <div className="tab-pane fade" id="tab-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Parametr</th>
                <th scope="col">Moc agregatu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moc maksymalna (kVA)</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Moc maksymalna (kW)</td>
                <td>120</td>
              </tr>
              <tr>
                <td>Moc znamionowa (kVA)</td>
                <td>135</td>
              </tr>
              <tr>
                <td>Moc znamionowa (kW)</td>
                <td>108</td>
              </tr>
              <tr>
                <td>Napięcie (V)</td>
                <td>230/400V</td>
              </tr>
              <tr>
                <td>Współczynnik mocy</td>
                <td>0,8</td>
              </tr>
              <tr>
                <td>Prąd znamionowy (A)</td>
                <td>195 A</td>
              </tr>
              <tr>
                <td>Częstotliwość (Hz)</td>
                <td>50 Hz</td>
              </tr>
              <tr>
                <td>Ilość faz</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Długość (mm)</td>
                <td>2905 mm</td>
              </tr>
              <tr>
                <td>Szerokość (mm)</td>
                <td>1107 mm</td>
              </tr>
              <tr>
                <td>Wysokość (mm)</td>
                <td>1455 mm</td>
              </tr>
              <tr>
                <td>Waga bez paliwa (kg)</td>
                <td>1690 kg</td>
              </tr>
              <tr>
                <td>Model silnika</td>
                <td>NM6105BZLD</td>
              </tr>
              <tr>
                <td>Rodzaj silnika</td>
                <td>Wysokoprężny</td>
              </tr>
              <tr>
                <td>Typ silnika</td>
                <td>Wolnossący</td>
              </tr>
              <tr>
                <td>Rodzaj paliwa</td>
                <td>Olej napędowy (ON)</td>
              </tr>
              <tr>
                <td>Pojemność skokowa (l)</td>
                <td>6,75 l</td>
              </tr>
              <tr>
                <td>Ilość cylindrów</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Moc silnika (kW)</td>
                <td>132 kW</td>
              </tr>
              <tr>
                <td>Prędkość obrotowa (obr/min)</td>
                <td>1500 obr/min</td>
              </tr>
              <tr>
                <td>Ilość czynnika chłodzącego</td>
                <td>25 l</td>
              </tr>
              <tr>
                <td>Ilość oleju w układzie smarowania</td>
                <td>16 l</td>
              </tr>
              <tr>
                <td>Rodzaj rozruchu</td>
                <td>Elektryczny</td>
              </tr>
              <tr>
                <td>Zużycie paliwa (50% obciążenia) (l/h)</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Zużycie paliwa (75% obciążenia) (l/h)</td>
                <td>23</td>
              </tr>
              <tr>
                <td>Zużycie paliwa (100% obciążenia) (l/h)</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Gwarantowany poziom hałasu (dB)</td>
                <td>108 dBa</td>
              </tr>
              <tr>
                <td>Model prądnicy</td>
                <td>BRUSHLESS (brand Stamford), UC274F</td>
              </tr>
              <tr>
                <td>Rodzaj prądnicy</td>
                <td>Synchroniczna 3F</td>
              </tr>
              <tr>
                <td>Regulacja prądnicy</td>
                <td>Automatyczna regulacja AVR</td>
              </tr>
              <tr>
                <td>Klasa izolacji</td>
                <td>Klasa H</td>
              </tr>
              <tr>
                <td>Stopień ochrony prądnicy</td>
                <td>IP 23</td>
              </tr>
            </tbody>
          </table>

        </div>


        <div className="tab-pane fade" id="tab-3">
          <p>
            Dokładamy wszelkich starań, aby proces dostawy naszych agregatów prądotwórczych był tak samo niezawodny, jak nasze produkty. Oferujemy darmową dostawę na terenie całego kraju, jak i do krajów europejskich, dbając o to, aby zamówione urządzenia dotarły do Ciebie w nienaruszonym stanie i w ustalonym terminie.
          </p>
          <p>
            Nasz zespół logistyczny, składający się z doświadczonych specjalistów, zapewnia profesjonalną obsługę na każdym etapie realizacji zamówienia. Od momentu złożenia zamówienia, aż do dostarczenia agregatu na wskazane miejsce, możesz liczyć na pełne wsparcie oraz bieżące informacje o statusie przesyłki.
          </p>
          <p>
            Jesteśmy dumni z naszej niezawodności i terminowości dostaw, co jest kluczowe w branży, w której działamy. Dzięki rozbudowanej sieci transportowej i współpracy z najlepszymi przewoźnikami, jesteśmy w stanie realizować dostawy nawet w najbardziej wymagających lokalizacjach. Każdy agregat jest starannie zabezpieczony na czas transportu, abyś mógł mieć pewność, że otrzymasz produkt gotowy do natychmiastowego użytkowania.
          </p>
          <p>
            Niezależnie od tego, gdzie znajduje się Twoja firma, dostarczymy agregat w sposób szybki, bezpieczny i całkowicie darmowy. Twoje zadowolenie jest naszym priorytetem, dlatego dokładamy wszelkich starań, aby każda dostawa była realizowana z najwyższą starannością i zgodnie z ustalonym harmonogramem.
          </p>
        </div>
      </div>
    </Fragment >
  );
}
