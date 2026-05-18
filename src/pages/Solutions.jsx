import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  TrendingUp, 
  Building2,
  Target,
  Rocket,
  MessageCircle,
  Briefcase,
  Users,
  Car,
  HelpCircle,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionCard = ({ icon: Icon, title, desc, features, path }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="premium-card p-10 flex flex-col group h-full shadow-lg border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 bg-white"
  >
    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
      <Icon className="w-8 h-8 text-primary group-hover:text-inherit" />
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tight leading-none text-dark">{title}</h3>
    <p className="text-sm text-dark/60 mb-8 leading-relaxed font-medium flex-grow">{desc}</p>
    <ul className="space-y-4 mb-8 border-y border-border py-6">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 font-bold text-dark/70 text-xs">
          <CheckCircle2 className="text-primary w-4.5 h-4.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Link to={path || "/solutions"} className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all group/btn text-xs uppercase tracking-wider">
      Explore Solution <ArrowRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

export default function Solutions() {
  return (
    <div className="pt-20 bg-white">
      {/* Page Hero */}
      <section className="relative py-28 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden border-b border-border">
        <div className="glow-spot top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            Growth Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-dark">
            Conversational Workflows for <span className="text-gradient">Every Business Case</span>
          </h1>
          <p className="text-xl text-dark/60 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            Specialized no-code & AI automation structures tailored precisely to support departments, lead capture goals, and specific industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/pricing" className="btn-primary !px-12 !py-5 text-base border-0 bg-primary hover:bg-primary-light">Get Started Free</Link>
             <Link to="/contact" className="btn-outline !px-12 !py-5 text-base">Talk to Sales Architect</Link>
          </div>
        </div>
      </section>

      {/* 1. BY TEAM SECTION */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-primary font-black uppercase tracking-widest block mb-4">By Department Team</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-dark">Increase pipeline velocity across every team</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <SolutionCard 
                 icon={Target}
                 title="Marketing"
                 path="/solutions/marketing"
                 desc="Maximize your lead acquisition performance and generate qualified leads for Sales teams."
                 features={["Traffic Qualification", "Contextual UTM Hooking", "CPL Margin Optimization", "CRM Pipeline Ingestion"]}
               />
               <SolutionCard 
                 icon={Zap}
                 title="Sales"
                 path="/solutions/sales"
                 desc="Automate repetitive tasks, book meetings with high-intent leads, and close more deals with the help of AI."
                 features={["Real-time Deal qualification", "Direct Rep Route Logic", "Calendly & Hubspot Sync", "Proactive Pricing Triggers"]}
               />
            </div>
         </div>
      </section>

      {/* 2. BY USE CASE SECTION */}
      <section className="py-28 bg-dark text-white rounded-[4rem] mx-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-20">
              <span className="text-primary-light font-black uppercase tracking-widest block mb-4">By Functional Use Case</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight !text-white">Solving specific structural conversion challenges</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lead Gen */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between">
                 <div>
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                       <Rocket className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black mb-3 text-white">Lead Generation</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-6">Capture more leads at a lower cost & improve your marketing performance.</p>
                 </div>
                 <Link to="/solutions/lead-generation" className="text-primary-light font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all mt-4">
                    Explore Lead Gen <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>

              {/* Customer Engagement */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between">
                 <div>
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                       <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black mb-3 text-white">Customer Engagement</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-6">Engaged proactively with customers to enhance loyalty and retention.</p>
                 </div>
                 <Link to="/solutions/customer-engagement" className="text-primary-light font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all mt-4">
                    Explore Engagement <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>

              {/* Customer Support */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between">
                 <div>
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                       <HelpCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black mb-3 text-white">Customer Support</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-6">Service customers with delightful support experiences & boost satisfaction.</p>
                 </div>
                 <Link to="/solutions/support" className="text-primary-light font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all mt-4">
                    Explore Support <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 3. BY INDUSTRY SECTION */}
      <section className="py-24 bg-white border-b border-border">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-primary font-black uppercase tracking-widest block mb-4">By Sector Industry</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-dark">Tailored sectors for maximum results</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <SolutionCard 
                 icon={Car}
                 title="Automotive"
                 path="/solutions/automotive"
                 desc="Capture and convert more leads instantly for your automotive business."
                 features={["Interactive Car Showcase Dialogues", "Dealership BDC Calendar Booking Sync", "Salesforce & Dealer CRM integrations", "Instant Showroom Visit Notifications"]}
               />
               <SolutionCard 
                 icon={Building2}
                 title="Agency & Consulting"
                 path="/solutions/agency-consulting"
                 desc="Lower your CPL and drive higher lead conversions to boost your agency’s margins with chatbots."
                 features={["Agency White-Labeled Sub-Accounts", "Low CPL Campaign Attributions", "Collaborative Multi-Workspace Hubs", "Whitelabel Sales Pitch Material"]}
               />
            </div>
         </div>
      </section>
    </div>
  );
}
