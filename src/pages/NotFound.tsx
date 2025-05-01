
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-love-100/30 to-white">
      <div className="text-center p-8">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-love-100 rounded-full text-love-500">
          <Heart className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-love-500 to-secondary bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-foreground/70 mb-6">Oops! This page isn't in your dating pool.</p>
        <Link 
          to="/" 
          className="bg-gradient-love text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
