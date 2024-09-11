import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white "
                style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}>
                <div className="container pt-10 pb-10 pt-md-10 pb-md-10 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-1 mb-3 text-white">O nas</h1>

                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light angled upper-end">

                <div className="container mb-15 mt-15  ">
                    <div className="mt-4 mb-15">
                        <p className="mb-3 fw-bold lead fs-lg">
                            Jako dystrybutor agregatów prądotwórczych dużej mocy, oferujemy rozwiązania energetyczne, które sprostają nawet najbardziej wymagającym potrzebom. Dzięki wieloletniemu doświadczeniu i współpracy z uznanymi producentami, dostarczamy niezawodne agregaty, które sprawdzają się w różnych sytuacjach – od placów budowy, przez operacje przemysłowe, po zasilanie awaryjne dla kluczowych instalacji.                        </p>
                        <p className="mb-3 fw-bold lead fs-lg">
                            Nie jesteśmy tylko dystrybutorem – jesteśmy partnerem, który wspiera swoich klientów na każdym etapie. Od wyboru sprzętu, przez dostawę i instalację, aż po serwis i konserwację – zależy nam na tym, żeby nasi klienci zawsze mieli pewność, że dokonali właściwego wyboru. Nasze usługi opierają się na indywidualnym podejściu i zaangażowaniu. Zaufanie, którym obdarzają nas klienci, to dla nas najlepsze potwierdzenie, że robimy dobrą robotę.                        </p>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        <div className="col-lg-6 position-relative order-lg-1">
                            <div className="overlap-grid overlap-grid-2">
                                <div>
                                    <figure className="rounded shadow">
                                        <Image
                                            src="/img/photos/serwis.jpg"
                                            width={600}
                                            height={1000}
                                            alt="hero"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <p className="display-6 mb-3">Nasze usługi obejmują:</p>

                            <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li>
                                            <i className="uil uil-check" />
                                            Dystrybucję agregatów prądotwórczych o mocy od 80 kW do ponad 150 kW, spełniających najwyższe standardy jakości i niezawodności.
                                        </li>
                                        <li className="mt-3">
                                            <i className="uil uil-check" />
                                            Profesjonalny montaż i konfigurację sprzętu, dostosowaną do specyficznych potrzeb klienta, co zapewnia optymalne działanie w każdych warunkach.
                                        </li>
                                        <li className="mt-3">
                                            <i className="uil uil-check" />
                                            Szybki i bezpieczny transport agregatów na terenie całego kraju, z zachowaniem najwyższych standardów logistycznych, aby Twoje urządzenie dotarło na miejsce bezpiecznie i na czas.
                                        </li>
                                        <li className="mt-3">
                                            <i className="uil uil-check" />
                                            Pełne doradztwo techniczne i pomoc w wyborze odpowiednich rozwiązań energetycznych, które najlepiej odpowiadają Twoim potrzebom i zapewniają maksymalną efektywność.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mb-15">
                        <p className="mb-3 fw-bold lead fs-lg">
                            Współpraca z naszą firmą to gwarancja niezawodności i najwyższej jakości obsługi. Zdajemy sobie sprawę, jak kluczowe jest posiadanie niezawodnego źródła zasilania, szczególnie w krytycznych momentach. Dlatego nasi klienci mogą liczyć na szybkie wsparcie techniczne oraz dostęp do oryginalnych części zamiennych, co minimalizuje ryzyko przestoju i zapewnia ciągłość działania. Nasze doświadczenie i zaangażowanie sprawiają, że jesteśmy w stanie sprostać nawet najbardziej wymagającym wyzwaniom.
                        </p>
                        <p className="mb-3 fw-bold lead fs-lg">
                            Naszym celem jest nie tylko dostarczenie produktu, ale również budowanie długoterminowych relacji z naszymi klientami, opartych na zaufaniu i profesjonalizmie. Dlatego zawsze jesteśmy otwarci na sugestie i potrzeby naszych klientów, co pozwala nam nieustannie doskonalić nasze usługi i dostosowywać je do zmieniających się warunków rynkowych. Zaufaj nam — jesteśmy liderem w dostarczaniu agregatów prądotwórczych dużej mocy i kompleksowych usług energetycznych.
                        </p>
                        <p className="mb-3 fw-bold lead fs-lg">
                            Zapraszamy do współpracy i dołączenia do grona naszych zadowolonych klientów!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};