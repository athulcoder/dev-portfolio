import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-primary/5 shadow-lg" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-20 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          Athul Sabu
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a 
                  href={link} 
                  className="text-sm font-medium text-primary/70 hover:text-primary transition-colors relative group"
                >
                  {name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex-center nm-convex hover:nm-inset nm-transition"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
          
          <div className="flex items-center gap-4">
            <a 
              target="__blank" 
              href="https://github.com/athulcoder"
              className="w-10 h-10 rounded-xl flex-center nm-convex hover:nm-flat nm-transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/athul-sabu-84360a261/"
              className="w-10 h-10 rounded-xl flex-center nm-convex hover:nm-flat nm-transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

