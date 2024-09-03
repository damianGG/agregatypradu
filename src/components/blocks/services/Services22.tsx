import { Fragment } from "react";
// CUSTOM ICON COMPONENT
import Bulb from "@/icons/solid-mono/Bulb";
import Compare from "@/icons/solid-mono/Compare";
import DeliveryBox from "@/icons/solid-mono/DeliveryBox";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "@/components/reuseable/links/NextLink";

export default function Services22() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Dlaczego wybrać agregatypradu.pl?</h2>
          <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">
            Co nas  <span className="underline-3 style-2 blue">wyróżnia?</span>
          </h3>
        </div>
      </div>

      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
        <li className="nav-item" role="presentation">
          <a
            role="tab"
            href="#tab2-1"
            data-bs-toggle="tab"
            aria-selected="true"
            className="nav-link d-flex flex-row active">
            <div>
              <Bulb />
            </div>

            <div>
              <h4 className="mb-1">Niezawodność i Wysoka    <br /> Jakość</h4>
              <p>Wytrzymałe agregaty o wysokiej niezawodności w trudnych warunkach.</p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-2"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row">
            <div>
              <Compare />
            </div>

            <div>
              <h4 className="mb-1">Profesjonalne Doradztwo Techniczne</h4>
              <p>Eksperckie doradztwo i wsparcie techniczne na każdym etapie.</p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-3"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row">
            <div>
              <DeliveryBox className="icon-svg-sm solid-mono text-green me-4" />
            </div>

            <div>
              <h4 className="mb-1">Kompleksowa Obsługa Posprzedażowa</h4>
              <p>Kompleksowy serwis i szybka dostawa części zamiennych.</p>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8">
        <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded">
                <img src="/img/photos/3.png" alt="" />
              </figure>
            </div>

            <List1 title="Niezawodność i wysoka jakość" color="fuchsia" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <figure className="rounded shadow-lg">
                <img src="/img/photos/support.jpg" alt="" />
              </figure>
            </div>

            <List2 title="Profesionalne doradztwo techniczne" color="violet" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-3" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img src="/img/photos/content-serwis.webp" alt="" />
              </figure>
            </div>

            <List3 title="Kompleksowa Obługa Posprzedażowa" color="green" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

type ListProps = { color: "fuchsia" | "violet" | "green"; title: string };
const List1 = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Nasze agregaty prądotwórcze są zaprojektowane z myślą o najwyższej niezawodności i trwałości, co czyni je idealnym wyborem dla zastosowań wymagających nieprzerwanego zasilania, nawet w najtrudniejszych warunkach
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Testowane w ekstremalnych warunkach
        </li>
        <li>
          <i className="uil uil-check" /> Wysoka efektywność energetyczna
        </li>
        <li>
          <i className="uil uil-check" /> Długi okres eksploatacji bez awarii
        </li>
      </ul>


    </div>
  );
};
const List2 = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Nasze agregaty prądotwórcze są zaprojektowane z myślą o najwyższej niezawodności i trwałości, co czyni je idealnym wyborem dla zastosowań wymagających nieprzerwanego zasilania, nawet w najtrudniejszych warunkach
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Testowane w ekstremalnych warunkach
        </li>
        <li>
          <i className="uil uil-check" /> Wysoka efektywność energetyczna
        </li>
        <li>
          <i className="uil uil-check" /> Długi okres eksploatacji bez awarii
        </li>
      </ul>


    </div>
  );
};
const List3 = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Nasze agregaty prądotwórcze są zaprojektowane z myślą o najwyższej niezawodności i trwałości, co czyni je idealnym wyborem dla zastosowań wymagających nieprzerwanego zasilania, nawet w najtrudniejszych warunkach
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Testowane w ekstremalnych warunkach
        </li>
        <li>
          <i className="uil uil-check" /> Wysoka efektywność energetyczna
        </li>
        <li>
          <i className="uil uil-check" /> Długi okres eksploatacji bez awarii
        </li>
      </ul>


    </div>
  );
};
