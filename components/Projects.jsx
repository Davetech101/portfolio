import StyledProjects from "@/styles/styledcomponents/StyledProjects";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const projects = [
    {
      id: "",
      name: "",
      tech: "",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "",
      link: "",
    },
    {
      id: "",
      name: "",
      tech: "",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "",
      link: "",
    },
    {
      id: "",
      name: "",
      tech: "",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "",
      link: "",
    },
    {
      id: "",
      name: "",
      tech: "",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "",
      link: "",
    },
    {
      id: "",
      name: "",
      tech: "",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "",
      link: "",
    },
  ];
  return (
    <StyledProjects>
      <span className="po">{"<h2>"}</span>
      <h2>
        <Typewriter
          className="text-orange hidden"
          onInit={(typewriter) => {
            typewriter.typeString("Projects.").start();
          }}
        />
      </h2>
      <span className="po">{"</h2>"}</span>
    </StyledProjects>
  );
};

export default Projects;
