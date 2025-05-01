
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Heart, Users, Sparkles, Lightbulb, MessageCircle, RefreshCw } from 'lucide-react';
import { tipsService, Tip } from '../services/tipsService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TipsPage = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Tips', icon: <Sparkles className="h-4 w-4" /> },
    { id: 'conversation', name: 'Conversation', icon: <MessageCircle className="h-4 w-4" /> },
    { id: 'firstDate', name: 'First Dates', icon: <Heart className="h-4 w-4" /> },
    { id: 'relationships', name: 'Relationships', icon: <Users className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const loadTips = async () => {
      setIsLoading(true);
      try {
        // This would normally fetch from our API, but we'll use mock data for now
        const response = await tipsService.getTips();
        setTips(response);
      } catch (error) {
        console.error('Error loading tips:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTips();
  }, []);

  const filteredTips = tips
    .filter(tip => activeCategory === 'all' || tip.category === activeCategory)
    .filter(tip => 
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tip.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Powered Dating Tips & Advice
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get personalized insights and guidance to navigate the world of dating with confidence
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search for tips..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-love-500"
                  />
                  <Filter className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="inline-flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      className={`inline-flex items-center rounded-full text-sm ${
                        activeCategory === category.id
                          ? 'bg-love-500 hover:bg-love-600'
                          : 'hover:bg-gray-100'
                      } transition-colors duration-200`}
                    >
                      {category.icon}
                      <span className="ml-1">{category.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tips Grid */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <RefreshCw className="h-8 w-8 text-love-500 animate-spin" />
                <span className="ml-2 text-lg text-gray-600">Loading tips...</span>
              </div>
            ) : filteredTips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTips.map((tip, index) => (
                  <motion.div
                    key={tip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`h-2 ${
                      tip.category === 'conversation' ? 'bg-blue-500' :
                      tip.category === 'firstDate' ? 'bg-red-500' :
                      tip.category === 'relationships' ? 'bg-green-500' :
                      'bg-love-500'
                    }`} />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-full ${
                          tip.category === 'conversation' ? 'bg-blue-100 text-blue-500' :
                          tip.category === 'firstDate' ? 'bg-red-100 text-red-500' :
                          tip.category === 'relationships' ? 'bg-green-100 text-green-500' :
                          'bg-love-100 text-love-500'
                        }`}>
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <span className="ml-2 text-xs font-medium text-gray-500 uppercase">
                          {tip.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-love-50 inline-flex p-4 rounded-full mb-4">
                  <Lightbulb className="h-8 w-8 text-love-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No tips found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria to find dating tips.
                </p>
              </div>
            )}
            
            {/* Custom Tip Request */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-love-500 to-secondary rounded-xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Need Personalized Advice?</h3>
              <p className="text-lg text-love-100 mb-6">
                Chat with our AI assistant to get dating tips tailored specifically to your situation.
              </p>
              <Button
                asChild
                className="bg-white text-love-700 hover:bg-love-50 px-6 py-3 rounded-full font-medium transition-colors duration-300"
              >
                <a href="/advisor">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with AI Assistant
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TipsPage;
