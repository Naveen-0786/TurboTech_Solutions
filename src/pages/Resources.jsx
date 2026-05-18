import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  PlayCircle, 
  Globe, 
  ArrowRight, 
  Search, 
  Clock, 
  Users, 
  Sparkles,
  Video,
  ClipboardList,
  MessageSquare,
  ChevronRight,
  HelpCircle,
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ title, category, date, author, image, path }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="premium-card group cursor-pointer border border-border hover:border-primary/20 transition-all"
  >
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">{category}</div>
    </div>
    <div className="p-8">
      <div className="flex items-center gap-4 text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-6">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {date}</span>
        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {author}</span>
      </div>
      <h3 className="text-2xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
      <Link to={path || "/blog"} className="flex items-center gap-2 font-bold text-dark hover:text-primary transition-colors text-xs uppercase tracking-widest">
        Read Insight <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

export default function Resources() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-hero bg-surface overflow-hidden">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-12">
               Intelligence Hub
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.85] uppercase">
              Insights & <br />
              <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl md:text-3xl text-dark/60 max-w-3xl mx-auto font-medium leading-relaxed">
              Master the art of conversational AI with our comprehensive guides, 
              expert tutorials, and industry-leading research.
            </p>
          </motion.div>
          
          <div className="mt-16 max-w-2xl mx-auto relative group">
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-dark/30 group-focus-within:text-primary transition-colors">
                <Search className="w-6 h-6" />
             </div>
             <input type="text" placeholder="Search insights, guides, or webinars..." className="w-full bg-white border border-border rounded-full py-6 pl-16 pr-8 shadow-xl focus:outline-none focus:border-primary/50 transition-all text-lg font-medium" />
          </div>
        </div>
      </section>

      {/* 1. LEARNING PATHS (ACADEMY) */}
      <section className="py-32">
         <div className="section-padding">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
               <div>
                  <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-8">Turbo Tech Academy</h2>
                  <h3 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Learn from <br /> the experts.</h3>
               </div>
               <Link to="/academy" className="btn-outline !px-10">Visit Academy</Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                 { t: "AI Chatbot Fundamentals", d: "Master the basics of LLM-powered conversational design.", i: Video },
                 { t: "WhatsApp Marketing V4", d: "Scale your revenue with advanced WhatsApp automation.", i: MessageSquare },
                 { t: "API & Webhook Mastery", d: "Developer guide to deep-stack integrations.", i: Code2 },
               ].map((course, i) => (
                 <div key={i} className="premium-card p-10 bg-white border border-border hover:border-primary/20 group cursor-pointer transition-all">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                       <course.i className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 tracking-tight">{course.t}</h4>
                    <p className="text-dark/50 text-sm leading-relaxed mb-8">{course.d}</p>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                       Start Course <ChevronRight className="w-4 h-4" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 2. TEMPLATES LIBRARY PREVIEW */}
      <section className="py-40 bg-dark text-white rounded-[5rem] mx-6">
         <div className="section-padding">
            <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
               <div>
                  <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-8">Bot Templates</h2>
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Launch in <br /> seconds.</h3>
               </div>
               <p className="text-xl text-white/40 font-medium leading-relaxed">
                  Browse our library of 200+ pre-designed conversational flows for every 
                  industry and use case. Ready to deploy instantly.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {['Lead Generation', 'Appointment Booking', 'Order Tracking', 'Customer Support', 'Feedback Survey', 'Product Quiz', 'Registration', 'FAQ Bot'].map((temp, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer text-center">
                    <ClipboardList className="w-8 h-8 text-primary mx-auto mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-lg font-bold tracking-tight">{temp}</h4>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. BLOG & INSIGHTS GRID */}
      <section className="py-40">
         <div className="section-padding">
            <div className="text-center mb-24">
               <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-8">Latest Insights</h2>
               <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Stay ahead of <br /> the curve.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ResourceCard 
                title="The Shift to Post-Quantum Messaging Architecture"
                category="Architecture"
                date="May 12, 2026"
                author="Dr. Julian Thorne"
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
              />
              <ResourceCard 
                title="Scaling to 10M DAU with Zero-Latency Synchronization"
                category="Case Study"
                date="May 08, 2026"
                author="Sarah Jenkins"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
              />
              <ResourceCard 
                title="Neural Intent: The Future of Customer Orchestration"
                category="Enterprise AI"
                date="Apr 29, 2026"
                author="Alex Rivera"
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
              />
            </div>
            
            <div className="mt-20 text-center">
               <Link to="/blog" className="btn-primary !px-12">View All Articles</Link>
            </div>
         </div>
      </section>

      {/* 4. HELP & COMMUNITY */}
      <section className="py-40 bg-primary/5">
         <div className="section-padding">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="premium-card p-12 bg-white border border-border flex flex-col items-center text-center group">
                  <div className="bg-blue-50 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                     <HelpCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Knowledge Center</h4>
                  <p className="text-dark/50 mb-10 font-medium">Detailed documentation and step-by-step tutorials for every platform feature.</p>
                  <button className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2">Explore Documentation <ArrowRight className="w-4 h-4" /></button>
               </div>
               <div className="premium-card p-12 bg-white border border-border flex flex-col items-center text-center group">
                  <div className="bg-purple-50 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                     <Users className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Community Hub</h4>
                  <p className="text-dark/50 mb-10 font-medium">Join 20k+ developers and marketers sharing best practices and custom flows.</p>
                  <button className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2">Join the Community <ArrowRight className="w-4 h-4" /></button>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Webinar */}
      <section className="py-40">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="premium-card bg-dark rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
               <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Webinar" />
               <div className="absolute inset-0 bg-dark/80" />
            </div>
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest mb-10">
                  <PlayCircle className="w-4 h-4" /> Live Masterclass
               </div>
               <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter text-white uppercase leading-tight">
                 Orchestrating the <br /> Future of AI
               </h2>
               <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-medium">
                 Join our product leads for a deep-dive into the upcoming V5 platform features.
               </p>
               <button className="btn-primary !px-16 !py-6 text-xl">
                 Reserve My Spot
               </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
