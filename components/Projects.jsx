import StyledProjects from "@/styles/styledcomponents/StyledProjects";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { GiStaticWaves, GiSandstorm } from "react-icons/gi";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Coventry hotel",
      tech: "Next js, Typescript",
      about:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorum repellat possimus quisquam animi facilis quasi vero nam quod aliquid.",
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
      about:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorum repellat possimus quisquam animi facilis quasi vero nam quod aliquid.",
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
      about:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorum repellat possimus quisquam animi facilis quasi vero nam quod aliquid.",
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
      about:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorum repellat possimus quisquam animi facilis quasi vero nam quod aliquid.",
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
      about:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolorum repellat possimus quisquam animi facilis quasi vero nam quod aliquid.",
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
          <div
            className={
              project.id % 2 === 0
                ? `project flex items-center flex-row-reverse`
                : `project flex items-center`
            }
            key={project.id}
          >
            <div className="images">
              <Image
                src={project.mobile}
                alt="Picture of the author"
                width={200}
                height={100}
                className="img1"
              />
              <Image
                src={project.tablet}
                alt="Picture of the author"
                width={400}
                height={100}
                className="img2"
              />
              <Image
                src={project.desktop}
                alt="Picture of the author"
                width={300}
                height={100}
                className="img3"
              />
            </div>

            <div className="typography">
              <h3>{project.name}</h3>
              <small className="">{project.tech}</small>
              <p>{project.about}</p>

              <div className="btns">
                <Link href={project.github}>View Code</Link>
                <Link href={project.link}> View Website</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GiStaticWaves className="wave"/>
      <GiSandstorm className="storm"/>
    </StyledProjects>
  );
};

export default Projects;
