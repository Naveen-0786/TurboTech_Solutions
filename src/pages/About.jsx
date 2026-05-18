import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Shield, Cpu, Zap, Heart, Sparkles, Globe, MapPin, Building2, Network } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Target, title: "Precision", desc: "We focus on the minute architectural details that define global outcome parity." },
    { icon: Rocket, title: "Velocity", desc: "Speed is the ultimate competitive advantage. We engineer for zero-latency interaction." },
    { icon: Network, title: "Integrity", desc: "Data trust is immutable. We maintain the world's most rigorous compliance standards." }
  ];

  return (
    <div className="pt-20">
      {/* Page Hero - Fixed & Expanded */}
      <section className="page-hero bg-surface">
        <div className="section-padding grid lg:grid-cols-2 gap-24 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-12">
               Our Thesis
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.85] tracking-tighter uppercase">
              Architecting <br />
              <span className="text-gradient">Global Parity</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark/60 leading-relaxed font-medium mb-12">
              Turbo Tech Solutions was founded with a singular purpose: to build the high-fidelity 
              infrastructure that allows the world's most ambitious companies to transcend 
              geographical and technical limits.
            </p>
            <div className="flex items-center gap-8 text-primary font-bold">
               <div className="flex items-center gap-2 uppercase tracking-widest text-[10px]">
                  <Globe className="w-4 h-4" /> Global Control
               </div>
               <div className="flex items-center gap-2 uppercase tracking-widest text-[10px]">
                  <Shield className="w-4 h-4" /> Enterprise Grade
               </div>
            </div>
          </motion.div>
          <div className="relative">
             <div className="grid grid-cols-2 gap-8 md:gap-12">
                {[
                  { l: "Nodes Deployed", v: "2.4M+", i: Network },
                  { l: "Global Regions", v: "140+", i: Globe },
                  { l: "Engineers", v: "1,200", i: Users },
                  { l: "System Fidelity", v: "99.99%", i: Shield }
                ].map((s, i) => (
                  <div key={i} className="premium-card p-10 md:p-14 text-center shadow-xl border-border">
                     <s.i className="w-8 h-8 text-primary/30 mx-auto mb-6" />
                     <div className="text-4xl md:text-5xl font-bold text-dark mb-2 tracking-tighter">{s.v}</div>
                     <div className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">{s.l}</div>
                  </div>
                ))}
             </div>
             <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10" />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-40 bg-white border-y border-border">
         <div className="section-padding max-w-4xl mx-auto">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-12 text-center">The Foundation</h2>
            <div className="space-y-12 text-2xl md:text-4xl font-bold text-dark leading-[1.3] tracking-tight">
               <p>"We didn't start by building an automation tool. We started by asking how data could move across the planet with zero resistance."</p>
               <p className="text-dark/40">Today, our global backbone facilitates trillions of secure interactions for the world's most innovative brands, from Silicon Valley to Singapore.</p>
               <div className="flex items-center gap-6 pt-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20">T</div>
                  <div>
                     <div className="text-xl font-bold text-dark">Thorne & Collective</div>
                     <div className="text-sm font-bold text-primary uppercase tracking-[0.2em] mt-1">Strategic Architecture Office</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="py-40 relative overflow-hidden">
        <div className="section-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-10">Collective DNA</h2>
            <h3 className="text-5xl font-bold mb-10 tracking-tighter uppercase">Uncompromised Principles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="premium-card p-12 md:p-16 group hover:-translate-y-4 transition-all duration-700 shadow-2xl border-border">
                <div className="bg-primary/10 p-6 rounded-3xl w-fit mb-12 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm">
                  <v.icon className="w-10 h-10 text-primary group-hover:text-inherit" />
                </div>
                <h4 className="text-3xl font-bold mb-8 tracking-tighter uppercase">{v.title}</h4>
                <p className="text-dark/60 font-medium leading-relaxed text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-40 bg-dark text-white rounded-[4rem] mx-6 mb-32 overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         <div className="section-padding relative z-10 text-center">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-12">Global Headquarters</h2>
            <div className="grid md:grid-cols-3 gap-20">
               {[
                 { city: "Silicon Valley", role: "Strategic HQ", addr: "Sand Hill Rd, Menlo Park" },
                 { city: "Singapore", role: "APAC Control Hub", addr: "Marina Bay Financial Centre" },
                 { city: "London", role: "EMEA Infrastructure", addr: "Canary Wharf, E14" }
               ].map((node, i) => (
                 <div key={i}>
                    <MapPin className="w-10 h-10 text-primary mx-auto mb-8" />
                    <div className="text-3xl font-bold mb-4 tracking-tighter">{node.city}</div>
                    <div className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">{node.role}</div>
                    <div className="text-white/40 text-sm font-medium">{node.addr}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
