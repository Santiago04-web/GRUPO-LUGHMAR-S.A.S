import React, { useState } from "react";
import {
  Megaphone,
  TrendingUp,
  Cpu,
  Bot,
  Layout,
  ShoppingBag,
  Compass,
  Activity,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    Megaphone: <Megaphone className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />,
    Bot: <Bot className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />,
    Layout: <Layout className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />,
    Compass: <Compass className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />,
    Activity: <Activity className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
  };

  return (
    <section id="servicios" className="py-24 md:py-32 relative bg-[#0B1220] tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Servicios Profesionales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Lo que hacemos
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Soluciones integrales de consultoría, desarrollo e inteligencia artificial diseñadas específicamente para impulsar la competitividad de las PyMEs.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0F172A] rounded-2xl p-6 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/40 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 group-hover:bg-blue-600/10 transition-all">
                    {iconMap[service.icon]}
                  </div>
                  <span className="p-1.5 rounded-lg text-slate-400 group-hover:text-blue-300 group-hover:bg-blue-500/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  {service.category}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Action Hint */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                <span>Ver alcance y detalles</span>
                <span className="font-semibold text-blue-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
