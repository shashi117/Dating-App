
const testimonials = [
  {
    name: "Sarah J.",
    avatar: "S",
    testimonial: "DateGenius helped me overcome my anxiety when starting conversations. The advice was practical and actually worked on my dates!",
    rating: 5
  },
  {
    name: "Michael T.",
    avatar: "M", 
    testimonial: "I was stuck in a cycle of bad first dates until I got help from this AI. The conversation starters were creative and genuine.",
    rating: 5
  },
  {
    name: "Aisha K.",
    avatar: "A",
    testimonial: "When I was feeling nervous before a big date, the AI suggested some jokes that helped break the ice. My date loved it!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-love-100/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            DateGenius has helped thousands of people improve their dating lives through personalized AI guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow border border-love-200 relative"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-love flex items-center justify-center text-white font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="flex">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic">{testimonial.testimonial}</p>
              
              <div className="absolute -z-10 top-4 left-4 text-love-300 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
