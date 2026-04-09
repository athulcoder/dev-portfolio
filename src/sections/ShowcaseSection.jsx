import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { works } from "@/constants";
import { X, ExternalLink, Github, Zap, Info } from "lucide-react";

const ShowcaseSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-outfit"
            >
              Creative <span className="text-gray-500 italic">Showcase</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
            >
              A curated collection of digital experiences, focusing on 
              <span className="text-emerald-400 font-medium"> performance, scalability, and cinematic UI</span>.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <a 
              href="https://github.com/athulcoder" 
              target="_blank" 
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <Github className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Explore Archive</span>
            </a>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 cursor-pointer backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 shadow-2xl ${
                work.featured ? "md:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={work.imagePath} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Card Header Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 inline-block rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
                  {work.category}
                </span>
              </div>

              {/* "Know More" Button */}
              <div className="absolute top-6 right-6 z-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(work);
                  }}
                  className="p-3 bg-white/5 hover:bg-emerald-500 border border-white/10 hover:border-emerald-400 rounded-full text-white transition-all duration-300 transform group-hover:rotate-12"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>

              {/* Card Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight font-outfit">
                  {work.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  {work.desc}
                </p>
                
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {work.previewUrl && (
                    <a href={work.previewUrl} target="_blank" className="p-2 bg-white/10 rounded-lg hover:bg-emerald-500 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  <a href={work.githubUrl} target="_blank" className="p-2 bg-white/10 rounded-lg hover:bg-indigo-500 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal/Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100]"
            />
            
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4 font-outfit">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-5xl max-h-[90vh] overflow-hidden bg-[#121212] border border-white/10 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] pointer-events-auto flex flex-col md:flex-row"
              >
                {/* Modal Visual Area */}
                <div className="w-full md:w-[45%] relative bg-black/20 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                  <img 
                    src={selectedProject.imagePath} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  
                  <div className="absolute top-10 left-10">
                    <span className="px-6 py-2 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-[3px]">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content area */}
                <div className="w-full md:w-[55%] p-8 md:p-14 overflow-y-auto bg-gradient-to-br from-[#121212] to-black custom-scrollbar">
                  <div className="flex justify-between items-start mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {selectedProject.title}
                    </h2>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-12">
                    {/* Problem Statement */}
                    <div>
                      <h4 className="flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-[2px] text-xs mb-4">
                        <Zap className="w-4 h-4 fill-emerald-400" /> The Challenge
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed font-light italic opacity-90 border-l-4 border-emerald-500/30 pl-6 py-2">
                        "{selectedProject.problemStatement}"
                      </p>
                    </div>

                    {/* Detailed Solution */}
                    <div>
                      <h4 className="text-gray-500 font-bold uppercase tracking-[2px] text-xs mb-4">
                        The Solution
                      </h4>
                      <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {selectedProject.detailedSolution}
                      </p>
                    </div>

                    {/* Tech Stack Icons */}
                    <div>
                      <h4 className="text-gray-500 font-bold uppercase tracking-[2px] text-xs mb-6">
                        Tools of the Trade
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {selectedProject.techStack.map((tech) => (
                          <div 
                            key={tech.name}
                            className="group/tech flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                          >
                            <tech.icon className="w-6 h-6 transition-transform duration-300 group-hover/tech:scale-125" style={{ color: tech.color }} />
                            <span className="text-white text-sm font-medium tracking-wide">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-5 pt-8 border-t border-white/5">
                      {selectedProject.previewUrl && (
                        <a 
                          href={selectedProject.previewUrl} 
                          target="_blank"
                          className="flex items-center gap-3 px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transform hover:-translate-y-1"
                        >
                          <ExternalLink className="w-5 h-5" /> Live Experience
                        </a>
                      )}
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank"
                        className="flex items-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/30 transform hover:-translate-y-1"
                      >
                        <Github className="w-5 h-5" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowcaseSection;

