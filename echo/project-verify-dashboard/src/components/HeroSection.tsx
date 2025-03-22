import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Verify Project Authenticity,
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Build Trust in Your Portfolio
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI-powered platform detects plagiarism, analyzes code similarity, 
            and confirms originality to help recruiters make informed decisions.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to={'/uploader'}>
            <Button 
              size="lg" 
              className="rounded-full gap-2 px-6 py-6 text-base"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Start Verifying Now</span>
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full text-base py-6">
              Learn How It Works
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 relative h-[500px] mx-auto max-w-5xl glass-card rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 w-full h-10 bg-secondary/50 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
            </div>
            <div className="mx-auto bg-background/40 rounded-full text-xs py-1 px-4">
              projectverify.com/analysis/report
            </div>
          </div>
          
          <div className="p-6 pt-14 h-full overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
              <div className="md:col-span-1 space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Search className="h-4 w-4" /> Project Analysis
                  </h3>
                  <div className="space-y-3">
                    <div className="h-8 bg-background/70 rounded animate-pulse"></div>
                    <div className="h-8 bg-background/70 rounded animate-pulse"></div>
                    <div className="h-8 bg-background/70 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4" /> Repository Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Languages:</span>
                      <span className="text-sm">JavaScript, React, Node.js</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last commit:</span>
                      <span className="text-sm">3 days ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Contributors:</span>
                      <span className="text-sm">1</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Authenticity Score
                  </h3>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full border-8 border-orange-400/80 flex items-center justify-center">
                      <span className="text-2xl font-bold">73%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-white rounded-lg p-5 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" /> Similarity Analysis Report
                </h2>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Code Similarity Findings</h4>
                    <p className="text-sm text-muted-foreground">
                      Our analysis has detected moderate similarity with the following repositories:
                    </p>
                    <div className="space-y-2">
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <div className="flex justify-between">
                          <span className="font-medium">github.com/user1/project-name</span>
                          <span className="text-orange-600 font-medium">68% match</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Significant code overlap in authentication module and UI components
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <div className="flex justify-between">
                          <span className="font-medium">github.com/user2/similar-app</span>
                          <span className="text-orange-600 font-medium">52% match</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          API integration patterns and data models show moderate similarity
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Timeline Analysis</h4>
                    <div className="h-24 bg-gray-50 rounded-lg p-2 overflow-hidden">
                      <div className="flex h-full items-end">
                        <div className="w-1/12 h-[20%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[15%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[40%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[30%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[25%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[60%] bg-orange-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[80%] bg-orange-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[70%] bg-orange-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[50%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[30%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[20%] bg-blue-400 mx-0.5 rounded-t"></div>
                        <div className="w-1/12 h-[10%] bg-blue-400 mx-0.5 rounded-t"></div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 flex justify-between">
                      <span>Jan 2023</span>
                      <span>Dec 2023</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Recommendation</h4>
                    <p className="text-sm text-muted-foreground">
                      The project shows signs of code similarity with existing repositories.
                      We recommend reviewing the highlighted sections and ensuring proper attribution
                      where code has been adapted from other sources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

