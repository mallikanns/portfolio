import React, { useState } from "react";
import { BiSolidGraduation, BiBriefcase, BiCalendar } from "react-icons/bi";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex-col section" id="qualification">
      <h2 className="text-4xl text-rajah text-center font-semibold mt-5 lg:mt-0">
        Qualification
      </h2>
      <span className="text-lg text-rajah text-center px-5 py-3 max-w-[600px]">
        My personal journey
      </span>
      <div className="max-w-3xl container text-lavender">
        <div className="flex justify-center gap-2 mb-5">
          <div
            className={`flex items-center gap-2 mr-4 mb-1 font-semibold cursor-pointer ${
              activeTab === "experience" ? "activeTabStyle" : "inactiveTabStyle"
            }`}
            onClick={() => toggleTab("experience")}
          >
            <BiBriefcase className="text-3xl" />
            Experience
          </div>
          <div
            className={`flex items-center gap-2 mr-4 mb-1 font-semibold cursor-pointer ${
              activeTab === "education" ? "activeTabStyle" : "inactiveTabStyle"
            }`}
            onClick={() => toggleTab("education")}
          >
            <BiSolidGraduation className="text-3xl" />
            Education
          </div>
        </div>
        <div className="justify-center text-xs lg:text-lg">
          {activeTab === "experience" && (
            <div data-aos="fade-up-right">
              {/* SD */}
              <div className="mb-2 grid grid-cols-[1fr,max-content,1fr] gap-x-3">
                <div className="pl-10 lg:pl-[90px]">
                  <h3 className="text-lightgreen">Software Developer</h3>
                  <span className="inline-block mb-2">Generation Thailand</span>
                  <div className="flex items-end lg:items-center gap-1 text-[10px] lg:text-lg">
                    <BiCalendar className="text-xl lg:text-2xl" /> Jul 2023 -
                    Oct 2023
                  </div>
                </div>

                <div>
                  <span className="inline-block w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] bg-orange rounded-full"></span>
                  <span className="block w-[1px] h-full	bg-orange translate-x-[7px] -translate-y-[4px] lg:translate-x-[9px] lg:-translate-y-[10px]"></span>
                </div>
              </div>

              {/* RM */}
              <div className="mb-2 grid grid-cols-[1fr,max-content,1fr] gap-x-3">
                <div></div>

                <div>
                  <span className="inline-block w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] bg-orange rounded-full"></span>
                  <span className="block w-[1px] h-full	bg-orange translate-x-[7px] -translate-y-[4px] lg:translate-x-[9px] lg:-translate-y-[10px]"></span>
                </div>
                <div className="lg:pl-5">
                  <h3 className="text-lightgreen">Risk Management Officer</h3>
                  <span className="inline-block mb-2">
                    Tokio Marine Safety Insurance
                  </span>
                  <div className="flex items-end gap-1 text-[10px] lg:items-center lg:text-lg">
                    <BiCalendar className="text-xl lg:text-2xl" /> Sep 2022 -
                    May 2023
                  </div>
                </div>
              </div>

              {/* intern */}
              <div className="mb-2 grid grid-cols-[1fr,max-content,1fr] gap-x-3">
                <div className="pl-10 lg:pl-[90px]">
                  <h3 className="text-lightgreen">
                    Import-Export division Intern
                  </h3>
                  <span className="inline-block mb-2">K LINE (THAILAND)</span>
                  <div className="flex items-end gap-1 text-[10px] lg:items-center lg:text-lg">
                    <BiCalendar className="text-xl lg:text-2xl" /> Jun 2021 -
                    Aug 2021
                  </div>
                </div>

                <div>
                  <span className="inline-block w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] bg-orange rounded-full"></span>
                  <span className="block w-[1px] h-full	bg-orange translate-x-[7px] -translate-y-[4px] lg:translate-x-[9px] lg:-translate-y-[10px]"></span>
                </div>
              </div>
            </div>
          )}

          {/* Display experience content when activeTab is "experience" */}
          {activeTab === "education" && (
            <div data-aos="fade-up-left">
              {/* tu */}
              <div className="mb-2 grid grid-cols-[1fr,max-content,1fr] gap-x-3">
                <div className="pl-10 lg:pl-[90px]">
                  <h3 className="text-lightgreen">Bachelor's Degree in Economics</h3>
                  <span className="inline-block mb-2">Thammasat University</span>
                  <div className="flex items-end lg:items-center gap-1 text-[10px] lg:text-lg">
                    <BiCalendar className="text-xl lg:text-2xl" /> 2018 - 2022
                  </div>
                </div>

                <div>
                  <span className="inline-block w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] bg-orange rounded-full"></span>
                  <span className="block w-[1px] h-full	bg-orange translate-x-[7px] -translate-y-[4px] lg:translate-x-[9px] lg:-translate-y-[10px]"></span>
                </div>
              </div>

              {/* SW */}
              <div className="mb-2 grid grid-cols-[1fr,max-content,1fr] gap-x-3">
                <div></div>

                <div>
                  <span className="inline-block w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] bg-orange rounded-full"></span>
                  <span className="block w-[1px] h-full	bg-orange translate-x-[7px] -translate-y-[4px] lg:translate-x-[9px] lg:-translate-y-[10px]"></span>
                </div>
                <div className="lg:pl-5">
                  <h3 className="text-lightgreen">Enrichment Science Classroom (ESC)</h3>
                  <span className="inline-block mb-2">
                    Satriwithaya School
                  </span>
                  <div className="flex items-end gap-1 text-[10px] lg:items-center lg:text-lg">
                  <BiCalendar className="text-xl lg:text-2xl" /> 2016 - 2018
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
