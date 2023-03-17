import StyledHero from "@/styles/styledcomponents/StyledHero";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { ImQrcode } from "react-icons/im";
import { FaCarSide } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";

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
    {
      name: "tailwind",
      img: "/assets/github.png",
    },
  ];

  return (
    <StyledHero>
      <ImQrcode className="code" />

      <main className="relative">
        <span className="po flex">{"<p>"}</span>

        <span className="absolute w-0.5 h-60 bg-orange mb-5 -top-20 -left-7 vertical"></span>
        <span className="absolute h-0.5 w-60 bg-orange mb-5 -top-7 -left-20 horizontal"></span>
        <p className="inline mr-5">I am a</p>
        <Typewriter
          className="text-orange hidden"
          onInit={(typewriter) => {
            typewriter
              .typeString("web developer")
              .deleteAll()
              .typeString("frontend developer")
              .start();
          }}
        />
        <p>
          A well-versed and creative developer who is passionate about creating
          and contributing to beautiful, interactive and performant software
          products .
        </p>
        <span className="pe">{"</p>"}</span>

      </main>

      <Marquee
        className="marquee-1"
        speed="50"
        pauseOnHover="true"
        gradientColor={[0, 0, 0]}
        gradientWidth={100}
      >
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </Marquee>
    </StyledHero>
  );
};

export default Hero;
