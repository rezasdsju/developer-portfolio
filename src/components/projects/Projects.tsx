import { use, useState } from "react";
import type { ProjectDataType } from "../../types/projectDataTypes";
import FeaturedProjectsCard from "./FeaturedProjectsCard";
import { Bounce, toast } from "react-toastify";


interface ProjectsPropsTypes {
    projectsDataPromise: Promise<ProjectDataType[]>
}
const Projects = ({ projectsDataPromise }: ProjectsPropsTypes) => {
    const projects = use(projectsDataPromise)
    const [viewAllProject, setViewAllProject] = useState<boolean>(false)
    // console.log(projects)
    const handleViewAllProject = () => {
        setViewAllProject(!viewAllProject)
        document.getElementById("project-cards")?.scrollIntoView({
            behavior: "smooth"
        });
        if (!viewAllProject) {
            toast.success(`All of ${projects.length} Project are shown`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }
    }
    return (
        <div className="sm:mt-15 scroll-mt-20" id='projects'>
            <div className="grid grid-cols-1 sm:grid-cols-12 px-3 sm:px-8">
                <div className="sm:col-span-8">
                    <h2 className="text-[#17345f] text-2xl font-bold">My Projects</h2>
                    <div className="sm:hidden">
                        <p className="text-lime-600">{`Total ${projects.length} Projects`}</p>
                        <button
                            onClick={handleViewAllProject}
                            className="group flex items-center gap-2 text-[#103b7b] text-2xl font-bold hover:text-blue-600 transition-colors"
                        >
                            View All Projects
                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                →
                            </span>
                        </button>
                    </div>
                    <h1 className="text-3xl font-bold text-[#2269d4]">Featured Projects</h1>
                    <div>
                        <p>Here are some of the projects I have build. Each project helped me learn and improve my skills in web development</p>
                    </div>
                </div>
                <div className="sm:col-span-4 flex justify-end items-center pr-10 pt-5 sm:pt-0">
                    <div className="hidden sm:block">
                        <p className="text-lime-600">{`Total ${projects.length} Projects`}</p>
                        <button
                            onClick={handleViewAllProject}
                            className="group flex items-center gap-2 text-[#103b7b] text-2xl font-bold hover:text-blue-600 transition-colors"
                        >
                            View All Projects
                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mx-5  md:mx-10 mt-5 sm:mt-7 md:mt-9">
                {projects.map(project => {
                    if (viewAllProject) {
                        return (<FeaturedProjectsCard key={project.id} project={project}></FeaturedProjectsCard>)
                    }
                    if (project.rating === 5) {
                        return (<FeaturedProjectsCard key={project.id} project={project}></FeaturedProjectsCard>)
                    }
                })}
            </div>
        </div>
    );
};

export default Projects;