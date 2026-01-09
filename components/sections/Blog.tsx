'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const posts = [
  {
    title: "The Future of Web3 and Decentralized Apps",
    excerpt: "Exploring how blockchain technology is reshaping the digital landscape and what it means for businesses.",
    date: "May 15, 2024",
    readTime: "5 min read",
    author: "Alex Rivera",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
  },
  {
    title: "Optimizing React Performance for Scale",
    excerpt: "Deep dive into advanced patterns for building lightning-fast applications that handle millions of users.",
    date: "May 10, 2024",
    readTime: "8 min read",
    author: "Sarah Chen",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
  },
  {
    title: "Design Systems: The Secret to Consistency",
    excerpt: "How a well-crafted design system can accelerate your development cycle and improve user experience.",
    date: "May 05, 2024",
    readTime: "6 min read",
    author: "Marcus Thorne",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80"
  }
];

export const Blog = () => {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Latest Insights</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Knowledge from the Cosmos</h3>
          <p className="text-blue-100/60">
            Stay updated with the latest trends in technology, design, and digital strategy.
          </p>
        </div>
        <button className="group flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors">
          View All Posts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-orange-500/30 transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-blue-100/40 text-xs mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors line-clamp-2">
                {post.title}
              </h4>
              
              <p className="text-blue-100/50 text-sm leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                    <User size={16} />
                  </div>
                  <span className="text-sm font-medium text-blue-100/70">{post.author}</span>
                </div>
                <button className="p-2 rounded-full bg-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
