import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Globe
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'AI Agent Chatbots', path: '/products/ai-agents' },
      { name: 'WhatsApp Chatbots', path: '/products/whatsapp' },
      { name: 'Website Chatbots', path: '/products/website' },
      { name: 'Integrations', path: '/products/integrations' },
      { name: 'Pricing', path: '/pricing' }
    ],
    Solutions: [
      { name: 'Marketing', path: '/solutions/marketing' },
      { name: 'Sales', path: '/solutions/sales' },
      { name: 'Customer Support', path: '/solutions/support' },
      { name: 'Lead Generation', path: '/solutions/marketing' },
      { name: 'Agencies', path: '/solutions/marketing' }
    ],
    Resources: [
      { name: 'Academy', path: '/resources/academy' },
      { name: 'Blog', path: '/resources/blog' },
      { name: 'Community', path: '/resources/community' },
      { name: 'Templates', path: '/resources/templates' },
      { name: 'Developer Hub', path: '/developers' }
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Security', path: '/security' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ]
  };

  return (
    <footer className="bg-dark text-white pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-6 sm:gap-x-8 gap-y-12 md:gap-16 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary p-2 rounded-xl shadow-lg group-hover:rotate-6 transition-all">
                <Bot className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-xl font-black font-heading tracking-tight text-white">
                Turbo Tech <span className="text-primary">Solutions</span>
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed text-white/40 mb-8 max-w-[280px]">
              The #1 no-code platform for human-like WhatsApp automation and AI agents.
            </p>
            <div className="flex gap-2.5 sm:gap-3 items-center">
              {[Twitter, Linkedin, Facebook, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all shadow-sm border border-white/10" aria-label="Social Link">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-6 md:mb-8">{category}</h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm font-bold text-white/50 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] text-center">
            <span>© 2026 Turbo Tech Solutions. All rights reserved.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full text-[10px] font-black text-white/40 uppercase tracking-[0.2em] border border-white/10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All Systems Operational
            </div>
            <div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">English</span>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 sm:gap-10 opacity-20 hover:opacity-50 transition-opacity">
          {['GDPR Compliant', 'SOC2 Certified', 'ISO 27001', 'HIPAA Ready'].map(badge => (
            <span key={badge} className="text-[9px] font-black uppercase tracking-[0.3em] text-center">{badge}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
