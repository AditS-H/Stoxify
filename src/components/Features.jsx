import { TrendingUp, Users, Target, BookOpen, BarChart3, Shield, Zap, Star, Play, Award, Brain, Eye, Activity, Check, Crown, Sparkles, LineChart, PieChart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Features = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  const pricingPlans = [
    {
      name: "STOCKS",
      monthlyPrice: "₹2,999",
      annualPrice: "₹29,990",
      period: isAnnually ? "/year" : "/month",
      description: "Daily Swing & Breakout Trade Ideas (Equity & Futures)",
      features: [
        "Daily Swing & Breakout Trade Ideas (Equity & Futures)",
        "Investment Ideas - Short, Medium & Long-Term Opportunities",
        "Pre-Market Watchlist + Weekly Market Outlook",
        "Exclusive Stock Screeners - Advanced Filtering Tools",
        "Monthly Webinars & Group Discussions",
        "News Events & Economic Calendars"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: <LineChart className="w-8 h-8" />
    },
    {
      name: "FOREX",
      monthlyPrice: "₹4,999",
      annualPrice: "₹49,990",
      period: isAnnually ? "/year" : "/month",
      description: "20+ Weekly Setups - Forex Trade Ideas (Major & Minor Pairs)",
      features: [
        "20+ Weekly Setups - Forex Trade Ideas (Major & Minor Pairs)",
        "Complete Trade Details - Entry, Stop-Loss, and Target Prices",
        "High Win-Rate Strategies (Up to 83%) - Educational Use Only",
        "Risk Management & Lot Sizing Guidance",
        "3500+ Pips Monthly Potential (For Tracking & Study)",
        "News Trading With the Community",
        "Weekly Market Review & Watchlist"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500",
      icon: <PieChart className="w-8 h-8" />
    },
    {
      name: "CRYPTO",
      monthlyPrice: "₹3,999",
      annualPrice: "₹39,990",
      period: isAnnually ? "/year" : "/month",
      description: "20+ Crypto Setups weekly (scalping, swing, trend reversal patterns)",
      features: [
        "20+ Crypto Setups weekly (scalping, swing, trend reversal patterns)",
        "Trade Breakdown - entries, SL, and target zones",
        "Weekly Watchlists & market sentiment analysis",
        "News-Based Sessions with real-time community chat",
        "Monthly Webinars on trading strategies and market cycles",
        "Community Discussions - Q&A and trade reviews"
      ],
      popular: false,
      color: "from-cyan-500 to-blue-500",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Why Choose StoXify Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Why Choose </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">StoXify</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get ready to level up your trading game.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Top Row */}
            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Trading Strategies</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Access to the same strategies I use to generate asymmetric returns with low risk
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast-Moving Identification</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Learn to spot explosive stocks and perfect entry timing
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Video Lessons</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Step-by-step breakdowns of real trades and execution
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Exclusive Watchlist</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Get curated updates to stay ahead of the market
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scanning Techniques</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Build your personalized watchlist with expert filters
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Swing Trading</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Master short-term profits while keeping your day job
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-gray-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Monthly Q&As</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Get your questions answered in interactive sessions
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Technical Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Learn to spot key setups and read charts effectively
              </p>
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
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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

              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105">
                Build Your Network
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Trading Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of successful traders with proven strategies tailored to your trading style.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-full p-2 border border-white/10">
                <div className="flex items-center">
                  <button
                    onClick={() => setIsAnnually(false)}
                    className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                      !isAnnually
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Quarterly
                  </button>
                  <button
                    onClick={() => setIsAnnually(true)}
                    className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 relative ${
                      isAnnually
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Annually
                    {isAnnually && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        SAVE 30%
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold z-20">
                    Most Popular
                  </div>
                )}

                <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                    : 'border-white/10 group-hover:border-white/30 group-hover:bg-white/10'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${plan.color} rounded-2xl mb-4`}>
                      {plan.icon}
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-white mr-2">{plan.name}</span>
                    </div>
                    
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {isAnnually ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl'
                      : 'border-2 border-blue-500 hover:bg-blue-500/10 text-white hover:border-blue-400'
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
              <div className="flex items-center space-x-2 text-cyan-400">
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