import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <section
      className="flex flex-col justify-center items-center relative z-10"
      id="skills"
    >
      <div className="flex flex-col justify-between items-center relative w-full max-w-[1100px] gap-3">
        <div className="text-4xl text-rajah text-center font-semibold mt-5 lg:mt-3">
          Skills
        </div>
        <div className="text-lg text-rajah text-center px-5 max-w-[600px]">
          Here are some skills I have been working on.
        </div>
        <div className="w-full flex justify-center flex-wrap px-5 mt-3 lg:mt-5 gap-7" data-aos="zoom-in" data-aos-duration="1000">
          {skills.map((skill) => (
            <div className="w-full max-w-[500px] border-[0.1px] shadow-lg rounded-2xl py-4 px-9 bg-[#190a27] text-orange lg:max-w-[400px] lg:py-2.5">
              <div className="text-2xl font-semibold mb-5 text-center">
                {skill.title}
              </div>
              <div className="flex justify-center flex-wrap gap-3 mb-5">
                {skill.skills.map((item) => (
                  <div className="text-base lg:text-xl border-[1px] border-white rounded-xl py-3 px-2 flex justify-center items-center bg-[#190a27] text-lightgreen gap-2 lg:py-2 lg:px-3">
                    <img src={item.image} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
