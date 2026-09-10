import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { companyData } from "../data/companyData";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 w-full pt-32 pb-24 bg-[#0B1220] text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>

        {/* Title */}
        <div className="border-b border-slate-800 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Condiciones Contractuales</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Términos y Condiciones del Servicio
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Regulación del acceso al sitio web y marco general de contratación de servicios comerciales.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-[#0F172A] p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-3">1. Información de la Empresa</h2>
            <p className="mb-2">
              Este sitio web es operado y administrado por:
            </p>
            <ul className="space-y-1 text-slate-300 font-mono text-xs sm:text-sm">
              <li><strong>Entidad:</strong> {companyData.name}</li>
              <li><strong>NIT:</strong> {companyData.nit}</li>
              <li><strong>Domicilio Principal:</strong> {companyData.address}, {companyData.city}</li>
              <li><strong>Contacto:</strong> {companyData.email} | {companyData.phoneDisplay}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Aceptación de los Términos</h2>
            <p>
              Al navegar, interactuar o remitir información a través de {companyData.domain}, el usuario declara haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones. Si no está de acuerdo con las disposiciones aquí contenidas, deberá abstenerse de hacer uso del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Naturaleza de los Servicios</h2>
            <p className="mb-3">
              {companyData.name} presta servicios profesionales de consultoría y desarrollo en las áreas de:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Marketing digital y adquisición de clientes",
                "Growth marketing y optimización de embudos",
                "Transformación digital y flujos de negocio",
                "Soluciones de inteligencia artificial para productividad",
                "Diseño y desarrollo de páginas web y landing pages",
                "Tiendas online y comercio electrónico",
                "Estrategia digital integral",
                "Diagnóstico de presencia digital"
              ].map((serv, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0F172A] border border-slate-800 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{serv}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-400">
              Cada proyecto o servicio contratado se regirá por su respectiva propuesta técnico-comercial o contrato específico, donde se estipularán alcances, cronogramas, precios y entregables acordados entre las partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos, marcas comerciales, logotipos, diseños, código fuente, textos, imágenes y elementos visuales presentes en este portal son de propiedad exclusiva de {companyData.name} o de sus respectivos titulares de derechos, encontrándose amparados por las leyes de propiedad industrial y derechos de autor vigentes en Colombia y tratados internacionales. Queda prohibida su reproducción no autorizada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Uso Adecuado del Sitio Web</h2>
            <p className="mb-2">El usuario se compromete a hacer un uso lícito del portal web y en particular a:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li>No suministrar datos falsos, inexactos o de terceros sin su consentimiento.</li>
              <li>No introducir virus, software malicioso o realizar ataques de denegación de servicio.</li>
              <li>No intentar vulnerar las medidas de seguridad del servidor o las aplicaciones asociadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Legislación y Jurisdicción Aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen e interpretan bajo las leyes de la República de Colombia. Cualquier controversia, desacuerdo o reclamación derivada de su uso o interpretación será dirimida prioritariamente mediante arreglo directo y, en su defecto, ante la jurisdicción ordinaria de la ciudad de Medellín, Antioquia.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
