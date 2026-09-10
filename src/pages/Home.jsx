import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import Services from "../components/Services";
import GrowthSection from "../components/GrowthSection";
import AISection from "../components/AISection";
import MethodologyVIA from "../components/MethodologyVIA";
import DigitalExperience from "../components/DigitalExperience";
import SMEFocus from "../components/SMEFocus";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="flex-1 w-full">
      <Hero />
      <ValueProposition />
      <Services />
      <GrowthSection />
      <AISection />
      <MethodologyVIA />
      <DigitalExperience />
      <SMEFocus />
      <CTASection />
      <ContactSection />
    </main>
  );
}
