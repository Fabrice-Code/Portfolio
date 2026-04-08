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

export default App