import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Clock, Activity } from 'lucide-react';

const systems = [
  { name: 'EngageFlow App', status: 'operational', uptime: '99.98%' },
  { name: 'WhatsApp API Gateway', status: 'operational', uptime: '99.95%' },
  { name: 'Website Chat Widget CDN', status: 'operational', uptime: '99.99%' },
  { name: 'Webhook Delivery System', status: 'operational', uptime: '99.97%' },
  { name: 'Analytics Dashboard', status: 'operational', uptime: '99.96%' },
  { name: 'Integration Connectors (HubSpot, Salesforce)', status: 'operational', uptime: '99.94%' },
  { name: 'AI Agent Processing Engine', status: 'operational', uptime: '99.92%' },
  { name: 'File Storage & Media Delivery', status: 'operational', uptime: '99.99%' },
];

const incidents = [
  { date: 'May 15, 2025', title: 'Resolved: Delayed webhook notifications', duration: '43 minutes', severity: 'Minor', resolved: true },
  { date: 'Apr 28, 2025', title: 'Resolved: WhatsApp API message queue slowdown', duration: '1h 12min', severity: 'Minor', resolved: true },
  { date: 'Apr 10, 2025', title: 'Resolved: Dashboard loading latency spike', duration: '22 minutes', severity: 'Minor', resolved: true },
];

const statusConfig = {
  operational: { label: 'Operational', color: 'text-emerald-600', bg: 'bg-emerald-50', dot: 'bg-emerald-500' },
  degraded: { label: 'Degraded', color: 'text-amber-600', bg: 'bg-amber-50', dot: 'bg-amber-500' },
  outage: { label: 'Outage', color: 'text-rose-600', bg: 'bg-rose-50', dot: 'bg-rose-500' },
};

export default function ServiceStatus() {
  const allOperational = systems.every(s => s.status === 'operational');
  return (
    <div className="pt-20 bg-white">
      <section className={`py-20 border-b border-border ${allOperational ? 'bg-gradient-to-b from-emerald-50 to-white' : 'bg-gradient-to-b from-amber-50 to-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-8 ${allOperational ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>
              {allOperational ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span className="font-black text-sm">{allOperational ? 'All Systems Operational' : 'Partial Service Disruption'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tighter mb-4">
              {allOperational ? 'Everything is running smoothly' : 'We\'re working on it'}
            </h1>
            <p className="text-lg text-dark/60 font-medium">Check the real-time status of EngageFlow's systems and uptime.</p>
          </motion.div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-black text-dark mb-8 flex items-center gap-3">
            <Activity className="w-5 h-5 text-primary" /> System Status
          </h2>
          <div className="space-y-3">
            {systems.map((sys, i) => {
              const cfg = statusConfig[sys.status];
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="bg-white border border-border rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot} animate-pulse`} />
                    <span className="font-bold text-dark text-sm">{sys.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-dark/40 font-bold">{sys.uptime} uptime</span>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-black text-dark mb-8 flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" /> Recent Incidents
          </h2>
          {incidents.length === 0 ? (
            <div className="text-center py-12 text-dark/30 font-bold">No incidents in the last 30 days 🎉</div>
          ) : (
            <div className="space-y-4">
              {incidents.map((inc, i) => (
                <div key={i} className="bg-white border border-border rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs text-dark/40 font-bold block mb-1">{inc.date}</span>
                      <h3 className="font-black text-dark text-sm">{inc.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] font-bold text-dark/40">{inc.duration}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${inc.resolved ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                        {inc.resolved ? 'Resolved' : 'Investigating'}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-dark/40">{inc.severity} Severity</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
