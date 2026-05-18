import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap, ArrowRight, Check, Star, Shield, Calendar, Clock,
  MessageCircle, Globe, Languages, ChevronLeft, ChevronRight,
  ArrowUpRight, Sparkles, TrendingUp, Target, Smartphone
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SolutionSales() {
  // ─── HERO CHAT WIDGET STATES ───
  const [heroChatStep, setHeroChatStep] = useState(0);
  const [dealValue, setDealValue] = useState('$10,000');
  const [assignedRep, setAssignedRep] = useState('Emma Watson');
  const [bookedSlot, setBookedSlot] = useState('');

  // ─── REVIEWS CAROUSEL ───
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    { quote: "Landbot helps us capture high quality leads.", author: "Pradikta A.", role: "Growth Manager", avatar: "https://i.pravatar.cc/150?u=pradikta" },
    { quote: "It allows to create bots for Facebook, Web & WhatsApp", author: "Daniel C.", role: "MarTech Director", avatar: "https://i.pravatar.cc/150?u=daniel" },
    { quote: "Landbot is the best chatbot tool in the market", author: "Guilherme S.", role: "CEO", avatar: "https://i.pravatar.cc/150?u=guilherme" },
    { quote: "Easy builder for high impact conversations!", author: "Narciso M", role: "Innovation Coordinator", avatar: "https://i.pravatar.cc/150?u=narciso" },
  ];

  const nextReview = () => setReviewIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // ─── HERO HANDLERS ───
  const handleSimulateSales = (budget) => {
    setDealValue(budget);
    if (budget === 'VIP Enterprise ($10k+)') {
      setAssignedRep('Emma Watson');
    } else {
      setAssignedRep('David Miller');
    }
    setHeroChatStep(1);
    setTimeout(() => setHeroChatStep(2), 1200);
  };

  const handleBookSlot = (slot) => {
    setBookedSlot(slot);
    setHeroChatStep(3);
  };

  // ─── DATA ───
  const benefits = [
    {
      title: "Speed up response times and book more meetings",
      desc: "Not letting quality slip through the cracks.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&h=400&fit=crop"
    },
    {
      title: "Allocate resources by prioritizing high-potential leads",
      desc: "Through automated qualification.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
    },
    {
      title: "Engage leads on their preferred channels",
      desc: "Your website, WhatsApp, Facebook Messenger, or anywhere.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=400&fit=crop"
    },
    {
      title: "Deliver personalized responses at scale",
      desc: "Tailoring interactions to leads' needs and language.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
    }
  ];

  const capabilities = [
    {
      title: 'Qualify prospects automatically',
      desc: 'Score leads based on your sales criteria and answer FAQs around the clock.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Book more meetings',
      desc: "Automate the appointment scheduling process so it's easy for customers.",
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Nurture leads to purchase',
      desc: "Send instant follow-ups, etc. to keep leads interested until they're ready to buy.",
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      quote: "We grew our loan collections service on WhatsApp by over 4,000% in just a few months after opening the channel.",
      company: "MeinAuto",
      metric: "4,000% WhatsApp Growth"
    },
    {
      quote: "Before, FAQs would normally be answered on the phone or on the booked appointments. Now, they're getting answered ahead of those appointments.",
      company: "Choices Real Estate",
      metric: "75% Call Deflection"
    }
  ];

  const templates = [
    {
      title: 'Basic Lead Generation',
      desc: 'Collect name, email, and other basic info from visitors & generate leads with this free bot template.',
      tag: 'Web Only'
    },
    {
      title: 'WhatsApp Opt-In Bot',
      desc: "Use this template to create an Opt-in, asking the user's consent to send them proactive Messages via WhatsApp.",
      tag: 'WhatsApp Ready'
    },
    {
      title: 'Lead Qualification',
      desc: 'Qualify leads into prospects that convert with this free bot template.',
      tag: 'Web Only'
    }
  ];

  const logos = ['Salesforce', 'HubSpot', 'Calendly', 'Pipedrive', 'Marketo', 'Intercom', 'ActiveCampaign', 'Zapier'];
  const companyLogos = ['Allianz', 'MediaMarkt', 'BNP Paribas', 'Generali'];

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
                <Zap className="w-3.5 h-3.5" /> Sales Performance Engine
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter leading-[1.05] mb-6">
                Automate tedious tasks to focus on what matters; <span className="text-gradient">closing more deals</span>
              </h1>
              <p className="text-lg md:text-xl text-dark/60 font-medium leading-relaxed mb-8">
                AI Assistants and chatbots that help Sales teams drive revenue growth through increased productivity and efficiency.
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
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black">Sales Qualification Router</div>
                      <div className="text-[9px] text-white/70">Routing & Live Call Bookings</div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                      Welcome! Let's connect you with the right resource to evaluate our plans.<br /><br />
                      What is your estimated annual software budget?
                    </div>
                    {heroChatStep >= 1 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        It's {dealValue}.
                      </div>
                    )}
                    {heroChatStep >= 2 && (
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        {dealValue === 'VIP Enterprise ($10k+)' ? (
                          <div>
                            Perfect! You qualify for our VIP Enterprise Onboarding. 🏆<br /><br />
                            Let me schedule a live demonstration directly with <strong>{assignedRep}</strong> to review your custom needs.<br /><br />
                            Pick an available slot below:
                          </div>
                        ) : (
                          <div>
                            Great! You are a perfect fit for our automated standard workspace plan. Let me get you the link:<br /><br />
                            <Link to="/pricing" className="text-primary font-black underline block mt-1">Get Started Instantly</Link>
                          </div>
                        )}
                      </div>
                    )}
                    {heroChatStep >= 3 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        Selected slot: {bookedSlot}
                      </div>
                    )}
                    {heroChatStep >= 3 && (
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        🎉 Splendid! Your call is confirmed for <strong>{bookedSlot}</strong> with <strong>{assignedRep}</strong>.<br /><br />
                        An calendar invitation has been dispatched to your inbox. Let's grow!
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="p-3 border-t border-slate-150 bg-white flex flex-col gap-2 shrink-0">
                    {heroChatStep === 0 && (
                      <div className="flex flex-col gap-2">
                        <button onClick={() => handleSimulateSales('Standard (<$5k)')} className="w-full bg-slate-100 hover:bg-slate-200 text-dark text-[10px] font-black py-2.5 rounded-lg border-0">
                          💼 Standard Option (&lt;$5k)
                        </button>
                        <button onClick={() => handleSimulateSales('VIP Enterprise ($10k+)')} className="w-full bg-primary hover:bg-primary-light text-white text-[10px] font-black py-2.5 rounded-lg border-0">
                          🔥 VIP Enterprise ($10k+)
                        </button>
                      </div>
                    )}
                    {heroChatStep === 2 && dealValue === 'VIP Enterprise ($10k+)' && (
                      <div className="grid grid-cols-2 gap-2">
                        {['Today, 2:00 PM', 'Tomorrow, 10:00 AM'].map(slot => (
                          <button key={slot} onClick={() => handleBookSlot(slot)} className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-[9px] font-bold border-0">
                            📅 {slot}
                          </button>
                        ))}
                      </div>
                    )}
                    {heroChatStep === 3 && (
                      <div className="text-center w-full text-[9px] text-emerald-600 font-bold py-1 flex items-center justify-center gap-1.5 bg-emerald-50 rounded-lg">
                        <span>✓ Event Confirmed & Routed to Salesforce CRM</span>
                      </div>
                    )}
                    {heroChatStep === 1 && (
                      <div className="text-center w-full text-[9px] text-slate-400 font-bold py-1">Analyzing criteria and routing representative...</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: "SALES TEAMS RELYING ON FRIENDLY AUTOMATION" BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight mb-6">
              Sales teams relying on friendly automation to get back to selling <span className="text-primary">(finally)</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: HOW CHATBOTS FOR SALES HELP SIMPLIFY YOUR DAY-TO-DAY
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
              How chatbots for Sales and AI assistants help simplify your day-to-day
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Calendar className="w-8 h-8" />, title: "Appointments", desc: "Hassle-free booking. Speed up response times and book more meetings, not letting quality slip through the cracks." },
              { icon: <Target className="w-8 h-8" />, title: "Lead Scoring", desc: "Prioritize your leads. Allocate resources by prioritizing high-potential leads through automated qualification." },
              { icon: <Smartphone className="w-8 h-8" />, title: "Multi-Channel", desc: "Engage leads on their preferred channels: your website, WhatsApp, Facebook Messenger, or anywhere." },
              { icon: <Languages className="w-8 h-8" />, title: "Multilingual", desc: "Deliver personalized responses at scale, tailoring interactions to leads' needs and language." },
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
          SECTION 4: CHATBOTS FOR SALES THAT HELP YOU SELL MORE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-4">
              Chatbots for Sales that help you sell more
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-lg text-dark/65 font-medium">
              Say goodbye to repetitive admin work and hello (again) to selling more and connecting with clients. Remember those days?
            </p>
          </motion.div>

          <div className="space-y-24">
            {benefits.map((b, i) => (
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
                  <h3 className="text-2xl md:text-3xl font-black text-dark mb-4">{b.title}</h3>
                  <p className="text-dark/60 font-medium leading-relaxed text-lg">{b.desc}</p>
                </div>

                {/* Image Placeholder */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-lg aspect-[4/3] relative group">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: LEADS QUALIFIED, FAQS ANSWERED, CRM UPDATED
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
              Leads qualified, FAQs answered, CRM updated—done for you
            </h2>
            <p className="text-lg text-dark/65 max-w-3xl mx-auto font-medium">
              Improve conversion rates with easy meeting scheduling and provide a seamless customer experience from the start.
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

                {/* Image Placeholder */}
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
          SECTION 6: APP INTEGRATIONS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-border">
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
              Collect, update, and store the data your AI Assistants and chatbots gather for 360º insights on performance.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {logos.map((name, i) => (
              <div key={i} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-dark text-sm hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer">
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
          SECTION 7: CLIENT TESTIMONIALS + REVIEW CAROUSEL
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">What our clients say about EngageFlow</h2>
            <p className="text-lg text-dark/50 font-medium">Ready to get back to growing the business, just like our clients?</p>
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
                className="bg-white p-10 rounded-3xl border border-border hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
          SECTION 8: JUMPSTART YOUR LEAD MANAGEMENT JOURNEY (TEMPLATES)
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
              Jumpstart your lead management journey today
            </h2>
            <p className="text-lg text-dark/60 font-medium max-w-2xl mx-auto">
              Check out some of the most-beloved templates our clients find valuable to customize and deploy beautiful bots in no time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            {templates.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full mb-4">{t.tag}</span>
                  <h3 className="font-black text-dark text-lg mb-2">{t.title}</h3>
                  <p className="text-dark/50 text-sm font-medium leading-relaxed mb-6">{t.desc}</p>
                </div>
                <Link to="/resources/templates" className="text-primary font-bold text-xs flex items-center gap-1.5 hover:gap-3 transition-all mt-4 uppercase tracking-wider">
                  Use template free <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/resources/templates" className="text-sm font-black text-primary inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-wider">
              See all the templates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9: YOU'RE IN GOOD COMPANY (LOGOS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-12">You're in good company</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {companyLogos.map((brand, i) => (
                <div key={i} className="text-2xl font-black text-dark/40 hover:text-primary transition-colors cursor-default">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10: JOIN + TEMPLATES CTA (DARK)
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