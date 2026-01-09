'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Palette, Globe, Cpu, Zap } from 'lucide-react';

const services = [
  {
    icon: <Globe className="text-blue-400" />,
    title: "Web Development",
    description: "High-performance, scalable web applications built with the latest technologies."
  },
  {
    icon: <Palette className="text-purple-400" />,
    title: "UI/UX Design",
    description: "Immersive digital interfaces designed to captivate and engage your audience."
  },
  {
    icon: <Rocket className="text-orange-400" />,
    title: "Brand Identity",
    description: "Strategic branding that positions your tech company as a market leader."
  },
  {
    icon: <Cpu className="text-emerald-400" />,
    title: "AI Integration",
    description: "Smart solutions leveraging artificial intelligence to optimize your workflow."
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions for the best user experience."
  },
  {
    icon: <Code2 className="text-pink-400" />,
    title: "Custom Software",
    description: "Tailor-made software solutions designed to solve your unique business challenges."
  }
];

export const Services = () => {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
        <p className="text-blue-200/60 max-w-xl mx-auto">
          We combine technical excellence with creative vision to deliver 
          outstanding digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-blue-200/60 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
