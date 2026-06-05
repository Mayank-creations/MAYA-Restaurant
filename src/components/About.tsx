const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-24 py-24"
      style={{ background: 'var(--color-surface)' }}>

      {/* MJ Knife Image - Full Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/About_background.png"
          alt="Chef's knife"
          className="object-contain"
          style={{ mixBlendMode: 'screen', height: '95%', opacity: 0.25 }}
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-24 max-w-5xl w-full items-center">

        {/* Left - About Us */}
        <div className="flex flex-col items-start gap-6">
          <div>
            <p className="section-label mb-3">Who We Are</p>
            <h2 className="font-serif text-5xl font-light gold-text">About Us</h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-px w-8 opacity-40" style={{ background: 'var(--color-gold)' }} />
              <span className="opacity-30 gold-text text-xs">✦</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed opacity-80"
            style={{ color: 'var(--color-foreground)' }}>
            Born in Punjab and raised on bold, soulful flavours, Mayank always believed that food is the universal language. Inspired by the precision of Japanese cuisine and the warmth of South Asian cooking, Maya was created to celebrate them all.
          </p>

          <p className="text-sm leading-relaxed opacity-80"
            style={{ color: 'var(--color-foreground)' }}>
            Every dish at Maya is crafted with intention — honouring traditions from around the world while adding a personal touch that makes each plate uniquely ours.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-2">
            <div>
              <p className="font-serif text-4xl font-light gold-text">10+</p>
              <p className="text-xs tracking-widest uppercase opacity-40 mt-1"
                style={{ color: 'var(--color-foreground)' }}>Cuisines</p>
            </div>
            <div className="w-px opacity-20" style={{ background: 'var(--color-gold)' }} />
            <div>
              <p className="font-serif text-4xl font-light gold-text">50+</p>
              <p className="text-xs tracking-widest uppercase opacity-40 mt-1"
                style={{ color: 'var(--color-foreground)' }}>Dishes</p>
            </div>
            <div className="w-px opacity-20" style={{ background: 'var(--color-gold)' }} />
            <div>
              <p className="font-serif text-4xl font-light gold-text">1</p>
              <p className="text-xs tracking-widest uppercase opacity-40 mt-1"
                style={{ color: 'var(--color-foreground)' }}>Soul</p>
            </div>
          </div>

          <button className="btn-ghost text-xs mt-2">
            Know More
          </button>
        </div>

        {/* Right - Our History */}
        <div className="flex flex-col items-start gap-6">
          <div>
            <p className="section-label mb-3">How It Started</p>
            <h2 className="font-serif text-5xl font-light gold-text">Our History</h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-px w-8 opacity-40" style={{ background: 'var(--color-gold)' }} />
              <span className="opacity-30 gold-text text-xs">✦</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed opacity-80"
            style={{ color: 'var(--color-foreground)' }}>
            Maya was born in Vancouver in 2024 from a simple but powerful idea — what if one restaurant could take you on a journey through the world's greatest food cultures? No boundaries, no limitations. Just pure flavour.
          </p>

          <p className="text-sm leading-relaxed opacity-80"
            style={{ color: 'var(--color-foreground)' }}>
            From the streets of Amritsar to the sushi bars of Tokyo, from Sichuan kitchens to Mediterranean coastlines — Maya brings it all together under one roof, in the heart of Vancouver.
          </p>

          {/* Timeline */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-4">
              <p className="font-serif text-2xl gold-text font-light">2024</p>
              <div className="h-px flex-1 opacity-20" style={{ background: 'var(--color-gold)' }} />
              <p className="text-xs opacity-80" style={{ color: 'var(--color-foreground)' }}>Maya opens in Vancouver</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-serif text-2xl gold-text font-light">2024</p>
              <div className="h-px flex-1 opacity-20" style={{ background: 'var(--color-gold)' }} />
              <p className="text-xs opacity-80" style={{ color: 'var(--color-foreground)' }}>First 1000 guests served</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-serif text-2xl gold-text font-light">2025</p>
              <div className="h-px flex-1 opacity-20" style={{ background: 'var(--color-gold)' }} />
              <p className="text-xs opacity-80" style={{ color: 'var(--color-foreground)' }}>Voted top restaurant in Vancouver</p>
            </div>
          </div>

          <button className="btn-ghost text-xs mt-2">
            Know More
          </button>
        </div>

      </div>
    </section>
  )
}

export default About