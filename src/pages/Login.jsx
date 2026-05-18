import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Mail, Lock, User } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-muted flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-border"
      >
        <div className="text-center mb-10">
          <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <Bot className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-dark mb-2">Welcome Back</h1>
          <p className="text-dark/50 font-medium italic">Log in to your Turbo Tech account</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-dark/60 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/30" />
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-muted border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-dark/60 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/30" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-muted border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm font-bold px-1">
            <label className="flex items-center gap-2 cursor-pointer text-dark/60">
              <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
              Remember me
            </label>
            <Link to="#" className="text-primary hover:underline">Forgot Password?</Link>
          </div>

          <button className="w-full btn-primary py-5 rounded-2xl shadow-xl shadow-primary/20 mt-4">
            Sign In
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-dark/50 font-medium text-sm">
            Don't have an account? <Link to="/contact" className="text-primary font-bold hover:underline">Create one free</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
