import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X, 
  Zap, 
  Shield, 
  ArrowRight, 
  Bot, 
  MessageCircle, 
  Globe, 
  Layers, 
  Users, 
  Database, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';

const PlanCard = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[2.5rem] border flex flex-col h-full transition-all duration-300 ${
        plan.popular 
          ? 'bg-white border-primary shadow-2xl shadow-primary/10 z-10 scale-105' 
          : 'bg-white border-border shadow-sm hover:shadow-lg hover:border-primary/20'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-black text-dark mb-2">{plan.name}</h3>
        <p className="text-xs text-dark/50 leading-relaxed min-h-[48px]">{plan.desc}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-dark tracking-tight">₹{price.toLocaleString()}</span>
          <span className="text-dark/40 font-bold">/mo</span>
        </div>
        {isAnnual && price !== 0 && (
          <div className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-2">
            Billed ₹{(price * 12).toLocaleString()} annually
          </div>
        )}
      </div>

      <button className={`w-full py-4 rounded-2xl font-bold transition-all mb-10 flex items-center justify-center gap-2 ${
        plan.popular ? 'btn-primary shadow-lg shadow-primary/20' : 'bg-muted text-dark hover:bg-primary/10 hover:text-primary'
      }`}>
        {plan.cta} <ArrowRight className="w-4 h-4" />
      </button>

      <div className="space-y-4 flex-grow">
        <div className="text-[10px] font-black text-dark/30 uppercase tracking-widest mb-4">Core Features</div>
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 rounded-full p-0.5 text-primary shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[4px]" />
            </div>
            <span className="text-xs text-dark/70 font-medium leading-snug">{feature}</span>
          </div>
        ))}
        {plan.missing?.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 opacity-30">
            <div className="mt-1 bg-slate-100 rounded-full p-0.5 text-slate-400 shrink-0">
              <X className="w-2.5 h-2.5" />
            </div>
            <span className="text-xs text-dark/70 font-medium leading-snug line-through">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ComparisonSection = ({ title, features, plans }) => (
  <div className="mb-12">
    <div className="bg-muted px-8 py-4 rounded-2xl text-[10px] font-black text-dark/40 uppercase tracking-[0.3em] mb-4">
      {title}
    </div>
    <div className="space-y-2">
      {features.map((feature, idx) => (
        <div key={idx} className="grid grid-cols-5 px-8 py-4 border-b border-border/50 items-center hover:bg-primary/5 transition-colors rounded-xl group">
          <div className="col-span-1">
            <div className="text-sm font-bold text-dark group-hover:text-primary transition-colors">{feature.name}</div>
            {feature.tooltip && <div className="text-[10px] text-dark/40 mt-0.5">{feature.tooltip}</div>}
          </div>
          {feature.values.map((val, vIdx) => (
            <div key={vIdx} className="col-span-1 text-center flex justify-center">
              {typeof val === 'boolean' ? (
                val ? <Check className="text-primary w-5 h-5 stroke-[3px]" /> : <X className="text-dark/10 w-5 h-5" />
              ) : (
                <span className="text-xs font-bold text-dark/70">{val}</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState('Web');

  const webPlans = [
    {
      name: "Sandbox",
      desc: "For testing and personal projects.",
      monthlyPrice: 0,
      annualPrice: 0,
      cta: "Get Started",
      features: ["100 chats/mo", "Visual builder", "Shared Turbo Tech domain", "Basic integrations", "Community support"]
    },
    {
      name: "Starter",
      desc: "For individuals and small startups.",
      monthlyPrice: 3600,
      annualPrice: 2700,
      cta: "Start Free Trial",
      features: ["500 chats/mo", "Custom domain", "Essential integrations", "Mailchimp & Slack", "Priority support"]
    },
    {
      name: "Professional",
      desc: "The complete solution for scaling teams.",
      monthlyPrice: 9000,
      annualPrice: 7200,
      popular: true,
      cta: "Start Free Trial",
      features: ["2,500 chats/mo", "Advanced logic", "Full design customization", "API & SDK access", "Salesforce & HubSpot"]
    },
    {
      name: "Business",
      desc: "Maximum power for enterprise growth.",
      monthlyPrice: 36000,
      annualPrice: 27000,
      cta: "Talk to Sales",
      features: ["Unlimited chats*", "SSO & SAML", "Security audit", "Dedicated manager", "On-premise option"]
    }
  ];

  const waPlans = [
    {
      name: "Sandbox WA",
      desc: "Test your WhatsApp automation flow.",
      monthlyPrice: 0,
      annualPrice: 0,
      cta: "Get Started",
      features: ["10 messages/mo", "Testing environment", "EngageFlow sandbox", "Basic AI support"]
    },
    {
      name: "Starter WA",
      desc: "Small scale WhatsApp communication.",
      monthlyPrice: 4500,
      annualPrice: 3500,
      cta: "Get Started",
      features: ["1,000 sessions/mo", "EngageFlow WhatsApp API", "Broadcast messages", "Standard AI agents"]
    },
    {
      name: "Pro WA",
      desc: "Full-scale WhatsApp marketing power.",
      monthlyPrice: 13500,
      annualPrice: 10800,
      popular: true,
      cta: "Start Free Trial",
      features: ["5,000 sessions/mo", "Advanced AI Agents", "Team inbox", "Automated campaigns", "CRM syncing"]
    },
    {
      name: "Enterprise WA",
      desc: "Global reach and volume.",
      monthlyPrice: 45000,
      annualPrice: 35000,
      cta: "Talk to Sales",
      features: ["Custom sessions", "Dedicated line", "Full API access", "24/7 Managed support"]
    }
  ];

  const plans = activeTab === 'Web' ? webPlans : waPlans;

  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">
      {/* Header Section */}
      <section className="py-24 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-dark mb-8 tracking-tighter leading-none">
            Pricing plans for every <br /> <span className="text-gradient">stage of your business</span>
          </h1>
          
          {/* Product Toggle Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1.5 rounded-2xl flex gap-2 shadow-inner">
              <button 
                onClick={() => setActiveTab('Web')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'Web' ? 'bg-white text-dark shadow-sm' : 'text-dark/40 hover:text-dark'}`}
              >
                Web Chatbots
              </button>
              <button 
                onClick={() => setActiveTab('WhatsApp')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'WhatsApp' ? 'bg-white text-dark shadow-sm' : 'text-dark/40 hover:text-dark'}`}
              >
                WhatsApp Automation
              </button>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-20">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-dark' : 'text-dark/40'}`}>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} className="w-14 h-7 bg-muted rounded-full p-1 relative hover:bg-primary/10 transition-colors">
              <motion.div animate={{ x: isAnnual ? 28 : 0 }} className="w-5 h-5 bg-primary rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-bold ${isAnnual ? 'text-dark' : 'text-dark/40'}`}>Yearly</span>
              <span className="bg-secondary/10 text-secondary text-[10px] font-black px-3 py-1 rounded-full">SAVE 20%</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {plans.map((plan, i) => (
                <PlanCard key={plan.name} plan={plan} isAnnual={isAnnual} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-dark mb-4 tracking-tight">Expand your possibilities</h2>
             <p className="text-dark/50 font-medium">Add-on channels and features to boost your bot performance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: "WhatsApp Pro", price: "₹2,700/mo", desc: "Unlock the full potential of WhatsApp Business API with unlimited templates." },
              { icon: Bot, title: "AI Agent Add-on", price: "₹4,500/mo", desc: "Integrate LLMs to make your bots smarter and more conversational." },
              { icon: Users, title: "Extra Seats", price: "₹1,350/mo", desc: "Collaborate with more team members in your shared workspace." }
            ].map((addon, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-border hover:border-primary/30 transition-all group">
                <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <addon.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-dark mb-2">{addon.title}</h3>
                <div className="text-lg font-black text-primary mb-4">{addon.price}</div>
                <p className="text-sm text-dark/50 leading-relaxed">Starting from {addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-padding overflow-x-auto">
        <div className="max-w-7xl mx-auto min-w-[1000px] px-6">
          <h2 className="text-4xl font-black text-dark mb-16 text-center">Compare features across plans</h2>
          
          <ComparisonSection 
            title="Builder & Design"
            features={[
              { name: "Visual Bot Builder", values: [true, true, true, true] },
              { name: "Global Branding", values: ["Turbo Tech", "Turbo Tech", "Custom", "Custom"] },
              { name: "CSS Customization", values: [false, false, true, true], tooltip: "Full control over your bot's CSS styling" },
              { name: "Variables & Logic", values: ["Basic", "Standard", "Advanced", "Full"] }
            ]}
          />

          <ComparisonSection 
            title="Integrations"
            features={[
              { name: "Google Sheets", values: [true, true, true, true] },
              { name: "Slack & Mailchimp", values: [false, true, true, true] },
              { name: "Zapier & Webhooks", values: [false, true, true, true] },
              { name: "Salesforce & HubSpot", values: [false, false, true, true] }
            ]}
          />

          <ComparisonSection 
            title="AI & Automation"
            features={[
              { name: "Standard AI blocks", values: [true, true, true, true] },
              { name: "Custom AI Agents", values: [false, "1 Agent", "5 Agents", "Unlimited"] },
              { name: "LLM Orchestration", values: [false, false, true, true] },
              { name: "A/B Testing", values: [false, false, true, true] }
            ]}
          />

          <ComparisonSection 
            title="Support"
            features={[
              { name: "Help Center", values: [true, true, true, true] },
              { name: "Standard Support", values: [true, true, true, true] },
              { name: "Priority Support", values: [false, "12h Response", "4h Response", "Instant"] },
              { name: "Success Manager", values: [false, false, false, true] }
            ]}
          />
        </div>
      </section>

      {/* Trust & Integrations Section */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/40 blur-[150px] rounded-full" />
           <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/30 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">Connect with the <br /> tools you love</h2>
              <p className="text-white/60 text-lg mb-12 max-w-xl">
                EngageFlow integrates natively with your favorite platforms. Sync data, automate workflows, and create a seamless experience for your team.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { name: "Salesforce", icon: Database },
                  { name: "HubSpot", icon: Layers },
                  { name: "Zapier", icon: Zap },
                  { name: "Google", icon: Globe },
                  { name: "Slack", icon: MessageSquare },
                  { name: "Stripe", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-[4rem] border border-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                   <div className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
                      <div className="text-sm font-bold italic">"EngageFlow doubled our conversion rate in 3 months."</div>
                   </div>
                   <div className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 ml-8">
                      <div className="bg-blue-500 w-3 h-3 rounded-full animate-pulse" />
                      <div className="text-sm font-bold italic">"The AI agent setup was incredibly intuitive."</div>
                   </div>
                   <div className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="bg-purple-500 w-3 h-3 rounded-full animate-pulse" />
                      <div className="text-sm font-bold italic">"Best WhatsApp API solution we've used so far."</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-dark mb-4">Pricing FAQ</h2>
            <p className="text-dark/50">Everything you need to know about our plans and billing.</p>
          </div>
          <div className="grid gap-6">
            {[
              { q: "What is a chat session?", a: "A chat session is a 24-hour window of communication between your bot and a user. One session can include unlimited messages within that window." },
              { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard settings." },
              { q: "Is there a setup fee?", a: "No, there are no hidden setup fees. You only pay the subscription price for your chosen plan." },
              { q: "How does the WhatsApp API billing work?", a: "Meta charges per conversation. We pass these costs through at cost, or include a set number of conversations in our higher-tier plans." },
              { q: "Do you offer enterprise-grade security?", a: "Yes, our Business and Enterprise plans include SOC2 compliance, data residency options, and custom security agreements." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border hover:border-primary/20 transition-all group">
                <div className="flex justify-between items-start gap-4 cursor-pointer">
                  <h4 className="font-bold text-dark text-lg group-hover:text-primary transition-colors">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ChevronDown className="w-4 h-4 text-dark/40" />
                  </div>
                </div>
                <p className="text-dark/50 mt-4 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-primary/5 rounded-[4rem] p-20 border border-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -mr-64 -mt-64 group-hover:scale-110 transition-transform" />
            <h2 className="text-5xl md:text-7xl font-black text-dark mb-8 tracking-tighter">Ready to start building?</h2>
            <p className="text-xl text-dark/60 mb-12 max-w-2xl mx-auto font-medium">
              Join 2,000+ companies that use EngageFlow to build conversational experiences.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="btn-primary !px-16 !py-6 text-xl shadow-2xl shadow-primary/30">Get Started for Free</button>
              <button className="bg-white text-dark border border-border hover:bg-muted px-16 py-6 rounded-2xl font-bold transition-all text-xl">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
