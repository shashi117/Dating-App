
// This would usually call our FastAPI backend
// For now, we'll just use mock data

export interface Tip {
  id: string;
  category: string;
  title: string;
  content: string;
}

// Mock data
const tipsMockData: Tip[] = [
  {
    id: '1',
    category: 'conversation',
    title: 'The Art of Open-Ended Questions',
    content: 'Ask questions that can\'t be answered with a simple "yes" or "no". For example, instead of "Did you enjoy the movie?", try "What did you think about the movie?"'
  },
  {
    id: '2',
    category: 'conversation',
    title: 'Active Listening Techniques',
    content: 'Show genuine interest by maintaining eye contact, nodding, and asking follow-up questions. Repeat back what they\'ve said to show you\'re paying attention.'
  },
  {
    id: '3',
    category: 'firstDate',
    title: 'Planning the Perfect First Date',
    content: 'Choose an activity that allows for conversation but also gives you something to talk about. Coffee shops, casual walks, or interactive experiences like museums work well.'
  },
  {
    id: '4',
    category: 'firstDate',
    title: 'Managing First Date Nerves',
    content: 'Remember that your date is probably nervous too! Take deep breaths, arrive a few minutes early to compose yourself, and remember that it\'s just a conversation with another human.'
  },
  {
    id: '5',
    category: 'relationships',
    title: 'Building Emotional Intimacy',
    content: 'Share your thoughts and feelings gradually, and create a safe space for your partner to do the same. Vulnerability builds connection when it happens naturally over time.'
  },
  {
    id: '6',
    category: 'relationships',
    title: 'Maintaining Independence',
    content: 'Keep pursuing your own hobbies, friends, and interests. The healthiest relationships involve two whole people choosing to be together, not two halves needing each other.'
  },
  {
    id: '7',
    category: 'conversation',
    title: 'Recovering From Awkward Moments',
    content: 'If there\'s an awkward silence or you say something that doesn\'t land well, don\'t panic. A simple "Let me rephrase that" or a light joke about the silence can reset the conversation.'
  },
  {
    id: '8',
    category: 'firstDate',
    title: 'The End-of-Date Moment',
    content: 'If you\'ve enjoyed yourself, be clear about wanting to meet again. A specific suggestion like "I\'d love to check out that art exhibit with you next weekend" is better than a vague "Let\'s do this again sometime."'
  },
  {
    id: '9',
    category: 'relationships',
    title: 'Healthy Conflict Resolution',
    content: 'Focus on "I" statements rather than accusations. "I feel overlooked when plans change last minute" is more constructive than "You always cancel on me."'
  }
];

export const tipsService = {
  getTips: async (): Promise<Tip[]> => {
    // In a real implementation, this would call our FastAPI backend
    // which might use the Gemini model to generate personalized tips
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return tipsMockData;
  },
  
  getPersonalizedTip: async (category: string): Promise<Tip> => {
    // This would normally send the category and situation to our FastAPI backend
    // which would then use Gemini to generate a personalized response
    
    // For now, return a random tip from the requested category or a default one
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const categoryTips = tipsMockData.filter(tip => tip.category === category);
    if (categoryTips.length > 0) {
      return categoryTips[Math.floor(Math.random() * categoryTips.length)];
    }
    
    // Default fallback
    return tipsMockData[0];
  }
};
