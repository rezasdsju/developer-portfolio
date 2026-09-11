import { FaDownload } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white flex sm:grid grid-cols-3 mx-auto py-3 shadow-md">
        
        <h1 className="flex items-center ml-3 font-bold text-2xl"><span className="text-[#157AD5] ">R</span><span className="text-[#32042f]">K</span><span className="text-[#5559F7]">R</span></h1>
        <ul className="hidden sm:flex items-center gap-5  text-black">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Contact</li>

        </ul>
        <div className="mx-auto flex items-center">
            <button className=" hidden md:flex sm:border-1 border-[#9d9dc7] btn btn-secondary text-white font-bold px-4 py-2  items-center rounded-2xl gap-2">Download CV<FaDownload /></button>
        </div>
        <span className="flex justify-end items-center text-white pr-2 sm:hidden"><GiHamburgerMenu /></span>
    </nav>
  )
}
