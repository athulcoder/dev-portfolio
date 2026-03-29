import React, { useEffect, useRef, useState } from "react";
import { FaJava } from "react-icons/fa";
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import NeomorphicCard from "../components/NeomorphicCard";

const skills = [
  { name: "Python", years: "4 years", icon: SiPython, color: "#3776ab" },
  { name: "JavaScript", years: "3 years", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", years: "2 years", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", years: "2 years", icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", years: "1 year", icon: SiNextdotjs, color: "#000000" },
  { name: "MongoDB", years: "2 years", icon: SiMongodb, color: "#47a248" },
  { name: "C++", years: "5 years", icon: SiCplusplus, color: "#00599c" },
  { name: "Tailwind", years: "2 years", icon: SiTailwindcss, color: "#06b6d4" },
];

const PATH = "M 50 250 V 50 H 250 V 250 H 450 V 50";
const FLOW_SPEED_MS = 6000;

const Languages = () => {
  const pathRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [snakePos, setSnakePos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    const stops = [0.05, 0.25, 0.5, 0.75, 0.95];
    const pts = stops.map((p) => pathRef.current.getPointAtLength(length * p));
    setPositions(pts);

    let start = Date.now();
    const animate = () => {
      const t = ((Date.now() - start) % FLOW_SPEED_MS) / FLOW_SPEED_MS;
      setSnakePos(t);
      stops.forEach((pct, idx) => {
        if (Math.abs(t - pct) < 0.05) setActiveIndex(idx);
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section id="skill" className="py-20 px-5 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">Languages</h2>
        
        <NeomorphicCard className="nm-inset p-10 flex flex-col items-center overflow-visible">
          <div className="w-full overflow-x-auto flex justify-center mb-10">
            <svg
              viewBox="0 0 500 300"
              className="w-[100%] max-w-[800px] h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>

              <path
                ref={pathRef}
                d={PATH}
                fill="none"
                stroke="currentColor"
                className="text-primary/10"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d={PATH}
                fill="none"
                stroke="url(#snakeGrad)"
                strokeWidth="6"
                strokeDasharray="40 900"
                strokeDashoffset={-snakePos * 900}
                style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" }}
              />

              {positions.map((p, i) => {
                const Icon = skills[i].icon;
                const glow = activeIndex === i;
                return (
                  <g key={i} transform={`translate(${p.x}, ${p.y})`} style={{ transition: "0.5s" }}>
                    <circle
                      r="25"
                      stroke="currentColor"
                      strokeWidth={glow ? 4 : 2}
                      className={`${glow ? "fill-primary text-primary" : "fill-card text-primary/10"} nm-convex transition-all duration-300`}
                    />
                    <foreignObject x="-15" y="-15" width="30" height="30">
                      <Icon className={`w-full h-full transition-all duration-300 ${glow ? "text-white" : "text-primary/40"}`} />
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 w-full">
            {skills.map((s, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 group p-4 rounded-2xl ${activeIndex === i ? 'nm-convex' : ''} transition-all duration-300`}>
                <s.icon className={`text-3xl transition-colors duration-300 ${activeIndex === i ? 'text-primary' : 'text-primary/30'}`} />
                <span className={`font-bold transition-colors duration-300 ${activeIndex === i ? 'text-primary' : 'text-primary/40'}`}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </NeomorphicCard>
      </div>
    </section>
  );
};

export default Languages;
