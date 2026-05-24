import { useState } from 'react'
import { GiHamburger } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#menu", label: "MENU" },
    { href: "#reviews", label: "REVIEWS" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-5"
      style={{ background: 'linear-gradient(to bottom, rgba(10,8,5,0.95), transparent)' }}>

      {/* Main Row */}
      <div className="flex items-center justify-between">

        {/* Left - Logo */}
        <div className="text-center">
          <p className="font-serif text-xl font-light tracking-widest gold-text">MAYA</p>
          <p className="text-xs tracking-widest opacity-30 text-center">Omakase by MAYANK</p>
        </div>

        {/* Middle - Desktop Links */}
        <ul className="hidden md:flex items-center gap-3 list-none">
          <div className="flex gap-5 rounded-full px-2 py-1 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-foreground opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </div>
          <li>
            <button
              onClick={scrollToFooter}
              className="text-xs tracking-widest uppercase text-foreground bg-transparent border-none opacity-60 hover:opacity-100 transition-all duration-300"
            >
              Contact Me
            </button>
          </li>
        </ul>

        {/* Right - Desktop Buttons */}
        <div className="hidden md:flex items-center gap-1">
          <button className="text-xs tracking-widest uppercase text-foreground bg-transparent border-none opacity-60 hover:opacity-100 transition-all duration-300">
            Login
          </button>
          <span className="text-foreground opacity-20">|</span>
          <button className="text-xs tracking-widest uppercase text-foreground bg-transparent border-none opacity-60 hover:opacity-100 transition-all duration-300">
            Register
          </button>
          <button className="btn-ghost text-xs ml-2">
            Book a Table
          </button>
        </div>

        {/* Hamburger - Mobile only */}
        <div className="md:hidden flex items-center gap-3">
          <button className="btn-ghost text-xs">
            Book a Table
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground opacity-60 hover:opacity-100 transition-all duration-300 bg-transparent border-none"
          >
            {menuOpen ? <IoMdClose fontSize={24} /> : <GiHamburger fontSize={24} />}
          </button>
        </div>

      </div>

      {/* Dropdown Menu - Mobile only */}
      {menuOpen && (
        <div className="xl:hidden mt-3 py-4 px-2 flex flex-col gap-4 glass rounded-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-foreground opacity-60 hover:opacity-100 transition-all duration-300 px-3"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { scrollToFooter(); setMenuOpen(false) }}
            className="text-xs tracking-widest uppercase text-foreground bg-transparent border-none opacity-60 hover:opacity-100 transition-all duration-300 text-left px-3"
          >
            Contact Me
          </button>
        </div>
      )}

    </nav>
  )
}

export default Navbar