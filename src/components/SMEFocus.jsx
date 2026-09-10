import React from "react";
import { Building2, CheckCircle2, Shield, Users, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function SMEFocus() {
  const { title, subtitle, points } = companyData.pymeSection;

  return (
    <section id="pymes" className="py-24 md:py-32 relative bg-[#0F172A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Enfoque en PyMEs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* 4 Value Pillars for SMEs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B1220] border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 shadow-lg text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pt.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed pl-11">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 mb-4">
            Atención personalizada desde Medellín para empresas de todo el país.
          </p>
          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Conversemos sobre los retos comerciales de tu empresa</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
