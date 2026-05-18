import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Zap, Bell, Users, BarChart3, Code2,
  ArrowRight, Globe, Star, HelpCircle, Smartphone, ChevronDown, ChevronUp,
  BadgeCheck, ShoppingBag, Send, ShieldCheck, CheckCircle2, AlertCircle,
  Settings, Layers, DollarSign, Clock, Layout, RefreshCw, Layers3, FolderSync
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WhatsAppAutomation() {
  // 1. WhatsApp Template Campaign Simulator State
  const [campaignType, setCampaignType] = useState('abandoned');
  const [customerName, setCustomerName] = useState('Sarah');
  const [discountVal, setDiscountVal] = useState('20%');
  const [interactiveBtn, setInteractiveBtn] = useState('coupon');

  // 2. Synchronized Flow Canvas State
  const [flowActiveNode, setFlowActiveNode] = useState('greeting');
  const [flowMessages, setFlowMessages] = useState([
    { sender: 'bot', text: 'Hi Sarah! 👋 Thanks for reaching out to EngageFlow Business API. Please choose an option below:' }
  ]);

  const flowScriptNodes = [
    {
      id: 'greeting',
      label: '🟢 Step 1: Inbound Greeting',
      desc: 'Welcomes user and presents main quick options.',
      previewText: 'Hi Sarah! 👋 Thanks for reaching out to EngageFlow Business API. Please choose an option below:',
      options: ['Browse Catalog', 'Order Support']
    },
    {
      id: 'catalog',
      label: '🛍️ Step 2: Product Catalog Ingestion',
      desc: 'Presents custom catalog items and cart checkout.',
      previewText: 'Here is our active Winter Catalog! Click to view specific products and add to your chat cart:',
      options: ['View Winter Boots', 'View Jackets']
    },
    {
      id: 'payment',
      label: '💳 Step 3: Secure Payment Node',
      desc: 'Generates a secure checkout payment link.',
      previewText: 'Awesome! Your total is $89.00. Use this secure link to check out instantly via Stripe:',
      options: ['Pay Securely Now']
    },
    {
      id: 'transfer',
      label: '⚡ Step 4: Human Live Handoff',
      desc: 'Routes thread to a human live-chat representative.',
      previewText: 'Understood. Connecting you to our live chat representative Mattia. He will join in 30 seconds!',
      options: ['Exit to Main Menu']
    }
  ];

  const handleFlowCanvasClick = (node) => {
    setFlowActiveNode(node.id);
    setFlowMessages([
      { sender: 'bot', text: node.previewText }
    ]);
  };

  const handleFlowActionClick = (optText) => {
    setFlowMessages(prev => [...prev, { sender: 'user', text: optText }]);
    
    // Auto transition to next node for interactive feel
    const currentIndex = flowScriptNodes.findIndex(n => n.id === flowActiveNode);
    if (currentIndex < flowScriptNodes.length - 1) {
      const nextNode = flowScriptNodes[currentIndex + 1];
      setTimeout(() => {
        setFlowActiveNode(nextNode.id);
        setFlowMessages(prev => [...prev, { sender: 'bot', text: nextNode.previewText }]);
      }, 1000);
    }
  };

  // 3. Shared Multi-Agent Team Inbox State
  const [activeChatId, setActiveChatId] = useState('emma');
  const [chatProfiles, setChatProfiles] = useState({
    emma: {
      name: 'Emma Watson',
      phone: '+44 7911 123456',
      status: 'Active Chat',
      tag: 'Pro Prospect',
      messages: [
        { sender: 'user', text: 'Hi, I need an official API setup guide for my marketing team.' },
        { sender: 'bot', text: 'Sure! I can sync you up with our API integration docs. Are you using HubSpot or a custom stack?' },
        { sender: 'user', text: 'We are on HubSpot Enterprise. Can we sync lead properties in real-time?' }
      ]
    },
    john: {
      name: 'John Doe',
      phone: '+1 202 555 0143',
      status: 'Open Ticket',
      tag: 'Need Support',
      messages: [
        { sender: 'user', text: 'Hello, my WhatsApp green tick verification was rejected by Meta.' },
        { sender: 'bot', text: 'No worries! Let\'s audit your business credentials to submit a re-verification request.' }
      ]
    },
    david: {
      name: 'David Miller',
      phone: '+61 2 9382 0000',
      status: 'Resolved',
      tag: 'Self-Serve',
      messages: [
        { sender: 'user', text: 'Is there a limit on promotional broadcasts?' },
        { sender: 'bot', text: 'With the official WhatsApp API tier, you can broadcast up to 100,000 messages daily!' }
      ]
    }
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'Does EngageFlow use the official WhatsApp Business API?',
      a: 'Yes, absolutely! EngageFlow operates strictly through official Meta Cloud API protocols. This ensures your business has high reliability, no risk of number bans, and access to advanced features like official Green Verification Ticks, Interactive Buttons, and WhatsApp Catalogs.'
    },
    {
      q: 'Can I start building before my WhatsApp Business API gets approved?',
      a: 'Yes! EngageFlow features a dedicated WhatsApp Sandbox (Test Environment) where you can build and test your chatbot flows with your own personal phone instantly, before submitting business documents to Meta.'
    },
    {
      q: 'How does Meta\'s conversation-based pricing work?',
      a: 'Meta charges on a per-conversation basis within 24-hour windows. Conversations are split into Category-based rates: Marketing, Utility, Authentication, and Service. Service conversations (user-initiated) are highly affordable, and the first 1,000 Service conversations every month are completely free!'
    },
    {
      q: 'How do we obtain the WhatsApp Verified Green Tick badge?',
      a: 'The Green Tick badge is awarded by Meta to notable and authentic brands. Once you link your official business account on EngageFlow, our dedicated support team walks you through the verification prerequisites and submits the Meta application on your behalf.'
    },
    {
      q: 'Is it possible to recover abandoned shopping carts on WhatsApp?',
      a: 'Yes! You can trigger automated abandoned cart flows by connecting your Shopify or WooCommerce store. Because WhatsApp has over 90% open rates, recovering carts through WhatsApp drives up to 4x higher revenue compared to traditional email campaigns.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden border-b border-border">
        {/* Glow Spheres */}
        <div className="glow-spot top-[-10%] left-[25%] w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="glow-spot top-[20%] right-[-10%] w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-8"
          >
            <BadgeCheck className="w-4 h-4 text-primary animate-pulse" />
            OFFICIAL WHATSAPP BUSINESS API PLATFORM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-dark leading-[1.05] tracking-tighter mb-8 max-w-6xl mx-auto"
          >
            Drive 4x More Sales on WhatsApp with <span className="text-gradient">EngageFlow API</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/60 max-w-4xl mx-auto mb-10 font-medium leading-relaxed"
          >
            Deploy official, no-code WhatsApp bots. Send promotional templates, recover abandoned shopping carts, ingest products into visual catalogs, and manage chats collectively in a Shared Team Inbox.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/pricing" className="btn-primary !px-12 !py-5 text-base border-0 bg-primary hover:bg-primary-light">
              Build WhatsApp Bot Free
            </Link>
            <Link to="/get-demo" className="btn-outline !px-12 !py-5 text-base">
              Request Custom API Demo
            </Link>
          </motion.div>

          <p className="text-xs text-dark/30 font-bold mt-4">
            Sandbox Testing Ready · 98% Read Rates · Official Verified Partner
          </p>
        </div>
      </section>

      {/* WHATSAPP CAMPAIGN TEMPLATE BUILDER & IPHONE SIMULATOR */}
      <section className="py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Proactive Campaigns</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Construct high-conversion WhatsApp Broadcast templates
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Pick your campaign type and interactive reply buttons (Left Column) to watch your template update in real-time in the iPhone chat screen!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Controls (Left Column) */}
            <div className="lg:col-span-5 bg-muted/40 border border-border rounded-[2.5rem] p-8 shadow-sm space-y-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-dark border-b border-border pb-4 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Template Settings Panel
                </h3>

                {/* Campaign Type Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-dark/60">Campaign Use Case:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'abandoned', label: '🛒 Cart' },
                      { id: 'promo', label: '⚡ Promotion' },
                      { id: 'shipping', label: '📦 Shipping' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setCampaignType(type.id)}
                        className={`py-2 px-3 text-xs font-black rounded-lg border transition-all ${
                          campaignType === type.id 
                            ? 'bg-primary text-white border-primary shadow-lg' 
                            : 'bg-white border-border text-dark/60 hover:bg-white'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personalization Inputs */}
                <div className="space-y-4 mt-6">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-dark/60">Customer Name Variable:</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary font-bold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-dark/60">Discount / Value Variable:</label>
                    <input
                      type="text"
                      value={discountVal}
                      onChange={(e) => setDiscountVal(e.target.value)}
                      className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary font-bold"
                    />
                  </div>
                </div>

                {/* Interactive Reply Button Selector */}
                <div className="space-y-3 mt-6">
                  <label className="text-xs font-black text-dark/60">Call-To-Action Button:</label>
                  <div className="flex gap-2">
                    {[
                      { id: 'coupon', label: 'Claim Code' },
                      { id: 'support', label: 'Speak to Support' },
                      { id: 'calendly', label: 'Book Calendly' }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setInteractiveBtn(btn.id)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                          interactiveBtn === btn.id 
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10' 
                            : 'bg-muted text-dark/60 border-border hover:bg-white'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert(`Broadcast Campaign Sent! Injected Template Type: ${campaignType}`)}
                className="w-full bg-dark hover:bg-slate-800 text-white text-xs font-black py-4 rounded-xl transition-colors border-0"
              >
                Send Broadcast to Segment (15,240 Contacts)
              </button>
            </div>

            {/* iPhone Preview (Right Column) */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-700 w-full max-w-[360px] relative">
                {/* Phone Top Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-full z-20" />
                
                <div className="bg-[#E5DDD5] rounded-2xl h-[450px] flex flex-col justify-between overflow-hidden relative">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] p-3 text-white flex items-center justify-between shrink-0 pt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-700 border border-emerald-500/30 flex items-center justify-center font-bold">E</div>
                      <div>
                        <div className="text-xs font-black flex items-center gap-1">
                          EngageFlow Broadcast
                          <CheckCircle2 className="w-3.5 h-3.5 fill-white text-[#075E54]" />
                        </div>
                        <div className="text-[8px] text-white/70">Official Business Account</div>
                      </div>
                    </div>
                    <span className="text-[8px] border border-white/30 px-2 py-0.5 rounded font-black uppercase">Meta API</span>
                  </div>

                  {/* Messages list */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left relative z-10">
                    <div className="bg-white p-3 rounded-lg text-slate-800 text-[11px] leading-relaxed max-w-[85%] font-medium shadow-xs relative">
                      {campaignType === 'abandoned' && (
                        <div>
                          Hi <strong>{customerName}</strong>! 👋 You left items in your cart. We saved them for you!
                          <br /><br />
                          Complete your checkout now to receive <strong>{discountVal}</strong> off. Your items are selling fast!
                        </div>
                      )}

                      {campaignType === 'promo' && (
                        <div>
                          Flash Sale Alert! ⚡ Hi <strong>{customerName}</strong>!
                          <br /><br />
                          Get an exclusive <strong>{discountVal}</strong> discount on our entire catalog. Valid for the next 2 hours only!
                        </div>
                      )}

                      {campaignType === 'shipping' && (
                        <div>
                          Good news <strong>{customerName}</strong>! 📦 Your order is packed and ready.
                          <br /><br />
                          Use this thread to track your package delivery, or click support below if you need modifications.
                        </div>
                      )}
                      
                      <span className="text-[8px] text-slate-400 font-bold block text-right mt-1">12:00 PM</span>

                      {/* Meta CTA buttons inside chat bubble */}
                      <div className="border-t border-slate-100 pt-2 mt-2 flex flex-col gap-1.5 shrink-0">
                        {interactiveBtn === 'coupon' && (
                          <button className="w-full bg-[#F0F0F0] text-[#075E54] text-[10px] font-black py-2 rounded-lg text-center flex items-center justify-center gap-1 border-0">
                            🎟️ Apply {discountVal} Discount
                          </button>
                        )}
                        {interactiveBtn === 'support' && (
                          <button className="w-full bg-[#F0F0F0] text-[#075E54] text-[10px] font-black py-2 rounded-lg text-center flex items-center justify-center gap-1 border-0">
                            💬 Speak to Advisor
                          </button>
                        )}
                        {interactiveBtn === 'calendly' && (
                          <button className="w-full bg-[#F0F0F0] text-[#075E54] text-[10px] font-black py-2 rounded-lg text-center flex items-center justify-center gap-1 border-0">
                            📅 Book Calendly Reservation
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Standard Input mock */}
                  <div className="p-3 border-t border-slate-200/50 bg-[#F0F0F0] flex gap-2 shrink-0 z-10">
                    <div className="flex-1 bg-white rounded-full py-1.5 px-4 text-[10px] text-slate-400 font-bold border border-slate-200">
                      Message...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYNCHRONIZED NO-CODE FLOW BUILDER */}
      <section className="py-28 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">No-Code Logic Editor</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Construct logical paths on our visual canvas
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Click on different flowchart nodes in the builder (Left Column) to see what that node sends to the visitor in the WhatsApp simulator!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Visual Canvas Block (Left Column) */}
            <div className="lg:col-span-6 bg-white border border-border rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-dark border-b border-border pb-4 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-secondary" />
                  Script Builder Canvas
                </h3>

                <div className="flex flex-col gap-4">
                  {flowScriptNodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => handleFlowCanvasClick(node)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 relative group ${
                        flowActiveNode === node.id 
                          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' 
                          : 'border-border bg-white hover:border-primary/20'
                      }`}
                    >
                      <h4 className="text-xs font-black text-dark group-hover:text-primary transition-colors">{node.label}</h4>
                      <p className="text-[10px] text-dark/50 mt-1 font-medium">{node.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center pt-6 border-t border-border mt-6 text-[10px] text-dark/40 font-bold">
                * Select nodes to trigger their visual dialogues in the web simulator on the right.
              </div>
            </div>

            {/* Chat Simulator Block (Right Column) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-700 w-full max-w-[360px] relative">
                {/* Phone Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-full z-20" />
                
                <div className="bg-[#E5DDD5] rounded-2xl h-[450px] flex flex-col justify-between overflow-hidden relative">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] p-3 text-white flex items-center justify-between shrink-0 pt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-700 border border-emerald-500/30 flex items-center justify-center font-bold">E</div>
                      <div>
                        <div className="text-xs font-black flex items-center gap-1">
                          EngageFlow Sandbox
                          <CheckCircle2 className="w-3.5 h-3.5 fill-white text-[#075E54]" />
                        </div>
                        <div className="text-[8px] text-white/70">Test Sandbox account</div>
                      </div>
                    </div>
                    <span className="text-[8px] border border-white/30 px-2 py-0.5 rounded font-black uppercase">Active</span>
                  </div>

                  {/* Chat logs */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-grow text-left relative z-10">
                    {flowMessages.map((m, idx) => (
                      <div key={idx} className={`p-2.5 rounded-lg text-[11px] leading-relaxed max-w-[85%] font-medium shadow-xs relative ${
                        m.sender === 'user' ? 'bg-[#DCF8C6] text-slate-800 ml-auto' : 'bg-white text-slate-800 mr-auto'
                      }`}>
                        {m.text}
                      </div>
                    ))}
                  </div>

                  {/* Custom quick reply action templates */}
                  <div className="p-2 border-t border-slate-200/50 bg-[#F0F0F0] flex gap-2 shrink-0 z-10">
                    {flowScriptNodes.find(n => n.id === flowActiveNode)?.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleFlowActionClick(opt)}
                        className="flex-1 bg-white border border-slate-300 hover:border-emerald-600 rounded-lg p-2 text-[9px] font-black text-slate-700"
                      >
                        "{opt}"
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHARED MULTI-AGENT TEAM INBOX CRM DASHBOARD */}
      <section className="py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Human Takeover Dashboard</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Shared Team Inbox built for collaborative support
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Click on different customer folders in the left sidebar to update the center chat logs and the right CRM profile properties instantly!
            </p>
          </div>

          <div className="bg-dark text-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-white/10 grid lg:grid-cols-12 gap-6 items-stretch min-h-[500px]">
            {/* Sidebar list col (lg:col-span-3) */}
            <div className="lg:col-span-3 border-r border-white/10 pr-4 space-y-3">
              <span className="text-[10px] font-bold text-white/40 block uppercase tracking-wider mb-4">Open Conversation threads</span>
              {Object.keys(chatProfiles).map((id) => {
                const profile = chatProfiles[id];
                return (
                  <button
                    key={id}
                    onClick={() => setActiveChatId(id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      activeChatId === id
                        ? 'bg-primary/20 border-primary shadow-lg shadow-primary/5'
                        : 'bg-white/5 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="font-bold text-xs flex justify-between items-center text-white">
                      <span>{profile.name}</span>
                      <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                        profile.status === 'Active Chat' ? 'bg-emerald-500/20 text-emerald-400' :
                        profile.status === 'Open Ticket' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/10 text-white/50'
                      }`}>
                        {profile.status}
                      </span>
                    </div>
                    <div className="text-[9px] text-white/40 font-bold mt-1">{profile.phone}</div>
                  </button>
                );
              })}
            </div>

            {/* Chat conversation stream (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between min-h-[380px] bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="border-b border-white/10 pb-3 mb-4 flex justify-between items-center">
                <span className="text-xs font-black text-white">{chatProfiles[activeChatId].name}</span>
                <span className="text-[9px] bg-white/10 text-white/60 py-0.5 px-2 rounded-full font-bold">WhatsApp thread</span>
              </div>

              {/* Message scroll list */}
              <div className="space-y-4 flex-grow overflow-y-auto max-h-[220px] pr-2 text-left">
                {chatProfiles[activeChatId].messages.map((m, idx) => (
                  <div key={idx} className={`p-3 rounded-2xl text-xs max-w-[85%] font-medium ${
                    m.sender === 'user' ? 'bg-white/10 text-white mr-auto rounded-bl-none border border-white/5' : 'bg-primary text-white ml-auto rounded-br-none'
                  }`}>
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Simulated input bar */}
              <div className="pt-4 border-t border-white/10 mt-4 flex gap-2 shrink-0">
                <input
                  type="text"
                  placeholder="Type an instant reply message..."
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-primary text-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                      const text = e.currentTarget.value;
                      setChatProfiles(prev => {
                        const active = prev[activeChatId];
                        return {
                          ...prev,
                          [activeChatId]: {
                            ...active,
                            messages: [...active.messages, { sender: 'bot', text }]
                          }
                        };
                      });
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <button className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2 px-4 rounded-xl border-0">
                  Send
                </button>
              </div>
            </div>

            {/* Profile CRM sidebar properties (lg:col-span-3) */}
            <div className="lg:col-span-3 border-l border-white/10 pl-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-white/40 block uppercase tracking-wider mb-4">CRM Profile Attributes</span>
                
                <div className="space-y-4 text-xs font-bold">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="text-[9px] text-white/40 uppercase block mb-1">Assigned Segment Tag</span>
                    <span className="text-primary-light font-black text-sm">{chatProfiles[activeChatId].tag}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] text-white/40 block">Phone Identifier:</span>
                    <span className="text-white/80">{chatProfiles[activeChatId].phone}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] text-white/40 block">Meta Verification Status:</span>
                    <span className="text-[#00E396] flex items-center gap-1">
                      <BadgeCheck className="w-4 h-4 fill-none" />
                      Active API Verified
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert(`Profile updated for ${chatProfiles[activeChatId].name}!`)}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-black py-2.5 rounded-lg mt-6"
              >
                Update CRM Fields
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCT ADVANCED FEATURES GRID */}
      <section className="py-28 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">Meta Platform Features</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Everything required to scale WhatsApp Support
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Take full control of user acquisition, catalogs, live chat assignments, and custom integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">No-Code Visual Editor</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Design conversational scripts in minutes. Connect nodes, choose button options, and construct logic filters without coding knowledge.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Verified Green Tick</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Obtain your official WhatsApp Business verified badge. Build customer trust and boost conversions by displaying meta legitimacy.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">WhatsApp Catalogs</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Sell products directly within the chat screen. Display catalog products, add items to cart, and generate secure payment links frictionless.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Send className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Unlimited Broadcasts</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Send segmented templates to thousands of opt-in customers without number restriction policies under official Meta API terms.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Live Agent Handovers</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Escalate conversations dynamically. Assign ongoing chat folders to human live agents when customers request specific consultation.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Broadcast Analytics</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Track template delivered rates, read states, link CTRs, and conversions to optimize your broadcast campaign performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Trust Area */}
      <section className="py-28 bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary-light text-xs font-bold uppercase tracking-widest block mb-4">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight !text-white">
              E-commerce and support teams love WhatsApp Campaigns
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { company: 'SOAP Benelux', quote: 'Obtained a 4x boost in recovered e-commerce abandoned carts by switching from emails to WhatsApp API templates.', author: 'Marco Borsani', role: 'CEO & Founder' },
              { company: 'Conversational Design', quote: 'Delivered an average 95% message open rate across all seasonal marketing campaign broadcasts.', author: 'Mattia Gnemmi', role: 'Conversion Strategist' },
              { company: 'Allianz Benelux', quote: 'Automated catalog queries and secured high G2 customer satisfaction rankings natively via WhatsApp.', author: 'Stefan van Ballegooie', role: 'CS Lead' }
            ].map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/45 transition-all duration-300">
                <span className="text-xs font-black text-primary-light bg-white/5 px-3 py-1 rounded-full">{c.company}</span>
                <p className="text-white font-bold text-lg my-6 leading-relaxed">"{c.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white/80 text-sm">{c.author}</div>
                  <div className="text-white/40 text-xs mt-1">{c.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Reviews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { quote: 'WhatsApp Templates with CTAs changed our checkout conversions completely.', author: 'Alex M.', role: 'Marketing Specialist' },
              { quote: 'Shared Team inbox dashboard makes collaborative support seamless.', author: 'Sarah K.', role: 'Customer Success Director' },
              { quote: 'Official verified Green Tick badge was secured in under a week.', author: 'David L.', role: 'Operations Lead' },
              { quote: 'Zero worries about number bans under Meta API compliant flows.', author: 'Jonas P.', role: 'Growth Hacker' }
            ].map((r, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-white/80 font-medium text-xs mb-4 leading-relaxed">"{r.quote}"</p>
                <div className="text-white/50 text-[10px] font-bold">{r.author} · {r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Official Meta Policies</span>
            <h2 className="text-4xl font-black text-dark tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden shadow-xs hover:border-primary/20 transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-dark text-base md:text-lg">{faq.q}</span>
                  {activeFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dark/40 shrink-0" />
                  )}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-dark/60 font-medium leading-relaxed text-sm md:text-base border-t border-border pt-4 bg-muted/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Theme Final CTA Section */}
      <section className="py-28 text-center bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span className="text-primary-light text-xs font-bold uppercase tracking-widest block mb-6">Automate Your WhatsApp Channels</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight !text-white">
              Ready to automate customer chats at scale?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Activate your official WhatsApp Business API account in minutes. Launch campaigns, ingest product catalogs, and recover conversions instantly with EngageFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/pricing" className="btn-primary !px-12 !py-5 text-lg border-0 bg-primary hover:bg-primary-light">
                Build WhatsApp Bot Free
              </Link>
              <Link to="/get-demo" className="btn-outline !px-12 !py-5 text-lg !text-white !border-white/20 hover:!bg-white/10">
                Request Custom Demo
              </Link>
            </div>

            {/* Resources / Links */}
            <div className="border-t border-white/10 pt-16">
              <h3 className="text-xl font-bold mb-8 !text-white">Everything required to master WhatsApp Campaigns</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'WhatsApp Broadcast Templates', desc: 'Deploy instant abandoned cart, notify, or support flows.', link: '/resources/templates' },
                  { title: 'Meta API Regulations Guide', desc: 'Master Meta opt-in policies and conversational metrics.', link: '/resources/academy' },
                  { title: 'CRM Custom Webhooks', desc: 'Sync customer properties with HubSpot & Salesforce.', link: '/developers' },
                ].map((r, i) => (
                  <Link key={i} to={r.link} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 text-left group">
                    <h4 className="font-bold mb-2 group-hover:text-primary-light transition-colors !text-white">{r.title}</h4>
                    <p className="text-sm text-white/50">{r.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-primary-light font-bold text-xs">
                      Explore Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
