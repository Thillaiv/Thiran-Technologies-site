import React from 'react';
import { Compass, Layers, Cpu, Code2, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

export const WorkflowPipelineInfographic: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Concept & Feasibility',
      desc: 'Early architecture trade-offs, power budgets, and sensor selection.',
      icon: <Compass size={20} color="var(--brand-blue)" />,
      badge: 'WEEK 1'
    },
    {
      step: '02',
      title: 'System Architecture',
      desc: 'OOAD/UML modeling, memory partitioning, and safety hazard analysis.',
      icon: <Layers size={20} color="var(--brand-azure)" />,
      badge: 'WEEK 1-2'
    },
    {
      step: '03',
      title: 'Hardware & PCB',
      desc: 'KiCad multi-layer routing, DFM checks, signal integrity & board bring-up.',
      icon: <Cpu size={20} color="var(--brand-orange)" />,
      badge: 'WEEK 2'
    },
    {
      step: '04',
      title: 'Firmware & RTOS',
      desc: 'FreeRTOS / ThreadX drivers, ROS2 node control, BSP & Linux porting.',
      icon: <Code2 size={20} color="var(--accent-purple)" />,
      badge: 'WEEK 2-3'
    },
    {
      step: '05',
      title: 'V&V Testing & HIL',
      desc: 'GTest unit execution, Coverity static analysis, HIL test bench verification.',
      icon: <ShieldCheck size={20} color="var(--accent-emerald)" />,
      badge: 'WEEK 3'
    },
    {
      step: '06',
      title: 'Production Handoff',
      desc: 'Full DHF traceability pack, firmware release binary & factory test fixtures.',
      icon: <Rocket size={20} color="var(--brand-orange)" />,
      badge: 'WEEK 4'
    }
  ];

  return (
    <div style={{ marginTop: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="mono-tag" style={{ color: 'var(--brand-blue)', marginBottom: '0.4rem', display: 'block' }}>
          ENGINEERING WORKFLOW INFOGRAPHIC
        </span>
        <h3 className="heading-sm" style={{ fontSize: '1.4rem' }}>
          From Initial Concept to Compliance-Grade Production Handoff
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          position: 'relative'
        }}
      >
        {stages.map((st, i) => (
          <div
            key={i}
            className="glass-panel"
            style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderTop: i % 2 === 0 ? '3px solid var(--brand-azure)' : '3px solid var(--brand-orange)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="mono-tag" style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>
                  STAGE {st.step}
                </span>
                <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                  {st.badge}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {st.icon}
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
                  {st.title}
                </h4>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {st.desc}
              </p>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
              <span>Outputs ready</span>
              <ArrowRight size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
