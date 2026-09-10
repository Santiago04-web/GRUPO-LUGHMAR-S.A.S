import React from "react";
import { Globe, ShoppingCart, LayoutTemplate, Sparkles, Smartphone, Check } from "lucide-react";
import { companyData } from "../data/companyData";

export default function DigitalExperience() {
  const { title, subtitle, items } = companyData.digitalExperience;

  return (
    <section className="py-24 md:py-32 relative bg-[#0B1220] tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Infraestructura Digital</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Items Cards (Left) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Abstract Modern UI Mockup (Right) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-700/80 p-5 sm:p-6 shadow-2xl shadow-blue-950/60 relative overflow-hidden">
              
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="px-4 py-1 rounded-md bg-[#0B1220] border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>https://tuempresa.com/</span>
                </div>
                <Smartphone className="w-4 h-4 text-slate-500" />
              </div>

              {/* Mockup Internal Layout */}
              <div className="space-y-4">
                {/* Hero block simulation */}
                <div className="rounded-xl bg-[#0B1220] p-5 border border-slate-800 text-left relative overflow-hidden">
                  <div className="w-24 h-4 rounded bg-blue-500/30 mb-3 animate-pulse"></div>
                  <div className="w-3/4 h-6 rounded bg-slate-700/60 mb-2"></div>
                  <div className="w-1/2 h-3 rounded bg-slate-800 mb-4"></div>
                  <div className="flex gap-2">
                    <div className="w-28 h-8 rounded-lg bg-blue-600/80"></div>
                    <div className="w-24 h-8 rounded-lg bg-slate-800 border border-slate-700"></div>
                  </div>
                </div>

                {/* 3 cards row simulation */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#0B1220] border border-slate-800 text-left">
                    <div className="w-6 h-6 rounded bg-sky-500/20 mb-2 flex items-center justify-center">
                      <LayoutTemplate className="w-3 h-3 text-sky-400" />
                    </div>
                    <div className="w-14 h-2.5 rounded bg-slate-700 mb-1"></div>
                    <div className="w-full h-2 rounded bg-slate-800"></div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0B1220] border border-slate-800 text-left">
                    <div className="w-6 h-6 rounded bg-blue-500/20 mb-2 flex items-center justify-center">
                      <ShoppingCart className="w-3 h-3 text-blue-400" />
                    </div>
                    <div className="w-14 h-2.5 rounded bg-slate-700 mb-1"></div>
                    <div className="w-full h-2 rounded bg-slate-800"></div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0B1220] border border-slate-800 text-left">
                    <div className="w-6 h-6 rounded bg-emerald-500/20 mb-2 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="w-14 h-2.5 rounded bg-slate-700 mb-1"></div>
                    <div className="w-full h-2 rounded bg-slate-800"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
