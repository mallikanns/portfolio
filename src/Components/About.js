import React from "react";
import profile from "../assets/cat.png";
import { BiLogoLinkedinSquare, BiLogoGithub, BiEnvelope } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-0 lg:justify-center">
          <div className="flex-1 text-center font-secondary lg:text-left lg:pl-20">
            <h1 className="text-rajah text-[28px] font-bold leading-[0.8] lg:text-[40px]">
              Hi, I am <span className="text-lightgreen">MALLIKA</span>
            </h1>
            <div className="hidden lg:block mb-0 text-[32px] lg:text-[45px] font-semibold font-secondary leading-[1] lg:w-[700px] mt-3">
              <span className="text-rajah mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'SOFTWARE DEVELOPER', 
                  2000, 
                ]}
                speed={50}
                className="text-lightgreen"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center gap-y-0 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center font-secondary lg:text-left lg:pl-20">
              <p className="text-rajah mb-10 max-w-lg mx-auto px-4 text-lg lg:mx-0 lg:px-0 lg:max-w-full">As a career switcher with an economics background turned software developer. I'm dedicated to continuous learning and eager to leverage my experiences and skills to contribute to innovative financial solutions that drive sustainable growth in Thailand and worldwide.</p>
              <div className="flex flex-col max-w-max gap-y-5 gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <div className="flex gap-3">
                  <Link to="contact" smooth={true}><butoon className="btn btn-lg flex items-center text-lg animate-bounce">Contact me</butoon></Link>
                  <a href="#" className="text-gradient btn-link text-lg hover:text-lightgreen">Download CV</a>
                </div>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/mallika-nns/" target="new"><BiLogoLinkedinSquare className="w-[30px] h-[30px] hover:text-white"/></a>
                  <a href="https://github.com/mallikanns" target="new"><BiLogoGithub className="w-[30px] h-[30px] hover:text-white"/></a>
                  <a href="mailto:mallika.nilns@gmail.com" target="new"><BiEnvelope className="w-[30px] h-[30px] hover:text-white"/></a>
                </div>
              </div>
            </div>
            <div className="lg:pr-20 flex flex-col items-center justify-center text-center mb-10">
              <img src={profile} className="w-[300px] lg:w-[340px]" />
              <div className="lg:hidden mb-0 text-[32px] font-semibold font-secondary leading-[1] mt-3">
                <span className="text-rajah mr-2">I am a</span>
                <TypeAnimation
                  sequence={[
                    'SOFTWARE DEVELOPER', 
                    2000, 
                  ]}
                  speed={50}
                  className="text-lightgreen"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
