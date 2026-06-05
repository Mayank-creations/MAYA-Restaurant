const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-surface)' }}>
            <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-8">

                {/* Top Row */}
                <div className="grid grid-cols-3 gap-8 items-start">

                    {/* Logo */}
                    <div>
                        <p className="font-serif text-2xl font-light tracking-widest gold-text">MAYA</p>
                        <p className="font-japanese text-xs tracking-widest opacity-30 gold-text mt-1">麻耶</p>
                        <p className="text-xs opacity-40 mt-2 leading-relaxed"
                            style={{ color: 'var(--color-foreground)' }}>
                            One kitchen. Every culture.<br />A journey through the world's finest flavours.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="section-label mb-4">Quick Links</p>
                        <div className="flex flex-col gap-2">
                            {['Home', 'About', 'Menu', 'Reviews', 'Contact'].map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-xs tracking-widest uppercase opacity-40 hover:opacity-100 transition-all duration-300"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Social */}
                    <div>
                        <p className="section-label mb-4">Follow Us</p>
                        <div className="flex flex-col gap-3">
                            {[
                                { label: 'Instagram', handle: '@maya.vancouver' },
                                { label: 'Facebook', handle: 'Maya Restaurant' },
                                { label: 'TripAdvisor', handle: 'Maya Vancouver' },
                            ].map((social, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-xs gold-text opacity-60">{social.label}</span>
                                    <span className="text-xs opacity-30"
                                        style={{ color: 'var(--color-foreground)' }}>·</span>
                                    <span className="text-xs opacity-40"
                                        style={{ color: 'var(--color-foreground)' }}>{social.handle}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between pt-6"
                    style={{ borderTop: '0.5px solid rgba(201,168,76,0.1)' }}>
                    <p className="text-xs opacity-30"
                        style={{ color: 'var(--color-foreground)' }}>
                        © 2025 Maya Restaurant. All rights reserved.
                    </p>
                    <p className="text-xs opacity-30 gold-text">
                        Crafted with love. Served with soul.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer