import ProjectCard from "../components/ProjectCard"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Projects() {

  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Weather App",
      description: "Zeigt das Wetter",
      category: "JavaScript",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Fabrice-Code"
    },
    {
      title: "Todo App",
      description: "Aufgaben verwalten",
      category: "React",
      tech: ["React", "TypeScript", "API"],
      github: "https://github.com/Fabrice-Code"
    },
    {
      title: "Portfolio",
      description: "Meine Website",
      category: "React",
      tech: ["React", "TypeScript"],
      github: "https://github.com/Fabrice-Code/Portfolio"
    }
  ]
    const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter)

  return (
    <motion.section
      id="about"
      className="min-h-screen p-20 block"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
    {/* className="flex m-16 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hover:scale-110 hover:shadow-2xl gap-4" */}

      <div className="flex items-center gap-8 mb-16">
            <span className="bg-clip-text bg-gradient-to-r from-[--text-gradient-from] to-[--text-gradient-to] text-transparent text-3xl font-bold">03</span>
            <h2 className="bg-clip-text bg-gradient-to-r from-[--text-gradient-from] to-[--text-gradient-to] text-transparent text-4xl font-bold">
                Projekte
            </h2>
            <div className="flex-1 h-0.5 bg-[--text-gradient-to] text-transparent ms-0.5"></div>
        </div>

      <div className="flex gap-4 mb-20 text-white justify-center">

        <button onClick={() => setFilter("All")}
          className={`px-3 py-2 rounded ${
            filter === "All" ? "bg-red-400 text-white" : ""
          }`}  
        >
          Alle
        </button>

        <button onClick={() => setFilter("React")}
          className={`px-3 py-2 rounded ${
            filter === "React" ? "bg-blue-500 text-white" : ""
          }`}
        >
          React
        </button>

        <button onClick={() => setFilter("JavaScript")}
          className={`px-3 py-2 rounded ${
            filter === "JavaScript" ? "bg-green-500 text-white" : ""
          }`}
        >
          JavaScript
        </button>

      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech || []}
            github={project.github || ""}
          />
        ))}
      </div>

    </motion.section>
  )
}