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
}