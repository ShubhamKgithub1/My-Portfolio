import React from "react";

const Profile = () => {
  return (
    <section className="md:pl-12 w-[90dvw] sm:w-[70dvw] md:w-[70%] flex flex-col items-center gap-6 p-4 md:flex-row md:items-center bg-white/20 md:h-[70%] rounded-3xl shadow-lg shadow-black/30 border-2 border-white/30 transition-all duration-300">
      <div className="h-[60dvw] w-[60dvw] md:h-96 md:w-96 bg-gray-300 rounded-full  shadow-2xl shadow-blue-900 transition-all duration-500"></div>
      <div className="text-xl self-start pl-4 md:self-center md:text-4xl font-semibold md:font-bold md:pl-8 text-black space-y-2 md:space-y-4 text-shadow-sm transition-all duration-300">
        <h1 className="text-white text-shadow-lg font-bold">
          Hello, My name is{" "}
          <span className="block pt-[1px] md:pt-2">Shubham</span>
        </h1>
        <p className="font-bold">I'm a Frontend Developer</p>
        <h3 className="text-lg md:text-xl">Mobile No.: 8726253360</h3>
        <h3 className="text-lg md:text-xl">Email: sk715152@gmail.com</h3>
        <button className="bg-white rounded-lg text-base px-2 py-1 shadow-lg md:text-xl md:px-4 md:py-2 md:shadow-2xl md:border-2 md:border-black text-shadow-sm">
          Download Resume &#10515;
        </button>
      </div>
    </section>
  );
};

export default Profile;
