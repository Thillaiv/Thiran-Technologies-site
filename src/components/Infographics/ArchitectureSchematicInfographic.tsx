import React, { useState } from 'react';
import { Cpu, Bot, ShieldCheck, Activity, Wifi, Layers, CheckCircle2, Zap } from 'lucide-react';

export const ArchitectureSchematicInfographic: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('all');

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
      {/* Infographic Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-azure)' }} />
          <span className="mono-tag" style={{ color: 'var(--brand-azure)', fontSize: '0.75rem' }}>
            SYSTEM ARCHITECTURE INFOGRAPHIC
          </span>
        </div>
        <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>
          REAL-TIME PIPELINE
        </span>
      </div>

      {/* SVG Vector Schematic Graphic */}
      <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
        <svg viewBox="0 0 500 240" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0070F3" />
              <stop offset="100%" stopColor="#0A58CA" />
            </linearGradient>
            <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>
            <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connection Signal Lines */}
          <path d="M 120 70 L 180 70 L 180 120 L 220 120" fill="none" stroke="#0070F3" strokeWidth="2.5" strokeDasharray="6,4" />
          <path d="M 120 170 L 180 170 L 180 120 L 220 120" fill="none" stroke="#0070F3" strokeWidth="2.5" strokeDasharray="6,4" />
          <path d="M 320 120 L 370 120" fill="none" stroke="#FF6B00" strokeWidth="2.5" />
          <path d="M 440 120 L 480 120" fill="none" stroke="#10B981" strokeWidth="2.5" />

          {/* Node 1: Sensor Hardware Layer */}
          <g transform="translate(10, 40)" style={{ cursor: 'pointer' }} onClick={() => setActiveNode('sensor')}>
            <rect x="0" y="0" width="110" height="60" rx="8" fill="#FFFFFF" stroke="#0070F3" strokeWidth="1.5" />
            <text x="55" y="25" textAnchor="middle" fill="#0B1934" fontSize="11" fontWeight="700" fontFamily="sans-serif">Sensors & ADCs</text>
            <text x="55" y="42" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">SPI / I2C / CAN Bus</text>
          </g>

          {/* Node 2: Peripheral Input */}
          <g transform="translate(10, 140)" style={{ cursor: 'pointer' }} onClick={() => setActiveNode('vision')}>
            <rect x="0" y="0" width="110" height="60" rx="8" fill="#FFFFFF" stroke="#0070F3" strokeWidth="1.5" />
            <text x="55" y="25" textAnchor="middle" fill="#0B1934" fontSize="11" fontWeight="700" fontFamily="sans-serif">Vision & LiDAR</text>
            <text x="55" y="42" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">Camera / PointCloud</text>
          </g>

          {/* Central Processor Node: STM32 / Arria 10 */}
          <g transform="translate(220, 80)" style={{ cursor: 'pointer' }} onClick={() => setActiveNode('mcu')}>
            <rect x="0" y="0" width="100" height="80" rx="10" fill="url(#blueGrad)" filter="url(#glow)" />
            <text x="50" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="sans-serif">MCU / FPGA</text>
            <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="sans-serif">FreeRTOS / BSP</text>
            <text x="50" y="64" textAnchor="middle" fill="#00D4FF" fontSize="8" fontWeight="700" fontFamily="monospace">SUB-MS LATENCY</text>
          </g>

          {/* Node 4: ROS2 Autonomy & Edge AI */}
          <g transform="translate(360, 80)" style={{ cursor: 'pointer' }} onClick={() => setActiveNode('ai')}>
            <rect x="0" y="0" width="90" height="80" rx="10" fill="url(#orangeGrad)" />
            <text x="45" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif">ROS2 / AI</text>
            <text x="45" y="48" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="sans-serif">YOLO / Motion</text>
            <text x="45" y="64" textAnchor="middle" fill="#FFE0B2" fontSize="8" fontWeight="700" fontFamily="monospace">3D AUTONOMY</text>
          </g>

          {/* Safety Barrier Line */}
          <rect x="200" y="190" width="260" height="36" rx="6" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="330" y="212" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            🛡️ IEC 62304 / ISO 14971 Safety Risk Hazard Barrier
          </text>
        </svg>
      </div>

      {/* Dynamic Node Details Indicator */}
      <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontWeight: 600 }}>
          <Zap size={16} color="var(--brand-orange)" />
          <span>Click any block above to inspect system layer details</span>
        </div>
        <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontSize: '0.7rem' }}>V&V COMPLIANT</span>
      </div>
    </div>
  );
};
