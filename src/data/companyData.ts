export interface Capability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  services: { title: string; desc: string }[];
  applications: string[];
  tools: string[];
  evidence: string;
}

export interface TechItem {
  name: string;
  category: 'MCU / Hardware' | 'RTOS & OS' | 'Robotics & Vision' | 'AI & GenAI' | 'Data & Edge' | 'Standards & Testing';
  description: string;
  popular?: boolean;
}

export interface ApplicationDomain {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  delivered: string;
  result: string;
  icon: string;
}

export interface ComplianceStandard {
  code: string;
  name: string;
  description: string;
  domains: string;
}

export const COMPANY_INFO = {
  name: "THIRAN TECHNOLOGIES",
  shortName: "THIRAN",
  tagline: "INTELLIGENCE FOR A BRIGHTER, MORE CAPABLE WORLD",
  subTagline: "Firmware, edge AI, robotics and safety-critical systems — built by senior engineers, without big-consultancy overhead or freelancer risk.",
  heroHeading: "Senior Embedded & Robotics Engineering, On Demand.",
  heroSubheading: "Intelligence for a brighter, more capable world. We build production firmware, autonomous robotics, PCB hardware, and safety-critical embedded software with compliance-grade rigor.",
  contactEmail: "hello@thirantechnologies.io",
  website: "thillaiv.github.io/Thiran-Technologies-site",
  phone: "+91 80 5550 0100",
  address: "Bangalore, India"
};

export const CAPABILITIES: Capability[] = [
  {
    id: "embedded",
    title: "Embedded Systems & IoT",
    tagline: "Connected intelligence from sensor to secure real-time device",
    description: "Production firmware, custom RTOS applications, embedded Linux/Yocto distributions, device drivers, and secure bootloader bring-up for mission-critical hardware.",
    badge: "FIRMWARE • RTOS • LINUX • BSP",
    iconName: "Cpu",
    services: [
      { title: "Firmware Architecture", desc: "Production firmware architecture for connected embedded products." },
      { title: "Bootloader Development", desc: "Bootloaders and secure platform-startup integration." },
      { title: "Device Drivers & Peripheral Bring-up", desc: "Low-level drivers for sensors, communication buses (SPI/I2C/UART/CAN), and microcontrollers." },
      { title: "BSP & OS Porting", desc: "Embedded Linux and platform adaptation across target hardware." },
      { title: "RTOS Frameworks", desc: "Deterministic task scheduling, messaging, and real-time application frameworks." },
      { title: "Device Verification & Post-Silicon Validation", desc: "Diagnostics, logging, automated verification, and production release engineering." }
    ],
    applications: ["Industrial Platforms", "Robotics Controllers", "Embedded Devices", "IoT Gateways", "SONAR / RADAR Systems"],
    tools: ["STM32", "ARM", "i.MX", "FreeRTOS", "ThreadX", "Linux / Yocto", "U-Boot", "C/C++", "QAC", "Coverity", "GTest"],
    evidence: "20 years Embedded Platform R&D • firmware • bootloaders • BSP • drivers • OS porting • silicon validation"
  },
  {
    id: "robotics",
    title: "Robotics & Autonomous Systems",
    tagline: "Intelligent motion, perception and ROS2-based autonomy",
    description: "End-to-end robotics software engineering including 3D perception, motion planning, ROS2 node architecture, Gazebo simulation, and industrial robot arm control.",
    badge: "ROS2 • PERCEPTION • MOTION • SIMULATION",
    iconName: "Bot",
    services: [
      { title: "ROS2 System Architecture", desc: "Modular, deterministic ROS2 node structures for autonomous platforms." },
      { title: "Perception & 3D Sensing", desc: "Integration of LiDAR, RGB-D cameras, ultrasound, and point-cloud pipelines." },
      { title: "Motion Control & Trajectory Planning", desc: "Kinematics, inverse kinematics, motor control loop design, and obstacle avoidance." },
      { title: "Simulation & Digital Twin", desc: "Realistic Gazebo / RoboDK physical environment simulation for rapid testing." }
    ],
    applications: ["Autonomous Mobile Robots (AMR)", "Surgical Robotics ATE", "Warehouse & Pallet Inspection", "Industrial Automation"],
    tools: ["ROS2", "MoveIt", "Gazebo", "OpenCV", "RoboDK", "Python", "C++", "Point Cloud Library (PCL)"],
    evidence: "ROS2 migration • MoveIt trajectory optimization • Real-time perception pipelines for autonomous mobile robots"
  },
  {
    id: "pcb",
    title: "Embedded Hardware & PCB Design",
    tagline: "Schematic-to-production PCB design for power, sensing and motor control",
    description: "Complete electronics hardware design from schematic capture to high-speed PCB layout, signal integrity analysis, power management, and DFM/Gerber generation.",
    badge: "SCHEMATIC • PCB • POWER • DFM",
    iconName: "Zap",
    services: [
      { title: "Schematic Architecture", desc: "Component selection, power budget calculation, and schematic capture." },
      { title: "Multi-layer PCB Layout", desc: "High-speed routing, signal integrity compliance, impedance matching, and stack-up definition." },
      { title: "Power Management & Motor Control", desc: "DC-DC switchers, LDOs, battery management (BMS), motor gate drivers, and current sensing." },
      { title: "DFM & Production Handoff", desc: "Gerber generation, BOM optimization, pick-and-place files, and test point allocation." }
    ],
    applications: ["EV Battery Management Systems", "Motor Control Boards", "Sensor Fusion Nodes", "Embedded Electronics"],
    tools: ["KiCad", "Signal Integrity", "SPI / I²C / UART / CAN", "DC-DC / LDO", "DFM / Gerber", "Oscilloscopes & Logic Analyzers"],
    evidence: "4+ years schematic-to-production PCB engineering across high-density MCU & power electronics"
  },
  {
    id: "ai",
    title: "AI / ML & Computer Vision",
    tagline: "Practical edge vision and GenAI for real-world inspection & automation",
    description: "Deploying high-performance computer vision models (YOLO, TensorFlow, PyTorch) on low-power edge hardware, alongside GenAI engineering copilots and application benchmarking.",
    badge: "VISION • YOLO • GENAI • BENCHMARKING",
    iconName: "Eye",
    services: [
      { title: "Vision Model Development", desc: "Custom neural network architectures for object detection, classification, and defect inspection." },
      { title: "Edge AI Acceleration", desc: "Quantization, TensorRT optimization, and model deployment on NPU / TPU / GPU targets." },
      { title: "Defect & Pallet Inspection", desc: "High-speed inline industrial inspection for manufacturing quality control." },
      { title: "GenAI Evaluation & Workflows", desc: "Benchmarking LLM/VLM applications (Groq, DeepSeek, Ollama, OpenAI) for engineering workflows." }
    ],
    applications: ["Industrial Visual Defect Detection", "Robot Navigation Perception", "Embedded Vending Automation", "6D Pose Estimation"],
    tools: ["YOLO", "TensorFlow", "PyTorch", "OpenCV", "Google AI Studio", "OpenAI", "DeepSeek", "GroqCloud", "Ollama", "n8n"],
    evidence: "Defect • obstacle • pallet detection • machine vision • 6D pose research • GenAI benchmark tooling"
  },
  {
    id: "edge",
    title: "Edge Computing & Data Orchestration",
    tagline: "Real-time processing where decisions happen",
    description: "Building secure edge nodes, device telemetry frameworks, MQTT message brokers, microservices (Docker on Edge), and edge-to-cloud data orchestration.",
    badge: "EDGEX • CONNECTIVITY • SECURITY • TELEMETRY",
    iconName: "Network",
    services: [
      { title: "Edge Node Architecture", desc: "Compute nodes that acquire, transform, and act on sensor streams locally with ultra-low latency." },
      { title: "Secure Device Connectivity", desc: "Encrypted device communication using TLS, OpenSSL, libCoAP, and OAuth credentials." },
      { title: "Local Event Processing & Routing", desc: "Filter, convert, and orchestrate telemetry across heterogeneous endpoints." },
      { title: "Edge Containerization", desc: "Containerized deployment of edge microservices using Docker and Yocto Linux." }
    ],
    applications: ["Embedded Lab IoT", "Industrial Gateways", "Connected Remote Monitoring", "Distributed Intelligence Nodes"],
    tools: ["EdgeX (LFEDGE)", "OpenBMC", "Linux / Yocto", "Docker", "MQTT", "libCoAP", "OpenSSL / TLS", "Python / C++"],
    evidence: "EdgeX (LFEDGE) • OpenBMC • Embedded Linux / Yocto • MQTT • TLS / OpenSSL implementation"
  },
  {
    id: "embedded",
    title: "Safety-Critical Embedded Software",
    tagline: "Regulated device software designed to international safety standards",
    description: "Specialized software architecture and engineering for Class II and Class III embedded devices, strictly adhering to IEC 62304, ISO 13485, ISO 14971, and FDA guidelines.",
    badge: "IEC 62304 • ISO 13485 • FDA 21 CFR 820",
    iconName: "Activity",
    services: [
      { title: "IEC 62304 Compliant Development", desc: "Full lifecycle software engineering from requirements trace to V&V test execution." },
      { title: "Risk Management Integration", desc: "ISO 14971 hazard analysis, failure mode mitigation, and safety alarm handling." },
      { title: "Embedded Device Controls", desc: "Precision closed-loop motor control, sensor acquisition, and real-time monitoring software." },
      { title: "V&V & Regulatory Submissions", desc: "Traceability matrix, automated test execution, static analysis, and FDA audit-ready documentation." }
    ],
    applications: ["Ultrasound Acquisition Subsystems", "Maternal & Fetal Monitoring", "TPN Compounding Systems", "Infusion Pumps", "Defibrillators", "Surgical Robotics"],
    tools: ["IEC 62304", "ISO 13485", "ISO 14971", "IEC 60601", "TMS570 Safety MCU", "FreeRTOS", "ThreadX", "Coverity", "GTest"],
    evidence: "23 years Embedded Software Architecture • Ultrasound • Infusion • Defibrillators • TPN Compounding"
  }
];

export const TECH_ITEMS: TechItem[] = [
  // MCU / Hardware
  { name: "STM32", category: "MCU / Hardware", description: "ARM Cortex-M microcontrollers for real-time control.", popular: true },
  { name: "Arria 10 (Intel FPGA)", category: "MCU / Hardware", description: "SoC/FPGA platform for high-bandwidth embedded products." },
  { name: "i.MX6 / i.MX8", category: "MCU / Hardware", description: "NXP MPU platforms for Linux edge products.", popular: true },
  { name: "TMS570", category: "MCU / Hardware", description: "TI dual-core lockstep safety microcontroller." },
  { name: "MSP430 / PIC", category: "MCU / Hardware", description: "Ultra low-power microcontrollers for sensor nodes." },
  { name: "KiCad PCB Design", category: "MCU / Hardware", description: "Schematic design, multi-layer routing, DFM, Gerber generation.", popular: true },
  { name: "Signal Integrity & Power", category: "MCU / Hardware", description: "DC-DC switchers, LDOs, CAN/SPI/I2C layout optimization." },

  // RTOS & OS
  { name: "FreeRTOS", category: "RTOS & OS", description: "Lightweight, real-time operating system for embedded MCUs.", popular: true },
  { name: "ThreadX (Azure RTOS)", category: "RTOS & OS", description: "Deterministic RTOS for safety-critical embedded products." },
  { name: "Embedded Linux & Yocto", category: "RTOS & OS", description: "Custom Linux distribution building and BSP creation.", popular: true },
  { name: "U-Boot & Bootloaders", category: "RTOS & OS", description: "Secure platform boot-chain initialization." },
  { name: "C / C++ (C11, C++17/20)", category: "RTOS & OS", description: "High-performance firmware and systems programming.", popular: true },
  { name: "Qt / QML", category: "RTOS & OS", description: "Rich UI development for embedded touchscreen devices." },

  // Robotics & Vision
  { name: "ROS2 (Robot OS 2)", category: "Robotics & Vision", description: "Modern robotics framework for navigation, state machines & control.", popular: true },
  { name: "MoveIt & Gazebo", category: "Robotics & Vision", description: "Motion planning framework and 3D simulation environment." },
  { name: "RoboDK", category: "Robotics & Vision", description: "Industrial robot arm simulation and offline programming." },
  { name: "OpenCV", category: "Robotics & Vision", description: "Real-time computer vision & image processing library.", popular: true },
  { name: "6D Pose Estimation", category: "Robotics & Vision", description: "Deep-learning methods for textureless object pose determination." },

  // AI & GenAI
  { name: "YOLO (v8/v9)", category: "AI & GenAI", description: "Ultra-fast object detection for edge vision.", popular: true },
  { name: "PyTorch & TensorFlow", category: "AI & GenAI", description: "Deep learning model development and edge quantization." },
  { name: "Google AI Studio / OpenAI", category: "AI & GenAI", description: "Generative AI API integration for intelligent applications." },
  { name: "GroqCloud / DeepSeek / Ollama", category: "AI & GenAI", description: "Fast inference and local LLM evaluation for engineering tools." },
  { name: "n8n Workflow Automation", category: "AI & GenAI", description: "AI pipeline and agentic workflow orchestration." },

  // Data & Edge
  { name: "EdgeX Foundry (LF EDGE)", category: "Data & Edge", description: "Open edge-computing framework for IoT device orchestration." },
  { name: "OpenBMC", category: "Data & Edge", description: "Open-source baseboard management controller firmware." },
  { name: "MQTT & libCoAP", category: "Data & Edge", description: "Lightweight telemetry protocols for resource-constrained devices." },
  { name: "Docker on Edge", category: "Data & Edge", description: "Containerized microservices for edge nodes." },
  { name: "OpenSSL & TLS", category: "Data & Edge", description: "Cryptographic transport security for connected products." },

  // Standards & Testing
  { name: "IEC 62304", category: "Standards & Testing", description: "Embedded device software lifecycle processes.", popular: true },
  { name: "ISO 13485 & ISO 14971", category: "Standards & Testing", description: "Quality management & risk management for embedded devices." },
  { name: "IEC 60601 & FDA 21 CFR 820", category: "Standards & Testing", description: "Electrical safety & FDA quality system regulation." },
  { name: "Coverity & QAC", category: "Standards & Testing", description: "Static analysis for defect detection & MISRA C/C++ compliance." },
  { name: "GTest / Valgrind", category: "Standards & Testing", description: "Automated C++ unit testing and memory leak debugging." }
];

export const APPLICATION_AREAS: ApplicationDomain[] = [
  {
    id: "ultrasound",
    title: "Ultrasound Acquisition Subsystem",
    category: "Embedded Devices",
    description: "High-speed sensor acquisition and real-time beamforming firmware.",
    challenge: "High data bandwidth requiring low-latency beamforming and signal processing on compact embedded hardware.",
    delivered: "Custom Arria 10 FPGA/SoC integration, custom PCIe drivers, and RTOS acquisition firmware.",
    result: "Achieved sub-millisecond signal processing latency with compliance-grade software documentation.",
    icon: "Activity"
  },
  {
    id: "ev-bms",
    title: "EV Battery Management System (BMS)",
    category: "Automotive & EV",
    description: "Cell voltage monitoring, state-of-charge calculation, and CAN bus integration.",
    challenge: "Strict safety requirements for thermal runaway detection and fault handling in high-voltage EV packs.",
    delivered: "Firmware architecture on TMS570 safety MCU, CANopen communication stack, and battery balancing algorithms.",
    result: "Zero diagnostic missed-faults in hardware-in-the-loop (HIL) testing.",
    icon: "BatteryCharging"
  },
  {
    id: "tpn-compounding",
    title: "Automated TPN Compounding System",
    category: "Regulated Pharmacy / Embedded",
    description: "Precision fluidic pump control and gravimetric weight verification.",
    challenge: "Requires absolute measurement precision and zero margin for error in IV fluid preparation.",
    delivered: "Closed-loop stepper motor control algorithms, load cell calibration software, and IEC 62304 Class B software validation.",
    result: "Delivered fully tested firmware enabling client's rapid regulatory submission.",
    icon: "FlaskConical"
  },
  {
    id: "surgical-robotics",
    title: "Surgical Robotics ATE & Embedded Subsystems",
    category: "Robotics & Embedded",
    description: "Automated Test Equipment (ATE) and motion controller software for surgical tools.",
    challenge: "High-precision multi-axis motion synchronization with micro-radian accuracy.",
    delivered: "ROS2-based controller interface, real-time Linux kernel customization, and automated regression test suite.",
    result: "Reduced production calibration time by 60% with full audit traceability.",
    icon: "Bot"
  },
  {
    id: "pallet-inspection",
    title: "Warehouse AI Defect & Pallet Inspection",
    category: "Industrial AI & Vision",
    description: "Automated vision system for inspecting pallet integrity and barcode verification.",
    challenge: "Varying lighting conditions and high conveyor belt speeds in distribution hubs.",
    delivered: "Custom YOLO object detection model deployed on edge TPU with local web management UI.",
    result: "99.4% detection accuracy at 120 items/minute conveyor speed.",
    icon: "ScanLine"
  },
  {
    id: "maternal-monitoring",
    title: "Maternal & Fetal Real-Time Monitor",
    category: "Embedded Devices",
    description: "Continuous physiological signal monitoring with real-time arrhythmia and distress alarm generation.",
    challenge: "Ultra low power consumption for portable bedside monitors with uninterrupted telemetry.",
    delivered: "STM32 firmware with FreeRTOS, low-power BLE stack, and ISO 14971 risk-controlled alarm manager.",
    result: "Passed IEC 60601-1-8 alarm testing on first attempt.",
    icon: "HeartPulse"
  }
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  { code: "IEC 62304", name: "Embedded Device Software Lifecycle", description: "Global standard for software development life cycle in embedded equipment (Class A, B, C).", domains: "Embedded Software" },
  { code: "ISO 13485", name: "Embedded Devices Quality Management", description: "Comprehensive management system for design and manufacture of embedded devices.", domains: "Quality System" },
  { code: "ISO 14971", name: "Risk Management to Embedded Devices", description: "Systematic hazard identification, risk estimation, and safety risk controls.", domains: "Safety & Risk" },
  { code: "IEC 60601", name: "Embedded Electrical Equipment Safety", description: "General safety and essential performance standards including alarm systems.", domains: "Electrical Safety" },
  { code: "FDA 21 CFR 820", name: "Quality System Regulation", description: "FDA requirements for design controls, verification, validation, and traceability.", domains: "Regulatory Compliance" },
  { code: "UL 2900", name: "Cybersecurity for Network-Connectable Products", description: "Standards for software cybersecurity in healthcare and critical infrastructure.", domains: "Cybersecurity" }
];

export const COMPARISON_TABLE = [
  {
    feature: "Delivery Team",
    largeConsultancy: "Junior-heavy bench after pitch",
    freelancer: "Single person (single point of failure)",
    thiranModel: "Senior-only engineers, every engagement",
    thiranAdvantage: true
  },
  {
    feature: "Procurement & Onboarding",
    largeConsultancy: "Multi-week / multi-quarter cycles",
    freelancer: "Fast, but variable contracts",
    thiranModel: "2–4 Week Scoped Pilot option",
    thiranAdvantage: true
  },
  {
    feature: "Cost & Overhead",
    largeConsultancy: "High partner overhead & billable margin",
    freelancer: "Low upfront cost, hidden rework risk",
    thiranModel: "Transparent fixed-scope pricing",
    thiranAdvantage: true
  },
  {
    feature: "Regulatory & Safety Rigor",
    largeConsultancy: "Referenced in documentation",
    freelancer: "Rarely has ISO/IEC compliance discipline",
    thiranModel: "Compliance-grade deliverables from day 1",
    thiranAdvantage: true
  },
  {
    feature: "Direct Accountability",
    largeConsultancy: "Layered account managers",
    freelancer: "Unpredictable availability",
    thiranModel: "Direct founder & senior architect access",
    thiranAdvantage: true
  }
];

export const ENGAGEMENT_STEPS = [
  {
    step: "01",
    title: "30-Min Discovery Call",
    subtitle: "No cost, no obligation",
    description: "We review your technical requirements, target architecture, and evaluate technical fit directly with a senior engineering founder."
  },
  {
    step: "02",
    title: "2–4 Week Scoped Pilot",
    subtitle: "Fixed scope & fixed timeline",
    description: "We build a tangible, working proof-of-concept, firmware module, or ROS2 package to prove quality before larger commitments."
  },
  {
    step: "03",
    title: "Scale & Transition",
    subtitle: "Project, Retainer or Team Extension",
    description: "Transition seamlessly to full product development, ongoing retainer support, or embedding senior engineers directly into your team."
  }
];
