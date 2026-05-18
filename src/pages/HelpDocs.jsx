import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileText, BookOpen, HelpCircle, Zap, Settings, MessageSquare } from 'lucide-react';

const categories = [
  { icon: Settings, title: 'Account & Billing', articles: 24, desc: 'Manage your subscription, payments, and account settings.' },
  { icon: Zap, title: 'Getting Started', articles: 18, desc: 'Everything you need to launch your first chatbot in minutes.' },
  { icon: MessageSquare, title: 'Building Chatbots', articles: 56, desc: 'Flows, blocks, conditions, AI agents, and builder best practices.' },
  { icon: BookOpen, title: 'WhatsApp Setup', articles: 32, desc: 'WhatsApp API setup, message templates, and campaign management.' },
  { icon: FileText, title: 'Integrations', articles: 41, desc: 'Connect EngageFlow to HubSpot, Salesforce, Zapier, and 40+ tools.' },
  { icon: HelpCircle, title: 'Analytics & Data', articles: 19, desc: 'Understand metrics, conversation logs, and export your data.' },
];

const popular = [
  'How to create your first WhatsApp chatbot',
  'How to connect EngageFlow to HubSpot',
  'How to use variables in your chatbot flow',
  'Understanding EngageFlow conversation analytics',
  'How to apply for WhatsApp Business API',
  'Setting up Zapier automation with EngageFlow',
  'How to add a chatbot widget to your website',
  'Troubleshooting WhatsApp message delivery issues',
];

export default function HelpDocs() {
  const [query, setQuery] = useState('');
  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 !text-white">
              How can we help you?
            </h1>
            <p className="text-lg text-white/60 font-medium mb-10">
              Support articles to help manage your account, build your chatbots, and more.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input type="text" placeholder="Search support articles..." value={query} onChange={e => setQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-5 rounded-2xl border border-white/10 bg-white/10 text-white text-sm focus:outline-none focus:border-primary/40 font-medium placeholder:text-white/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-dark mb-1 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-xs text-dark/50 font-medium mb-3 leading-relaxed">{c.desc}</p>
                <span className="text-[10px] font-black text-primary">{c.articles} articles</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Most Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {popular.map((a, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-4 flex items-center gap-4 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                <FileText className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-bold text-dark group-hover:text-primary transition-colors flex-grow">{a}</span>
                <ArrowRight className="w-4 h-4 text-dark/20 group-hover:text-primary shrink-0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 border-t border-border text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-4">Can't find what you're looking for?</h2>
          <p className="text-dark/60 font-medium mb-8">Our support team is always ready to help. Reach out and we'll get back to you quickly.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Contact Support <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
