import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeartHandshake, ArrowRight, CheckCircle2, Star, MessageSquare, Database, Settings,
  Gift, Shield, Sparkles, Smile, RefreshCw
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SolutionEngagement() {
  // Simulator States
  const [retentionTrigger, setRetentionTrigger] = useState('Post-Purchase Feedback');
  const [loyaltyGift, setLoyaltyGift] = useState('VIP Lifetime Upgrade Invitation');
  const [chatStep, setChatStep] = useState(0);

  const steps = [
    { n: '01', title: 'Schedule Automated Triggers', desc: 'Deploy automated 30-day or 60-day post-purchase feedback loops on web or WhatsApp.' },
    { n: '02', title: 'Present Loyalty Rewards', desc: 'Engage clients directly by offering VIP discount codes or exclusive lifetime upgrades in a friendly dialogue.' },
    { n: '03', title: 'Collect Insight Feedback', desc: 'Secure direct client sentiment scores (NPS/CSAT) and store them in custom CRM profiles automatically.' }
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
            <HeartHandshake className="w-4 h-4 text-primary" />
            PROACTIVE CUSTOMER ENGAGEMENT
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-dark leading-[1.05] tracking-tighter mb-8 max-w-6xl mx-auto">
            Engage Customers Proactively to Enhance <span className="text-gradient">Loyalty</span>
          </h1>

          <p className="text-xl text-dark/60 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
            Nurture active client relationships. Automate custom post-purchase surveys, deliver VIP coupon cards, and gather NPS ratings seamlessly inside friendly chat dialogues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="btn-primary !px-12 !py-5 text-base border-0 bg-primary hover:bg-primary-light">
              Proactively Engage Shoppers Free
            </Link>
            <Link to="/get-demo" className="btn-outline !px-12 !py-5 text-base">
              Talk to Engagement Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ENGAGEMENT SIMULATOR */}
      <section className="py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Customer Loyalty Sandbox</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Re-engage existing shoppers with personalized loyalty parameters
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Adjust variables in the Left Panel to watch your website/WhatsApp chatbot automatically configure proactive re-engagement rewards in real-time!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Controls (Left) */}
            <div className="lg:col-span-5 bg-muted/40 border border-border rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-dark border-b border-border pb-4 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Retention Dialogue Settings
                </h3>

                {/* Retention Trigger */}
                <div className="space-y-3 mb-6">
                  <label className="text-xs font-black text-dark/60">Simulated Retention Campaign Trigger:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Post-Purchase Feedback', '60-Day Re-engagement'].map((trg) => (
                      <button
                        key={trg}
                        onClick={() => { setRetentionTrigger(trg); resetSimulator(); }}
                        className={`py-2 px-3 text-[11px] font-black rounded-lg border transition-all ${
                          retentionTrigger === trg 
                            ? 'bg-primary text-white border-primary shadow-md' 
                            : 'bg-white border-border text-dark/60 hover:bg-white'
                        }`}
                      >
                        {trg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Loyalty Gift */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-dark/60">Target Loyalty Reward Gift:</label>
                  <div className="flex flex-col gap-2">
                    {['VIP Lifetime Upgrade Invitation', 'Loyalty Free Shipping Code', 'VIP 20% Discount Ticket'].map((gift) => (
                      <button
                        key={gift}
                        onClick={() => { setLoyaltyGift(gift); resetSimulator(); }}
                        className={`text-left py-2.5 px-4 text-xs font-bold rounded-lg border transition-all ${
                          loyaltyGift === gift 
                            ? 'bg-primary text-white border-primary shadow-sm' 
                            : 'bg-white border-border text-dark/60 hover:bg-white'
                        }`}
                      >
                        🎁 Reward: {gift}
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
                  Reset Session
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
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">E</div>
                    <div>
                      <div className="text-xs font-black font-heading">Loyalty Engagement Assistant</div>
                      <div className="text-[9px] text-white/70">Secure Compliant Opt-ins Natively</div>
                    </div>
                  </div>

                  {/* Chat message flow */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left">
                    {chatStep >= 0 && (
                      <div className="bg-muted p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        Hi Sarah! It has been 30 days since your last purchase. We initiated a **{retentionTrigger}** campaign to thank you!
                        <br /><br />
                        Would you like us to send your **{loyaltyGift}** code directly to this thread?
                      </div>
                    )}

                    {chatStep >= 1 && (
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-[11px] leading-relaxed max-w-[80%] font-medium ml-auto">
                        Yes, I would love that!
                      </div>
                    )}

                    {chatStep >= 2 && (
                      <div className="bg-muted p-3 rounded-2xl rounded-bl-none text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium">
                        Fantastic! Here is your exclusive ticket coordinate:
                        <br /><br />
                        <span className="bg-emerald-500/10 text-emerald-600 px-3 py-1.5 rounded font-black block text-center text-xs mt-1 border border-emerald-500/20">
                          {loyaltyGift === 'VIP Lifetime Upgrade Invitation' ? '🎟️ VIP-INVITE-UPGRADE' : '🎁 LOYALTY-FREE-SHIP'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Reply Button */}
                  <div className="p-3 border-t border-slate-100 bg-slate-50 flex gap-2 shrink-0">
                    {chatStep === 0 ? (
                      <button
                        onClick={handleSimulateAnswer}
                        className="w-full bg-primary hover:bg-primary-light text-white text-[10px] font-black py-2.5 rounded-lg text-center border-0"
                      >
                        "Yes, claim my reward!"
                      </button>
                    ) : (
                      <div className="text-center w-full text-[9px] text-slate-400 font-bold py-1 flex items-center justify-center gap-1">
                        <span className="bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded">✓ VIP Customer Engaged</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-STEP RETENTION PIPELINE */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">Retention Funnels</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
              Gather insight surveys and reward customer loyalty
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

      {/* G2 SUCCESS STUDIES */}
      <section className="py-28 bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary-light text-xs font-bold uppercase tracking-widest block mb-4">Customer Retention Achievements</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight !text-white">
              Why retention teams choose EngageFlow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-2xl font-black text-white mb-6 leading-relaxed">
                "We increased proactive NPS survey completion rates by 48% by moving away from old, standard email forms to instant WhatsApp chats."
              </p>
              <span className="text-xs text-primary-light font-bold">Sarah K. · Director of Customer Engagement</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-2xl font-black text-white mb-6 leading-relaxed">
                "Customer life-time value (LTV) scaled 24% by triggering automated post-purchase discount rewards inside WhatsApp dialogues."
              </p>
              <span className="text-xs text-primary-light font-bold">Mattia G. · E-commerce Retention Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
