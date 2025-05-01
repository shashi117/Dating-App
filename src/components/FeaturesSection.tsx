
import { Heart, MessageCircle, Smile, Star } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="w-10 h-10 text-love-500" />,
    title: "Expert Dating Advice",
    description: "Get personalized tips on conversation starters, date planning, and relationship building from our AI advisor."
  },
  {
    icon: <Smile className="w-10 h-10 text-love-500" />,
    title: "Mood Boosting",
    description: "Feeling down? Our AI detects your mood and offers jokes and encouragement to keep you positive while dating."
  },
  {
    icon: <Heart className="w-10 h-10 text-love-500" />,
    title: "Relationship Insights",
    description: "Learn about compatibility, communication styles, and ways to strengthen your connection with potential partners."
  },
  {
    icon: <Star className="w-10 h-10 text-love-500" />,
    title: "Personal Growth",
    description: "Develop confidence, communication skills, and emotional intelligence with guidance from our AI coach."
  }
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How DateGenius Helps You</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our AI-powered dating assistant provides you with everything you need to navigate the dating world with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-love-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-love-100 w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
