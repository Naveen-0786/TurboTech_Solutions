import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HelpCircle, ArrowRight, CheckCircle2, Star, MessageSquare, Database, Settings,
  Clock, HeartHandshake, Shield, Sparkles, Smile, RefreshCw
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SolutionSupport() {
  // Simulator States
  const [supportCategory, setSupportCategory] = useState('Order Issues');
  const [resolutionType, setResolutionType] = useState('Instant KB Article Link');
  const [chatStep, setChatStep] = useState(0);

  const steps = [
    { n: '01', title: 'Deflect Frequent Questions', desc: 'Identify common repeated FAQs and resolve them instantly using structured or AI-powered dialogue cards.' },
    { n: '02', title: 'Collaborate Collectively', desc: 'Manage remaining complex conversations in a Shared Multi-Agent Team Inbox, assigning chats seamlessly.' },
    { n: '03', title: 'Optimize CSAT Scores', desc: 'Deploy automated feedback loops at the end of each conversation to track client satisfaction levels in real-time.' }
  ];

  const handleSimulateAnswer = () => {
    setChatStep(1);
    setTimeout(() => {
      setChatStep(2);
    }, 1500);
  };

  const resetSimulator = () => {
    setChatStep(0);
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden border-b border-border">
        <div className="glow-spot top-[-10%] left-[25%] w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="glow-spot top-[20%] right-[-10%] w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <HelpCircle className="w-4 h-4 text-primary" />
            CUSTOMER SUPPORT AUTOMATION
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-dark leading-[1.05] tracking-tighter mb-8 max-w-6xl mx-auto">
            Service Customers Instantly and Boost <span className="text-gradient">CSAT Ratings</span>
          </h1>

          <p className="text-xl text-dark/60 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
            Stop losing customers to support delays. Automate 75% of incoming support tickets with conversational AI and human takeover protocols.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="btn-primary !px-12 !py-5 text-base border-0 bg-primary hover:bg-primary-light">
              Automate Support Pipelines Free
            </Link>
            <Link to="/get-demo" className="btn-outline !px-12 !py-5 text-base">
              Talk to Customer Success Partner
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TICKET DEFLECTION SIMULATOR */}
      <section className="py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Ticket Deflection sandbox</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Deflect common issues before they hit your help desk
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Adjust variables in the Left Panel to watch your website chatbot automatically resolve incoming queries with structured materials in real-time!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Interactive Inputs (Left) */}
            <div className="lg:col-span-5 bg-muted/40 border border-border rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-dark border-b border-border pb-4 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Support Flow Variables
                </h3>

                {/* Common Issue */}
                <div className="space-y-3 mb-6">
                  <label className="text-xs font-black text-dark/60">Simulated Incoming Issue Category:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Order Issues', 'Billing Inquiry', 'Tech Bug'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSupportCategory(cat); resetSimulator(); }}
                        className={`py-2 px-3 text-[11px] font-black rounded-lg border transition-all ${
                          supportCategory === cat 
                            ? 'bg-primary text-white border-primary shadow-md' 
                            : 'bg-white border-border text-dark/60 hover:bg-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Auto Response */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-dark/60">AI Auto-Response Output Type:</label>
                  <div className="flex flex-col gap-2">
                    {['Instant KB Article Link', 'Automated Refund Pipeline', 'Deflect to Live Rep Mattia'].map((res) => (
                      <button
                        key={res}
                        onClick={() => { setResolutionType(res); resetSimulator(); }}
                        className={`text-left py-2.5 px-4 text-xs font-bold rounded-lg border transition-all ${
                          resolutionType === res 
                            ? 'bg-primary text-white border-primary shadow-sm' 
                            : 'bg-white border-border text-dark/60 hover:bg-white'
                        }`}
                      >
                        🤖 Send: {res}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex gap-3">
                <button
                  onClick={resetSimulator}
                  className="flex-1 bg-white hover:bg-muted text-dark border border-border text-xs font-black py-3.5 rounded-xl transition-all"
                >
                  Reset Bot Thread
                </button>
              </div>
            </div>

            {/* iPhone Chat (Right) */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-700 w-full max-w-[360px] relative">
                {/* Phone Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-full z-20" />
                
                <div className="bg-white rounded-2xl h-[420px] flex flex-col justify-between overflow-hidden relative">
                  {/* Chat Widget Header */}
                  <div className="bg-primary p-4 text-white flex items-center gap-2 shrink-0 pt-6">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">H</div>
                    <div>
                      <div className="text-xs font-black">Help Desk Assistant</div>
                      <div className="text-[9px] text-white/70">Uptime Uptime Guarantee: 99.9%</div>
                    </div>
                  </div>

                  {/* Chat Message Scroll */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left">
                    {chatStep >= 0 && (
                      <div className="bg-muted p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        Welcome to EngageFlow Support! 👋
                        <br /><br />
                        Please describe the issue you are facing today so I can assist you instantly.
                      </div>
                    )}

                    {chatStep >= 1 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        I am having {supportCategory}.
                      </div>
                    )}

                    {chatStep >= 2 && (
                      <div className="bg-muted p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        {resolutionType === 'Instant KB Article Link' && (
                          <div>
                            No problem! Here is our official article explaining how to resolve <strong>{supportCategory}</strong> instantly:
                            <br /><br />
                            <a href="#kb" className="text-primary font-black underline block mt-1">Open Knowledge Article</a>
                          </div>
                        )}
                        
                        {resolutionType === 'Automated Refund Pipeline' && (
                          <div>
                            No problem! I have cross-checked your order database and triggered an automated compensation check.
                            <br /><br />
                            <span className="text-emerald-600 font-bold block mt-1">✓ Auto Compensation Initiated</span>
                          </div>
                        )}

                        {resolutionType === 'Deflect to Live Rep Mattia' && (
                          <div>
                            Got it. Since this involves a complex query, I am transferring this chat thread directly to our advisor **Mattia**.
                            <br /><br />
                            <span className="text-primary font-bold block mt-1">⚡ Connecting Live Support Agent...</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* User inputs */}
                  <div className="p-3 border-t border-slate-100 bg-slate-50 flex gap-2 shrink-0">
                    {chatStep === 0 ? (
                      <button
                        onClick={handleSimulateAnswer}
                        className="w-full bg-primary hover:bg-primary-light text-white text-[10px] font-black py-2.5 rounded-lg text-center border-0"
                      >
                        "Submit Query ({supportCategory})"
                      </button>
                    ) : (
                      <div className="text-center w-full text-[9px] text-slate-400 font-bold py-1 flex items-center justify-center gap-1">
                        <span className="bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded">✓ Deflected Successfully</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-STEP SUPPORT FLOW */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">Support Optimization</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
              Scale customer success without scaling team overhead
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-xs hover:border-primary/20 transition-all">
                <div className="text-primary text-5xl font-black mb-6">{s.n}</div>
                <h3 className="text-xl font-black text-dark mb-3">{s.title}</h3>
                <p className="text-dark/60 font-medium leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Support Capabilities</span>
            <h2 className="text-4xl font-black text-dark tracking-tight">
              Deploy automated support on web and WhatsApp
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Smile, title: 'Instant CSAT Checkouts', desc: 'Deploy automated surveys at the end of each conversation to record direct user feedback and optimize logic scores.' },
              { icon: RefreshCw, title: 'Shared Collaboration Inbox', desc: 'Allow multiple support agents to collaboratively monitor ongoing chats, leave private tags, and hand off threads.' },
              { icon: Sparkles, title: 'AI Knowledge Graph Sync', desc: 'Ingest your Zendesk or Gitbook knowledge hubs. Let AI fetch, summarize, and resolve technical issues instantly.' }
            ].map((c, i) => (
              <div key={i} className="bg-muted/40 p-10 rounded-[2rem] border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-dark mb-3">{c.title}</h3>
                <p className="text-dark/60 font-medium leading-relaxed text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G2 REVIEWS / TESTIMONIALS */}
      <section className="py-28 bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary-light text-xs font-bold uppercase tracking-widest block mb-4">CSAT Achievements</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight !text-white">
              Why Customer Support leaders trust EngageFlow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-2xl font-black text-white mb-6 leading-relaxed">
                "We deflected 78% of incoming repetitive support chats in the first month. Our support inbox went from drowning to calm."
              </p>
              <span className="text-xs text-primary-light font-bold">Narciso M. · Customer Success Manager</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-2xl font-black text-white mb-6 leading-relaxed">
                "Connecting our Zendesk docs with the AI search engine resolved technical integrations instantly for buyers."
              </p>
              <span className="text-xs text-primary-light font-bold">Stefan van Ballegooie · Tech Support Director</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
