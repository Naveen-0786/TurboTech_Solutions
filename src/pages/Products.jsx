import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Sparkles, 
  BarChart3, 
  Database, 
  Layers, 
  Network, 
  Activity,
  Cpu,
  Layout,
  Smartphone,
  Workflow,
  Share2,
  Lock,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductFeature = ({ id, title, subtitle, desc, image, features, reverse = false, badge, color = "primary" }) => (
  <section id={id} className={`py-32 md:py-48 relative overflow-hidden ${reverse ? 'bg-surface' : ''}`}>
    <div className="section-padding grid lg:grid-cols-2 gap-24 md:gap-32 items-center">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={reverse ? 'lg:order-2' : ''}
      >
        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-${color}/10 border border-${color}/20 text-${color} text-xs font-bold uppercase tracking-[0.2em] mb-10`}>
           {badge || subtitle}
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] tracking-tighter uppercase">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-dark/60 mb-12 leading-relaxed font-medium">
          {desc}
        </p>
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle2 className={`w-6 h-6 text-${color} flex-shrink-0`} />
              <span className="font-bold text-dark/70 text-base md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8">
          <Link to={`/${id}`} className={`btn-${color} !px-10 !py-5`}>Learn More</Link>
          <button className="btn-outline !px-10 !py-5">View Demo</button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative ${reverse ? 'lg:order-1' : ''}`}
      >
        <div className="premium-card p-4 md:p-8 bg-white shadow-2xl border-border group overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-3xl shadow-lg transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
        <div className={`glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-${color}/10`} />
      </motion.div>
    </div>
  </section>
);

export default function Products() {
  return (
    <div className="pt-20">
      {/* Page Hero - Fixed & Expanded */}
      <section className="page-hero bg-primary/5 overflow-hidden">
        <div className="glow-spot top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-primary/10" />
        <div className="section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-12">
               The Complete Platform
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.85] uppercase">
              Omnichannel <br />
              <span className="text-gradient">Automation</span>
            </h1>
            <p className="text-xl md:text-3xl text-dark/60 max-w-3xl mx-auto font-medium leading-relaxed mb-16">
              Empower your business with AI-driven chatbots and official WhatsApp solutions 
              that convert traffic into loyal customers.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="btn-primary !px-16 !py-6 text-xl">Get Started Free</button>
               <button className="btn-outline !px-16 !py-6 text-xl">Talk to Sales</button>
            </div>
          </motion.div>
          
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-border pt-20">
             {[
               { l: "Global Uptime", v: "99.99%", i: Activity },
               { l: "API Latency", v: "< 20ms", i: Zap },
               { l: "Active Bots", v: "2M+", i: MessageSquare },
               { l: "Integrations", v: "2,000+", i: Share2 }
             ].map((stat, i) => (
               <div key={i} className="text-center">
                  <stat.i className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dark mb-1 tracking-tight">{stat.v}</div>
                  <div className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">{stat.l}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Main Product Categories */}
      <ProductFeature 
        id="ai-agents"
        title="AI Agents"
        subtitle="Conversational Intelligence"
        badge="New: Generative AI"
        color="primary"
        desc="Deploy human-like AI agents powered by GPT-4 and Gemini. Understand intent, sentiment, and complex queries automatically."
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070"
        features={["LLM Integration", "Intent Recognition", "Sentiment Analysis", "Multi-lingual Support"]}
      />

      <ProductFeature 
        id="whatsapp"
        title="EngageFlow WhatsApp"
        subtitle="Messaging Automation"
        badge="Official Meta Partner"
        color="primary"
        desc="Scale your communication on the world's most popular messaging app with EngageFlow's official API. Send notifications, run campaigns, and support customers."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
        features={["Verified Green Tick", "Broadcast Campaigns", "Interactive Buttons", "WhatsApp Catalogs"]}
        reverse={true}
      />

      <ProductFeature 
        id="web-chat"
        title="Website Bots"
        subtitle="Lead Generation"
        badge="Web Conversions"
        color="primary"
        desc="Turn your website into a lead machine. Capture visitor data, book meetings, and provide instant support with sleek web widgets."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070"
        features={["Proactive Greetings", "Custom Branding", "CRM Integration", "Real-time Notifications"]}
      />

      {/* Platform Features - The "Bigger" Content */}
      <section className="py-40 bg-dark text-white overflow-hidden">
        <div className="section-padding">
           <div className="text-center mb-32">
              <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-8">Platform Capabilities</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Designed for <br /> Builders.</h3>
           </div>

           <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "No-Code Builder",
                  desc: "Build complex conversational flows with a visual drag-and-drop interface. No coding required.",
                  icon: Layout
                },
                {
                  title: "Integrations Hub",
                  desc: "Connect to HubSpot, Salesforce, Zapier, and 2,000+ other tools in a few clicks.",
                  icon: Workflow
                },
                {
                  title: "API & SDK",
                  desc: "Powerful developer tools to build, ship, and scale custom conversational experiences.",
                  icon: Code2
                },
                {
                  title: "Data Security",
                  desc: "Enterprise-grade encryption, SOC2 compliance, and GDPR ready data handling.",
                  icon: Lock
                },
                {
                  title: "Analytics Suite",
                  desc: "Deep insights into bot performance, user behavior, and conversion metrics.",
                  icon: BarChart3
                },
                {
                  title: "Global Mesh",
                  desc: "Low-latency response times worldwide via our distributed edge network.",
                  icon: Globe
                }
              ].map((feat, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                   <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                      <feat.icon className="w-8 h-8" />
                   </div>
                   <h4 className="text-2xl font-bold mb-4 tracking-tight">{feat.title}</h4>
                   <p className="text-white/40 leading-relaxed font-medium">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Comparison Section - Kept but refined */}
      <section className="py-40 bg-white">
         <div className="section-padding">
            <h2 className="text-5xl font-bold mb-20 text-center tracking-tighter uppercase">Why Choose Turbo Tech?</h2>
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-border text-xs font-bold uppercase tracking-widest text-primary">
                        <th className="py-8 px-6">Capability</th>
                        <th className="py-8 px-6">Legacy Tools</th>
                        <th className="py-8 px-6 text-dark bg-primary/5 rounded-t-3xl">Turbo Tech Core</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                     {[
                       ["AI Reasoning", "Regex/Keyword based", "Neural Intent Engine"],
                       ["WhatsApp Setup", "Weeks of manual work", "Instant via Meta Cloud"],
                       ["Integration", "Custom code required", "Native 1-Click Connect"],
                       ["User Experience", "Static forms/buttons", "Dynamic & Personalized"],
                       ["Scalability", "Server-limited", "Infinite Elastic Edge"]
                     ].map((row, i) => (
                       <tr key={i} className="border-b border-border group hover:bg-surface transition-colors">
                          <td className="py-8 px-6 font-bold">{row[0]}</td>
                          <td className="py-8 px-6 text-dark/40">{row[1]}</td>
                          <td className="py-8 px-6 text-primary font-bold bg-primary/5">{row[2]}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-primary/5">
        <div className="section-padding text-center">
           <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter uppercase leading-none">Ready to build?</h2>
           <p className="text-xl text-dark/60 mb-16 max-w-2xl mx-auto font-medium">
             Start your 14-day free trial today. No credit card required. 
             Join 50,000+ businesses growing with Turbo Tech.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary !px-16 !py-6 text-xl">Sign Up Free</button>
              <button className="btn-outline !px-16 !py-6 text-xl">Book a Demo</button>
           </div>
        </div>
      </section>
    </div>
  );
}
