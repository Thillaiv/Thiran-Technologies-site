import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Sparkles, Send } from 'lucide-react';

interface PilotCalculatorProps {
  onOpenBookingWithScope: (scopeSummary: string) => void;
}

export const PilotCalculator: React.FC<PilotCalculatorProps> = ({ onOpenBookingWithScope }) => {
  const [domain, setDomain] = useState<string>('Embedded Device');
  const [hardware, setHardware] = useState<string>('STM32 / ARM MCU');
  const [deliverable, setDeliverable] = useState<string>('Production Firmware & Driver Bring-up');
  const [duration, setDuration] = useState<string>('3 Weeks Standard Pilot');

  const domains = ['Embedded Device', 'Industrial & EV', 'Robotics & Autonomous', 'AI & Computer Vision', 'Connected Edge IoT'];
  const hardwares = ['STM32 / ARM MCU', 'NXP i.MX6/i.MX8 MPU', 'TI TMS570 Safety MCU', 'ROS2 Edge Compute', 'Custom KiCad PCB'];
  const deliverables = [
    'Production Firmware & Driver Bring-up',
    'ROS2 Motion & Perception Autonomy Package',
    'Schematic-to-Gerber Multi-layer PCB Layout',
    'Edge Vision Model (YOLO) & API Integration',
    'IEC 62304 Software V&V & Traceability Suite'
  ];
  const durations = ['2 Weeks Express Pilot', '3 Weeks Standard Pilot', '4 Weeks Deep Technical Build'];

  const getEstimatedTimeline = () => {
    if (duration.includes('2 Weeks')) return '10–14 Business Days';
    if (duration.includes('3 Weeks')) return '15–21 Business Days';
    return '22–30 Business Days';
  };

  const handleSubmitScope = () => {
    const summary = `Domain: ${domain} | Hardware: ${hardware} | Deliverable: ${deliverable} | Duration: ${duration}`;
    onOpenBookingWithScope(summary);
  };

  return (
    <section
      id="pilot-calculator"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("./pilot_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '3rem 2.5rem',
            borderColor: 'var(--border-highlight)',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.04) 0%, rgba(13, 19, 34, 0.98) 100%)',
            boxShadow: 'var(--glow-cyan)'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
              <Calculator size={14} /> INTERACTIVE SCOPING WIDGET
            </span>
            <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>
              Build Your 2–4 Week Scoped Pilot
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Test our technical fit with zero risk. Customize your project parameters below to generate a pre-scoped build outline.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="calculator-grid">
            {/* Left Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Option 1: Domain */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-cyan)', marginBottom: '0.6rem' }} className="mono-tag">
                  1. SELECT INDUSTRY DOMAIN
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {domains.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDomain(d)}
                      style={{
                        padding: '0.5rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        background: domain === d ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-secondary)',
                        color: domain === d ? 'var(--primary-cyan)' : 'var(--text-muted)',
                        border: domain === d ? '1px solid var(--primary-cyan)' : '1px solid var(--border-subtle)',
                        fontSize: '0.85rem',
                        fontWeight: domain === d ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Target Hardware */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.6rem' }} className="mono-tag">
                  2. SELECT TARGET HARDWARE / PLATFORM
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {hardwares.map((h) => (
                    <button
                      key={h}
                      onClick={() => setHardware(h)}
                      style={{
                        padding: '0.5rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        background: hardware === h ? 'rgba(139, 92, 246, 0.15)' : 'var(--bg-secondary)',
                        color: hardware === h ? 'var(--accent-purple)' : 'var(--text-muted)',
                        border: hardware === h ? '1px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                        fontSize: '0.85rem',
                        fontWeight: hardware === h ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Primary Deliverable */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.6rem' }} className="mono-tag">
                  3. SELECT CORE DELIVERABLE
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {deliverables.map((del) => (
                    <button
                      key={del}
                      onClick={() => setDeliverable(del)}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: deliverable === del ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-secondary)',
                        color: deliverable === del ? 'var(--accent-emerald)' : 'var(--text-muted)',
                        border: deliverable === del ? '1px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
                        fontSize: '0.88rem',
                        fontWeight: deliverable === del ? 700 : 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{del}</span>
                      {deliverable === del && <CheckCircle2 size={16} color="var(--accent-emerald)" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Pilot Duration */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.6rem' }} className="mono-tag">
                  4. TARGET PILOT TIMELINE
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {durations.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setDuration(dur)}
                      style={{
                        padding: '0.55rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        background: duration === dur ? 'var(--bg-card-hover)' : 'var(--bg-secondary)',
                        color: duration === dur ? 'var(--text-main)' : 'var(--text-muted)',
                        border: duration === dur ? '1px solid var(--primary-cyan)' : '1px solid var(--border-subtle)',
                        fontSize: '0.85rem',
                        fontWeight: duration === dur ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div
              style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-highlight)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span className="mono-tag" style={{ color: 'var(--primary-cyan)' }}>PILOT SPECIFICATION</span>
                  <span className="badge badge-emerald">SENIOR ENGINEER LED</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                  {duration}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Target Domain:</span>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{domain}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Target Hardware:</span>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{hardware}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Primary Deliverable:</span>
                    <span style={{ color: 'var(--primary-cyan)', fontWeight: 600, textAlign: 'right', maxWidth: '220px' }}>{deliverable}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery:</span>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{getEstimatedTimeline()}</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(0, 242, 254, 0.05)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 242, 254, 0.2)', marginBottom: '2rem' }}>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    💡 <strong>Thiran Guarantee:</strong> All deliverables include full source code ownership, static analysis clean compliance, and architectural documentation.
                  </p>
                </div>
              </div>

              <button onClick={handleSubmitScope} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
                <Send size={18} />
                <span>Submit Scope & Book 30-Min Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .calculator-grid { grid-template-columns: 1.3fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};
