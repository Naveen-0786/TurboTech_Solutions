import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, ArrowRight, CheckCircle2, Star, MessageSquare, Database, Settings,
  Globe, Shield, Sparkles, FolderSync, Check, Play, Layout, Users, HeartHandshake,
  BarChart3, RefreshCw
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SolutionLeadGen() {
  // Simulator States
  const [heroChatStep, setHeroChatStep] = useState(0);
  const [adChannel, setAdChannel] = useState('Google Search Ad');
  const [userEmail, setUserEmail] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');

  // Interactive Funnel Diagnostics State (For Section 4)
  const [frictionFactor, setFrictionFactor] = useState('static-form'); // static-form vs chatbot

  const capabilities = [
    {
      title: 'Make your chatbot look and feel like your brand',
      desc: 'Customize UI elements including backgrounds, fonts, colours, and buttons or choose from predefined templates.'
    },
    {
      title: 'Build lead gen workflows faster with AI',
      desc: 'Accelerate workflow creation with an AI Copilot that streamlines setup, troubleshooting, and instant editing.'
    },
    {
      title: 'Bring AI intelligence into your existing flows',
      desc: 'Use intelligent agents to collect user data, access knowledge, and interact with rule-based flows, integrations and human handoffs.'
    }
  ];

  const caseStudies = [
    {
      title: "Arora Project",
      quote: "Arora Project triples their leads from Google Ads and slashes Cost-per-lead (CPL) by 30% with Landbot.",
      metric: "3x Leads & -30% CPL"
    },
    {
      title: "Conversational Design",
      quote: "Conversational design achieves +40% lead conversion rates with Landbot.",
      metric: "+40% Conversion Rate"
    },
    {
      title: "LikeMind Media",
      quote: "LikeMind Media boosted their conversions by 57% with Landbot.",
      metric: "+57% Conversions"
    },
    {
      title: "Wiredmark",
      quote: "Wiredmark grew their leads by 200% with Landbot.",
      metric: "+200% Lead Growth"
    }
  ];

  const reviews = [
    { quote: "It's versatile and easy to use. One of my favourite tools.", author: "Heini R.", role: "Graphic Designer" },
    { quote: "Landbot helps us capture high quality leads.", author: "Pradikta A.", role: "Growth Manager" },
    { quote: "Boosted my Lead Generation", author: "Guilherme L.", role: "Growth Hacker" },
    { quote: "Easy builder for high impact conversations!", author: "Narciso M.", role: "Innovation Coordinator" }
  ];

  const handleSimulateAdChannel = (channel) => {
    setAdChannel(channel);
    setHeroChatStep(1);
    setTimeout(() => {
      setHeroChatStep(2);
    }, 1200);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (userEmailInput.trim() === '') return;
    setUserEmail(userEmailInput);
    setHeroChatStep(3);
    setTimeout(() => {
      setHeroChatStep(4);
    }, 1200);
  };

  return (
    <div className="pt-20 bg-white font-sans text-dark leading-relaxed">
      {/* ──── HERO SECTION ──── */}
      <section className="relative py-28 bg-gradient-to-b from-primary/5 to-white overflow-hidden border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              animate="show"
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingUp className="w-3.5 h-3.5" /> High-Velocity Lead Generation
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter leading-[1.05] mb-6">
                Engage prospects in <span className="text-gradient">personalised conversations</span> and acquire more qualified leads at a lower cost.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link to="/pricing" className="btn-primary !px-10 !py-4 text-base border-0 bg-primary hover:bg-primary-light">
                  Try EngageFlow free
                </Link>
                <Link to="/get-demo" className="btn-outline !px-10 !py-4 text-base">
                  Get a Demo
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-xs text-dark/50 font-bold">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No Credit Card required</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No Coding required</span>
              </div>
            </motion.div>

            {/* Right Interactive Chatbot Column */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              animate="show"
              transition={{ delay: 0.2 }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <div className="bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-700 w-full max-w-[370px] relative">
                {/* Phone Speaker Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-full z-20" />
                
                <div className="bg-slate-50 rounded-2xl h-[440px] flex flex-col justify-between overflow-hidden relative border border-slate-200">
                  {/* Top Header */}
                  <div className="bg-primary p-4 text-white flex items-center gap-3 shrink-0 pt-6">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black">Lead Qualification Agent</div>
                      <div className="text-[9px] text-white/70">Contextual Inbound Funnel</div>
                    </div>
                  </div>

                  {/* Chat messages stream */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                      Hey there! Thanks for clicking our campaign. 👋
                      <br /><br />
                      I qualify inbound clicks instantly. How can I help you today?
                    </div>

                    {heroChatStep >= 1 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        Inbound click from: **{adChannel}**
                      </div>
                    )}

                    {heroChatStep >= 2 && (
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        Welcome, {adChannel} traffic! 🚀
                        <br /><br />
                        What is your business email? I will instantly qualification check your domain and store it in our pipeline database.
                      </div>
                    )}

                    {heroChatStep >= 3 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        {userEmail}
                      </div>
                    )}

                    {heroChatStep >= 4 && (
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        🎉 Splendid! Domain **{userEmail.split('@')[1]}** has been scored as a **Warm Corporate Prospect**.
                        <br /><br />
                        Would you like to try out our visual chatbot builder now for free?
                      </div>
                    )}
                  </div>

                  {/* Input or interactive choices */}
                  <div className="p-3 border-t border-slate-150 bg-white flex flex-col gap-2 shrink-0">
                    {heroChatStep === 0 && (
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => handleSimulateAdChannel('Google Search Ad')}
                          className="w-full bg-slate-100 hover:bg-slate-200 text-dark text-[10px] font-black py-2.5 rounded-lg border-0"
                        >
                          🌐 Simulate Google Search Traffic
                        </button>
                        <button
                          onClick={() => handleSimulateAdChannel('LinkedIn Campaign')}
                          className="w-full bg-primary hover:bg-primary-light text-white text-[10px] font-black py-2.5 rounded-lg border-0"
                        >
                          🔥 Simulate LinkedIn Inbound Click
                        </button>
                      </div>
                    )}

                    {heroChatStep === 2 && (
                      <form onSubmit={handleEmailSubmit} className="w-full flex gap-2">
                        <input
                          type="email"
                          required
                          value={userEmailInput}
                          onChange={(e) => setUserEmailInput(e.target.value)}
                          placeholder="Enter business email..."
                          className="flex-grow bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-[10px] focus:outline-none"
                        />
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg text-[10px] font-bold border-0">
                          Verify
                        </button>
                      </form>
                    )}

                    {heroChatStep === 4 && (
                      <Link
                        to="/pricing"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black py-3 rounded-lg text-center border-0 block"
                      >
                        ⚡ Build My Chatbot Free Today
                      </Link>
                    )}

                    {heroChatStep === 1 ? (
                      <div className="text-center w-full text-[9px] text-slate-400 font-bold py-1">
                        AI bot is qualifying domain metadata...
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── FOUR DETAILED SHOWCASE BANDS ──── */}
      {/* 1. Replace forms */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-6">
              Replace static forms with AI-powered conversations
            </h2>
            <p className="text-lg text-dark/60 font-medium mb-8 leading-relaxed">
              Capture data and opt-ins on web or Whatsapp with hybrid AI Agents that let users type or use UI elements, creating a smoother experience.
            </p>
            <div className="flex gap-4">
              <Link to="/products/whatsapp" className="btn-primary !bg-primary hover:!bg-primary-light">
                WhatsApp Automation
              </Link>
              <Link to="/products/website" className="btn-outline">
                Website Chatbots
              </Link>
            </div>
          </div>
          <div className="bg-slate-50 border border-border p-8 rounded-[2.5rem] text-left">
            <div className="text-xs font-black text-primary uppercase tracking-widest mb-4">💡 Conversational Interface Mockup</div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="text-[11px] text-dark/50 font-bold">Standard qualifying question</span>
              </div>
              <p className="text-xs font-black text-dark leading-relaxed">
                "What is your target onboarding capacity? Select the option below or just type your team size."
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-slate-50 text-[10px] font-bold rounded-lg border border-slate-200 text-dark/70">👥 1-10 Members</span>
                <span className="px-3 py-1.5 bg-slate-50 text-[10px] font-bold rounded-lg border border-slate-200 text-dark/70">🏢 100+ Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Send sales only leads that matter */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white border border-border p-8 rounded-[2.5rem] order-last lg:order-first text-left">
            <div className="text-xs font-black text-primary uppercase tracking-widest mb-4">🚦 Lead Qualification Pipeline</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-emerald-50 border border-emerald-100 p-4 rounded-2xl">
                <div>
                  <div className="text-xs font-black text-emerald-800">Lead: VIP Enterprise Client</div>
                  <div className="text-[10px] text-emerald-600 font-bold">Budget &gt; $10k annually · Qualified</div>
                </div>
                <span className="bg-emerald-600 text-white text-[9px] font-black px-2.5 py-1 rounded">Route to Sales</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 border border-slate-200 p-4 rounded-2xl opacity-75">
                <div>
                  <div className="text-xs font-black text-slate-800">Lead: Self-Serve Starter</div>
                  <div className="text-[10px] text-slate-500 font-bold">Individual developer · Inactive list</div>
                </div>
                <span className="bg-slate-400 text-white text-[9px] font-black px-2.5 py-1 rounded">Nurture email</span>
              </div>
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-6">
              Send sales only the leads that matter
            </h2>
            <p className="text-lg text-dark/60 font-medium mb-8 leading-relaxed">
              Route high-intent leads to sales, nurture the rest, and reduce manual lead scoring work for your team.
            </p>
            <Link to="/resources/templates" className="btn-primary">
              Explore Lead Generation templates
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Sync data */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-6">
              Sync clean lead data with your CRM or marketing stack
            </h2>
            <p className="text-lg text-dark/60 font-medium mb-8 leading-relaxed">
              Connect your AI agent to HubSpot, Salesforce, n8n, Zapier, Make, and more using native integrations or APIs.
            </p>
            <Link to="/products/integrations" className="btn-primary">
              View all integrations
            </Link>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] text-slate-300 text-left">
            <div className="text-xs font-black text-primary uppercase tracking-wider mb-4">🔌 Database Synchronization Hook</div>
            <div className="bg-slate-800/40 p-4 border border-slate-800 rounded-xl space-y-3 font-mono text-[10px]">
              <div><span className="text-amber-400">QUALIFIED_LEAD_INGESTION:</span></div>
              <div className="pl-4 text-slate-400">name: "Guilherme L."</div>
              <div className="pl-4 text-slate-400">email: "gui@growthhack.io"</div>
              <div className="pl-4 text-slate-400">domain_rank: "VIP Tier A"</div>
              <div className="pl-4 text-emerald-400">action: "Zapier webhook POST $\rightarrow$ HubSpot pipeline CRM active"</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Find leaks */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white border border-border p-8 rounded-[2.5rem] order-last lg:order-first text-left">
            <div className="text-xs font-black text-primary uppercase tracking-widest mb-4 flex justify-between">
              <span>📊 Active Funnel Diagnostics</span>
              <button 
                onClick={() => setFrictionFactor(frictionFactor === 'static-form' ? 'chatbot' : 'static-form')} 
                className="text-[9px] bg-slate-100 hover:bg-slate-200 border border-slate-200 px-2 py-0.5 rounded font-black text-dark/70 transition-colors"
              >
                🔄 Toggle Scenario
              </button>
            </div>
            
            {frictionFactor === 'static-form' ? (
              <div className="space-y-4">
                <div className="text-xs font-bold text-rose-600">Scenario: Standard Form drop-offs</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-dark/60"><span>Form Completion Rate</span> <span>12.5%</span></div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-rose-500 h-full w-[12.5%]" /></div>
                </div>
                <p className="text-[11px] text-dark/50 leading-relaxed font-medium">Traditional text input pages lead to massive user drop-offs when visitors encounter long contact sheets.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs font-bold text-emerald-600">Scenario: Automated Conversational Funnel</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-dark/60"><span>Funnel Completion Rate</span> <span>42.8%</span></div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full w-[42.8%]" /></div>
                </div>
                <p className="text-[11px] text-dark/50 leading-relaxed font-medium">Interactive welcome hooks secure immediate conversational retention, boosting qualifies by 3.5x.</p>
              </div>
            )}
          </div>
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-6">
              Find the leaks in your funnel and fix them
            </h2>
            <p className="text-lg text-dark/60 font-medium mb-8 leading-relaxed">
              Measure key metrics like drop-offs, conversions, and completion rates. Use them to identify friction, optimise your funnel, and improve CPL over time.
            </p>
            <Link to="/pricing" className="btn-primary">
              Explore all features
            </Link>
          </div>
        </div>
      </section>

      {/* ──── MID PAGE CTA RIBBON ──── */}
      <section className="py-20 bg-primary text-white text-center border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-left md:text-center">
          <h2 className="text-2xl md:text-3xl font-black !text-white leading-tight">
            Start building AI lead gen agents that convert
          </h2>
          <Link to="/pricing" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-dark shrink-0">
            Create AI Agent now
          </Link>
        </div>
      </section>

      {/* ──── CAPABILITIES GRID SECTION ──── */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">A human, on-brand chat experience your users can trust</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 group text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    {i === 0 ? <Layout className="w-6 h-6" /> : i === 1 ? <Sparkles className="w-6 h-6" /> : <FolderSync className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-black text-dark mb-4">{c.title}</h3>
                  <p className="text-dark/60 font-medium leading-relaxed text-sm mb-8">{c.desc}</p>
                </div>
                <Link to="/pricing" className="text-sm font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                  Try free <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CLIENT TESTIMONIALS SECTION ──── */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">What our clients say about EngageFlow</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-black text-primary uppercase tracking-widest mb-3">🏆 {cs.title} Case Study</div>
                  <p className="text-sm font-bold text-dark/80 mb-6 leading-relaxed">
                    "{cs.quote}"
                  </p>
                </div>
                <div>
                  <div className="text-xs font-black text-emerald-600 mb-4">{cs.metric}</div>
                  <Link to="/contact" className="text-xs font-black text-primary flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reviews ticker */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-dark/80 font-medium text-[11px] leading-relaxed mb-4">"{r.quote}"</p>
                <div className="text-dark/45 text-[10px] font-bold">{r.author} · {r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── STUNNING BOTTOM CTA METRICS SECTION ──── */}
      <section className="py-24 bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight !text-white">
              Accelerate qualified pipelines 3x faster
            </h2>
            
            {/* Visual metrics grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
              {[
                { v: "+300%", t: "Increase Interactions" },
                { v: "3.5x", t: "Increase Qualified Leads" },
                { v: "-40%", t: "Reduce Marketing Ops Costs" },
                { v: "+57%", t: "Improve Lead Conversions" }
              ].map((m, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-primary-light mb-2">{m.v}</div>
                  <div className="text-[10px] font-black text-white/50 uppercase tracking-widest">{m.t}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary !px-10 !py-4 text-base border-0 bg-primary hover:bg-primary-light">
                Try EngageFlow free
              </Link>
              <Link to="/get-demo" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-dark">
                Get a Demo
              </Link>
            </div>
            <div className="text-center text-[10px] text-white/30 font-bold mt-4">
              ✓ No Credit Card required
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
