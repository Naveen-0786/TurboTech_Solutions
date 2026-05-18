import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Download, FileText } from 'lucide-react';

const reports = [
  {
    tag: 'Featured',
    title: 'The State of Conversational Marketing 2025',
    desc: 'An in-depth analysis of how AI chatbots and WhatsApp automation are reshaping B2B and B2C lead generation globally, with benchmarks and predictions.',
    type: 'Whitepaper',
    pages: 48
  },
  {
    tag: 'New',
    title: 'WhatsApp Business API: Adoption & ROI Report',
    desc: 'Explore exclusive data on WhatsApp API adoption rates, cost-per-lead comparisons, and ROI benchmarks across industries using conversational automation.',
    type: 'Report',
    pages: 32
  },
  {
    tag: '',
    title: 'AI Agents in Lead Generation: Practical Playbook',
    desc: 'How revenue leaders are deploying AI agents to qualify leads at scale, reduce CPL, and improve sales handoff quality without engineering resources.',
    type: 'Playbook',
    pages: 24
  },
  {
    tag: '',
    title: 'Chatbot Conversion Benchmarks by Industry',
    desc: 'Comprehensive conversion rate benchmarks across automotive, real estate, finance, and SaaS sectors to help you measure and optimize chatbot performance.',
    type: 'Report',
    pages: 36
  },
  {
    tag: '',
    title: 'The No-Code AI Builder Guide for Marketing Teams',
    desc: 'A complete guide for marketers on building, deploying, and iterating on AI-powered chatbots without relying on engineering — with real-world templates.',
    type: 'Whitepaper',
    pages: 28
  },
  {
    tag: '',
    title: 'WhatsApp Lead Generation for Agencies: Strategy Guide',
    desc: 'How agencies are using conversational WhatsApp campaigns to lower client CPL, improve retargeting efficiency, and deliver scalable lead generation results.',
    type: 'Guide',
    pages: 20
  },
];

const typeColors = {
  Whitepaper: 'bg-primary/10 text-primary',
  Report: 'bg-violet-50 text-violet-700',
  Playbook: 'bg-emerald-50 text-emerald-700',
  Guide: 'bg-amber-50 text-amber-700',
};

export default function Whitepapers() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-primary/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5" /> Whitepapers & Reports
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter mb-6">
              Comprehensive guides and<br /><span className="text-gradient">industry insights</span> to grow your chatbot strategy
            </h1>
            <p className="text-lg text-dark/60 font-medium max-w-3xl mx-auto mb-10">
              Access and explore in-depth resources on the use of WhatsApp API & Generative AI in business lead management. Gain valuable insights with EngageFlow's reports & whitepapers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-10 border border-primary/10">
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full mb-4">Featured Report</span>
              <h2 className="text-3xl font-black text-dark mb-4 leading-snug">{reports[0].title}</h2>
              <p className="text-dark/60 font-medium leading-relaxed mb-8">{reports[0].desc}</p>
              <div className="flex items-center gap-6 mb-8 text-xs text-dark/40 font-bold">
                <span>{reports[0].pages} pages</span>
                <span>{reports[0].type}</span>
              </div>
              <button className="btn-primary flex items-center gap-2 w-fit">
                <Download className="w-4 h-4" /> Download Free Report
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border flex items-center justify-center h-64">
              <div className="text-center">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <div className="text-lg font-black text-dark">48-Page Research Report</div>
                <div className="text-xs text-dark/40 font-bold mt-1">PDF · Free Download</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reports Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">All Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.slice(1).map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${typeColors[r.type] || 'bg-slate-100 text-slate-600'}`}>{r.type}</span>
                    {r.tag && <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full">{r.tag}</span>}
                  </div>
                  <h3 className="font-black text-dark text-lg mb-3 leading-snug">{r.title}</h3>
                  <p className="text-sm text-dark/60 font-medium leading-relaxed mb-4">{r.desc}</p>
                  <div className="text-xs text-dark/30 font-bold mb-6">{r.pages} pages · Free download</div>
                </div>
                <button className="text-xs font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                  <Download className="w-3.5 h-3.5" /> Download Free
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-4 !text-white">Start applying these insights today</h2>
          <p className="text-white/70 mb-8 font-medium">Build your first AI-powered chatbot and put these strategies to work in minutes.</p>
          <Link to="/pricing" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary inline-flex items-center gap-2">
            Try EngageFlow free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
