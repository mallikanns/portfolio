import React, { useState } from "react";

const ProjectCards = ({ project, setOpenModal }) => {
    project.member?.map((member) => {
        console.log("member")
        console.log(member)
        console.log(member.img)
    })
  return (
    <div
      className="w-[330px] h-[500px] flex flex-col gap-3.5 overflow-hidden pt-[20px] px-[20px] cursor-pointer rounded-lg bg-[#190a27] border border-[#F6E5DF]"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <img src={project.image} className="w-full h-[180px] rounded-lg" />
      <div className="text-sm w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <div className="py-0.5 px-2 rounded-lg bg-[#4f4f56] text-lightgreen">{tag}</div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-0 px-0.5">
        <div className="font-bold text-xl overflow-hidden max-w-full text-ellipsis">{project.title}</div>
        <div className="text-sm ml-0.5">{project.date}</div>
        <div className="text-xs lg:text-sm text-lavender overflow-hidden max-w-full text-ellipsis mt-2">{project.description}</div>
      </div>
      <div className="flex justify-center gap-2">
        <a href={project.github} target='new' className="text-center bg-[#F6E5DF] text-indigo py-1 rounded-xl font-primary w-[140px] hover:bg-[#4f4f56] hover:text-white active:translate-y-3">View Code</a>
        <a href={project?.webapp} target='new' className="text-center bg-[#F6E5DF] text-indigo py-1 rounded-xl font-primary w-[140px] hover:bg-[#4f4f56] hover:text-white active:translate-y-3">View App</a>
      </div>
    </div>
  );
};

export default ProjectCards;
