'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Users, Code2, Rocket, ShieldCheck, MessageSquare } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="text-orange-400" />,
    title: "Client-First Approach",
    description: "Your business goals are our priority. We work as your strategic partner."
  },
  {
    icon: <Code2 className="text-orange-400" />,
    title: "Clean, Maintainable Code",
    description: "We build for the long term with industry-standard best practices."
  },
  {
    icon: <Rocket className="text-orange-400" />,
    title: "Performance Optimization",
    description: "Lightning-fast experiences that keep your users engaged and converting."
  },
  {
    icon: <ShieldCheck className="text-orange-400" />,
    title: "Security-Focused",
    description: "Enterprise-grade security built into every layer of your application."
  },
  {
    icon: <MessageSquare className="text-orange-400" />,
    title: "Clear Communication",
    description: "No tech jargon. Just transparent, regular updates on your project."
  },
  {
    icon: <Rocket className="text-orange-400" />,
    title: "Scalable Architecture",
    description: "Systems that grow with your business, from startup to enterprise."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Why Avira Tech</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Engineered for Excellence</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {reason.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
            <p className="text-blue-100/50 leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
