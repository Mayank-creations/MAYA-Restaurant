import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./Layout/Navbar"
import Menu from "./components/Menu"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer />

      <div id="footer" className="h-20" />
    </div>
    </>
  )
}

export default App