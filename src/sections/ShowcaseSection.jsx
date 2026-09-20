import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/constants";
import { X, ExternalLink, Github, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const personalWorks = works.filter((w) => w.type === "personal" || !w.type);
  const freelanceWorks = works.filter((w) => w.type === "freelance");

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useGSAP(() => {
    gsap.fromTo(".work-card", 
      { opacity: 0, y: isMobile ? 20 : 40 },
      {
        opacity: 1,
        y: 0,
        stagger: isMobile ? 0.05 : 0.1,
        duration: isMobile ? 0.6 : 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".section-title", 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef, dependencies: [isMobile] });

  const openModal = (work) => {
    setSelectedProject(work);
    gsap.fromTo(".modal-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(".modal-content",
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out", delay: 0.1 }
    );
  };

  const closeModal = () => {
    gsap.to(".modal-content", {
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setSelectedProject(null)
    });
    gsap.to(".modal-overlay", { opacity: 0, duration: 0.3 });
  };

  const ProjectCard = ({ work }) => (
    <div
      onClick={() => openModal(work)}
      className="work-card group relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-slate-800/50 cursor-pointer transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:border-indigo-500/30 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={work.imagePath}
          alt={work.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest shadow-sm">
            {work.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-outfit uppercase">
          {work.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-light mb-6 line-clamp-3">
          {work.desc}
        </p>

        <div className="mt-auto">
          <div className="inline-flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest group-hover:text-indigo-500 transition-colors">
            View Details <Zap className="w-3 h-3 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="work" ref={containerRef} className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-title flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight uppercase">
              Creative <span className="text-indigo-600">Showcase</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium">
              A curated collection of digital experiences, focusing on
              <span className="text-indigo-600 dark:text-indigo-400 font-bold"> performance, scalability, and clean UI</span>.
            </p>
          </div>

          <div className="md:block">
            <a
              href="https://github.com/athulcoder"
              target="_blank"
              className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full transition-all duration-300 shadow-sm"
            >
              <Github className="w-4 h-4 text-gray-900 dark:text-white" />
              <span className="text-gray-900 dark:text-white font-medium uppercase text-xs tracking-widest">Explore Archive</span>
            </a>
          </div>
        </div>

        {/* Freelance Projects Section */}
        {freelanceWorks.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/10 pb-4">
              Freelancing Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freelanceWorks.map((work) => (
                <ProjectCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects Section */}
        {personalWorks.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/10 pb-4">
              Personal Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalWorks.map((work) => (
                <ProjectCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        )}

        {/* See More Button */}
        <div className="mt-20 flex justify-center">
          <a 
            href="https://github.com/athulcoder" 
            target="_blank" 
            className="flex items-center justify-center gap-4 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-indigo-600/30"
          >
            <Github className="w-5 h-5" /> See more in GitHub
          </a>
        </div>
      </div>

      {/* Project Modal/Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            onClick={closeModal}
            className="modal-overlay absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="modal-content relative w-full max-w-5xl h-[85vh] bg-white dark:bg-[#0d0d0d] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row z-[101] overflow-hidden">
            {/* Modal Visual Area */}
            <div className="w-full md:w-2/5 h-64 md:h-full relative bg-gray-100 dark:bg-black/40 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 shrink-0">
              <img
                src={selectedProject.imagePath}
                alt={selectedProject.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content area */}
            <div 
              data-lenis-prevent="true"
              className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar font-outfit"
            >
              <div className="flex justify-between items-start mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shrink-0 ml-4"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">
                    <Zap className="w-4 h-4" /> The Challenge
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium italic border-l-4 border-indigo-500/40 pl-6 py-2">
                    "{selectedProject.problemStatement}"
                  </p>
                </div>

                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">
                    The Solution
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed font-light">
                    {selectedProject.detailedSolution}
                  </p>
                </div>

                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:shadow-md transition-shadow duration-300"
                      >
                        <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                        <span className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100 dark:border-white/10">
                  {selectedProject.previewUrl && (
                    <a
                      href={selectedProject.previewUrl}
                      target="_blank"
                      className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-colors shadow-lg shadow-indigo-600/30"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      className="flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-colors border border-gray-200 dark:border-white/10"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowcaseSection;
