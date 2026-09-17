import React from 'react';
import { Calendar, Layers, ShieldAlert, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import { ENGAGEMENT_STEPS } from '../data/companyData';

interface EngagementModelsProps {
  onOpenBooking: () => void;
}

export const EngagementModels: React.FC<EngagementModelsProps> = ({ onOpenBooking }) => {
  return (
    <section
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("/hero_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="mono-tag" style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem', display: 'block' }}>
            LOW-RISK ENGAGEMENT
          </span>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
            How We Start Working Together.
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
            A predictable, step-by-step path designed to eliminate procurement risk and prove technical quality early.
          </p>
        </div>

        {/* 3 Steps Process Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {ENGAGEMENT_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: 'rgba(0, 242, 254, 0.2)',
                      lineHeight: 1
                    }}
                  >
                    {stepItem.step}
                  </span>
                  <span className="badge badge-emerald">{stepItem.subtitle}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  {stepItem.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Model Types */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderColor: 'var(--border-subtle)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="mono-tag" style={{ color: 'var(--accent-purple)' }}>Flexible Contracting</span>
            <h3 className="heading-sm" style={{ fontSize: '1.35rem', marginTop: '0.3rem' }}>
              Engagement Models Built Around Your Engineering Needs
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>
                Fixed-Scope Project
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Defined deliverables, fixed timeline, and clear milestone acceptance criteria. Ideal for prototypes, drivers, or specific modules.
              </p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
                Staff Augmentation
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Embed senior firmware or ROS2 specialist engineers directly into your sprint cycle to boost delivery velocity.
              </p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
                Retainer & Support
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Ongoing architectural advisory, compliance audits, code reviews, and maintenance for production products.
              </p>
            </div>
          </div>

          {/* CTA Bar inside section */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
              <Calendar size={18} />
              <span>Book Your Free 30-Min Discovery Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
