import { FaDownload } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#061122] flex sm:grid grid-cols-3 mx-auto py-3">
        
        <h1 className="flex items-center ml-3 font-bold text-2xl"><span className="text-[#157AD5] ">R</span><span className="text-[#F9FAFB]">K</span><span className="text-[#5559F7]">R</span></h1>
        <ul className="hidden sm:flex items-center gap-5  text-white">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Contact</li>

        </ul>
        <div className="mx-auto flex items-center">
            <button className=" hidden md:flex sm:border-2 border-[#5559F7] bg-[#1C2948] text-white font-bold px-4 py-2  items-center rounded-2xl gap-2">Download CV<FaDownload /></button>
        </div>
        <span className="flex justify-end items-center text-white pr-2 sm:hidden"><GiHamburgerMenu /></span>
    </nav>
  )
}
