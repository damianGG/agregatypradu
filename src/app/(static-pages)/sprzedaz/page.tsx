import type { Metadata } from "next";
import ServicePageTemplate from "@/components/reuseable/service-pages/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sprzedaż | agregatypradu.pl",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Sprzedaż agregatów"
      title="Sprzedaż agregatów dopasowanych do realnych potrzeb"
      description="Doradzamy, konfigurujemy i dostarczamy agregaty prądotwórcze dużej mocy dla firm, inwestycji i obiektów wymagających stabilnego źródła zasilania."
      image="/img/photos/sprzedaz.jpg"
      imageAlt="Sprzedaż agregatów prądotwórczych"
      intro={[
        "Proces sprzedaży zaczynamy od rozmowy o tym, jak pracuje Twoja instalacja, jakie są wymagania dotyczące mocy oraz w jakich warunkach będzie działał agregat. Dzięki temu rekomendujemy rozwiązanie, które odpowiada na realne potrzeby, a nie tylko parametry katalogowe.",
        "Łączymy wsparcie handlowe z doradztwem technicznym, dlatego od początku wiesz, jaki wariant urządzenia, wyposażenia dodatkowego i sposobu montażu będzie najbezpieczniejszy oraz najbardziej opłacalny dla Twojej firmy.",
      ]}
      facts={[
        "Dobór mocy i konfiguracji pod konkretny obiekt lub proces technologiczny.",
        "Przejrzysta oferta z rekomendacją wariantów oraz zakresem wyposażenia.",
        "Koordynacja dostawy, montażu, uruchomienia i późniejszego wsparcia technicznego.",
      ]}
      highlights={[
        {
          title: "Analiza potrzeb inwestycji",
          description:
            "Sprawdzamy wymagania energetyczne, warunki pracy i oczekiwany poziom niezawodności, aby dobrać urządzenie odpowiednie do docelowego zastosowania.",
        },
        {
          title: "Dobór urządzenia i osprzętu",
          description:
            "Porównujemy dostępne warianty agregatów, automatykę, obudowy i wyposażenie dodatkowe, tak aby zestaw był kompletny od pierwszego dnia pracy.",
        },
        {
          title: "Wsparcie po zakupie",
          description:
            "Pomagamy również po finalizacji zamówienia — od organizacji montażu po szkolenie obsługi i przygotowanie do pierwszego uruchomienia.",
        },
      ]}
      steps={[
        {
          title: "Rozpoznanie potrzeb",
          description:
            "Zbieramy informacje o obciążeniu, miejscu instalacji, priorytetach klienta i planowanym sposobie eksploatacji agregatu.",
        },
        {
          title: "Oferta i rekomendacja",
          description:
            "Przygotowujemy jasną propozycję z opisem rozwiązań, zakresem wyposażenia oraz wskazaniem najlepszego wariantu dla danej inwestycji.",
        },
        {
          title: "Dostawa i wdrożenie",
          description:
            "Koordynujemy kolejne etapy realizacji, aby urządzenie zostało poprawnie dostarczone, zamontowane i przekazane do bezpiecznej eksploatacji.",
        },
      ]}
      closing={[
        "Jeśli planujesz zakup agregatu prądotwórczego, przygotujemy rozwiązanie dopasowane do skali Twojej działalności i wymagań technicznych obiektu.",
        "Zadbamy o czytelny proces współpracy, rzetelną komunikację oraz pełne wsparcie od etapu wyboru urządzenia po jego wdrożenie.",
      ]}
    />
  );
}
