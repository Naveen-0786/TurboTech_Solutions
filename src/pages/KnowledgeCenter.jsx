import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BookOpen, Play, Users, FileText, HelpCircle, Sparkles } from 'lucide-react';

const hubs = [
  { icon: BookOpen, title: 'Academy', desc: 'Master chatbot building with our library of video courses.', link: '/resources/academy', count: '4 Courses · 42 Tutorials' },
  { icon: FileText, title: 'Help Docs', desc: 'Support articles to help manage your account, build your chatbots, and more.', link: '/resources/help-docs', count: '200+ Articles' },
  { icon: Users, title: 'Community', desc: 'Connect with other users, ask questions, and share best practices.', link: '/resources/community', count: '12,000+ Members' },
  { icon: HelpCircle, title: 'Landbot Experts', desc: 'Find certified professionals to help you build and optimize chatbots.', link: '/resources/experts', count: '50+ Certified Experts' },
];

const popularArticles = [
  { title: 'How to create your first WhatsApp chatbot', category: 'Getting Started', reads: '12.4k' },
  { title: 'Connecting EngageFlow to HubSpot CRM', category: 'Integrations', reads: '8.9k' },
  { title: 'Understanding Variables and Fields', category: 'Builder Basics', reads: '7.2k' },
  { title: 'How to apply for WhatsApp Business API', category: 'WhatsApp', reads: '15.1k' },
  { title: 'Setting up your first Lead Generation bot', category: 'Use Cases', reads: '9.3k' },
  { title: 'How to use AI Agents in your chatbot flow', category: 'AI Features', reads: '6.8k' },
];

const searchTopics = [
  'WhatsApp Setup', 'HubSpot Integration', 'Lead Generation', 'AI Agents', 'Variables & Fields',
  'Zapier Connection', 'Custom CSS', 'Salesforce Sync', 'Template Messages', 'Webhooks'
];

export default function KnowledgeCenter() {
  const [query, setQuery] = useState('');
  return (
    <div className="pt-20 bg-white">
      {/* Hero with search */}
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Knowledge Center
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 !text-white">
              Learn all about chatbot building<br />at <span className="text-primary-light">EngageFlow</span>
            </h1>
            <p className="text-lg text-white/60 font-medium max-w-2xl mx-auto mb-10">
              Step-by-step tutorials and articles to help you master EngageFlow. Explore courses, tutorials, webinars, and more.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input type="text" placeholder="Search articles, tutorials, guides..." value={query} onChange={e => setQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-5 rounded-2xl border border-white/10 bg-white/10 text-white text-sm focus:outline-none focus:border-primary/40 font-medium placeholder:text-white/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick search tags */}
      <section className="py-10 border-b border-border bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-black text-dark/40 uppercase tracking-widest mb-4">Popular searches</p>
          <div className="flex flex-wrap gap-2">
            {searchTopics.map((t, i) => (
              <button key={i} className="px-3 py-1.5 bg-white border border-border rounded-lg text-xs font-bold text-dark/60 hover:border-primary/30 hover:text-primary transition-all">
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Hubs */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Explore All Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hubs.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={h.link} className="block bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <h.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-dark mb-2 group-hover:text-primary transition-colors">{h.title}</h3>
                  <p className="text-xs text-dark/50 font-medium leading-relaxed mb-3">{h.desc}</p>
                  <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded">{h.count}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Most Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {popularArticles.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-border rounded-2xl p-5 flex items-center gap-4 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-black text-dark text-sm group-hover:text-primary transition-colors">{a.title}</h3>
                  <div className="flex gap-4 text-[10px] text-dark/40 font-bold mt-1">
                    <span>{a.category}</span>
                    <span>{a.reads} reads</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-dark/20 group-hover:text-primary shrink-0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
