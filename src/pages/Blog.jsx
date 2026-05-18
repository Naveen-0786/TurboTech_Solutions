import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const categories = ['All', 'Lead Generation & CRO', 'WhatsApp', 'Chatbots & Conversational AI', 'Landbot News & Tutorials', 'Business Growth'];

const articles = [
  { cat: 'Lead Generation & CRO', title: 'Is EngageFlow Worth It? Price, Results, and Who It\'s Actually Built For', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'May 2025' },
  { cat: 'WhatsApp', title: 'How to Build a WhatsApp Chatbot in 2025 — Step-by-Step No Coding Guide', author: 'Jiaqi Pan', role: 'CEO, EngageFlow', date: 'May 2025' },
  { cat: 'Landbot News & Tutorials', title: 'OpenAI and Chatbot Integration: How to Build Your Bot Using AI', author: 'Barbora Jassova', role: 'Content Creator', date: 'Apr 2025' },
  { cat: 'Chatbots & Conversational AI', title: 'How to Use Generative AI to Schedule Real Estate Appointments', author: 'Barbora Jassova', role: 'Content Creator', date: 'Apr 2025' },
  { cat: 'Lead Generation & CRO', title: 'How to Build an AI Agent for Lead Qualification — No Code Needed', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Apr 2025' },
  { cat: 'Chatbots & Conversational AI', title: 'The Complete AI Agent Stack Every Small Business Needs', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Mar 2025' },
  { cat: 'Lead Generation & CRO', title: 'Lead Qualification Automation for Paid Ads: A Step-by-Step Guide', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Mar 2025' },
  { cat: 'Chatbots & Conversational AI', title: 'Can EngageFlow Replace Forms With AI Agents?', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Feb 2025' },
  { cat: 'Lead Generation & CRO', title: 'How to Solve The 6 Structural Lead Generation Problems of SaaS', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Feb 2025' },
  { cat: 'Chatbots & Conversational AI', title: 'Is EngageFlow a Chatbot or an AI Agent?', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Jan 2025' },
  { cat: 'Chatbots & Conversational AI', title: 'How to Use ChatGPT for Sales and Marketing: Practical Workflows, Prompts, and Guardrails', author: 'Irene Pomares', role: 'Sr. Content Marketing Strategist', date: 'Jan 2025' },
  { cat: 'Chatbots & Conversational AI', title: 'Real Chatbot Examples: Virtual Assistants in Action', author: 'Raquel Magalhães', role: 'Editorial Writer', date: 'Dec 2024' },
  { cat: 'Landbot News & Tutorials', title: 'Introducing EngageFlow 4: Faster, Smarter Automations with AI Agents', author: 'Jiaqi Pan', role: 'CEO, EngageFlow', date: 'Dec 2024' },
  { cat: 'Lead Generation & CRO', title: 'How to Build a Lead Generation Chatbot: A Step-by-Step Guide', author: 'Raquel Magalhães', role: 'Editorial Writer', date: 'Nov 2024' },
  { cat: 'Chatbots & Conversational AI', title: 'AI Agents in Action: Real Use Cases and Prompts to Start Building Today', author: 'Anna Gardeta', role: 'Product Marketing Manager', date: 'Nov 2024' },
  { cat: 'WhatsApp', title: 'How to Apply for the WhatsApp Business API: Step-by-Step Guide', author: 'Cris Villar', role: 'Co-Founder & VP of Customer', date: 'Oct 2024' },
  { cat: 'WhatsApp', title: 'Industry-Based WhatsApp Template Message Examples You Can Try Today', author: 'Raquel Magalhães', role: 'Editorial Writer', date: 'Oct 2024' },
  { cat: 'Lead Generation & CRO', title: 'How Chatbots for the Automotive Industry Qualify Leads in Real Time', author: 'Júlia Estrella', role: 'Senior Content Marketing Manager', date: 'Sep 2024' },
  { cat: 'Business Growth', title: 'How to Keep Customers Coming Back: 7 Top Tips for Marketing Loyalty', author: 'Dmytro Spilka', role: 'Founder at Solvid', date: 'Sep 2024' },
  { cat: 'WhatsApp', title: 'How to Get Quality Leads with Meta Instant Forms Using WhatsApp Chatbots', author: 'Júlia Estrella', role: 'Senior Content Marketing Manager', date: 'Aug 2024' },
];

const catColors = {
  'Lead Generation & CRO': 'bg-primary/10 text-primary',
  'WhatsApp': 'bg-emerald-50 text-emerald-700',
  'Chatbots & Conversational AI': 'bg-violet-50 text-violet-700',
  'Landbot News & Tutorials': 'bg-amber-50 text-amber-700',
  'Business Growth': 'bg-rose-50 text-rose-700',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const featured = articles[0];

  const filtered = articles.slice(1).filter(a => {
    const catMatch = activeCategory === 'All' || a.cat === activeCategory;
    const searchMatch = searchQuery === '' || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 border-b border-border bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4">EngageFlow Blog</span>
          <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter mb-4">Master conversational <span className="text-gradient">marketing</span></h1>
          <p className="text-lg text-dark/60 font-medium max-w-2xl mx-auto mb-10">Discover no-code guides, tutorials, and inspiration on using chatbots for marketing, sales, support, and more.</p>
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/30" />
            <input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white text-sm focus:outline-none focus:border-primary/40 font-medium" />
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-black text-primary uppercase tracking-widest mb-8">Featured Article</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-10 border border-border">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl h-56 flex items-center justify-center text-5xl">📝</div>
            <div>
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${catColors[featured.cat]}`}>{featured.cat}</span>
              <h3 className="text-2xl font-black text-dark mt-4 mb-2 leading-snug">{featured.title}</h3>
              <p className="text-sm text-dark/50 font-bold mb-6">{featured.author} · {featured.role} · {featured.date}</p>
              <button className="btn-primary text-sm">Read Article <ArrowRight className="w-4 h-4 inline ml-1" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-black text-dark/40 uppercase tracking-widest mb-4">Filter by Category</div>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-white border-border text-dark/60 hover:border-primary/30'}`}>{cat}</button>
            ))}
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-dark/30 font-bold">No results found. Please try different keywords or filter by category.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a, i) => (
                <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05 }}
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${catColors[a.cat] || 'bg-slate-100 text-slate-600'}`}>{a.cat}</span>
                  <h3 className="font-black text-dark text-sm mt-3 mb-3 leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-[10px] text-dark/40 font-bold">{a.author} · {a.date}</p>
                </motion.article>
              ))}
            </div>
          )}
          <div className="text-center mt-12"><button className="btn-outline !px-10">Load More Articles</button></div>
        </div>
      </section>
    </div>
  );
}
