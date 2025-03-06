
import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Elementary School Teacher",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "I created a space-themed coloring book for my 3rd grade class in under an hour! The students absolutely love it, and it perfectly complements our astronomy unit.",
      stars: 5
    },
    {
      name: "Michael T.",
      role: "Parent & Illustrator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "As a professional illustrator, I was skeptical about AI-generated coloring pages, but I'm genuinely impressed by the quality. I made a custom dinosaur book for my son's birthday that he treasures.",
      stars: 5
    },
    {
      name: "Jennie K.",
      role: "Art Therapist",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      content: "This tool has transformed my practice. I can now create personalized coloring books tailored to each client's therapeutic needs. The process is intuitive and the results are exceptional.",
      stars: 5
    },
    {
      name: "David R.",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      content: "I used the Coloring Book Generator to create branded activity books for our family restaurant. It's been a hit with kids and parents alike, and has significantly improved our customer experience.",
      stars: 4
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyberpunk-purple/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyberpunk-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-cyberpunk-pink/20 backdrop-blur-sm border border-cyberpunk-pink/30 rounded-full mb-4">
            <p className="text-sm font-medium text-white">Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-300">
            Discover how creators around the world are using our AI Coloring Book Generator to bring their ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card-hover rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyberpunk-pink text-cyberpunk-pink" />
                ))}
                {Array(5 - testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-500" />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm">{testimonial.content}</p>
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
            Try It For Yourself
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
