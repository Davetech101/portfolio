import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import { useState } from "react";
import StyledConnect from "@/styles/styledcomponents/StyledConnect";

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

  return (
    <StyledConnect>
      {media.map((medium, idx) => (
        <Link
          key={idx}
          href={medium.href}
        >{medium.svg}
        </Link>
      ))}
    </StyledConnect>
  );
};

export default Connect;
0;
