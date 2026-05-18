import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bot,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Zap,
  Globe,
  Users,
  BookOpen,
  BarChart3,
  Code2,
  HeartHandshake,
  Sparkles,
  Layout,
  Car,
  Building2,
  Video,
  FileText,
  HelpCircle,
  Activity,
  UserCheck,
  ArrowRight,
  ClipboardList,
  Clock,
  ShoppingBag,
  Puzzle,
  Layers,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedSection(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Exact Landbot.io menu structure rebranded
  const menuItems = {
    Product: {
      "PRODUCTS": [
        { name: 'AI Agent Chatbots', desc: 'Combine the intelligence of AI with the control of rule-based chatbots to build enjoyable conversational experiences.', icon: Sparkles, path: '/products/ai-agents' },
        { name: 'EngageFlow WhatsApp', desc: 'Automate conversations on the world\'s most popular chat app.', icon: MessageSquare, path: '/products/whatsapp' },
        { name: 'Website Chatbots', desc: 'Generate leads and improve customer experience on the web.', icon: Layout, path: '/products/website' },
      ]
    },
    Solutions: {
      "BY TEAM": [
        { name: 'Marketing', desc: 'Maximize your lead acquisition performance and generate qualified leads for Sales teams.', icon: BarChart3, path: '/solutions/marketing' },
        { name: 'Sales', desc: 'Automate repetitive tasks, book meetings with high-intent leads, and close more deals with the help of AI.', icon: Zap, path: '/solutions/sales' },
      ],
      "BY USE CASE": [
        { name: 'Lead Generation', desc: 'Capture more leads at a lower cost & improve your marketing performance.', icon: TrendingUp, path: '/solutions/lead-generation' },
        { name: 'Customer Engagement', desc: 'Engaged proactively with customers to enhance loyalty and retention.', icon: HeartHandshake, path: '/solutions/customer-engagement' },
        { name: 'Customer Support', desc: 'Service customers with delightful support experiences & boost satisfaction.', icon: HelpCircle, path: '/solutions/support' },
      ],
      "BY INDUSTRY": [
        { name: 'Automotive', desc: 'Capture and convert more leads instantly for your automotive business.', icon: Car, path: '/solutions/automotive' },
        { name: 'Agency & Consulting', desc: 'Lower your CPL and drive higher lead conversions to boost your agency’s margins.', icon: Building2, path: '/solutions/agency-consulting' },
      ]
    },
    Resources: {
      "LEARN WITH ENGAGEFLOW": [
        { name: 'Academy', desc: 'Learn how to build and launch chatbots with guided video courses and tutorials.', icon: Video, path: '/resources/academy' },
        { name: 'Blog', desc: 'Explore chatbot tips, guides, and in-depth articles for multiple use cases.', icon: FileText, path: '/resources/blog' },
        { name: 'Community', desc: 'Connect with other users, ask questions, and share best practices.', icon: Users, path: '/resources/community' },
        { name: 'Whitepapers & Reports', desc: 'Comprehensive guides and industry insights to grow your chatbot strategy.', icon: BookOpen, path: '/resources/whitepapers' },
        { name: 'Knowledge Center', desc: 'Step-by-step tutorials and articles to help you master EngageFlow.', icon: HelpCircle, path: '/resources/knowledge-center' },
      ],
      "GET HELP": [
        { name: 'Help Docs', desc: 'Support articles to help manage your account, build your chatbots, and more.', icon: FileText, path: '/resources/help-docs' },
        { name: 'Service Status', desc: 'Check the real-time status of EngageFlow\'s systems and uptime.', icon: Activity, path: '/resources/service-status' },
        { name: 'EngageFlow Experts', desc: 'Find certified professionals to help you build and optimize chatbots.', icon: UserCheck, path: '/resources/experts' },
      ],
      "CHATBOT BUILDING": [
        { name: 'Chatbot Templates', desc: 'Easily create web and WhatsApp chatbots with ready-to-use templates.', icon: ClipboardList, path: '/resources/templates' },
        { name: 'API Documentation', desc: 'Explore our API and SDK to integrate EngageFlow with your tools.', icon: Code2, path: '/resources/api-docs' },
      ]
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDropdown(null)}
            className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-[90]"
          />
        )}
      </AnimatePresence>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${isScrolled || activeDropdown
            ? 'bg-white border-border py-3 shadow-sm'
            : 'bg-transparent border-transparent py-4 sm:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary p-2 rounded-xl shadow-lg group-hover:rotate-6 transition-all">
              <Bot className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base sm:text-lg font-black font-heading tracking-tight text-dark">Turbo Tech</span>
              <span className="text-[10px] sm:text-xs font-bold font-heading tracking-tight text-primary uppercase">Solutions</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Product */}
            <div className="relative py-2">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'Product' ? null : 'Product'); }}
                className="flex items-center gap-1 text-sm font-bold text-dark/80 hover:text-primary transition-colors"
              >
                Product <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'Product' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {/* Solutions */}
            <div className="relative py-2">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'Solutions' ? null : 'Solutions'); }}
                className="flex items-center gap-1 text-sm font-bold text-dark/80 hover:text-primary transition-colors"
              >
                Solutions <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {/* Resources */}
            <div className="relative py-2">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'Resources' ? null : 'Resources'); }}
                className="flex items-center gap-1 text-sm font-bold text-dark/80 hover:text-primary transition-colors"
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link to="/pricing" className="text-sm font-bold text-dark/80 hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="text-sm font-bold text-dark/80 hover:text-primary transition-colors">Contact Us</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link to="/login" className="text-sm font-bold text-dark/80 hover:text-primary px-4 py-2">
              Log In
            </Link>
            <Link to="/get-demo" className="btn-primary !px-8 !py-3 text-sm">
              Get a Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-dark/80 focus:outline-none" aria-label="Toggle Menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ───── PRODUCT MEGA MENU ───── */}
        <AnimatePresence>
          {activeDropdown === 'Product' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white border-t border-border shadow-2xl z-50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-[10px] font-black text-dark/30 uppercase tracking-[0.3em] mb-6 text-center">OUR SOLUTIONS</div>
                <div className="grid grid-cols-3 gap-6">
                  {menuItems.Product.PRODUCTS.map(item => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className="flex flex-col gap-3 p-4 rounded-2xl hover:bg-primary/5 transition-all group/item border border-transparent hover:border-primary/10 hover:shadow-xl hover:shadow-primary/5"
                    >
                      <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-dark text-sm mb-1 group-hover/item:text-primary transition-colors">{item.name}</div>
                        <div className="text-[11px] text-dark/50 leading-relaxed font-medium line-clamp-2">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ───── SOLUTIONS MEGA MENU ───── */}
        <AnimatePresence>
          {activeDropdown === 'Solutions' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white border-t border-border shadow-2xl z-50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-3 gap-12">
                  {Object.entries(menuItems.Solutions).map(([category, items]) => (
                    <div key={category}>
                      <div className="text-[10px] font-black text-dark/30 uppercase tracking-[0.3em] mb-5">{category}</div>
                      <div className="space-y-6">
                        {items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="bg-primary/5 p-2 rounded-lg text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shrink-0">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-dark text-sm group-hover/item:text-primary transition-colors leading-tight mb-0.5">{item.name}</div>
                              <div className="text-[10px] text-dark/50 leading-relaxed line-clamp-2">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ───── RESOURCES MEGA MENU ───── */}
        <AnimatePresence>
          {activeDropdown === 'Resources' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white border-t border-border shadow-2xl z-50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-3 gap-10">
                  {Object.entries(menuItems.Resources).map(([category, items]) => (
                    <div key={category}>
                      <div className="text-[10px] font-black text-dark/30 uppercase tracking-[0.3em] mb-5">{category}</div>
                      <div className="space-y-7">
                        {items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="bg-primary/5 p-2 rounded-lg text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shrink-0">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-dark text-sm group-hover/item:text-primary transition-colors leading-tight mb-0.5">{item.name}</div>
                              <div className="text-[10px] text-dark/50 leading-relaxed line-clamp-2">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu (Accordion Style) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="lg:hidden fixed inset-0 bg-white z-[150] p-6 sm:p-8 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center mb-8 sm:mb-10">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="bg-primary p-2 rounded-xl"><Bot className="text-white w-5 h-5 sm:w-6 sm:h-6" /></div>
                    <div className="flex flex-col leading-none">
                      <span className="text-base sm:text-lg font-black font-heading tracking-tight text-dark">Turbo Tech</span>
                      <span className="text-[10px] sm:text-xs font-bold font-heading tracking-tight text-primary uppercase">Solutions</span>
                    </div>
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-dark/80 focus:outline-none" aria-label="Close Menu">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Collapsible Accordion Links */}
                <div className="space-y-4">
                  {/* Product Accordion */}
                  <div>
                    <button
                      onClick={() => toggleSection('Product')}
                      className="w-full flex items-center justify-between text-base sm:text-lg font-bold text-dark border-b border-border pb-3 text-left focus:outline-none"
                    >
                      <span>Product</span>
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${expandedSection === 'Product' ? 'rotate-180 text-primary' : 'text-dark/50'}`} />
                    </button>
                    <AnimatePresence>
                      {expandedSection === 'Product' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-muted/50 rounded-2xl mt-2 px-4 py-2 space-y-2"
                        >
                          {menuItems.Product.PRODUCTS.map(item => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2 group"
                            >
                              <div className="bg-white p-2 rounded-xl text-primary shadow-sm border border-primary/5">
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-bold text-dark group-hover:text-primary transition-colors">{item.name}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions Accordion */}
                  <div>
                    <button
                      onClick={() => toggleSection('Solutions')}
                      className="w-full flex items-center justify-between text-base sm:text-lg font-bold text-dark border-b border-border pb-3 text-left focus:outline-none"
                    >
                      <span>Solutions</span>
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${expandedSection === 'Solutions' ? 'rotate-180 text-primary' : 'text-dark/50'}`} />
                    </button>
                    <AnimatePresence>
                      {expandedSection === 'Solutions' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-muted/50 rounded-2xl mt-2 px-4 py-3 space-y-3"
                        >
                          {Object.entries(menuItems.Solutions).map(([category, items]) => (
                            <div key={category} className="space-y-1.5">
                              <div className="text-[9px] font-black text-dark/30 uppercase tracking-[0.2em]">{category}</div>
                              <div className="grid grid-cols-1 gap-1.5 pl-1">
                                {items.map(item => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 py-1.5 group"
                                  >
                                    <div className="bg-white p-1.5 rounded-lg text-primary shadow-sm border border-primary/5">
                                      <item.icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="text-xs font-bold text-dark group-hover:text-primary transition-colors">{item.name}</div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Resources Accordion */}
                  <div>
                    <button
                      onClick={() => toggleSection('Resources')}
                      className="w-full flex items-center justify-between text-base sm:text-lg font-bold text-dark border-b border-border pb-3 text-left focus:outline-none"
                    >
                      <span>Resources</span>
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${expandedSection === 'Resources' ? 'rotate-180 text-primary' : 'text-dark/50'}`} />
                    </button>
                    <AnimatePresence>
                      {expandedSection === 'Resources' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-muted/50 rounded-2xl mt-2 px-4 py-3 space-y-3 max-h-[250px] overflow-y-auto"
                        >
                          {Object.entries(menuItems.Resources).map(([category, items]) => (
                            <div key={category} className="space-y-1.5">
                              <div className="text-[9px] font-black text-dark/30 uppercase tracking-[0.2em]">{category}</div>
                              <div className="grid grid-cols-1 gap-1.5 pl-1">
                                {items.map(item => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 py-1.5 group"
                                  >
                                    <div className="bg-white p-1.5 rounded-lg text-primary shadow-sm border border-primary/5">
                                      <item.icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="text-xs font-bold text-dark group-hover:text-primary transition-colors">{item.name}</div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Flat Links */}
                  <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-base sm:text-lg font-bold text-dark border-b border-border pb-3">Pricing</Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base sm:text-lg font-bold text-dark border-b border-border pb-3">Contact Us</Link>
                </div>
              </div>

              {/* Action Buttons at bottom of mobile menu */}
              <div className="pt-8 flex flex-col gap-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn-outline text-center py-3.5 text-sm sm:text-base">Log In</Link>
                <Link to="/get-demo" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center py-3.5 text-sm sm:text-base">Get a Demo</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
