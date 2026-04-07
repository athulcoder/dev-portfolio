import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { 
  SiPython, SiJavascript, SiCplusplus, SiC, SiHtml5, SiCss3, 
  SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiFlask, SiFastapi, SiMongodb, SiPostgresql, SiPrisma, 
  SiGooglecloud, SiDocker, SiAmazonwebservices 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Core Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f8981d" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    ]
  },
  {
    title: "Frontend Stack",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    ]
  },
  {
    title: "Backend Stack",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998b" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
      { name: "GCS", icon: SiGooglecloud, color: "#4285f4" },
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#ff9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4" },
    ]
  }
];

const SkillNode = ({ skill, index, categoryIndex }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (categoryIndex * 0.2) + (index * 0.1), duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="relative group p-4 flex flex-col items-center justify-center"
    >
      <div 
        className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-white/30 transition-all duration-300"
        style={{ boxShadow: `0 0 20px ${skill.color}20` }}
      >
        <Icon 
          className="text-3xl md:text-4xl transition-colors duration-300" 
          style={{ color: skill.color }} 
        />
      </div>
      <span className="mt-2 text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Languages = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="w-full py-24 bg-black relative overflow-hidden" 
      id="skill"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Pathway <span className="text-gray-500">of Mastery</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto md:mx-0"
          />
        </header>

        <div className="relative">
          {/* SVG Connector Path - Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none translate-y-12">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1200 1000" 
              fill="none" 
              className="opacity-20"
            >
              {/* Main Winding Path */}
              <motion.path
                d="M50,100 H1150 Q1200,100 1200,150 V200 Q1200,250 1150,250 H50 Q0,250 0,300 V350 Q0,400 50,400 H1150 Q1200,400 1200,450 V500 Q1200,550 1150,550 H50"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 8"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="space-y-16 lg:space-y-32">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx} className="relative">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-4"
                >
                  <span className="w-8 h-px bg-gray-700" />
                  {category.title}
                  <span className="flex-1 h-px bg-gray-700/30" />
                </motion.h3>

                <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-6 md:gap-10`}>
                  {category.skills.map((skill, idx) => (
                    <SkillNode 
                      key={idx} 
                      skill={skill} 
                      index={idx} 
                      categoryIndex={catIdx} 
                    />
                  ))}
                </div>

                {/* Vertical Connector for Mobile */}
                {catIdx < skillCategories.length - 1 && (
                  <div className="lg:hidden flex justify-center py-8">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "4rem" }}
                      viewport={{ once: true }}
                      className="w-0.5 border-r-2 border-dashed border-gray-800"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

