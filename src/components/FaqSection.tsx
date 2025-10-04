
import React, { useState } from "react";
import { ChevronDown, Info } from "lucide-react";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: "How does the Coloring Book Generator work?",
      answer: "The Coloring Book Generator uses advanced AI models with GPT-5 Image Generation to create custom coloring books. You describe your vision, the AI creates an outline, generates a colorful cover with your title, and then produces black and white coloring pages. Finally, it compiles everything into a print-ready PDF."
    },
    {
      question: "How many pages can I include in my coloring book?",
      answer: "By default, the Coloring Book Generator creates books with 1 cover page and 24 coloring pages. However, this is fully customizable, and you can specify any number of pages based on your needs."
    },
    {
      question: "How long does it take to create a complete coloring book?",
      answer: "The time varies depending on the complexity and length of your coloring book. Typically, a standard 24-page coloring book takes approximately 30-45 minutes to generate, with each set of pages being compiled as they're created so you can monitor progress."
    },
    {
      question: "Can I customize the style of illustrations in my coloring book?",
      answer: "Absolutely! You can specify the artistic style, themes, complexity level, and details you want in your coloring pages. The AI will adapt to create illustrations that match your preferences."
    },
    {
      question: "What format will my coloring book be in?",
      answer: "Your coloring book will be delivered as a PDF file formatted to standard 8.5\" x 11\" pages, making it easy to print at home or through professional printing services."
    },
    {
      question: "Do I own the rights to the coloring books I create?",
      answer: "The coloring books you create are for your personal or educational use. For commercial usage rights, please refer to OpenAI's content policy regarding AI-generated images."
    },
    {
      question: "Can I edit my coloring book after it's been generated?",
      answer: "The PDF file you receive is the final product. For edits, you would need to regenerate specific pages or create a new coloring book. We recommend saving your original prompt and conversation to help with future modifications."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyberpunk-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-cyberpunk-blue/20 backdrop-blur-sm border border-cyberpunk-blue/30 rounded-full mb-4">
            <p className="text-sm font-medium text-white">FAQ</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300">
            Everything you need to know about our AI Coloring Book Generator
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 p-5 pt-0" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300 pt-2 border-t border-white/10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 glass-card p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cyberpunk-blue/20 rounded-lg">
                <Info className="w-6 h-6 text-cyberpunk-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Still have questions?</h3>
                <p className="text-gray-300 mb-4">
                  If you couldn't find the answer to your question, feel free to contact us.
                </p>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors duration-300"
                >
                  Contact@ai-webtools.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
