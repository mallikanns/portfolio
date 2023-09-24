import React from "react";
import {
  BiHomeAlt,
  BiCodeBlock,
  BiBriefcase,
  BiFolderOpen,
  BiFile,
  BiExtension,
  BiBookBookmark,
  BiSolidContact,
} from "react-icons/bi";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 w-full overflow-hidden z-50 lg:bottom-4">
      <div className="container mx-auto">
        <div className="w-full bg-pastelop h-16 backdrop-blur-xl rounded-full max-w-[500px] mx-auto px-5 flex justify-between items-center text-3xl text-black/70">
        {/* <div className="w-full bg-pastelop h-16 backdrop-blur-xl rounded-full max-w-[500px] mx-auto px-5 flex justify-between items-center text-3xl text-black/70"> */}
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-white"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-white"
          >
            <BiCodeBlock />
          </Link>
          <Link
            to="project"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-white"
          >
            <BiFolderOpen />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-white"
          >
            <BiBriefcase />
          </Link>
          {/* <Link to='education' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <BiBookBookmark/>
          </Link> */}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-white"
          >
            <BiSolidContact />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
