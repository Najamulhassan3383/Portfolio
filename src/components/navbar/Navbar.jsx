import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../../public/logo-removebg-preview.svg";
const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
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
          <a
            key={link.name}
            href={link.href}
            className="text-white hover:text-blue-500"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* button to download resume */}
      <a
        href="/NajamUlHassan.pdf"
        download
        className="hidden md:flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Download Resume
      </a>

      {/* najam */}
      {/* <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="flex flex-row justify-center items-center gap-2">
          <a
            href="https://www.linkedin.com/in/najamul-hassan-977392200/"
            target="_blank"
            rel="noreferrer"
            className="linkedin hover:text-blue-500"
          >
            <FaLinkedin className="w-8 h-8" />
            
          </a>
          <a href="#" target="_blank" className="github hover:text-gray-500">
            <FaGithubSquare className="w-8 h-8" />
          </a>
          <a href="#" target="_blank" className="github hover:text-green-500">
            <SiLeetcode className="w-8 h-8" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
