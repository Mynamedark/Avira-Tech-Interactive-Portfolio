'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Calendar, Tag, ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Tables } from '@/database.types';

export const Portfolio = () => {
  const [projects, setProjects] = useState<Tables<'portfolio_items'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Tables<'portfolio_items'> | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return null;
  if (projects.length === 0) return null;

  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Selected Works</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Digital Excellence in Motion</h3>
        <p className="text-blue-100/60 max-w-xl mx-auto">
          A glimpse into the digital universes we've created for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 cursor-pointer hover:border-orange-500/30 transition-all duration-500"
          >
            <div className="aspect-video w-full bg-blue-900/20 relative overflow-hidden">
              {project.image_url ? (
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-blue-400/20">
                  <ExternalLink size={48} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] uppercase tracking-wider font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{project.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#010409]/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] bg-[#020617] border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative bg-blue-900/20">
                  {selectedProject.image_url ? (
                    <img 
                      src={selectedProject.image_url} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-blue-400/20">
                      <ExternalLink size={64} />
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 text-orange-500 text-sm font-bold uppercase tracking-widest mb-6">
                    <Tag size={16} />
                    <span>Project Details</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h5 className="text-white font-bold mb-2">The Challenge</h5>
                      <p className="text-blue-100/60 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags?.map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-blue-100/70 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all text-center flex items-center justify-center gap-2"
                      >
                        Visit Live Site <ExternalLink size={18} />
                      </a>
                    )}
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="flex-1 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
