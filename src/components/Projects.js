import React from "react";
import Options from "./Options";
import netflixjpg from "../Assets/netflixjpg.png";
import ecommercejpg from "../Assets/ecommercejpg.png";
import Cravejpg from "../Assets/Cravejpg.png";
import ProjectCards from "./ProjectCards";
import {
  NetflixGitHubUrl,
  CraveGitHubUrl,
  VoldeMartGitHubUrl,
  VoldeMartUrl,
} from "../Constant";

const Projects = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-0 md:justify-start w-dvw md:h-[80vh] items-center md:px-10">
      <Options
        home={true}
        projects={false}
        about={true}
        skill={true}
        qualification={true}
      />
      {/* Project Container */}
      <div className="bg-white/20 p-6 md:py-14 md:w-[80vw] backdrop-blur-md rounded-3xl md:px-10 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 shadow-xl border border-white/40">
        <h2 className="font-bold text-xl md:text-3xl lg:text-4xl md:pl-2">
          My Projects
        </h2>
        <div className="w-[100%] flex flex-col items-center md:flex-row gap-3 md:gap-6 md:py-4 md:px-2 overflow-x-auto">
          <ProjectCards
            id={1}
            img={ecommercejpg}
            title={"VoldeMart"}
            description={"Your own online shop"}
            projectUrl={VoldeMartUrl}
            gitHubUrl={VoldeMartGitHubUrl}
             className="flex-shrink-0"
          />
          <ProjectCards
            id={2}
            img={Cravejpg}
            title={"Crave"}
            description={"Online food ordering site"}
            projectUrl={""}
            gitHubUrl={CraveGitHubUrl}
             className="flex-shrink-0"
          />
          <ProjectCards
            id={3}
            img={netflixjpg}
            title={"NetflixGpt"}
            description={"AI Movies Recommendations"}
            projectUrl={""}
            gitHubUrl={NetflixGitHubUrl}
             className="flex-shrink-0"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
