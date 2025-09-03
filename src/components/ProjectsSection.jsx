import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BookWorm🐛",
    description:
      "Discover your next favorite read with Bookworm – a social platform for readers to share recommendations, showcase their personal library, and connect with fellow book lovers.",
    image: "/projects/project1.png",
    tags: ["React Native", "TailwindCSS", "NodeJs", "MongoDb"],
    demoUrl: "#",
    githubUrl: "https://github.com/vaibhavC1302/bookworm",
  },
  {
    id: 2,
    title: "FitTracker ֎🇦🇮",
    description: `Your AI Personal Trainer in Your Pocket
FitTrack delivers real-time form feedback and adaptive workout plans powered by Grok AI. Track every set, rep, and weight with a smart, intuitive logger.`,
    image: "/projects/project2.png",
    tags: ["React-Native", "Nativewind", "Grok Ai", "Sanity"],
    demoUrl: "#",
    githubUrl: "https://github.com/vaibhavC1302/FitnessAi",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 */}
        <div className="flex flex-col gap-14 items-center justify-center md:flex-row ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-80"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary transition-colors duration-300">
                      Source Code:{" "}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vaibhavC1302"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
