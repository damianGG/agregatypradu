import { Fragment } from "react";
import clsx from "clsx";
// CUSTOM DATA
import data from "@/data/product-details-page";

export default function ProductDescription() {
  return (
    <Fragment>
      <ul className="nav nav-tabs nav-tabs-basic mt-12">
        {data.tabList.map(({ id, title }, i) => (
          <li className="nav-item" key={id}>
            <a data-bs-toggle="tab" href={id} className={clsx({ "nav-link": true, active: i === 0 })}>
              {title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-0 mt-md-5">
        <div className="tab-pane fade show active" id="tab-1">
          <p>
            Agregat prądotwórczy GF2/GF3 o mocy znamionowej 150 kW (200 kVA) to zaawansowane urządzenie zaprojektowane do zapewnienia niezawodnego źródła energii w różnych zastosowaniach przemysłowych i komercyjnych. Wyposażony w silnik Ricardo R6113ZLD, turbodoładowany z intercoolerem, agregat ten cechuje się wysoką wydajnością oraz niezawodnością działania.
          </p>
          <p>
            Model ten spełnia normy emisji spalin Stage II, co czyni go odpowiednim wyborem do zastosowań zgodnych z aktualnymi przepisami dotyczącymi ochrony środowiska. Pracuje przy częstotliwości 50 Hz, z napięciem znamionowym 230/400 V, co sprawia, że idealnie nadaje się do zasilania różnorodnych urządzeń elektrycznych.
          </p>
          <p>
            Agregat jest dostępny w dwóch wersjach: GF2 - otwarty oraz GF3 - zabudowany. Obie wersje wyposażone są w automatyczny regulator napięcia AVR, co gwarantuje stabilność napięcia na poziomie ±1%, minimalizując ryzyko uszkodzeń podłączonych urządzeń.
          </p>
          <p>
            W standardowym wyposażeniu agregatu znajduje się mikroprocesorowy układ sterowania SmartGen, który umożliwia zdalny monitoring i kontrolę parametrów pracy, takich jak napięcie, częstotliwość, poziom paliwa czy temperatura silnika. Agregat posiada również funkcję automatycznego rozruchu, co czyni go idealnym rozwiązaniem do systemów awaryjnego zasilania.
          </p>
          <p>
            Zastosowane wibroizolatory oraz zbiornik paliwa wbudowany w ramę zapewniają cichą i stabilną pracę urządzenia, przy jednoczesnym minimalizowaniu hałasu na poziomie 88 dB w wersji zabudowanej. Zbiornik paliwa o pojemności 260 litrów pozwala na nieprzerwaną pracę przez minimum 8 godzin przy pełnym obciążeniu.
          </p>

        </div>

        <div className="tab-pane fade" id="tab-2">
          <p>
            Agregat prądotwórczy GF2/GF3-150kW to wszechstronne i potężne urządzenie zaprojektowane z myślą o wysokich wymaganiach użytkowników z różnych sektorów przemysłowych. Urządzenie to oferuje moc znamionową 150 kW (200 kVA), co czyni je idealnym rozwiązaniem dla zasilania dużych obiektów, zakładów przemysłowych, placów budowy, a także jako niezawodne źródło energii awaryjnej.
          </p>
          <p>
            Waga agregatu różni się w zależności od wersji. W przypadku modelu GF2 (otwarty) masa wynosi 1800 kg, natomiast wersja GF3 (zabudowany) waży 1900 kg. Dzięki solidnej konstrukcji i odpowiedniej masie, agregat jest stabilny podczas pracy, co przekłada się na jego niezawodność i trwałość w trudnych warunkach eksploatacyjnych.
          </p>
          <p>
            Jeśli chodzi o wymiary, wersja GF2 posiada następujące rozmiary: 3300 mm długości, 1250 mm szerokości i 1800 mm wysokości. Model GF3 jest nieco większy, z wymiarami 3350 mm długości, 1300 mm szerokości i 1800 mm wysokości. Te kompaktowe, jak na swoją moc, wymiary umożliwiają łatwy transport i instalację w różnych lokalizacjach, zarówno wewnętrznych, jak i zewnętrznych.
          </p>
          <p>
            Agregat wyposażony jest w silnik Ricardo R6113ZLD, który pracuje z prędkością obrotową 1500 obr./min. Jest to turbodoładowany silnik wysokoprężny, z intercoolerem, co zapewnia optymalną wydajność oraz niskie zużycie paliwa. Pojemność zbiornika paliwa wynosi 260 litrów, co pozwala na nieprzerwaną pracę agregatu przez co najmniej 8 godzin przy pełnym obciążeniu. Zużycie paliwa przy pełnym obciążeniu wynosi około 39 litrów na godzinę, przy 75% obciążeniu jest to 29,3 litra na godzinę, natomiast przy 50% obciążeniu – 19,5 litra na godzinę.
          </p>
          <p>
            Kluczowym aspektem agregatu jest także poziom generowanego hałasu. W wersji zabudowanej (GF3) poziom hałasu wynosi 88 dB, mierzony w odległości 7 metrów od urządzenia, co czyni go stosunkowo cichym jak na tego typu urządzenia. Dla porównania, wersja otwarta (GF2) generuje hałas na poziomie 105 dB. Dzięki zastosowaniu nowoczesnych technologii tłumienia hałasu, agregat może być instalowany w miejscach, gdzie konieczne jest zachowanie niskiego poziomu dźwięku, bez kompromisów w zakresie wydajności.
          </p>
          <p>
            Prądnica Stamford T2X-150kW, która jest integralną częścią agregatu, charakteryzuje się wysoką stabilnością napięcia na poziomie ±1%, co zapewnia bezpieczne zasilanie nawet najbardziej wrażliwych urządzeń elektrycznych. Prądnica ta posiada bezszczotkową konstrukcję oraz klasę izolacji uzwojeń H, co zwiększa jej trwałość i odporność na ekstremalne warunki pracy. Stopień ochrony IP23 dodatkowo zabezpiecza urządzenie przed szkodliwymi czynnikami zewnętrznymi, takimi jak kurz czy woda.
          </p>
          <p>
            W ramach standardowego wyposażenia, agregat zawiera również takie elementy jak automatyczny rozruch, wskaźniki parametrów elektrycznych i mechanicznych, wibroizolatory, akumulatory oraz moduł ładowania baterii. Wszystkie te komponenty zostały zaprojektowane z myślą o zapewnieniu maksymalnej efektywności operacyjnej oraz łatwości obsługi i konserwacji.
          </p>
          <p>
            Dodatkowym atutem agregatu GF2/GF3-150kW jest możliwość doposażenia go w opcjonalne elementy, takie jak grzałka do podgrzewania silnika, drzwiczki zamykane na klucz, uchwyt do podnoszenia dźwigiem oraz system zdalnego monitoringu GSM. Te opcje dodatkowe pozwalają na jeszcze lepsze dostosowanie agregatu do specyficznych potrzeb użytkownika, zapewniając przy tym maksymalną elastyczność i bezpieczeństwo użytkowania.
          </p>
        </div>

        <div className="tab-pane fade" id="tab-3">
          <p>
            Agregat prądotwórczy GF2/GF3-150kW został zaprojektowany z myślą o zapewnieniu stabilnego i niezawodnego źródła energii elektrycznej. Jego parametry elektryczne sprawiają, że jest idealnym rozwiązaniem zarówno dla zastosowań przemysłowych, jak i komercyjnych, gdzie kluczowe jest zapewnienie nieprzerwanego zasilania.
          </p>
          <p>
            Moc znamionowa agregatu wynosi 150 kW, co odpowiada 200 kVA przy współczynniku mocy (cos φ) równym 0,8. Dzięki temu agregat jest w stanie zasilać zarówno urządzenia o charakterze rezystancyjnym, jak i indukcyjnym, zapewniając odpowiednią wydajność w szerokim zakresie zastosowań. Prąd znamionowy wynosi 270 A, co pozwala na efektywne zasilanie dużych instalacji elektrycznych.
          </p>
          <p>
            Agregat pracuje przy napięciu znamionowym 230/400 V, co jest standardem dla większości instalacji elektrycznych w Europie. Częstotliwość pracy wynosi 50 Hz, co zapewnia kompatybilność z większością urządzeń elektrycznych oraz spełnia wymogi lokalnych norm i standardów.
          </p>
          <p>
            Ważnym elementem konstrukcji jest prądnica Stamford T2X-150kW, która zapewnia stabilność napięcia na poziomie ±1%. Prądnica ta wyposażona jest w automatyczny regulator napięcia (AVR), który utrzymuje stałe napięcie wyjściowe, minimalizując ryzyko uszkodzeń wrażliwych urządzeń podłączonych do agregatu. Dodatkowo, bezszczotkowa konstrukcja prądnicy zwiększa jej trwałość i zmniejsza wymagania konserwacyjne.
          </p>
          <p>
            Agregat charakteryzuje się niską zawartością harmonicznych (THD) poniżej 2%, co oznacza, że generowane napięcie jest czyste i stabilne, co jest szczególnie istotne przy zasilaniu sprzętu elektronicznego, komputerów, serwerów oraz innych urządzeń wrażliwych na jakość zasilania. Klasa izolacji uzwojeń prądnicy wynosi H, co zapewnia wysoką odporność na przeciążenia termiczne i długą żywotność prądnicy nawet w trudnych warunkach eksploatacyjnych.
          </p>
          <p>
            Agregat jest również wyposażony w system automatycznego rozruchu, który umożliwia natychmiastowe uruchomienie urządzenia w przypadku zaniku zasilania z sieci. Funkcja ta jest szczególnie przydatna w zastosowaniach krytycznych, takich jak szpitale, data centers czy obiekty przemysłowe, gdzie każda przerwa w dostawie prądu może prowadzić do poważnych konsekwencji.
          </p>
          <p>
            Panel sterowania SmartGen HGM6120, w który wyposażono agregat, zapewnia pełną kontrolę nad parametrami elektrycznymi urządzenia. Umożliwia monitorowanie napięcia, częstotliwości, prądu oraz poziomu paliwa w zbiorniku. Dodatkowo, panel ten umożliwia zdalne monitorowanie i zarządzanie agregatem, co zwiększa komfort i bezpieczeństwo użytkowania.
          </p>
        </div>

        <div className="tab-pane fade" id="tab-4">
          <p>
            Dokładamy wszelkich starań, aby proces dostawy naszych agregatów prądotwórczych był tak samo niezawodny, jak nasze produkty. Oferujemy darmową dostawę na terenie całego kraju, jak i do krajów europejskich, dbając o to, aby zamówione urządzenia dotarły do Ciebie w nienaruszonym stanie i w ustalonym terminie.
          </p>
          <p>
            Nasz zespół logistyczny, składający się z doświadczonych specjalistów, zapewnia profesjonalną obsługę na każdym etapie realizacji zamówienia. Od momentu złożenia zamówienia, aż do dostarczenia agregatu na wskazane miejsce, możesz liczyć na pełne wsparcie oraz bieżące informacje o statusie przesyłki.
          </p>
          <p>
            Jesteśmy dumni z naszej niezawodności i terminowości dostaw, co jest kluczowe w branży, w której działamy. Dzięki rozbudowanej sieci transportowej i współpracy z najlepszymi przewoźnikami, jesteśmy w stanie realizować dostawy nawet w najbardziej wymagających lokalizacjach. Każdy agregat jest starannie zabezpieczony na czas transportu, abyś mógł mieć pewność, że otrzymasz produkt gotowy do natychmiastowego użytkowania.
          </p>
          <p>
            Niezależnie od tego, gdzie znajduje się Twoja firma, dostarczymy agregat w sposób szybki, bezpieczny i całkowicie darmowy. Twoje zadowolenie jest naszym priorytetem, dlatego dokładamy wszelkich starań, aby każda dostawa była realizowana z najwyższą starannością i zgodnie z ustalonym harmonogramem.
          </p>
        </div>
      </div>
    </Fragment >
  );
}
