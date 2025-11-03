import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a href="#hero" className="logo">
          Athul Sabu
        </a>

        <nav className="desktop"></nav>

        <div className="group flex gap-4">
          <a target="__blank" href="https://github.com/athulcoder">
            <FaGithub size={20} />
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/athul-sabu-84360a261/"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
