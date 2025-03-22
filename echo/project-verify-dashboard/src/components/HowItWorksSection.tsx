
import { 
  Upload, Database, Search, PieChart, FileCheck, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-bold">How ProjectVerify Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our sophisticated process combines AI analysis with deep code inspection 
            to provide accurate authenticity verification.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-border -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 relative z-10">
            {/* Step 1 */}
            <div className="md:flex items-center gap-8">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Resume Link Collection</h3>
                  <p className="text-muted-foreground">
                    Upload a resume or paste links to code repositories. Our system automatically 
                    extracts all project URLs for analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center md:w-2/12">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                  <Upload className="h-7 w-7" />
                </div>
              </div>
              
              <div className="md:w-5/12 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="md:flex items-center gap-8">
              <div className="md:w-5/12 hidden md:block"></div>
              
              <div className="flex justify-center md:w-2/12">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                  <Database className="h-7 w-7" />
                </div>
              </div>
              
              <div className="md:w-5/12 mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Code Repository Fetching</h3>
                  <p className="text-muted-foreground">
                    Our system clones and analyzes the repositories, extracting the relevant 
                    code files while ignoring standard libraries and dependencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:flex items-center gap-8">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">AI Pattern Recognition</h3>
                  <p className="text-muted-foreground">
                    Our Gemini-powered AI analyzes the code structure, style, and patterns
                    to find similar repositories across the web.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center md:w-2/12">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                  <Search className="h-7 w-7" />
                </div>
              </div>
              
              <div className="md:w-5/12 hidden md:block"></div>
            </div>

            {/* Step 4 */}
            <div className="md:flex items-center gap-8">
              <div className="md:w-5/12 hidden md:block"></div>
              
              <div className="flex justify-center md:w-2/12">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                  <PieChart className="h-7 w-7" />
                </div>
              </div>
              
              <div className="md:w-5/12 mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Similarity Comparison</h3>
                  <p className="text-muted-foreground">
                    Using RAG and cosine similarity algorithms, we compare the code against
                    potential matches to calculate similarity scores.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="md:flex items-center gap-8">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Report Generation</h3>
                  <p className="text-muted-foreground">
                    A detailed report is generated with authenticity scores, similarity findings,
                    and specific code sections that match other repositories.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center md:w-2/12">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                  <FileCheck className="h-7 w-7" />
                </div>
              </div>
              
              <div className="md:w-5/12 hidden md:block"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="gap-2 rounded-full px-6">
            <span>Try It Now</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
