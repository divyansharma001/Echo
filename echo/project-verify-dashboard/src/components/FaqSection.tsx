
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the project authenticity detection?",
    answer: "Our system achieves 95%+ accuracy in detecting code similarity. It combines multiple techniques including syntax analysis, semantic understanding, and pattern recognition to minimize false positives while effectively identifying copied code."
  },
  {
    question: "Can your system be tricked by code obfuscation?",
    answer: "Our AI technology looks beyond simple syntax and variable names, analyzing the underlying structure and logic of the code. While basic obfuscation techniques might reduce similarity scores slightly, our system is designed to detect structural similarities even after obfuscation."
  },
  {
    question: "How does the platform work for hackathon projects?",
    answer: "For hackathons, we provide specialized analysis that considers the time constraints of these events. We verify submission timestamps against commit history, analyze team contributions, and compare against code submitted to previous hackathons to ensure originality."
  },
  {
    question: "What types of repositories and languages do you support?",
    answer: "We support all major version control systems including GitHub, GitLab, and Bitbucket. Our language coverage includes but is not limited to JavaScript, Python, Java, C/C++, Go, Ruby, PHP, Rust, TypeScript, and most other popular programming languages."
  },
  {
    question: "How do you handle legitimate code reuse and open source?",
    answer: "Our system distinguishes between common open-source libraries and unique project code. We maintain a database of popular frameworks and libraries, and exclude these from similarity scoring. We also identify proper attribution when code is reused with permission."
  },
  {
    question: "Is my code data kept private and secure?",
    answer: "Yes, we take data privacy seriously. All code analysis is performed in secure environments, and we do not store your complete codebase after analysis is complete. Only similarity metrics and report data are retained, and all data is encrypted at rest and in transit."
  },
  {
    question: "Can I use this for educational purposes to check student assignments?",
    answer: "Absolutely! Many educators use our platform to ensure academic integrity. We offer special educational plans that include batch processing for multiple student submissions and integration with common learning management systems."
  },
  {
    question: "What information is included in the authenticity report?",
    answer: "Reports include an overall authenticity score, detailed similarity percentages against potentially matching repositories, specific code sections with high similarity, commit history analysis, and recommendations for improving project originality documentation."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Get answers to common questions about our project verification platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2">
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
