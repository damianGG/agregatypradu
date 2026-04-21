import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sprzedaż i doradztwo techniczne",
    image: "/img/photos/sprzedaz.jpg",
    items: [
      "Oferujemy szeroki wybór agregatów prądotwórczych o mocy od 80 kW do ponad 150 kW, które spełniają najwyższe standardy jakości i niezawodności.",
      "Nasz zespół doradców technicznych służy pomocą w doborze odpowiedniego sprzętu.",
      "Przeprowadzamy pełną analizę energetyczną dla efektywnych i ekonomicznych rozwiązań.",
    ],
    reverse: false,
    bg: "bg-white",
  },
  {
    title: "Serwis i opieka techniczna",
    image: "/img/photos/serwis2.jpg",
    items: [
      "Zapewniamy kompleksowy serwis oraz konserwację agregatów prądotwórczych.",
      "W przypadku awarii, oferujemy usługę wymiany agregatu zastępczego.",
      "Nasze usługi serwisowe są dostępne 24/7.",
    ],
    reverse: true,
    bg: "bg-blue-50",
  },
  {
    title: "Transport i montaż",
    image: "/img/photos/transport.jpg",
    items: [
      "Oferujemy bezpieczny i terminowy transport agregatów na terenie całego kraju.",
      "Nasz zespół specjalistów zajmuje się montażem agregatów na miejscu u klienta.",
      "Zapewniamy szkolenie personelu z zakresu obsługi i konserwacji agregatów.",
    ],
    reverse: false,
    bg: "bg-white",
  },
  {
    title: "Wsparcie techniczne i konsultacje",
    image: "/img/photos/doradztwo.jpg",
    items: [
      "Nasza firma oferuje pełne wsparcie techniczne dla wszystkich naszych klientów.",
      "Oferujemy usługi konsultacyjne, które obejmują analizę potrzeb energetycznych.",
      "Zapewniamy dostęp do aktualizacji technologicznych oraz możliwości modernizacji sprzętu.",
    ],
    reverse: true,
    bg: "bg-blue-50",
  },
  {
    title: "Gwarancja i opieka posprzedażowa",
    image: "/img/photos/gwarancja.jpg",
    items: [
      "Wszystkie nasze agregaty są objęte pełną gwarancją.",
      "Oferujemy pakiety opieki posprzedażowej z regularnymi przeglądami i konserwacją.",
      "Nasza obsługa klienta jest zawsze gotowa do pomocy na każdym etapie współpracy.",
    ],
    reverse: false,
    bg: "bg-white",
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

export default function Oferta() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Oferta</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            Kompleksowe usługi dla Twojej infrastruktury energetycznej
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Co oferujemy
            </span>
            <p className="text-gray-700 text-lg leading-relaxed">
              Jako wiodący dystrybutor agregatów prądotwórczych dużej mocy oferujemy kompleksowe usługi,
              które gwarantują nieprzerwaną pracę Twojej infrastruktury — od doboru sprzętu, przez montaż,
              aż po długoletni serwis.
            </p>
          </div>

          {/* Quick overview cards */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 bg-blue-50 rounded-2xl p-4"
              >
                <span className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-gray-700 text-sm font-semibold leading-snug">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, idx) => (
        <section key={idx} className={`${service.bg} py-16 lg:py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col ${
                service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <figure className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    width={600}
                    height={420}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </figure>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="h-px flex-1 bg-blue-200" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                  {service.title}
                </h2>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <CheckIcon />
                      </span>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-blue-700 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Masz pytania dotyczące naszej oferty? Nasz zespół jest do Twojej dyspozycji — odpowiemy na każde pytanie i pomożemy dobrać najlepsze rozwiązanie.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white hover:bg-blue-50 text-blue-700 font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Napisz do nas
          </Link>
        </div>
      </section>
    </>
  );
}
