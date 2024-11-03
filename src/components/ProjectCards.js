const ProjectCards = ({
  id,
  img,
  title,
  description,
  projectUrl,
  gitHubUrl,
}) => {
  return (
    <div
      className={`cursor-pointer h-auto ${
        id === 1 && "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      } ${id === 2 && "bg-gradient-to-r from-blue-400 to-green-500"} ${
        id === 3 && "bg-gradient-to-r from-yellow-400 to-red-500"
      } w-60 min-w-[25%] rounded-lg shadow-lg relative text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-xl`}
    >
      <div className="h-auto flex flex-col justify-between">
        <img src={img} alt="not found" className="h-[70%] rounded-t-lg" />
        <div className="p-2 lg:p-4 xl:p-6 h-[30%]">
          <h1 className="font-semibold md:font-bold md:text-xl text-center">
            {title}
          </h1>
          <p className="text-sm text-center">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/20 backdrop-blur-md transition-all duration-500 rounded-lg flex flex-col gap-3 lg:gap-6 justify-center items-center">
        {projectUrl && (
          <button className="block bg-white text-black rounded-3xl py-1 px-2 lg:py-2 lg:px-5 font-normal lg:font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <a href={projectUrl} target="#">
              Open &#10138;
            </a>
          </button>
        )}
        <button className="block bg-white text-black rounded-3xl py-1 lg:py-2 px-1 lg:px-4 font-normal lg:font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <a href={gitHubUrl} target="#">
            GitHub &#10138;
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
