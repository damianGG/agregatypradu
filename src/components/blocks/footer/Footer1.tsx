import Link from "next/link";
import footerNav from "@/data/footer";

export default function Footer1() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="bg-blue-800 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white max-w-xl">
            Umów się na darmową konsultację, znajdziemy rozwiązanie dla Ciebie.
          </h3>
          <Link
            href="/kontakt"
            className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors duration-200"
          >
            Kontakt
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-blue-800 pt-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl text-white mb-2">agregatypradu.pl</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              © 2024 agregatypradu.pl<br />All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Zostańmy w kontakcie</h4>
            <address className="text-blue-200 text-sm not-italic leading-relaxed">
              Sielec 1A, 39-120 Sędziszów Młp. Poland
            </address>
            <Link href="mailto:biuro@agregatypradu.pl" className="text-blue-300 hover:text-white text-sm block mt-2 transition-colors">
              biuro@agregatypradu.pl
            </Link>
            <p className="text-blue-200 text-sm mt-1">+48 606 392 657</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Dowiedz się więcej</h4>
            <ul className="space-y-2">
              {footerNav.map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-blue-200 text-sm mb-4">Subskrybuj nasz newsletter by być na bieżąco z nowościami.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Twój e-mail"
                className="flex-1 px-3 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 text-sm focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
