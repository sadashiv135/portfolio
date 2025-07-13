import logo from "../assets/Chatgpt2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center"> 
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/sadashiv-mhaskar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform hover:scale-110"
        >
            <FaLinkedin />
        </a>
        <a
          href="https://github.com/sadashiv135/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform hover:scale-110"
        >
            <FaGithub />
        </a>
            {/* <FaInstagram />
            <FaSquareXTwitter />  */}
         <a
          href="https://leetcode.com/u/sada111/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform hover:scale-110"
        >
             <SiLeetcode />
        </a>     
        </div>
    </nav>
  );
};

export default Navbar