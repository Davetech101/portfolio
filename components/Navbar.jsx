import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import StyledNavbar from "../styles/styledcomponents/StyledNavbar";
import Connect from "./Connect";
import { FaHamburger } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Me",
      href: "/about",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Contact me",
      href: "/contact",
    },
  ];

  const nav = navLinks.map((link) => {
    const handleClick = (e) => {
      // e.preventDefault();
      setShowNav(false), router.push(`/${link.href}`);
    };

    return (
      <li key={link.href}>
        <button
          onClick={handleClick}
          passHref
          // href={link.href}
          className={
            router.pathname === link.href
              ? "active a flex gap-3 items-center"
              : "flex a gap-3 items-center"
          }
        >
          <span className="bracket">{"<"}</span>
          {link.title}
          <span className="bracket">{"/>"}</span>
        </button>
      </li>
    );
  });

  return (
    <StyledNavbar>
      <header className="desktop">
        <div>
          <nav>
            <ul>{nav}</ul>
          </nav>
        </div>

        <Link href="/" className="logo flex gap-5">
          <span className={router.pathname === "/" ? "text-white" : ""}>
            {"<"}
          </span>
          <h2 className="inline">
            <span className="dev">dev</span>
            <span className="dave">dave</span>
          </h2>
          <span className={router.pathname === "/" ? "text-orange" : ""}>
            {"/>"}
          </span>
        </Link>

        <Connect />
      </header>

      <header className="mobile">
        <Link href="/" className="logo flex gap-5">
          <span className={router.pathname === "/" ? "text-white" : ""}>
            {"<"}
          </span>
          <h2 className="inline">
            <span className="dev">dev</span>
            <span className="dave">dave</span>
          </h2>
          <span className={router.pathname === "/" ? "text-orange" : ""}>
            {"/>"}
          </span>
        </Link>

        <button className="toggle" onClick={() => setShowNav((prev) => !prev)}>
          {showNav ? <BsChevronDoubleRight /> : <FaHamburger />}
        </button>

        <div className="menu">
          <div
            onClick={() => setShowNav(false)}
            className={showNav ? "modal show" : "modal"}
          ></div>

          <div className={showNav ? "mobileNav show" : "mobileNav"}>
            <nav>
              <ul>{nav}</ul>
            </nav>
            <Connect />
          </div>
        </div>
      </header>
    </StyledNavbar>
  );
};

export default Navbar;
