import { useState } from 'react'

const awards = [
  {
    icon: '🏆',
    title: 'Bib Gourmand 2024',
    org: 'Michelin Guide Canada',
    desc: 'Recognised for exceptional food at moderate prices across all cuisines.',
  },
  {
    icon: '⭐',
    title: 'Rising Star Restaurant',
    org: 'Vancouver Food Awards',
    desc: 'Awarded to the most exciting new dining experience in Vancouver.',
  },
  {
    icon: '👨‍🍳',
    title: 'Outstanding Chef 2025',
    org: 'BC Hospitality Foundation',
    desc: 'Mayank Jain recognised for culinary excellence and innovation.',
  },
  {
    icon: '🌟',
    title: 'AA Hospitality Excellence',
    org: 'Restaurant Association of BC',
    desc: 'Awarded for outstanding service and unforgettable guest experience.',
  },
]

const reviews = [
  {
    name: 'Amandeep S',
    location: 'Surrey, BC',
    rating: 5,
    comment: 'Absolutely blown away. The butter chicken was the best I have ever had outside of Punjab, and the sushi course that followed was perfection. Maya is truly one of a kind.',
  },
  {
    name: 'James T',
    location: 'Vancouver, BC',
    rating: 5,
    comment: 'I came for the Japanese menu and stayed for everything else. The wagyu tataki melted in my mouth. The ambience is dark, moody and incredibly romantic. Will be back.',
  },
  {
    name: 'Priya K',
    location: 'Burnaby, BC',
    rating: 5,
    comment: 'Maya is the kind of restaurant you tell everyone about. Every dish tells a story. The dal makhani paired with the miso soup course was a genius combination.',
  },
  {
    name: 'Michael L',
    location: 'Richmond, BC',
    rating: 5,
    comment: 'The Peking duck followed by the tandoori platter — I never thought those two would work together but Chef Mayank makes it feel completely natural. Incredible.',
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map(star => (
      <span key={star} style={{ color: star <= rating ? 'var(--color-gold)' : 'rgba(201,168,76,0.2)', fontSize: '1rem' }}>
        ★
      </span>
    ))}
  </div>
)

const Reviews = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === reviews.length - 1 ? 0 : i + 1))

  const review = reviews[current]

  // Get initials
  const initials = review.name.split(' ').map(n => n[0]).join('')

  return (
    <section id="reviews" className="py-24 px-12"
      style={{ background: 'var(--color-surface)' }}>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Voices & Honours</p>
        <h2 className="font-serif text-5xl font-light gold-text">Awards & Reviews</h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
          <span className="opacity-30 gold-text text-xs">✦</span>
          <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center">

        {/* Left - Awards */}
        <div className="flex flex-col gap-6">
          {awards.map((award, i) => (
            <div key={i} className="flex items-start gap-4 p-5 transition-all duration-300"
              style={{ border: '0.5px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)' }}>
              <div className="text-2xl flex-shrink-0 mt-1">{award.icon}</div>
              <div>
                <p className="font-serif text-lg font-light gold-text mb-1">{award.title}</p>
                <p className="text-xs tracking-widest uppercase opacity-40 mb-2"
                  style={{ color: 'var(--color-foreground)' }}>{award.org}</p>
                <p className="text-xs leading-relaxed opacity-50"
                  style={{ color: 'var(--color-foreground)' }}>{award.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Review Carousel */}
        <div className="flex flex-col"
          style={{ border: '0.5px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)', padding: '2.5rem' }}>

          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
            style={{ background: 'rgba(201,168,76,0.15)', border: '0.5px solid rgba(201,168,76,0.3)' }}>
            <span className="font-serif text-xl gold-text">"</span>
          </div>

          {/* Comment */}
          <p className="font-serif text-xl font-light leading-relaxed mb-8 flex-1"
            style={{ color: 'var(--color-foreground)', opacity: 0.85, minHeight: '120px' }}>
            "{review.comment}"
          </p>

          {/* Person */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(201,168,76,0.2)', border: '0.5px solid rgba(201,168,76,0.4)' }}>
              <span className="font-serif text-sm gold-text font-light">{initials}</span>
            </div>
            <div>
              <p className="text-sm tracking-wide mb-1"
                style={{ color: 'var(--color-foreground)' }}>{review.name}</p>
              <p className="text-xs opacity-40"
                style={{ color: 'var(--color-foreground)' }}>{review.location}</p>
            </div>
          </div>

          {/* Stars */}
          <StarRating rating={review.rating} />

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'var(--color-gold)' : 'rgba(201,168,76,0.2)',
                    border: 'none',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{
                  border: '0.5px solid rgba(201,168,76,0.3)',
                  color: 'var(--color-gold)',
                  background: 'transparent',
                }}>
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{
                  border: '0.5px solid rgba(201,168,76,0.3)',
                  color: 'var(--color-gold)',
                  background: 'transparent',
                }}>
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reviews