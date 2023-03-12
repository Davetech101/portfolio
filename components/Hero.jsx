import StyledHero from "@/styles/styledcomponents/StyledHero";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const skills = [
    {
      name: "javascript",
      img: "/assets/javascript.png",
    },
    {
      name: "typescript",
      img: "/assets/typescript.png",
    },
    {
      name: "react js",
      img: "/assets/react.png",
    },
    {
      name: "next js",
      img: "/assets/next.jpeg",
    },
    {
      name: "node js",
      img: "/assets/node.png",
    },
    {
      name: "three js",
      img: "/assets/three.png",
    },
    {
      name: "css 3",
      img: "/assets/CSS3.png",
    },
    {
      name: "html 5",
      img: "/assets/html.png",
    },
    {
      name: "bootstrap",
      img: "/assets/bts.png",
    },
    {
      name: "my sql",
      img: "/assets/msql.png",
    },
    {
      name: "json",
      img: "/assets/json.jpeg",
    },
    {
      name: "github",
      img: "/assets/github.png",
    },
  ];
  return (
    <StyledHero>
      <main className="relative">
        <div className="absolute w-0.5 h-60 bg-orange mb-5 -top-20 -left-7"></div>
        <div className="absolute h-0.5 w-60 bg-orange mb-5 -top-7 -left-20"></div>
        <p>
          {" "}
          I am a{" "}
          <span className="text-orange underline fd">frontend developer</span>
        </p>
        <p>
          A well-versed and creative developer who is passionate about creating
          and contributing to beautiful, interactive and performant software
          products.
        </p>
      </main>

      <Marquee className="marquee-1">
        {skills.map((skill) => (
          <Image
            key={skill.name}
            src={skill.img}
            alt={skill.name}
            width={50}
            height={50}
          />
        ))}
      </Marquee>
    </StyledHero>
  );
};

export default Hero;
