import Link from "next/link";

export default function Hero19() {
  return (
    <section
      className="relative min-h-[1000px] flex items-center justify-center bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/img/photos/zdjecieWtle.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60" />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Moc, na którą możesz{" "}
            <span className="text-[#e5740e] underline decoration-[#e5740e]">liczyć</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed">
            Jesteśmy dystrybutorem agregatów prądotwórczych dużej mocy marki PlusPower
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agregaty"
              className="bg-[#e5740e] hover:bg-[#cf650c] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg"
            >
              Poznaj nasze agregaty
            </Link>
            <Link
              href="/kontakt"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
