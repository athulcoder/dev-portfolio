import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import { navLinks } from "@/constants";

const NavBar = () => {
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

        <div className="group flex gap-4">
          <a target="__blank" href="https://github.com/athulcoder">
            <FaGithub size={25} />
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/athul-sabu-84360a261/"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
