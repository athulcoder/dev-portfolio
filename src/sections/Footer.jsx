import { socialLinks } from "@/constants";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-black w-full h-[200px] p-3">
        <div className="">
          <h1 className="font-playwrite text-xl">Athul Sabu</h1>

          <ul className="text-sm flex flex-row justify-around h-[100px] items-center">
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
        </div>

        <div>
          <ul className="text-sm flex flex-row justify-around h-[100px] items-center">
            {socialLinks.map(({ label, icon: Icon, url }) => {
              return (
                <li key={label}>
                  <a href={url}>
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
