
import React from "react";
import { PencilRuler, ExternalLink, Phone, Mail } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="relative pt-20 pb-6 bg-cyberpunk-darker border-t border-white/10">
      {/* Background decorations */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-cyberpunk-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-60 h-60 bg-cyberpunk-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          {/* Column 1 - About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink">
                <PencilRuler className="w-6 h-6 text-white" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink opacity-50 blur-sm"></div>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Coloring Book Generator</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Create beautiful, customized coloring books in minutes with our advanced AI technology.
            </p>
            <p className="text-sm text-gray-400">
              Powered by GPT-4o and DALLE
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <span>Generate a Coloring Book</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("disclaimer")}
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <span>More AI Tools</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <span>Terms of Service</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* More AI Tools button */}
        <div className="relative">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute right-0 bottom-10 glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20 flex items-center gap-2"
          >
            <span className="text-white font-medium">More AI Tools</span>
            <ExternalLink className="w-4 h-4 text-cyberpunk-pink" />
          </a>
        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-sm"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyberpunk-purple text-sm transition-colors"
            >
              Generate a Coloring Book Now
            </a>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-gray-400 hover:text-cyberpunk-purple text-sm transition-colors"
            >
              FAQ
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => scrollToSection("disclaimer")}
              className="text-gray-400 hover:text-cyberpunk-purple text-sm transition-colors"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
