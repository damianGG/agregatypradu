import type { Metadata } from "next";
import ServicePageTemplate from "@/components/reuseable/service-pages/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Transport | agregatypradu.pl",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Transport i logistyka"
      title="Bezpieczny transport agregatów do miejsca instalacji"
      description="Organizujemy dostawy agregatów prądotwórczych w sposób przewidywalny, terminowy i bezpieczny dla urządzenia oraz infrastruktury klienta."
      image="/img/photos/transport.jpg"
      imageAlt="Transport agregatu prądotwórczego"
      intro={[
        "Transport ciężkiego urządzenia wymaga dobrej koordynacji, odpowiedniego zabezpieczenia ładunku i precyzyjnego planu rozładunku. Dlatego każdą realizację przygotowujemy indywidualnie, z uwzględnieniem miejsca dostawy, dostępności terenu i wymagań montażowych.",
        "Dbamy o to, aby agregat dotarł na miejsce gotowy do kolejnego etapu prac. Dzięki temu skracamy czas przestoju inwestycji i ograniczamy ryzyko uszkodzeń w trakcie przewozu oraz rozładunku.",
      ]}
      facts={[
        "Planowanie terminu dostawy pod harmonogram inwestycji lub prac serwisowych.",
        "Zabezpieczenie urządzenia na czas przewozu i kontrola całego procesu logistycznego.",
        "Koordynacja rozładunku, ustawienia agregatu i przekazania do dalszych prac.",
      ]}
      highlights={[
        {
          title: "Logistyka dopasowana do warunków",
          description:
            "Uwzględniamy gabaryty urządzenia, ograniczenia dojazdu oraz specyfikę placu budowy, zakładu lub obiektu technicznego.",
        },
        {
          title: "Bezpieczny rozładunek",
          description:
            "Przygotowujemy proces ustawienia agregatu na miejscu tak, aby ograniczyć ryzyko uszkodzeń i przyspieszyć dalsze działania montażowe.",
        },
        {
          title: "Sprawna komunikacja",
          description:
            "Na bieżąco potwierdzamy terminy i zakres działań, dzięki czemu klient dokładnie wie, kiedy i w jakiej kolejności realizowane są kolejne etapy.",
        },
      ]}
      steps={[
        {
          title: "Ustalenie warunków dostawy",
          description:
            "Analizujemy miejsce rozładunku, sposób wjazdu, niezbędny sprzęt oraz osoby zaangażowane po stronie inwestycji i klienta.",
        },
        {
          title: "Przygotowanie transportu",
          description:
            "Dobieramy odpowiedni środek transportu, zabezpieczenia oraz harmonogram, aby urządzenie dotarło zgodnie z ustalonym planem.",
        },
        {
          title: "Dostawa i przekazanie urządzenia",
          description:
            "Koordynujemy rozładunek, ustawienie agregatu na miejscu i przygotowanie do dalszego montażu lub pierwszego uruchomienia.",
        },
      ]}
      closing={[
        "Jeśli zależy Ci na terminowej dostawie i bezpiecznym przewiezieniu agregatu, przygotujemy logistykę dopasowaną do specyfiki Twojej realizacji.",
        "Zapewniamy jasną organizację procesu oraz wsparcie na miejscu, aby urządzenie trafiło dokładnie tam, gdzie ma rozpocząć pracę.",
      ]}
    />
  );
}
