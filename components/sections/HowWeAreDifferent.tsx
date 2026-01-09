'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Code, Users, Rocket, Heart } from 'lucide-react';

const differences = [
  {
    icon: <Users className="text-orange-500" />,
    title: "Client-First Approach",
    description: "We don't just build for you; we build with you. Your goals are the compass for every decision we make."
  },
  {
    icon: <Rocket className="text-orange-500" />,
    title: "Scalable Architecture",
    description: "Future-ready systems designed to grow from your first user to your first million without breaking a sweat."
  },
  {
    icon: <Code className="text-orange-500" />,
    title: "Clean & Maintainable Code",
    description: "Code that is as beautiful on the inside as the UI is on the outside. Built for longevity and ease of evolution."
  },
  {
    icon: <Shield className="text-orange-500" />,
    title: "Performance & Security",
    description: "Enterprise-grade security and lightning-fast load times are not features; they are our baseline standards."
  }
];

export const HowWeAreDifferent = () => {
  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">How We're Different</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            We don't just build websites. <br />
            <span className="text-blue-100/40">We craft digital legacies.</span>
          </h3>
          <p className="text-blue-100/60 text-xl leading-relaxed mb-12">
            Avira Tech combines cinematic design with engineering excellence to create 
            experiences that don't just look good—they perform, scale, and inspire.
          </p>
          <div className="flex items-center gap-4 p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <Heart size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Built with Passion</p>
              <p className="text-sm text-blue-100/40">Every pixel and line of code serves a purpose.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{item.title}</h4>
              <p className="text-blue-100/40 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
