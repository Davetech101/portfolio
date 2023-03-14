import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import StyledForm from "@/styles/styledcomponents/StyledForm";
import Typewriter from "typewriter-effect";

const Form = () => {
  return (
    <StyledForm>
      <span className="po">{"<p>"}</span>
      <h2 className="">
        Have A
        <Typewriter
          className="text-orange hidden"
          onInit={(typewriter) => {
            typewriter
              .typeString("Question?")
              .deleteAll()
              .typeString("Suggestion?")
              .deleteAll()
              .typeString("Nice day!")
              .pauseFor(3500)
              .deleteAll()
              .typeString("Question?")
              .deleteAll()
              .typeString("Suggestion?")
              .deleteAll()
              .typeString("Nice day!")
              .pauseFor(3500)
              .deleteAll()
              .typeString("Question?")
              .deleteAll()
              .typeString("Suggestion?")
              .deleteAll()
              .typeString("Nice day!")
              .pauseFor(3500)
              .deleteAll()
              .typeString("Question?")
              .deleteAll()
              .typeString("Suggestion?")
              .deleteAll()
              .typeString("Nice day!")
              .start();
          }}
        />
      </h2>
      <span className="pe block">{"</p>"}</span>
      <span className="po">{"<form>"}</span>
      <form action="" className="">
        <div className="flex items-center gap-3">
          <input type="text" className="input" placeholder="Name" />{" "}
          <input type="email" className="input" placeholder="Email" />
        </div>
        <input type="text" placeholder="Subject" className="input"/>
        <textarea name="" id="" className="input" placeholder="message"></textarea>
        <button>Send!</button>
      </form>
      <span className="po">{"</form>"}</span>

    </StyledForm>
  );
};

export default Form;
