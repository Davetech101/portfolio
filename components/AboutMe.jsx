import Link from "next/link";
import Typewriter from "typewriter-effect";
import StyledAboutMe from "@/styles/styledcomponents/StyledAboutMe";
import { GiChessKnight } from "react-icons/gi";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";

const About = () => {
  const [arrow, setArrow] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [animateAlt, setAnimateAlt] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setAnimate(prev => !prev)
    }, 3000);

  }, [animate])

  return (
    <StyledAboutMe>
      <GiChessKnight className="knight" />
      <main>
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
        <div className="text">
          <p>
            I am a Frontend developer located in Nigeria. Ardent towards UI
            effects, animation and creating intuitive, dynamic user experiences.
          </p>
          <p>
            A well-organised, problem solving and independent indivdual who pays
            high attention to details. A Football fan, chess player and also a
            lover of poetry. Currently undergoing my BSc in Electronics and
            Computer Engineering at the University of Port Harcourt, Nigeria!
          </p>
          <p>
            Interested in the entire Web development spectrum and working on
            mind-blowing projects with positive developers!
          </p>
          <Link href="/contact">
            <span>Let&apos;s make something special</span>{" "}
            <MdOutlineNavigateNext
              className={arrow === 1 ? "next-1 next active" : "next next-1"}
            />
            <MdOutlineNavigateNext
              className={arrow === 2 ? "next active" : "next"}
            />
            <MdOutlineNavigateNext
              className={arrow === 3 ? "next active" : "next"}
            />
          </Link>
        </div>
        <span className="pe">{"</p>"}</span>
      </main>

      <div className="">
        <span className="po">{"<Image"}</span>

        <span className="po block">{'alt="Image of the author"'}</span>
        <span className="po block">{"src="}</span>
        <div
          // onMouseEnter={() => setAnimateAlt(true)}
          // onMouseLeave={() => setAnimateAlt(false)}
          className={animate ? "images animate" : "images"}
        >
          <div className="images1">
            <Image
              src="/assets/part1.jpeg"
              alt="Picture of the author"
              width={200}
              height={100}
              className="img1"
            />
            <Image
              src="/assets/part2.jpeg"
              alt="Picture of the author"
              width={200}
              height={100}
              className="img2"
            />
          </div>
          <div className="images2">
            <Image
              src="/assets/part3.jpeg"
              alt="Picture of the author"
              width={200}
              height={100}
              className="img3"
            />
            <Image
              src="/assets/part4.jpeg"
              alt="Picture of the author"
              width={200}
              height={100}
              className="img4"
            />
          </div>
        </div>
        <span className="pe">{"/>"}</span>
      </div>
    </StyledAboutMe>
  );
};

export default About;
