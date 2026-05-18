import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layout, Code2, Palette, Puzzle, Users, Zap, BarChart3,
  ArrowRight, CheckCircle2, MessageSquare, Globe, Star,
  Laptop, Smartphone, HelpCircle, ChevronDown, ChevronUp, Check,
  Layers, Settings, Sparkles, Sliders, ShieldAlert, Monitor, Eye, RefreshCw
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WebsiteBots() {
  // 1. Embedding Formats State
  const [activeFormat, setActiveFormat] = useState('widget');
  const [formatMessages, setFormatMessages] = useState([
    { sender: 'bot', text: 'Hey there! 👋 Welcome to our site. Let me know if you are exploring support or lead capture tools today.' }
  ]);
  const [formatTyping, setFormatTyping] = useState(false);

  const formatList = [
    {
      id: 'widget',
      title: 'Floating Chat Widget',
      desc: 'The classic chat bubble residing in the bottom-right corner. Highly engaging, clean, and non-intrusive.',
      badge: 'Most Popular'
    },
    {
      id: 'popup',
      title: 'Proactive Pop-Up',
      desc: 'Triggers automatically after specific time on page, scroll depth, or click events to capture attention instantly.',
      badge: 'Highest Conversions'
    },
    {
      id: 'embed',
      title: 'Embedded Inline Section',
      desc: 'Seamlessly embedded as a natural section within your webpage layout, blending perfectly with your content.',
      badge: 'Best for Lead Forms'
    },
    {
      id: 'fullpage',
      title: 'Full-Screen Conversational Page',
      desc: 'Replaces static landing pages entirely. Focuses 100% of the user\'s attention on the dialogue to drive sales.',
      badge: 'Best for Marketing Campaigns'
    }
  ];

  const handleFormatReply = (text, replyText) => {
    if (formatTyping) return;
    setFormatMessages(prev => [...prev, { sender: 'user', text }]);
    setFormatTyping(true);

    setTimeout(() => {
      setFormatTyping(false);
      setFormatMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
    }, 1000);
  };

  // 2. Synchronized Builder Canvas & Chat Simulator State
  const [canvasActiveNode, setCanvasActiveNode] = useState('welcome');
  const [builderMessages, setBuilderMessages] = useState([
    { sender: 'bot', text: 'Hi! Welcome to SaaS-Flow. Are you looking to scale support or generate more sales leads today?' }
  ]);

  const scriptNodes = [
    {
      id: 'welcome',
      label: '🟢 Step 1: Greeting Node',
      desc: 'Greeting message with quick-reply select buttons.',
      previewText: 'Hi! Welcome to SaaS-Flow. Are you looking to scale support or generate more sales leads today?',
      options: ['Scale Support', 'Generate Leads']
    },
    {
      id: 'intake',
      label: '📋 Step 2: Contact Intake Form',
      desc: 'Prompts user for verified name and corporate email.',
      previewText: 'Awesome! Let\'s get your profile registered. What is your verified business email address?',
      options: ['Enter email: info@company.com']
    },
    {
      id: 'qualification',
      label: '⚖️ Step 3: Qualification Filter',
      desc: 'Branches script based on user\'s monthly budget.',
      previewText: 'Got it. To tailor your platform demo, what is your estimated monthly support ticket volume?',
      options: ['Under 1,000 /mo', '1,000 - 5,000 /mo', 'Over 5,000 /mo']
    },
    {
      id: 'sync',
      label: '⚡ Step 4: CRM Integration Sync',
      desc: 'Synchronizes conversational logs straight to HubSpot.',
      previewText: 'Success! I have synced your qualification profile directly into our HubSpot pipeline and notified our Sales Lead.',
      options: ['Book Calendly Slot', 'Go to Pricing']
    }
  ];

  const handleCanvasNodeClick = (node) => {
    setCanvasActiveNode(node.id);
    setBuilderMessages([
      { sender: 'bot', text: node.previewText }
    ]);
  };

  const handleSimulatedOptionClick = (optText) => {
    setBuilderMessages(prev => [...prev, { sender: 'user', text: optText }]);
    
    // Auto transition to next node for interactive feel
    const currentIndex = scriptNodes.findIndex(n => n.id === canvasActiveNode);
    if (currentIndex < scriptNodes.length - 1) {
      const nextNode = scriptNodes[currentIndex + 1];
      setTimeout(() => {
        setCanvasActiveNode(nextNode.id);
        setBuilderMessages(prev => [...prev, { sender: 'bot', text: nextNode.previewText }]);
      }, 1000);
    }
  };

  // 3. Live Design Customizer State
  const [themeColor, setThemeColor] = useState('#7B61FF'); // Default Purple
  const [borderRadius, setBorderRadius] = useState('16px'); // '0px', '16px', '28px'
  const [botAvatar, setBotAvatar] = useState('🤖'); // '🤖', '👩', '✨'
  const [chatAlignment, setChatAlignment] = useState('right');

  // FAQ Expand state
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How do I install the chatbot on my website?',
      a: 'Installation is incredibly simple. Once you design your flow, our builder generates a single line of JavaScript code. Just copy and paste it into the header or footer of your website. It works instantly without slowing page loading speeds.'
    },
    {
      q: 'Can I customize the colors, shapes, and fonts to match my branding?',
      a: 'Yes, fully. Our platform features a comprehensive design editor. You can upload custom avatars, change background gradients, adjust bubble corners, choose from 100+ Google Fonts, and even inject custom CSS for advanced visual styling.'
    },
    {
      q: 'Does it work with platforms like Shopify, Webflow, and WordPress?',
      a: 'Yes! EngageFlow is fully CMS-agnostic. We support native installation guides for WordPress, Shopify, Webflow, Wix, Squarespace, and custom HTML/React stacks.'
    },
    {
      q: 'Can a human support agent take over when the bot gets stuck?',
      a: 'Absolutely. If the chatbot reaches a certain point in the flow or if a user requests a real representative, our native Live Handoff feature notifies your support team. They can answer instantly using our Team Inbox, HubSpot, or Slack integrations.'
    },
    {
      q: 'How does it improve conversion rates compared to traditional forms?',
      a: 'Static forms feel like homework. Chatbots break information requests into small, digestible, and interactive steps. Incorporating elements like quick-reply buttons, sliders, and calendars creates a frictionless journey, routinely lifting conversions by over 40%.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden border-b border-border">
        {/* Decorative glows */}
        <div className="glow-spot top-[-10%] right-[10%] w-[900px] h-[500px] bg-primary/10" />
        <div className="glow-spot bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-8">
              <Layout className="w-3.5 h-3.5 text-primary" />
              NO-CODE WEB CONVERSATIONS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-dark leading-[1.05] tracking-tighter mb-8 max-w-6xl mx-auto">
              Capture Website Traffic with <span className="text-gradient">Conversational Bots</span>
            </h1>
            
            <p className="text-xl text-dark/60 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
              Ditch traditional, static lead forms. Turn website visits into real-time dialogues. Generate qualified leads, reserve meetings, and resolve customer queries 24/7 with zero coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary !px-12 !py-5 text-base border-0 bg-primary hover:bg-primary-light">
                Create Website Chatbot Free
              </Link>
              <Link to="/get-demo" className="btn-outline !px-12 !py-5 text-base">
                Get custom Enterprise Demo
              </Link>
            </div>
            
            <p className="text-xs text-dark/30 font-bold mt-4">
              Free Sandbox environment included · Copy & Paste JS Integration · CMS Compatible
            </p>
          </motion.div>
        </div>
      </section>

      {/* SYNCHRONIZED BUILDER & CHAT PLAYGROUND */}
      <section className="py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Interactive Builder Preview</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              How conversations are designed on the canvas
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Click on different flowchart nodes in the builder canvas (Left Column) to see what that exact node generates in the live website chatbot simulator (Right Column)!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Visual Canvas Block (Left Column) */}
            <div className="lg:col-span-6 bg-muted/40 border border-border rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-dark border-b border-border pb-4 mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Script Builder Canvas
                </h3>

                <div className="flex flex-col gap-4">
                  {scriptNodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => handleCanvasNodeClick(node)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 relative group ${
                        canvasActiveNode === node.id 
                          ? 'border-primary bg-white shadow-lg shadow-primary/5' 
                          : 'border-border bg-white/60 hover:border-primary/30'
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
            <div className="lg:col-span-6 bg-dark rounded-[2.5rem] p-6 shadow-2xl border border-white/10 flex flex-col justify-between min-h-[460px]">
              {/* Mock browser header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-white/40 font-bold bg-white/5 px-4 py-1 rounded-full">SaaS-Flow Web Simulation</span>
              </div>

              {/* Chat View */}
              <div className="bg-white rounded-2xl p-4 flex-grow overflow-y-auto max-h-[260px] text-left space-y-3">
                {builderMessages.map((m, idx) => (
                  <div key={idx} className={`p-3 rounded-2xl text-xs max-w-[85%] font-medium ${
                    m.sender === 'user' ? 'bg-primary text-white ml-auto rounded-br-none' : 'bg-muted text-dark mr-auto rounded-bl-none border border-border'
                  }`}>
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Predefined replies dynamically populated based on active step */}
              <div className="p-3 bg-white/5 border-t border-white/5 mt-4 space-y-2 shrink-0">
                <span className="text-[9px] font-bold text-white/40 block">Select Visitor Action:</span>
                <div className="flex flex-col gap-2">
                  {scriptNodes.find(n => n.id === canvasActiveNode)?.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSimulatedOptionClick(opt)}
                      className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-2.5 text-xs text-white transition-all font-medium flex justify-between items-center"
                    >
                      <span>"{opt}"</span>
                      <ArrowRight className="w-3.5 h-3.5 text-primary-light" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE THEME & STYLE CUSTOMIZER PLAYGROUND */}
      <section className="py-28 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">Complete Brand Customization</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Customize the look to blend with your brand guidelines
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Change widget properties below (Left Column) to see the chatbot styles transform in real-time! Replicates our custom design panel.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Style Controls (Left Column) */}
            <div className="lg:col-span-5 bg-white border border-border rounded-[2.5rem] p-8 shadow-sm space-y-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-dark border-b border-border pb-4 mb-6 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-secondary" />
                  Styling Control Panel
                </h3>

                {/* Color swapper */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-dark/60">Widget Primary Color:</label>
                  <div className="flex gap-3">
                    {[
                      { hex: '#7B61FF', label: 'Purple' },
                      { hex: '#00E396', label: 'Neon Green' },
                      { hex: '#EE4288', label: 'Hot Pink' },
                      { hex: '#1E1E1E', label: 'Dark Slate' }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => setThemeColor(col.hex)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          themeColor === col.hex ? 'border-dark scale-110' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Border radius slider */}
                <div className="space-y-3 mt-6">
                  <label className="text-xs font-black text-dark/60">Bubble Border Radius:</label>
                  <div className="flex gap-2">
                    {[
                      { radius: '0px', label: 'Square' },
                      { radius: '16px', label: 'Soft Rounded' },
                      { radius: '28px', label: 'Pill-shaped' }
                    ].map((rad) => (
                      <button
                        key={rad.radius}
                        onClick={() => setBorderRadius(rad.radius)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                          borderRadius === rad.radius 
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10' 
                            : 'bg-muted text-dark/60 border-border hover:bg-white'
                        }`}
                      >
                        {rad.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Avatar selector */}
                <div className="space-y-3 mt-6">
                  <label className="text-xs font-black text-dark/60">Chatbot Avatar Style:</label>
                  <div className="flex gap-2">
                    {[
                      { av: '🤖', label: 'Bot Node' },
                      { av: '👩', label: 'Live Advisor' },
                      { av: '✨', label: 'Sparkles' }
                    ].map((avItem) => (
                      <button
                        key={avItem.av}
                        onClick={() => setBotAvatar(avItem.av)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                          botAvatar === avItem.av 
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10' 
                            : 'bg-muted text-dark/60 border-border hover:bg-white'
                        }`}
                      >
                        <span className="mr-1.5">{avItem.av}</span>
                        {avItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert(`Styles saved successfully in your profile! Selected Color: ${themeColor}`)}
                className="w-full bg-dark hover:bg-slate-800 text-white text-xs font-black py-3.5 rounded-xl border-0"
              >
                Apply Custom Theme to Site
              </button>
            </div>

            {/* Custom Widget Preview (Right Column) */}
            <div className="lg:col-span-7 bg-dark rounded-[2.5rem] p-6 shadow-2xl border border-white/10 flex flex-col justify-between min-h-[460px]">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 shrink-0">
                <span className="text-[10px] text-white/30 font-bold">Design Customizer Preview</span>
                <span className="text-[10px] text-[#00E396] font-black uppercase">Live Styling</span>
              </div>

              {/* Customizable Chat Box */}
              <div className="bg-white rounded-2xl p-6 flex-grow flex flex-col justify-between text-left">
                {/* Chat header powered by customizable state */}
                <div 
                  className="p-3 text-white flex items-center justify-between shrink-0 mb-4 transition-all duration-300"
                  style={{ backgroundColor: themeColor, borderRadius: borderRadius }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                      {botAvatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold">SaaS-Flow Helper</div>
                      <div className="text-[8px] text-white/80 mt-0.5">Online</div>
                    </div>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest font-black">Live Theme</span>
                </div>

                {/* Customizable Bubbles */}
                <div className="space-y-4 flex-grow overflow-y-auto max-h-[180px]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center text-xs shrink-0">
                      {botAvatar}
                    </div>
                    <div 
                      className="bg-muted text-dark text-xs p-3 font-medium border border-border transition-all duration-300"
                      style={{ borderRadius: borderRadius }}
                    >
                      Welcome to your website! Adjust color panels or corner borders on the left to see this chat bubble style transform dynamically!
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-end justify-end">
                    <div 
                      className="text-white text-xs p-3 font-medium transition-all duration-300"
                      style={{ backgroundColor: themeColor, borderRadius: borderRadius }}
                    >
                      Wow! The styles look absolutely incredible.
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mt-4 text-[10px] text-dark/40 font-bold text-center shrink-0">
                  Styles synchronize automatically to your custom script code!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDING FORMATS PREVIEW */}
      <section className="py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">Flexible Integrations</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Integrate your chatbot in multiple formats
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Choose the perfect style to interact with your visitors based on their journey stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side selector */}
            <div className="lg:col-span-5 space-y-4">
              {formatList.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFormat(f.id);
                    setFormatMessages([{ sender: 'bot', text: `You clicked the ${f.title} preview! Ready to explore how it engages visitors?` }]);
                  }}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
                    activeFormat === f.id
                      ? 'bg-white border-primary shadow-xl shadow-primary/5'
                      : 'bg-white/60 border-border hover:border-primary/20 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-dark text-lg group-hover:text-primary transition-colors">{f.title}</h3>
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                      activeFormat === f.id ? 'bg-primary/10 text-primary' : 'bg-dark/5 text-dark/40'
                    }`}>
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-sm text-dark/60 font-medium leading-relaxed">{f.desc}</p>
                </button>
              ))}
            </div>

            {/* Right side live interactive simulation container */}
            <div className="lg:col-span-7 bg-dark rounded-[2.5rem] p-6 shadow-2xl border border-white/10 relative min-h-[500px] overflow-hidden flex flex-col justify-between">
              {/* Top navigation header of mock site */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] text-white/40 font-bold bg-white/5 px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Laptop className="w-3 h-3 text-primary-light" />
                  www.mybusiness.com/demo
                </div>
              </div>

              {/* Mock website content area which updates visually based on activeFormat */}
              <div className="flex-grow relative bg-white rounded-2xl p-6 border border-white/5 overflow-y-auto max-h-[360px] text-left">
                {/* Header of Mock Site */}
                <div className="flex justify-between items-center pb-4 border-b border-dark/5 mb-6">
                  <span className="font-black text-dark text-sm tracking-tight flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-primary rounded" />
                    SaaS-Flow
                  </span>
                  <div className="flex gap-3">
                    <span className="w-8 h-2 bg-dark/10 rounded" />
                    <span className="w-8 h-2 bg-dark/10 rounded" />
                    <span className="w-8 h-2 bg-dark/10 rounded" />
                  </div>
                </div>

                {/* Main page content layout */}
                <div className="space-y-4">
                  <h4 className="text-xl font-black text-dark leading-tight">Build the Future of Sales Automation</h4>
                  <p className="text-xs text-dark/60 font-medium max-w-md">
                    Automate lead distribution, monitor client logs, and scale support resources with a single click. Start optimizing team efficiency today.
                  </p>
                  <div className="flex gap-2">
                    <div className="w-20 h-7 bg-primary rounded-lg" />
                    <div className="w-20 h-7 bg-dark/10 rounded-lg" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="bg-muted p-3 rounded-xl border border-border text-center">
                      <div className="w-4 h-4 bg-primary/20 rounded mx-auto mb-2" />
                      <div className="w-8 h-1 bg-dark/20 mx-auto rounded" />
                    </div>
                    <div className="bg-muted p-3 rounded-xl border border-border text-center">
                      <div className="w-4 h-4 bg-secondary/20 rounded mx-auto mb-2" />
                      <div className="w-8 h-1 bg-dark/20 mx-auto rounded" />
                    </div>
                    <div className="bg-muted p-3 rounded-xl border border-border text-center">
                      <div className="w-4 h-4 bg-emerald-500/20 rounded mx-auto mb-2" />
                      <div className="w-8 h-1 bg-dark/20 mx-auto rounded" />
                    </div>
                  </div>
                </div>

                {/* 1. CHAT WIDGET OPTION VISUAL */}
                {activeFormat === 'widget' && (
                  <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end">
                    {/* Opened widget popover */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="bg-white border border-dark/10 w-64 h-80 rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden mb-2"
                    >
                      <div className="bg-primary p-3 text-white flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">💬</div>
                        <div>
                          <div className="text-[10px] font-bold leading-none">Support Assistant</div>
                          <div className="text-[8px] text-white/70 mt-0.5">Online</div>
                        </div>
                      </div>

                      <div className="p-3 space-y-2 flex-grow overflow-y-auto max-h-[200px]">
                        {formatMessages.map((m, idx) => (
                          <div key={idx} className={`p-2 rounded-xl text-[10px] leading-relaxed max-w-[85%] font-medium ${
                            m.sender === 'user' ? 'bg-primary text-white ml-auto' : 'bg-muted text-dark mr-auto border border-border'
                          }`}>
                            {m.text}
                          </div>
                        ))}
                        {formatTyping && (
                          <div className="bg-muted p-2 rounded-xl text-[10px] font-bold text-dark/40 mr-auto max-w-[40px] text-center animate-pulse">...</div>
                        )}
                      </div>

                      <div className="p-2 border-t border-border bg-muted/50 flex flex-col gap-1.5 shrink-0">
                        <button 
                          onClick={() => handleFormatReply("I want to Book a Demo!", "Awesome! Click here to select a Calendly slot in my dashboard.")}
                          className="w-full bg-white border border-border hover:border-primary rounded py-1 px-2 text-[9px] font-bold text-dark text-left"
                        >
                          "I want to Book a Demo!"
                        </button>
                        <button 
                          onClick={() => handleFormatReply("What are the pricing options?", "We have three main pricing packages starting from $49/mo.")}
                          className="w-full bg-white border border-border hover:border-primary rounded py-1 px-2 text-[9px] font-bold text-dark text-left"
                        >
                          "What are the pricing options?"
                        </button>
                      </div>
                    </motion.div>
                    
                    {/* Floating chat icon */}
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 cursor-pointer animate-bounce">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* 2. PROACTIVE POP-UP MODAL VISUAL */}
                {activeFormat === 'popup' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-dark/40 backdrop-blur-xs z-30 flex items-center justify-center p-6"
                  >
                    <motion.div 
                      initial={{ scale: 0.9, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      className="bg-white border border-border w-72 rounded-3xl p-5 shadow-2xl flex flex-col justify-between"
                    >
                      <div className="text-center pb-3 border-b border-border">
                        <span className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-black mx-auto mb-2 text-lg">💡</span>
                        <h4 className="font-black text-dark text-sm">Special Offer Active!</h4>
                        <p className="text-[10px] text-dark/50 font-bold mt-1">Get 20% off your onboarding plan today.</p>
                      </div>

                      <div className="py-4 space-y-2">
                        {formatMessages.map((m, idx) => (
                          <div key={idx} className={`p-2 rounded-xl text-[10px] leading-relaxed max-w-[85%] font-medium ${
                            m.sender === 'user' ? 'bg-secondary text-white ml-auto' : 'bg-muted text-dark mr-auto border border-border'
                          }`}>
                            {m.text}
                          </div>
                        ))}
                        {formatTyping && (
                          <div className="bg-muted p-2 rounded-xl text-[10px] font-bold text-dark/40 mr-auto max-w-[40px] text-center animate-pulse">...</div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleFormatReply("Claim Coupon Now!", "Fantastic choice! Apply code OFF20 at check out!")}
                          className="flex-1 bg-secondary text-white text-[10px] font-black py-2 rounded-xl hover:bg-pink-400 transition-colors"
                        >
                          Claim Coupon
                        </button>
                        <button
                          onClick={() => setActiveFormat('widget')}
                          className="bg-muted text-dark/50 text-[10px] font-black py-2 px-3 rounded-xl border border-border"
                        >
                          Dismiss
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* 3. EMBEDDED INLINE VISUAL */}
                {activeFormat === 'embed' && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="bg-white border border-primary/20 rounded-2xl shadow-md p-4 flex flex-col justify-between min-h-[160px]">
                      <div className="flex items-center justify-between pb-2 border-b border-border mb-3">
                        <span className="text-xs font-black text-dark">Need Custom Pricing? Ask SaaS-Flow Helper:</span>
                        <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-black">Inline Embed</span>
                      </div>

                      <div className="space-y-2 flex-grow overflow-y-auto mb-3">
                        {formatMessages.map((m, idx) => (
                          <div key={idx} className={`p-2 rounded-xl text-[10px] leading-relaxed max-w-[85%] font-medium ${
                            m.sender === 'user' ? 'bg-primary text-white ml-auto' : 'bg-muted text-dark mr-auto border border-border'
                          }`}>
                            {m.text}
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 shrink-0">
                        <button 
                          onClick={() => handleFormatReply("Calculate Cost for 50 Users", "For 50 users, we recommend our Pro plan starting at $99/mo.")}
                          className="flex-1 bg-white border border-border hover:border-primary rounded-xl py-1.5 text-[9px] font-black text-dark"
                        >
                          "Calculate Cost for 50 Users"
                        </button>
                        <button 
                          onClick={() => handleFormatReply("Speak to Sales Representative", "Perfect. Let me redirect you to our Sales Lead, Mattia.")}
                          className="flex-1 bg-white border border-border hover:border-primary rounded-xl py-1.5 text-[9px] font-black text-dark"
                        >
                          "Speak to Sales"
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. FULL PAGE CONVERSATIONAL VISUAL */}
                {activeFormat === 'fullpage' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-white z-40 p-6 flex flex-col justify-between text-left"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="font-black text-primary text-base">SaaS-Flow Conversation</span>
                      <button 
                        onClick={() => setActiveFormat('widget')}
                        className="text-xs text-dark/40 font-bold hover:text-primary"
                      >
                        Exit Conversational Mode
                      </button>
                    </div>

                    <div className="space-y-4 py-6 flex-grow overflow-y-auto">
                      {formatMessages.map((m, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold ${
                            m.sender === 'user' ? 'bg-primary text-white' : 'bg-muted border border-border'
                          }`}>
                            {m.sender === 'user' ? 'U' : '🤖'}
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-dark/40">{m.sender === 'user' ? 'User' : 'SmartAgent'}</div>
                            <div className="bg-muted/30 p-3 rounded-2xl border border-border text-xs text-dark font-medium max-w-sm mt-1">
                              {m.text}
                            </div>
                          </div>
                        </div>
                      ))}
                      {formatTyping && (
                        <div className="text-xs text-dark/30 animate-pulse pl-11 font-bold">Typing response...</div>
                      )}
                    </div>

                    <div className="flex gap-2 p-3 border-t border-border shrink-0 bg-muted/10">
                      <button 
                        onClick={() => handleFormatReply("I want to sign up now!", "Awesome! Let me take your contact info to register your trial profile.")}
                        className="flex-grow bg-primary text-white rounded-xl py-2.5 text-xs font-black"
                      >
                        "Sign me up!"
                      </button>
                      <button 
                        onClick={() => handleFormatReply("I need an enterprise consultation", "Perfect, tell me about your budget size and industry.")}
                        className="flex-grow bg-white border border-border hover:border-primary rounded-xl py-2.5 text-xs font-black text-dark"
                      >
                        "Enterprise Consultation"
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Visual screen footer indicators */}
              <div className="pt-4 flex justify-between items-center shrink-0">
                <span className="text-[10px] text-white/30 font-bold">Visual Preview Interface</span>
                <span className="text-[10px] text-primary-light font-black uppercase">Click predefined responses to test!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCT CAPABILITIES GRID */}
      <section className="py-28 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary text-sm font-bold uppercase tracking-wider block mb-4">Core Platform Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
              Everything you need to convert visitors
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-medium">
              Transform website traffic operations with a robust workspace optimized for brand alignment, third-party integrations, and performance logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">No-Code Visual Builder</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Design custom conversation scripts in minutes. Connect nodes, choose button options, test conditional rules without coding knowledge.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Absolute Brand Styling</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Customize every single aspect of your chatbot widget. Fine-tune colors, choose typography, borders, and rounded shapes to align with your guidelines.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Smart Logic Rules</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Implement dynamic logic rules. Branch scripts instantly depending on user answers, geolocation IP filters, or exact site URL pages.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Seamless CRM Syncing</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Connect natively with HubSpot, Salesforce, Zapier, ActiveCampaign, Mailchimp, or custom webhooks to populate client profiles.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Live Agent Handovers</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Establish clean support routines. The chatbot automatically assigns conversation folders to human support agents when requested.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4">Conversational Analytics</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                Set goals, check customer drop-off statistics, track resolution rates, and analyze logs to optimize conversational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Trust Area */}
      <section className="py-28 bg-dark text-white rounded-[4rem] mx-6 mb-8 relative overflow-hidden">
        {/* Decorative lighting effect */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary-light text-xs font-bold uppercase tracking-widest block mb-4">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight !text-white">
              Marketing, Support and Sales teams love Website Chatbots
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { company: 'Allianz Benelux', quote: 'Obtained a 90% positive review rating by replacing static support forms with real-time chatbots.', author: 'Stefan van Ballegooie', role: 'Conversion Specialist' },
              { company: 'Conversational Design', quote: 'Achieved over 40% lead generation conversion rates on cold advertising traffic using full-page conversational setups.', author: 'Mattia Gnemmi', role: 'Co-Founder' },
              { company: 'SOAP Benelux', quote: 'Boosted customer registration rates from 25% to 73% in less than 3 months using engaging validation bots.', author: 'Marco Borsani', role: 'CEO & Founder' }
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

          {/* Reviews Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { quote: 'Fascinating no-code builder. Allowed us to deploy widget in less than 1 hour.', author: 'Daniel C.', role: 'MarTech Director' },
              { quote: 'Boosted our appointment bookings by 50% via Calendly nodes.', author: 'Maria S.', role: 'CEO - Small Business' },
              { quote: 'Extremely simple to customize matching our brand assets.', author: 'Peter J.', role: 'CTO' },
              { quote: 'Live human handoff works perfectly with HubSpot CRM.', author: 'Mila D.', role: 'Community Experience' }
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
            <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">Support & Guidelines</span>
            <h2 className="text-4xl font-black text-dark tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden shadow-xs hover:border-primary/20 transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-dark text-base md:text-lg">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dark/40 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-dark/60 font-medium leading-relaxed text-sm md:text-base border-t border-border pt-4 bg-muted/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Conversion Block */}
      <section className="py-28 text-center bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-6">Build Your Conversational Journey</span>
          <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tighter mb-8 leading-none">
            Start building your first website chatbot today!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/pricing" className="btn-primary !px-12 !py-5 text-lg border-0 bg-primary hover:bg-primary-light">
              Try Website Bots Free
            </Link>
            <Link to="/get-demo" className="btn-outline !px-12 !py-5 text-lg">
              Get a Live Demo
            </Link>
          </div>

          {/* Resources links footer */}
          <div className="border-t border-border pt-16">
            <h3 className="text-xl font-black text-dark mb-8">Everything you need to master website chatbots</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Chatbot Templates', desc: 'Deploy instant lead-gen, IT support, or survey chatbots.', link: '/resources/templates' },
                { title: 'Chatbot Academy', desc: 'Learn how to construct highly converting logic scripts.', link: '/resources/academy' },
                { title: 'Web Chatbot Articles', desc: 'Read tips & best practices on our conversion blog.', link: '/resources/blog' }
              ].map((r, i) => (
                <Link key={i} to={r.link} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
                  <h4 className="font-black text-dark mb-2 group-hover:text-primary transition-colors">{r.title}</h4>
                  <p className="text-xs text-dark/60 font-medium">{r.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-primary font-bold text-xs">
                    Explore Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
