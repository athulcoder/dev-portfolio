import React, { useEffect, useRef, useState } from "react";
import { FaJava } from "react-icons/fa";
import { SiPython, SiJavascript, SiCplusplus, SiC } from "react-icons/si";

const skills = [
  { name: "Python", years: "2 years", icon: SiPython, color: "#22c55e" },
  {
    name: "JavaScript",
    years: "2 years",
    icon: SiJavascript,
    color: "#facc15",
  },
  { name: "C++", years: "2 years", icon: SiCplusplus, color: "#3b82f6" },
  { name: "C", years: "2 years", icon: SiC, color: "#9ca3af" },
  { name: "Java", years: "2 years", icon: FaJava, color: "#ef4444" },
];

// Maze-like open path
const PATH = "M 50 250 V 50 H 250 V 250 H 450 V 50";

const FLOW_SPEED_MS = 6000;

const SkillPath = () => {
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
    <div className="w-full max-w-6xl mx-auto px-6 py-14 bg-black rounded-xl shadow-xl relative">
      <div className="absolute top-5 left-6 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <h2 className="text-white text-4xl sm:text-5xl font-bold text-center mb-10">
        Languages
      </h2>

      {/* Responsive SVG wrapper */}
      <div className="w-full overflow-x-auto flex justify-center">
        <svg
          viewBox="0 0 500 300"
          className="w-[650px] sm:w-[700px] md:w-[800px] lg:w-[900px] max-w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="snakeGrad" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Thin path */}
          <path
            ref={pathRef}
            d={PATH}
            fill="none"
            stroke="#374151"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Snake glow */}
          <path
            d={PATH}
            fill="none"
            stroke="url(#snakeGrad)"
            strokeWidth="5"
            strokeDasharray="40 900"
            strokeDashoffset={-snakePos * 900}
            style={{ filter: "drop-shadow(0 0 6px #3b82f6)" }}
          />

          {/* Nodes */}
          {positions.map((p, i) => {
            const Icon = skills[i].icon;
            const glow = activeIndex === i;

            return (
              <g
                key={i}
                transform={`translate(${p.x}, ${p.y})`}
                style={{ transition: "0.3s" }}
              >
                <circle
                  r="20"
                  fill="#0f172a"
                  stroke={glow ? "url(#snakeGrad)" : "#475569"}
                  strokeWidth={glow ? 5 : 3}
                  style={{
                    filter: glow ? "drop-shadow(0 0 12px #3b82f6)" : "none",
                    transition: "0.3s",
                  }}
                />

                {/* Icon */}
                <foreignObject x="-14" y="-14" width="28" height="28">
                  <Icon
                    style={{
                      color: glow ? skills[i].color : "#ffffff",
                      width: "28px",
                      height: "28px",
                      transition: "0.3s",
                    }}
                  />
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Labels below (fully responsive grid) */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {skills.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <span
              className={`font-semibold text-base sm:text-lg ${
                activeIndex === i ? "text-white" : "text-gray-300"
              }`}
            >
              {s.name}
            </span>
            {/* <span className="text-xs text-gray-500">{s.years}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPath;
