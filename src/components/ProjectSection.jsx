import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "A responsive portfolio site designed to present my work, skills, and experience with smooth navigation and modern UI.",
    image: "/projects/project1.jpg",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Biswajit-12/My-Portfolio",
  },
  {
    id: 2,
    title: "Password Manager",
    description:
      "This website securely saves and encrypts user passwords, ensuring privacy and easy access to login information anytime.",
    image: "/projects/project2.jpg",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Biswajit-12/Password-Manager-react-tailwindcss",
  },
  {
    id: 3,
    title: "Geolocator",
    description:
      "A web app that detects and displays a user’s current location on an interactive map using geolocation technology.",
    image: "/projects/project3.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Biswajit-12/Geolocator",
  },
  {
    id: 4,
    title: "E-Banking System",
    description:
      "Full featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project4.jpg",
    tags: ["Angular", "CSS", "Springboot", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Biswajit-12/E-Banking-System",
  },
  {
    id: 5,
    title: "Mo-Blog",
    description:
      "A responsive blog website enabling users to post articles, share thoughts, and connect with readers through an intuitive interface.",
    image: "/projects/project5.jpg",
    tags: ["Springboot", "CSS", "HTML"],
    demoUrl: "#",
    githubUrl: "https://github.com/Biswajit-12/Mo-blog",
  },
  {
    id: 6,
    title: "Scientific Calculator",
    description:
      "An interactive scientific calculator built using web technologies to handle basic and advanced math functions efficiently.",
    image: "/projects/project6.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Biswajit-12/Scientific_Calculator",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each projects was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card w-80 h-100 rounded-lg overflow-hidden shadow-xs card-hover"
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
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
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
            href="https://github.com/Biswajit-12"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
