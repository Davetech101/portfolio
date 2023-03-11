import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import Clock from "./Clock";
// import Cube from "./Cube";
import P from "./P";
// absolute top-2/4 -translate-y-3/4 max-w-4xl p-20 flex justify-between items-center w-full
const Hero = () => {
  return (
    <div className="flex absolute top-2/4 -translate-y-2/4 p-40 flex justify-between items-center w-full">
      <main className="relative w-6/12">
        <div className="absolute w-0.5 h-32 bg-purple mb-5 -top-16 -left-7"></div>
        <div className="absolute h-0.5 w-32 bg-purple mb-5 -top-7 -left-16"></div>
        <p className="uppercase text-3xl underline">
          {" "}
          i am a{" "}
          <span className="text-purple underline">frontend developer</span>
        </p>
        <P className="text-3xl text-white-2">
          I am a well-versed and creative developer who is passionate about
          creating and contributing to beautiful, interactive and performant
          software products.
        </P>

        <Link
          href="/portfolio"
          className="uppercase flex items-center gap-10 mt-5 block text-2xl"
        >
          my portfolio
          <CgArrowLongRight className="text-6xl" />
        </Link>
      </main>

      <Clock />
    </div>
  );
};

export default Hero;
