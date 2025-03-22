
import React from 'react';

interface BackgroundProps {
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden pointer-events-none ${className}`}>
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(140,140,200,0.1),transparent)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100/20 filter blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-100/20 filter blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      
      {/* Small decorative elements */}
      <div className="absolute top-[10%] right-[15%] w-6 h-6 rounded-full border border-gray-300/30"></div>
      <div className="absolute top-[30%] left-[5%] w-3 h-3 rounded-sm bg-gray-500/10"></div>
      <div className="absolute bottom-[20%] right-[30%] w-4 h-4 rounded-md border border-gray-300/20"></div>
      <div className="absolute bottom-[45%] left-[25%] w-2 h-8 rounded-md bg-gray-500/10"></div>
      
      {/* Circuit paths */}
      <svg className="absolute w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,200 C150,150 200,250 250,200 S350,50 400,100" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M300,300 C350,350 400,300 450,350 S550,450 600,400" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M100,500 L200,500 C250,500 250,550 300,550 L400,550" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M500,100 L500,200 C500,250 550,250 550,300 L550,400" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M700,200 C650,150 600,250 550,200 S450,50 400,100" stroke="currentColor" fill="none" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Background;
