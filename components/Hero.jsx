import StyledHero from "@/styles/styledcomponents/StyledHero";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { ImQrcode } from "react-icons/im";

const Hero = () => {
  const skills = [
    {
      name: "javascript",
    },
    {
      name: "typescript",
    },
    {
      name: "react js",
    },
    {
      name: "next js",
    },
    {
      name: "node js",
    },
    {
      name: "three js",
    },
    {
      name: "css 3",
    },
    {
      name: "html 5",
    },
    {
      name: "bootstrap",
    },
    {
      name: "my sql",
    },
    {
      name: "json",
    },
    {
      name: "github",
    },
    {
      name: "tailwind",
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
          products.
        </p>
        <span className="pe block">{"</p>"}</span>
        <div className="cta">
          <Link href="/portfolio">My work</Link>
          <Link href="/contact">Say hello</Link>
        </div>
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
