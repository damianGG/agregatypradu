import Link from "next/link";
import footerNav from "@/data/footer";

export default function Footer1() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-900 p-8 lg:flex-row lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white max-w-xl">
            Umów się na darmową konsultację, znajdziemy rozwiązanie dla Ciebie.
          </h3>
          <Link
            href="/kontakt"
            className="whitespace-nowrap rounded-full bg-white px-8 py-3 font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-100"
          >
            Kontakt
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-slate-800 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl text-white mb-2">agregatypradu.pl</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              © 2024 agregatypradu.pl<br />All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Zostańmy w kontakcie</h4>
            <address className="text-slate-300 text-sm not-italic leading-relaxed">
              Sielec 1A, 39-120 Sędziszów Młp. Poland
            </address>
            <Link href="mailto:biuro@agregatypradu.pl" className="text-blue-300 hover:text-white text-sm block mt-2 transition-colors">
              biuro@agregatypradu.pl
            </Link>
            <p className="text-slate-300 text-sm mt-1">+48 606 392 657</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Dowiedz się więcej</h4>
            <ul className="space-y-2">
              {footerNav.map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-slate-300 text-sm mb-4">Subskrybuj nasz newsletter by być na bieżąco z nowościami.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Twój e-mail"
                className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
