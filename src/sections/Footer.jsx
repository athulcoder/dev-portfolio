import React from "react";
import { navLinks, socialLinks } from "../constants";
import NeomorphicCard from "../components/NeomorphicCard";

const Footer = () => {
  return (
    <footer className="w-full bg-background px-6 py-20 border-t border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* NAME */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
          Athul Sabu
        </h1>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map(({ label, icon: Icon, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              className="group"
            >
              <div className="w-14 h-14 rounded-2xl flex-center nm-convex hover:nm-flat nm-transition group-hover:scale-110">
                <Icon className="text-2xl text-primary/70 group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* NAVIGATION */}
        <ul className="flex flex-wrap justify-center gap-10 mb-16">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-sm font-bold uppercase tracking-widest text-primary/50 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* COPYRIGHT */}
        <NeomorphicCard className="nm-inset px-10 py-4 rounded-2xl">
          <p className="text-center text-primary/40 text-sm font-medium">
            Designed & Developed with ❤️ by Athul Sabu &copy; 2024
          </p>
        </NeomorphicCard>
      </div>
    </footer>
  );
};

export default Footer;

