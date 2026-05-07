import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiPython, SiJavascript, SiCplusplus, SiC, SiHtml5, SiCss3, 
  SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiFlask, SiFastapi, SiMongodb, SiPostgresql, SiPrisma, 
  SiGooglecloud, SiDocker, SiAmazonwebservices 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Core",
    skills: [
      { name: "Java", icon: FaJava, color: "#f8981d" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998b" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
    ]
  },
  {
    title: "Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#ff9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285f4" },
    ]
  }
];

const SkillCard = ({ skill, isMobile }) => {
  const Icon = skill.icon;
  const cardRef = useRef(null);
  const glintRef = useRef(null);

  // Mouse-follow glint effect — desktop only (useless on touch)
  const onMouseMove = (e) => {
    if (isMobile) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    gsap.to(glintRef.current, {
      opacity: 1,
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 80%)`,
      duration: 0.3
    });
  };

  const onMouseLeave = () => {
    if (isMobile) return;
    gsap.to(glintRef.current, { opacity: 0, duration: 0.5 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="skill-card relative group p-5 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 hover:border-white/30 hover:scale-[1.02] cursor-default overflow-hidden"
    >
      {!isMobile && (
        <div ref={glintRef} className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300" />
      )}
      <div className="relative z-10 flex items-center gap-4">
        <div 
          className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shadow-inner"
          style={{ boxShadow: `0 0 15px ${skill.color}15` }}
        >
          <Icon className="text-2xl" style={{ color: skill.color }} />
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold tracking-wide">{skill.name}</h4>
          <div className="w-12 h-1 bg-white/5 mt-1 rounded-full overflow-hidden">
             <div className="h-full bg-linear-to-r from-transparent to-white/20 animate-light-move" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Languages = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useGSAP(() => {
    gsap.fromTo(".skill-card", 
      { opacity: 0, y: isMobile ? 15 : 30 },
      {
        opacity: 1,
        y: 0,
        stagger: isMobile ? 0.03 : 0.05,
        duration: isMobile ? 0.5 : 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".skill-title", 
       { opacity: 0, x: -20 },
       {
         opacity: 1,
         x: 0,
         duration: 1,
         scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
         }
       }
    );
  }, { scope: containerRef, dependencies: [isMobile] });

  return (
    <section 
      ref={containerRef}
      className="w-full py-32 bg-black relative overflow-hidden" 
      id="skill"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <h2 className="skill-title text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
            The <span className="text-gray-500">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">A curated list of tools I use to build robust applications.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 pl-2 border-l-2 border-emerald-500/50">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} isMobile={isMobile} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
