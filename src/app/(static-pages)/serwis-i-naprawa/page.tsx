export default function Page() {
    return (

        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white "
                style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}>
                <div className="container pt-10 pb-10 pt-md-10 pb-md-10 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-1 mb-3 text-white">Serwis i naprawa</h1>

                        </div>
                    </div>
                </div>
            </section>

            <div className="container mb-15 mt-15">
                <div className="mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        Nasza firma nie tylko dostarcza najwyższej jakości agregaty prądotwórcze, ale również zapewnia kompleksową obsługę transportową na terenie całej Europy. Dzięki wieloletniemu doświadczeniu w logistyce, jesteśmy w stanie zagwarantować bezpieczny, szybki i bezproblemowy transport każdego zamówienia.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Dbamy o to, aby każdy agregat prądotwórczy dotarł do klienta w nienaruszonym stanie, bez względu na miejsce dostawy. Nasze usługi transportowe obejmują pełne ubezpieczenie przewożonego sprzętu, co daje naszym klientom dodatkowe poczucie bezpieczeństwa. Ponadto, oferujemy darmowy transport dla wszystkich zamówień realizowanych na terenie Europy, co czyni naszą ofertę jeszcze bardziej atrakcyjną.
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">
                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <img
                                        src="/img/photos/transport.jpg"
                                        width={600}
                                        height={1000}
                                        alt="transport"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <p className="display-6 mb-3">Nasze usługi transportowe obejmują:</p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Darmowy transport na terenie całej Europy, bez względu na miejsce docelowe. Niezależnie od tego, gdzie się znajdujesz, nasz zespół dostarczy agregat prądotwórczy szybko i bezpiecznie.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Pełne ubezpieczenie sprzętu w trakcie transportu, co zapewnia klientom spokój ducha i gwarancję, że ich zakup jest chroniony przez całą drogę.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Profesjonalny załadunek, rozładunek oraz ustawienie agregatu na miejscu u klienta. Nasz zespół techników zadba o to, aby urządzenie zostało ustawione w optymalnym miejscu i było gotowe do działania od momentu dostawy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szybki czas realizacji dostaw, dzięki naszemu zaawansowanemu systemowi logistyki i szerokiej sieci partnerskiej. Dostarczamy agregaty prądotwórcze w możliwie najkrótszym czasie, z zachowaniem najwyższych standardów bezpieczeństwa.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Elastyczne podejście do terminów i miejsc dostawy – dostosowujemy się do potrzeb klienta, aby zapewnić pełną satysfakcję z naszych usług.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        Nasze zaangażowanie w zapewnienie najwyższej jakości usług transportowych wynika z przekonania, że dostawa to kluczowy element każdej transakcji. Dlatego też kładziemy duży nacisk na każdy detal, aby zapewnić naszym klientom pełne zadowolenie z współpracy z naszą firmą.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Zaufanie, jakim obdarzyli nas klienci na całym kontynencie, jest dowodem na to, że jesteśmy partnerem, na którym można polegać. Nasze usługi transportowe to nie tylko dostawa sprzętu – to kompleksowe wsparcie na każdym etapie, od załadunku po finalne ustawienie agregatu.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Zapraszamy do skorzystania z naszych usług transportowych i dołączenia do grona zadowolonych klientów, którzy cenią sobie bezpieczeństwo, profesjonalizm i terminowość. Nasz zespół jest gotowy, aby dostarczyć Twój agregat prądotwórczy gdziekolwiek w Europie.
                    </p>
                </div>
            </div>
        </>
    )

}