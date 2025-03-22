
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="text-9xl font-bold text-primary/20">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-3 text-center">Page Not Found</h1>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </Link>
          </Button>
          
          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              <span>Return Home</span>
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
