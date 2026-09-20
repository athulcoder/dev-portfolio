import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TerminalLine = ({ command, response, delay = 0 }) => {
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(textRef.current, {
      text: command,
      duration: 1,
      delay,
      ease: "none",
    }).fromTo(
      lineRef.current.querySelector(".response"),
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "+=0.2"
    );
  }, [command, delay]);

  return (
    <div ref={lineRef} className="mb-6 font-medium text-sm md:text-base">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
        <span className="text-slate-800 dark:text-slate-200" ref={textRef}></span>
        <span className="w-1.5 h-5 bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
      </div>
      <div className="response mt-2 text-slate-500 dark:text-slate-400 opacity-0 leading-relaxed">{response}</div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const terminalRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useGSAP(() => {
    // Entrance animation for terminal
    gsap.from(terminalRef.current, {
      x: isMobile ? -30 : -100,
      opacity: 0,
      duration: isMobile ? 0.8 : 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: terminalRef.current,
        start: "top 80%",
      },
    });

    // Entrance animation for image
    gsap.from(imageRef.current, {
      x: isMobile ? 30 : 100,
      opacity: 0,
      duration: isMobile ? 0.8 : 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });

    // Floating animation for image — ONLY on desktop (infinite animation kills mobile perf)
    if (!isMobile) {
      gsap.to(imageRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white dark:bg-black-100 min-h-screen flex items-center overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: TERMINAL */}
          <div className="lg:col-span-7" ref={terminalRef}>
            <div className="max-w-2xl w-full">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-slate-900 dark:text-white leading-tight">
                Beyond the <span className="text-indigo-600 dark:text-indigo-400">Keyboard</span>
              </h2>

              {/* Clean SaaS Card look */}
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none p-8 md:p-10 min-h-[300px]">
                {/* Content */}
                <TerminalLine
                  command="Who am I?"
                  response="Hi, I’m Athul Sabu, a BTech Computer Science student at Muthoot Institute of Technology and Science | Full Stack Developer & Tech Enthusiast"
                  delay={0.5}
                />
                <TerminalLine
                  command="Core Skills"
                  response="React.js, Node.js, Express.js, Flask, GSAP, TailwindCSS, Next.js, Python, Git, Docker, GCP, AWS, Vercel"
                  delay={2.5}
                />
                <TerminalLine
                  command="Location"
                  response="Kochi, Kerala, India"
                  delay={4.5}
                />
                <TerminalLine
                  command="Current Status"
                  response="Always learning, building, and pushing boundaries."
                  delay={6.5}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="lg:col-span-5 flex justify-center relative" ref={imageRef}>
            <div className="relative w-full max-w-md aspect-[4/5]">
              {/* Decorative background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/10 blur-[100px] rounded-full"></div>

              <img
                src="/athulcoder-top.jpg"
                alt="Athul Sabu"
                loading="lazy"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_20px_rgba(131,156,181,0.3)] rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
