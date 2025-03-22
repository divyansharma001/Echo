
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      <main>
        <div className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Project Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive suite of tools designed to verify project 
              authenticity and detect plagiarism.
            </p>
          </div>
        </div>
        
        <FeaturesSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
