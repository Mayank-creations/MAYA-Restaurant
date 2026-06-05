import Hero from "./components/Hero"
import Navbar from "./Layout/Navbar"

function App() {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <div id="footer" className="h-20" />
    </div>
    </>
  )
}

export default App