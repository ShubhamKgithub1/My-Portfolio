import React from "react";
import Options from "./Options";
import { qualifications } from "../data/qualifications";

const Qualifications = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-0 md:justify-start w-dvw md:h-[80vh] items-center md:px-10">
      <Options
        home={true}
        projects={true}
        about={true}
        skill={true}
        qualification={false}
      />
      <div className="bg-white/20 p-6 md:py-14 w-[90vw] md:w-[80vw] backdrop-blur-md rounded-3xl md:px-10 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 shadow-xl border border-white/40">
        <h2 className="font-bold text-xl md:text-3xl lg:text-4xl md:pl-2">
          Qualifications
        </h2>
        <div className="w-full flex flex-col gap-4">
          {qualifications.map((qualification, index) => (
            <div>
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4"
              >
                <div className="flex-shrink-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-semibold shadow-lg">
                  {qualification.year}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg md:text-xl">
                    {qualification.title}
                  </h3>
                  <h4 className="text-sm md:text-base text-gray-200">
                    {qualification.institute}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300">
                    {qualification.description}
                  </p>
                </div>
              </div>

              <div className="bg-slate-400 w-full h-[1.5px] md:h-[2px] mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
