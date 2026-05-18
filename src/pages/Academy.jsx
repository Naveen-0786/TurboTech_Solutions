import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Video, ArrowRight, Clock, Users, Star, CheckCircle2 } from 'lucide-react';

const courses = [
  { level: 'Beginner', title: 'WhatsApp Campaigns', desc: 'Learn the ins and outs of WhatsApp Campaigns, how to request a message template, build an audience, with 9 videos covering WhatsApp ecosystem, subscribers, campaigns, and messaging limits.', duration: '26 Min', videos: 9 },
  { level: 'Intermediate', title: 'Dialogflow & EngageFlow', desc: 'Learn how to create a natural understanding chatbot using Dialogflow and EngageFlow in 6 videos. Train your agent, use entities and redirect users for Web and WhatsApp chatbots like a pro.', duration: '26 Min', videos: 6 },
  { level: 'Beginner', title: 'Web Chatbot Building', desc: 'Learn how to create and deploy chatbots on your website using EngageFlow in this 8-part video course. Build your first chatbot, add features, and analyze data to improve user engagement.', duration: '12 Min', videos: 8 },
  { level: 'Beginner', title: 'WhatsApp Business API 101', desc: 'Master the fundamentals of WhatsApp Business API, setting up your account, understanding message types, templates, and how to get your green tick verification badge.', duration: '18 Min', videos: 7 },
];

const tutorials = [
  { level: 'Beginner', title: 'The WhatsApp Business Ecosystem Explained', desc: 'Explore the WhatsApp Business API, its capabilities, and the various types of messages you can send to customers.', duration: '3:57' },
  { level: 'Intermediate', title: 'Hubspot Integration', desc: 'Learn about the powerful Hubspot integration feature available in EngageFlow for creating, updating, and retrieving data directly within chatbot flow.', duration: '2:41' },
  { level: 'Beginner', title: 'Getting Started with WhatsApp Chatbots', desc: 'Learn how to create your first chatbot on WhatsApp! Follow these easy steps to build and customize your chatbot flow, and test it out for yourself.', duration: '2:21' },
  { level: 'Beginner', title: 'Getting Started with WhatsApp Campaigns', desc: 'A video guide to setting up, launching, and measuring your first campaign. Covers segment targeting, scheduling, and analytics dashboards.', duration: '4:15' },
  { level: 'Intermediate', title: 'Introduction to Variables & Fields', desc: 'Master how to capture, store, and reuse user inputs across your entire chatbot flow using dynamic variables for personalized conversations.', duration: '3:30' },
];

const webinars = [
  { platform: 'Web', title: 'How to Build a Hybrid AI Bot to Personalize Lead Generation', desc: 'Discover how to build a hybrid chatbot that personalizes every conversation and drives better conversions. Ideal for marketers and growth teams looking to turn more visitors into qualified leads—smarter, faster.', duration: '21:56' },
  { platform: 'Web', title: 'Lead Generation Bot Building: From Zero to Conversion', desc: 'A practical demonstration of how to build a lead generation chatbot right from the start and how to integrate AI capabilities to make the user experience even smoother.', duration: '51:38' },
  { platform: 'Web & WhatsApp', title: 'Get the most out of EngageFlow for Lead Generation', desc: 'Join our team as they discuss the most popular chatbot templates, the basics of chatbot building for lead generation, and showcase EngageFlow features for effective lead generation.', duration: '59:42' },
  { platform: 'WhatsApp', title: 'Getting started with EngageFlow for WhatsApp', desc: 'Everything you need to know to launch your first WhatsApp chatbot: from API setup to deploying your first automated campaign flow.', duration: '38:00' },
  { platform: 'Web', title: 'Building WhatsApp Chatbots Powered by AI', desc: 'An advanced session on building AI-enhanced WhatsApp chatbots that use GPT prompts, guardrails, and memory to deliver human-like experiences at scale.', duration: '44:20' },
];

const levelColor = { Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-100', Intermediate: 'bg-amber-50 text-amber-700 border-amber-100', Advanced: 'bg-rose-50 text-rose-700 border-rose-100' };

export default function Academy() {
  const [activeTab, setActiveTab] = useState('courses');
  const tabs = [
    { id: 'courses', label: 'Courses', count: 4, icon: BookOpen },
    { id: 'tutorials', label: 'Tutorials', count: 42, icon: Play },
    { id: 'webinars', label: 'Webinars', count: 5, icon: Video },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-white border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5" /> EngageFlow Academy
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter leading-tight mb-6">
              Master no-code chatbot building<br />with our Library of <span className="text-gradient">Free video courses</span>
            </h1>
            <p className="text-lg md:text-xl text-dark/60 font-medium max-w-3xl mx-auto mb-10">
              Dive right into EngageFlow Academy and get going with WhatsApp and web chatbots. Turn yourself into a no-code chatbot expert with our courses, tutorials and webinars.
            </p>
            <Link to="/pricing" className="btn-primary !px-10 !py-4 text-base">
              Try EngageFlow free
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { val: '4', label: 'Video Courses', icon: BookOpen },
            { val: '42+', label: 'Tutorials', icon: Play },
            { val: '5', label: 'Live Webinars', icon: Video },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <s.icon className="w-8 h-8 text-primary mb-3" />
              <div className="text-4xl font-black text-dark">{s.val}</div>
              <div className="text-sm text-dark/50 font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 border-b border-border mb-16">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 px-2 text-sm font-black border-b-2 transition-all ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-dark/40 hover:text-dark/70'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${activeTab === tab.id ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-dark/40'}`}>{tab.count}</span>
              </button>
            ))}
          </div>

          {/* COURSES */}
          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-dark">Master EngageFlow and chatbot building with our straight to the point course selection.</h2>
                <span className="text-xs text-dark/40 font-bold">See all {courses.length} courses →</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {courses.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${levelColor[c.level] || 'bg-slate-100 text-slate-600'}`}>{c.level}</span>
                      <div className="flex items-center gap-3 text-xs text-dark/40 font-bold">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.duration}</span>
                        <span>{c.videos} videos</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-dark mb-3">{c.title}</h3>
                    <p className="text-sm text-dark/60 font-medium leading-relaxed mb-6">{c.desc}</p>
                    <button className="text-xs font-black text-primary flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                      See course <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* TUTORIALS */}
          {activeTab === 'tutorials' && (
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-dark">Master the art of chatbot building with 42+ easy-to-follow EngageFlow tutorials.</h2>
                <span className="text-xs text-dark/40 font-bold">See all 42 tutorials →</span>
              </div>
              <div className="space-y-4">
                {tutorials.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Play className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${levelColor[t.level] || 'bg-slate-100 text-slate-600'}`}>{t.level}</span>
                        <span className="text-[10px] text-dark/40 font-bold flex items-center gap-1"><Clock className="w-3 h-3" />{t.duration}</span>
                      </div>
                      <h3 className="font-black text-dark text-sm mb-1">{t.title}</h3>
                      <p className="text-xs text-dark/50 font-medium leading-relaxed">{t.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-dark/20 group-hover:text-primary shrink-0 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* WEBINARS */}
          {activeTab === 'webinars' && (
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-dark">Unlock the potential of chatbot development with EngageFlow webinars.</h2>
                <span className="text-xs text-dark/40 font-bold">See all 5 webinars →</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {webinars.map((w, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-white hover:border-primary/30 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-primary/20 text-primary-light text-[10px] font-black px-2.5 py-1 rounded-full">{w.platform}</span>
                      <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1"><Clock className="w-3 h-3" />{w.duration}</span>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3 leading-snug">{w.title}</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">{w.desc}</p>
                    <button className="text-xs font-black text-primary-light flex items-center gap-1.5 hover:gap-3 transition-all uppercase tracking-wider">
                      Watch webinar <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-4 !text-white">Ready to start building?</h2>
          <p className="text-white/70 mb-8 font-medium">Apply what you've learned and build your first chatbot — no code needed.</p>
          <Link to="/pricing" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary inline-flex items-center gap-2">
            Try EngageFlow free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
