
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PencilRuler, Menu, X } from "lucide-react";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
    closeMobileMenu();
  }, [scrollToSection, closeMobileMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-cyberpunk-darker/80 backdrop-blur-md py-2 sm:py-3 shadow-lg" : "py-3 sm:py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 min-w-0" title="AI Coloring Book Generator - Free AI Tools by AiWebTools.Ai">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink">
              <PencilRuler className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink opacity-50 blur-sm"></div>
            </div>
            <div className="min-w-0">
              <h1 className="font-heading font-bold text-sm sm:text-lg md:text-xl text-white truncate">AI Coloring Book Generator</h1>
              <p className="text-[10px] sm:text-xs text-gray-400 -mt-0.5 sm:-mt-1 truncate">Free AI Tools by AiWebTools.Ai</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm xl:text-base font-medium hover:text-cyberpunk-purple transition-colors whitespace-nowrap"
              title="Generate Free AI Coloring Book - Best AI Tools"
            >
              CREATE FREE AI COLORING BOOK
            </a>
            <button 
              className="text-white text-sm xl:text-base font-medium hover:text-cyberpunk-purple transition-colors"
              onClick={() => scrollToSection("faq")}
              title="AI Tools FAQ - Free AI Web Tools"
            >
              FAQ
            </button>
            <button
              className="text-white text-sm xl:text-base font-medium hover:text-cyberpunk-purple transition-colors"
              onClick={() => scrollToSection("disclaimer")}
              title="AI Tools Disclaimer"
            >
              Disclaimer
            </button>
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm xl:text-base font-medium hover:text-cyberpunk-purple transition-colors whitespace-nowrap"
              title="AiWebTools.Ai - More Free AI Tools and AI Web Tools"
            >
              More Free AI Tools
            </a>
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button text-sm xl:text-base !py-3 !px-6"
              title="Start Creating Free AI Coloring Books Now"
            >
              Start Creating
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 -mr-2 active:scale-95 transition-transform touch-manipulation" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu for AI tools navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu - Slide-in drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[min(85vw,320px)] bg-cyberpunk-darker z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden shadow-2xl overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button 
            className="text-white p-2 active:scale-95 transition-transform touch-manipulation" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-1 px-6 pt-2">
          <a 
            href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-white font-medium hover:text-cyberpunk-purple active:text-cyberpunk-purple transition-colors text-base py-3 border-b border-white/10 touch-manipulation"
            onClick={closeMobileMenu}
            title="Generate Free AI Coloring Book"
          >
            CREATE FREE AI COLORING BOOK
          </a>
          <button 
            className="w-full text-left text-white font-medium hover:text-cyberpunk-purple active:text-cyberpunk-purple transition-colors text-base py-3 border-b border-white/10 touch-manipulation"
            onClick={() => handleNavClick("faq")}
            title="AI Tools FAQ"
          >
            FAQ
          </button>
          <button 
            className="w-full text-left text-white font-medium hover:text-cyberpunk-purple active:text-cyberpunk-purple transition-colors text-base py-3 border-b border-white/10 touch-manipulation"
            onClick={() => handleNavClick("disclaimer")}
            title="AI Tools Disclaimer"
          >
            Disclaimer
          </button>
          <a 
            href={AIWEBTOOLS_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-white font-medium hover:text-cyberpunk-purple active:text-cyberpunk-purple transition-colors text-base py-3 border-b border-white/10 touch-manipulation"
            onClick={closeMobileMenu}
            title="AiWebTools.Ai - More Free AI Tools"
          >
            More Free AI Tools
          </a>
          <a 
            href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button mt-6 w-full text-center"
            onClick={closeMobileMenu}
            title="Start Creating Free AI Coloring Books"
          >
            Start Creating
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
