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
    { href: "/agregaty", label: "Agregaty" },
    { href: "/galeria", label: "Galeria" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <div style={{ paddingTop: isScrolled ? navbarRef.current?.clientHeight ?? 0 : 0 }} />
      <nav
        ref={navbarRef}
        className={`w-full z-50 transition-all duration-300 ${isScrolled
            ? "fixed top-0 left-0 right-0 bg-white shadow-lg"
            : "absolute top-0 left-0 right-0 bg-transparent"
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
              <span className={`text-lg font-bold ${isScrolled ? "text-blue-700" : "text-white"}`}>agregatypradu.pl</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 text-sm ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${isScrolled
                    ? "bg-[#e5740e] hover:bg-[#cf650c] text-white"
                    : "bg-[#e5740e]/90 hover:bg-[#cf650c] text-white border border-[#e5740e]"
                  }`}
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
              <span className={`block w-6 h-0.5 ${isScrolled ? "bg-gray-700" : "bg-white"} transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 ${isScrolled ? "bg-gray-700" : "bg-white"} transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 ${isScrolled ? "bg-gray-700" : "bg-white"} transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-[#e5740e] hover:bg-[#cf650c] text-white text-center px-5 py-2.5 rounded-full font-medium mt-2 transition-colors duration-200"
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
