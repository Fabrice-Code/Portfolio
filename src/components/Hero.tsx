import { motion } from "framer-motion"
import logo from "../assets/transparent.png"
import git from "../assets/github-icon.svg"
import linkedIn from "../assets/linkedin-icon.svg"
// @ts-ignore
import "../index.css"

type Props = {
  github: string
  linkedin: string
}

export default function Hero({ github, linkedin }: Props) {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center md:gap-60 px-24 lg:px-16 py-12">
      <div className="text-center md:text-left space-y-6">

        <motion.h1
          className="[font-size:var(--heading-size)] font-bold bg-gradient-to-r from-purple-600 to-pink-100 text-transparent bg-clip-text text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meine Developer Reise
        </motion.h1>

        <motion.p
          className="[font-size:var(--text-size)] leading-[var(--line-height)] text-center mt-4 text-xl text-[#E5E7EB]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Ich baue moderne Webseiten mit React, TypeScript und Tailwind CSS. Hier teile ich meine Projekte und Erfahrungen.
        </motion.p>

      <div className="w-max place-self-center bg-black/20 backdrop-blur-xl rounded-2xl border-2 border-white/10 shadow-2xl">

        <motion.a
          className="mt-6 inline-block text-2xl text-[#E5E7EB] cursor-pointer"
          href={github}
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => window.open(github, "_blank")}
        >
          <motion.img 
            src={git} 
            alt="GitHub" 
            className="max-w-[50px] mr-2" 
          />
        </motion.a>

        <motion.a
          className="mt-6 inline-block text-2xl text-[#E5E7EB] cursor-pointer"
          href={linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => window.open(linkedin, "_blank")}
        >
          <motion.img 
            src={linkedIn} 
            alt="LinkedIn" 
            className="max-w-[50px] mr-2" 
          />
        </motion.a>

      </div>

      </div>
      <div className="-z-10">
        <div className="place-items-center items-center max-w-full h-auto aspect-square object-cover">
        <motion.img
          src={logo}
          alt="Hero Bild"
          className="max-w-[650px] rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        />
        </div>
      </div>
    </section>

  )
}