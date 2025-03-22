
import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import CtaSection from "@/components/CtaSection";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingToggle = ({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (value: boolean) => void }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`text-sm ${!isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>Monthly</span>
      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-primary/20 transition-colors hover:bg-primary/30"
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-primary shadow-sm transition-transform ${
            isAnnual ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="flex items-center space-x-1">
        <span className={`text-sm ${isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>Annual</span>
        <span className="bg-green-100 text-green-800 text-xs font-medium py-0.5 px-1.5 rounded">Save 20%</span>
      </span>
    </div>
  );
};

const PricingCard = ({
  name,
  description,
  price,
  features,
  isPopular,
  yearlyPrice,
  isAnnual,
}: {
  name: string;
  description: string;
  price: number;
  yearlyPrice: number;
  features: { text: string; included: boolean; tooltip?: string }[];
  isPopular?: boolean;
  isAnnual: boolean;
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden ${isPopular ? 'ring-2 ring-primary' : 'border border-border'}`}>
      {isPopular && (
        <div className="bg-primary py-1.5 text-center text-sm font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">${isAnnual ? yearlyPrice : price}</span>
            <span className="ml-1 text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
          </div>
          {isAnnual && (
            <p className="mt-1 text-sm text-green-600">
              ${(price * 12 - yearlyPrice).toFixed(0)} savings annually
            </p>
          )}
        </div>
        <Button className="mt-6 w-full rounded-full">Get Started</Button>
      </div>
      <div className="border-t border-border bg-secondary/30 px-8 py-6">
        <h4 className="text-sm font-medium">What's included:</h4>
        <ul className="mt-4 space-y-3">
          {features.map((feature, index) => (
            <TooltipProvider key={index}>
              <li className="flex items-start">
                {feature.included ? (
                  <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                ) : (
                  <div className="h-5 w-5 shrink-0 mr-2" />
                )}
                <span className={feature.included ? '' : 'text-muted-foreground'}>
                  {feature.text}
                </span>
                {feature.tooltip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 ml-1.5 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{feature.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </li>
            </TooltipProvider>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "For individuals and small projects",
      price: 0,
      yearlyPrice: 0,
      features: [
        { text: "3 project verifications per month", included: true },
        { text: "Basic similarity detection", included: true },
        { text: "GitHub repository analysis", included: true },
        { text: "PDF report generation", included: true },
        { text: "AI-powered code analysis", included: false },
        { text: "Hackathon verification tools", included: false },
        { text: "API access", included: false },
        { text: "Team collaboration", included: false },
        { text: "Priority support", included: false },
      ],
    },
    {
      name: "Pro",
      description: "For professional developers and recruiters",
      price: 29,
      yearlyPrice: 279,
      features: [
        { text: "20 project verifications per month", included: true },
        { text: "Advanced similarity detection", included: true },
        { text: "Multi-platform repository analysis", included: true, tooltip: "Supports GitHub, GitLab, Bitbucket, and more" },
        { text: "Comprehensive PDF reports", included: true },
        { text: "AI-powered code analysis", included: true },
        { text: "Hackathon verification tools", included: true },
        { text: "Basic API access", included: true },
        { text: "Team collaboration", included: false },
        { text: "Priority support", included: false },
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations and hiring teams",
      price: 99,
      yearlyPrice: 949,
      features: [
        { text: "Unlimited project verifications", included: true },
        { text: "Enterprise-grade similarity detection", included: true, tooltip: "Enhanced accuracy with advanced AI models" },
        { text: "Complete repository ecosystem access", included: true },
        { text: "White-labeled PDF reports", included: true },
        { text: "Custom AI analysis parameters", included: true },
        { text: "Advanced hackathon verification suite", included: true },
        { text: "Full API access", included: true },
        { text: "Team collaboration with roles", included: true },
        { text: "24/7 priority support", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      <main>
        <div className="pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Choose the plan that's right for your project verification needs.
            </p>
            
            <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  description={plan.description}
                  price={plan.price}
                  yearlyPrice={plan.yearlyPrice}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  isAnnual={isAnnual}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions About Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will take effect on your next billing cycle.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Do you offer custom enterprise plans?</h3>
              <p className="text-muted-foreground">
                Yes, we offer custom enterprise solutions for large organizations with specific needs. Contact our sales team for details.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Is there a refund policy?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee on all paid plans if you're not satisfied with our service.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Do you offer educational discounts?</h3>
              <p className="text-muted-foreground">
                Yes, we provide special pricing for educational institutions. Please contact us with your .edu email for more information.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and for enterprise customers, we can arrange wire transfers or invoicing.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">How do verification credits work?</h3>
              <p className="text-muted-foreground">
                Each project analysis counts as one verification credit. Unused credits do not roll over to the next month on monthly plans.
              </p>
            </div>
          </div>
        </div>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
