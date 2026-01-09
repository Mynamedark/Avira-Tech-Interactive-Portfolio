'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="relative z-10 py-24 px-6 max-w-4xl mx-auto">
      <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Build the Future</h2>
          <p className="text-blue-200/60">
            Ready to start your next digital journey? Get in touch with us today.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200/80 ml-1">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200/80 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-200/80 ml-1">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm text-blue-200/40">Email us at</p>
              <p className="font-medium">hello@aviratech.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
              <MessageSquare size={20} />
            </div>
            <div>
              <p className="text-sm text-blue-200/40">Chat with us</p>
              <p className="font-medium">Schedule a call</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
