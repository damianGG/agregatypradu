"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoPower from "../../../../../public/img/power.svg";

export default function NavbarOne() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/o-nas", label: "O nas" },
    { href: "/oferta", label: "Oferta" },
    { href: "/agregaty/agregat-pluspower-120-kw", label: "Agregaty" },
    { href: "/galeria", label: "Galeria" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <div style={{ paddingTop: isScrolled ? navbarRef.current?.clientHeight ?? 0 : 0 }} />
      <nav
        ref={navbarRef}
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white shadow-lg"
            : "absolute top-0 left-0 right-0 bg-white/95 shadow-sm backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src={LogoPower}
                alt="logo agregatyprady.pl"
                style={{ width: 40, height: 40 }}
              />
              <span className="text-lg font-bold text-blue-900">agregatypradu.pl</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-800 hover:text-blue-700 font-medium transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full font-medium transition-colors duration-200 text-sm"
              >
                Zapytaj o ofertę
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-slate-100 py-2 font-medium text-slate-800 transition-colors hover:text-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-2 rounded-full bg-blue-700 px-5 py-2.5 text-center font-medium text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Zapytaj o ofertę
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
