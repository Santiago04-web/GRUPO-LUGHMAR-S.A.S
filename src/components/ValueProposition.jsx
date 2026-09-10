import React from "react";
import { Compass, Megaphone, MonitorSmartphone, BrainCircuit, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ValueProposition() {
  const { title, subtitle, pillars } = companyData.valueProps;

  const pillarIcons = {
    estrategia: <Compass className="w-6 h-6 text-blue-400" />,
    marketing: <Megaphone className="w-6 h-6 text-sky-400" />,
    tecnologia: <MonitorSmartphone className="w-6 h-6 text-indigo-400" />,
    ia: <BrainCircuit className="w-6 h-6 text-cyan-400" />
  };

  return (
    <section id="pilares" className="py-20 md:py-28 relative bg-[#0B1220] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Nuestros Pilares de Acción
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative rounded-2xl p-6 bg-[#0F172A] border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/30 group flex flex-col justify-between"
            >
              <div>
                {/* Top bar with icon & index number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/20 transition-all">
                    {pillarIcons[pillar.id]}
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Statement */}
                <p className="text-sm font-medium text-slate-200 mb-3 leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Extended Details */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                <span>Eje estratégico</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
