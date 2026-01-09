'use client';

import { motion } from 'framer-motion';

const techs = [
  "React.js", "Next.js", "Node.js", "TypeScript", "Express.js", 
  "PostgreSQL", "Supabase", "Tailwind CSS", "AWS", "Docker", 
  "Python", "Framer Motion", "Three.js", "GraphQL"
];

export const Technologies = () => {
  return (
    <section className="relative z-10 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Our Tech Stack</h2>
        <h3 className="text-3xl font-bold">Powering Modern Innovation</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-6">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-blue-100/70 font-medium hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
