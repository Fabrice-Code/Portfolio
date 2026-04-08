<<<<<<< HEAD
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="fixed w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]" />
        <div className="fixed w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-30 bottom-[-100px] right-[-100px]" />
    
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </>
  )
}

=======
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

>>>>>>> d48c480b76e43640fcf3309d5a6028869f61b1df
export default App