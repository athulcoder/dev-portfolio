import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiPython, SiJavascript, SiCplusplus, SiReact, SiNextdotjs, SiNodedotjs, 
  SiFastapi, SiMongodb, SiPrisma, SiGooglecloud, SiDocker, 
  SiAmazonwebservices, SiDotnet, SiOracle, SiIntellijidea, SiPycharm, 
  SiGnubash, SiVim, SiAndroidstudio, SiTailwindcss
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { LuRocket, LuWifi, LuBatteryFull } from "react-icons/lu";
import { FaSignal } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const apps = [
  // IDEs & Tools
  { name: "VS Code", category: "IDEs", icon: VscVscode, color: "#007acc", bg: "bg-white dark:bg-[#1e1e1e]" },
  { name: "IntelliJ", category: "IDEs", icon: SiIntellijidea, color: "#000000", bg: "bg-white" },
  { name: "PyCharm", category: "IDEs", icon: SiPycharm, color: "#000000", bg: "bg-white" },
  { name: "Nano", category: "IDEs", icon: SiGnubash, color: "#ffffff", bg: "bg-zinc-800" },
  { name: "Vim", category: "IDEs", icon: SiVim, color: "#019733", bg: "bg-white" },
  { name: "Antigrav", category: "IDEs", icon: LuRocket, color: "#ffffff", bg: "bg-indigo-600" },
  { name: "Android", category: "IDEs", icon: SiAndroidstudio, color: "#3DDC84", bg: "bg-white" },
  
  // Core
  { name: "Java", category: "Core", icon: FaJava, color: "#f8981d", bg: "bg-white" },
  { name: "Python", category: "Core", icon: SiPython, color: "#3776ab", bg: "bg-slate-100" },
  { name: "C++", category: "Core", icon: SiCplusplus, color: "#00599c", bg: "bg-white" },
  { name: "JS", category: "Core", icon: SiJavascript, color: "#f7df1e", bg: "bg-black" },

  // Web
  { name: "React", category: "Web", icon: SiReact, color: "#61dafb", bg: "bg-zinc-900" },
  { name: "Next.js", category: "Web", icon: SiNextdotjs, color: "#ffffff", bg: "bg-black" },
  { name: "Tailwind", category: "Web", icon: SiTailwindcss, color: "#06b6d4", bg: "bg-slate-800" },
  
  // Backend
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933", bg: "bg-white" },
  { name: "FastAPI", category: "Backend", icon: SiFastapi, color: "#05998b", bg: "bg-white" },
  { name: "MongoDB", category: "Backend", icon: SiMongodb, color: "#47a248", bg: "bg-black" },
  { name: "Prisma", category: "Backend", icon: SiPrisma, color: "#ffffff", bg: "bg-indigo-900" },
  { name: ".NET", category: "Backend", icon: SiDotnet, color: "#ffffff", bg: "bg-[#512bd4]" },

  // Cloud
  { name: "Docker", category: "Cloud", icon: SiDocker, color: "#2496ed", bg: "bg-white" },
  { name: "AWS", category: "Cloud", icon: SiAmazonwebservices, color: "#ff9900", bg: "bg-slate-900" },
  { name: "GCP", category: "Cloud", icon: SiGooglecloud, color: "#4285f4", bg: "bg-white" },
  { name: "Azure", category: "Cloud", icon: VscAzure, color: "#0089d6", bg: "bg-white" },
  { name: "Oracle", category: "Cloud", icon: SiOracle, color: "#f80000", bg: "bg-white" },
];

const categories = ["All", "IDEs", "Core", "Web", "Backend", "Cloud"];

const AppIcon = ({ app, onClick }) => {
  const Icon = app.icon;
  return (
    <div onClick={onClick} className="app-icon flex flex-col items-center gap-1.5 group cursor-pointer w-16">
      <div className={`w-14 h-14 md:w-16 md:h-16 ${app.bg} rounded-[1.2rem] shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 active:scale-95`}>
        <Icon className="text-3xl md:text-4xl" style={{ color: app.color }} />
      </div>
      <span className="text-white text-[10px] md:text-[11px] font-medium tracking-wide drop-shadow-md truncate w-full text-center">
        {app.name}
      </span>
    </div>
  );
};

const funnyMessages = [
  "Bro, what are you supposed to do with a phone inside a website? Hahah 😭",
  "Did you really try to open that? It's a portfolio, not an App Store! 💀",
  "Loading... just kidding. It's just a div, bro. 🤣",
  "You tapped it! ...And absolutely nothing happened. ✨",
  "Stop poking the screen, it's not a touchscreen! Wait, are you on mobile? 🤔",
  "Access denied! Just kidding, it's an icon. 🤓",
  "404: App not found. Please try blowing into the cartridge. 🎮"
];

const Languages = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState("9:41");
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    
    // Update time for the phone status bar
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(' AM', '').replace(' PM', ''));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAppClick = () => {
    const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setToastMessage(randomMsg);
    
    // Clear any existing timeout and hide toast after 3s
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const filteredApps = activeCategory === "All" ? apps : apps.filter(app => app.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo(".phone-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".app-icon", 
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="w-full py-24 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300" 
      id="skill"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 flex flex-col text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Tools & <span className="text-indigo-600 dark:text-indigo-400">Applications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            I don't just write code; I orchestrate an ecosystem of powerful tools to build scalable, high-performance applications. 
            From the terminal to the cloud, my workspace is optimized for delivering exceptional results.
          </p>
        </div>

        {/* Right Side: iOS Mobile Mockup */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="phone-container relative w-[320px] md:w-[360px] h-[650px] md:h-[720px] bg-black rounded-[3rem] p-3 md:p-3.5 shadow-2xl ring-1 ring-gray-900/20 dark:ring-white/10">
            {/* Phone Screen */}
            <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden">
              
              {/* Wallpaper */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="Wallpaper" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

              {/* Status Bar */}
              <div className="absolute top-0 w-full h-12 flex justify-between items-center px-6 z-30 text-white pointer-events-none">
                <span className="text-sm font-semibold">{time}</span>
                <div className="flex items-center gap-1.5">
                  <FaSignal size={12} />
                  <LuWifi size={14} />
                  <LuBatteryFull size={16} />
                </div>
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-between px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/20 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
              </div>

              {/* Toast Notification */}
              <div className={`absolute top-16 left-1/2 -translate-x-1/2 w-[85%] bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-4 z-50 shadow-2xl transition-all duration-300 ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <p className="text-white text-xs text-center font-medium leading-relaxed">{toastMessage}</p>
              </div>

              {/* Category Filter */}
              <div className="absolute top-12 w-full px-3 z-30 flex gap-2 overflow-x-auto scrollbar-hide py-2">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-300 ${activeCategory === cat ? 'bg-white/90 text-black shadow-md' : 'bg-black/30 text-white/80 border border-white/10 hover:bg-black/50 backdrop-blur-md'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Apps Grid - Scrollable */}
              <div className="absolute inset-0 pt-28 pb-40 px-4 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col z-10">
                <div className="grid grid-cols-4 gap-y-6 place-items-center pb-8">
                  {filteredApps.map((app, idx) => (
                    <AppIcon key={idx} app={app} onClick={handleAppClick} />
                  ))}
                </div>
              </div>

              {/* Dock */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] h-[84px] bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] z-30 flex items-center justify-evenly px-2">
                 <AppIcon app={{ name: "Phone", icon: SiGnubash, color: "#ffffff", bg: "bg-green-500" }} onClick={handleAppClick} />
                 <AppIcon app={{ name: "Safari", icon: SiReact, color: "#ffffff", bg: "bg-blue-500" }} onClick={handleAppClick} />
                 <AppIcon app={{ name: "Mail", icon: SiNextdotjs, color: "#000000", bg: "bg-white" }} onClick={handleAppClick} />
                 <AppIcon app={{ name: "Camera", icon: LuRocket, color: "#ffffff", bg: "bg-indigo-500" }} onClick={handleAppClick} />
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/50 rounded-full z-40"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Languages;
