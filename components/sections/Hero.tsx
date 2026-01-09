'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap, Code } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-8"
      >
        <Sparkles size={16} />
        <span>Premium Full-Stack Studio</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-orange-500/40"
      >
        Delivering High-Quality <br className="hidden md:block" />
        Digital Solutions
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-blue-100/70 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        We design and develop powerful, scalable, and secure digital experiences 
        that help businesses grow globally. Innovation powered by clean code.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <button className="group px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
          View Our Work
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
          Start Your Project
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full border-t border-white/10 pt-12"
      >
        {[
          { icon: <Code size={20} />, label: "Clean Code" },
          { icon: <Zap size={20} />, label: "Scalable Systems" },
          { icon: <Shield size={20} />, label: "Secure Development" }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-3 text-blue-200/50">
            <span className="text-orange-500">{item.icon}</span>
            <span className="text-sm font-medium tracking-widest uppercase">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
