import { Users, Award, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Enhanced Footer */}
      <footer className="relative border-t border-white/10 py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-liquid-float" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-white/10 rounded-full blur-3xl animate-liquid-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent mb-6">
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
                    className="group w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
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
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span>support@stoxify.in</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Users className="w-5 h-5 text-cyan-400" />
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

export default Footer;