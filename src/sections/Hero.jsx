import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NeomorphicCard from "../components/NeomorphicCard";

const Hero = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-title span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out"
    })
    .from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(".hero-cta", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.3");
  }, { scope: containerRef });

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative flex-center px-5 md:px-20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10">
        {/* Profile Image & Visual Element */}
        <div className="hero-visual relative w-64 h-64 md:w-96 md:h-96 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-20 animate-pulse" />
          <NeomorphicCard className="w-full h-full rounded-full p-2 overflow-hidden border-4 border-white/10" variant="flat">
            <img 
              src="/images/person.png" 
              alt="Athul Sabu" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </NeomorphicCard>
          {/* Floating Element */}
          <div className="absolute -bottom-4 -right-4 nm-convex p-4 rounded-2xl animate-bounce">
            <span className="text-2xl">🚀</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <NeomorphicCard className="inline-block mb-8 px-6 py-2 rounded-full nm-convex">
            <span className="text-sm font-bold tracking-widest uppercase text-primary/60">
              Founder @ MITS-PRINT
            </span>
          </NeomorphicCard>

          <h1 className="hero-title text-5xl md:text-9xl font-black tracking-tighter mb-6 flex flex-wrap justify-center md:justify-start gap-x-2">
            {"Athul Sabu".split("").map((char, i) => (
              <span key={i} className="inline-block">{char === " " ? "\u00A0" : char}</span>
            ))}
          </h1>

          <p className="hero-subtitle text-xl md:text-3xl text-primary/70 max-w-2xl mb-12 leading-tight font-medium">
            Building the future with <span className="text-blue-500">AI</span> & <span className="text-purple-500">Elegant Code</span>.
            Transforming complex systems into premium experiences.
          </p>

          <div className="hero-cta flex flex-wrap gap-6 justify-center md:justify-start">
            <a 
              href="#work" 
              className="px-12 py-5 rounded-3xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.05] transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See My Works
            </a>
            <a 
              href="/athul_sabu_resume.pdf" 
              target="_blank" 
              className="px-12 py-5 rounded-3xl nm-convex font-bold text-lg hover:nm-flat nm-transition border-2 border-primary/10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 bg-primary rounded-full" />
      </div>
    </section>
  );
};

export default Hero;

