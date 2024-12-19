import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectData = [
    {
      title: "Project 1",
      language: "Java",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "logo",
      link: "./",              
    }, 
    {
      title: "Project 2",
      language: "Java",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "logo",
      link: "./",              
    }, 
    {
      title: "Project 3",
      language: "Java",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "logo",
      link: "./",              
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="projects"
        className="bg-battleshipGray-light text-black flex-grow py-16 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <p className="text-chesnut-dark font-bold italic text-center text-xl sm:text-2xl tracking-wider font-serif">
                Projects
            </p>

          <h2 className="text-trueBlue-dark text-center text-2xl sm:text-4xl font-bold mb-8 tracking-wider">
            PREVIOUS WORK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectData.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                language={project.language}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
