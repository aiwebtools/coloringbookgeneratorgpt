
import React, { useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Memoize the scrollToSection function to prevent unnecessary re-renders
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-cyberpunk-darker text-white">
      <Header scrollToSection={scrollToSection} />
      
      <main className="flex-grow">
        <HeroSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
