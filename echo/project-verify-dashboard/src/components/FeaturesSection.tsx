
import { Check, AlertCircle, GitCompare, Code2, ArrowRight, Zap, Shield, Search, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-bold">Comprehensive Verification Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform uses advanced AI to analyze code repositories and detect plagiarism 
            with precision and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Code Repository Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Automatically extracts and analyzes code from GitHub, GitLab, and other repositories 
              to verify originality.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Multi-language support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Deep directory parsing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Commit history verification</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GitCompare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Similarity Detection</h3>
            <p className="text-muted-foreground mb-4">
              Our AI compares submitted projects against millions of repositories to find 
              patterns of similarity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">AI-powered code comparison</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Semantic analysis beyond syntax</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Percentage match scoring</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Resume Link Parsing</h3>
            <p className="text-muted-foreground mb-4">
              Automatically extracts and validates project links from resumes and portfolio websites.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">PDF and document scanning</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">URL extraction and validation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Portfolio site crawling</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Hackathon Verification</h3>
            <p className="text-muted-foreground mb-4">
              Specialized tools for hackathon organizers to verify project originality and prevent fraud.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Devfolio profile analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Submission timestamp verification</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Team contribution metrics</span>
              </li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Advanced AI models analyze code structure, style, and patterns to identify authentic work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Gemini integration</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">RAG-based similarity comparison</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Cosine similarity algorithms</span>
              </li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-secondary/50 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive Reports</h3>
            <p className="text-muted-foreground mb-4">
              Detailed reports with actionable insights about project authenticity and originality metrics.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Downloadable PDF reports</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Visual similarity graphs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">Code snippet highlighting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="gap-2 rounded-full px-6">
            <span>Explore All Features</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
