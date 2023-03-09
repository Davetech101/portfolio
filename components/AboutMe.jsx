import Cube from "./Cube";
import P from "./P";

const About = () => {
  return (
    <div className="absolute top-2/4 -translate-y-1/2 w-8/12 flex items-center justify-between">
     <div className="max-w-4xl">
     <P>
        Lorem ipsum dolor sit amet consecteur adipscing Lorem ipsum dolor sit
        amet consecteur adipscing Lorem ipsum dolor sit amet consecteur
        adipscing Lorem ipsum dolor sit amet consecteur adipscing
      </P>

      <button className="text-4xl mt-5">
        Resume
      </button>
     </div>

      <Cube/>
    </div>
  );
};

export default About;
