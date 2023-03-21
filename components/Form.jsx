import { useState, useCallback } from "react";
import Typewriter from "typewriter-effect";
import StyledForm from "@/styles/styledcomponents/StyledForm";
import { GiPawn } from "react-icons/gi";
import Link from "next/link";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const onChange = useCallback(
    (e) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      console.log(formData);
    },
    [formData]
  );

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const submitValue = {
        ...formData,
      };
      console.log(formData);
      // e.target.reset();
    },
    [formData]
  );

  return (
    <StyledForm>
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

        <form
          action="mailto:enomahog@gmail.com"
          method="post"
          enctype="text/plain"
          className=""
          onSubmit={submitHandler}
        >
          <div className="namemail flex items-center gap-3">
            <input
              type="text"
              className="input input1"
              placeholder="Name"
              id="name"
              onChange={onChange}
            />

            <input
              type="email"
              className="input input1"
              placeholder="Email"
              id="email"
              onChange={onChange}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="input"
            id="subject"
            onChange={onChange}
          />

          <textarea
            id="body"
            className="input"
            placeholder="message"
            onChange={onChange}
          ></textarea>

          <Link
            className="button"
            href={`mailto:enomahog@gmail.com?Subject=${formData.subject}&body=${formData.body}`}
          >
            Submit
          </Link>
        </form>

        <span className="po">{"</form>"}</span>
      </div>

      <GiPawn className="pawn" />
    </StyledForm>
  );
};

export default Form;
