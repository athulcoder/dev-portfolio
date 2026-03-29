import React from "react";
import { achievements } from "../constants";
import NeomorphicCard from "../components/NeomorphicCard";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-5 md:px-20 bg-background overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-20">
          Key Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {achievements.map((item, i) => (
            <NeomorphicCard key={i} className="group p-0 overflow-hidden flex flex-col h-full rounded-3xl" variant="flat">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary font-bold text-sm">
                    {item.year}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-primary/70 mb-8 flex-1 text-lg leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="flex gap-4 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-xl nm-convex text-xs font-bold tracking-widest uppercase text-primary/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NeomorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
