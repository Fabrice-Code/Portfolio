export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 flex justify-between items-center p-6">

      <div>
          <h1 className="text-2xl font-bold text-purple-400">Fabrice's Reise</h1>
      </div>

      <div className="flex">
      <div className="flex gap-6">
        <a href="#hero" className="text-red-500 hover:text-emerald-400 transition">Home</a>
        <a href="#about" className="text-white hover:text-purple-500 transition">About</a>
        <a href="#skills" className="text-white hover:text-purple-500 transition">Skills</a>
        <a href="#projects" className="text-white hover:text-purple-500 transition">Projects</a>
        <a href="#contact" className="text-white hover:text-purple-500 transition">Contact</a>
      </div>
      </div>

    </nav>
  )
}

