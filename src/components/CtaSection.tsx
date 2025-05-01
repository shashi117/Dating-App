
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-love rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Dating Life?</h2>
            <p className="text-white/90 text-lg mb-8">
              Start getting personalized dating advice, conversation starters, and emotional support from our AI companion today.
            </p>
            <Link 
              to="/advisor" 
              className="bg-white text-love-600 px-6 py-3 rounded-full hover:bg-white/90 transition-colors font-medium inline-flex items-center gap-2"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
