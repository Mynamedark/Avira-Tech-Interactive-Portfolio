'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Happy Clients', value: '100+' },
  { label: 'Tech Stack', value: '20+' },
];

export const About = () => {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Building the Future of Digital Business</h3>
          <p className="text-blue-100/60 text-lg leading-relaxed mb-8">
            Avira Tech is a premium full-stack studio dedicated to transforming complex business challenges into elegant digital solutions. We don't just write code; we build the engines that drive global growth.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-orange-500/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          <div className="relative z-10 text-center p-12">
            <div className="text-6xl font-bold text-white mb-4">Avira</div>
            <div className="text-xl text-orange-400 font-light tracking-[0.5em] uppercase">Innovation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
