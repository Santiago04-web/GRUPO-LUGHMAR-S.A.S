import React from "react";
import { ArrowRight, MessageSquare, TrendingUp, Cpu, Layers, ShieldCheck, Activity } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center tech-grid tech-radial-glow overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LADO IZQUIERDO: Texto y CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>GRUPO LUGHMAR S.A.S. • Estrategia & Tecnología</span>
            </div>

            {/* H1 Principal */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Impulsamos el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-600">
                crecimiento digital
              </span>{" "}
              de las PyMEs.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Marketing, tecnología, estrategia e inteligencia artificial para transformar negocios.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40 border border-blue-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Hablar con un asesor</span>
              </a>
            </div>

            {/* Real corporate reassurance bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Empresa legalmente constituida</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Soluciones aplicadas a PyMEs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Medellín, Colombia</span>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Composición visual inspirada en la portada corporativa */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Central Glowing Card Container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800/40 to-blue-900/20 shadow-2xl shadow-blue-950/60 overflow-hidden group">
                <div className="relative bg-[#0F172A] rounded-xl p-6 overflow-hidden border border-slate-800">
                  
                  {/* Subtle Background Cover Texture Layer */}
                  <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
                    <img
                      src="/assets/images/cover-lughmar.jpg"
                      alt="Identidad Grupo Lughmar"
                      className="w-full h-full object-cover object-right"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent pointer-events-none" />

                  {/* Header of the abstract tech interface */}
                  <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-sky-400/60"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <span className="text-xs font-mono text-slate-400 ml-2">SISTEMA • GRUPO LUGHMAR</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono border border-blue-500/30">
                      LIVE OPS
                    </span>
                  </div>

                  {/* Abstract Graph & Growth Vector */}
                  <div className="relative z-10 my-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Crecimiento Digital</span>
                        <div className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                          <span>Estrategia 360°</span>
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                        </div>
                      </div>
                      <span className="text-xs text-sky-400 font-mono bg-sky-950/60 px-2 py-1 rounded border border-sky-800/50">
                        Proceso Continuo
                      </span>
                    </div>

                    {/* SVG Data Curve Inspired by Cover */}
                    <div className="w-full h-36 relative mt-4">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1677FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0B5ED7" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#0B5ED7" />
                            <stop offset="50%" stopColor="#1677FF" />
                            <stop offset="100%" stopColor="#38BDF8" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="300" y2="30" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />
                        <line x1="0" y1="70" x2="300" y2="70" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />
                        <line x1="0" y1="110" x2="300" y2="110" stroke="#334155" strokeWidth="0.5" />

                        {/* Area fill */}
                        <path
                          d="M0,110 C50,100 80,85 130,65 C180,45 220,50 300,10 L300,120 L0,120 Z"
                          fill="url(#curveGradient)"
                        />
                        
                        {/* Upward Line */}
                        <path
                          d="M0,110 C50,100 80,85 130,65 C180,45 220,50 300,10"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Data Nodes */}
                        <circle cx="65" cy="92" r="4" fill="#1677FF" stroke="#0F172A" strokeWidth="2" />
                        <circle cx="130" cy="65" r="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
                        <circle cx="210" cy="52" r="4" fill="#1677FF" stroke="#0F172A" strokeWidth="2" />
                        <circle cx="300" cy="10" r="5" fill="#38BDF8" className="animate-ping" opacity="0.75" />
                        <circle cx="300" cy="10" r="5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Operational Pillar Badges */}
                  <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-blue-600/20 flex items-center justify-center text-blue-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Tecnología & IA</div>
                        <div className="text-xs font-bold text-white">Automatización</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-sky-600/20 flex items-center justify-center text-sky-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Presencia Digital</div>
                        <div className="text-xs font-bold text-white">Conversión</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Mini Card Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 p-3.5 rounded-xl bg-[#0B1220]/95 border border-blue-500/40 shadow-xl shadow-black/70 items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold">
                  GL
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Estrategia + Tecnología</div>
                  <div className="text-[11px] text-blue-300">PyMEs en Medellín y Colombia</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
