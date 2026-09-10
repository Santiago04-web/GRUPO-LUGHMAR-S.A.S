import React, { useState } from "react";
import { Search, Compass, Cog, Gauge, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function GrowthSection() {
  const { title, subtitle, steps } = companyData.growthSection;
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Search className="w-5 h-5 text-blue-400" />,
    <Compass className="w-5 h-5 text-sky-400" />,
    <Cog className="w-5 h-5 text-indigo-400" />,
    <Gauge className="w-5 h-5 text-cyan-400" />,
    <TrendingUp className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="crecimiento" className="py-24 md:py-32 relative bg-[#0F172A] border-y border-slate-800/80 tech-radial-glow overflow-hidden">
      
      {/* Background decoration lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Ruta de Escalabilidad
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Step Flow Pipeline (Desktop: Horizontal Timeline / Mobile: Vertical) */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-600/30 via-sky-500/50 to-emerald-500/50 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, index) => {
              const isCurrent = activeStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between text-left ${
                    isCurrent
                      ? "bg-[#0B1220] border-2 border-blue-500 shadow-xl shadow-blue-950/60 scale-105"
                      : "bg-[#0B1220]/70 border border-slate-800 hover:border-slate-700 hover:bg-[#0B1220]"
                  }`}
                >
                  <div>
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                        isCurrent
                          ? "bg-blue-600/20 border-blue-400 shadow-md shadow-blue-500/20"
                          : "bg-slate-800/80 border-slate-700"
                      }`}>
                        {stepIcons[index]}
                      </div>
                      <span className={`font-mono text-sm font-bold ${
                        isCurrent ? "text-blue-400" : "text-slate-500"
                      }`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-xl font-bold mb-2 tracking-tight ${
                      isCurrent ? "text-white" : "text-slate-200"
                    }`}>
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Progressive Indicator */}
                  <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className={isCurrent ? "text-blue-400 font-semibold" : "text-slate-500"}>
                      Fase {item.step}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden md:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Focus Card */}
        <div className="mt-12 bg-gradient-to-r from-blue-950/40 via-[#0B1220] to-slate-900/60 rounded-2xl p-6 sm:p-8 border border-blue-500/20 text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-blue-400 font-bold tracking-wider">
              Enfoque Operativo de GRUPO LUGHMAR
            </span>
            <h4 className="text-xl font-bold text-white">
              Crecimiento estructurado, medible y sin pasos en falso.
            </h4>
            <p className="text-sm text-slate-400 max-w-xl">
              No creemos en soluciones mágicas. Cada empresa requiere un diagnóstico previo para ejecutar solo las acciones que generarán rentabilidad.
            </p>
          </div>
          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 shrink-0 transition-all"
          >
            <span>Iniciar Diagnóstico</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
