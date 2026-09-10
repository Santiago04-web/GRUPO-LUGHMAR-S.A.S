import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function CTASection() {
  const { title, text, buttonText } = companyData.ctaBanner;

  return (
    <section className="py-20 md:py-28 relative bg-[#0B1220] tech-radial-glow overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-blue-900/40 via-[#0F172A] to-[#0B1220] border border-blue-500/30 shadow-2xl shadow-blue-950/80 text-center overflow-hidden">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/20 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span>GRUPO LUGHMAR S.A.S.</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {text}
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-xl shadow-blue-900/50 border border-blue-300/30 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Respuesta directa de nuestro equipo comercial • Medellín, Antioquia
          </p>

        </div>

      </div>
    </section>
  );
}
