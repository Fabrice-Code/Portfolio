import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="fixed w-[400px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-30 bottom-[-400px] left-[-180px]" />
        <div className="fixed w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-30 top-[-250px] right-[-200px]" />
    
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </>
  )
}

export default App