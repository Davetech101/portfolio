import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";

const Connect = () => {
  const media = [
    {
      name: "LinkedIn",
      href: "",
      svg: <GrLinkedinOption />,
    },
    {
      name: "Github",
      href: "",
      svg: <BsGithub />,
    },
    {
      name: "Twitter",
      href: "",
      svg: <AiOutlineTwitter />,
    },
    {
      name: "Download Resume",
      href: "",
      svg: <TbFileDownload />,
    },
  ];
  const yes = "TbFileDownload";
  return (
    <div className="absolute bottom-10 right-10 flex flex-col gap-10">
      {media.map((medium, idx) => (
        <Link key={idx} href={medium.href} className="text-white text-4xl">
          <span>{medium.name}</span>
          <span>{medium.svg}</span>{" "}
        </Link>
      ))}
    </div>
  );
};

export default Connect;
