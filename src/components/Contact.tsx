const Contact = () => {
  return (
    <section id="contact" className="py-24 px-12"
      style={{ background: 'var(--color-background)' }}>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="font-serif text-5xl font-light gold-text">Contact & Reservations</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
            <span className="opacity-30 gold-text text-xs">✦</span>
            <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-start">

          {/* Left - Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-serif text-3xl font-light tracking-widest gold-text">MAYA</p>
              <p className="font-japanese text-sm tracking-widest opacity-30 gold-text">麻耶</p>
              <p className="text-xs tracking-widest opacity-40 mt-2"
                style={{ color: 'var(--color-foreground)' }}>
                Omakase by Mayank
              </p>
            </div>

            <div className="h-px w-12 opacity-20" style={{ background: 'var(--color-gold)' }} />

            <div className="flex flex-col gap-6">
              <div>
                <p className="section-label mb-2">Location</p>
                <p className="text-sm opacity-60 leading-relaxed"
                  style={{ color: 'var(--color-foreground)' }}>
                  1288 Alberni Street<br />
                  Vancouver, BC V6E 1A5
                </p>
              </div>

              <div>
                <p className="section-label mb-2">Reservations</p>
                <p className="text-sm opacity-60"
                  style={{ color: 'var(--color-foreground)' }}>
                  +1 (604) 555-0192
                </p>
                <p className="text-sm opacity-60"
                  style={{ color: 'var(--color-foreground)' }}>
                  hello@mayarestaurant.ca
                </p>
              </div>

              <div>
                <p className="section-label mb-2">Hours</p>
                <p className="text-sm opacity-60"
                  style={{ color: 'var(--color-foreground)' }}>
                  Mon – Fri: 12:00 PM – 10:00 PM
                </p>
                <p className="text-sm opacity-60"
                  style={{ color: 'var(--color-foreground)' }}>
                  Sat – Sun: 11:00 AM – 11:00 PM
                </p>
              </div>

              <div>
                <p className="section-label mb-2">Email Us</p>
                <p className="text-sm opacity-60"
                  style={{ color: 'var(--color-foreground)' }}>
                  For private dining & events:
                </p>
                <p className="text-sm opacity-60"
                  style={{ color: 'var(--color-foreground)' }}>
                  events@mayarestaurant.ca
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-40 flex items-center justify-center"
              style={{
                border: '0.5px solid rgba(201,168,76,0.15)',
                background: 'rgba(201,168,76,0.03)',
              }}>
              <p className="text-xs tracking-widest uppercase opacity-30"
                style={{ color: 'var(--color-foreground)' }}>
                📍 1288 Alberni St, Vancouver
              </p>
            </div>
          </div>

          {/* Right - Book a Table */}
          <div id="reserve" className="flex flex-col gap-6 p-8"
            style={{ border: '0.5px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)' }}>

            <div>
              <p className="section-label mb-2">Secure Your Evening</p>
              <h3 className="font-serif text-3xl font-light gold-text">Book a Table</h3>
              <p className="text-xs opacity-40 mt-2"
                style={{ color: 'var(--color-foreground)' }}>
                Seatings at 6:00 PM & 8:30 PM · Wednesday through Sunday
              </p>
            </div>

            <div className="flex flex-col gap-5">

              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="section-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="section-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="section-label">Email</label>
                  <input
                    type="email"
                    placeholder="hello@email.com"
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="section-label">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (604) 000-0000"
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="section-label">Date</label>
                  <input
                    type="date"
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                      colorScheme: 'dark',
                    }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="section-label">Seating</label>
                  <select
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                      background: 'var(--color-background)',
                    }}>
                    <option>6:00 PM</option>
                    <option>8:30 PM</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="section-label">Guests</label>
                  <select
                    className="bg-transparent text-sm py-3 px-0 outline-none"
                    style={{
                      borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                      color: 'var(--color-foreground)',
                      background: 'var(--color-background)',
                    }}>
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-2">
                <label className="section-label">Special Requests</label>
                <input
                  type="text"
                  placeholder="Allergies, celebrations, preferences..."
                  className="bg-transparent text-sm py-3 px-0 outline-none"
                  style={{
                    borderBottom: '0.5px solid rgba(201,168,76,0.2)',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.2)')}
                />
              </div>

              <button className="btn-primary mt-2 w-full">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact