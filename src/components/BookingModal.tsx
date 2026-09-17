import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScopeSummary?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialScopeSummary = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('10:30 AM IST');
  const [notes, setNotes] = useState(initialScopeSummary);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialScopeSummary) {
      setNotes(initialScopeSummary);
    }
  }, [initialScopeSummary]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '2rem',
          position: 'relative',
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border-highlight)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--primary-cyan)',
                  color: '#070B14',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Calendar size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>
                  Book 30-Min Technical Scoping Call
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  Free • Direct Founder Access • No Obligation
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Alex Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Company / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Robotics"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input-field"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="input-field"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <option>10:30 AM IST</option>
                    <option>02:00 PM IST</option>
                    <option>04:30 PM IST</option>
                    <option>07:00 PM IST (US Morning)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Project Outline / Scoped Pilot Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your technical build requirements, target microcontrollers, or compliance standards..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-field"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
                  <Send size={16} />
                  <span>Confirm & Book Scoping Call</span>
                </button>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center' }}>
                Or contact us directly at <a href={`mailto:${COMPANY_INFO.contactEmail}`} style={{ color: 'var(--primary-cyan)' }}>{COMPANY_INFO.contactEmail}</a>
              </p>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Scoping Call Request Sent!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Thank you, <strong>{name || 'Partner'}</strong>. We have received your request for <strong>{date} at {timeSlot}</strong>.
            </p>

            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '2rem', textAlign: 'left', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--primary-cyan)', fontWeight: 700, marginBottom: '0.3rem' }}>Call Summary Preview:</div>
              <div style={{ color: 'var(--text-muted)' }}>Email: {email}</div>
              <div style={{ color: 'var(--text-muted)' }}>Organization: {company || 'N/A'}</div>
              {notes && <div style={{ color: 'var(--text-main)', marginTop: '0.5rem', fontStyle: 'italic' }}>"{notes}"</div>}
            </div>

            <button onClick={handleReset} className="btn-secondary" style={{ padding: '0.75rem 2rem' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
