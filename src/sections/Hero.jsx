import React, { useState } from "react";
import { words } from "../constants";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroCardBackground } from "@/components/3DHeroModel";
import GithubCalendarComponent from "@/components/GithubCalendar";
import TerminalCommand from "../components/TerminalPortfolio";
import InteractiveTerminal from "../components/InteractiveTerminal";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-1000">
      {/* Animated Hover Background */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none mix-blend-multiply dark:mix-blend-screen ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 60%)'
        }}
      />
      
      <div className="absolute top-0 left-0 z-10 hidden dark:block opacity-50">
        <img src="/images/bg.png" alt="background" loading="lazy" />
      </div>

      <div className="relative z-10 xl:mt-20 mt-32 md:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between px-5 md:px-20">
        {/* LEFT :HERO CONTENT */}
        <header className="flex flex-col justify-center w-full">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-slate-900 dark:text-white font-extrabold tracking-tight">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-gray-200 dark:bg-white-50"
                        />
                        <span className="text-gray-900 dark:text-white">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-slate-600 dark:text-slate-300 md:text-xl relative z-999 pointer-events-none font-medium mt-4 max-w-lg">
              Hi, I am Athul Sabu, a developer based in India with passion for
              code.

            </p>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-6 z-999">
              <div className="md:w-52 h-14 w-44 cursor-pointer" onClick={() => window.open('/athul-sabu-resume.pdf', "_blank")}>
                <div className="w-full h-full rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center hover:-translate-y-1">
                  <p className="text-white font-bold tracking-wide uppercase text-sm md:text-base">Resume</p>
                </div>
              </div>
              <Button
                className="md:w-52 h-14 w-44"
                id="button"
                text="See my Work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>



          </div>
        </header>

        {/* RIGHT SIDE : 3D MODEL */}

        <figure className="w-full flex justify-center items-center">
          <div className="w-full max-w-full overflow-hidden">
            <HeroCardBackground />
          </div>
        </figure>
      </div>
      <GithubCalendarComponent />
      <div className="flex flex-col items-center justify-center gap-4">
        <TerminalCommand/>
        <InteractiveTerminal />
      </div>
    </section>
  );
};

export default Hero;
