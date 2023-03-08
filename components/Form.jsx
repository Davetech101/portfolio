import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Form = () => {
  const inputStyles =
    "border-2 border-white-2 border-solid rounded-xl p-5 w-full text-2xl";
  const svg = "text-4xl";
  return (
    <div className="absolute top-2/4 -translate-y-1/2 w-9/12">
      <p className="text-5xl mb-8 capitalize">Have a message?</p>

      <form action="" className="flex justify-between w-full gap-10 mb-16">
        <div className="flex flex-col gap-10 w-full">
          <input type="text" className={inputStyles} placeholder="Name" />{" "}
          <input type="email" className={inputStyles} placeholder="Email" />
        </div>
        <textarea
          name=""
          id=""
          className={inputStyles}
          placeholder="message"
        ></textarea>
      </form>

      <div className="flex flex-col gap-8">
        <p className="text-3xl text-white-2">
          Let&apos;s &nbsp;
          <span className="text-white">Connect!</span>
        </p>

        <div className="flex gap-12">
          <Link href="">
          <GrLinkedinOption className={svg} /> 
          </Link>
          <Link href=""><BsGithub className={svg} /></Link>{" "}
          <Link href=""><AiOutlineTwitter className={svg} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
