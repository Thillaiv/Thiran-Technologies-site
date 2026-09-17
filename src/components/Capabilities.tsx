import React, { useState } from 'react';
import { Cpu, Bot, Zap, Eye, Network, Activity, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { CAPABILITIES, Capability } from '../data/companyData';
import { WorkflowPipelineInfographic } from './Infographics/WorkflowPipelineInfographic';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={20} />,
  Bot: <Bot size={20} />,
  Zap: <Zap size={20} />,
  Eye: <Eye size={20} />,
  Network: <Network size={20} />,
  Activity: <Activity size={20} />
};

export const Capabilities: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(CAPABILITIES[0].id);

  const activeCapability = CAPABILITIES.find((c) => c.id === activeTabId) || CAPABILITIES[0];

  return (
    <section
      id="capabilities"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("./capabilities_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="mono-tag" style={{ color: 'var(--brand-blue)', marginBottom: '0.5rem', display: 'block' }}>
            ENGINEERING CAPABILITIES
          </span>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
            Four Pillars We Do Exceptionally Well. Plus Embedded & Edge.
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
            Explore our deep technical domain practices spanning silicon bring-up, ROS2 autonomy, multi-layer PCB design, edge vision, and regulated embedded device software.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '2.5rem'
          }}
        >
          {CAPABILITIES.map((cap) => {
            const isActive = cap.id === activeTabId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTabId(cap.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.35rem',
                  borderRadius: 'var(--radius-full)',
                  background: isActive ? 'linear-gradient(135deg, rgba(10, 88, 202, 0.12) 0%, rgba(0, 112, 243, 0.12) 100%)' : 'var(--bg-card)',
                  border: isActive ? '1px solid var(--brand-blue)' : '1px solid var(--border-subtle)',
                  color: isActive ? 'var(--brand-blue)' : 'var(--text-muted)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? '0 0 15px rgba(10, 88, 202, 0.15)' : 'none'
                }}
              >
                {iconMap[cap.iconName]}
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Details Card */}
        <div className="glass-panel" style={{ padding: '2.5rem', borderColor: 'var(--border-highlight)' }}>
          {/* Card Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ color: 'var(--brand-blue)' }}>{iconMap[activeCapability.iconName]}</div>
                <h3 className="heading-md" style={{ fontSize: '1.75rem' }}>{activeCapability.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontStyle: 'italic' }}>
                "{activeCapability.tagline}"
              </p>
            </div>
            <span className="badge" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              {activeCapability.badge}
            </span>
          </div>

          <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            {activeCapability.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {/* Left Column: Services Offered */}
            <div>
              <h4 className="mono-tag" style={{ color: 'var(--brand-blue)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                CORE SERVICES DELIVERED
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {activeCapability.services.map((svc, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <h5 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>{svc.title}</h5>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Applications & Tools */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Target Application Areas */}
              <div>
                <h4 className="mono-tag" style={{ color: 'var(--accent-purple)', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  TARGET APPLICATION DOMAINS
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeCapability.applications.map((app, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(124, 58, 237, 0.08)',
                        color: 'var(--text-main)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        border: '1px solid rgba(124, 58, 237, 0.2)'
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Frameworks */}
              <div>
                <h4 className="mono-tag" style={{ color: 'var(--accent-emerald)', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  TECHNOLOGY & PLATFORMS
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeCapability.tools.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'var(--bg-secondary)',
                        color: 'var(--brand-blue)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evidence Banner */}
              <div
                style={{
                  marginTop: 'auto',
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '4px solid var(--brand-blue)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}
              >
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>Proof of Experience:</strong>
                {activeCapability.evidence}
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Infographic Banner */}
        <WorkflowPipelineInfographic />
      </div>
    </section>
  );
};
