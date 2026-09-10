import React from "react";
import { X, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  const whatsappInquiryUrl = `https://wa.me/573104469045?text=Hola%20Grupo%20Lughmar%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(service.title)}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/80 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus:outline-none"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-4">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {service.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Key Highlights */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Alcance y Entregables Clave
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/50 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-800">
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            Asesoría personalizada para PyMEs
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex-1 sm:flex-initial"
            >
              Cerrar
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all flex-1 sm:flex-initial"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar este servicio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
