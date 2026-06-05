const Hero = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-24">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/home_background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(10,8,5,0.75) 0%, rgba(10,8,5,0.75) 60%, rgba(10,8,5,1) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-20 px-6 animate-fade-in">

        {/* Top label */}
        <p className="section-label mb-6 animation-delay-100 animate-fade-in">
          Vancouver · Est. 2024
        </p>

        {/* Restaurant Name */}
        <h1 className="font-serif text-8xl font-light tracking-widest gold-text mb-2 animation-delay-200 animate-fade-in">
          MAYA
        </h1>

        {/* Japanese */}
        <p className="font-japanese text-2xl tracking-widest opacity-30 mb-6 animation-delay-300 animate-fade-in">
          麻耶
        </p>

        {/* Tagline */}
        <p className="text-sm tracking-widest opacity-60 mb-2 animation-delay-400 animate-fade-in"
          style={{ color: 'var(--color-foreground)' }}>
          Crafted with love. Served with soul.
        </p>
        <p className="text-sm tracking-widest opacity-60 mb-2 animation-delay-400 animate-fade-in"
          style={{ color: 'var(--color-foreground)' }}>
          One kitchen. Every culture. A journey through the world's finest flavours.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6 animation-delay-400 animate-fade-in">
          <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
          <p className="font-japanese text-xs opacity-30 gold-text">✦</p>
          <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
        </div>

        {/* Opening Hours */}
        <div className="flex items-center justify-center gap-8 mb-10 animation-delay-500 animate-fade-in">
          <div className="text-center">
            <p className="section-label mb-1">Mon – Fri</p>
            <p className="text-xs tracking-widest opacity-50"
              style={{ color: 'var(--color-foreground)' }}>
              12:00 PM – 10:00 PM
            </p>
          </div>
          <div className="h-6 w-px opacity-20" style={{ background: 'var(--color-gold)' }} />
          <div className="text-center">
            <p className="section-label mb-1">Sat – Sun</p>
            <p className="text-xs tracking-widest opacity-50"
              style={{ color: 'var(--color-foreground)' }}>
              11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 animation-delay-600 animate-fade-in">
          <button onClick={scrollToReservation} className="btn-primary">
            Reserve a Table
          </button>
          <button onClick={scrollToMenu} className="btn-ghost">
            View Menu
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-30 animate-scroll-pulse">
        <p className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--color-foreground)' }}>
          Scroll
        </p>
        <div className="h-10 w-px" style={{ background: 'var(--color-gold)' }} />
      </div>

    </section>
  )
}

export default Hero