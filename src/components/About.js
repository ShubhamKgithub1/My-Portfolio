import React from "react";
import Options from "./Options";

const About = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-0 md:justify-start w-dvw md:h-[80vh] items-center md:px-10">
      <Options
        home={true}
        projects={true}
        about={false}
        skill={true}
        qualification={true}
      />
      <div className="bg-white/20 p-6 md:py-14 w-[90vw] md:w-[80vw] backdrop-blur-md rounded-3xl md:px-10 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 shadow-xl border border-white/40">
        <h2 className="font-bold text-xl md:text-3xl lg:text-4xl md:pl-2">
          About Me
        </h2>
        <p className="text-sm md:text-lg text-gray-300 leading-6">
          Hi, I'm Shubham, a passionate frontend developer specializing in
          building interactive, user-friendly web applications. With a strong
          foundation in React and Tailwind CSS, I strive to create seamless
          digital experiences.
        </p>
        <p className="text-sm md:text-lg text-gray-300 leading-6">
          Currently pursuing MCA, I've honed my technical and problem-solving
          skills through academic and hands-on projects. I excel in React.js,
          and modern CSS frameworks like Tailwind CSS. My focus is on crafting
          responsive designs and optimizing user experience. Beyond coding, I
          enjoy working out.
        </p>
      </div>
    </div>
  );
};

export default About;
