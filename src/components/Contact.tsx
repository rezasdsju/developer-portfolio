
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="scroll-mt-20 my-12 sm:my-16 px-5 sm:px-8 md:px-10" id='contact'>

      {/* Section Header */}
      <div className="mb-8">
        <p className="text-[#157AD5] font-semibold text-lg">
          GET IN TOUCH
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#031f37]">
          Let's Work Together
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600 leading-relaxed">
          I am open to opportunities, collaborations and interesting projects.
          Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Contact Information */}
        <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 shadow-sm">

          <h2 className="text-xl font-bold text-[#031f37] mb-6">
            Contact Information
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#157AD5] shadow-sm">
                <MdEmail />
              </span>

              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a
                  href="mailto:rezaul2002104@gmail.com"
                  className="font-medium text-slate-700 hover:text-[#157AD5] transition-colors"
                >
                  rezaul2002104@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#157AD5] shadow-sm">
                <FaLocationDot />
              </span>

              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium text-slate-700">
                  Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#031f37] shadow-sm">
                <FaGithub />
              </span>

              <div>
                <p className="text-sm text-slate-500">GitHub</p>
                <a
                  href="https://github.com/rezasdsju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-700 hover:text-[#157AD5] transition-colors"
                >
                  github.com/rezasdsju
                </a>
              </div>

            </div>

           <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#031f37] shadow-sm">
                <FaGithub />
              </span>

              <div>
                <p className="text-sm text-slate-500">Linked In</p>
                <a
                  href="https://www.linkedin.com/in/rezaul-karim-rifat-833154370/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-700 hover:text-[#157AD5] transition-colors"
                >
                  linkedin.com/in/rezaul-karim-rifat
                </a>
              </div>

            </div>
            

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm sm:pb-2" >

          <h2 className="text-xl font-bold text-[#031f37] mb-6">
            Send Me a Message
          </h2>

          <div className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#157AD5] focus:ring-2 focus:ring-blue-100 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#157AD5] focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#157AD5] focus:ring-2 focus:ring-blue-100 transition"
            /> */}

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#157AD5] focus:ring-2 focus:ring-blue-100 transition"
            />

            <button
              type="button"
              className="w-full rounded-xl bg-[#103b7b] px-5 py-3 font-semibold text-white hover:bg-[#157AD5] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Send Message →
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
