import React from "react";
import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black/95 text-white px-6 py-12 mt-10 border-t border-white/10">
      {/* NAME */}
      <h1 className="font-playwrite text-3xl sm:text-4xl text-center tracking-wide mb-6">
        Athul Sabu
      </h1>

      {/* SOCIAL ICONS – 🔥 Centered & Beautiful on Mobile */}
      <div className="flex justify-center gap-6 mb-8">
        {socialLinks.map(({ label, icon: Icon, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition duration-300 hover:scale-110"
          >
            <Icon className="text-2xl" />
          </a>
        ))}
      </div>

      {/* NAVIGATION — 🔥 Centered on mobile, row on larger screens */}
      <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm mb-10">
        {["Home", "Works", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* DIVIDER */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-400 text-sm tracking-wide">
        Designed & developed with ❤️ by Athul
      </p>
    </footer>
  );
};

export default Footer;
