
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Shield, Heart } from "lucide-react";

const TeamMember = ({ name, role, imagePath }: { name: string; role: string; imagePath: string }) => (
  <div className="text-center">
    <div className="aspect-square w-full max-w-[220px] mx-auto bg-muted rounded-2xl mb-4 overflow-hidden">
      <img 
        src={imagePath} 
        alt={name} 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />
    </div>
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-muted-foreground">{role}</p>
  </div>
);

const ValueCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-sm transition-shadow">
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const About = () => {
  const team = [
    { name: "Alex Morgan", role: "Founder & CEO", imagePath: "/placeholder.svg" },
    { name: "Jamie Chen", role: "CTO", imagePath: "/placeholder.svg" },
    { name: "Priya Sharma", role: "Head of AI Research", imagePath: "/placeholder.svg" },
    { name: "Marcus Johnson", role: "Lead Developer", imagePath: "/placeholder.svg" },
    { name: "Sophia Rodriguez", role: "Head of Product", imagePath: "/placeholder.svg" },
    { name: "David Kim", role: "Customer Success Manager", imagePath: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      <main>
        <div className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission and Story
              </h1>
              <p className="text-xl text-muted-foreground">
                We're building the gold standard for project authenticity verification, helping candidates 
                showcase their true skills and recruiters make informed decisions.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-20">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                    <img 
                      src="/placeholder.svg" 
                      alt="Our mission" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-primary text-white py-2 px-4 rounded-lg shadow-md">
                    Est. 2023
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">Why We Started ProjectVerify</h2>
                <p className="text-muted-foreground">
                  As former hiring managers and hackathon organizers, we witnessed firsthand the challenges 
                  of verifying the authenticity of portfolio projects. Too often, candidates would claim 
                  projects they hadn't built, or submit plagiarized work to competitions.
                </p>
                <p className="text-muted-foreground">
                  We created ProjectVerify to solve this problem by providing an objective, AI-powered 
                  system that can quickly analyze code repositories and determine originality with a 
                  high degree of accuracy.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to help genuine talent stand out, while giving recruiters and hackathon 
                  judges the confidence that the work they're evaluating truly reflects a candidate's abilities.
                </p>
                
                <Button className="gap-2 rounded-full mt-4">
                  <span>Learn More About Our Technology</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard 
                  icon={Target} 
                  title="Accuracy" 
                  description="We prioritize precision in our verification processes, constantly refining our algorithms to reduce false positives and negatives."
                />
                <ValueCard 
                  icon={Shield} 
                  title="Integrity" 
                  description="We operate with fairness and transparency, ensuring our analysis is unbiased and consistent across all projects."
                />
                <ValueCard 
                  icon={Users} 
                  title="Empowerment" 
                  description="We help genuine creators showcase their true abilities and give recruiters confidence in their hiring decisions."
                />
                <ValueCard 
                  icon={Heart} 
                  title="Innovation" 
                  description="We continuously improve our technology, embracing new AI advancements to provide the most accurate verification possible."
                />
              </div>
            </div>
            
            <div className="py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member) => (
                  <TeamMember 
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    imagePath={member.imagePath}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
