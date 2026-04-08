<<<<<<< HEAD
import { motion } from "framer-motion"

type Props = {
  title: string
  description: string
  tech: string[]
  github: string
}

export default function ProjectCard({ title, description, tech, github }: Props) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-white/10 backdrop-blur-md"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {tech.map((t, i) => (
          <span key={i} className="text-sm bg-gray-400 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        className="inline-block mt-4 text-purple-400 hover:underline"
      >
        GitHub →
      </a>


    </motion.div>
  )
=======
import { motion } from "framer-motion"

type Props = {
  title: string
  description: string
}

export default function ProjectCard({ title, description }: Props) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-white/10 backdrop-blur-md"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  )
>>>>>>> d48c480b76e43640fcf3309d5a6028869f61b1df
}