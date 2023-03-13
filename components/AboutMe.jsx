import Link from "next/link";
import Typewriter from "typewriter-effect";
import StyledAboutMe from "@/styles/styledcomponents/StyledAboutMe";

const About = () => {
  return (
    <StyledAboutMe>
      <span className="po flex">{"<h2>"}</span>
      <h2>
        <Typewriter
          className="text-orange hidden"
          onInit={(typewriter) => {
            typewriter
            .typeString("Enomah")
            .deleteAll()
            .typeString("David Ogaranya Enomah")
            .start();
          }}
        />
      </h2>
      <span className="pe -mt-5">{"</h2>"}</span>

      <span className="pe block">{"</p>"}</span>
      <p>
        I am a Frontend developer located in Nigeria. Ardent towards UI effects,
        animation and creating intuitive, dynamic user experiences. <br /> A
        well-organised, problem solving and independent indivdual who pays high
        attention to details. A Football fan, chess player and also a lover of
        poetry. <br /> Currently undergoing my BSc in Electronics and Computer
        Engineering at the University of Port Harcourt, Nigeria! <br />
        Interested in the entire Web development spectrum and working on
        mind-blowing projects with positive developers!
        <Link href="/contact">Let&apos;s make something special</Link>
      </p>
      <span className="pe">{"</p>"}</span>
    </StyledAboutMe>
  );
};

export default About;
