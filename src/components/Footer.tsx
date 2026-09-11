
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail, IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#031f37] text-white">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-5 sm:px-8 md:px-10 py-10">

        {/* Logo / Name */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-extrabold tracking-tight">
            <span className="text-[#157AD5]">Rezaul</span>{" "}
            <span className="text-white">Karim Rifat</span>
          </h2>

          <p className="mt-2 text-slate-300 text-sm">
            Full Stack Web Developer
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-slate-300">
            <li className="cursor-pointer hover:text-[#157AD5] transition-colors">
              About
            </li>

            <li className="cursor-pointer hover:text-[#157AD5] transition-colors">
              Projects
            </li>

            <li className="cursor-pointer hover:text-[#157AD5] transition-colors">
              Skills
            </li>

            <li className="cursor-pointer hover:text-[#157AD5] transition-colors">
              Experience
            </li>

            <li className="cursor-pointer hover:text-[#157AD5] transition-colors">
              Contact
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end items-center gap-3">

          <a
            href="https://www.linkedin.com/in/rezaul-karim-rifat-833154370/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-[#157AD5] hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/rezasdsju"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-[#157AD5] hover:scale-110 transition-all duration-300"
          >
            <IoLogoGithub />
          </a>

          <a
            href="mailto:rezaul2002104@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-[#157AD5] hover:scale-110 transition-all duration-300"
          >
            <IoIosMail />
          </a>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-5 py-4 text-center text-sm text-slate-400">
        © 2026 Rezaul Karim Rifat. All rights reserved.
      </div>

    </footer>
  );
}
