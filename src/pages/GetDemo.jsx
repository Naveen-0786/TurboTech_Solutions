import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Bot, CheckCircle2, Calendar, Users, MessageSquare, Loader2 } from 'lucide-react';

export default function GetDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companySize: '1-10 employees'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      console.log("Attempting to save demo request...");
      await addDoc(collection(db, "demo_requests"), {
        ...formData,
        timestamp: serverTimestamp(),
        source: 'get_demo_page'
      });
      console.log("Demo request saved!");
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', companySize: '1-10 employees' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Firebase Error:", error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send request. Please try again.');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="glow-spot top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Book a Live Demo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-dark leading-tight">
              See <span className="text-primary">EngageFlow</span> <br /> in action
            </h1>
            
            <p className="text-xl text-dark/60 mb-12 font-medium leading-relaxed">
              Discover how our WhatsApp automation platform can help you scale your marketing, sales, and support operations.
            </p>

            <div className="space-y-8">
              {[
                { icon: MessageSquare, title: "Customized Walkthrough", desc: "A personalized tour based on your specific business use case." },
                { icon: Bot, title: "AI Agent Deep Dive", desc: "See how our AI agents handle complex customer intents in real-time." },
                { icon: Users, title: "Team Scaling Strategy", desc: "Learn how to manage multiple agents and scale your WhatsApp operations." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-muted p-4 rounded-2xl text-primary h-fit shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-sm text-dark/50 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-muted p-8 md:p-12 rounded-[3rem] border border-border shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border hidden md:block">
              <div className="flex -space-x-2 mb-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 40}`} className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Experts Available</div>
            </div>

            <h2 className="text-2xl font-black text-dark mb-8">Schedule your demo</h2>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-dark mb-2">Request Received!</h3>
                  <p className="text-dark/50 font-medium">One of our solution experts will contact you shortly to confirm your demo time.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/60 ml-1">First Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-white border border-border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/60 ml-1">Last Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-white border border-border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/60 ml-1">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border border-border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/60 ml-1">Company Size</label>
                    <select 
                      value={formData.companySize}
                      onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                      className="w-full bg-white border border-border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none"
                    >
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full btn-primary py-5 rounded-2xl shadow-xl shadow-primary/20 mt-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>Booking... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      'Book My Demo'
                    )}
                  </button>
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <p className="text-red-500 text-xs text-center font-bold">{errorMessage}</p>
                      <p className="text-red-400 text-[10px] text-center mt-1 italic">Check browser console for details</p>
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
