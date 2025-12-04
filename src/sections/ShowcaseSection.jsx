import { ProjectCard } from "@/components/3DCard";
import { works } from "@/constants";
import React from "react";

const ShowcaseSection = () => {
  return (
    <>
      <div id="work" className="app-showcase">
        <div className="w-full">
          <div className=" min-lg:grid grid-cols-2 gap-x-36">
            {works.map((work) => {
              return (
                <ProjectCard
                  title={work.title}
                  desc={work.desc}
                  imgPath={work.imagePath}
                  githubUrl={work.githubUrl}
                  previewUrl={work.previewUrl}
                />
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-gray-300 text-lg">
        For more projects, check out my{" "}
        <a
          href="https://github.com/athulcoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-300  decoration-indigo-500/50 hover:decoration-indigo-300"
        >
          GitHub →
        </a>
      </p>
    </>
  );
};

export default ShowcaseSection;
