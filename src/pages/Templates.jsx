import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const allTemplates = [
  { tag: 'Web', cat: 'Lead Generation', title: 'Basic Lead Generation', desc: 'Collect name, email, and other basic info from visitors & generate leads with this free bot template.' },
  { tag: 'WhatsApp', cat: 'Lead Generation', title: 'WhatsApp Opt-In Bot', desc: 'Create an opt-in, asking the user\'s consent to send them proactive messages via WhatsApp.' },
  { tag: 'Web', cat: 'Lead Generation', title: 'Lead Qualification', desc: 'Qualify leads into prospects that convert with this free bot template.' },
  { tag: 'Web', cat: 'Lead Generation', title: 'Lead Scoring Bot', desc: 'Score leads automatically based on intent signals, company size, and budget criteria.' },
  { tag: 'Web', cat: 'Support', title: 'Basic FAQ Bot', desc: 'Answer the most frequently asked questions automatically and reduce support tickets.' },
  { tag: 'Web', cat: 'E-commerce', title: 'E-commerce Product Recommender', desc: 'Help customers find the right products with an interactive recommendation chatbot.' },
  { tag: 'WhatsApp', cat: 'Support', title: 'WhatsApp Customer Support', desc: 'Handle common support queries on WhatsApp and escalate to live agents when needed.' },
  { tag: 'Web', cat: 'Survey', title: 'NPS Survey Bot', desc: 'Collect Net Promoter Score feedback with a conversational, engaging survey flow.' },
  { tag: 'WhatsApp', cat: 'Lead Generation', title: 'WhatsApp Lead Generation', desc: 'Capture and qualify inbound leads directly via WhatsApp Business API.' },
  { tag: 'Web', cat: 'Booking', title: 'Appointment Booking Bot', desc: 'Let visitors schedule meetings and demos directly inside the chat widget.' },
  { tag: 'WhatsApp', cat: 'E-commerce', title: 'WhatsApp Order Status Bot', desc: 'Let customers track their order status via WhatsApp without contacting support.' },
  { tag: 'Web', cat: 'HR', title: 'HR Recruitment Bot', desc: 'Pre-screen candidates, collect CVs, and schedule interviews automatically.' },
];

const categories = ['All', 'Lead Generation', 'Support', 'E-commerce', 'Survey', 'Booking', 'HR'];
const tagColors = { Web: 'bg-primary/10 text-primary', WhatsApp: 'bg-emerald-50 text-emerald-700' };

export default function Templates() {
  const [activecat, setActivecat] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = allTemplates.filter(t => {
    const catMatch = activecat === 'All' || t.cat === activecat;
    const searchMatch = query === '' || t.title.toLowerCase().includes(query.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-primary/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              50+ Free Templates
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter mb-6">
              Easily create web and WhatsApp chatbots<br />with <span className="text-gradient">ready-to-use templates</span>
            </h1>
            <p className="text-lg text-dark/60 font-medium max-w-3xl mx-auto mb-10">
              Free no-code chatbot frontend & UI templates for web, WhatsApp and Messenger. Preview, customize, and connect to Zapier, Make, n8n or your backend.
            </p>
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/30" />
              <input type="text" placeholder="Search templates..." value={query} onChange={e => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white text-sm focus:outline-none focus:border-primary/40 font-medium" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 border-b border-border bg-slate-50 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActivecat(cat)} className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${activecat === cat ? 'bg-primary text-white border-primary' : 'bg-white border-border text-dark/60 hover:border-primary/30'}`}>{cat}</button>
          ))}
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-dark/40 font-bold">{filtered.length} templates found</p>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-dark/30 font-bold">No templates found. Try a different search or category.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 8) * 0.05 }}
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl h-28 flex items-center justify-center mb-4 text-3xl group-hover:from-primary/20 transition-all">
                      {t.cat === 'Lead Generation' ? '🎯' : t.cat === 'Support' ? '🛎️' : t.cat === 'E-commerce' ? '🛍️' : t.cat === 'Survey' ? '📊' : t.cat === 'Booking' ? '📅' : '👥'}
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${tagColors[t.tag] || 'bg-slate-100 text-slate-600'}`}>{t.tag}</span>
                      <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{t.cat}</span>
                    </div>
                    <h3 className="font-black text-dark text-sm mb-2">{t.title}</h3>
                    <p className="text-xs text-dark/50 font-medium leading-relaxed mb-4">{t.desc}</p>
                  </div>
                  <Link to="/pricing" className="text-xs font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                    Use template free <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
