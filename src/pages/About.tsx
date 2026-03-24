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
}