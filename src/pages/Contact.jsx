import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Globe, 
  Activity,
  MessageCircle,
  Clock,
  CheckCircle2,
  Users,
  ArrowRight,
  Loader2
} from 'lucide-react';

const ContactOption = ({ icon: Icon, title, val, desc, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all group"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-black text-dark mb-2">{title}</h3>
    <div className="text-primary font-bold mb-3">{val}</div>
    <p className="text-sm text-dark/50 leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Sales Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      console.log("Attempting to save contact submission...");
      await addDoc(collection(db, "contact_submissions"), {
        ...formData,
        timestamp: serverTimestamp(),
        source: 'contact_page'
      });
      console.log("Submission successful!");
      setStatus('success');
      setFormData({ fullName: '', email: '', subject: 'Sales Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Firebase Error:", error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <div className="pt-20 bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-dark/70 uppercase tracking-wider">Support Team Online</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-dark mb-8 tracking-tight leading-[0.9]">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-dark/60 max-w-xl font-medium leading-relaxed mb-10">
                Have questions about EngageFlow? Our team is ready to help you automate 
                your customer journeys and scale your WhatsApp marketing.
              </p>
              
              <div className="flex flex-wrap gap-8">
                 <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                       <Clock className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-xs font-bold text-dark/40 uppercase tracking-wider">Response Time</div>
                       <div className="text-sm font-bold text-dark">Under 2 Hours</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                       <Globe className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-xs font-bold text-dark/40 uppercase tracking-wider">Global Support</div>
                       <div className="text-sm font-bold text-dark">24/7 Availability</div>
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-border relative"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-black text-dark mb-2">Message Sent!</h2>
                    <p className="text-dark/50 font-medium">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-dark/50 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full bg-muted border border-border rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-primary/50 transition-all font-medium" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-dark/50 uppercase tracking-widest ml-1">Work Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-muted border border-border rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-primary/50 transition-all font-medium" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/50 uppercase tracking-widest ml-1">What can we help with?</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-muted border border-border rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none"
                      >
                        <option>Sales Inquiry</option>
                        <option>Technical Support</option>
                        <option>Partnership Opportunity</option>
                        <option>Billing Question</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/50 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        required
                        rows="4" 
                        placeholder="Tell us about your project..." 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-muted border border-border rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-primary/50 transition-all font-medium resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={status === 'loading'}
                      type="submit" 
                      className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg group shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                    </button>
                    {status === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                        <p className="text-red-500 text-xs text-center font-bold">{errorMessage}</p>
                        <p className="text-red-400 text-[10px] text-center mt-1 italic">Check browser console for details</p>
                      </div>
                    )}
                    <p className="text-center text-[10px] text-dark/40 px-8">
                      By clicking "Send Message", you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="section-padding !pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ContactOption 
              icon={MessageCircle}
              title="Chat with Us"
              val="WhatsApp Business"
              desc="Instant support via our official WhatsApp channel for real-time assistance."
              color="bg-primary/10 text-primary"
            />
            <ContactOption 
              icon={Mail}
              title="Email Us"
              val="hello@turbotech.solutions"
              desc="For detailed inquiries, partnership proposals, or general feedback."
              color="bg-secondary/10 text-secondary"
            />
            <ContactOption 
              icon={MapPin}
              title="Visit Us"
              val="Silicon Valley HQ"
              desc="123 Automation Way, San Jose, CA 95112, United States"
              color="bg-primary/10 text-primary"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-dark mb-6">Common Questions</h2>
            <p className="text-dark/50 font-medium">Quick answers to the questions we get most often.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does it take to get a demo?", a: "Demos are usually scheduled within 24 hours. Our team will reach out to find a time that works best for your schedule." },
              { q: "Do you offer custom enterprise pricing?", a: "Yes, we provide tailored pricing packages for high-volume enterprise clients with specific compliance and security needs." },
              { q: "Can I integrate EngageFlow with my CRM?", a: "Absolutely. EngageFlow offers native integrations with Salesforce, HubSpot, and Zapier, as well as a robust REST API." },
              { q: "Is my data secure?", a: "We are SOC 2 Type II compliant and use industry-standard encryption for all data at rest and in transit." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#FAFAFA] border border-border/50">
                <h4 className="font-bold text-dark mb-3 text-lg flex gap-3">
                  <span className="text-primary">Q.</span> {faq.q}
                </h4>
                <p className="text-dark/60 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            Global Infrastructure
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-dark mb-12 tracking-tight">Built for Global Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "10M+", label: "Messages Daily" },
              { val: "50+", label: "Countries" },
              { val: "99.99%", label: "Uptime SLA" },
              { val: "2k+", label: "Enterprise Users" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-dark mb-2 tracking-tight">{stat.val}</div>
                <div className="text-xs font-bold text-dark/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48 transition-all group-hover:scale-110" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight relative z-10">
              Ready to automate your <br /> customer success?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
              <button className="bg-white text-primary hover:bg-white/90 px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 text-white hover:bg-white/20 px-12 py-5 rounded-2xl font-bold transition-all backdrop-blur-sm border border-white/20">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
