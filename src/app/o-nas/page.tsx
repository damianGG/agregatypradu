import Image from "next/image";

export default function OnaS() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">O nas</h1>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Jako dystrybutor agregatów prądotwórczych dużej mocy, oferujemy rozwiązania energetyczne, które sprostają nawet najbardziej wymagającym potrzebom.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Nie jesteśmy tylko dystrybutorem – jesteśmy partnerem, który wspiera swoich klientów na każdym etapie. Zaufanie, którym obdarzają nas klienci, to dla nas najlepsze potwierdzenie, że robimy dobrą robotę.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="w-full lg:w-1/2">
              <figure className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="/img/photos/serwis.jpg" width={600} height={1000} alt="Nasz serwis" className="w-full h-auto" />
              </figure>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Nasze usługi obejmują:</h2>
              <ul className="space-y-4">
                {[
                  "Dystrybucję agregatów prądotwórczych o mocy od 80 kW do ponad 150 kW.",
                  "Profesjonalny montaż i konfigurację sprzętu, dostosowaną do specyficznych potrzeb klienta.",
                  "Szybki i bezpieczny transport agregatów na terenie całego kraju.",
                  "Pełne doradztwo techniczne i pomoc w wyborze odpowiednich rozwiązań energetycznych.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Współpraca z naszą firmą to gwarancja niezawodności i najwyższej jakości obsługi. Nasi klienci mogą liczyć na szybkie wsparcie techniczne oraz dostęp do oryginalnych części zamiennych.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Zapraszamy do współpracy i dołączenia do grona naszych zadowolonych klientów!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
