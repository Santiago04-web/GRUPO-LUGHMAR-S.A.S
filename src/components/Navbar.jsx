import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageSquare, PhoneCall, ArrowUpRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: isHomePage ? "#hero" : "/#hero" },
    { name: "Pilares", href: isHomePage ? "#pilares" : "/#pilares" },
    { name: "Servicios", href: isHomePage ? "#servicios" : "/#servicios" },
    { name: "Crecimiento", href: isHomePage ? "#crecimiento" : "/#crecimiento" },
    { name: "IA en Negocios", href: isHomePage ? "#ia-negocios" : "/#ia-negocios" },
    { name: "Método V.I.A.", href: isHomePage ? "#metodo-via" : "/#metodo-via" },
    { name: "PyMEs", href: isHomePage ? "#pymes" : "/#pymes" },
    { name: "Contacto", href: isHomePage ? "#contacto" : "/#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1220]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-[#0B1220]/60 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white/95 p-1 border border-blue-500/30 group-hover:border-blue-400 transition-colors shadow-sm">
              <img
                src="/assets/images/logo-lughmar.jpg"
                alt="Logo Grupo Lughmar"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold tracking-tight text-lg sm:text-xl leading-none font-sans">
                LUGHMAR
              </span>
              <span className="text-blue-400 text-[10px] tracking-[0.25em] font-semibold uppercase mt-0.5">
                GRUPO S.A.S.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border border-blue-400/30 shadow-md shadow-blue-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Hablar con un asesor</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 sm:hidden"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-200 hover:text-white hover:bg-slate-800/80 px-4 py-2.5 rounded-lg text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800/80">
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/40 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hablar con un asesor (WhatsApp)</span>
            </a>
            <div className="mt-3 text-center text-xs text-slate-400">
              NIT: {companyData.nit} • {companyData.city}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
