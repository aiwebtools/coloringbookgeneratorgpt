
import React from "react";
import { PencilRuler, ExternalLink, Phone, Mail } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-6 bg-cyberpunk-darker border-t border-white/10">
      {/* Background decorations */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-cyberpunk-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-60 h-60 bg-cyberpunk-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10">
          {/* Column 1 - About with SEO content */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink">
                <PencilRuler className="w-6 h-6 text-white" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink opacity-50 blur-sm"></div>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">AiWebTools.Ai</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              The #1 source for free AI tools and AI web applications. Create beautiful, customized coloring books and more with our advanced AI technology.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Best Free AI Tools:</strong> AI Coloring Book Generator, AI Art Tools, Educational AI Applications
            </p>
            <p className="text-sm text-gray-400">
              Powered by GPT-5 Image Generation • 100% Free AI Tools
            </p>
          </div>
          
          {/* Column 2 - Quick Links with SEO titles */}
          <div>
            <h3 className="font-semibold text-white mb-6">Free AI Tools</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                  title="Free AI Coloring Book Generator - Best AI Tools"
                >
                  <span>AI Coloring Book Generator</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                  title="FAQ about Free AI Tools"
                >
                  AI Tools FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("disclaimer")}
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                  title="AI Tools Usage Disclaimer"
                >
                  AI Tools Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href={AIWEBTOOLS_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                  title="AiWebTools.Ai - More Free AI Tools and AI Web Applications"
                >
                  <span>More Free AI Web Tools</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div>
            <h3 className="font-semibold text-white mb-6">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                  title="AI Tools Privacy Policy"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href={AIWEBTOOLS_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                  title="AiWebTools.Ai Terms of Service"
                >
                  <span>Terms of Service</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contact AI Web Tools</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                  title="Call AiWebTools.Ai Support"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                  title="Email AiWebTools.Ai for AI Tools Support"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* More AI Tools button */}
        <div className="relative mb-12 sm:mb-0">
          <a 
            href={AIWEBTOOLS_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="block sm:absolute sm:right-0 sm:bottom-10 glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
            title="Discover More Free AI Tools at AiWebTools.Ai"
          >
            <span className="text-white font-medium">Explore More AI Tools</span>
            <ExternalLink className="w-4 h-4 text-cyberpunk-pink" />
          </a>
        </div>
        
        {/* Bottom copyright with SEO content */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyberpunk-purple transition-colors"
              title="AiWebTools.Ai - Leading Provider of Free AI Tools"
            >
              © 2025 AI WEB TOOLS LLC - AiWebTools.Ai
            </a>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            <span>Leading Provider of Free AI Tools & AI Web Applications</span>
          </div>
          
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyberpunk-purple text-sm transition-colors"
              title="Free AI Coloring Book Generator"
            >
              AI Coloring Book Generator
            </a>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-gray-400 hover:text-cyberpunk-purple text-sm transition-colors"
              title="AI Tools FAQ"
            >
              AI Tools FAQ
            </button>
            <span className="text-gray-600">|</span>
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyberpunk-purple text-sm transition-colors"
              title="More Free AI Tools by AiWebTools.Ai"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
