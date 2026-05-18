import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3, Zap, Globe, Users, Target, TrendingUp,
  ArrowRight, CheckCircle2, Star, MessageSquare, Database, Settings, HelpCircle,
  Play, Layout, Check, Sparkles, BookOpen, HeartHandshake,
  ChevronLeft, ChevronRight, Bot, Mail, Calendar, MousePointerClick,
  Smartphone, MessageCircle, Instagram, Send, PieChart, ArrowUpRight
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SolutionMarketing() {
  // ─── HERO CHAT WIDGET STATES ───
  const [heroChatStep, setHeroChatStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');

  // ─── REVIEWS CAROUSEL ───
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    { quote: "Landbot helps us capture high quality leads.", author: "Pradikta A.", role: "Growth Manager", avatar: "https://i.pravatar.cc/150?u=pradikta" },
    { quote: "Boosted my Lead Generation", author: "Guilherme L", role: "Growth Hacker - Small business", avatar: "https://i.pravatar.cc/150?u=guilherme" },
    { quote: "A great way to get more from each Lead", author: "Juanjo S", role: "Owner - Small business", avatar: "https://i.pravatar.cc/150?u=juanjo" },
    { quote: "Easy builder for high impact conversations!", author: "Narciso M", role: "Innovation Coordinator", avatar: "https://i.pravatar.cc/150?u=narciso" },
    { quote: "It allows to create bots for Facebook, Web & WhatsApp", author: "Daniel C.", role: "MarTech Director", avatar: "https://i.pravatar.cc/150?u=daniel" },
    { quote: "Landbot is the best chatbot tool in the market", author: "Guilherme S.", role: "CEO", avatar: "https://i.pravatar.cc/150?u=guilhermes" },
  ];

  const nextReview = () => setReviewIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // ─── HERO HANDLERS ───
  const handleHeroNext = () => {
    setHeroChatStep(1);
    setTimeout(() => setHeroChatStep(2), 1200);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!userEmailInput.trim()) return;
    setUserEmail(userEmailInput);
    setHeroChatStep(3);
    setTimeout(() => setHeroChatStep(4), 1200);
  };

  // ─── DATA ───
  const capabilities = [
    {
      title: 'Create AI marketing chatbots',
      desc: 'Deploy sophisticated bots instantly and increase conversions across channels.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Manage leads automatically',
      desc: 'Qualify leads on autopilot and immediately reflect that data in your CRM.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Nurture leads to purchase',
      desc: 'Keep leads engaged and the conversation going until they\'re ready to buy.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      quote: "We increased lead generation by 10% in less than 24 hours and better understand our customers' needs to guide them.",
      company: "MeinAuto",
      metric: "10% Lead Increase"
    },
    {
      quote: "Before, FAQs would normally be answered on the phone or on the booked appointments. Now, they're getting answered ahead of those appointments.",
      company: "Choices Real Estate",
      metric: "75% Deflection Rate"
    }
  ];

  const templates = [
    {
      title: 'Basic Lead Generation',
      desc: 'Collect name, email, and other basic info from visitors & generate leads with this free bot template.',
      tag: 'Web'
    },
    {
      title: 'WhatsApp Opt-In Bot',
      desc: 'Create an opt-in, asking the user\'s consent to send them proactive messages via WhatsApp.',
      tag: 'WhatsApp'
    },
    {
      title: 'Lead Qualification',
      desc: 'Qualify leads into prospects that convert with this free bot template.',
      tag: 'Web'
    }
  ];

  const logos = ['HubSpot', 'Salesforce', 'Zapier', 'Google Sheets', 'Slack', 'Mailchimp', 'ActiveCampaign', 'Pipedrive'];

  return (
    <div className="pt-20 bg-white font-sans text-dark leading-relaxed">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 bg-gradient-to-b from-primary/5 to-white overflow-hidden border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <BarChart3 className="w-3.5 h-3.5" /> Conversational Marketing
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter leading-[1.05] mb-6">
                Convert more leads into <span className="text-gradient">qualified prospects</span>
              </h1>
              <p className="text-lg md:text-xl text-dark/60 font-medium leading-relaxed mb-8">
                You bring the traffic. Our AI-powered chatbots effectively engage leads across channels, so you can turn them into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link to="/pricing" className="btn-primary !px-10 !py-4 text-base border-0 bg-primary hover:bg-primary-light">
                  Try EngageFlow free
                </Link>
                <Link to="/get-demo" className="btn-outline !px-10 !py-4 text-base">
                  Get a demo
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-xs text-dark/50 font-bold">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No Credit Card required</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No Coding required</span>
              </div>
            </motion.div>

            {/* Right: Interactive Chat Widget (Phone Mockup) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <div className="bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-700 w-full max-w-[370px] relative">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-full z-20" />
                <div className="bg-slate-50 rounded-2xl h-[440px] flex flex-col justify-between overflow-hidden relative border border-slate-200">
                  {/* Header */}
                  <div className="bg-primary p-4 text-white flex items-center gap-3 shrink-0 pt-6">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black">EngageFlow Assistant</div>
                      <div className="text-[9px] text-white/70">Marketing Lead Qualification</div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                      Hey there! Welcome to our site. 👋<br /><br />
                      I qualify traffic in real-time. What is your primary objective today?
                    </div>
                    {heroChatStep >= 1 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        I want to boost lead conversion!
                      </div>
                    )}
                    {heroChatStep >= 2 && (
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        Excellent choice! Conversational bots capture up to 3x more leads than static forms. 🚀<br /><br />
                        What is your business email? I will instantly deliver our customized <strong>Lead Acquisition Blueprint</strong>!
                      </div>
                    )}
                    {heroChatStep >= 3 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        {userEmail}
                      </div>
                    )}
                    {heroChatStep >= 4 && (
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        🎉 Done! The guide has been dispatched to <strong>{userEmail}</strong>.<br /><br />
                        Would you like to schedule an exclusive 15-minute roadmap consultation with our marketing lead?
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="p-3 border-t border-slate-150 bg-white flex gap-2 shrink-0">
                    {heroChatStep === 0 && (
                      <button onClick={handleHeroNext} className="w-full bg-primary hover:bg-primary-light text-white text-[10px] font-black py-3 rounded-lg border-0">
                        ⚡ Boost Inbound Lead Conversion
                      </button>
                    )}
                    {heroChatStep === 2 && (
                      <form onSubmit={handleEmailSubmit} className="w-full flex gap-2">
                        <input type="email" required value={userEmailInput} onChange={(e) => setUserEmailInput(e.target.value)}
                          placeholder="Enter your email address..."
                          className="flex-grow bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-[10px] focus:outline-none" />
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg text-[10px] font-bold border-0">Submit</button>
                      </form>
                    )}
                    {heroChatStep === 4 && (
                      <Link to="/get-demo" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black py-3 rounded-lg text-center border-0 block">
                        📅 Yes, Book My Consultation Slot
                      </Link>
                    )}
                    {(heroChatStep === 1 || heroChatStep === 3) && (
                      <div className="text-center w-full text-[9px] text-slate-400 font-bold py-1">AI bot is formulating response...</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: "MARKETING TEAMS LOVE" BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight mb-6">
              Marketing teams love <span className="text-primary">💕</span> increasing lead conversion rates with EngageFlow
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: HOW TO SUPPORT YOUR MARKETING STRATEGY
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-4">
              How to support your marketing strategy with AI chatbots
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MousePointerClick className="w-8 h-8" />, title: "Lead Generation", desc: "Capture leads 24/7 with conversational forms that convert 3x better than static forms." },
              { icon: <Target className="w-8 h-8" />, title: "Lead Qualification", desc: "Automatically score and qualify leads based on their responses and behavior." },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Lead Nurturing", desc: "Keep prospects engaged with personalized follow-ups until they're ready to buy." },
              { icon: <PieChart className="w-8 h-8" />, title: "Analytics & Insights", desc: "Track every conversation, identify drop-offs, and optimize your funnel in real-time." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-dark mb-3">{item.title}</h3>
                <p className="text-dark/60 font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: LEAD CONVERSION, QUALIFICATION, NURTURING
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-4">
              Lead conversion, qualification, and nurturing made easy
            </h2>
            <p className="text-lg text-dark/65 max-w-3xl mx-auto font-medium">
              Impress your Sales and Customer Service teams by expertly managing leads, resulting in happy customers.
            </p>
          </motion.div>

          <div className="space-y-24">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    {c.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-dark mb-4">{c.title}</h3>
                  <p className="text-dark/60 font-medium leading-relaxed text-lg mb-6">{c.desc}</p>
                  <Link to="/pricing" className="text-sm font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                    Try free <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Product Screenshot Placeholder */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-lg aspect-[4/3] relative group">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    {/* UI Overlay mock */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          {c.icon}
                        </div>
                        <div>
                          <div className="text-xs font-black text-dark">{c.title}</div>
                          <div className="text-[10px] text-dark/50 font-medium">Live preview</div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-primary ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: APP INTEGRATIONS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-4">
              Connect EngageFlow to the apps you love 😍
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium mb-12">
              Reflect, update, and store data your chatbots collect to improve your day-to-day work efficiency.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {logos.map((name, i) => (
              <div key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-dark text-sm hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer">
                {name}
              </div>
            ))}
          </div>
          <Link to="/products/integrations" className="text-sm font-black text-primary inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-wider">
            See all built-in integrations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: CLIENT TESTIMONIALS + REVIEW CAROUSEL
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">What our clients say about EngageFlow</h2>
            <p className="text-lg text-dark/50 font-medium">Ready to make the most out of your Marketing budget through friendly automation like they have?</p>
          </motion.div>

          {/* Case Studies */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl border border-border hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-black text-primary uppercase tracking-widest mb-4">🏆 {cs.company} Case Study // {cs.metric}</div>
                  <p className="text-xl font-black text-dark mb-8 leading-relaxed">"{cs.quote}"</p>
                </div>
                <Link to="/contact" className="text-sm font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                  See case study <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Review Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: -reviewIndex * 320 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {reviews.map((r, i) => (
                  <div key={i} className="min-w-[300px] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex gap-1 mb-3">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-dark/80 font-medium text-sm leading-relaxed mb-4">"{r.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img src={r.avatar} alt={r.author} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="text-dark text-sm font-bold">{r.author}</div>
                        <div className="text-dark/45 text-xs font-medium">{r.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prevReview} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-dark" />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === reviewIndex ? 'bg-primary w-6' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
              <button onClick={nextReview} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-dark" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: YOU'RE IN GOOD COMPANY (LOGOS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-12">You're in good company</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['BNP Paribas', 'Loreal', 'Uber', 'Meta', 'Shopify', 'Stripe'].map((brand, i) => (
                <div key={i} className="text-xl font-black text-dark/40 hover:text-primary transition-colors cursor-default">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: JOIN + TEMPLATES CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight !text-white">
              Join 12,000+ businesses that use EngageFlow
            </h2>
            <p className="text-white/60 text-lg mb-12 font-medium max-w-2xl mx-auto">
              Pick a ready to use chatbot template and customise it as per your needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              {templates.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary-light text-[10px] font-bold rounded-full mb-4">{t.tag}</span>
                    <h3 className="font-black text-white text-lg mb-2">{t.title}</h3>
                    <p className="text-white/50 text-xs font-medium leading-relaxed mb-6">{t.desc}</p>
                  </div>
                  <Link to="/resources/templates" className="text-primary-light font-bold text-xs flex items-center gap-1.5 hover:gap-3 transition-all mt-4">
                    Use template free <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            <Link to="/resources/templates" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-dark inline-flex items-center gap-2">
              See all the templates <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}