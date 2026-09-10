import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B1220] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-y-condiciones" element={<TermsConditions />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  );
}
