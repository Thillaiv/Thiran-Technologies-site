import React, { useState } from 'react';
import { Search, Sparkles, Cpu, Terminal, Shield, Layers, Eye, Network } from 'lucide-react';
import { TECH_ITEMS, TechItem } from '../data/companyData';

export const TechStackMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'MCU / Hardware', 'RTOS & OS', 'Robotics & Vision', 'AI & GenAI', 'Data & Edge', 'Standards & Testing'];

  const filteredItems = TECH_ITEMS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="tech-stack"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("/tech_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="mono-tag" style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem', display: 'block' }}>
            TECHNICAL DEPTH & TOOLING
          </span>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
            Tools, Silicon & Platforms We Work In Daily.
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#0B1934',
              fontWeight: 500,
              background: 'rgba(255, 255, 255, 0.92)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: '14px',
              padding: '1rem 1.75rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 6px 25px -4px rgba(15, 23, 42, 0.08)',
              display: 'inline-block'
            }}
          >
            From low-level registers on STM32 to ROS2 MoveIt trajectory planners and GenAI evaluation tooling.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
            <input
              type="text"
              placeholder="Search tools (e.g., FreeRTOS, ROS2, Yocto)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: selectedCategory === cat ? 'var(--primary-cyan)' : 'var(--bg-card)',
                  color: selectedCategory === cat ? '#070B14' : 'var(--text-muted)',
                  border: '1px solid var(--border-subtle)',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: item.popular ? 'var(--border-highlight)' : 'var(--border-subtle)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="badge badge-purple" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                      CORE
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {item.description}
                </p>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="mono-tag" style={{ color: 'var(--text-dim)', fontSize: '0.65rem' }}>
                  {item.category}
                </span>
                <span style={{ color: 'var(--primary-cyan)', fontSize: '0.75rem' }}>✓ Supported</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No technologies found matching "{searchTerm}". Try a different keyword!
          </div>
        )}
      </div>
    </section>
  );
};
