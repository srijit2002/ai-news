import { AiFillGithub} from "react-icons/ai";
import {SiLeetcode} from "react-icons/si"
import { MdEmail } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="py-4 flex justify-center sm:justify-between items-center bg-gray-dark lg:px-20 px-6">
      <ul className="text-gray-500 flex text-sm sm:text-lg gap-6 font-semibold items-center">
        <li className="hover:text-white cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-white cursor-pointer">
          <a href="https://www.linkedin.com/in/srijit7098/">About us</a>
        </li>
        <li className="hover:text-white cursor-pointer">
          <a href="https://github.com/srijit2002">
            <AiFillGithub size={28} />
          </a>
        </li>
        <li className="hover:text-white cursor-pointer">
          <a href="https://leetcode.com/onlyerror/">
            <SiLeetcode size={28} />
          </a>
        </li>
      </ul>
      <a href="mailto:srijitm906@gmail.com" className="hidden sm:inline">
        <button className="bg-yellow flex items-center hover:opacity-70 gap-2 p-4 py-2 rounded-sm font-semibold text-lg">
          <MdEmail size={25} />
          Contact us
        </button>
      </a>
    </nav>
  );
};
