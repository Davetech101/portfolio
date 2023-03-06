import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";

const Connect = () => {
  return (
    <div className="absolute bottom-10 right-10 flex flex-col gap-10">
      <GrLinkedinOption color="white" />
      <BsGithub color="white" />
      <AiOutlineTwitter color="white" />
      <TbFileDownload color="white"/>
    </div>
  );
};

export default Connect;
