
import React from "react";
import { Book, Palette, BookOpen } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyberpunk-purple/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyberpunk-pink/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
          <div className="lg:w-1/2 space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-cyberpunk-purple/20 backdrop-blur-sm border border-cyberpunk-purple/30 rounded-full">
              <p className="text-sm font-medium text-white">Powered by GPT-4o and DALLE</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary leading-tight">
              Create Beautiful <br />Coloring Books <br />with AI
            </h2>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Transform your ideas into professional coloring books in minutes. 
              Perfect for artists, educators, parents, and creative minds.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://chatgpt.com/g/g-H1TU1oFRy-coloring-book-generator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                Create Your Coloring Book
              </a>
              <a 
                href="#how-it-works" 
                className="py-4 px-8 rounded-full bg-white/5 border border-white/10 font-medium text-white hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 opacity-0 animate-fade-in animate-delay-300">
            <div className="relative">
              {/* 3D Book Mockup */}
              <div className="relative w-full max-w-md mx-auto perspective-1000">
                <div className="relative transform-style-3d rotate-y-5 animate-float">
                  <div className="glass-card rounded-2xl p-1 shadow-neon-purple">
                    <div className="relative rounded-xl overflow-hidden">
                      <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-cyberpunk-purple via-cyberpunk-pink to-cyberpunk-blue p-6 rounded-xl">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <BookOpen className="w-20 h-20 text-white mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white">Cyberpunk Crayons</h3>
                            <p className="text-white/80 mt-2">Coloring Adventure</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book spine effect */}
                  <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-r from-transparent to-black/30 rounded-r-lg transform translate-x-2 rotate-y-90 origin-left"></div>
                  
                  {/* Book shadow */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/30 blur-md -z-10 rounded-full transform translate-y-2 scale-x-90"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyberpunk-pink/30 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-cyberpunk-blue/30 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {[
                {
                  icon: <Book className="w-5 h-5 text-cyberpunk-pink" />,
                  title: "Custom Books",
                  description: "Create perfectly tailored coloring books for any theme."
                },
                {
                  icon: <Palette className="w-5 h-5 text-cyberpunk-purple" />,
                  title: "AI Artwork",
                  description: "Generate professional illustrations with cutting-edge AI."
                },
                {
                  icon: <BookOpen className="w-5 h-5 text-cyberpunk-blue" />,
                  title: "PDF Ready",
                  description: "Download print-ready PDFs that work instantly."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card-hover p-4 rounded-xl opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 bg-white/5 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
