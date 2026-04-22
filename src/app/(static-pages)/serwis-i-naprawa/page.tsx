import type { Metadata } from "next";
import ServicePageTemplate from "@/components/reuseable/service-pages/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Doradztwo techniczne | agregatypradu.pl",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Doradztwo techniczne"
      title="Doradztwo techniczne przed zakupem i wdrożeniem"
      description="Pomagamy zaprojektować rozwiązanie zasilania awaryjnego lub podstawowego tak, aby było bezpieczne, wydajne i gotowe do długiej eksploatacji."
      image="/img/photos/doradztwo.jpg"
      imageAlt="Doradztwo techniczne przy doborze agregatu"
      intro={[
        "Dobre doradztwo techniczne skraca czas decyzji i ogranicza ryzyko kosztownych błędów na etapie zakupu, montażu oraz eksploatacji agregatu. Analizujemy warunki pracy urządzenia, wymagania obiektu i oczekiwania użytkowników końcowych.",
        "Wspieramy klientów w wyborze mocy, wyposażenia i sposobu integracji agregatu z istniejącą infrastrukturą. Dzięki temu proponowane rozwiązanie jest nie tylko poprawne technicznie, ale też wygodne w późniejszej obsłudze i serwisie.",
      ]}
      facts={[
        "Ocena zapotrzebowania na moc i warunków pracy urządzenia.",
        "Dobór automatyki, obudów, tłumienia hałasu oraz wyposażenia dodatkowego.",
        "Wsparcie w planowaniu instalacji i przygotowaniu agregatu do wdrożenia.",
      ]}
      highlights={[
        {
          title: "Audyt potrzeb technicznych",
          description:
            "Uwzględniamy obciążenia, charakter pracy obiektu, wymagania środowiskowe i priorytety bezpieczeństwa, aby rozwiązanie było trafne od początku.",
        },
        {
          title: "Dobór kompletnej konfiguracji",
          description:
            "Rekomendujemy nie tylko agregat, ale też niezbędną automatykę, wyposażenie dodatkowe i parametry montażowe potrzebne do poprawnej pracy instalacji.",
        },
        {
          title: "Wsparcie dla inwestora i wykonawców",
          description:
            "Pomagamy uporządkować wymagania techniczne, ułatwiając współpracę między inwestorem, wykonawcą i osobami odpowiedzialnymi za uruchomienie urządzenia.",
        },
      ]}
      steps={[
        {
          title: "Analiza obiektu i wymagań",
          description:
            "Rozmawiamy o sposobie użytkowania agregatu, przewidywanych obciążeniach i warunkach pracy, aby określić najważniejsze założenia techniczne.",
        },
        {
          title: "Rekomendacja rozwiązania",
          description:
            "Przedstawiamy propozycję konfiguracji wraz z uzasadnieniem technicznym, zakresem wyposażenia oraz wskazaniem najważniejszych korzyści.",
        },
        {
          title: "Przygotowanie do realizacji",
          description:
            "Pomagamy przejść do kolejnego etapu — zakupu, transportu, montażu i pierwszego uruchomienia — bez niejasności organizacyjnych i technicznych.",
        },
      ]}
      closing={[
        "Jeśli chcesz dobrać agregat świadomie i bez ryzyka niedopasowania parametrów do obiektu, przygotujemy techniczną rekomendację dla Twojej inwestycji.",
        "Nasze doradztwo pozwala szybciej podjąć decyzję i lepiej zaplanować cały proces wdrożenia urządzenia.",
      ]}
    />
  );
}
