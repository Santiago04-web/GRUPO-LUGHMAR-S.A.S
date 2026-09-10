import React from "react";
import { Bot, Cpu, Zap, Database, CheckCircle2, ArrowRight, Network } from "lucide-react";
import { companyData } from "../data/companyData";

export default function AISection() {
  const { title, subtitle, desc, features } = companyData.aiSection;

  return (
    <section id="ia-negocios" className="py-24 md:py-32 relative bg-[#0B1220] tech-grid overflow-hidden">
      
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>Tecnología Estratégica</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Side (Left: Abstract AI Pipeline & Interfaces) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header abstract bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-mono text-slate-400">FLUJO DE PROCESO INTELIGENTE</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  ACTIVO
                </span>
              </div>

              {/* Data Flow Simulation */}
              <div className="my-6 space-y-3">
                {/* Node 1 */}
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Entrada de Datos & Consultas</div>
                      <div className="text-[11px] text-slate-400">Canales web, formularios y mensajería</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">01 INGEST</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-5 bg-gradient-to-b from-blue-500 to-sky-400"></div>
                </div>

                {/* Node 2 */}
                <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/40 flex items-center justify-between shadow-lg shadow-blue-950/40">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-sky-300 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-blue-200">Procesamiento & Clasificación con IA</div>
                      <div className="text-[11px] text-blue-300/80">Filtrado inteligente, análisis y respuestas rápidas</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-blue-300 font-mono">02 MODEL</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-5 bg-gradient-to-b from-sky-400 to-emerald-500"></div>
                </div>

                {/* Node 3 */}
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Acción Operativa & Comercial</div>
                      <div className="text-[11px] text-slate-400">Optimización de tiempos y seguimiento a prospectos</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">03 OUTPUT</span>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Network className="w-4 h-4 text-blue-400" />
                <span>Integración práctica adaptada al ritmo de tu empresa.</span>
              </div>

            </div>
          </div>

          {/* Description & Features (Right) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Inteligencia artificial como palanca de productividad, no como ciencia ficción.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group"
              >
                <span>Consultar cómo implementar IA en tus operaciones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
