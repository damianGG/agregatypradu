export default function Page() {
    return (
        <>

            <section
                className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white "
                style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}>
                <div className="container pt-10 pb-10 pt-md-10 pb-md-10 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-1 mb-3 text-white">Opieka 24/7</h1>

                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15">
                <div className="mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        W naszej firmie zdajemy sobie sprawę, że niezawodność agregatów prądotwórczych jest kluczowa dla ciągłości operacji naszych klientów. Dlatego oferujemy kompleksową opiekę serwisową 24/7, aby zapewnić, że Twoje urządzenie zawsze będzie działało na najwyższym poziomie, niezależnie od okoliczności.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Nasz dedykowany zespół techników jest dostępny przez całą dobę, gotowy do szybkiej interwencji w razie potrzeby. Niezależnie od tego, czy potrzebujesz wsparcia technicznego, regularnej konserwacji, czy natychmiastowej naprawy, możesz liczyć na naszą szybką i skuteczną pomoc.
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">
                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <img
                                        src="/img/photos/konsultacje.jpg"
                                        width={600}
                                        height={1000}
                                        alt="care"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <p className="display-6 mb-3">Nasze usługi opieki 24/7 obejmują:</p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Całodobowy serwis techniczny, dostępny 7 dni w tygodniu, aby zagwarantować, że Twoje agregaty prądotwórcze działają bez zakłóceń, niezależnie od pory dnia czy nocy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szybka reakcja w przypadku awarii – nasz zespół techników jest gotowy do natychmiastowego działania, aby minimalizować czas przestoju i zapewnić ciągłość pracy Twojego sprzętu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Regularna konserwacja i przeglądy techniczne, które zapobiegają problemom zanim się pojawią, przedłużając żywotność Twojego sprzętu i zwiększając jego niezawodność.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Zdalne monitorowanie stanu agregatów, które pozwala nam na bieżąco śledzić ich wydajność i szybko reagować na wszelkie nieprawidłowości.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dostęp do oryginalnych części zamiennych i materiałów eksploatacyjnych, aby zapewnić, że Twoje urządzenie będzie zawsze działać w pełni sprawnie.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        Nasza opieka 24/7 to nie tylko szybka reakcja na awarie, ale przede wszystkim proaktywne podejście do utrzymania sprzętu w idealnym stanie. Dzięki naszemu zaawansowanemu systemowi monitorowania, jesteśmy w stanie zidentyfikować potencjalne problemy zanim staną się one poważnym zagrożeniem dla Twojej działalności.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Zaufanie naszych klientów opiera się na pewności, że zawsze mogą na nas liczyć. Nasze zaangażowanie w zapewnienie niezawodności i ciągłości działania Twoich agregatów prądotwórczych czyni nas partnerem, na którym można polegać w każdej sytuacji.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Dołącz do grona zadowolonych klientów, którzy cenią sobie nie tylko wysoką jakość naszych produktów, ale także wsparcie, które oferujemy na każdym etapie użytkowania. Nasza opieka 24/7 to gwarancja spokoju i pewności, że Twoje agregaty prądotwórcze są w najlepszych rękach.
                    </p>
                </div>
            </div>
        </>
    )

}