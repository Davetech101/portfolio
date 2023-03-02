import Link from "next/link"
import { HiLightBulb } from 'react-icons/hi';

const Navbar = () => {
  return (
    <>
        <header className="dark:text-white flex items-center justify-between">
            <Link href="/">
                <h2 className="text-3xl font-bold underline text-red dark:text-blue">David Enomah</h2>
            </Link>

            <div className="flex items-center justify-between">
                <nav >
                <ul className="flex items-center justify-between">
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="about">About Me</Link>
                    </li>
                    <li>
                        <Link href="contact">Contact me</Link>
                    </li>
                </ul>
            </nav>

            <button>
                <HiLightBulb/>
            </button>
            </div>
        </header>
    </>
  )
}

export default Navbar