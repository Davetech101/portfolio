import StyledProjects from "@/styles/styledcomponents/StyledProjects";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Coventry hotel",
      tech: "Next js, Typescript",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "https://github.com/Davetech101/coventry-hotel",
      link: "",
    },
    {
      id: "2",
      name: "rest countries",
      tech: "React js, Javascript",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "https://github.com/Davetech101/rest-countries",
      link: "",
    },
    {
      id: "3",
      name: "Entertainment web app",
      tech: "Next js, javascript",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "https://github.com/Davetech101/entertainment-web-app",
      link: "",
    },
    {
      id: "4",
      name: "Housing Market",
      tech: "React, Javascript",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "https://github.com/Davetech101/housing-market",
      link: "",
    },
    {
      id: "5",
      name: "Todo",
      tech: "React, Javascript",
      about: "",
      mobile: "",
      desktop: "",
      tablet: "",
      github: "https://github.com/Davetech101/todoApp",
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
