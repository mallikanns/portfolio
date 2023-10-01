import React, { useState } from "react";
import { projects } from "../data/constants";
import ProjectCards from "./ProjectCards";

const Project = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <section
      className="flex flex-col justify-center items-center relative z-10"
      id="project"
    >
      <div className="flex flex-col justify-between items-center relative w-full max-w-[1350px] gap-3 pt-[10px] pb-[100px]">
        <div className="text-4xl text-rajah text-center font-semibold mt-5 lg:mt-7">
          Projects
        </div>
        <div className="text-lg text-rajah text-center mb-3 lg:mb-5 max-w-[600px]">
          Here are some of my projects.
        </div>
        <div className="flex justify-center items-center flex-wrap gap-[28px]">
          {projects.map((project) => (
              <ProjectCards
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
