import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, GraduationCap, Code, Rocket, Users } from "lucide-react";

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-black overflow-hidden"
      id="experience"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"
          />
        </div>

        <div className="relative">
          {/* Timeline Backbone */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div
              style={{ scaleY: pathHeight }}
              className="absolute inset-0 bg-gradient-to-b from-blue-500 via-emerald-400 to-purple-500 origin-top"
            />
          </div>

          <div className="space-y-24">
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
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-black border-2 border-white/20 flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-500 overflow-hidden relative"
                    >
                       <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: item.color }}
                       />
                       <div className="relative z-10 text-white/50 group-hover:text-white transition-colors duration-500">
                        {item.icon}
                       </div>
                    </motion.div>
                  </div>

                  {/* Card Side */}
                  <div className="w-[calc(100%-80px)] md:w-[45%] ml-auto md:ml-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 rounded-[2rem] hover:border-white/20 transition-all duration-500"
                    >
                      {/* Company Image/Logo Placeholder */}
                      <div className="absolute -right-4 -top-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500 grayscale pointer-events-none">
                        <img src={item.image} alt="logo" className="w-full h-full object-contain" />
                      </div>

                      <div className="relative z-10">
                        <span className="text-emerald-400 font-bold tracking-widest text-sm mb-4 block">
                          {item.year}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 font-medium text-lg mb-6">
                           {item.company}
                        </p>
                        <p className="text-gray-400 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                          "{item.desc}"
                        </p>
                      </div>

                      {/* Card Hover Glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle at center, ${item.color} 0%, transparent 70%)` }}
                      />
                    </motion.div>
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