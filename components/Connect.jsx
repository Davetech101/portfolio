import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import { useState } from "react";

const Connect = () => {
  const [hover, setHover] = useState(null);

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
    <div className="absolute bottom-10 right-10 flex flex-col gap-10 items-end">
      {media.map((medium, idx) => (
        <Link
          key={idx}
          href={medium.href}
          className="text-white text-4xl flex items-center gap-4"
          onMouseEnter={() => setHover(idx)}
          onMouseLeave={() => setHover(null)}
        >
          <span
            className={`text-2xl text-white-2 ${
              hover === idx ? "translate-x-0" : "translate-x-10 opacity-0 invisible"
            } transition-all`}
          >
            {medium.name}
          </span>
          <span>{medium.svg}</span>{" "}
        </Link>
      ))}
    </div>
  );
};

export default Connect;
0;
