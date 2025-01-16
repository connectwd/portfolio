import { projects } from "src/data/project-data";
import TechBubble from "../atoms/techBubble";
import { ProjectCard } from "../molecule/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-10 max-w-6xl mx-auto px-3">
      <div className="container px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid col-auto gap-8 min-w-[100%] max-w-min">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}