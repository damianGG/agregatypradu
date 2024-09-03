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
                            <h1 className="display-1 mb-3 text-white">Oferta</h1>

                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15">
                <div className="mt-4 mb-15">

                    <p className="mb-3 fw-bold lead fs-lg">
                        Jako wiodący dystrybutor agregatów prądotwórczych dużej mocy, oferujemy kompleksowe usługi, które gwarantują nieprzerwaną pracę Twojej infrastruktury. Nasza oferta obejmuje sprzedaż, doradztwo techniczne, serwis, a także transport i montaż. Dzięki naszym agregatom zapewniasz sobie i swojej firmie niezawodne źródło energii w każdej sytuacji.
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/sprzedaz.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">



                        <p className="lead fs-lg">
                            Sprzedaż i doradztwo techniczne:
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> Oferujemy szeroki wybór agregatów prądotwórczych o mocy od 80 kW do ponad 150 kW, które spełniają najwyższe standardy jakości i niezawodności. Każdy agregat jest dostosowany do specyficznych potrzeb Twojej firmy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nasz zespół doradców technicznych służy pomocą w doborze odpowiedniego sprzętu, uwzględniając wymagania energetyczne oraz warunki, w jakich agregat będzie pracował.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przeprowadzamy pełną analizę energetyczną, aby zapewnić, że wybrane przez Ciebie rozwiązania będą efektywne i ekonomiczne.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/serwis2.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">

                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Serwis i opieka techniczna:
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> Zapewniamy kompleksowy serwis oraz konserwację agregatów prądotwórczych, aby zapewnić ich długowieczność i niezawodne działanie. Nasi technicy są dostępni, aby szybko reagować na wszelkie problemy.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> W przypadku awarii, oferujemy usługę wymiany agregatu – dostarczamy nasz agregat zastępczy, aby zapewnić ciągłość pracy Twojej firmy, podczas gdy Twój sprzęt jest naprawiany.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> Nasze usługi serwisowe są dostępne 24/7, aby zagwarantować, że Twoja firma nigdy nie pozostanie bez zasilania.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="">
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/transport.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">

                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Transport i montaż:
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Oferujemy bezpieczny i terminowy transport agregatów na terenie całego kraju. Nasze usługi transportowe są dostosowane do specyfiki sprzętu, aby zapewnić jego bezpieczne dotarcie na miejsce.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nasz zespół specjalistów zajmuje się również montażem agregatów na miejscu u klienta, zapewniając ich prawidłowe podłączenie i optymalne działanie od pierwszego uruchomienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Zapewniamy również szkolenie personelu z zakresu obsługi i konserwacji agregatów, aby Twoja ekipa była w pełni przygotowana do ich użytkowania.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/doradztwo.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">

                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Wsparcie techniczne i konsultacje:
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Nasza firma oferuje pełne wsparcie techniczne dla wszystkich naszych klientów. Jesteśmy dostępni, aby odpowiedzieć na wszelkie pytania i udzielić niezbędnych porad technicznych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Oferujemy również usługi konsultacyjne, które obejmują analizę potrzeb energetycznych oraz doradztwo w zakresie wyboru najlepszych rozwiązań z zakresu agregatów prądotwórczych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Zapewniamy dostęp do aktualizacji technologicznych oraz możliwości modernizacji sprzętu, aby Twoje agregaty były zawsze na najwyższym poziomie wydajności.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/gwarancja.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">

                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Gwarancja i opieka posprzedażowa:
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wszystkie nasze agregaty są objęte pełną gwarancją, która zapewnia Ci spokój ducha i pewność, że w razie jakichkolwiek problemów, szybko je rozwiążemy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Oferujemy również pakiety opieki posprzedażowej, które obejmują regularne przeglądy, konserwację oraz dostęp do oryginalnych części zamiennych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nasza obsługa klienta jest zawsze gotowa, aby pomóc Ci w każdej sytuacji, zapewniając profesjonalne wsparcie na każdym etapie współpracy.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};