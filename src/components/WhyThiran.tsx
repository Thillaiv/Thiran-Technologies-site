import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { COMPARISON_TABLE } from '../data/companyData';

export const WhyThiran: React.FC = () => {
  return (
    <section
      id="why-thiran"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.70) 100%), url("./pilot_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="mono-tag" style={{ color: 'var(--brand-blue)', marginBottom: '0.5rem', display: 'block' }}>
            THE THIRAN ADVANTAGE
          </span>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
            Hardware & Robotics Teams Are Stuck Between Two Bad Options.
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
            We engineered a third way: Senior engineering specialists delivering fixed-scope builds with compliance rigor and direct founder accountability.
          </p>
        </div>

        {/* 3 Pillars Cards Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {/* Card 1: Large Consultancies */}
          <div className="glass-panel" style={{ padding: '2rem', borderColor: 'rgba(239, 68, 68, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#EF4444' }}>
              <XCircle size={24} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>Large Consultancies</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#EF4444' }}>✕</span> Multi-week / multi-quarter procurement cycles
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#EF4444' }}>✕</span> Handed off to junior-heavy delivery teams after pitch
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#EF4444' }}>✕</span> High corporate overhead, low priority for smaller builds
              </li>
            </ul>

            {/* Infographic Metric Indicator */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                <span>SENIORITY ALLOCATION</span>
                <span style={{ color: '#EF4444', fontWeight: 700 }}>20% Senior</span>
              </div>
              <div style={{ height: '6px', width: '100%', background: 'rgba(239, 68, 68, 0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '20%', height: '100%', background: '#EF4444' }} />
              </div>
            </div>
          </div>

          {/* Card 2: Independent Freelancers */}
          <div className="glass-panel" style={{ padding: '2rem', borderColor: 'rgba(245, 158, 11, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: 'var(--brand-amber)' }}>
              <AlertTriangle size={24} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>Independent Freelancers</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--brand-amber)' }}>!</span> Inconsistent quality & unpredictable availability
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--brand-amber)' }}>!</span> Little process, documentation, or compliance discipline
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--brand-amber)' }}>!</span> Single point of failure if key developer departs
              </li>
            </ul>

            {/* Infographic Metric Indicator */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                <span>PROCESS & COMPLIANCE RIGOR</span>
                <span style={{ color: 'var(--brand-amber)', fontWeight: 700 }}>Variable</span>
              </div>
              <div style={{ height: '6px', width: '100%', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '40%', height: '100%', background: 'var(--brand-amber)' }} />
              </div>
            </div>
          </div>

          {/* Card 3: THE THIRAN MODEL */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderColor: 'var(--border-highlight)',
              background: 'linear-gradient(180deg, rgba(0, 112, 243, 0.05) 0%, var(--bg-card) 100%)',
              boxShadow: 'var(--glow-cyan)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: 'var(--brand-blue)' }}>
              <ShieldCheck size={26} />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>The Thiran Model</h3>
                <span className="mono-tag" style={{ color: 'var(--accent-emerald)', fontSize: '0.65rem' }}>PRODUCTION READY</span>
              </div>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 500 }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Senior-Only Delivery:</strong> Every engagement led and built by senior engineers.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Fixed Scope & Timeline:</strong> Working pilot in 2–4 weeks with direct accountability.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Regulated Rigor:</strong> Built for safety-critical standards (IEC 62304, ISO 13485) from day one.</span>
              </li>
            </ul>

            {/* Infographic Metric Indicator */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                <span>SENIORITY & AUDIT READINESS</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>100% Day-1 Ready</span>
              </div>
              <div style={{ height: '6px', width: '100%', background: 'rgba(5, 150, 105, 0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, var(--brand-blue), var(--accent-emerald))' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
          <h3 className="heading-sm" style={{ marginBottom: '1.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} color="var(--brand-blue)" />
            <span>Side-by-Side Model Comparison</span>
          </h3>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <th style={{ padding: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600 }}>FEATURE / CRITERIA</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>LARGE CONSULTANCY</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>FREELANCER</th>
                <th style={{ padding: '1rem', color: 'var(--brand-blue)', fontSize: '0.9rem', fontWeight: 700, background: 'rgba(10, 88, 202, 0.04)' }}>THIRAN TECHNOLOGIES</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>{row.feature}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>{row.largeConsultancy}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>{row.freelancer}</td>
                  <td style={{ padding: '1rem', color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.9rem', background: 'rgba(10, 88, 202, 0.04)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" />
                      {row.thiranModel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
