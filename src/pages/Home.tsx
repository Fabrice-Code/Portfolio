import Hero from "../components/Hero"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Skills from "../pages/Skills"

export default function Home() {
  return (
    <div className="items-center">
      <section id="hero" className="py-16">
        <Hero github="https://github.com/Fabrice-Code" linkedin="https://linkedin.com" />
      </section>

      <section id="about" className="py-16">
        <About />
      </section>

      <section id="skills" className="py-16">
        <Skills />
      </section>

      <section id="projects" className="py-16">
        <Projects />
      </section>

      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  )
}