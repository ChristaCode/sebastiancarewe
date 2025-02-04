import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Left Section - Name and Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Sebastian Carewe</div>
          <div className="hidden sm:flex text-sm text-gray-300">
            | +33 ??????? | SebastianCarewe@gmail.com
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>
        {/* Right Section - Language Switcher */}
        <div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Optional: Contact Info Below on Small Screens */}
      <div className="sm:hidden text-center py-2 text-gray-300 text-sm">
        +33 75 118 1445 | ChristaDCooke@gmail.com
      </div>
    </nav>
  );
};

export default NavBar;
