import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, AlertOctagon, GitMerge, FileText } from 'lucide-react';

export const ComplianceLifecycleInfographic: React.FC = () => {
  const pyramidLevels = [
    {
      level: 'LEVEL 4',
      title: 'Design History File (DHF) & Regulatory Audit Pack',
      subtitle: 'FDA 21 CFR 820 / CE Mark ready',
      color: '#059669',
      bgColor: 'rgba(5, 150, 105, 0.08)',
      icon: <FileText size={18} color="#059669" />
    },
    {
      level: 'LEVEL 3',
      title: 'V&V Automated Test Execution & Traceability Matrix',
      subtitle: '100% GTest coverage + Coverity static clean build',
      color: '#0A58CA',
      bgColor: 'rgba(10, 88, 202, 0.08)',
      icon: <FileCheck size={18} color="#0A58CA" />
    },
    {
      level: 'LEVEL 2',
      title: 'MISRA C/C++ Firmware Implementation & Static Analysis',
      subtitle: 'Deterministic FreeRTOS / ThreadX RTOS task isolation',
      color: '#7C3AED',
      bgColor: 'rgba(124, 58, 237, 0.08)',
      icon: <GitMerge size={18} color="#7C3AED" />
    },
    {
      level: 'LEVEL 1',
      title: 'Software SRS & ISO 14971 Safety Risk Hazard Controls',
      subtitle: 'Class A, B, C risk categorization & alarm mitigation',
      color: '#FF6B00',
      bgColor: 'rgba(255, 107, 0, 0.08)',
      icon: <AlertOctagon size={18} color="#FF6B00" />
    }
  ];

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2.5rem', borderColor: 'rgba(5, 150, 105, 0.3)' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>
          <ShieldCheck size={14} /> IEC 62304 TRACEABILITY PYRAMID INFOGRAPHIC
        </span>
        <h3 className="heading-sm" style={{ fontSize: '1.35rem', marginTop: '0.3rem' }}>
          End-to-End Compliance & Traceability Architecture
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '650px', margin: '0.4rem auto 0 auto' }}>
          Every line of code maps directly to documented safety requirements, risk controls, and automated unit test results.
        </p>
      </div>

      {/* Visual Pyramid Infographic Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '850px', margin: '0 auto' }}>
        {pyramidLevels.map((lvl, i) => (
          <div
            key={i}
            style={{
              background: lvl.bgColor,
              border: `1px solid ${lvl.color}`,
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              transition: 'transform var(--transition-fast)',
              width: `${100 - i * 5}%`,
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ padding: '0.5rem', background: '#FFFFFF', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                {lvl.icon}
              </div>
              <div>
                <span className="mono-tag" style={{ color: lvl.color, fontSize: '0.68rem', display: 'block' }}>
                  {lvl.level}
                </span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {lvl.title}
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {lvl.subtitle}
                </span>
              </div>
            </div>

            <CheckCircle2 size={20} color={lvl.color} style={{ flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
};
