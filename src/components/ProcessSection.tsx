
import React from "react";
import { 
  MessageSquare, 
  FileText, 
  Image, 
  FileDown,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-cyberpunk-purple" />,
      title: "Share Your Vision",
      description: "Describe your coloring book idea including theme, style, and number of pages."
    },
    {
      icon: <FileText className="w-8 h-8 text-cyberpunk-purple" />,
      title: "Review Outline",
      description: "Our AI creates a detailed outline for your custom coloring book for your approval."
    },
    {
      icon: <Image className="w-8 h-8 text-cyberpunk-purple" />,
      title: "Generate Cover",
      description: "The AI creates a vibrant, colorful cover page with your book title integrated."
    },
    {
      icon: <FileDown className="w-8 h-8 text-cyberpunk-purple" />,
      title: "Build Your Book",
      description: "Page by page, the AI generates professional black & white illustrations optimized for coloring."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-cyberpunk-purple" />,
      title: "Download & Print",
      description: "Get your ready-to-use PDF with perfectly formatted pages for immediate printing."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyberpunk-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyberpunk-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-cyberpunk-blue/20 backdrop-blur-sm border border-cyberpunk-blue/30 rounded-full mb-4">
            <p className="text-sm font-medium text-white">How It Works</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Create Your Own Coloring Book in 5 Simple Steps
          </h2>
          <p className="text-gray-300">
            Our AI assistant guides you through a streamlined process to transform your ideas into professional-quality coloring books.
          </p>
        </div>
        
        <div className="relative">
          {/* The process steps */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyberpunk-purple/80 via-cyberpunk-pink/80 to-cyberpunk-blue/80 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-16`}
              >
                <div className={`md:w-1/2 glass-card p-6 md:p-8 rounded-2xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                <div className="relative md:w-16 flex-shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink flex items-center justify-center text-white font-bold text-lg border-4 border-cyberpunk-darker relative z-10">
                    {index + 1}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block absolute top-16 ${index % 2 === 0 ? 'left-6' : 'right-6'} text-cyberpunk-pink`}>
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button inline-block"
            >
              Start Creating Your Coloring Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
