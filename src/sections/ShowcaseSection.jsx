import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/constants";
import { X, ExternalLink, Github, Zap, Info } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".work-card", 
      { opacity: 0, scale: 0.95, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".section-title h2", 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  const openModal = (work) => {
    setSelectedProject(work);
    gsap.fromTo(".modal-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(".modal-content",
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.1 }
    );
  };

  const closeModal = () => {
    gsap.to(".modal-content", {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setSelectedProject(null)
    });
    gsap.to(".modal-overlay", { opacity: 0, duration: 0.3 });
  };

  return (
    <section id="work" ref={containerRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-title flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-outfit uppercase">
              Creative <span className="text-gray-500 italic lowercase">Showcase</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              A curated collection of digital experiences, focusing on
              <span className="text-emerald-400 font-medium"> performance, scalability, and cinematic UI</span>.
            </p>
          </div>

          <div className=" md:block">
            <a
              href="https://github.com/athulcoder"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <Github className="w-5 h-5 text-white" />
              <span className="text-white font-medium uppercase text-xs tracking-[2px]">Explore Archive</span>
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {works.map((work, index) => (
            <div
              key={work.id}
              onClick={() => openModal(work)}
              className={`work-card group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 cursor-pointer backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 shadow-2xl ${work.featured ? "md:col-span-2 lg:row-span-2" : ""
                }`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={work.imagePath}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Card Header Tag */}
              <div className="absolute top-8 left-8 z-10">
                <span className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/10 inline-block rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-[3px]">
                  {work.category}
                </span>
              </div>

              {/* Card Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex flex-col justify-end bg-linear-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight font-outfit uppercase">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-light mb-6">
                  {work.desc}
                </p>

                <div className="flex items-center gap-4">
                  <div className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-[2px] transition-colors duration-300 backdrop-blur-md">
                    View Project <Zap className="inline-block w-3 h-3 ml-2" />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-emerald-500/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-20 flex justify-center">
          <a 
            href="https://github.com/athulcoder" 
            target="_blank" 
            className="flex items-center justify-center gap-4 px-10 py-5 bg-white hover:bg-gray-200 text-black font-extrabold uppercase tracking-[2px] text-sm md:text-base rounded-full transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Github className="w-6 h-6" /> See more in GitHub
          </a>
        </div>
      </div>

      {/* Project Modal/Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div
            onClick={closeModal}
            className="modal-overlay absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          <div className="modal-content relative w-full max-w-6xl h-[90vh] overflow-hidden bg-[#0d0d0d] border border-white/10 rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row z-101">
            {/* Modal Visual Area */}
            <div className="w-full md:w-[45%] h-[40%] md:h-full relative bg-black/40 overflow-hidden border-b md:border-b-0 md:border-r border-white/10 shrink-0">
              <img
                src={selectedProject.imagePath}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d] via-transparent to-transparent" />

              <div className="absolute top-12 left-12">
                <span className="px-8 py-3 bg-emerald-500/20 backdrop-blur-2xl border border-emerald-500/40 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-[4px]">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content area */}
            <div 
              data-lenis-prevent="true"
              className="w-full md:w-[55%] p-10 md:p-16 overflow-y-auto bg-linear-to-br from-[#0d0d0d] to-black custom-scrollbar font-outfit"
            >
              <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight uppercase">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-16">
                {/* Problem Statement */}
                <div>
                  <h4 className="flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-[3px] text-[10px] mb-6">
                    <Zap className="w-4 h-4 fill-emerald-400" /> The Challenge
                  </h4>
                  <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light italic opacity-90 border-l-[6px] border-emerald-500/40 pl-8 py-3 bg-white/5 rounded-r-2xl">
                    "{selectedProject.problemStatement}"
                  </p>
                </div>

                {/* Detailed Solution */}
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-[3px] text-[10px] mb-6 pl-2 border-l-2 border-white/20">
                    The Solution
                  </h4>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                    {selectedProject.detailedSolution}
                  </p>
                </div>

                {/* Tech Stack Icons */}
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-[3px] text-[10px] mb-8">
                    Tools of the Trade
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/tech flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all duration-500"
                      >
                        <tech.icon className="w-7 h-7 transition-transform duration-500 group-hover/tech:scale-125" style={{ color: tech.color }} />
                        <span className="text-white text-xs font-bold uppercase tracking-[2px]">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-6 pt-12 border-t border-white/10">
                  {selectedProject.previewUrl && (
                    <a
                      href={selectedProject.previewUrl}
                      target="_blank"
                      className="flex items-center gap-4 px-12 py-6 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold uppercase tracking-[2px] text-xs rounded-2xl transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transform hover:-translate-y-2"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Experience
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex items-center gap-4 px-12 py-6 bg-white/5 hover:bg-white/1 hover:text-white text-gray-300 font-extrabold uppercase tracking-[2px] text-xs rounded-2xl transition-all duration-500 border border-white/10 hover:border-white/30 transform hover:-translate-y-2"
                  >
                    <Github className="w-5 h-5" /> Source Code
                  </a>
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
