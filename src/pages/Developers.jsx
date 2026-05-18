import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Zap, BookOpen, Layers, Network, Activity, ArrowRight, Github, ChevronRight, ShieldCheck } from 'lucide-react';

const DocCard = ({ title, desc, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="premium-card p-10 group cursor-pointer"
  >
    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
      <Icon className="w-8 h-8 text-primary group-hover:text-inherit" />
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-dark/60 mb-8 text-sm leading-relaxed font-medium">{desc}</p>
    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
      View Documentation <ChevronRight className="w-3 h-3" />
    </div>
  </motion.div>
);

export default function Developers() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-hero bg-surface">
        <div className="section-padding grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-12">
               Engineer's Portal
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter leading-[0.85] uppercase">
              Build the <br />
              <span className="text-gradient">Next Standard</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark/60 max-w-xl mb-12 leading-relaxed font-medium">
              Integrate with our global backbone via high-performance APIs, SDKs, and 
              specialized gRPC protocols designed for billion-scale systems.
            </p>
            <div className="flex flex-wrap gap-6">
               <button className="btn-primary flex items-center gap-3">
                  <Github className="w-5 h-5" /> Explore SDKs
               </button>
               <button className="btn-outline">Quickstart Guide</button>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="bg-dark p-8 rounded-4xl shadow-2xl relative overflow-hidden group">
                <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   <span className="ml-4 text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">uplink_init.sh</span>
                </div>
                <pre className="font-mono text-sm text-primary/80 leading-relaxed overflow-x-auto">
                   <code>{`# Authenticating with Global Backbone
export TURBO_KEY="tb_live_9283..."

# Initializing SecureGate Tunnel
turbo init --region=eu-west-1 \\
      --security=post-quantum \\
      --sync=neural

# Deploying EngageFlow Node
turbo deploy --service=engageflow-v4 \\
      --autoscaling=true \\
      --latency-threshold=20ms`}</code>
                </pre>
             </div>
             <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10" />
          </div>
        </div>
      </section>

      {/* Doc Grid */}
      <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DocCard 
          title="API Reference"
          desc="Complete gRPC and REST specifications for all core services and edge nodes."
          icon={Terminal}
        />
        <DocCard 
          title="SDK Ecosystem"
          desc="Native libraries for Go, Rust, Node.js, and Python with built-in neural sync."
          icon={Cpu}
        />
        <DocCard 
          title="Edge Runtime"
          desc="Deploy custom logic directly to our 140+ regional edge nodes for sub-10ms logic execution."
          icon={Zap}
        />
        <DocCard 
          title="Webhooks v2"
          desc="Guaranteed delivery at scale with multi-region redundancy and automatic retries."
          icon={Activity}
        />
        <DocCard 
          title="Authentication"
          desc="Implementation guides for hardware security keys and lattice-based identity protocols."
          icon={ShieldCheck}
        />
        <DocCard 
          title="Architecture Guides"
          desc="Deep dives into neural data fabric and CRDT conflict resolution models."
          icon={Layers}
        />
      </div>

      {/* Community / Support */}
      <section className="py-40 bg-primary/5 border-y border-border mb-32">
         <div className="section-padding grid lg:grid-cols-2 gap-24 items-center">
            <div>
               <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter uppercase leading-tight">Engineered by <br /> Developers, <span className="text-primary">For Developers</span></h2>
               <p className="text-xl text-dark/60 font-medium leading-relaxed mb-12">
                  Our core engineering team maintains active presence in our community forums and Discord nodes. 
                  Get direct access to the architects of the global backbone.
               </p>
               <button className="flex items-center gap-4 text-primary font-bold text-lg group">
                  Join Developer Discord <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
               {[
                 { l: "Monthly API Calls", v: "4.8 Trillion" },
                 { l: "Open Source Nodes", v: "12,000+" },
                 { l: "Avg Support Response", v: "14min" },
                 { l: "Global Latency (P99)", v: "28ms" }
               ].map((stat, i) => (
                 <div key={i} className="premium-card p-10 bg-white shadow-xl">
                    <div className="text-3xl font-bold text-dark mb-2 tracking-tighter">{stat.v}</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{stat.l}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
