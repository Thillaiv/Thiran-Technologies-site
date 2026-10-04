import React, { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Layers, 
  Eye, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2
} from 'lucide-react';

interface OnePagerLandingProps {
  onOpenBooking: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const OnePagerLanding: React.FC<OnePagerLandingProps> = ({ 
  onOpenBooking,
  onNavigateToSection 
}) => {
  const [activePill, setActivePill] = useState<string | null>(null);

  const whatWeDoList = [
    {
      title: 'Embedded Firmware & IoT',
      icon: Cpu,
      description: 'Baremetal, RTOS (FreeRTOS, Zephyr), Linux driver & kernel development, EdgeX IoT integrations.',
      color: '#0A58CA'
    },
    {
      title: 'Robotics & Automation',
      icon: Bot,
      description: 'ROS/ROS2 stack, autonomous navigation, kinematics, motor control & HIL testing automation.',
      color: '#0070F3'
    },
    {
      title: 'Embedded Hardware & PCB',
      icon: Layers,
      description: 'High-speed PCB layout, SI/EMI/EMC compliance analysis, RF/Antenna matching, sensor interfacing.',
      color: '#7C3AED'
    },
    {
      title: 'Agentic AI Development & Computer Vision',
      icon: Eye,
      description: 'On-device neural inference (NPU/TPU), edge vision algorithms, GenAI agents for embedded platforms.',
      color: '#FF6B00'
    }
  ];

  const techStackPills = [
    { name: 'Embedded', category: 'core' },
    { name: 'Baremetal', category: 'core' },
    { name: 'RTOS', category: 'core' },
    { name: 'Linux', category: 'core' },
    { name: 'Yocto', category: 'core' },
    { name: 'EdgeX', category: 'iot' },
    { name: 'Robotics', category: 'robotics' },
    { name: 'Computer Vision', category: 'ai' },
    { name: 'AI/ML (Embedded)', category: 'ai' },
    { name: 'GenAI', category: 'ai' },
    { name: 'RF/Antennas', category: 'hw' },
    { name: 'Board Design', category: 'hw' },
    { name: 'SI/EMI/EMC', category: 'hw' },
    { name: 'Full Stack Development', category: 'sw' },
    { name: 'HMI / Mobile / Web', category: 'sw' }
  ];

  const engagementSteps = [
    {
      number: '1',
      title: 'Discovery Call',
      detail: '30 min, no cost — scope & fit.'
    },
    {
      number: '2',
      title: 'Scoped Pilot',
      detail: '2–4 week fixed-scope build.'
    },
    {
      number: '3',
      title: 'Scale',
      detail: 'Project, retainer, or embedded team.'
    }
  ];

  const engagementModels = [
    'Fixed-Scope Project',
    'Staff Augmentation',
    'Retainer & Support',
    'Competence Development'
  ];

  const industriesList = [
    'Consumer Electronics',
    'Industrial Automation',
    'Robotics & Warehousing',
    'Smart Infrastructure & IoT',
    'Semiconductor',
    'Energy & Utilities',
    'Oil & Gas'
  ];

  const additionalServicesList = [
    'Digital Engineering',
    'Reverse Engineering',
    'Legacy firmware modernization',
    'Test automation & HIL setup'
  ];

  return (
    <div className="onepager-wrapper" style={{ width: '100%', background: 'var(--bg-primary)' }}>
      {/* 1. Header Banner - Executive Navy */}
      <header 
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #152039 50%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '2rem 1.5rem',
          borderBottom: '3px solid #FF6B00',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle decorative grid background */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255, 107, 0, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Logo Emblem Card */}
            <div 
              style={{ 
                background: '#FFFFFF', 
                borderRadius: '12px', 
                padding: '0.6rem 1.2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <img 
                src="./exlentia_emblem_light.svg" 
                alt="EXLENTIA Logo" 
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  // Fallback text if image missing
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div style={{ borderLeft: '1px solid #CBD5E1', paddingLeft: '0.8rem' }}>
                <span style={{ color: '#0B1934', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.08em', display: 'block', lineHeight: 1.1 }}>
                  EXLENTIA
                </span>
                <span style={{ color: '#64748B', fontSize: '0.62rem', display: 'block', fontStyle: 'italic', marginTop: '2px' }}>
                  INTELLIGENCE FOR A BRIGHTER, MORE CAPABLE WORLD
                </span>
              </div>
            </div>

            {/* Title Block */}
            <div style={{ flex: '1 1 500px' }}>
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  color: '#FF6B00', 
                  fontSize: '0.75rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.3rem'
                }}
              >
                <Sparkles size={14} color="#FF6B00" />
                CAPABILITY OVERVIEW
              </div>
              <h1 
                style={{ 
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', 
                  fontWeight: 800, 
                  lineHeight: 1.25, 
                  color: '#FFFFFF',
                  margin: 0 
                }}
              >
                Embedded & Robotics Engineering Solutions & Consultation
              </h1>
            </div>

            {/* Quick Action Button */}
            <div>
              <button 
                onClick={onOpenBooking}
                className="btn-accent-orange"
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                BOOK A SCOPING CALL <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main 4-Card OnePager Layout Grid */}
      <section style={{ padding: '2.5rem 1.5rem', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
              gap: '1.5rem',
              alignItems: 'stretch'
            }}
          >
            {/* CARD 1: WHAT WE DO */}
            <div 
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
              className="onepager-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '28px', height: '4px', background: '#FF6B00', borderRadius: '2px' }} />
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-main)', textTransform: 'uppercase', margin: 0 }}>
                    WHAT WE DO
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {whatWeDoList.map((item, index) => {
                    const IconComp = item.icon;
                    return (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                        <div 
                          style={{ 
                            width: '42px', 
                            height: '42px', 
                            borderRadius: '50%', 
                            background: '#152039', 
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 4px 12px rgba(21, 32, 57, 0.25)'
                          }}
                        >
                          <IconComp size={20} color="#60A5FA" />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                            {item.title}
                          </h3>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div 
                style={{ 
                  marginTop: '1.5rem', 
                  paddingTop: '1rem', 
                  borderTop: '1px dashed var(--border-subtle)',
                  fontSize: '0.78rem',
                  fontStyle: 'italic',
                  color: 'var(--text-dim)',
                  lineHeight: 1.4
                }}
              >
                Also: RF/antenna design, safety-critical software, technical consulting.
              </div>
            </div>

            {/* CARD 2: OUR TECHNOLOGY STACK */}
            <div 
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="onepager-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '28px', height: '4px', background: '#FF6B00', borderRadius: '2px' }} />
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-main)', textTransform: 'uppercase', margin: 0 }}>
                    OUR TECHNOLOGY STACK
                  </h2>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {techStackPills.map((pill, idx) => {
                    const isSelected = activePill === pill.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActivePill(isSelected ? null : pill.name)}
                        style={{
                          padding: '0.45rem 0.85rem',
                          borderRadius: '999px',
                          background: isSelected ? '#152039' : '#EBF3FE',
                          color: isSelected ? '#FFFFFF' : '#1E3A8A',
                          border: isSelected ? '1px solid #3B82F6' : '1px solid rgba(59, 130, 246, 0.2)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        {pill.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div 
                style={{ 
                  marginTop: '1.5rem', 
                  padding: '0.75rem', 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Zap size={15} color="#FF6B00" style={{ flexShrink: 0 }} />
                <span>Production-tested hardware, real-time Linux, and edge-native AI inference engines.</span>
              </div>
            </div>

            {/* CARD 3: HOW WE ENGAGE */}
            <div 
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="onepager-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '28px', height: '4px', background: '#FF6B00', borderRadius: '2px' }} />
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-main)', textTransform: 'uppercase', margin: 0 }}>
                    HOW WE ENGAGE
                  </h2>
                </div>

                {/* 1, 2, 3 Steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  {engagementSteps.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <div 
                        style={{ 
                          width: '38px', 
                          height: '38px', 
                          borderRadius: '50%', 
                          background: '#152039', 
                          color: '#FFFFFF',
                          fontWeight: 800,
                          fontSize: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 4px 10px rgba(21, 32, 57, 0.2)'
                        }}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                          {step.title}
                        </h3>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {engagementModels.map((model, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          padding: '0.5rem 0.85rem', 
                          borderRadius: '999px', 
                          background: '#F0F4FA', 
                          color: '#1E293B',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          border: '1px solid rgba(226, 232, 240, 0.8)'
                        }}
                      >
                        {model}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: INDUSTRIES WE SERVE & ADDITIONAL SERVICES */}
            <div 
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="onepager-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '28px', height: '4px', background: '#FF6B00', borderRadius: '2px' }} />
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-main)', textTransform: 'uppercase', margin: 0 }}>
                    INDUSTRIES WE SERVE
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {industriesList.map((ind, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6B00', flexShrink: 0 }} />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.2rem' }}>
                  <h3 style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FF6B00', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    ADDITIONAL SERVICES
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {additionalServicesList.map((srv, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#475569', flexShrink: 0 }} />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Footer / CTA Scoping Banner */}
      <footer 
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #152039 100%)', 
          color: '#FFFFFF', 
          padding: '2.2rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Left side: Heading & Contacts */}
            <div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, fontFamily: 'serif', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                Let's scope your first project.
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: '#94A3B8' }}>
                <a 
                  href="https://exlentia.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ color: '#94A3B8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Globe size={15} color="#FF6B00" /> https://exlentia.com/
                </a>
                <a 
                  href="mailto:admin@exlentia.com"
                  style={{ color: '#94A3B8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Mail size={15} color="#FF6B00" /> admin@exlentia.com
                </a>
              </div>
            </div>

            {/* Right side: CTA Button & Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenBooking}
                className="btn-accent-orange"
                style={{
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  cursor: 'pointer'
                }}
              >
                BOOK A SCOPING CALL <ArrowRight size={18} />
              </button>
              <a 
                href="tel:+916380141284"
                style={{ 
                  color: '#FFFFFF', 
                  fontSize: '1.15rem', 
                  fontWeight: 800, 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Phone size={18} color="#FF6B00" /> +91 6380141284
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnePagerLanding;
