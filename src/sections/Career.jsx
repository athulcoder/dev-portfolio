import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Code, Rocket, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const careerData = [
  {
    year: "2026 – Present",
    title: "Software Engineer (Contract)",
    company: "Infocreon Solutions Private Limited",
    desc: "Working on real-world production systems and scalable applications, focused on delivering high-performance backend and frontend solutions.",
    icon: <Briefcase className="w-5 h-5" />,
    image: "/images/exp1.png",
    color: "#3b82f6",
  },
  {
    year: "2026 – 2027",
    title: "Technical Subcommittee Member",
    company: "IEDC (Innovation and Entrepreneurship Development Cell)",
    desc: "Contributing to technical initiatives and innovation-driven projects, fostering an entrepreneurial spirit through tech excellence.",
    icon: <Users className="w-5 h-5" />,
    image: "/images/exp2.png",
    color: "#10b981",
  },
  {
    year: "2025 – 2026",
    title: "AV Subcommittee Member",
    company: "MITS Media Club",
    desc: "Handled media production, editing, and event technical support, ensuring high-quality broadcast and production for university events.",
    icon: <Rocket className="w-5 h-5" />,
    image: "/images/exp3.png",
    color: "#f59e0b",
  },
  {
    year: "2020 – Present",
    title: "Freelance Developer",
    company: "Self-Employed",
    desc: "Delivered web applications and client-based solutions across multiple domains, specializing in modern full-stack development and custom business tools.",
    icon: <Code className="w-5 h-5" />,
    image: "/images/logo1.png",
    color: "#8b5cf6",
  },
  {
    year: "2019 – 2020",
    title: "Early Development Phase",
    company: "Python & Web Development",
    desc: "Built projects including Instagram clones, e-commerce platforms, and portfolio websites while strengthening core programming skills and logic.",
    icon: <GraduationCap className="w-5 h-5" />,
    image: "/images/logo2.png",
    color: "#ef4444",
  },
];

const Career = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const progressionRef = useRef(null);

  useGSAP(() => {
    // Timeline progression animation
    gsap.fromTo(progressionRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1,
        }
      }
    );

    // Staggered reveal for cards
    gsap.from(".career-card", {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? 50 : -50),
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".career-cards-container",
        start: "top 70%",
      }
    });

    // Node scale animation
    gsap.from(".timeline-node", {
      scale: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".career-cards-container",
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
      id="experience"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">Journey</span>
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Backbone */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <div
              ref={progressionRef}
              className="absolute inset-0 bg-linear-to-b from-blue-500 via-emerald-400 to-purple-500 origin-top h-full"
            />
          </div>

          <div className="career-cards-container space-y-32">
            {careerData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-between md:justify-normal group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="timeline-node absolute left-[20px] md:left-1/2 md:-translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-black border-2 border-white/20 flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-500 overflow-hidden relative">
                       <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: item.color }}
                       />
                       <div className="relative z-10 text-white/50 group-hover:text-white transition-colors duration-500">
                        {item.icon}
                       </div>
                    </div>
                  </div>

                  {/* Card Side */}
                  <div className="career-card w-[calc(100%-80px)] md:w-[45%] ml-auto md:ml-0">
                    <div className="group relative bg-white/3 backdrop-blur-3xl border border-white/5 p-10 rounded-[3rem] hover:border-white/20 transition-all duration-700 shadow-2xl">
                      {/* Company Image/Logo Placeholder */}
                      <div className="absolute -right-6 -top-6 w-32 h-32 opacity-5 group-hover:opacity-20 transition-all duration-700 grayscale pointer-events-none transform group-hover:rotate-12 group-hover:scale-110">
                        <img src={item.image} alt="logo" className="w-full h-full object-contain" />
                      </div>

                      <div className="relative z-10">
                        <span className="text-emerald-400 font-black uppercase tracking-[4px] text-xs mb-6 block">
                          {item.year}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase leading-none font-outfit">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 font-bold text-xl mb-8 tracking-wide">
                           {item.company}
                        </p>
                        <p className="text-gray-500 leading-relaxed italic opacity-80 group-hover:opacity-100 group-hover:text-gray-300 transition-all duration-500 text-lg border-l-2 border-white/10 pl-6">
                          "{item.desc}"
                        </p>
                      </div>

                      {/* Card Hover Glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-[3rem]"
                        style={{ background: `radial-gradient(circle at center, ${item.color} 0%, transparent 80%)` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;