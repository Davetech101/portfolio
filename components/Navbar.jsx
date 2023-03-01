import Link from "next/link"
import { HiLightBulb } from 'react-icons/hi';

const Navbar = () => {
  return (
    <>
        <header>
            <Link href="/">
                <h2>David Enomah</h2>
            </Link>

            <nav>
                <ul>
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
        </header>
    </>
  )
}

export default Navbar