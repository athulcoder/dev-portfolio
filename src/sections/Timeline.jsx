import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NeomorphicCard from '../components/NeomorphicCard';

gsap.registerPlugin(ScrollTrigger);

import { milestones } from '../constants';

const Timeline = () => {
  const lineRef = useRef();

  useGSAP(() => {
    // Progress line animation
    gsap.to('.timeline-progress', {
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      scaleY: 1,
      ease: 'none',
    });

    // Milestone animations
    gsap.utils.toArray('.milestone').forEach((milestone, i) => {
      gsap.from(milestone, {
        scrollTrigger: {
          trigger: milestone,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        x: i % 2 === 0 ? -30 : 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <section id="timeline" className="timeline-section relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-20 relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center">My Journey</h2>

        {/* Central Line Background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[150px] bottom-0 w-1 bg-primary/10 rounded-full" />
        
        {/* Animated Progress Line */}
        <div 
          className="timeline-progress absolute left-1/2 -translate-x-1/2 top-[150px] bottom-0 w-1 bg-primary/40 rounded-full origin-top scale-y-0"
          style={{ willChange: 'transform' }}
        />

        <div className="space-y-48 relative pt-20">
          {milestones.map((milestone, i) => (
            <div 
              key={i} 
              className={`milestone flex flex-col md:flex-row items-center w-full ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot on Line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-primary z-20 hidden md:blockShadow nm-convex" />
              
              <div className="w-full md:w-[45%]">
                <NeomorphicCard className={`overflow-hidden p-0 group hover:scale-[1.02] rounded-3xl nm-flat transition-all duration-300`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/90" />
                    <div className={`absolute bottom-4 ${i % 2 === 0 ? 'right-6' : 'left-6'}`}>
                      <p className="text-primary font-black text-2xl tracking-tighter drop-shadow-lg">
                        {milestone.year}
                      </p>
                    </div>
                  </div>
                  <div className={`p-8 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-primary/70 leading-relaxed italic text-lg">{milestone.desc}</p>
                  </div>
                </NeomorphicCard>
              </div>

              {/* Spacing for horizontal layout */}
              <div className="hidden md:block w-[10%]" />
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
