import { TrendingUp, Users, Target, BookOpen, BarChart3, Shield, Zap, Star, Play, Award, Brain, Eye, Activity, Check, Crown, Sparkles, LineChart, PieChart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Auto-rotate features
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
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
    </div>
  );
};

export default Features;