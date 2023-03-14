import { GiPawn } from "react-icons/gi";
import { GiRingingBell } from "react-icons/gi";
import StyledForm from "@/styles/styledcomponents/StyledForm";
import Typewriter from "typewriter-effect";
import { useState } from "react";

const Form = () => {
  const [ring, setRing] = useState(false);

  return (
    <StyledForm>
      <GiPawn className="pawn" />
      <GiRingingBell
        className={ring ? "bell ringbell" : "bell"}
        onMouseEnter={() => setRing(true)}
        onMouseLeave={() => setRing(false)}
      />
      <div className="part1">
        <span className="po">{"<h2>"}</span>
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
        <span className="pe block">{"</h2>"}</span>
      </div>
      <div className="part2">
        <span className="po">{"<form>"}</span>
        <form action="" className="">
          <div className="flex items-center gap-3">
            <input type="text" className="input input1" placeholder="Name" />{" "}
            <input type="email" className="input input1" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" className="input" />
          <textarea
            name=""
            id=""
            className="input"
            placeholder="message"
          ></textarea>
          <button>Send!</button>
        </form>
        <span className="po">{"</form>"}</span>
      </div>
    </StyledForm>
  );
};

export default Form;
