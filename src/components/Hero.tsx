import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      style={{
        padding: '5.5rem 0 6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(248, 250, 252, 0.72) 100%), url("/hero_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Main Headline */}
        <h1 className="heading-lg" style={{ marginBottom: '1.75rem', fontSize: 'clamp(2.6rem, 5.8vw, 4.4rem)' }}>
          Senior Embedded & <br />
          <span className="gradient-text">Robotics Engineering</span>, <br />
          On Demand.
        </h1>

        {/* Subheading with frosted white background */}
        <p
          style={{
            fontSize: '1.15rem',
            color: '#0B1934',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: '1.75',
            fontWeight: 500,
            background: 'rgba(255, 255, 255, 0.92)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            borderRadius: '16px',
            padding: '1.35rem 2rem',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
            display: 'inline-block'
          }}
        >
          Firmware, edge AI, robotics, and safety-critical embedded software — built and executed exclusively by senior specialist engineers, without big-consultancy overhead or freelancer risk.
        </p>
      </div>
    </section>
  );
};
