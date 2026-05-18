import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageCircle, Heart, Star, TrendingUp, Award } from 'lucide-react';

const topics = [
  { title: 'Getting Started', count: 234, icon: '🚀', desc: 'New to EngageFlow? Find introductions, walkthroughs, and first-chatbot guides.' },
  { title: 'WhatsApp Chatbots', count: 189, icon: '💬', desc: 'Discussions on WhatsApp Business API, templates, and campaign strategies.' },
  { title: 'Lead Generation', count: 156, icon: '🎯', desc: 'Best practices, tips and case studies on building lead-gen chatbot funnels.' },
  { title: 'Integrations', count: 142, icon: '🔌', desc: 'Connect EngageFlow with HubSpot, Salesforce, Zapier, and more.' },
  { title: 'AI & Automation', count: 98, icon: '🤖', desc: 'Leverage GPT prompts, AI agents, and hybrid bot logic for smarter conversations.' },
  { title: 'Templates & Design', count: 87, icon: '🎨', desc: 'Share and discover beautiful bot templates, UI tips, and branding strategies.' },
];

const discussions = [
  { title: 'How do I pass variables between flows in EngageFlow?', author: 'Marco V.', replies: 12, likes: 34, tag: 'Getting Started' },
  { title: 'Best practice for WhatsApp opt-in double confirmation', author: 'Priya K.', replies: 8, likes: 22, tag: 'WhatsApp' },
  { title: 'HubSpot contact creation not working after update', author: 'Tom R.', replies: 15, likes: 41, tag: 'Integrations' },
  { title: 'How to use GPT-4o inside a rule-based flow?', author: 'Julia S.', replies: 20, likes: 67, tag: 'AI & Automation' },
  { title: 'Lead scoring formula examples — share yours!', author: 'Gustavo M.', replies: 9, likes: 29, tag: 'Lead Generation' },
];

const members = [
  { name: 'Pradikta A.', role: 'Growth Manager', posts: 234, badge: '🏆 Top Contributor' },
  { name: 'Daniel C.', role: 'MarTech Director', posts: 189, badge: '⭐ Expert' },
  { name: 'Guilherme S.', role: 'CEO', posts: 156, badge: '🚀 Power User' },
  { name: 'Narciso M.', role: 'Innovation Coordinator', posts: 98, badge: '💡 Advisor' },
];

export default function Community() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-primary/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-3.5 h-3.5" /> EngageFlow Community
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter mb-6">
              Join passionate bot makers<br />from <span className="text-gradient">all around the world</span>
            </h1>
            <p className="text-lg text-dark/60 font-medium max-w-3xl mx-auto mb-10">
              Connect with other users, ask questions, share best practices, and grow together with the EngageFlow community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary !px-10 !py-4">Join the Community</Link>
              <Link to="/resources/academy" className="btn-outline !px-10 !py-4">Explore Academy</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[{ v: '12,000+', l: 'Active Members' }, { v: '45,000+', l: 'Discussions' }, { v: '98%', l: 'Questions Answered' }].map((s, i) => (
            <div key={i}><div className="text-4xl font-black text-dark">{s.v}</div><div className="text-sm text-dark/50 font-bold">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* Topic Categories */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Browse by Topic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-black text-dark mb-1">{t.title}</h3>
                <p className="text-xs text-dark/50 font-medium mb-3 leading-relaxed">{t.desc}</p>
                <span className="text-xs text-primary font-bold">{t.count} posts</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Discussions */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Latest Discussions</h2>
          <div className="space-y-4">
            {discussions.map((d, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-5 flex items-center gap-5 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-black text-dark text-sm group-hover:text-primary transition-colors mb-1">{d.title}</h3>
                  <div className="flex gap-4 text-[10px] text-dark/40 font-bold">
                    <span>by {d.author}</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{d.tag}</span>
                  </div>
                </div>
                <div className="flex gap-4 text-[10px] font-bold text-dark/40 shrink-0">
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{d.replies}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{d.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Members */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">Top Community Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black text-primary">{m.name[0]}</div>
                <div className="font-black text-dark mb-1">{m.name}</div>
                <div className="text-xs text-dark/50 font-bold mb-2">{m.role}</div>
                <div className="text-[10px] text-primary font-bold mb-2">{m.badge}</div>
                <div className="text-xs text-dark/30 font-bold">{m.posts} posts</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark text-white text-center rounded-[4rem] mx-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-black mb-4 !text-white">Ready to join the conversation?</h2>
          <p className="text-white/60 mb-8 font-medium">Ask questions, share your work, and connect with 12,000+ chatbot builders worldwide.</p>
          <Link to="/pricing" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-dark inline-flex items-center gap-2">Join EngageFlow Community <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
