import { Link } from "react-router-dom";

const Options = ({ home, projects, about, skill, qualification }) => {
  return (
    <div className="fixed bottom-0 bg-white/20 flex justify-center backdrop-blur-lg md:bg-white/20 md:backdrop-blur-md w-[100dvw] md:border-2 md:border-white/40 md:w-auto  text-black font-medium md:text-white md:right-0 md:px-7 md:py-4 md:rounded-s-3xl md:bottom-[50%] md:translate-y-[50%] md:font-semibold z-50">
      <ul
        className={`flex py-3 md:flex-col space-x-4 text-lg md:space-x-0 md:space-y-8 md:text-xl xl:text-2xl md:text-right`}
      >
        {home && (
          <li className="opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-[1.18] hover:pr-3 text-shadow-lg">
            <Link to={"/"}>Home</Link>
          </li>
        )}
        {about && (
          <li className="opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-[1.18] hover:pr-3 text-shadow-lg">
            <Link to={"/about"}>About</Link>
          </li>
        )}
        {projects && (
          <li className="opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-[1.18] hover:pr-3 text-shadow-lg">
            <Link to={"/projects"}>Projects</Link>
          </li>
        )}
        {skill && (
          <li className="opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-[1.18] hover:pr-3 text-shadow-lg">
            <Link to={"/skills"}>My Skills</Link>
          </li>
        )}
        {qualification && (
          <li className="opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-[1.18] hover:pr-3 text-shadow-lg">
            <Link to={"/qualifications"}>Qualifications</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
