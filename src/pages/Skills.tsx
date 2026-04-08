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
                <span className="text-white text-2xl">02</span>
                <h2 className="text-white text-4xl font-bold mb-6">
                    Skills
                </h2>
                <div className="flex-1 h-0.5 bg-slate-200 ms-0.5"></div>
            </div>


            </div>
        </motion.section>
    )
}