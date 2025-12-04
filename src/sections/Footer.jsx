import { socialLinks } from "@/constants";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <h1 className="font-playwrite text-3xl  text-accent-foreground pl-6">
        Athul Sabu
      </h1>

      <section className="bg-black w-full h-[200px] p-3 min-sm:flex">
        <ul className="text-sm flex flex-row justify-around h-[100px] items-center min-sm:flex-col min-sm:w-[50%]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#work">Works</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="text-sm flex flex-row justify-around h-[100px] items-center min-sm:flex-col">
          {socialLinks.map(({ label, icon: Icon, url }) => {
            return (
              <li key={label}>
                <a href={url}>
                  <Icon size={30} />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="flex items-center justify-center m-[30px] text-gray-400">
        Designed & developed with ❤️ by Athul
      </p>
    </>
  );
};

export default Footer;
