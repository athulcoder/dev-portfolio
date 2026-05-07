import React, { useRef } from "react";
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
    <div ref={lineRef} className="mb-4 font-mono text-sm md:text-base">
      <div className="flex items-center gap-2">
        <span className="text-green-400">$</span>
        <span className="text-white" ref={textRef}></span>
        <span className="w-2 h-5 bg-white/50 animate-pulse"></span>
      </div>
      <div className="response mt-1 text-blue-300 opacity-0">{response}</div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const terminalRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Entrance animation for terminal
    gsap.from(terminalRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: terminalRef.current,
        start: "top 80%",
      },
    });

    // Entrance animation for image
    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-black-100 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: TERMINAL */}
          <div className="lg:col-span-7" ref={terminalRef}>
            <div className="max-w-2xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white leading-tight">
                Beyond the <span className="text-blue-50">Keyboard</span>
              </h2>

              {/* macOS Terminal look */}
              <div className="bg-black-200/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                {/* Toolbar */}
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-white/40 font-mono">athul@macbook — -zsh</div>
                  <div className="w-12"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 min-h-[300px]">
                  <TerminalLine
                    command="whoami"
                    response="Athul Sabu | Full Stack Developer & Tech Enthusiast"
                    delay={0.5}
                  />
                  <TerminalLine
                    command="ls skills/"
                    response="React.js, Node.js, Express.js, Flask, GSAP, TailwindCSS, Next.js, Python, Git, Docker,GCP,AWS,Vercel"
                    delay={2.5}
                  />
                  <TerminalLine
                    command="cat location.txt"
                    response="Kochi, Kerala, India"
                    delay={4.5}
                  />
                  <TerminalLine
                    command="echo $STATUS"
                    response="Always learning, building, and pushing boundaries."
                    delay={6.5}
                  />
                </div>
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
