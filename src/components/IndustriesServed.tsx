import React, { useState } from 'react';
import { Activity, Factory, Bot, Network, Sun, Flame, ShieldCheck, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: React.ReactNode;
  overview: string;
  keySolutions: string[];
  standards: string[];
  hardwareTarget: string[];
  caseStudyHighlight: string;
}

export const INDUSTRIES_SERVED: IndustrySector[] = [
  {
    id: "embedded",
    name: "Embedded Devices & Healthcare",
    tagline: "Safety-critical embedded software for regulated Class II & Class III embedded products",
    badge: "CLASS II & III REGULATED",
    icon: <Activity size={24} color="var(--brand-blue)" />,
    overview: "We design compliance-grade firmware, RTOS application frameworks, closed-loop fluidic controls, and signal acquisition systems strictly conforming to international embedded standards.",
    keySolutions: [
      "Ultrasound Acquisition & PCIe Data Subsystems",
      "Maternal & Fetal Physiological Monitoring Software",
      "Gravimetric TPN Automated Compounding Controls",
      "Infusion Pump Real-Time Motor & Alarm Logic",
      "Defibrillator Alarm & Emergency Pulse Subsystems",
      "Endoscope Cleaning & Reprocessing Equipment Control"
    ],
    standards: ["IEC 62304 Class A/B/C", "ISO 13485 QMS", "ISO 14971 Risk Analysis", "IEC 60601-1-8 Alarms", "FDA 21 CFR 820"],
    hardwareTarget: ["TI TMS570 Safety MCU", "STM32 ARM Cortex-M", "Intel Arria 10 SoC FPGA", "FreeRTOS", "ThreadX"],
    caseStudyHighlight: "Delivered sub-millisecond Ultrasound signal processing & Class B compounding firmware enabling 510(k) approval."
  },
  {
    id: "energy-solar",
    name: "Energy, Solar & CleanTech",
    tagline: "Smart inverter controls, solar grid edge monitoring, and energy storage systems",
    badge: "CLEANTECH & RENEWABLES",
    icon: <Sun size={24} color="var(--brand-orange)" />,
    overview: "Engineering high-efficiency solar inverter firmware, MPPT tracking algorithms, microgrid controller nodes, battery energy storage systems (BESS), and smart utility grid integration.",
    keySolutions: [
      "Solar MPPT & Grid-Tied Inverter Firmware Architecture",
      "Battery Energy Storage Systems (BESS) Control Logic",
      "Microgrid Edge Telemetry & Distributed Energy Nodes",
      "Solar Monitoring Portal & SunSpec Modbus Integration",
      "High-Efficiency Digital Power DC-DC Converter Controls",
      "Renewable Storage Thermal & Safety Alarm Monitoring"
    ],
    standards: ["IEEE 1547 Grid Interconnection", "IEC 62109 Inverter Safety", "UL 1741 SA Smart Inverters"],
    hardwareTarget: ["TI C2000 / TMS320 DSP", "STM32G4 Digital Power MCU", "SunSpec Modbus RTU/TCP", "FreeRTOS"],
    caseStudyHighlight: "Implemented high-speed MPPT digital power control loops achieving 99.1% conversion efficiency in solar microgrid inverters."
  },
  {
    id: "oil-gas",
    name: "Oil, Gas & Smart Utilities",
    tagline: "Intelligent pipeline monitoring, gas leak detection sensors and hazardous zone IoT",
    badge: "HAZARDOUS ZONE & PIPELINE",
    icon: <Flame size={24} color="#EF4444" />,
    overview: "Designing ATEX / IECEx intrinsically safe embedded gas detection devices, remote pipeline flowmeter telemetry, gas metering infrastructure, and hazardous environment industrial IoT.",
    keySolutions: [
      "Intrinsically Safe Gas Leak Detection Sensor Firmware",
      "Remote Pipeline Pressure & Flowmeter Telemetry Nodes",
      "Smart Gas Metering & Wireless AMR / AMI Protocol Stacks",
      "ATEX / IECEx Hazardous Area Low-Power Sensor Nodes",
      "Methane & Toxic Gas Optical Sensor Data Acquisition",
      "SCADA / Modbus Gateway & Remote Diagnostics"
    ],
    standards: ["ATEX Directive 2014/34/EU", "IECEx Explosive Atmospheres", "EN 50271 Gas Detection Software"],
    hardwareTarget: ["Low-Power MSP430 / STM32L4", "LoRaWAN / NB-IoT", "Modbus RTU", "libCoAP"],
    caseStudyHighlight: "Developed ultra-low-power gas detector firmware operating on battery power for 5+ years in IECEx Zone 1 hazardous environments."
  },
  {
    id: "industrial",
    name: "Industrial Automation & EV",
    tagline: "Deterministic embedded controllers, EV battery management and smart equipment",
    badge: "DETERMINISTIC & POWER",
    icon: <Factory size={24} color="var(--brand-blue)" />,
    overview: "Engineering robust motor control gate drivers, high-voltage battery management systems (EV BMS), CANopen communication stacks, and deterministic PLC controllers for industrial operations.",
    keySolutions: [
      "EV Battery Management System (BMS) Firmware",
      "Cell Voltage & Thermal Runaway Protection",
      "High-Power Motor Control & Gate Driver Boards",
      "CANbus / CANopen / EtherCAT Industrial Telemetry",
      "Predictive Equipment Diagnostics & Logging",
      "Multi-Function Printer (MFP) Platform BSP Bring-Up"
    ],
    standards: ["ISO 26262 Automotive Safety", "IEC 61508 Functional Safety", "UL 1973 EV Battery Safety"],
    hardwareTarget: ["NXP i.MX6 / i.MX8", "STM32F4 / F7", "KiCad Multi-Layer PCB", "Yocto Linux"],
    caseStudyHighlight: "Built fault-tolerant EV BMS firmware with zero missed-diagnostics during Hardware-in-the-Loop (HIL) battery pack testing."
  },
  {
    id: "robotics",
    name: "Robotics & Warehousing",
    tagline: "Perception, 3D navigation, motion planning and ROS2 autonomous systems",
    badge: "ROS2 & AUTONOMY",
    icon: <Bot size={24} color="var(--accent-purple)" />,
    overview: "From autonomous mobile robots (AMRs) to surgical robot arm ATE and automated warehouse inspection, we build deterministic perception and motion planning nodes.",
    keySolutions: [
      "ROS2 Autonomy System Architecture & MoveIt Integration",
      "LiDAR, RGB-D & Point Cloud Perception Pipelines",
      "AI Visual Defect & Pallet Inspection on Conveyors",
      "6D Pose Estimation for Textureless Industrial Objects",
      "Gazebo & RoboDK Digital Twin Simulation Environments",
      "Surgical Robotics Automated Test Equipment (ATE)"
    ],
    standards: ["ISO 3691-4 Industrial Robot Safety", "ANSI/RIA R15.08 Autonomous Mobile Robots"],
    hardwareTarget: ["ROS2 Humble / Iron", "NVIDIA Jetson / NPU", "OpenCV / YOLO", "Point Cloud Library"],
    caseStudyHighlight: "Deployed custom YOLO vision model achieving 99.4% pallet inspection accuracy at 120 items/min conveyor speed."
  },
  {
    id: "iot",
    name: "Smart Infrastructure & Edge IoT",
    tagline: "Edge-connected nodes, telemetry orchestration and secure device management",
    badge: "EDGE COMPUTING & TELEMETRY",
    icon: <Network size={24} color="var(--accent-emerald)" />,
    overview: "Connecting heterogeneous edge devices with secure data pipelines, OpenBMC hardware monitoring, MQTT brokers, and containerized microservices close to sensor endpoints.",
    keySolutions: [
      "EdgeX Foundry (LF EDGE) Local Data Broker Architecture",
      "OpenBMC Firmware for Baseboard Hardware Monitoring",
      "TLS 1.3 / OpenSSL Encrypted Device Communications",
      "MQTT & libCoAP Telemetry Orchestration",
      "Custom Yocto Linux Distribution & Docker Containerization",
      "Embedded Laboratory IoT Endpoint Management"
    ],
    standards: ["UL 2900 Cybersecurity", "NIST SP 800-213 IoT Cybersecurity"],
    hardwareTarget: ["Embedded Linux / Yocto", "Docker on Edge", "EdgeX", "MQTT", "OpenSSL"],
    caseStudyHighlight: "Architected EdgeX-based local compute nodes processing high-throughput telemetry streams with end-to-end TLS security."
  }
];

export const IndustriesServed: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES_SERVED[0].id);

  const activeIndustry = INDUSTRIES_SERVED.find(ind => ind.id === activeIndustryId) || INDUSTRIES_SERVED[0];

  return (
    <section
      id="industries"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(248, 250, 252, 0.45) 0%, rgba(241, 245, 249, 0.68) 100%), url("/industries_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="mono-tag" style={{ color: 'var(--brand-orange)', marginBottom: '0.5rem', display: 'block' }}>
            WHERE WE OPERATE
          </span>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
            Industries We Build For.
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
            Deep domain engineering expertise across embedded devices, solar & energy storage, gas & pipeline safety, industrial automation, autonomous robotics, and edge IoT.
          </p>
        </div>

        {/* Industry Cards Grid Selection */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {INDUSTRIES_SERVED.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <div
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderColor: isActive ? 'var(--brand-azure)' : 'var(--border-subtle)',
                  background: isActive ? 'linear-gradient(180deg, rgba(0, 112, 243, 0.08) 0%, var(--bg-card) 100%)' : 'var(--bg-card)',
                  boxShadow: isActive ? 'var(--glow-cyan)' : '0 2px 10px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)' }}>
                    {ind.icon}
                  </div>
                  <span className="badge" style={{ fontSize: '0.65rem' }}>
                    {ind.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  {ind.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {ind.tagline}
                </p>

                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: isActive ? 'var(--brand-azure)' : 'var(--text-dim)', fontWeight: 600 }}>
                  <span>View Solutions</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Industry Deep-Dive Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderColor: 'var(--border-highlight)',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <div style={{ padding: '0.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                  {activeIndustry.icon}
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.65rem' }}>{activeIndustry.name}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                {activeIndustry.overview}
              </p>
            </div>
            <span className="badge badge-orange" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              {activeIndustry.badge}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {/* Left Column: Key Solutions Delivered */}
            <div>
              <h4 className="mono-tag" style={{ color: 'var(--brand-azure)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                REPRESENTATIVE ENGINEERING SOLUTIONS
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {activeIndustry.keySolutions.map((sol, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--brand-azure)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', fontWeight: 500 }}>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Standards & Target Hardware */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Compliance & Standards */}
              <div>
                <h4 className="mono-tag" style={{ color: 'var(--accent-emerald)', marginBottom: '0.85rem', fontSize: '0.85rem' }}>
                  REGULATORY & SAFETY STANDARDS
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeIndustry.standards.map((std, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(5, 150, 105, 0.08)',
                        color: 'var(--accent-emerald)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        border: '1px solid rgba(5, 150, 105, 0.2)'
                      }}
                    >
                      ✓ {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware & OS Targets */}
              <div>
                <h4 className="mono-tag" style={{ color: 'var(--brand-orange)', marginBottom: '0.85rem', fontSize: '0.85rem' }}>
                  TARGET PLATFORMS & FRAMEWORKS
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeIndustry.hardwareTarget.map((hw, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-main)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Highlight Banner */}
              <div
                style={{
                  marginTop: 'auto',
                  padding: '1.15rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '4px solid var(--brand-orange)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)'
                }}
              >
                <div style={{ color: 'var(--brand-orange)', fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Zap size={15} /> Industry Proven Outcome:
                </div>
                {activeIndustry.caseStudyHighlight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
