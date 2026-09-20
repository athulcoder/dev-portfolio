import React, { useState } from "react";
import { navLinks, socialLinks } from "@/constants";

const Footer = () => {
  const [secretClicks, setSecretClicks] = useState(0);
  return (
    <footer className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-12 mt-10 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      {/* NAME */}
      <h1 className="font-playwrite text-3xl sm:text-4xl text-center tracking-wide mb-6 font-bold text-slate-900 dark:text-white">
        Athul Sabu
      </h1>

      {/* SOCIAL ICONS – 🔥 Centered & Beautiful on Mobile */}
      <div className="flex justify-center gap-6 mb-8">
        {socialLinks.map(({ label, icon: Icon, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            className="p-3 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition duration-300 hover:-translate-y-1 shadow-sm"
          >
            <Icon className="text-2xl" />
          </a>
        ))}
      </div>

      {/* NAVIGATION — 🔥 Centered on mobile, row on larger screens */}
      <ul className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400 font-medium text-sm mb-10">
        {navLinks.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="hover:text-indigo-600 dark:hover:text-white transition duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* DIVIDER */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-6"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-slate-500 dark:text-slate-400 font-medium text-sm tracking-wide relative z-10">
        Designed & developed with 
        <span 
          onClick={() => setSecretClicks(c => c + 1)} 
          className="cursor-pointer hover:scale-125 inline-block transition-transform mx-1 select-none"
        >
          ❤️
        </span> 
        by Athul
      </p>

      {/* EASTER EGG OVERLAY */}
      {secretClicks >= 5 && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md cursor-pointer transition-all"
          onClick={() => setSecretClicks(0)}
        >
          <div className="relative text-center flex flex-col items-center transform transition-transform duration-500 scale-100 animate-in fade-in zoom-in">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-indigo-600 dark:text-indigo-400 font-playwrite drop-shadow-sm">
              You found a secret!
            </h2>
            <img 
              src="/images/secrets/cat-light.png" 
              alt="Light Secret" 
              className="w-72 md:w-96 rounded-3xl shadow-2xl dark:hidden border-4 border-white object-contain" 
            />
            <img 
              src="/images/secrets/house-dark.png" 
              alt="Dark Secret" 
              className="w-72 md:w-96 rounded-3xl shadow-2xl hidden dark:block border-4 border-slate-800 object-contain" 
            />
            <p className="mt-8 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs md:text-sm animate-pulse">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
