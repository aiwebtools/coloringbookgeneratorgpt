
import React from "react";
import { AlertTriangle, Shield } from "lucide-react";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const DisclaimerSection: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyberpunk-purple/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-cyberpunk-purple/20 backdrop-blur-sm border border-cyberpunk-purple/30 rounded-full mb-4">
            <p className="text-sm font-medium text-white">Legal Information</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Disclaimer & Terms
          </h2>
          <p className="text-gray-300">
            Important information about using our Coloring Book Generator
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-4 sm:p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 bg-cyberpunk-pink/20 rounded-lg flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-cyberpunk-pink" />
            </div>
            <h3 className="text-xl font-semibold text-white">Legal Disclaimer</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              The Coloring Book Generator is an AI-powered tool designed to help users create custom coloring books. While we strive to provide a high-quality service, please be aware of the following:
            </p>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-white font-medium mb-2">Usage Rights</h4>
              <p className="text-sm">
                The coloring books created using our generator are primarily intended for personal, educational, or non-commercial use. For commercial usage, please consult OpenAI's content policy regarding AI-generated images and obtain appropriate licenses if necessary.
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-white font-medium mb-2">Content Limitations</h4>
              <p className="text-sm">
                Our AI may have limitations in generating certain types of content. We prohibit the generation of harmful, offensive, illegal, or copyrighted content. AI Web Tools LLC reserves the right to terminate service for users who violate these terms.
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-white font-medium mb-2">Image Quality Disclaimer</h4>
              <p className="text-sm">
                Please note that image quality is random and may vary based on GPT-5's image generation. There are no guarantees of specific quality levels for generated images. The quality, style, and appearance of coloring book pages may differ between generations and we cannot guarantee consistency across all pages or books.
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-white font-medium mb-2">No Warranty</h4>
              <p className="text-sm">
                The Coloring Book Generator is provided "as is" without warranties of any kind, either expressed or implied. We do not guarantee uninterrupted service, and the quality of generated content may vary.
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-white font-medium mb-2">Limitation of Liability</h4>
              <p className="text-sm">
                AI Web Tools LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-white font-medium mb-2">Privacy</h4>
              <p className="text-sm">
                Your use of the Coloring Book Generator is subject to OpenAI's Privacy Policy. We recommend reviewing this policy to understand how your data is handled.
              </p>
            </div>
            
            <p>
              By using the Coloring Book Generator, you acknowledge that you have read, understood, and agree to these terms. For the full Terms of Service, please visit our <a href={AIWEBTOOLS_URL} className="text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</a> page.
            </p>
          </div>
          
          <div className="mt-8 flex items-start gap-4 border-t border-white/10 pt-6">
            <div className="p-2 bg-cyberpunk-blue/20 rounded-lg flex-shrink-0">
              <Shield className="w-6 h-6 text-cyberpunk-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Privacy Policy</h3>
              <p className="text-gray-300 mb-4">
                For detailed information about how we collect, use, and protect your data, please refer to our privacy policy.
              </p>
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors"
              >
                View Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
