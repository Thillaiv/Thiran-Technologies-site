import React from 'react';
import { ShieldCheck, FileCheck, Award, Lock, Check } from 'lucide-react';
import { COMPLIANCE_STANDARDS } from '../data/companyData';
import { ComplianceLifecycleInfographic } from './Infographics/ComplianceLifecycleInfographic';

export const ComplianceStandards: React.FC = () => {
  return (
    <section
      id="compliance"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("./compliance_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Banner Card */}
        <div
          className="glass-panel"
          style={{
            padding: '3rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(255, 255, 255, 0.98) 100%)',
            borderColor: 'rgba(5, 150, 105, 0.3)',
            boxShadow: 'var(--glow-emerald)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="compliance-grid">
            {/* Left Header info */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge badge-emerald">
                  <ShieldCheck size={14} /> RIGOR & GOVERNANCE
                </span>
              </div>
              <h2 className="heading-md" style={{ marginBottom: '1.25rem' }}>
                Engineering to International Regulated Standards.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Not just referenced on slides — implemented directly in engineering deliverables, design history files (DHF), risk management files, and automated unit test matrices.
              </p>

              <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  ✓ Regulatory Submission Support
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  We generate complete verification trace matrices, static analysis reports (Coverity/MISRA), and architectural safety evidence required for 510(k), CE mark, and FDA audits.
                </p>
              </div>
            </div>

            {/* Right Standards Badge Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {COMPLIANCE_STANDARDS.map((std, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    transition: 'transform var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                      {std.code}
                    </span>
                    <Check size={16} color="var(--accent-emerald)" />
                  </div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {std.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.35' }}>
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traceability Pyramid Infographic Component */}
        <ComplianceLifecycleInfographic />
      </div>

      <style>{`
        @media (min-width: 992px) {
          .compliance-grid { grid-template-columns: 1fr 1.2fr !important; }
        }
      `}</style>
    </section>
  );
};
