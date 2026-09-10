import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, Shield } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070B14] border-t border-slate-800/90 text-slate-400 text-left pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (lg: 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/95 p-1 border border-blue-500/30 group-hover:border-blue-400 transition-colors">
                <img
                  src="/assets/images/logo-lughmar.jpg"
                  alt="Logo Grupo Lughmar"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold tracking-tight text-lg leading-none">
                  {companyData.shortName}
                </span>
                <span className="text-blue-400 text-[10px] tracking-[0.2em] font-semibold uppercase mt-0.5">
                  S.A.S.
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm font-medium">
              {companyData.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Consultora y agencia empresarial enfocada en impulsar el crecimiento sostenible de las PyMEs mediante estrategia, tecnología, marketing digital e inteligencia artificial.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400">
              NIT {companyData.nit}
            </div>
          </div>

          {/* Navigation Links (lg: 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#hero" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="/#pilares" className="hover:text-white transition-colors">Nosotros (Pilares)</a>
              </li>
              <li>
                <a href="/#metodo-via" className="hover:text-white transition-colors">Metodología V.I.A.</a>
              </li>
              <li>
                <a href="/#pymes" className="hover:text-white transition-colors">Enfoque PyME</a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Legal & Corporate Info (lg: 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Datos Corporativos & Legal
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{companyData.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors">
                  {companyData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>

            <div className="pt-4 flex flex-col space-y-2 text-xs">
              <Link
                to="/politica-privacidad"
                className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Política de Privacidad y Tratamiento de Datos</span>
              </Link>
              <Link
                to="/terminos-y-condiciones"
                className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Términos y Condiciones</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {companyData.name} - NIT {companyData.nit}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Medellín, Colombia</span>
            <span>•</span>
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              WhatsApp Oficial
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
