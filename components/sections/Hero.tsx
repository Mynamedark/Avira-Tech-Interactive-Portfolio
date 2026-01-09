'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap, Code, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      <motion.div style={{ y, opacity, scale }} className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-8 backdrop-blur-sm"
        >
          <Sparkles size={16} />
          <span className="tracking-widest uppercase font-bold text-[10px]">Innovation in Motion</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-orange-500/20 leading-[0.9]"
        >
          Delivering High-Quality <br />
          Digital Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-blue-100/60 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Delivering excellence through innovative solutions <br className="hidden md:block" />
          tailored to your business needs.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          <button className="group relative px-10 py-5 bg-orange-500 text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-500 backdrop-blur-md">
            Contact Us
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-blue-100/30 font-bold">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-orange-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
