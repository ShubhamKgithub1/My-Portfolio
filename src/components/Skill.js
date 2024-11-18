import Options from "./Options";
import { skills } from "../data/skill";

const Skill = () => {
  return (
    <div>
      <Options
        home={true}
        projects={true}
        about={true}
        skill={false}
        qualification={true}
      />
      <div>
        <div className="flex justify-center mt-8 md:mt-0 md:justify-start w-dvw md:h-[80vh] items-center md:px-10">
          <div className="bg-white/20 p-6 md:py-14 md:w-[80vw] backdrop-blur-md rounded-3xl md:px-10 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 shadow-xl border border-white/40">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl md:pl-2">
              My Skills
            </h2>
            <div className="w-[100%] flex flex-col items-center md:flex-row md:flex-wrap gap-3 md:gap-6 md:py-4 md:px-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/10 px-4 py-2 md:p-4 rounded-lg text-center shadow-md border border-white/20 min-w-[220px] md:min-w-[250px] lg:min-w-[300px]"
                >
                  <h3 className="text-white font-semibold md:font-bold md:text-xl">
                    {skill.name}
                  </h3>
                  <p className="text-gray-200 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
