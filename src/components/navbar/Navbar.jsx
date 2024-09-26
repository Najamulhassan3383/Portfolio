import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";
import logo from "../../../public/logo-removebg-preview.svg";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-16 px-4 flex flex-row justify-between items-center bg-[#4E7982] overflow-hidden">
      {/* Sidebar */}
      <div className="block md:hidden">
        <Sidebar />
      </div>

      <img src={logo} alt="logo" className="w-32 h-32" />

      {/* Links */}
      <div className="hidden md:flex flex-row gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-80}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* najam */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="flex flex-row justify-center items-center gap-2">
          <a
            href="/Najam ul Hassan.pdf"
            download
            className="hidden md:flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/najamul-hassan-977392200/"
            target="_blank"
            rel="noreferrer"
            className="linkedin hover:text-blue-500"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/Najamulhassan3383"
            target="_blank"
            rel="noreferrer"
            className="github hover:text-gray-500"
          >
            <FaGithubSquare className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/u/najmulhassan721/"
            target="_blank"
            rel="noreferrer"
            className="github hover:text-green-500"
          >
            <SiLeetcode className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
