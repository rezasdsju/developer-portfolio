import { FaRocket } from "react-icons/fa";

export default function Experience() {
  return (
    <div className="scroll-mt-20 my-12 sm:my-16 px-5 sm:px-8 md:px-10" id="experience">

      {/* Section Header */}
      <div className="mb-8">
        <p className="text-[#157AD5] font-semibold text-lg">
          My Experience
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#031f37]">
          Journey So Far
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-blue-200 pl-6 space-y-8">

          <div className="relative">
            <span className="absolute -left-8.5 top-1 w-4 h-4 rounded-full bg-[#157AD5] border-4 border-white shadow"></span>

            <p className="text-sm font-semibold text-[#157AD5]">
              2025 - Present
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#031f37] mt-1">
              Self Learning and Project Building
            </h2>

            <p className="text-slate-600 mt-2 leading-relaxed">
              Learning Web Development, building personal projects and
              continuously improving my skills.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-8.5 top-1 w-4 h-4 rounded-full bg-[#5559F7] border-4 border-white shadow"></span>

            <p className="text-sm font-semibold text-[#5559F7]">
              Skills Gained
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Python
              </span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Django
              </span>

              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                HTML
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                CSS
              </span>

              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                JavaScript
              </span>

              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                TypeScript
              </span>

              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
                Tailwind CSS
              </span>

              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
                React
              </span>
            </div>
          </div>

        </div>

        {/* Highlight Card */}
        <div className="flex justify-center">

          <div className="relative overflow-hidden w-full max-w-md rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-100 px-6 py-10 sm:px-10 text-center shadow-md hover:shadow-xl transition-shadow duration-300">

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl"></div>

            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-200/40 blur-2xl"></div>

            <div className="relative">

              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#157AD5] shadow-md">
                <FaRocket />
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#031f37] mt-5">
                Always Learning,
                <br />
                Always Building
              </h2>

              <p className="mt-3 text-slate-600">
                Better code, better projects, better skills.
              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}