import Image from "next/image";

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
  },
];

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
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Jako wiodący dystrybutor agregatów prądotwórczych dużej mocy, oferujemy kompleksowe usługi, które gwarantują nieprzerwaną pracę Twojej infrastruktury.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <figure className="rounded-2xl overflow-hidden shadow-xl">
                    <Image src={service.image} width={600} height={1000} alt={service.title} className="w-full h-auto" />
                  </figure>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{service.title}</h2>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
