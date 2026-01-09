'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          AVIRA<span className="text-orange-500">TECH</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-blue-100/70 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            Hire Us
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 bg-[#020617]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-blue-100/70 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl">
            Hire Us
          </button>
        </motion.div>
      )}
    </header>
  );
};
