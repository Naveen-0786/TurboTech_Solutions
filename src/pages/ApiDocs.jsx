import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Zap, Globe, Shield, Copy, CheckCircle2 } from 'lucide-react';

const endpoints = [
  { method: 'POST', path: '/v2/bots/{bot_id}/sendMessage', desc: 'Send a message to a contact in an active bot session.' },
  { method: 'GET', path: '/v2/bots/{bot_id}/sessions', desc: 'Retrieve all active sessions for a specific bot.' },
  { method: 'POST', path: '/v2/contacts', desc: 'Create or update a contact in your EngageFlow account.' },
  { method: 'GET', path: '/v2/contacts/{contact_id}', desc: 'Retrieve a specific contact\'s data and conversation history.' },
  { method: 'POST', path: '/v2/bots/{bot_id}/sessions/{session_id}/close', desc: 'Close an active bot session programmatically.' },
  { method: 'GET', path: '/v2/bots', desc: 'List all bots in your EngageFlow account with their metadata.' },
];

const sdks = [
  { lang: 'JavaScript', icon: '🟨', code: `import EngageFlow from '@engageflow/sdk';
const client = new EngageFlow({ apiKey: 'YOUR_API_KEY' });
await client.bots.sendMessage({ botId: 'bot_123', message: 'Hello!' });` },
  { lang: 'Python', icon: '🐍', code: `import engageflow
client = engageflow.Client(api_key="YOUR_API_KEY")
client.bots.send_message(bot_id="bot_123", message="Hello!")` },
  { lang: 'cURL', icon: '⚡', code: `curl -X POST https://api.engageflow.io/v2/bots/bot_123/sendMessage \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hello!"}'` },
];

const methodColors = { GET: 'bg-emerald-50 text-emerald-700 border-emerald-100', POST: 'bg-primary/10 text-primary border-primary/10', DELETE: 'bg-rose-50 text-rose-700 border-rose-100', PUT: 'bg-amber-50 text-amber-700 border-amber-100' };

export default function ApiDocs() {
  const [activeLang, setActiveLang] = useState('JavaScript');
  const [copied, setCopied] = useState(false);
  const activeSDK = sdks.find(s => s.lang === activeLang);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSDK.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 border-b border-border bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.2),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-wider mb-6">
              <Code2 className="w-3.5 h-3.5" /> API Documentation
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 !text-white">
              Explore our API and SDK to<br /><span className="text-primary-light">integrate EngageFlow</span> with your tools
            </h1>
            <p className="text-lg text-white/60 font-medium max-w-3xl mx-auto mb-10">
              Build, ship and scale conversational experiences to the world. Our REST API and SDKs give you full programmatic control over your chatbots, contacts, and sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary !px-10 !py-4">Get API Key Free</Link>
              <Link to="/contact" className="btn-outline !border-white/20 !text-white hover:!bg-white/10 !px-10 !py-4">Contact Developer Support</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 border-b border-border bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: 'REST API', desc: 'Simple, predictable REST endpoints with JSON responses.' },
            { icon: Code2, title: 'SDKs Available', desc: 'Official SDKs for JavaScript, Python, PHP, and more.' },
            { icon: Shield, title: 'Secure by Default', desc: 'API key authentication with rate limiting and SOC2 compliance.' },
            { icon: Globe, title: 'Webhooks', desc: 'Real-time event notifications sent to your server.' },
          ].map((f, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-6 text-left hover:shadow-md transition-all">
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-black text-dark mb-2">{f.title}</h3>
              <p className="text-xs text-dark/50 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-dark mb-6">Get started in minutes</h2>
            <p className="text-dark/60 font-medium leading-relaxed mb-8">Install our SDK, authenticate with your API key, and start building conversational experiences programmatically — no complex setup required.</p>
            <div className="space-y-4">
              {['Official SDKs for 4+ languages', 'Comprehensive REST API reference', 'Webhook event system for real-time data', 'Interactive API playground to test endpoints'].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-dark/80">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="flex gap-2">
                {sdks.map(s => (
                  <button key={s.lang} onClick={() => setActiveLang(s.lang)} className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${activeLang === s.lang ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}>
                    {s.icon} {s.lang}
                  </button>
                ))}
              </div>
              <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <pre className="p-6 text-[12px] text-slate-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {activeSDK?.code}
            </pre>
          </div>
        </div>
      </section>

      {/* API Endpoints Reference */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-dark mb-10">API Endpoints Reference</h2>
          <div className="space-y-3">
            {endpoints.map((ep, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-border rounded-2xl p-5 flex items-center gap-4 hover:shadow-md hover:border-primary/20 transition-all group">
                <span className={`text-[10px] font-black px-2.5 py-1.5 rounded-lg border shrink-0 ${methodColors[ep.method]}`}>{ep.method}</span>
                <code className="font-mono text-xs text-dark font-bold flex-grow">{ep.path}</code>
                <p className="text-xs text-dark/50 font-medium hidden md:block">{ep.desc}</p>
                <ArrowRight className="w-4 h-4 text-dark/20 group-hover:text-primary shrink-0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-4 !text-white">Ready to start building?</h2>
          <p className="text-white/70 mb-8 font-medium">Get your API key, explore our documentation, and ship your first integration today.</p>
          <Link to="/pricing" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary inline-flex items-center gap-2">
            Get API Key Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
