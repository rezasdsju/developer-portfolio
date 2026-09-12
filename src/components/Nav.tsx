
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false)
  const handleHamburgerClick = ()=>{
    setIsHamburgerClicked(!isHamburgerClicked)
  }
  return (
    <div className="sticky top-0 z-50 ">

    <nav className="bg-white/95 backdrop-blur-md flex sm:grid grid-cols-3 mx-auto py-3 shadow-sm border-b border-slate-100">

      <h1 className={`flex items-center ml-3 font-extrabold text-2xl tracking-tight mx-auto text-center sm:pl-8 `}>
        <span className="text-[#157AD5]">R</span>
        <span className="text-[#32042f]">K</span>
        <span className="text-[#5559F7]">R</span>
      </h1>

      <ul className={`hidden sm:flex items-center justify-center gap-5 text-slate-700 font-medium text-sm `}>
        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })
            } className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Home
        </li>
        <li onClick={()=>document.getElementById('about')?.scrollIntoView()} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          About
        </li>
        <li onClick={()=>document.getElementById('projects')?.scrollIntoView()} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Projects
        </li>
        <li onClick={() => document.getElementById('skill')?.scrollIntoView()} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Skills
        </li>
        <li onClick={()=>document.getElementById('experience')?.scrollIntoView()} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Experience
        </li>
        <li onClick={()=>document.getElementById('contact')?.scrollIntoView()} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Contact
        </li>
      </ul>

      <div className="mx-auto flex items-center">
        <a href="/ressume.pdf" download className="hidden md:flex bg-slate-900 hover:bg-[#157AD5] text-white font-semibold px-4 py-2 items-center rounded-xl gap-2 transition-all duration-300 shadow-sm hover:shadow-md">
          Download CV
          <FaDownload className="text-sm" />
        </a>
      </div>

      <span onClick={handleHamburgerClick} className="flex justify-end items-center text-slate-800 pr-3 sm:hidden cursor-pointer">
        {!isHamburgerClicked?<GiHamburgerMenu className="text-xl" />:<FaXmark className="text-xl"/>}

      </span>

    </nav>
    <div className={`  ${isHamburgerClicked?'flex flex-col  items-center bg-lime-100 py-2':'hidden'}`}>
      <ul className="font-bold text-[#157AD5]">
        <li onClick={()=>{
          window.scrollTo({top:0, behavior:'smooth'})
          setIsHamburgerClicked(!isHamburgerClicked)}} className="cursor-pointer  hover:text-[#157AD5] transition-colors duration-200">
          Home
        </li>
        <li onClick={()=>{
          document.getElementById('about')?.scrollIntoView();
          setIsHamburgerClicked(!isHamburgerClicked)
          }} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          About
        </li>
        <li onClick={()=>{
          document.getElementById('projects')?.scrollIntoView();
          
          setIsHamburgerClicked(!isHamburgerClicked)}} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Projects
        </li>
        <li onClick={() => {
          document.getElementById('skill')?.scrollIntoView();
          setIsHamburgerClicked(!isHamburgerClicked)}} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Skills
        </li>
        <li onClick={()=>{
          document.getElementById('experience')?.scrollIntoView()
          setIsHamburgerClicked(!isHamburgerClicked)}} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Experience
        </li>
        <li onClick={()=>{
          document.getElementById('contact')?.scrollIntoView()
          setIsHamburgerClicked(!isHamburgerClicked)}} className="cursor-pointer hover:text-[#157AD5] transition-colors duration-200">
          Contact
        </li>
      </ul>
    </div>
          </div>

  );
}
