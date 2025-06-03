
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PencilRuler, Menu, X } from "lucide-react";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-cyberpunk-darker/80 backdrop-blur-md py-3 shadow-lg" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2" title="AI Coloring Book Generator - Free AI Tools by AiWebTools.Ai">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink">
              <PencilRuler className="w-6 h-6 text-white" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink opacity-50 blur-sm"></div>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg md:text-xl text-white">AI Coloring Book Generator</h1>
              <p className="text-xs text-gray-400 -mt-1">Free AI Tools by AiWebTools.Ai</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-cyberpunk-purple transition-colors"
              title="Generate Free AI Coloring Book - Best AI Tools"
            >
              CREATE FREE AI COLORING BOOK
            </a>
            <button 
              className="text-white font-medium hover:text-cyberpunk-purple transition-colors"
              onClick={() => scrollToSection("faq")}
              title="AI Tools FAQ - Free AI Web Tools"
            >
              FAQ
            </button>
            <button
              className="text-white font-medium hover:text-cyberpunk-purple transition-colors"
              onClick={() => scrollToSection("disclaimer")}
              title="AI Tools Disclaimer"
            >
              Disclaimer
            </button>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-cyberpunk-purple transition-colors"
              title="AiWebTools.Ai - More Free AI Tools and AI Web Tools"
            >
              More Free AI Tools
            </a>
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
              title="Start Creating Free AI Coloring Books Now"
            >
              Start Creating
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu for AI tools navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-cyberpunk-darker z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ paddingTop: "5rem" }}
      >
        <nav className="flex flex-col items-center gap-6 p-6">
          <a 
            href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-cyberpunk-purple transition-colors text-lg"
            onClick={toggleMobileMenu}
            title="Generate Free AI Coloring Book"
          >
            CREATE FREE AI COLORING BOOK
          </a>
          <button 
            className="text-white font-medium hover:text-cyberpunk-purple transition-colors text-lg"
            onClick={() => {
              scrollToSection("faq");
              toggleMobileMenu();
            }}
            title="AI Tools FAQ"
          >
            FAQ
          </button>
          <button 
            className="text-white font-medium hover:text-cyberpunk-purple transition-colors text-lg"
            onClick={() => {
              scrollToSection("disclaimer");
              toggleMobileMenu();
            }}
            title="AI Tools Disclaimer"
          >
            Disclaimer
          </button>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-cyberpunk-purple transition-colors text-lg"
            onClick={toggleMobileMenu}
            title="AiWebTools.Ai - More Free AI Tools"
          >
            More Free AI Tools
          </a>
          <a 
            href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button mt-4"
            onClick={toggleMobileMenu}
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
