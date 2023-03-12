import Link from "next/link";
import { useRouter } from "next/router";
import StyledNavbar from "../styles/styledcomponents/StyledNavbar";
import Connect from "./Connect";

const Navbar = () => {
  const router = useRouter();
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
      <Link
        href={link.href}
        className={router.pathname === link.href ? "active" : ""}
      >
        {link.title}
      </Link>
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

        <Link href="/" className="logo flex gap-5">
          <span>{"<"}</span>
          <h2 className="inline">
            <span className="dev">dev</span>
            <span className="dave">dave</span>
          </h2>
          <span>{"/>"}</span>
        </Link>

        <Connect />
      </header>
    </StyledNavbar>
  );
};

export default Navbar;
