import Link from "next/link";
import { HiLightBulb } from "react-icons/hi";

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
      <Link className="text-3xl dark:text-white-2" href={link.href}>{link.title}</Link>
    </li>
  ));

  return (
    <>
      <header className="dark:text-white flex items-center justify-between">
        <Link href="/">
          <h2 className="text-6xl font-bold dark:text-white">David Enomah</h2>
        </Link>

        <div className="flex items-center justify-between w-2/5 gap-20">
          <nav className="w-full">
            <ul className="flex items-center justify-between">
              {nav}
            </ul>
          </nav>

          <button className="text-6xl rotate-180">
            <HiLightBulb />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
