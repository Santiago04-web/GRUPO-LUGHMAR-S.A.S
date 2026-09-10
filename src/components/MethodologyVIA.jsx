import React from "react";
import { Eye, MousePointerClick, Target, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function MethodologyVIA() {
  const { title, subtitle, phases } = companyData.methodologyVIA;

  const viaIcons = {
    V: <Eye className="w-7 h-7 text-blue-400" />,
    I: <MousePointerClick className="w-7 h-7 text-sky-400" />,
    A: <Target className="w-7 h-7 text-emerald-400" />
  };

  return (
    <section id="metodo-via" className="py-24 md:py-32 relative bg-[#0F172A] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Marco Metodológico
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* 3 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div
              key={phase.code}
              className="relative rounded-2xl p-8 bg-[#0B1220] border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/40 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Header with Letter Code badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-colors">
                    {viaIcons[phase.code]}
                  </div>
                  <span className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-extrabold text-blue-400 text-lg">
                    {phase.code}
                  </span>
                </div>

                <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest mb-1">
                  {phase.concept}
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {phase.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-300 transition-colors">
                <span>Pilar del Método V.I.A.</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
