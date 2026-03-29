import { works } from "../constants";
import React from "react";
import NeomorphicCard from "../components/NeomorphicCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ShowcaseSection = () => {
  return (
    <section id="work" className="py-20 px-5 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 underline decoration-blue-500 decoration-8 underline-offset-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work, i) => (
            <NeomorphicCard key={i} className="group p-0 overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={work.imagePath} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  {work.githubUrl && (
                    <a href={work.githubUrl} target="_blank" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors">
                      <FaGithub className="text-white text-2xl" />
                    </a>
                  )}
                  {work.previewUrl && (
                    <a href={work.previewUrl} target="_blank" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors">
                      <FaExternalLinkAlt className="text-white text-xl" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                <p className="text-primary/70 mb-8 flex-1 text-lg leading-relaxed">
                  {work.desc}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-primary/5">
                  {work.githubUrl && (
                    <a 
                      href={work.githubUrl} 
                      target="_blank" 
                      className="flex-1 flex justify-center items-center py-3 rounded-xl nm-convex hover:nm-flat transition-all duration-300 gap-2 font-bold text-sm"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {work.previewUrl && (
                    <a 
                      href={work.previewUrl} 
                      target="_blank" 
                      className="flex-1 flex justify-center items-center py-3 rounded-xl nm-convex hover:nm-flat transition-all duration-300 gap-2 font-bold text-sm text-blue-500"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </NeomorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
