import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import { useState } from "react";
import StyledConnect from "@/styles/styledcomponents/StyledConnect";

const Connect = () => {

  const media = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/david-ogaranya-enomah-133b60223/",
      svg: <GrLinkedinOption />,
    },
    {
      name: "Github",
      href: "https://github.com/Davetech101",
      svg: <BsGithub />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/Og_rhoze",
      svg: <AiOutlineTwitter />,
    },
    {
      name: "Download Resume",
      href: "/assets/David Enomah.pdf",
      svg: <TbFileDownload />,
    },
  ];

  return (
    <StyledConnect>
      {media.map((medium, idx) => (
        <Link
        target="_black"
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
