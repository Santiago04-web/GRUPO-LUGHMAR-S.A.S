import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Building, Send, Check } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ContactSection() {
  const [userMsg, setUserMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hola Grupo Lughmar, soy ${userName || "un empresario"}${userCompany ? ` de la empresa ${userCompany}` : ""}. Consulta: ${userMsg || "Deseo información sobre sus servicios."}`;
    window.open(`https://wa.me/573104469045?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative bg-[#0F172A] border-t border-slate-800/80 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Canales Oficiales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Información de Contacto
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Estamos disponibles para analizar el estado digital de tu negocio y estructurar un plan de trabajo claro.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Corporate Details Card (Left) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="rounded-2xl bg-[#0B1220] border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {companyData.name}
                  </h3>
                  <div className="text-xs font-mono text-blue-400 font-semibold mt-0.5">
                    NIT: {companyData.nit}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ubicación</span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {companyData.address}
                    </p>
                    <p className="text-xs text-slate-400">
                      {companyData.city}
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 shrink-0">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Teléfono / Línea Directa</span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      <a href={`tel:${companyData.phone}`} className="hover:text-blue-400 transition-colors">
                        {companyData.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Correo */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Correo Electrónico</span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      <a href={`mailto:${companyData.email}`} className="hover:text-blue-400 transition-colors">
                        {companyData.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Canal WhatsApp Oficial</span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      <a
                        href={companyData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Iniciar chat directo (+57 310 446 9045)</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Direct Message Form to WhatsApp (Right) */}
          <div className="lg:col-span-6 text-left">
            <div className="rounded-2xl bg-[#0B1220] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Envíanos un mensaje directo
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Completa este breve formulario y serás redirigido directamente a nuestro canal oficial de WhatsApp con tu consulta estructurada.
              </p>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Tu Nombre o Cargo
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ej. Juan Gómez / Gerente"
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nombre de tu Empresa (Opcional)
                  </label>
                  <input
                    type="text"
                    value={userCompany}
                    onChange={(e) => setUserCompany(e.target.value)}
                    placeholder="Ej. Comercializadora del Norte"
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    placeholder="Describe brevemente tus objetivos: desarrollo web, pauta digital, optimización con IA, etc."
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar consulta vía WhatsApp</span>
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Atención directa y confidencialidad garantizada.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
