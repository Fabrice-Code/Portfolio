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
            <span className="bg-clip-text bg-gradient-to-r from-[--text-gradient-from] to-[--text-gradient-to] text-transparent text-3xl font-bold">01</span>
            <h2 className="bg-clip-text bg-gradient-to-r from-[--text-gradient-from] to-[--text-gradient-to] text-transparent text-4xl font-bold">
                Über mich
            </h2>
            <div className="flex-1 h-0.5 bg-[--text-gradient-to] text-transparent ms-0.5"></div>
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
}