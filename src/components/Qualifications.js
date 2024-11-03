import Options from "./Options";

const Qualifications = () => {
  return (
    <div>
      My Qualifications
      <Options
        home={true}
        projects={true}
        about={true}
        skill={true}
        qualification={false}
      />
      <img
        src="https://www.jootoor.com/wp-content/uploads/2023/10/Purple-Gradients.jpg
"
        alt="not found"
        className="h-[80vh] w-[80vw]"
      />
    </div>
  );
};

export default Qualifications;
