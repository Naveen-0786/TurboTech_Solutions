import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Bot,
  Sparkles,
  MessageSquare,
  Zap,
  Users,
  ShieldCheck,
  Globe,
  Activity,
  Code2,
  Layers,
  ChevronRight,
  Plus,
  Minus,
  Star,
  XCircle,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  PenTool,
  Puzzle,
  MousePointer2,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Components ---

const ChatSimulation = ({ persona = "Sales" }) => {
  const [messages, setMessages] = useState([]);
  const [scenarioStep, setScenarioStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const scenarios = {
    Marketing: [
      { text: "Hi! Looking for the perfect plan for your business? 🚀", isBot: true, delay: 1000 },
      { text: "I can help you find the best fit in under 30 seconds.", isBot: true, delay: 1200 },
      { type: "options", options: ["Business Plan", "Enterprise", "I'm not sure"], isBot: true, delay: 800 },
      { text: "I'm not sure", isBot: false, delay: 1500 },
      { text: "No problem! Let's start with your monthly traffic...", isBot: true, delay: 1000 },
      { type: "form", isBot: true, delay: 1200 }
    ],
    Sales: [
      { text: "Hi! Ready to book a personalized tour of our platform?", isBot: true, delay: 1000 },
      { text: "I'd love to see how it works.", isBot: false, delay: 1200 },
      { text: "Awesome! We can help you scale your outbound sales 10x. 📈", isBot: true, delay: 1500 },
      { text: "Pick a date and time that works for you:", isBot: true, delay: 1200 },
      { text: "Next Tuesday at 10:00 AM? 📅", isBot: true, delay: 1500 },
      { text: "That works! See you then! ✅", isBot: false, delay: 1000, variant: "success" }
    ],
    Support: [
      { text: "I'm having trouble logging in, can you help?", isBot: false, delay: 1000 },
      { text: "Checking your account status... 🔍", isBot: true, delay: 1500 },
      { text: "Found it! I see a session conflict. I've cleared it for you. 🛠️", isBot: true, delay: 2000 },
      { text: "It works now! Thank you so much! ✅", isBot: false, delay: 1500, variant: "success" },
      { text: "Great! Anything else I can help you with today? 😊", isBot: true, delay: 1200 },
      { type: "options", options: ["Billing Query", "Feature Request", "Nothing else"], isBot: true, delay: 800 }
    ],
    "Your Agent": [
      { text: "Welcome to the Agent Builder! What's your goal today? 🏗️", isBot: true, delay: 1000 },
      { text: "I want to build a lead gen bot for my SaaS.", isBot: false, delay: 1200 },
      { text: "Perfect. Tell us the details, and we'll build the flow.", isBot: true, delay: 1500 },
      { type: "builder", isBot: true, delay: 1800 }
    ]
  };

  const styles = {
    Marketing: {
      container: "bg-white",
      bgDecor: (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </>
      ),
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      header: (
        <div className="px-5 sm:px-6 py-4 flex items-center justify-between bg-white border-b border-border/50 relative z-10 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
             <span className="text-xs font-black text-dark uppercase tracking-widest">Marketing Agent</span>
          </div>
          <div className="px-3 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-lg">LIVE</div>
        </div>
      ),
      bubbleBot: "bg-white text-dark shadow-xl shadow-primary/5 border border-primary/10",
      bubbleUser: "bg-primary text-white shadow-lg shadow-primary/20",
      input: "bg-white border-border/50",
      sendBtn: "bg-primary"
    },
    Sales: {
      container: "bg-white",
      bgDecor: <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Always Active",
      name: "Sales Expert",
      header: (
        <div className="px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-primary/10 bg-white/40 backdrop-blur-md relative z-20 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm overflow-hidden"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent" /></div>
             <div>
                <p className="text-xs font-black text-[#1a1c3d]">Marcus Thorne</p>
                <p className="text-[9px] font-black uppercase text-primary tracking-wider">Enterprise Sales</p>
             </div>
          </div>
          <div className="px-3 py-1 bg-primary/10 text-primary text-[9px] font-black rounded-full uppercase tracking-wider">Schedule Tour</div>
        </div>
      ),
      input: "bg-white border-primary/10",
      sendBtn: "bg-primary shadow-primary/30"
    },
    Support: {
      container: "bg-white",
      bubbleBot: "bg-white text-[#1a1c3d] shadow-xl border border-primary/10",
      bubbleUser: "bg-primary text-white shadow-lg shadow-primary/20",
      bubbleSuccess: "bg-secondary text-white shadow-lg shadow-secondary/20",
      avatar: "bot",
      status: "Ready to help",
      name: "Support Hero",
      bgDecor: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px]" />
        </div>
      ),
      header: (
        <div className="px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-primary/10 bg-white/40 backdrop-blur-md relative z-20 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg"><ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" /></div>
             <div>
               <p className="text-xs font-black text-[#1a1c3d]">Support Bot</p>
               <p className="text-[9px] font-black uppercase text-primary tracking-wider">Average response: 1m</p>
             </div>
          </div>
        </div>
      ),
      input: "bg-white border-primary/10",
      sendBtn: "bg-primary shadow-primary/30"
    },
    "Your Agent": {
      container: "bg-[#0F172A]",
      bubbleBot: "bg-white/10 text-white shadow-2xl border border-white/10 backdrop-blur-xl",
      bubbleUser: "bg-primary text-white shadow-lg shadow-primary/30",
      bubbleSuccess: "bg-secondary text-white shadow-lg shadow-secondary/20",
      avatar: "bot",
      status: "Processing...",
      name: "AI Copilot",
      bgDecor: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-30%] w-[80%] h-[80%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
      ),
      header: (
        <div className="px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-xl relative z-20 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-xl animate-pulse"><Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /></div>
             <div>
               <p className="text-xs font-black text-white">Custom Agent Builder</p>
               <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" /><p className="text-[9px] font-black uppercase text-primary tracking-wider">AI Thinking</p></div>
             </div>
          </div>
        </div>
      ),
      input: "bg-white/5 border-white/10 text-white",
      sendBtn: "bg-primary text-white shadow-primary/40 shadow-xl"
    }
  };

  const s = styles[persona] || styles.Sales;
  const scenario = scenarios[persona] || scenarios.Sales;

  useEffect(() => {
    setMessages([]);
    setScenarioStep(0);
    setIsTyping(false);
  }, [persona]);

  useEffect(() => {
    let timeout;
    if (scenarioStep < scenario.length) {
      const nextMsg = scenario[scenarioStep];
      if (nextMsg.isBot) {
        setIsTyping(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, { id: Date.now(), ...nextMsg }]);
          setScenarioStep(prev => prev + 1);
        }, nextMsg.delay);
      } else {
        timeout = setTimeout(() => {
          setMessages(prev => [...prev, { id: Date.now(), ...nextMsg }]);
          setScenarioStep(prev => prev + 1);
        }, nextMsg.delay);
      }
    } else {
      timeout = setTimeout(() => {
        setMessages([]);
        setScenarioStep(0);
      }, 6000);
    }
    return () => clearTimeout(timeout);
  }, [scenarioStep, scenario]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className={`flex flex-col h-full border-none overflow-hidden ${s.container} transition-all duration-700 relative`}>
      {s.bgDecor}
      {s.header}

      <div ref={scrollRef} className="flex-1 p-4 sm:p-8 overflow-y-auto space-y-4 sm:space-y-6 scrollbar-hide relative z-10">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 30, scale: 0.85, originY: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`flex items-end gap-3 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {msg.isBot && (
                <div className="w-8 h-8 rounded-xl overflow-hidden shadow-lg border border-border/20 bg-white flex-shrink-0">
                  {s.avatar === 'bot' ? (
                    <div className="w-full h-full bg-linear-to-tr from-primary to-pink-500 flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div>
                  ) : (
                    <img src={s.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  )}
                </div>
              )}
              
              {msg.type === 'options' ? (
                <div className="flex flex-col gap-2.5 w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[240px]">
                   {msg.options.map((opt, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 sm:px-5 py-2.5 sm:py-3.5 bg-white border border-border shadow-sm rounded-2xl text-[10px] sm:text-[11px] font-black text-[#1a1c3d] hover:border-[#7B61FF] hover:text-[#7B61FF] transition-all cursor-pointer text-center group flex items-center justify-center gap-2"
                      >
                        {opt}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </motion.div>
                   ))}
                </div>
              ) : msg.type === 'form' ? (
                <div className="bg-white border border-border shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] w-full max-w-[230px] xs:max-w-[260px] sm:max-w-[300px] relative overflow-hidden group animate-in fade-in zoom-in duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B61FF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <p className="text-[10px] font-black text-[#1a1c3d]/40 uppercase tracking-[0.2em]">Contact Verification</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-[#1a1c3d]/50 uppercase tracking-widest ml-1">Your Name</label>
                       <div className="h-10 sm:h-12 bg-[#F9FAFB] border border-border rounded-xl px-4 flex items-center text-xs text-[#1a1c3d] font-bold">Sarah Johnson</div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-[#1a1c3d]/50 uppercase tracking-widest ml-1">Email Address</label>
                       <div className="h-10 sm:h-12 bg-[#F9FAFB] border border-border rounded-xl px-4 flex items-center text-xs text-[#1a1c3d] font-bold">sarah@acme.inc</div>
                    </div>
                    <div className="pt-1.5">
                      <div className="w-full h-12 sm:h-14 bg-[#1a1c3d] text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-xl hover:bg-[#2a2c5d] cursor-pointer transition-all active:scale-95 group">
                        Confirm Identity 
                        <Check className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : msg.type === 'builder' ? (
                <div className="w-full max-w-[230px] xs:max-w-[260px] sm:max-w-[340px]">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-[#7B61FF] to-[#FF61E6] rounded-[2rem] sm:rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000" />
                    <div className="relative bg-[#0F172A] p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Code2 className="w-4 h-4 text-primary" /></div>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Logic Flow v2.4</p>
                      </div>
                      <div className="h-24 sm:h-32 text-xs sm:text-sm text-white/90 font-bold leading-relaxed italic border-l-4 border-[#7B61FF] pl-4 sm:pl-5 py-1 bg-white/5 rounded-r-2xl flex items-center">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          "If User.Intent == 'Upgrade' THEN Route(Sales_Team) AND Notify(HubSpot)..."
                        </motion.span>
                      </div>
                      <div className="mt-6 sm:mt-8 flex justify-between items-center gap-2">
                         <div className="flex -space-x-3 shrink-0">
                            {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0F172A] bg-white/10 backdrop-blur-md overflow-hidden"><img src={`https://randomuser.me/api/portraits/thumb/men/${i+10}.jpg`} alt="Team" /></div>)}
                         </div>
                        <div className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white text-[9px] sm:text-[10px] font-black rounded-xl shadow-xl shadow-primary/40 cursor-pointer hover:scale-105 active:scale-95 transition-all uppercase tracking-wider text-center">
                          Auto-Deploy Agent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`max-w-[85%] p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] text-[13px] sm:text-[14px] font-bold leading-relaxed shadow-xl ${msg.isBot
                    ? s.bubbleBot
                    : msg.variant === 'success'
                      ? s.bubbleSuccess
                      : s.bubbleUser
                  } ${msg.isBot ? 'rounded-bl-none' : 'rounded-br-none'}`}>
                  {msg.text}
                </div>
              )}
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="flex items-center gap-2 text-dark/30 ml-11"
            >
               <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      className={`w-1.5 h-1.5 rounded-full ${persona === 'Your Agent' ? 'bg-white/20' : 'bg-dark/20'}`}
                    />
                  ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-5 sm:p-8 border-t border-border/10 bg-white/50 backdrop-blur-md relative z-10 rounded-b-[2rem] sm:rounded-b-[2.5rem] shrink-0">
        <div className={`flex items-center gap-4 rounded-[1.2rem] sm:rounded-[1.5rem] px-5 sm:px-6 py-3 sm:py-4 border shadow-2xl transition-all ${s.input || 'bg-white border-border/50'}`}>
          <span className="text-xs sm:text-sm opacity-30 font-bold tracking-tight">Type your message...</span>
          <div className={`ml-auto w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-90 cursor-pointer ${s.sendBtn || 'bg-primary text-white'}`}>
            <ArrowRight className="text-white w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveMockup = () => {
  const [activePersona, setActivePersona] = useState("Marketing");

  const personas = [
    {
      name: "Marketing",
      tag: "Live Chat",
      color: "bg-primary",
      theme: "bg-primary/5 border-primary/10 text-primary",
      icon: MessageSquare,
      desc: "Capture & qualify demand",
      goal: "Capture & qualify leads"
    },
    {
      name: "Sales",
      tag: "Embed",
      color: "bg-primary",
      theme: "bg-primary/5 border-primary/10 text-primary",
      icon: Zap,
      desc: "Personalized quotes & meetings",
      goal: "Quote & book meetings"
    },
    {
      name: "Support",
      tag: "Pop-up",
      color: "bg-primary",
      theme: "bg-primary/5 border-primary/10 text-primary",
      icon: Users,
      desc: "24/7 automated assistance",
      goal: "Support customers 24/7"
    },
    {
      name: "Your Agent",
      tag: "",
      color: "bg-primary",
      theme: "bg-primary/5 border-primary/10 text-primary",
      icon: Bot,
      desc: "Build your own agent",
      goal: "Build something custom"
    },
  ];

  // Auto-cycle personas every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePersona((current) => {
        const currentIndex = personas.findIndex(p => p.name === current);
        const nextIndex = (currentIndex + 1) % personas.length;
        return personas[nextIndex].name;
      });
    }, 8000); // 8 seconds per persona

    return () => clearInterval(interval);
  }, []);

  const browserContent = {
    Marketing: {
      title: "Boost Your Marketing ROI",
      primaryBtn: "Start Campaign",
      secondaryBtn: "View Analytics",
      color: "bg-blue-500",
      shadow: "shadow-blue-500/20"
    },
    Sales: {
      title: "Enterprise Sales Solution",
      primaryBtn: "Schedule a tour",
      secondaryBtn: "Get pre-approved",
      color: "bg-orange-500",
      shadow: "shadow-orange-500/20"
    },
    Support: {
      title: "Customer Support Portal",
      primaryBtn: "Read Docs",
      secondaryBtn: "Contact Help",
      color: "bg-green-500",
      shadow: "shadow-green-500/20"
    },
    "Your Agent": {
      title: "AI Agent Builder",
      primaryBtn: "Create Agent",
      secondaryBtn: "View Templates",
      color: "bg-primary",
      shadow: "shadow-primary/20"
    }
  };

  const activePersonaObj = personas.find(p => p.name === activePersona);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] border border-border overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px] relative">
      {/* Left Panel */}
      <div className="w-full md:w-[35%] p-6 sm:p-10 border-b md:border-b-0 md:border-r border-border/50 flex flex-col bg-[#FDFDFF]">
        <div className="mb-6 sm:mb-10 text-left">
          <p className="text-[11px] font-bold text-dark/40 uppercase tracking-widest mb-2 sm:mb-3">I want my agent to</p>
          <div className="relative">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-white border-b-2 border-primary/20 px-0 py-3 sm:py-4 flex items-center justify-between group cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-bold text-primary">{activePersonaObj.goal}</span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary rotate-90" />
            </motion.div>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold text-dark/40 uppercase tracking-widest mb-4 sm:mb-6 text-left">Select agent persona</p>
          <div className="space-y-2.5 sm:space-y-3">
              {personas.map((p) => {
                const isActive = activePersona === p.name;
                const colorBase = "#7B61FF"; // Primary Purple
              
              return (
                <div
                  key={p.name}
                  onClick={() => setActivePersona(p.name)}
                  className={`relative group p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all cursor-pointer overflow-hidden ${p.theme}`}
                >
                  {/* Shared Moving Background Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="persona-active"
                      className="absolute inset-0 z-0 rounded-xl sm:rounded-2xl"
                      style={{ backgroundColor: `${colorBase}15`, border: `1px solid ${colorBase}30` }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                       {/* Progress Bar Fill */}
                       <motion.div
                         key={activePersona}
                         initial={{ x: "-100%" }}
                         animate={{ x: "0%" }}
                         transition={{ duration: 8, ease: "linear" }}
                         className="absolute inset-0 z-0"
                         style={{ backgroundColor: `${colorBase}20` }}
                       />
                    </motion.div>
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'text-white shadow-lg' : 'bg-white border border-border group-hover:bg-white/80'}`}
                         style={{ backgroundColor: isActive ? colorBase : undefined, boxShadow: isActive ? `0 10px 15px -3px ${colorBase}40` : undefined, color: !isActive ? colorBase : undefined }}>
                      <p.icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <span className="font-black text-[#1a1c3d] text-sm sm:text-base">{p.name}</span>
                        {p.tag && (
                          <span className={`text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full text-white`}
                                style={{ backgroundColor: colorBase }}>
                            {p.tag}
                          </span>
                        )}
                      </div>
                      <p className={`text-[9px] sm:text-[10px] font-bold mt-0.5 text-[#1a1c3d]/40`}>{p.desc}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full transition-all ${isActive ? 'scale-125 shadow-lg' : 'scale-100 opacity-60'}`} 
                         style={{ backgroundColor: colorBase, boxShadow: isActive ? `0 0 10px ${colorBase}` : undefined }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Panel (Browser Mockup) */}
      <div className="w-full md:w-[65%] bg-[#F9FAFB] p-0 flex flex-col border-t md:border-t-0 md:border-l border-border relative min-h-[480px] md:min-h-0">
        <div className="bg-white flex-1 flex flex-col overflow-hidden relative">
          {/* Browser Top Bar */}
          <div className="h-12 border-b border-border/50 flex items-center px-4 sm:px-6 gap-2 bg-[#F9FAFB] shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="mx-auto w-1/3 h-6 bg-white border border-border rounded-md hidden sm:block" />
          </div>

          {/* Browser Content */}
          <div className="flex-1 p-4 sm:p-8 bg-white relative overflow-hidden flex">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

            {/* Mock website content - only visible on wide screens to make room for chat */}
            <div className="flex-1 pr-0 lg:pr-[380px] hidden lg:block">
              <div className="flex items-center justify-between mb-12 relative z-10">
                <div className="w-24 h-6 bg-[#F3F4F6] rounded-md" />
                <div className="flex gap-6">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-2 bg-[#F3F4F6] rounded-full" />)}
                </div>
              </div>

              <motion.div
                key={activePersona}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
              >
                <div className="max-w-md space-y-4 mb-10">
                  <div className="w-full h-4 bg-[#F3F4F6] rounded-full" />
                  <div className="w-[90%] h-4 bg-[#F3F4F6] rounded-full" />
                  <div className="w-[70%] h-4 bg-[#F3F4F6] rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="h-28 bg-[#F9FAFB] rounded-2xl border border-border/50 border-dashed flex items-center justify-center">
                    <div className="w-1/2 h-4 bg-border/20 rounded-full" />
                  </div>
                  <div className="h-28 bg-[#F9FAFB] rounded-2xl border border-border/50 border-dashed flex items-center justify-center">
                    <div className="w-1/2 h-4 bg-border/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Chat Overlay - Centered or full-width on mobile/tablet, anchored to right on desktop */}
            <div className="absolute inset-0 lg:left-auto lg:top-0 lg:right-0 lg:bottom-0 lg:w-[380px] z-10 bg-white lg:bg-transparent lg:border-l border-border flex flex-col">
              <ChatSimulation persona={activePersona} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoCloud = () => {
  const logos = [
    "BNP PARIBAS", "GENERALI", "iryo", "PC Componentes", "mundimoto", "Emma", "PRUDENTIAL", "Immobiliare.it"
  ];

  return (
    <div className="mt-16 sm:mt-20 overflow-hidden relative">
      <p className="text-[10px] sm:text-[11px] font-bold text-dark/30 uppercase tracking-[0.3em] mb-8 sm:mb-12 text-center px-4">Join thousands of revenue teams building agentic experiences</p>

      <div className="relative w-full overflow-hidden py-4">
        {/* Fading Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-x-12 sm:gap-x-20 items-center w-max opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-lg sm:text-xl md:text-3xl font-black text-dark tracking-tighter hover:text-primary transition-colors cursor-default whitespace-nowrap">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 sm:mt-12 flex justify-center items-center gap-4 sm:gap-6 text-dark/40 flex-wrap">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold">4.7/5 rating</span>
        </div>
        <div className="w-1 h-1 bg-dark/20 rounded-full" />
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span className="text-xs font-bold">12k+ users</span>
        </div>
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState('With Turbo Tech Solutions');

  const content = {
    'Without Turbo Tech Solutions': [
      { 
        title: "Your website treats every visitor the same", 
        desc: "A senior VP evaluating enterprise plans sees the same pages as a student browsing out of curiosity. No personalization, no context, no relevance — your best leads get the same generic experience as everyone else.", 
        icon: XCircle, 
        color: "text-secondary",
        bg: "bg-secondary/5",
        border: "border-secondary/20"
      },
      { 
        title: "“Contact Sales” creates friction, not pipeline.", 
        desc: "Forms are where leads go to die. Every additional field reduces conversion. By the time sales reaches out, the lead has already moved on to a competitor who responded faster.", 
        icon: XCircle, 
        color: "text-secondary",
        bg: "bg-secondary/5",
        border: "border-secondary/20"
      },
      { 
        title: "Chat tools make you choose between quality and scale.", 
        desc: "Manual chat provides quality but doesn't scale. Basic chatbots scale but provide a frustrating, robotic experience. You're forced to compromise on either CX or efficiency.", 
        icon: XCircle, 
        color: "text-secondary",
        bg: "bg-secondary/5",
        border: "border-secondary/20"
      }
    ],
    'With Turbo Tech Solutions': [
      { 
        title: "Data-Powered Personalization", 
        desc: "Engage visitors with AI conversations that adapt based on their profile and behavior. Every interaction feels 1:1, relevant, and built specifically for that visitor's needs.", 
        icon: CheckCircle2, 
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20"
      },
      { 
        title: "Frictionless Qualification", 
        desc: "Qualify leads in real-time inside the chat and hand off ready buyers to your team instantly. No forms, no waiting, just seamless transitions from interest to meeting.", 
        icon: CheckCircle2, 
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20"
      },
      { 
        title: "Quality at Scale", 
        desc: "AI agents provide VIP treatment to every visitor, handling thousands of chats simultaneously without ever losing context or quality. Scale your growth without scaling your headcount.", 
        icon: CheckCircle2, 
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20"
      }
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-[12px] font-black text-primary uppercase tracking-[0.4em] mb-4">Why your website isn't converting</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mb-4 tracking-tight leading-tight">
              Three problems killing your conversion rate
            </h3>
            <p className="text-base sm:text-lg text-dark/60 font-medium">
              And how Turbo Tech Solutions solves each one.
            </p>
          </div>

          <div className="flex bg-muted p-1 rounded-full border border-border shadow-inner w-full sm:w-fit h-fit justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('Without Turbo Tech Solutions')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black transition-all ${
                activeTab === 'Without Turbo Tech Solutions' 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                  : 'text-dark/40 hover:text-dark/60'
              }`}
            >
              <XCircle className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'Without Turbo Tech Solutions' ? 'opacity-100' : 'opacity-0'}`} />
              Without Turbo Tech
            </button>
            <button
              onClick={() => setActiveTab('With Turbo Tech Solutions')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black transition-all ${
                activeTab === 'With Turbo Tech Solutions' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-dark/40 hover:text-dark/60'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'With Turbo Tech Solutions' ? 'opacity-100' : 'opacity-0'}`} />
              With Turbo Tech
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {content[activeTab].map((item, i) => (
              <motion.div
                key={item.title + activeTab}
                initial="initial"
                whileHover="hover"
                className={`p-6 sm:p-10 rounded-[2rem] sm:rounded-3xl border border-border bg-surface relative flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 cursor-pointer h-fit text-left`}
              >
                {/* Brand Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 transition-all duration-500 rounded-t-3xl ${
                  activeTab === 'With Turbo Tech Solutions' ? 'bg-primary opacity-0 group-hover:opacity-100' : 'bg-secondary opacity-0 group-hover:opacity-100'
                }`} />

                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-500 group-hover:scale-110`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                
                <h4 className="text-xl sm:text-2xl font-black text-dark mb-4 leading-tight transition-colors duration-500">
                  {item.title}
                </h4>

                <motion.div
                  variants={{
                    initial: { height: 0, opacity: 0, marginTop: 0 },
                    hover: { height: "auto", opacity: 1, marginTop: 16 }
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-[14px] sm:text-[15px] text-dark/50 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

                <div className="mt-6 sm:mt-8 flex items-center justify-between">
                  <div className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${item.color}`}>
                    {activeTab === 'With Turbo Tech Solutions' ? 'Optimized Solution' : 'Conversion Leak'}
                  </div>
                  <ArrowRight className={`w-5 h-5 ${item.color} opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const WorkflowTimeline = () => {
  const steps = [
    {
      id: 1,
      title: "Create a workflow using AI or starting from scratch",
      desc: "Generate a workflow with AI, build it manually to fully control each step and configuration, or choose from one of our templates.",
      link: "See Templates",
      url: "/templates",
      side: "right",
      visual: (
        <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center p-4">
          <div className="w-full bg-[#E8EBFF] rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
             <div className="text-center mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-bold text-dark/40">Start building!</span>
             </div>
             <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-4 relative z-10">
                {[
                  { label: "Build it for me!", icon: Sparkles, color: "text-primary", active: true },
                  { label: "Start from scratch", icon: PenTool, color: "text-blue-500", active: false },
                  { label: "Use a template", icon: Puzzle, color: "text-indigo-500", active: false }
                ].map((item, i) => (
                  <div key={i} className={`aspect-square bg-white rounded-xl border-2 ${item.active ? 'border-primary' : 'border-transparent'} flex flex-col items-center justify-center gap-1.5 sm:gap-3 p-2.5 sm:p-4 shadow-sm group hover:scale-105 transition-all cursor-pointer`}>
                     <item.icon className={`w-5 h-5 sm:w-8 sm:h-8 ${item.color}`} />
                     <span className="text-[8px] sm:text-[10px] font-bold text-dark text-center leading-tight">{item.label}</span>
                  </div>
                ))}
             </div>
             {/* Animated Cursor */}
             <motion.div 
               animate={{ x: [100, 0], y: [100, 0] }}
               transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
               className="absolute left-1/3 top-1/2 mt-8 ml-4 z-20 pointer-events-none"
             >
                 <MousePointer2 className="w-5 h-5 sm:w-6 sm:h-6 text-dark fill-white drop-shadow-md" />
              </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Choose a channel",
      desc: "Select where the workflow will run to apply the correct routing, UI, and delivery settings for that channel.",
      links: [
        { text: "WhatsApp chatbots", url: "/whatsapp" },
        { text: "Website chatbots", url: "/products/website" }
      ],
      side: "left",
      visual: (
        <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center p-4">
          <div className="w-full bg-[#FFF1DB] rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
             <div className="text-center mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-bold text-dark/40">Where will your agent live?</span>
             </div>
             <div className="grid grid-cols-4 gap-2 sm:gap-3 relative z-10">
                {[
                  { label: "Web", icon: Globe, color: "text-pink-500", active: true },
                  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500", active: false },
                  { name: "Messenger", icon: MessageSquare, color: "text-blue-500", active: false },
                  { name: "API Agent", icon: Code2, color: "text-orange-500", active: false }
                ].map((item, i) => (
                  <div key={i} className={`aspect-square bg-white rounded-xl border-2 ${item.active ? 'border-pink-400' : 'border-transparent'} flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 shadow-sm group hover:scale-105 transition-all cursor-pointer`}>
                     <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                     <span className="text-[7px] sm:text-[8px] font-bold text-dark/40">{item.label || item.name}</span>
                  </div>
                ))}
             </div>
             {/* Animated Cursor */}
             <motion.div 
               animate={{ x: [100, -80], y: [100, 20] }}
               transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
               className="absolute left-1/2 top-1/2 z-20 pointer-events-none"
             >
                 <MousePointer2 className="w-5 h-5 sm:w-6 sm:h-6 text-dark fill-white drop-shadow-md" />
              </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Build faster with AI Copilot",
      desc: "AI Copilot provides in-context guidance as you build. Describe your use case, and it configures your workflow, accelerates setup, and keeps you on track from first step to launch.",
      side: "right",
      visual: (
        <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center p-2">
          <div className="absolute inset-0 bg-[#1A1C3D] rounded-[2rem] sm:rounded-[3rem] blur-xl opacity-20" />
          <motion.div 
            className="relative w-full bg-[#1A1C3D] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-8 border border-white/10 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/5">
               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(123,97,255,0.4)]">
                 <Sparkles className="text-white w-4.5 h-4.5 sm:w-5 sm:h-5" />
               </div>
               <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-widest">Active Intelligence</p>
                  <h4 className="text-base sm:text-lg font-black text-white tracking-tight">AI Copilot</h4>
               </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
               <div className="flex gap-3 sm:gap-4 text-left">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 shrink-0" />
                  <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl rounded-tl-none text-white/60 text-xs italic leading-relaxed">
                     "Generate a meeting booking flow for enterprise leads"
                  </div>
               </div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="bg-primary/20 border border-primary/40 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] ml-4 sm:ml-8 shadow-2xl relative text-left"
               >
                  <div className="absolute -top-3 -left-3 bg-primary text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">Thinking...</div>
                  <div className="space-y-2.5 sm:space-y-3">
                     <div className="flex items-center gap-2 text-primary font-black text-[9px] sm:text-[10px] uppercase tracking-widest">
                        <CheckCircle2 className="w-3 h-3" /> Fetching Calendly availability
                     </div>
                     <div className="flex items-center gap-2 text-primary font-black text-[9px] sm:text-[10px] uppercase tracking-widest">
                        <CheckCircle2 className="w-3 h-3" /> Configuring fallback logic
                     </div>
                     <div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="h-full w-1/3 bg-linear-to-r from-transparent via-white/40 to-transparent"
                        />
                     </div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 4,
      title: "Connect your stack",
      desc: "Connect OpenAI, Gemini, CRMs, automation tools like n8n or Zapier, and custom APIs to exchange data, trigger actions, and keep conversations fully in sync.",
      link: "See Integrations",
      url: "/integrations",
      side: "left",
      visual: (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-6 sm:p-12">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
          {/* Orbit Circles */}
          <div className="absolute w-[80%] h-[80%] border border-primary/10 rounded-full" />
          <div className="absolute w-[60%] h-[60%] border border-primary/10 rounded-full animate-spin-slow" />
          
          {/* Central Logo */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-primary/40 flex items-center justify-center border-4 border-white"
          >
             <Bot className="text-white w-12 h-12 sm:w-16 sm:h-16" />
          </motion.div>

          {/* Integration Icons */}
          {[
            { color: "bg-black", label: "OpenAI", pos: "top-2 left-1/2 -translate-x-1/2" },
            { color: "bg-blue-600", label: "Gemini", pos: "top-1/4 right-1 sm:-right-2" },
            { color: "bg-orange-500", label: "HubSpot", pos: "bottom-1/4 right-1 sm:-right-2" },
            { color: "bg-red-500", label: "n8n", pos: "bottom-2 left-1/2 -translate-x-1/2" },
            { color: "bg-orange-600", label: "Zapier", pos: "bottom-1/4 left-1 sm:-left-2" },
            { color: "bg-blue-500", label: "Salesforce", pos: "top-1/4 left-1 sm:-left-2" }
          ].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`absolute w-11 h-11 sm:w-14 sm:h-14 ${icon.color} ${icon.pos} rounded-2xl shadow-xl flex items-center justify-center border-2 border-white z-10 group cursor-pointer hover:scale-110 transition-transform`}
            >
               <div className="text-white font-black text-[6px] sm:text-[7px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  {icon.label}
               </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 5,
      title: "Adapt the workflow to your needs",
      desc: "Find the perfect balance between creative conversational experiences with AI and predictable, rule-based outcomes.",
      side: "right",
      visual: (
        <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center p-2">
          <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] sm:rounded-[3rem] blur-3xl opacity-30" />
          <motion.div 
            className="relative w-full bg-[#1e2235] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-8 border border-white/5 overflow-hidden"
          >
             <div className="flex items-center justify-between mb-8 sm:mb-10">
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400" />
                   <div className="w-2 h-2 rounded-full bg-orange-400" />
                   <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-widest">Logic Canvas</div>
             </div>
             
             {/* Flow Nodes */}
             <div className="space-y-6 sm:space-y-8 relative text-left">
                <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-white/5" />
                
                <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center text-primary shadow-xl">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                   <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl flex-1 backdrop-blur-md">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">AI Node</p>
                      <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                   </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 relative z-10 ml-6 sm:ml-8">
                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 border border-secondary/40 rounded-xl flex items-center justify-center text-secondary shadow-xl">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl flex-1 backdrop-blur-md border-l-4 border-l-secondary">
                      <p className="text-[10px] font-black text-secondary/40 uppercase tracking-widest mb-1">Conditional Path</p>
                      <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 6,
      title: "Publish, analyze, and iterate",
      desc: "Track, test, and improve every interaction. Get real-time insights on costs, response quality, and user behavior to fine-tune performance with confidence.",
      side: "left",
      visual: (
        <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-linear-to-br from-green-500/10 via-transparent to-primary/10 rounded-[3rem] blur-3xl opacity-40 animate-pulse" />
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative w-full bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-border p-6 sm:p-8 overflow-hidden"
          >
             <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[8px] font-black text-green-600 uppercase tracking-widest">Live Performance</span>
                </div>
                <div className="flex -space-x-2">
                   {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-muted" />)}
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4 mb-6 sm:mb-8 text-left">
                <div className="p-4 sm:p-5 bg-muted/30 rounded-2xl sm:rounded-3xl border border-border/50">
                   <p className="text-[9px] sm:text-[10px] font-black text-dark/30 uppercase tracking-widest mb-1 sm:mb-2">Success Rate</p>
                   <p className="text-2xl sm:text-3xl font-black text-dark">94.8%</p>
                </div>
                <div className="p-4 sm:p-5 bg-primary/5 rounded-2xl sm:rounded-3xl border border-primary/10">
                   <p className="text-[9px] sm:text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1 sm:mb-2">Cost Saved</p>
                   <p className="text-2xl sm:text-3xl font-black text-primary">$2.4k</p>
                </div>
             </div>

             <div className="h-20 sm:h-24 w-full bg-muted/20 rounded-2xl flex items-end gap-1.5 p-3">
                {[40, 60, 45, 90, 70, 85, 40, 75, 60, 95].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="flex-1 bg-primary/20 rounded-t-lg hover:bg-primary transition-colors" 
                  />
                ))}
             </div>
          </motion.div>
        </div>
      )
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1A1C3D] tracking-tight mb-6 sm:mb-8 leading-tight">
            How to create an AI agent <br /> with <span className="text-primary italic">Turbo Tech</span>
          </h2>
          <p className="text-lg sm:text-xl text-dark/40 font-medium tracking-tight">From idea to production in six simple steps</p>
        </div>

        <div className="relative">
          {/* Vertical Line Container */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-green-50 hidden md:block">
             {/* Background Progress Line */}
             <motion.div 
               style={{ scaleY, originY: 0 }}
               className="absolute inset-0 bg-linear-to-b from-green-500 to-green-300 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]" 
             />
             
             {/* Moving Arrow Head */}
             <motion.div
               style={{ 
                 top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                 opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
               }}
               className="absolute left-1/2 -translate-x-1/2 w-4 h-4 -mt-2 z-20"
             >
               <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                 <ChevronRight className="w-2.5 h-2.5 text-white rotate-90 translate-y-[0.5px]" />
               </div>
             </motion.div>
          </div>

          <div className="space-y-20 md:space-y-32">
            {steps.map((step) => (
              <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-32 ${step.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-green-500 text-white font-black flex items-center justify-center shadow-lg shadow-green-200 z-10 border-4 border-white hidden md:flex">
                  {step.id}
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: step.side === 'right' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-1 space-y-3 text-center md:text-left"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight tracking-tight">
                    <span className="md:hidden text-primary mr-2">0{step.id}.</span>
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-dark/60 font-medium leading-relaxed">{step.desc}</p>
                  <div className="flex flex-col items-center md:items-start gap-2 pt-2">
                    {step.link && (
                      <Link to={step.url} className="inline-flex items-center gap-2 font-black text-dark hover:text-primary transition-colors group underline underline-offset-8 decoration-2 decoration-primary/20 text-[13px]">
                        {step.link} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    )}
                    {step.links && step.links.map((l, i) => (
                      <Link key={i} to={l.url} className="inline-flex items-center gap-2 font-black text-dark hover:text-primary transition-colors group underline underline-offset-8 decoration-2 decoration-primary/20 text-[13px]">
                        {l.text} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-1 flex justify-center items-center relative w-full"
                >
                  {step.visual}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Lead Laundry",
      quote: "Boosted conversion by 35% and lowered CPL",
      author: "Alex Rivera",
      role: "Growth Lead",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "bg-primary/10"
    },
    {
      company: "hotelbeds",
      quote: "Automated 350K inquiries in 4 weeks",
      author: "Sarah Chen",
      role: "Head of Support",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "bg-secondary/10"
    },
    {
      company: "Emma",
      quote: "Increased average order value by 18%",
      author: "Mark Thompson",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      color: "bg-primary/10"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F0F4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-xs sm:text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Revenue teams love building with Turbo Tech Solutions</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-dark">See what our real customers say.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] border border-border relative flex flex-col pt-16 sm:pt-20 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-left">
              <div className={`absolute -top-8 sm:-top-10 left-8 sm:left-12 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[4px] sm:border-[6px] border-white overflow-hidden shadow-xl ${t.color}`}>
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div className="mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-black text-primary uppercase tracking-widest">{t.company}</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-dark mb-6 sm:mb-10 leading-tight">"{t.quote}"</p>
              <div className="mt-auto">
                <div className="font-bold text-dark text-sm sm:text-base">{t.author}</div>
                <div className="text-[10px] font-bold text-dark/30 uppercase tracking-[0.2em]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const G2Section = () => {
  const reviews = [
    { name: "Narciso M", role: "Innovation Coordinator", quote: "Easy builder for high impact conversations!" },
    { name: "Tom H", role: "Co-Founder", quote: "Turbo Tech Solutions gives me the flexibility to do anything" },
    { name: "Eva O", role: "Freelance", quote: "Intuitive, fun & powerful bot (even in free plan)" },
    { name: "Guilherme S", role: "CEO", quote: "Turbo Tech Solutions is the best chatbot tool in the market" }
  ];

  return (
    <section className="py-20 md:py-32 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-black text-dark/30 uppercase tracking-[0.4em] mb-8 sm:mb-12">You’re in good company</h3>
          <h4 className="text-3xl sm:text-4xl font-black tracking-tight text-dark mb-8 sm:mb-12">Join 12,000+ businesses that use Turbo Tech Solutions</h4>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-12 opacity-40 mb-12 sm:mb-20">
            {["Leader Fall 2025", "Users Love Us", "High Performer", "Best Requirements", "Market Leader"].map(badge => (
              <div key={badge} className="px-4 py-2 sm:px-6 sm:py-3 border border-dark rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest">{badge}</div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 sm:gap-8 overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 sm:gap-8"
            >
              {[...reviews, ...reviews, ...reviews].map((r, i) => (
                <div key={i} className="bg-[#F9FAFB] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-border min-w-[280px] sm:min-w-[350px] text-left">
                  <div className="flex gap-1 mb-3 sm:mb-4 text-yellow-400">
                    {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="font-bold text-dark text-sm sm:text-base mb-4 sm:mb-6">"{r.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-[10px]">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="text-xs font-black text-dark">{r.name}</div>
                      <div className="text-[10px] text-dark/40 font-bold uppercase">{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-white">

      {/* 1. HERO SECTION */}
      <section className="pt-28 sm:pt-40 pb-12 relative overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-linear-to-b from-primary/5 to-transparent rounded-[100%] blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#1a1c3d] mb-6">
              Turn Your Website Into Your <br />
              <span className="bg-gradient-to-r from-[#7B61FF] via-[#FF61E6] to-[#FFA161] text-transparent bg-clip-text">
                Best Sales Agent
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-dark/50 max-w-xl mx-auto mb-8 leading-relaxed font-medium px-2">
              Turbo Tech Solutions engages visitors with interactive AI conversations that qualify them in real time and hand off sales-ready leads to your team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 px-4">
              <Link to="/pricing" className="btn-primary !bg-[#FF61E6] !border-none !px-6 !py-3 text-xs sm:text-sm shadow-xl shadow-pink-500/20 hover:scale-105 transition-transform text-center w-full sm:w-auto">
                TRY TURBO TECH SOLUTIONS FREE
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-[#7B61FF] text-white font-bold rounded-full text-xs sm:text-sm shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full sm:w-auto">
                GET A DEMO <span className="flex -space-x-2 shrink-0">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-4 h-4 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-4 h-4 rounded-full border-2 border-white" alt="Team member" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Interactive Mockup Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full overflow-hidden"
          >
            <InteractiveMockup />
          </motion.div>

          {/* Logo Cloud Section */}
          <LogoCloud />
        </div>
      </section>

      {/* 3. COMPARISON SECTION (WITHOUT VS WITH) */}
      <ComparisonSection />

      {/* 5. WORKFLOW TIMELINE SECTION */}
      <WorkflowTimeline />

      {/* 6. NEW CTA SECTION (IMMEDIATELY AFTER STEPS) */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C3D] tracking-tight mb-6">
            Build your next workflow in minutes
          </h3>
          <p className="text-sm sm:text-base text-dark/40 font-medium tracking-tight mb-8 sm:mb-10">Automate lead capture, support, and routing with Turbo Tech.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 px-4">
            <Link to="/pricing" className="btn-primary !px-8 !py-3.5 text-sm sm:text-base bg-linear-to-r from-secondary to-primary border-none shadow-xl shadow-primary/20 w-full sm:w-auto text-center">
               Start Free
            </Link>
            <Link to="/contact" className="btn-outline !px-8 !py-3.5 text-sm sm:text-base border-[#1A1C3D]/10 text-[#1A1C3D] hover:bg-[#1A1C3D] hover:text-white w-full sm:w-auto text-center">
               Book a demo
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-dark/40">
             {['Free plan available', 'No credit card required', 'Setup in minutes'].map((item, i) => (
               <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center">
                     <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 8. G2 SECTION */}
      <G2Section />

      {/* 9. PREVIOUS FOOTER CTA */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-dark mb-6 sm:mb-8 leading-tight tracking-tighter">
            Ready to transform how you <br />
            <span className="text-primary italic">connect</span> with customers?
          </h2>
          <p className="text-base sm:text-lg text-dark/60 font-medium mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-2">
            Join thousands of companies building better conversational experiences with Turbo Tech Solutions. Start free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Link to="/pricing" className="btn-primary !px-10 sm:!px-12 !py-4 sm:!py-5 text-base sm:text-lg shadow-3xl shadow-primary/40 hover:scale-105 transition-transform w-full sm:w-auto text-center">
              TRY TURBO TECH FREE
            </Link>
            <Link to="/contact" className="btn-outline !px-10 sm:!px-12 !py-4 sm:!py-5 text-base sm:text-lg w-full sm:w-auto text-center">
              GET A DEMO
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
