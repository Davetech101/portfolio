import StyledProjects from "@/styles/styledcomponents/StyledProjects";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Coventry hotel",
      tech: "Next js, Typescript",
      about: "",
      mobile: "/assets/testMob.jpeg",
      desktop: "/assets/testTab.jpeg",
      tablet: "/assets/testDex.jpeg",
      github: "https://github.com/Davetech101/coventry-hotel",
      link: "",
    },
    {
      id: "2",
      name: "rest countries",
      tech: "React js, Javascript",
      about: "",
      mobile: "/assets/testMob.jpeg",
      desktop: "/assets/testTab.jpeg",
      tablet: "/assets/testDex.jpeg",
      github: "https://github.com/Davetech101/rest-countries",
      link: "",
    },
    {
      id: "3",
      name: "Entertainment web app",
      tech: "Next js, javascript",
      about: "",
      mobile: "/assets/testMob.jpeg",
      desktop: "/assets/testTab.jpeg",
      tablet: "/assets/testDex.jpeg",
      github: "https://github.com/Davetech101/entertainment-web-app",
      link: "https://remarkable-centaur-fcc4bc.netlify.app/",
    },
    {
      id: "4",
      name: "Housing Market",
      tech: "React, Javascript, Firebase",
      about: "",
      mobile: "/assets/testMob.jpeg",
      desktop: "/assets/testTab.jpeg",
      tablet: "/assets/testDex.jpeg",
      github: "https://github.com/Davetech101/housing-market",
      link: "https://tangerine-starburst-4dce6f.netlify.app/",
    },
    {
      id: "5",
      name: "Todo",
      tech: "React, Javascript",
      about: "",
      mobile: "/assets/testMob.jpeg",
      desktop: "/assets/testTab.jpeg",
      tablet: "/assets/testDex.jpeg",
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

      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="images"></div>

            <div className="typography">
              <h3>{project.name}</h3>
              <span>{project.tech}</span>
              <p>{project.about}</p>

              <div className="btns">
                <Link href={project.github}>View Code</Link>
                <Link href={project.link}> View Website</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledProjects>
  );
};

export default Projects;
