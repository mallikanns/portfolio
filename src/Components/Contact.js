import React from "react";
import {
  BiRightArrowAlt,
  BiEnvelope,
  BiLogoLinkedinSquare,
  BiPhone,
  BiRocket,
} from "react-icons/bi";

const Contact = () => {
  return (
    <section className="section flex-col px-[20px] lg:pt-2" id="contact">
      <div className="text-4xl text-rajah text-center font-semibold mt-5 lg:mt-3">
        Contact
      </div>
      <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]" >
        <div className="w-[350px] lg:w-auto">
          <h3 className="pt-2 pb-4 lg:pt-5 text-center text-lavender underline underline-offset-4 font-semibold">Talk to me</h3>
          <div className="flex flex-col gap-4" data-aos="fade-right">
            <div className="border border-[#ffffff75] flex flex-col items-center py-3 lg:px-5 rounded-xl">
              <div className="flex items-center gap-3 pb-2 text-white">
                <BiEnvelope className="text-2xl" />
                <h3 className="text-base">Email</h3>
              </div>
              <span className="text-base">mallika.nilns@gamil.com</span>
              <div className="flex items-center gap-2 hover:text-lightgreen">
                <a href="mailto:mallika.nilns@gmail.com" target="new" className="text-base">
                  Write me
                </a>
                <BiRightArrowAlt className="text-2xl" />
              </div>
            </div>

            <div className="border border-[#ffffff75] flex flex-col items-center py-3 rounded-xl">
              <div className="flex items-center gap-3 pb-2 text-white">
                <BiLogoLinkedinSquare className="text-2xl" />
                <h3 className="text-base">LinkedIn</h3>
              </div>
              <span className="text-base">Mallika Nilnoisri</span>
              <div className="flex items-center gap-2 hover:text-lightgreen">
                <a
                  href="https://www.linkedin.com/in/mallika-nns/"
                  target="new"
                  className="text-base"
                >
                  Write me
                </a>
                <BiRightArrowAlt className="text-2xl" />
              </div>
            </div>

            <div className="border border-[#ffffff75] flex flex-col items-center py-3 rounded-xl">
              <div className="flex items-center gap-3 pb-2 text-white">
                <BiPhone className="text-2xl" />
                <h3 className="text-base">Phone</h3>
              </div>
              <span className="text-base">(+66) 86 352 8400</span>
              <div className="flex items-center gap-2 hover:text-lightgreen">
                <a href="tel:+66863528400" className="text-base">
                  Call me
                </a>
                <BiRightArrowAlt className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[350px] lg:w-auto">
          <h3 className="pt-2 pb-4 lg:pt-5 text-center text-lavender underline underline-offset-4 font-semibold">Email me</h3>

          <form action="https://getform.io/f/c5e4950e-b5d2-4546-b708-58d07d2ff377" method="POST" className="flex flex-col gap-4 lg:w-[550px]" data-aos="fade-left">
            <div className="flex flex-col py-3 lg:px-5 border-2 border-[#ffffff75] rounded-xl px-4">
              <label className="text-base pb-2">Name: </label>
              <input
                type="text"
                name="name"
                className="bg-transparent text-base border-b-2 border-rajah text-white rounded-none"
                placeholder="Enter your name"
              ></input>
            </div>

            <div className="flex flex-col py-3 lg:px-5 border-2 border-[#ffffff75] rounded-xl px-4">
              <label className="text-base pb-2">Email: </label>
              <input
                type="email"
                name="email"
                className="bg-transparent text-base border-b-2 border-rajah text-white rounded-none"
                placeholder="Enter your email"
              ></input>
            </div>

            <div className="flex flex-col py-3 lg:px-5 border-2 border-[#ffffff75] rounded-xl px-4">
              <label className="text-base pb-2">Message: </label>
              <textarea
                type="text"
                name="message"
                cols="30"
                rows="10"
                className="bg-transparent text-base text-white"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn py-2 text-black hover:text-white flex items-center justify-center gap-3">
              Send Message
              <BiRocket />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
