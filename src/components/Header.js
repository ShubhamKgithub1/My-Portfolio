import { GitHubUrl } from "../utils/Constant";
import { LinkedInUrl } from "../utils/Constant";
const Header = () => {
  return (
    <nav className="bg-white/30 flex items-center justify-between w-screen py-4 px-4 md:py-7 md:px-14 md:shadow-lg shadow-sm shadow-blue-600/50">
      <h1 className="font-semibold text-xl lg:font-bold md:text-3xl lg:text-shadow-lg">
        Shubham
      </h1>
      <div className="md:space-x-4 space-x-2 md:text-xl md:font-semibold">
        <button className="md:border-2 rounded-full px-2 py-[1px] md:px-4 md:py-1 bg-white text-black border-black hover:scale-[1.04] active:scale-[.97] transition-all duration-200 shadow-lg">
          <a href={GitHubUrl} target="#">
            Github &#10138;
          </a>
        </button>
        <button className="md:border-2 rounded-full px-2 py-[1px] md:px-4 md:py-1 bg-white text-black border-black hover:scale-[1.04] active:scale-[.97] transition-all duration-200 shadow-lg">
          <a href={LinkedInUrl} target="#">
            LinkedIn &#x2197;
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Header;
