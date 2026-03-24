import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 backdrop-blur-md bg-white/10 fixed w-full top-0">

      <div>
        <Link className="hover:text-red-600 hover:underline" to="/">
          <h1 className="text-xl font-bold">Fabrice's Reise</h1>
        </Link>
      </div>

      <div className="flex gap-6">
        <Link className="hover:text-purple-500 transition" to="/pages/Projects">
          Projects
        </Link>
        <Link className="hover:text-purple-500 transition" to="/pages/Contact">
          Contact
        </Link>
        <Link className="hover:text-purple-500 transition" to="/pages/About">
          About
        </Link>
      </div>

    </nav>
  )
}