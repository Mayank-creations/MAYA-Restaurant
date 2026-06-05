import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./Layout/Navbar"
import Menu from "./components/Menu"

function App() {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />

      <div id="footer" className="h-20" />
    </div>
    </>
  )
}

export default App