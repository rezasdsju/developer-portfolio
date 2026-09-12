import type { ProjectDataType } from "../../types/projectDataTypes"

interface FeaturedProjectsCardPropsTypes {
    project: ProjectDataType
}
export default function FeaturedProjectsCard({ project }: FeaturedProjectsCardPropsTypes) {
    return (
        <div className="border border-[#72ADF9] rounded-2xl p-5 pb-10 space-y-3" id="project-cards">
            <img src={project.imageUrl} alt="" className="h-40 w-full mx-auto" />
            <h2 className="font-bold text-2xl text-[#031f37] ">{project.title}</h2>
            <p>{project.description}</p>

<div className="flex flex-wrap gap-2 items-center justify-center">
  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
    {project.framework}
  </span>

  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
    {project.language}
  </span>

  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
    {project.additionalTechnology}
  </span>
</div>
            <div className="flex items-center justify-center gap-3 pt-2">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Live Demo
                </a>

                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}
