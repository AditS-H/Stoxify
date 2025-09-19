import { ChevronDown, TrendingUp, Users, Target, BarChart3, Shield, Zap, Star, ArrowRight, Play, DollarSign } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

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
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Traders", icon: <Users className="w-6 h-6" /> },
    { number: "₹2.5Cr+", label: "Portfolio Value", icon: <DollarSign className="w-6 h-6" /> },
    { number: "4.9", label: "Rating", suffix: "★", icon: <Star className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> }
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
            className={`absolute ${element.position} text-purple-400/30 animate-bounce`}
            style={{
              animationDelay: `${element.delay}ms`,
              animationDuration: '3s'
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative" ref={heroRef}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-medium">SEBI Registered • Trusted by 50K+ Traders</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Join India's
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Largest Trading
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get ready to transform your trading & investing journey by joining India's most powerful group of traders.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center mb-3 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-orange-400 transition-all duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Join Community</span>
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
              
              <button className="group flex items-center space-x-3 text-white hover:text-purple-300 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300">Real traders, real results from our community</p>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-400">
                  {testimonials[currentTestimonial].city}
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;