
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";

// Mock API function - would be replaced with actual API call to FastAPI
const mockApiCall = async (message: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Check for negative sentiment to trigger jokes
  const negativeWords = ['sad', 'upset', 'anxious', 'nervous', 'worried', 'stressed', 'depressed', 'lonely', 'afraid', 'rejected'];
  const lowerMessage = message.toLowerCase();
  const hasNegativeSentiment = negativeWords.some(word => lowerMessage.includes(word));
  
  // Library of responses
  const jokes = [
    "Did you hear about the guy who invented Lifesavers? They say he made a mint!",
    "What do you call a fake noodle? An impasta!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "I'm reading a book about anti-gravity. It's impossible to put down!"
  ];
  
  const datingAdvice = [
    "Ask open-ended questions that invite thoughtful responses rather than yes/no answers.",
    "Active listening is key - remember details from previous conversations to show you're genuinely engaged.",
    "Be authentic and show your true self, as this builds a foundation for genuine connection.",
    "Balance sharing about yourself while showing interest in the other person.",
    "Plan dates that allow for conversation and also include an activity you both might enjoy.",
    "Look for shared values and interests, which often form the strongest foundations for relationships.",
    "Remember that confidence comes from self-acceptance - focus on your positive qualities.",
    "Try using humor to break the ice, but avoid sarcasm which can be misconstrued in early dating.",
    "Be patient and don't rush the connection - meaningful relationships develop over time.",
    "Pay attention to both verbal and non-verbal cues to better understand how someone is feeling."
  ];
  
  const conversationStarters = [
    "What's been the highlight of your week so far?",
    "If you could have dinner with anyone, living or dead, who would it be and why?",
    "What's something you're looking forward to in the next few months?",
    "What's a hobby or passion that you never get tired of?",
    "What's the best advice you've ever received?",
    "If you could travel anywhere right now, where would you go?",
    "What's a book or movie that really influenced you?",
    "What's something you're currently learning or want to learn?",
    "What makes you laugh the hardest?",
    "What's a small thing that always brightens your day?"
  ];
  
  // Generate response based on message content
  if (hasNegativeSentiment) {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return `I notice you might be feeling a bit down. Here's a joke to brighten your day:\n\n${randomJoke}\n\nNow, let me help you with your dating question. ${datingAdvice[Math.floor(Math.random() * datingAdvice.length)]}`;
  }
  
  if (lowerMessage.includes('conversation') || lowerMessage.includes('talk') || lowerMessage.includes('start')) {
    return `Great question about starting conversations! Here are some tips:\n\n1. ${conversationStarters[Math.floor(Math.random() * conversationStarters.length)]}\n\n2. ${conversationStarters[Math.floor(Math.random() * conversationStarters.length)]}\n\n3. ${conversationStarters[Math.floor(Math.random() * conversationStarters.length)]}\n\nRemember, the best conversations happen when you're genuinely curious about the other person.`;
  }
  
  // Default response with dating advice
  return `Based on your question, here's some advice that might help:\n\n${datingAdvice[Math.floor(Math.random() * datingAdvice.length)]}\n\n${datingAdvice[Math.floor(Math.random() * datingAdvice.length)]}\n\nHope this helps! Feel free to ask me more specific questions.`;
};

type Message = {
  content: string;
  isUser: boolean;
};

const Advisor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi there! I'm your DateGenius AI advisor. How can I help with your dating life today? Ask me for conversation starters, dating tips, or advice on specific dating situations!",
      isUser: false
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const chatContainerRef = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (chatContainerRef[0]) {
      chatContainerRef[0].scrollTop = chatContainerRef[0].scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    // Add user message to chat
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    setIsLoading(true);
    
    try {
      // Call API (mock for now)
      const response = await mockApiCall(message);
      
      // Add AI response
      setMessages(prev => [...prev, { content: response, isUser: false }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      console.error("Error getting response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16 pb-20 bg-gradient-to-b from-love-100/30 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-love-200 overflow-hidden">
            <div className="bg-love-500 text-white p-4">
              <h2 className="text-xl font-semibold">DateGenius AI Advisor</h2>
              <p className="text-white/80 text-sm">
                Ask for dating advice, conversation starters, and more
              </p>
            </div>
            
            <div 
              className="p-4 h-[500px] overflow-y-auto flex flex-col"
              ref={el => chatContainerRef[0] = el}
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  content={message.content}
                  isUser={message.isUser}
                />
              ))}
              
              {isLoading && (
                <ChatMessage
                  content=""
                  isUser={false}
                  isLoading={true}
                />
              )}
            </div>
            
            <div className="border-t p-4">
              <ChatInput 
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Advisor;
