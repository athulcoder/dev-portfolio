import React, { useRef } from 'react';
import NeomorphicCard from '../components/NeomorphicCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.from('.about-image', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.about-content', {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: aboutRef });

  return (
    <section id="about" ref={aboutRef} className="about-section py-32 px-5 md:px-20 bg-background overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-[-10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        {/* Visual Stunning Photo */}
        <div className="about-image w-full md:w-5/12 relative group">
          <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-blue-500/30 transition-all duration-500" />
          <NeomorphicCard className="relative p-3 rounded-[3rem] nm-convex overflow-hidden aspect-[4/5]" variant="flat">
            <img 
              src="/images/person.png" 
              alt="Athul Sabu" 
              className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-110 transition-transform duration-700"
            />
          </NeomorphicCard>
          {/* Experience Badge */}
          <div className="absolute -bottom-8 -right-8 nm-convex p-8 rounded-3xl z-20">
            <p className="text-4xl font-black text-primary">5+</p>
            <p className="text-sm font-bold tracking-widest uppercase text-primary/60">Years of Dev</p>
          </div>
        </div>

        {/* Professional Narrative */}
        <div className="about-content w-full md:w-7/12 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Who is Athul?</h2>
            <div className="h-2 w-24 bg-blue-500 rounded-full" />
          </div>

          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-primary/80 font-medium">
            <p>
              I’m a <span className="text-primary font-bold">Software Engineer</span> and <span className="text-primary font-bold">BTech CSE Student</span> at MITS. 
              My journey started in 2019, driven by an insatiable curiosity for how digital ecosystems function.
            </p>
            <p>
              I specialize in bridging the gap between <span className="text-blue-500 italic underline decoration-blue-500/30">technical complexity</span> and 
              <span className="text-purple-500 italic underline decoration-purple-500/30">user-centric design</span>. 
              From founding MITS-PRINT to winning hackathons, I thrive on building tools that provide real value.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new landscapes or deep-diving into the latest AI research. I believe in code that doesn't just work, but <span className="text-primary italic">inspires</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <NeomorphicCard className="p-6 rounded-2xl" variant="convex">
              <h4 className="text-blue-500 font-bold mb-2">Technical Lead</h4>
              <p className="text-sm text-primary/60">Spearheading MITS PRINT automation for 2000+ students.</p>
            </NeomorphicCard>
            <NeomorphicCard className="p-6 rounded-2xl" variant="convex">
              <h4 className="text-purple-500 font-bold mb-2">Innovation Driven</h4>
              <p className="text-sm text-primary/60">Focusing on high-performance web apps and AI integration.</p>
            </NeomorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
