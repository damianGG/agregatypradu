import type { Metadata } from "next";
import ServicePageTemplate from "@/components/reuseable/service-pages/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pierwsze uruchomienie | agregatypradu.pl",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Pierwsze uruchomienie"
      title="Pierwsze uruchomienie wykonane bezpiecznie i zgodnie z procedurą"
      description="Przygotowujemy agregat do startu, sprawdzamy poprawność konfiguracji i przekazujemy obsłudze urządzenie gotowe do codziennej pracy."
      image="/img/photos/konsultacje.jpg"
      imageAlt="Pierwsze uruchomienie agregatu"
      intro={[
        "Pierwsze uruchomienie ma kluczowe znaczenie dla bezpieczeństwa instalacji i późniejszej bezawaryjnej eksploatacji agregatu. Weryfikujemy przygotowanie urządzenia, sposób podłączenia oraz poprawność ustawień przed oddaniem sprzętu do użytkowania.",
        "Podczas uruchomienia nie ograniczamy się wyłącznie do startu agregatu. Tłumaczymy sposób działania systemu, zwracamy uwagę na istotne parametry i przekazujemy użytkownikowi praktyczne wskazówki dotyczące obsługi oraz podstawowej kontroli pracy urządzenia.",
      ]}
      facts={[
        "Kontrola poprawności podłączenia i konfiguracji agregatu przed rozruchem.",
        "Weryfikacja działania zabezpieczeń, automatyki i parametrów roboczych.",
        "Przekazanie operatorowi najważniejszych zasad bezpiecznej obsługi urządzenia.",
      ]}
      highlights={[
        {
          title: "Weryfikacja przed startem",
          description:
            "Sprawdzamy przygotowanie agregatu oraz otoczenia instalacji, aby pierwsze uruchomienie przebiegło w kontrolowanych i bezpiecznych warunkach.",
        },
        {
          title: "Test działania urządzenia",
          description:
            "Potwierdzamy poprawność pracy najważniejszych układów, reakcji automatyki oraz podstawowych parametrów eksploatacyjnych.",
        },
        {
          title: "Przekazanie do użytkowania",
          description:
            "Pokazujemy obsłudze, jak bezpiecznie korzystać z agregatu, na co zwracać uwagę w codziennej pracy i kiedy reagować serwisowo.",
        },
      ]}
      steps={[
        {
          title: "Przegląd przygotowania instalacji",
          description:
            "Sprawdzamy stan urządzenia, podłączenia oraz gotowość miejsca pracy przed wykonaniem pierwszego rozruchu.",
        },
        {
          title: "Rozruch i kontrola parametrów",
          description:
            "Uruchamiamy agregat, obserwujemy jego pracę i potwierdzamy poprawność działania kluczowych funkcji oraz zabezpieczeń.",
        },
        {
          title: "Szkolenie i odbiór",
          description:
            "Przekazujemy praktyczne wskazówki dla operatora, porządkujemy najważniejsze informacje eksploatacyjne i przygotowujemy urządzenie do regularnej pracy.",
        },
      ]}
      closing={[
        "Jeśli chcesz mieć pewność, że nowe urządzenie zostanie poprawnie wdrożone i od początku będzie pracować zgodnie z założeniami, zrealizujemy profesjonalne pierwsze uruchomienie.",
        "To etap, który porządkuje całą inwestycję i daje użytkownikowi bezpieczny start z nowym agregatem prądotwórczym.",
      ]}
    />
  );
}
