import { GitUrl } from "../Constant";
import { LinkedInUrl } from "../Constant";
const Header =()=>{
    return (
        <div className="bg-transparent flex items-center justify-between w-screen py-7 px-10">
            <h1 className="font-bold text-3xl">Shubham</h1>
            <div className="space-x-4 text-xl font-semibold">
                <button className="border-2 rounded-full px-4 py-1 bg-white text-black border-black hover:scale-[1.04] active:scale-[.97] transition-all duration-200 shadow-lg"><a href={GitUrl} target="#">Github</a></button>
                <button className="border-2 rounded-full px-4 py-1 bg-white text-black border-black hover:scale-[1.04] active:scale-[.97] transition-all duration-200 shadow-lg"><a href={LinkedInUrl} target="#">LinkedIn</a></button>
            </div>
        </div>
    );
};

export default Header;