import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Award, Globe, Users } from 'lucide-react';

const experts = [
  { name: 'Conversational Labs', location: 'Spain', specialties: ['Lead Generation', 'WhatsApp API', 'HubSpot Integration'], rating: 5, projects: 48, badge: 'Certified Partner' },
  { name: 'BotCraft Agency', location: 'Netherlands', specialties: ['Sales Automation', 'AI Agents', 'Custom CSS'], rating: 5, projects: 36, badge: 'Certified Expert' },
  { name: 'FlowMasters Co.', location: 'United Kingdom', specialties: ['E-commerce Chatbots', 'Zapier Workflows', 'Analytics'], rating: 5, projects: 29, badge: 'Certified Expert' },
  { name: 'Dialogue Studio', location: 'Brazil', specialties: ['Customer Support Bots', 'WhatsApp Campaigns', 'Salesforce'], rating: 4, projects: 22, badge: 'Certified Partner' },
  { name: 'Engage Digital', location: 'Germany', specialties: ['Automotive Lead Gen', 'Multi-channel Deployment', 'API'], rating: 5, projects: 41, badge: 'Certified Expert' },
  { name: 'ChatFuse', location: 'United States', specialties: ['Agency Whitelabel', 'SaaS Chatbots', 'Calendly Integration'], rating: 4, projects: 18, badge: 'Certified Expert' },
];

const services = [
  { title: 'Custom Bot Development', desc: 'Let an expert design and build your chatbot flow from scratch, tailored to your goals.' },
  { title: 'Strategy Consulting', desc: 'Get expert guidance on your conversational marketing strategy and chatbot architecture.' },
  { title: 'Integration Setup', desc: 'Experts help you connect EngageFlow to your CRM, calendar, or marketing stack.' },
  { title: 'Optimization & Audits', desc: 'Identify drop-offs and improve conversion rates on your existing chatbot funnels.' },
];

export default function Experts() {
  const [filter, setFilter] = useState('All');
  const specialties = ['All', 'Lead Generation', 'WhatsApp API', 'AI Agents', 'E-commerce', 'Analytics'];
  const filtered = filter === 'All' ? experts : experts.filter(e => e.specialties.some(s => s.includes(filter)));

  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-primary/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" /> EngageFlow Experts
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter mb-6">
              Find certified professionals to help you<br /><span className="text-gradient">build and optimize chatbots</span>
            </h1>
            <p className="text-lg text-dark/60 font-medium max-w-3xl mx-auto mb-10">
              Connect with vetted experts who specialize in EngageFlow. From strategy to development, find the right partner for your project.
            </p>
            <Link to="/contact" className="btn-primary !px-10 !py-4">Hire an Expert</Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 border-b border-border bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-black text-dark mb-8 text-center">What experts can do for you</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 font-black">{i + 1}</div>
                <h3 className="font-black text-dark mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-dark/50 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Listing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
            <h2 className="text-2xl font-black text-dark">Browse Certified Experts</h2>
            <div className="flex flex-wrap gap-2">
              {specialties.map(s => (
                <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${filter === s ? 'bg-primary text-white border-primary' : 'bg-white border-border text-dark/60 hover:border-primary/30'}`}>{s}</button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center text-xl font-black text-primary">{e.name[0]}</div>
                  <span className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full">{e.badge}</span>
                </div>
                <h3 className="font-black text-dark text-lg mb-1">{e.name}</h3>
                <div className="flex items-center gap-2 text-xs text-dark/40 font-bold mb-4">
                  <Globe className="w-3.5 h-3.5" /> {e.location} · {e.projects} projects completed
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(e.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  {[...Array(5 - e.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-slate-200 fill-slate-200" />)}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {e.specialties.map((sp, j) => (
                    <span key={j} className="text-[9px] font-black px-2 py-0.5 bg-primary/5 text-primary rounded">{sp}</span>
                  ))}
                </div>
                <Link to="/contact" className="text-xs font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                  Contact Expert <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become an Expert CTA */}
      <section className="py-20 bg-dark text-white rounded-[4rem] mx-6 mb-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-black mb-4 !text-white">Become a Certified EngageFlow Expert</h2>
          <p className="text-white/60 mb-8 font-medium">Get listed on our directory, grow your client base, and join a global network of chatbot professionals.</p>
          <Link to="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-dark inline-flex items-center gap-2">Apply to become an Expert <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
