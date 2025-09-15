import { ChevronDown, TrendingUp, Users, Target, BookOpen, BarChart3, Shield, Zap, Star, ArrowRight, Menu, X, Play, Award, Brain, Eye, Calendar, MessageCircle, Activity, Check, Crown, Sparkles, TrendingDown, DollarSign, LineChart, PieChart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const StoxifyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  const observerRef = useRef(null);

  // Add custom styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes liquidFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(5px) rotate(-1deg); }
      }
      
      .animate-scroll {
        animation: scroll 30s linear infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
      }
      
      .animate-liquid-float {
        animation: liquidFloat 8s ease-in-out infinite;
      }
      
      .gradient-border {
        background: linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b);
        padding: 2px;
        border-radius: 24px;
      }
      
      .gradient-border-inner {
        background: rgba(0, 0, 0, 0.8);
        border-radius: 22px;
        padding: 24px;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #8b5cf6, #ec4899);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #7c3aed, #db2777);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(featureInterval);
      if (observerRef.current) observerRef.current.disconnect();
    };
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
    }
  ];

  const features = [
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: "Proven Trading Strategies", 
      desc: "Access to the same strategies I use to generate asymmetric returns with low risk",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      icon: <Eye className="w-8 h-8" />, 
      title: "Fast-Moving Identification", 
      desc: "Learn to spot explosive stocks and perfect entry timing",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      icon: <Play className="w-8 h-8" />, 
      title: "Video Lessons", 
      desc: "Step-by-step breakdowns of real trades and execution",
      color: "from-purple-500 to-pink-600"
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      title: "Exclusive Watchlist", 
      desc: "Get curated updates to stay ahead of the market",
      color: "from-orange-500 to-red-600"
    },
    { 
      icon: <Activity className="w-8 h-8" />, 
      title: "Scanning Techniques", 
      desc: "Build your personalized watchlist with expert filters",
      color: "from-cyan-500 to-blue-600"
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />, 
      title: "Technical Analysis", 
      desc: "Learn to spot key setups and read charts effectively",
      color: "from-violet-500 to-purple-600"
    },
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: "Mindset & Discipline", 
      desc: "Build psychological resilience for long-term success",
      color: "from-pink-500 to-rose-600"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Community Support", 
      desc: "Connect with like-minded traders to grow together",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Traders", icon: <Users className="w-6 h-6" /> },
    { number: "₹2.5Cr+", label: "Portfolio Value", icon: <DollarSign className="w-6 h-6" /> },
    { number: "4.9", label: "Rating", suffix: "★", icon: <Star className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Stock Trading",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for stock swing trading using technical and fundamental insights",
      features: [
        "Daily Pre-Market Analysis",
        "Live Trading Sessions",
        "Technical Chart Setups",
        "Stock Screening Tools",
        "Risk Management Guide",
        "Community Discord Access",
        "Weekly Market Outlook",
        "Trade Journal Templates"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: <LineChart className="w-8 h-8" />
    },
    {
      name: "Forex Mastery",
      price: "₹3,999",
      period: "/month",
      description: "Structured forex learning through example-based trading plans",
      features: [
        "Everything in Stock Trading",
        "Currency Pair Analysis",
        "News Event Trading",
        "3500+ Monthly Pips Potential",
        "Live NFP & CPI Sessions",
        "Forex Risk Calculator",
        "Economic Calendar Access",
        "Expert 1-on-1 Mentorship"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: <PieChart className="w-8 h-8" />
    },
    {
      name: "Crypto Elite",
      price: "₹4,999",
      period: "/month",
      description: "Advanced crypto trading with market patterns and structured approaches",
      features: [
        "Everything in Forex Mastery",
        "DeFi Trading Strategies",
        "NFT Market Analysis",
        "Altcoin Gem Discovery",
        "Yield Farming Guide",
        "Crypto Portfolio Management",
        "24/7 Market Monitoring",
        "Private VIP Community"
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
      icon: <Sparkles className="w-8 h-8" />
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        
        {/* Dynamic gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTBIMTBWMEgwVjEwWk0xNSAyNUgyNVYxNUgxNVYyNVoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsLjAyKSIvPgo8L3N2Zz4=')] opacity-20 animate-pulse" />
        
        {/* Floating Trading Icons */}
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                StoXify
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Features', 'Community', 'Stories', 'Plans'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {item}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
            <button
              className="md:hidden relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          {['Home', 'Features', 'Community', 'Stories', 'Plans'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`hover:text-purple-400 transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
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

      {/* Interactive Feature Showcase */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                8 Superpowers
              </span>
              <br />
              <span className="text-white">Packed Into One</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to become a successful trader, all in one powerful platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 transform scale-105'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} ${
                      activeFeature === index ? 'scale-110' : 'group-hover:scale-105'
                    } transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} ${
                      activeFeature === index ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Visual Display */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-96 flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${features[activeFeature]?.color || 'from-purple-500 to-pink-500'} rounded-full animate-ping`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                {/* Feature Icon Display */}
                <div className="relative z-10 text-center">
                  <div className={`inline-flex p-8 bg-gradient-to-br ${features[activeFeature]?.color || 'from-purple-500 to-pink-500'} rounded-3xl mb-6 transform transition-all duration-500 ${
                    activeFeature >= 0 ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  }`}>
                    <div className="text-white text-6xl">
                      {features[activeFeature]?.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {features[activeFeature]?.title}
                  </h3>
                  <p className="text-gray-300 max-w-sm">
                    {features[activeFeature]?.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="text-white">Why Trade Alone When You Can</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Learn And Grow
                </span>
                <br />
                <span className="text-white">With Top Traders?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our exclusive member's club and transform your trading journey. Learn proven strategies, get market insights, and connect with successful traders who share their expertise.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Access to proven trading strategies",
                  "Real-time market analysis & insights",
                  "Expert-led live trading sessions",
                  "Dedicated community support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105">
                Build Your Network
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Our community members come from various domains such as business, law, finance, technology, sports and investment banking."
                </p>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-400">Verified Community</span>
                </div>
              </div>
            </div>
          </div>
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

      {/* Pricing Section */}
      <section id="plans" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Choose Your</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Trading Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful traders with proven strategies tailored to your trading style.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${
                  plan.popular 
                    ? 'lg:scale-110 z-10' 
                    : 'lg:hover:scale-105'
                } transition-all duration-500`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold z-20">
                    <Crown className="inline-block w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' 
                    : 'border-white/10 group-hover:border-white/30 group-hover:bg-white/10'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${plan.color} rounded-2xl mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-2xl'
                      : 'border-2 border-purple-500 hover:bg-purple-500/10 text-white hover:border-purple-400'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">7-Day Money Back</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center space-x-2 text-blue-400">
                <Users className="w-5 h-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center space-x-2 text-purple-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative border-t border-white/10 py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-liquid-float" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-liquid-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
                StoXify
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
                Empowering India's Trading Community with proven strategies, expert guidance, and a supportive network of successful traders.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'YouTube', 'Telegram'].map((social, index) => (
                  <button
                    key={social}
                    className="group w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-white">
                      {social.charAt(0)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Features', 'Pricing', 'Success Stories', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  <span>support@stoxify.in</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Join our community</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Award className="w-5 h-5 text-green-400" />
                  <span>SEBI Reg. Research Analyst</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 StoXify. All rights reserved. • SEBI Registered Research Analyst • INH000009816
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#disclaimer" className="hover:text-white transition-colors duration-300">Risk Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoxifyWebsite;