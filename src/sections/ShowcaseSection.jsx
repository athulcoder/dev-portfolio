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
          {/* LEFT */}
          {/* <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="HRAS" />
            </div>
            <div className="text-content">
              <h2>
                Hostel Room Allotment System Software that can manage the
                student allotment proccess in an effeicent way
              </h2>
              <p className="text-white-50 md:text-xl">
                Software built with Java, Swing & SQLite as Database.
              </p>
            </div>
          </div> */}

          {/* RIGHT */}
          {/* <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="DailyDone" />
              </div>
              <h2>DailyDone a Task Managment Platform </h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#0872af78]">
                <img src="/images/project3.png" alt="DailyDone" />
              </div>
              <h2>Cinequest a movie search platform </h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
