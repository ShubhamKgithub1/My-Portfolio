import Options from "./Options";

const About =()=>{
    return (
        <div>
            About Me

            <Options
        home={true}
        projects={true}
        about={false}
        skill={true}
        qualification={true}
      />
        </div>
    );
};

export default About;