import { motion } from "framer-motion"

export default function Skills() {
    return (
        <motion.section
        id="skills"
        className="min-h-screen p-20 block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >

            <div className="text-center">
                <div className="flex items-center gap-8 mb-16">
                <span className="bg-clip-text bg-gradient-to-r from-[--text-gradient-from] to-[--text-gradient-to] text-transparent text-3xl font-bold">02</span>
                <h2 className="bg-clip-text bg-gradient-to-r from-[--text-gradient-from] to-[--text-gradient-to] text-transparent text-4xl font-bold">
                    Skills
                </h2>
                <div className="flex-1 h-0.5 bg-[--text-gradient-to] text-transparent ms-0.5"></div>
            </div>


            </div>
        </motion.section>
    )
}