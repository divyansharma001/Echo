
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

const CtaSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 border border-white/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-white/30 rounded-full"></div>
        
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,200 C150,150 200,250 250,200 S350,50 400,100" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M300,300 C350,350 400,300 450,350 S550,450 600,400" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M700,200 C650,150 600,250 550,200 S450,50 400,100" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M100,500 L200,500 C250,500 250,550 300,550 L400,550" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M500,100 L500,200 C500,250 550,250 550,300 L550,400" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Validate Your Project Portfolio?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Gain confidence in your hiring decisions with comprehensive 
            project authenticity verification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full gap-2 px-6 text-primary"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Start Verifying Now</span>
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Request a Demo
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center text-sm text-white/70">
            <AlertCircle className="h-4 w-4 mr-2" />
            <span>No credit card required. Start with our free verification tool.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
