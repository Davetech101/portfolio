import Link from "next/link";

import StyledNavbar from "../styles/styledcomponents/StyledNavbar";
import Connect from "./Connect";

const Navbar = () => {
  const navLinks = [
    {
      title: "About Me",
      href: "about",
    },
    {
      title: "Portfolio",
      href: "portfolio",
    },
    {
      title: "Contact me",
      href: "contact",
    },
  ];

  const nav = navLinks.map((link) => (
    <li key={link.href}>
      <Link href={link.href}>{link.title}</Link>
    </li>
  ));

  return (
    <StyledNavbar>
      <header>
        <div>
          <nav>
            <ul>{nav}</ul>
          </nav>
        </div>

        <Link href="/" className="logo">
          <h2>
            <span className="dev">dev</span><span className="dave">dave</span>
          </h2>
        </Link>

        <Connect />
      </header>
    </StyledNavbar>
  );
};

export default Navbar;
