import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, Zap, HelpCircle, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi! 🤖 I\'m your EngageFlow Assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e, text = null) => {
    if (e) e.preventDefault();
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const newUserMessage = { id: Date.now(), type: 'user', text: messageText };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const headers = {
        "Content-Type": "application/json"
      };

      if (import.meta.env.VITE_NVIDIA_API_KEY) {
        headers["Authorization"] = `Bearer ${import.meta.env.VITE_NVIDIA_API_KEY}`;
      }

      const response = await fetch("/api/nvidia", {
        method: "POST",
        headers,
        body: JSON.stringify({
          model: "meta/llama-3.1-8b-instruct",
          messages: [
            {
              role: "system",
              content: "You are EngageFlow AI, a helpful assistant for a WhatsApp Marketing and Automation platform. Keep responses under 3 sentences."
            },
            {
              role: "user",
              content: messageText
            }
          ],
          temperature: 0.2,
          top_p: 0.7,
          max_tokens: 1024,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || errorData.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      const botText = data.choices[0].message.content;

      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: botText
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat API Error Details:", error);
      let errorMsg = "I'm experiencing a temporary connection issue.";
      
      if (error.message.includes('401')) errorMsg = "Invalid API Key. Please check your .env file.";
      if (error.message.includes('404')) errorMsg = "Model not found. Please verify the model name.";
      if (error.message.includes('Failed to fetch')) errorMsg = "Network error or CORS block. Direct API calls might be restricted by NVIDIA.";

      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: `${errorMsg} (Details: ${error.message})`
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickActions = [
    { label: 'Pricing', icon: Zap, value: 'Tell me about pricing' },
    { label: 'Demo', icon: Calendar, value: 'I want to book a demo' },
    { label: 'Support', icon: HelpCircle, value: 'I need support' },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000] font-sans flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-[350px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(123,97,255,0.15)] overflow-hidden flex flex-col h-[calc(100vh-120px)] max-h-[520px] sm:h-[520px] border border-primary/10"
          >
            {/* Header - Matched to Website Theme */}
            <div className="bg-primary p-5 sm:p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-widest">EngageFlow AI</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[9px] font-bold text-white/70 uppercase">Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all focus:outline-none"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F8F9FF] scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-dark border border-primary/5 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-primary/5 shadow-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 h-1 bg-primary/40 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Compact Quick Actions */}
            <div className="px-4 sm:px-5 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(null, action.value)}
                  className="whitespace-nowrap px-3 py-1.5 bg-white border border-primary/10 rounded-lg text-[10px] font-bold text-primary flex items-center gap-1.5 shadow-sm hover:bg-primary/5 transition-colors shrink-0 focus:outline-none"
                >
                  <action.icon className="w-3 h-3" />
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input Section */}
            <div className="p-4 sm:p-5 bg-white border-t border-primary/5">
              <form onSubmit={handleSendMessage} className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-muted/50 border border-transparent rounded-xl px-4 py-3 pr-12 text-sm font-medium focus:outline-none focus:bg-white focus:border-primary/20 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-[8px] text-center mt-3 font-bold uppercase tracking-widest text-dark/20">
                Powered by EngageFlow
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smaller Launcher Icon */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(123,97,255,0.3)] flex items-center justify-center text-white relative overflow-hidden group focus:outline-none"
        aria-label="Toggle chat widget"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          ) : (
            <motion.div key="bot" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border border-white" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
