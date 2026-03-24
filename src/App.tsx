import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

import { Routes, Route } from "react-router-dom"
import About from "./pages/About"

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Routes>
          <Route path="pages/projects" element={<Projects />} />
          <Route path="pages/contact" element={<Contact />} />
          <Route path="pages/about" element={<About github={"https://github.com/Fabrice-Code"} />} />
        </Routes>
      </main>
    </>
  )
}

export default App