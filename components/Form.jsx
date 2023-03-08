import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Form = () => {
    const inputStyles = "border-2 border-white-2 border-solid rounded-xl p-5 w-full text-2xl"
  return (
    <div className="absolute top-2/4 -translate-y-3/4 w-9/12">
      <p className="text-5xl mb-6">Have a message?</p>

      <form action="" className="flex justify-between w-full gap-10">
       <div className="flex flex-col gap-10 w-full">
       <input type="text" className={inputStyles} placeholder="Name"/>{" "}
        <input type="email" className={inputStyles} placeholder="Email"/>
       </div>
        <textarea
          name=""
          id=""
          className={inputStyles}
          placeholder="message"
        ></textarea>
      </form>

      <div className="">
        <p className="">
            Let&apos;s 
            <span className="">Connect</span>
        </p>

        <div className="">
        <GrLinkedinOption /> <BsGithub /> <AiOutlineTwitter />
        </div>
      </div>
    </div>
  );
};

export default Form;
