import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { companyData } from "../data/companyData";

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Marco Legal Colombia</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Última actualización: Septiembre de 2026 • En cumplimiento de la Ley 1581 de 2012 y Decreto 1377 de 2013 de la República de Colombia.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          
          <section className="bg-[#0F172A] p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-3">1. Identificación del Responsable del Tratamiento</h2>
            <p className="mb-3">
              El responsable del tratamiento de sus datos personales es:
            </p>
            <ul className="space-y-1.5 text-slate-300 font-mono text-xs sm:text-sm">
              <li><strong>Razón Social:</strong> {companyData.name}</li>
              <li><strong>NIT:</strong> {companyData.nit}</li>
              <li><strong>Dirección:</strong> {companyData.address}, {companyData.city}</li>
              <li><strong>Teléfono:</strong> {companyData.phoneDisplay}</li>
              <li><strong>Correo electrónico:</strong> {companyData.email}</li>
              <li><strong>Portal Web:</strong> {companyData.domain}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Alcance y Finalidad de la Recolección</h2>
            <p className="mb-3">
              {companyData.name} recolecta y trata los datos personales que los usuarios suministran de manera voluntaria a través de nuestros canales de contacto (formularios web, WhatsApp, llamadas y correo electrónico) con las siguientes finalidades exclusivas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Atender, gestionar y responder solicitudes de cotización, diagnóstico y asesoría comercial.</li>
              <li>Establecer contacto para la estructuración y ejecución de propuestas de marketing, desarrollo web, growth e inteligencia artificial.</li>
              <li>Cumplir con las obligaciones contractuales, contables y tributarias derivadas de la prestación de servicios empresariales.</li>
              <li>Remitir comunicaciones de servicio, actualizaciones operativas y acuerdos acordados con el cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Derechos de los Titulares (Habeas Data)</h2>
            <p className="mb-3">
              De conformidad con el artículo 8 de la Ley 1581 de 2012, usted como titular de datos personales tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Conocer, actualizar y rectificar sus datos personales frente a {companyData.name}.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informado respecto del uso que se le ha dado a sus datos personales.</li>
              <li>Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a la ley.</li>
              <li>Revocar la autorización o solicitar la supresión de sus datos cuando en el tratamiento no se respeten los principios y derechos constitucionales y legales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Procedimiento para Consultas y Reclamos</h2>
            <p className="mb-3">
              Para ejercer cualquiera de sus derechos, el titular podrá enviar una solicitud formal por escrito al correo electrónico oficial:
            </p>
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-200 text-sm">
              <strong>Correo oficial de atención:</strong>{" "}
              <a href={`mailto:${companyData.email}`} className="underline hover:text-white">
                {companyData.email}
              </a>
              <div className="text-xs text-slate-400 mt-1">
                La solicitud deberá contener nombre completo, número de identificación, descripción clara de los hechos y canal de notificación. Será atendida en un plazo máximo de quince (15) días hábiles conforme a la legislación colombiana.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Seguridad de la Información</h2>
            <p>
              {companyData.name} adopta las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado. No vendemos, transferimos ni comercializamos bases de datos con terceros para fines ajenos a la relación comercial directa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Vigencia de la Política</h2>
            <p>
              La presente política rige a partir de su publicación en el sitio web y permanecerá vigente durante el tiempo necesario para el desarrollo de las actividades comerciales y el cumplimiento de las obligaciones legales aplicables.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
