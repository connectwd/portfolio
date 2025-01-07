const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built in Next.js.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      image: "/images/portfolio.png",
      link: "https://myportfolio.com",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="text-sm text-gray-500 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="bg-gray-200 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline mt-4 block"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  