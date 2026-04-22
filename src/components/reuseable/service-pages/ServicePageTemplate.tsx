import Image from "next/image";
import Link from "next/link";

type SectionItem = {
  title: string;
  description: string;
};

interface ServicePageTemplateProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string[];
  facts: string[];
  highlights: SectionItem[];
  steps: SectionItem[];
  closing: string[];
}

export default function ServicePageTemplate({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  intro,
  facts,
  highlights,
  steps,
  closing,
}: ServicePageTemplateProps) {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto flex min-h-[380px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              {eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative -mt-16 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.45)]">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
                  Kompleksowa obsługa
                </span>
                <div className="mt-6 space-y-5">
                  {intro.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-700 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-950 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900 shadow-2xl">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={900}
                    height={760}
                    className="h-72 w-full object-cover sm:h-80"
                  />
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h2 className="text-lg font-semibold text-white">Najważniejsze elementy usługi</h2>
                  <ul className="mt-5 space-y-4">
                    {facts.map((fact) => (
                      <li key={fact} className="flex gap-3 text-sm leading-6 text-slate-200">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                          ✓
                        </span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
                Co zyskujesz
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Przejrzysty proces i pełne wsparcie na każdym etapie
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Projektujemy każdą realizację tak, aby była bezpieczna, czytelna organizacyjnie i gotowa do pracy od pierwszego dnia.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.45)]"
              >
                <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
                  Etap wsparcia
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{highlight.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
              Jak działamy
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Współpraca uporządkowana od pierwszego kontaktu do odbioru
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 shadow-[0_30px_80px_-44px_rgba(15,23,42,0.7)] sm:px-10 sm:py-12 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Skontaktuj się z nami
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Dobierzemy rozwiązanie dopasowane do Twojej inwestycji
                </h2>
                <div className="mt-6 space-y-4">
                  {closing.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-200">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-7 text-slate-200">
                  Napisz do nas, a przygotujemy rekomendację, harmonogram działań i zakres wsparcia dla Twojej instalacji.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-400"
                >
                  Porozmawiaj o realizacji
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
