import React from 'react'
import { Project } from 'src/data/project-data'
import TechBubble from '../atoms/bubbles/techBubble'

type Props = {
    index: number,
    project: Project,
}

export const ProjectCard = ({ index, project }: Props) => {
    return (
        <div
            key={index}
            className="rounded-lg overflow-hidden bg-slate-600/10 transition-all motion-reduce:transition-none duration-300 relative group"
        >
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            )}
            <div className="p-4 overflow-auto">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                {project.extraDescription && (<div className="hidden max-w-[98%] font-light transition-opacity duration-200 ease-in-out group-hover:block my-2 text-wrap">
                    {project.extraDescription}
                </div>)}
                <div className="text-sm text-gray-500 flex flex-wrap gap-2 py-1">
                    {project.technologies.map((tech, i) => (
                        <TechBubble index={i} tech={tech} />
                    ))}
                </div>
                {project.link && (
                    <a
                        href={project.link}
                        className="text-blue-500 hover:underline my-4 block"
                    >
                        View Project
                    </a>
                )}
                
            </div>
        </div>
    )
}