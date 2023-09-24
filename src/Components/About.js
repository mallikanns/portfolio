import React from "react";
import profile from "../assets/cat.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-0 lg:justify-center">
          <div className="flex-1 text-center font-secondary lg:text-left lg:pl-20">
            <h1 className="text-rajah text-[28px] font-bold leading-[0.8] lg:text-[40px]">
              MALLIKA <span>NILNOISRI</span>
            </h1>
            <div className="mb-0 text-[32px] lg:text-[45px] font-semibold font-secondary uppercase leading-[1] lg:w-[700px] mt-3">
              <span className="text-rajah mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'Software Developer', 
                  2000, 
                ]}
                speed={50}
                className="text-lightgreen"
                // className="text-sheen"
                wrapper="span"
                // cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center gap-y-0 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center font-secondary lg:text-left lg:pl-20">
              <p className="text-rajah mb-10 max-w-lg mx-auto px-4 text-lg lg:mx-0 lg:px-0 lg:max-w-full">As a career switcher with an economics background turned software developer. I'm dedicated to continuous learning and eager to leverage my experiences and skills to contribute to innovative financial solutions that drive sustainable growth in Thailand and worldwide.</p>
              <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <butoon className="btn btn-lg flex items-center text-lg">Contact me</butoon>
                <a href="#" className="text-gradient btn-link text-lg">My Portfolio</a>
              </div>
            </div>
            <div className="lg:pr-20">
              <img src={profile} className="w-[300px] lg:w-[340px]" />
            </div>
          </div>
        </div>
      </div>
      
      {/* <a
        href="https://iconscout.com/3ds/long-hair-woman"
        class="text-underline font-size-sm"
        target="_blank"
      >
        Free Long Hair Woman 3D Icon
      </a>{" "}
      by{" "}
      <a
        href="https://iconscout.com/contributors/moehzackbean"
        class="text-underline font-size-sm"
      >
        Big Marsȟa
      </a>{" "}
      on{" "}
      <a href="https://iconscout.com" class="text-underline font-size-sm">
        IconScout
      </a> */}
    </section>
  );
};

export default About;
