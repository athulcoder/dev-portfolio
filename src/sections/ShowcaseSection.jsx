import { ProjectCard } from "@/components/3DCard";
import { works } from "@/constants";
import React from "react";

const ShowcaseSection = () => {
  return (
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
  );
};

export default ShowcaseSection;
