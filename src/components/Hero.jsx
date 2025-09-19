import { ChevronDown, TrendingUp, Users, Target, BarChart3, Shield, Zap, Star, ArrowRight, Play, DollarSign } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Add custom styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      
      @keyframes scroll-reverse {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
      }
      
      .animate-scroll {
        animation: scroll 15s linear infinite;
      }
      
      .animate-scroll-reverse {
        animation: scroll-reverse 15s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const testimonials = [
    { 
      name: "Suditi S.", 
      city: "Delhi", 
      text: "StoXify transformed how I view markets. The pre-market outlook gives me direction and group support keeps me disciplined.",
      rating: 5 
    },
    { 
      name: "Alok Srivastava", 
      city: "Varanasi", 
      text: "I used to chase stocks randomly. After StoXify, I wait for breakout patterns with reduced risk and consistent profits.",
      rating: 5 
    },
    { 
      name: "Mira K.", 
      city: "Chennai", 
      text: "Monthly webinars are thorough—no fluff, just useful charts and setups. I learn something valuable every time.",
      rating: 5 
    },
    { 
      name: "Vikram T.", 
      city: "Hyderabad", 
      text: "StoXify's sector rotation insights changed how I pick trades. I see patterns before they unfold like institutions!",
      rating: 5 
    },
    { 
      name: "Priya N.", 
      city: "Kolkata", 
      text: "I felt lost before StoXify. Now I journal trades, follow SL/TP zones, and my mindset has grown stronger.",
      rating: 5 
    },
    { 
      name: "Aditya M.", 
      city: "Pune", 
      text: "Community screeners saved me hours of scanning. Clean, logical setups perfect for balancing trading with full-time work.",
      rating: 5 
    },
    { 
      name: "Tejasvi U.", 
      city: "Jaipur", 
      text: "I finally feel like a real trader. StoXify strategies gave me confidence to hold trades with logic, not emotion.",
      rating: 5 
    },
    { 
      name: "Sachin V.", 
      city: "Ahmedabad", 
      text: "Trading used to stress me with indecision. Now StoXify ideas come with rationale—calming to follow proven structure.",
      rating: 5 
    },
    { 
      name: "Neha G.", 
      city: "Lucknow", 
      text: "This community taught me to combine fundamentals with technical signals. I now enter trades with confidence.",
      rating: 5 
    },
    { 
      name: "Rohit S.", 
      city: "Noida", 
      text: "StoXify's post-market recap sessions are gold. Reviewing trades against setups helped spot my mistake patterns.",
      rating: 4 
    }
  ];

  const successStories = [
    { 
      name: "Alok Srivastava", 
      city: "Varanasi", 
      date: "January 2024",
      text: "I used to chase stocks randomly. After StoXify, I wait for breakout patterns with reduced risk and consistent profits.",
      rating: 4 
    },
    { 
      name: "Mira K.", 
      city: "Chennai", 
      date: "February 2024",
      text: "Monthly webinars are thorough—no fluff, just useful charts and setups. I learn something valuable every time.",
      rating: 5 
    },
    { 
      name: "Vikram T.", 
      city: "Hyderabad", 
      date: "April 2024",
      text: "StoXify's sector rotation insights changed how I pick trades. I see patterns before they unfold like institutions!",
      rating: 5 
    },
    { 
      name: "Shweta L.", 
      city: "Patna", 
      date: "April 2025",
      text: "Economics and earnings calendars taught by StoXify make me plan better around key events. My trades feel safer and more informed.",
      rating: 5 
    },
    { 
      name: "Amit J.", 
      city: "Kochi", 
      date: "March 2025",
      text: "StoXify helped me build consistency over chaos. I no longer flip charts aimlessly; I now follow a structured market outlook.",
      rating: 4 
    },
    { 
      name: "Karthik A.", 
      city: "Chennai", 
      date: "February 2025",
      text: "StoXify's gold trading strategies changed the game for me. I used to fear gold volatility—now I embrace it with confidence.",
      rating: 5 
    },
    { 
      name: "Anjali C.", 
      city: "Goa", 
      date: "March 2024",
      text: "Complete newbie to swing trading. Trade ideas explained so simply I understood chart patterns in days.",
      rating: 5 
    },
    { 
      name: "Pranav D.", 
      city: "Bhopal", 
      date: "June 2024",
      text: "I've improved my trade execution so much. I now always wait for confirmation and I've doubled my average risk-reward ratio.",
      rating: 5 
    },
    { 
      name: "Rishabh N.", 
      city: "Delhi", 
      date: "August 2024",
      text: "Live news trading during NFP and CPI events taught me how to stay calm and trade smart. That confidence is priceless.",
      rating: 5 
    },
    { 
      name: "Zoya H.", 
      city: "Hyderabad", 
      date: "September 2024",
      text: "The CPI event session alone was worth the entire membership. It was like a live masterclass.",
      rating: 5 
    },
    { 
      name: "Nitesh S.", 
      city: "Mumbai", 
      date: "October 2024",
      text: "Before StoXify, I never knew how to position myself around news events. Now I track pips and manage risk like a pro.",
      rating: 4 
    },
    { 
      name: "Tanvi V.", 
      city: "Pune", 
      date: "November 2024",
      text: "The 3500+ pips monthly potential isn't just a claim—it's a result of well-researched, logical setups.",
      rating: 5 
    }
  ];

  const floatingElements = [
    { icon: <TrendingUp className="w-6 h-6" />, position: "top-1/4 left-1/4", delay: 0 },
    { icon: <BarChart3 className="w-5 h-5" />, position: "top-1/3 right-1/4", delay: 1000 },
    { icon: <Target className="w-4 h-4" />, position: "bottom-1/4 left-1/3", delay: 2000 },
    { icon: <Zap className="w-7 h-7" />, position: "bottom-1/3 right-1/3", delay: 1500 },
    { icon: <Star className="w-5 h-5" />, position: "top-1/2 left-1/6", delay: 500 },
    { icon: <Shield className="w-6 h-6" />, position: "bottom-1/6 right-1/6", delay: 2500 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Floating Trading Icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} text-blue-400/30 animate-bounce`}
            style={{
              animationDelay: `${element.delay}ms`,
              animationDuration: '3s'
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Success Stories Section */}
      <section id="stories" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Success</span> <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real traders, real results. See how our community members have transformed their trading journey.
            </p>
          </div>

          {/* Infinite Scrolling Success Stories */}
          <div className="relative">
            {/* First Row - Left to Right */}
            <div className="flex animate-scroll mb-8 space-x-6">
              {/* Duplicate the array to create seamless loop */}
              {[...successStories, ...successStories].map((story, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{story.name}</h3>
                      <p className="text-blue-400 text-sm">{story.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start mb-4">
                    {Array.from({ length: story.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    {Array.from({ length: 5 - story.rating }, (_, i) => (
                      <Star key={i + story.rating} className="w-4 h-4 text-gray-600" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{story.text}</p>
                </div>
              ))}
            </div>

            {/* Second Row - Right to Left (Reverse Animation) */}
            <div className="flex animate-scroll-reverse space-x-6">
              {[...successStories, ...successStories].reverse().map((story, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 w-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{story.name}</h3>
                      <p className="text-cyan-400 text-sm">{story.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start mb-4">
                    {Array.from({ length: story.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    {Array.from({ length: 5 - story.rating }, (_, i) => (
                      <Star key={i + story.rating} className="w-4 h-4 text-gray-600" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{story.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Hero;