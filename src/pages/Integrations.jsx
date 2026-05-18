import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  Link2, 
  Cpu, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  Search,
  Code2,
  Workflow,
  Share2,
  Lock,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'CRM', 'Marketing', 'E-commerce', 'Payment', 'Communication', 'Developer Tools'];

const integrations = [
  { name: 'Salesforce', cat: 'CRM', desc: 'Sync leads and customer data instantly.', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968914.png' },
  { name: 'HubSpot', cat: 'CRM', desc: 'Manage workflows and lead scoring.', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968872.png' },
  { name: 'Shopify', cat: 'E-commerce', desc: 'Automate order tracking and sales.', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
  { name: 'Stripe', cat: 'Payment', desc: 'Collect payments inside conversations.', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968382.png' },
  { name: 'Zendesk', cat: 'Communication', desc: 'Route tickets to support agents.', icon: 'https://cdn-icons-png.flaticon.com/512/732/732242.png' },
  { name: 'Slack', cat: 'Communication', desc: 'Get real-time internal alerts.', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968929.png' },
  { name: 'Mailchimp', cat: 'Marketing', desc: 'Sync subscribers and segments.', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968879.png' },
  { name: 'Zapier', cat: 'Developer Tools', desc: 'Connect to 5,000+ other apps.', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969014.png' },
];

export default function Integrations() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-surface py-40 overflow-hidden relative border-b border-border">
        <div className="glow-spot top-0 right-0 w-[800px] h-[800px] bg-primary/10" />
        <div className="section-padding text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-12">
               Connect Everything
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter uppercase leading-[0.85]">
              Seamless <br />
              <span className="text-gradient">Integrations</span>
            </h1>
            <p className="text-xl md:text-3xl text-dark/60 max-w-3xl mx-auto font-medium leading-relaxed">
              Turbo Tech Solutions fits perfectly into your existing stack. 
              Connect with the tools you use every day without writing a single line of code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-24">
         <div className="section-padding">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
               <div className="flex flex-wrap items-center gap-4">
                  {categories.map(cat => (
                    <button key={cat} className={`px-6 py-2.5 rounded-full text-xs font-black transition-all ${cat === 'All' ? 'bg-primary text-white shadow-lg' : 'bg-surface text-dark/40 hover:text-primary'}`}>{cat}</button>
                  ))}
               </div>
               <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/20" />
                  <input type="text" placeholder="Find an integration..." className="w-full bg-surface border border-border rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-primary/50" />
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {integrations.map((int, i) => (
                 <div key={i} className="premium-card p-10 border border-border hover:border-primary/20 hover:shadow-xl transition-all group cursor-pointer">
                    <div className="w-16 h-16 mb-8 p-3 bg-white rounded-2xl shadow-sm border border-border group-hover:scale-110 transition-transform">
                       <img src={int.icon} alt={int.name} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 tracking-tight">{int.name}</h4>
                    <p className="text-dark/40 text-sm font-medium leading-relaxed mb-8">{int.desc}</p>
                    <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                       Configure <ArrowRight className="w-4 h-4" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Advanced Features (API/Webhooks) */}
      <section className="py-40 bg-dark text-white rounded-[5rem] mx-6">
         <div className="section-padding">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-8">Developer Ready</h2>
                  <h3 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter uppercase leading-[0.85] mb-12">Total <br /> Control.</h3>
                  <div className="space-y-10">
                     {[
                       { t: "Robust API v4", d: "Deeply integrate our platform into your own applications with ease.", i: Code2 },
                       { t: "Instant Webhooks", d: "Send data to your server in real-time as interactions happen.", i: Zap },
                       { t: "Custom SDKs", d: "Built-in support for React, Vue, and vanilla JS implementations.", i: Cpu }
                     ].map((feat, i) => (
                       <div key={i} className="flex gap-8">
                          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10"><feat.i className="w-7 h-7" /></div>
                          <div>
                             <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{feat.t}</h4>
                             <p className="text-white/40 font-medium">{feat.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white/5 rounded-[4rem] p-12 border border-white/10">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-3 h-3 rounded-full bg-red-500" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500" />
                     <div className="w-3 h-3 rounded-full bg-green-500" />
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Webhook.config.json</span>
                  </div>
                  <pre className="text-primary font-mono text-sm leading-relaxed overflow-x-auto">
{`{
  "endpoint": "https://api.yourdomain.com/v1/webhook",
  "events": ["lead.created", "chat.resolved"],
  "security": {
    "signature": "hmac-sha256",
    "secret": "env_turbo_tech_key"
  },
  "retry_policy": {
    "backoff": "exponential",
    "max_attempts": 5
  }
}`}
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* Security & Reliability */}
      <section className="py-40">
         <div className="section-padding grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
               <div className="grid grid-cols-2 gap-8 relative z-10">
                  {[
                    { l: "SOC2 Type II", i: ShieldCheck },
                    { l: "GDPR Compliant", i: Globe },
                    { l: "End-to-End SSL", i: Lock },
                    { l: "99.99% Uptime", i: Database }
                  ].map((s, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] border border-border shadow-sm text-center">
                       <s.i className="w-10 h-10 text-primary mx-auto mb-6" />
                       <p className="text-sm font-black uppercase tracking-widest">{s.l}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <h2 className="text-5xl font-bold mb-10 tracking-tighter uppercase leading-tight">Secure, Stable, <br /> Enterprise-Grade</h2>
               <p className="text-xl text-dark/60 font-medium mb-12 leading-relaxed">
                  We take security seriously. All integrations are audited for performance 
                  and security to ensure your data stays protected at all times.
               </p>
               <button className="btn-primary !px-12 !py-5">Read Security Whitepaper</button>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-primary/5 border-t border-border">
         <div className="section-padding text-center">
            <h2 className="text-5xl font-bold mb-10 tracking-tighter uppercase">Connect your data silo today.</h2>
            <p className="text-xl text-dark/60 mb-16 font-medium max-w-2xl mx-auto">
               Turbo Tech Solutions integrates with over 5,000 applications via direct 
               native connectors, Zapier, and our powerful REST API.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="btn-primary !px-16 !py-6 text-xl">Browse All 5,000+ Apps</button>
               <button className="btn-outline !px-16 !py-6 text-xl">Talk to Integration Engineer</button>
            </div>
         </div>
      </section>
    </div>
  );
}
