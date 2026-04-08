<<<<<<< HEAD
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen p-20 block"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
        
        <div className="flex items-center gap-8 mb-16">
            <span className="text-white text-2xl">01</span>
            <h2 className="text-white text-4xl font-bold mb-6">
                Über mich
            </h2>
            <div className="flex-1 h-0.5 bg-slate-200 ms-0.5"></div>
        </div>

            <div className="max-w-4xl mx-auto text-center">

                <p className="text-gray-400 text-lg leading-relaxed">
                Ich bin ein angehender Frontend Developer mit Fokus auf React und TypeScript.
                Aktuell baue ich moderne Web Apps und entwickle meine Fähigkeiten täglich weiter.
                </p>

                <div className="mt-10">
                <h3 className="text-white text-2xl font-semibold mb-4">Skills</h3>

                <div className="flex flex-wrap justify-center gap-3">
                    {["React", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"].map((skill, i) => (
                    <span
                        key={i}
                        className="px-4 py-2 bg-zinc-400 rounded-lg text-sm hover:bg-purple-500 transition"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.section>
  )
=======
type Props = {
  github: string
}

export default function About({ github }: Props) {
  return (
    <div>
        <div className="place-items-center flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-red-900 font-bold">
                About Seite
            </h1>

            <p className="text-gray-700">
                Hier finden Sie Informationen über mich und meine Projekte.
            </p>
        </div>

        <footer className="items-center bg-gray-800 text-white text-center">
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                GitHub
            </a>
        </footer>
    </div>
  )
>>>>>>> d48c480b76e43640fcf3309d5a6028869f61b1df
}