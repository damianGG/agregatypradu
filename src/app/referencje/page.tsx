import type { Metadata } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Referencje | agregatypradu.pl",
  description: "Referencje klientów w formacie PDF.",
};

type ReferenceDocument = {
  id: string;
  href: string;
  title: string;
  description: string;
  sizeLabel: string;
};

const referencesDirectory = path.join(process.cwd(), "public", "referencje");

function formatTitle(fileName: string) {
  return fileName
    .replace(/\.pdf$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatFileSize(sizeInBytes: number) {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }

  if (sizeInBytes < 1024 * 1024) {
    return `${Math.round((sizeInBytes / 1024) * 10) / 10} KB`;
  }

  return `${Math.round((sizeInBytes / (1024 * 1024)) * 10) / 10} MB`;
}

async function getReferenceDocuments(): Promise<ReferenceDocument[]> {
  try {
    const entries = await fs.readdir(referencesDirectory, { withFileTypes: true });

    const documents = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === ".pdf")
        .map(async (entry) => {
          const filePath = path.join(referencesDirectory, entry.name);
          const stats = await fs.stat(filePath);

          return {
            id: entry.name,
            href: `/referencje/${encodeURIComponent(entry.name)}`,
            title: formatTitle(entry.name),
            description: "Dokument referencyjny w formacie PDF dostępny do podglądu i pobrania.",
            sizeLabel: formatFileSize(stats.size),
          };
        })
    );

    return documents.sort((first, second) => first.title.localeCompare(second.title, "pl"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function PdfIcon({ className = "h-16 w-16 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 6h16l14 14v30a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M36 6v14h14M20 6h16l14 14v30a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 44h5.5a4.5 4.5 0 1 0 0-9H21v18m0-9h5m7-9h4.5a4.5 4.5 0 0 1 0 9H33m0-9v18m11-18h5l-5 18h-1l-5-18h5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ReferencjePage() {
  const documents = await getReferenceDocuments();

  return (
    <>
      <section
        aria-label="Referencje klientów"
        className="relative min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Referencje</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Zobacz dokumenty PDF potwierdzające nasze realizacje i współpracę z klientami.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Dokumenty PDF
            </span>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Każda referencja jest dostępna jako osobny plik PDF. Kliknij wybraną kartę, aby
              otworzyć dokument w nowej karcie i pobrać go na swoje urządzenie.
            </p>
          </div>

          {documents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {documents.map((document) => (
                <a
                  key={document.id}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-100 sm:aspect-[4/3]">
                    <div className="absolute inset-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg sm:inset-4">
                      <iframe
                        src={`${document.href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={`Podgląd dokumentu ${document.title}`}
                        className="pointer-events-none h-full w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/15 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-blue-700/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur">
                      <PdfIcon className="h-5 w-5 text-white" />
                      PDF
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                      Podgląd dokumentu
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                      PDF • {document.sizeLabel}
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
                      {document.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {document.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-transform duration-300 group-hover:translate-x-1">
                      Otwórz dokument
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50 px-6 py-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Brak dodanych referencji</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Gdy pliki PDF zostaną dodane do katalogu
                <span className="mx-1 rounded bg-white px-2 py-1 font-semibold text-blue-700">
                  public/referencje
                </span>
                pojawią się tutaj automatycznie jako galeria dokumentów.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
