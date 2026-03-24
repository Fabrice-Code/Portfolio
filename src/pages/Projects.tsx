import ProjectCard from "../components/ProjectCard"
import { useState } from "react"

export default function Projects() {

  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Weather App",
      description: "Zeigt das Wetter",
      category: "JavaScript"
    },
    {
      title: "Todo App",
      description: "Aufgaben verwalten",
      category: "React"
    },
    {
      title: "Portfolio",
      description: "Meine Website",
      category: "React"
    }
  ]
    const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter)

  return (
    <div className="p-6 block m-16 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hover:scale-105 hover:shadow-2xl">

      <div className="flex gap-4 mb-6">

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
          />
        ))}
      </div>

    </div>
  )
}