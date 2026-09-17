import React from 'react';
import { Activity, BatteryCharging, FlaskConical, Bot, ScanLine, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import { APPLICATION_AREAS, ApplicationDomain } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={24} color="var(--primary-cyan)" />,
  BatteryCharging: <BatteryCharging size={24} color="var(--accent-emerald)" />,
  FlaskConical: <FlaskConical size={24} color="var(--accent-purple)" />,
  Bot: <Bot size={24} color="var(--primary-cyan)" />,
  ScanLine: <ScanLine size={24} color="var(--accent-amber)" />,
  HeartPulse: <HeartPulse size={24} color="#EF4444" />
};

export const ApplicationAreas: React.FC = () => {
  return (
    <section
      id="applications"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("/industries_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="mono-tag" style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem', display: 'block' }}>
            PROOF OF WORK & CASE STUDIES
          </span>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
            Selected Engineering Projects & Proven Evidence.
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
            Real-world product engineering across regulated embedded systems, autonomous robotics, EV power electronics, and edge AI vision.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {APPLICATION_AREAS.map((app) => (
            <div
              key={app.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                    {iconMap[app.icon]}
                  </div>
                  <span className="mono-tag" style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>
                    {app.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {app.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  {app.description}
                </p>

                {/* Challenge & Solution */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-amber)' }}>
                    <strong style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', display: 'block' }}>CHALLENGE</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{app.challenge}</p>
                  </div>

                  <div style={{ background: 'var(--bg-secondary)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--primary-cyan)' }}>
                    <strong style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)', display: 'block' }}>DELIVERED</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{app.delivered}</p>
                  </div>
                </div>
              </div>

              {/* Quantified Result */}
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>
                  RESULT: {app.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
