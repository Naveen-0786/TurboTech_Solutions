import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileCheck, Globe, Cpu, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const ComplianceBadge = ({ title, desc }) => (
  <div className="premium-card p-10 flex flex-col items-center text-center shadow-lg border-border">
    <div className="bg-primary/10 p-5 rounded-2xl mb-8 text-primary">
      <FileCheck className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{title}</h3>
    <p className="text-dark/50 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default function Security() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-hero bg-surface">
        <div className="glow-spot top-1/4 right-0 w-[800px] h-[800px] bg-primary/10" />
        <div className="section-padding grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-12">
               Trust Architecture
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.85] uppercase">
              Zero Trust <br />
              <span className="text-gradient">Integrity</span>
            </h1>
            <p className="text-xl md:text-3xl text-dark/60 max-w-xl mb-12 leading-relaxed font-medium">
              We define the global standard for enterprise-grade security, featuring 
              post-quantum encryption and multi-region immutable audit logs.
            </p>
            <div className="flex flex-wrap gap-6">
               <button className="btn-primary">View Trust Center</button>
               <button className="btn-outline">Download Audit Reports</button>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="premium-card p-12 bg-white shadow-2xl border-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                   <ShieldCheck className="w-48 h-48" />
                </div>
                <div className="space-y-10 relative z-10">
                   {[
                     { t: "Post-Quantum Active", s: "Verified", i: Lock },
                     { t: "End-to-End Vaulting", s: "Operational", i: Eye },
                     { t: "Regional Parity", s: "100% Sync", i: Globe }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between border-b border-border pb-8 last:border-0 last:pb-0">
                        <div className="flex items-center gap-5">
                           <div className="bg-primary/10 p-3 rounded-xl text-primary"><item.i className="w-6 h-6" /></div>
                           <div className="font-bold text-dark text-xl">{item.t}</div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> {item.s}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-40 bg-primary/5">
        <div className="section-padding">
           <div className="text-center mb-32">
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-10">Defense Protocol</h2>
              <h3 className="text-5xl font-bold mb-10 uppercase tracking-tighter">Multi-Layered Protection</h3>
           </div>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { t: "Encryption Layer", d: "Lattice-based cryptography protocols designed to withstand post-quantum computing threats.", i: Cpu },
                { t: "Isolation Policy", d: "Air-gapped regional infrastructure ensuring total tenant isolation and data sovereignty.", i: ShieldCheck },
                { t: "Real-time Auditing", d: "Immutable transaction logs stored across a decentralized global ledger for 100% traceability.", i: Eye }
              ].map((pillar, i) => (
                <div key={i} className="premium-card p-12 bg-white shadow-xl group border-border">
                   <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <pillar.i className="w-8 h-8 text-primary group-hover:text-inherit" />
                   </div>
                   <h4 className="text-3xl font-bold mb-6 tracking-tight uppercase">{pillar.t}</h4>
                   <p className="text-dark/60 font-medium leading-relaxed">{pillar.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="py-40">
        <div className="section-padding">
           <div className="text-center mb-32">
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-10">Global Standards</h2>
              <h3 className="text-5xl font-bold mb-10 uppercase tracking-tighter">Verified Compliance</h3>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ComplianceBadge title="GDPR" desc="General Data Protection Regulation Fully Compliant." />
              <ComplianceBadge title="SOC2 Type II" desc="Certified enterprise-grade security and privacy controls." />
              <ComplianceBadge title="HIPAA" desc="Advanced protocols for international healthcare data." />
              <ComplianceBadge title="PCI DSS" desc="Level 1 certified for global financial transactions." />
           </div>
        </div>
      </section>

      {/* Security CTA */}
      <section className="py-40 border-t border-border mb-32">
         <div className="section-padding grid lg:grid-cols-2 gap-32 items-center">
            <div>
               <h2 className="text-5xl font-bold mb-10 tracking-tighter uppercase leading-tight">Ready to Audit <br /> Our Infrastructure?</h2>
               <p className="text-xl text-dark/60 font-medium leading-relaxed mb-12">
                  Our full security documentation, penetration test reports, and compliance 
                  certificates are available for review by qualified enterprise partners.
               </p>
               <div className="space-y-6">
                  {["SOC3 Public Summary", "Whitepaper: Quantum Security", "SLA & Uptime Guarantees"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-dark font-bold hover:text-primary transition-colors cursor-pointer group">
                       <CheckCircle2 className="w-5 h-5 text-primary" /> {item} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-2" />
                    </div>
                  ))}
               </div>
            </div>
            <div className="premium-card p-12 bg-white shadow-2xl border-border text-center">
               <AlertTriangle className="w-16 h-16 text-secondary mx-auto mb-10 animate-pulse" />
               <h3 className="text-3xl font-bold mb-8">Report a Vulnerability</h3>
               <p className="text-dark/50 mb-12 font-medium leading-relaxed">Participate in our global bug bounty program and help secure the international backbone.</p>
               <button className="btn-primary w-full !bg-dark">Access Bug Bounty Node</button>
            </div>
         </div>
      </section>
    </div>
  );
}
