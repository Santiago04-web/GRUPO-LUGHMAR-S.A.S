import React from "react";
import { MessageSquare } from "lucide-react";
import { companyData } from "../data/companyData";

export default function WhatsAppFloating() {
  return (
    <aside aria-label="Contacto flotante por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={companyData.whatsappDefaultMsg}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con un asesor de Grupo Lughmar"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm shadow-2xl shadow-emerald-950/80 border border-emerald-300/40 transition-all hover:scale-105 active:scale-95 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-white fill-white" />
        <span className="hidden sm:inline-block">Hablar con un asesor</span>
      </a>
    </aside>
  );
}
