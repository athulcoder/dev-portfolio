import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme, default to "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply the theme to the document on mount or when theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="navbar">
      <div className="inner">
        <a href="#hero" className="logo">
          Athul Sabu
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => {
              return (
                <li className="group" key={name}>
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="group flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2 shadow-sm"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a target="__blank" href="https://github.com/athulcoder" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/athul-sabu-84360a261/"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
