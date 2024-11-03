import Options from "./Options";
import Profile from "./Profile";

const HomeContainer = () => {
  return (
    <div className="md:flex flex justify-center h-[80vh] md:justify-start w-dvw mt-7 md:mt-0 md:h-[80dvh] items-center md:px-10">
      <Profile />
      <Options
        home={false}
        projects={true}
        about={true}
        skill={true}
        qualification={true}
      />
    </div>
  );
};

export default HomeContainer;
