import React from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="/thiran_logo.png"
                alt="THIRAN Technologies Logo"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div className="mono-tag" style={{ color: 'var(--brand-orange)', fontSize: '0.72rem', marginBottom: '0.75rem' }}>
              {COMPANY_INFO.tagline}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {COMPANY_INFO.subTagline}
            </p>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="mono-tag" style={{ color: 'var(--brand-azure)', marginBottom: '1.25rem' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Why Thiran', 'Capabilities', 'Industries', 'Tech Stack', 'Compliance', 'Applications', 'Pilot Scoper'].map((item) => {
                const slug = item.toLowerCase().replace(/ /g, '-');
                return (
                  <li key={item}>
                    <a
                      href={`#${slug}`}
                      style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color var(--transition-fast)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-azure)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Standards & Practices */}
          <div>
            <h4 className="mono-tag" style={{ color: 'var(--accent-purple)', marginBottom: '1.25rem' }}>
              STANDARDS RIGOR
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <li>✓ IEC 62304 Embedded Software Lifecycle</li>
              <li>✓ ISO 13485 Quality Management</li>
              <li>✓ ISO 14971 Risk Management</li>
              <li>✓ IEC 60601 Embedded Electrical Safety</li>
              <li>✓ FDA 21 CFR 820 Quality System</li>
              <li>✓ UL 2900 Software Cybersecurity</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mono-tag" style={{ color: 'var(--accent-emerald)', marginBottom: '1.25rem' }}>
              DIRECT CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <a href={`mailto:${COMPANY_INFO.contactEmail}`} style={{ color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--brand-azure)" />
                <span>{COMPANY_INFO.contactEmail}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--accent-emerald)" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--brand-orange)" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button onClick={onOpenBooking} className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  <span>Book Scoping Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved. {COMPANY_INFO.tagline}.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>ISO 13485 Evidence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
