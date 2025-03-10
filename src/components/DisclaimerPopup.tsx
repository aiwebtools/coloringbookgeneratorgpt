
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleAccept = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onAccept();
    }, 300);
  };

  // Animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('disclaimer-popup')?.classList.add('opacity-100', 'translate-y-0');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div 
        id="disclaimer-popup"
        className={cn(
          "relative w-full max-w-md mx-4 p-6 rounded-2xl opacity-0 translate-y-4 transition-all duration-300",
          "shadow-neon-purple border border-cyberpunk-purple/30 neo-blur",
          { "opacity-0 translate-y-4": isClosing }
        )}
      >
        <button 
          onClick={handleAccept} 
          className="absolute top-3 right-3 p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        
        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="font-bold text-xl md:text-2xl text-gradient-primary">
            AI COLORING BOOK
          </h2>
          <p className="text-white/60 text-sm mt-1">
            User Agreement
          </p>
        </div>
        
        {/* Content */}
        <div className="space-y-4 mb-6 text-white/90 text-sm">
          <p>
            By using our AI Coloring Book Maker, you agree to the following:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Coloring pages are generated using AI technology for creative and educational purposes.</li>
            <li>You will use the generated content in compliance with copyright and intellectual property laws.</li>
            <li>AI-generated images may occasionally contain imperfections or unexpected elements.</li>
          </ul>
          
          <p className="text-white/70 text-xs italic">
            For full terms and conditions, please see our website terms of service.
          </p>
        </div>
        
        {/* Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleAccept}
            className="w-full py-6 relative overflow-hidden group bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-pink to-cyberpunk-blue font-bold text-white rounded-xl hover:shadow-neon-purple transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 font-bold tracking-wider text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              I AGREE
              <Sparkles className="w-5 h-5 text-white" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-pink to-cyberpunk-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
