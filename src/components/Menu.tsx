import { useState } from 'react'
import { menuData } from '../data/MenuData'
import type { MenuItem } from '../data/MenuData'

const MenuItemRow = ({ item }: { item: MenuItem }) => (
    <div className="flex items-baseline justify-between py-4 border-b"
        style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
        <div className="flex-1 pr-4">
            <p className="text-sm tracking-wide mb-1"
                style={{ color: 'var(--color-foreground)' }}>
                {item.name}
            </p>
            <p className="text-xs opacity-40"
                style={{ color: 'var(--color-foreground)' }}>
                {item.description}
            </p>
        </div>
        <p className="font-serif text-lg font-light gold-text whitespace-nowrap">
            {item.price}
        </p>
    </div>
)

const Menu = () => {
    const [activeTab, setActiveTab] = useState('japanese')
    const active = menuData.find(m => m.id === activeTab)!

    return (
        <section id="menu" className="relative py-24 px-12"
            style={{ background: 'var(--color-background)' }}>

            {/* Header */}
            <div className="text-center mb-16">
                <p className="section-label mb-3">Menu That Fits Your Palate</p>
                <h2 className="font-serif text-6xl font-light gold-text">Today's Special</h2>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
                    <span className="opacity-30 gold-text text-xs">✦</span>
                    <div className="h-px w-16 opacity-30" style={{ background: 'var(--color-gold)' }} />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-center gap-2 mb-16">
                {menuData.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className="px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300"
                        style={{
                            border: '0.5px solid',
                            borderColor: activeTab === cat.id ? 'var(--color-gold)' : 'rgba(201,168,76,0.2)',
                            color: activeTab === cat.id ? 'var(--color-gold)' : 'rgba(245,240,232,0.4)',
                            background: activeTab === cat.id ? 'rgba(201,168,76,0.1)' : 'transparent',
                        }}>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

                {/* Left Column */}
                <div>
                    {active.left.map((item, i) => (
                        <MenuItemRow key={i} item={item} />
                    ))}
                </div>

                {/* Center Image */}
{/* Center Image */}
<div className="flex items-center justify-center">
  <div style={{
    width: '300px',
    height: '400px',
    border: '0.5px solid rgba(201,168,76,0.2)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <img
      src={active.image}
      alt={active.label}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to bottom, transparent 50%, rgba(10,8,5,0.8) 100%)'
    }} />
    <div style={{ position: 'absolute', bottom: '1rem', left: 0, right: 0, textAlign: 'center' }}>
      <p className="font-serif text-2xl font-light gold-text">{active.label}</p>
      <p className="text-xs tracking-widest uppercase opacity-40 mt-1"
        style={{ color: 'var(--color-foreground)' }}>Cuisine</p>
    </div>
  </div>
</div>

                {/* Right Column */}
                <div>
                    {active.right.map((item, i) => (
                        <MenuItemRow key={i} item={item} />
                    ))}
                </div>

            </div>

            {/* View More Button */}
            <div className="text-center mt-16">
                <button className="btn-ghost text-xs px-12">
                    View Full Menu
                </button>
            </div>

        </section>
    )
}

export default Menu