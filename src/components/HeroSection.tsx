
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-love-100/50 to-white"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-love-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-love-200 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Match with <span className="bg-gradient-to-r from-love-500 to-secondary bg-clip-text text-transparent">AI Assistance</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            Get personalized dating advice, conversation starters, and emotional support from our advanced AI companion. Take your dating game to the next level!
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              to="/advisor" 
              className="bg-gradient-love text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center gap-2"
            >
              Try Now <ArrowRight size={18} />
            </Link>
            <a 
              href="#features" 
              className="border border-love-400 text-love-600 px-6 py-3 rounded-full hover:bg-love-100/50 transition-colors font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md relative">
            <div className="absolute inset-0 bg-gradient-love rounded-3xl blur-xl opacity-20 -rotate-2"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-love-200 p-4 overflow-hidden">
              <div className="bg-love-100/50 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-love flex items-center justify-center text-white font-medium">
                    AI
                  </div>
                  <div>
                    <div className="font-medium text-sm">DateGenius AI</div>
                    <div className="text-xs text-foreground/70">Your dating coach</div>
                  </div>
                </div>
                <p className="text-sm">
                  "I noticed you're interested in someone who loves hiking. Try asking about their favorite trail or a memorable outdoor experience. Shared interests create strong connections!"
                </p>
              </div>
              <div className="space-y-3">
                <div className="chat-bubble chat-bubble-user">
                  How do I start a conversation with someone I just matched with?
                </div>
                <div className="chat-bubble chat-bubble-ai">
                  Find something interesting in their profile and ask an open-ended question about it. This shows you've paid attention and gives them something specific to respond to.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
