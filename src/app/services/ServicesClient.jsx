
"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  Crosshair,
  Activity,
  Network,
  Fingerprint,
  RefreshCw,
  Cloud,
  BrainCircuit,
  MonitorSmartphone,
  Scale,
  Code2,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  X,
  LockKeyhole,
  Server,
  Search,
  Shield,
  ChevronRight,
  Eye,
  Layers3,
  Database,
  Globe,
  Cpu,
  Terminal,
  Radar,
  FileCheck,
  Workflow,
  Building2,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    id: "offensive",
    number: "01",
    icon: Crosshair,
    category: "SECURITY TESTING",
    title: "Offensive Security",
    subtitle: "Find vulnerabilities before attackers do.",
    description:
      "Identify weaknesses across your digital environment through controlled security testing, realistic attack simulations and comprehensive security assessments.",
    features: [
      "Network, Web, Mobile & API VAPT",
      "Red Team & Blue Team Attack Simulations",
      "Cloud VAPT — AWS, Azure & GCP",
      "External & Internal Security Audits",
    ],
    tags: ["VAPT", "Red Team", "Penetration Testing"],
  },
  {
    id: "managed",
    number: "02",
    icon: Activity,
    category: "THREAT MONITORING",
    title: "Managed Security",
    subtitle: "Continuous visibility. Faster response.",
    description:
      "Strengthen your security operations with continuous monitoring, threat detection and managed response capabilities designed to help protect your business.",
    features: [
      "24/7 SOC-as-a-Service & SIEM Monitoring",
      "Managed Detection & Response (MDR)",
      "Automated Patch & Update Management",
      "Security Tool Implementation & Tuning",
    ],
    tags: ["SOC", "SIEM", "MDR"],
  },
  {
    id: "network",
    number: "03",
    icon: Network,
    category: "INFRASTRUCTURE",
    title: "Network & Infrastructure Security",
    subtitle: "Build a stronger network foundation.",
    description:
      "Protect your network infrastructure with modern security architecture, access controls and network defence solutions that support secure connectivity.",
    features: [
      "Next-Generation Firewall Solutions",
      "Zero Trust Network Architecture",
      "VPN & SD-WAN Security",
      "Network Access Control (NAC)",
      "IDS / IPS Implementation",
    ],
    tags: ["Zero Trust", "Firewall", "Network"],
  },
  {
    id: "forensics",
    number: "04",
    icon: Fingerprint,
    category: "IDENTITY & RESPONSE",
    title: "Forensics & Identity",
    subtitle: "Understand incidents. Secure identities.",
    description:
      "Improve incident investigation and identity protection through digital forensics, access governance and modern identity management solutions.",
    features: [
      "Digital Forensics & Incident Response",
      "Privileged Access Management (PAM)",
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Identity Governance & Administration",
    ],
    tags: ["DFIR", "IAM", "Identity"],
  },
  {
    id: "modernization",
    number: "05",
    icon: RefreshCw,
    category: "DIGITAL TRANSFORMATION",
    title: "Strategic Modernization",
    subtitle: "Move your technology forward.",
    description:
      "Modernize technology environments with practical roadmaps, architecture planning and transformation strategies aligned with business objectives.",
    features: [
      "Technology Strategy & Roadmaps",
      "Legacy System Modernization",
      "Enterprise Architecture Planning",
      "Digital Transformation Consulting",
    ],
    tags: ["Strategy", "Architecture", "Modernization"],
  },
  {
    id: "cloud-defense",
    number: "06",
    icon: Cloud,
    category: "CLOUD PROTECTION",
    title: "Cloud & Microsoft 365 Defense",
    subtitle: "Secure your cloud-first environment.",
    description:
      "Protect cloud workloads, Microsoft 365 environments and development pipelines with integrated security controls and proactive cloud defence.",
    features: [
      "Cloud Security Posture Management",
      "CWPP & CNAPP Solutions",
      "Microsoft Defender XDR",
      "DevSecOps Security Integration",
      "Microsoft Purview & DLP",
    ],
    tags: ["Cloud Security", "Microsoft 365", "DevSecOps"],
  },
  {
    id: "analytics",
    number: "07",
    icon: BrainCircuit,
    category: "DATA & INTELLIGENCE",
    title: "Analytics & AI Strategy",
    subtitle: "Turn business data into intelligence.",
    description:
      "Make better-informed decisions through data architecture, business intelligence and practical AI and machine learning strategies.",
    features: [
      "Predictive Analytics & AI / ML Strategy",
      "Business Intelligence Dashboards",
      "Power BI & Tableau Solutions",
      "Data Governance & Classification",
      "Data Warehousing & Architecture",
    ],
    tags: ["AI / ML", "Business Intelligence", "Data"],
  },
  {
    id: "workspace",
    number: "08",
    icon: MonitorSmartphone,
    category: "MODERN WORKPLACE",
    title: "Digital Workspace",
    subtitle: "Make work secure from anywhere.",
    description:
      "Create productive and secure digital workplaces with endpoint management, collaboration governance and modern remote-work solutions.",
    features: [
      "Virtual Desktop Infrastructure (VDI)",
      "Microsoft Intune & Endpoint Management",
      "Teams & SharePoint Governance",
      "Secure Remote Work Solutions",
    ],
    tags: ["VDI", "Endpoint", "Collaboration"],
  },
  {
    id: "advisory",
    number: "09",
    icon: Scale,
    category: "RISK & COMPLIANCE",
    title: "Advisory & Compliance",
    subtitle: "Make security a business priority.",
    description:
      "Build a more mature security programme through governance, risk management, compliance alignment and strategic security guidance.",
    features: [
      "Virtual CISO (vCISO) Services",
      "Governance, Risk & Compliance",
      "NIST, ISO 27001, GDPR & HIPAA Alignment",
      "Security Maturity Assessments",
      "Security Awareness & Phishing Training",
    ],
    tags: ["GRC", "ISO 27001", "Risk"],
  },
  {
    id: "development",
    number: "10",
    icon: Code2,
    category: "DIGITAL ENGINEERING",
    title: "Website & Application Services",
    subtitle: "Build digital experiences that perform.",
    description:
      "Design, develop and maintain modern digital products, business applications and secure integrations that support your organisation.",
    features: [
      "Website Design & Development",
      "Responsive Web Applications",
      "Custom Business Applications",
      "Application Security & Testing",
      "Maintenance & Performance Optimization",
      "API Development & Integration",
    ],
    tags: ["Web Development", "Applications", "APIs"],
  },
];

const cloudServices = [
  {
    icon: Server,
    number: "01",
    title: "Cloud Infrastructure",
    description:
      "Design and deploy scalable cloud environments built around your operational requirements.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Cloud Migration",
    description:
      "Move business workloads with a structured migration approach focused on continuity.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Cloud Management",
    description:
      "Improve visibility, performance and day-to-day cloud operations.",
  },
  {
    icon: LockKeyhole,
    number: "04",
    title: "Cloud Security",
    description:
      "Strengthen cloud governance, access controls and protection across workloads.",
  },
];

const approach = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "Discover your environment, challenges and security priorities before defining the right approach.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Protect",
    description:
      "Implement practical safeguards and resilient technology solutions that support your business.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Improve",
    description:
      "Continuously assess, refine and evolve your security and technology posture.",
  },
];

export default function ServicesClient() {
  const [activeService, setActiveService] = useState(null);

  const selectedService = services.find(
    (service) => service.id === activeService
  );

  useEffect(() => {
    if (!activeService) return;

    const timer = window.setTimeout(() => {
      document.getElementById("service-detail")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [activeService]);

  const openService = (id) => {
    setActiveService((current) => (current === id ? null : id));
  };

  return (

    <>
  
     <Navbar />
    <main className="axis-services">
      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-grid" />
        <div className="svc-hero-glow svc-hero-glow-one" />
        <div className="svc-hero-glow svc-hero-glow-two" />

        <div className="svc-container svc-hero-content">
          <div className="svc-eyebrow svc-hero-eyebrow">
            <span className="svc-eyebrow-dot" />
            WHAT WE DO
          </div>

          <h1>
            Technology built
            <br />
            for a <span>more secure</span>
            <br />
            tomorrow.
          </h1>

          <p className="svc-hero-description">
            From proactive cybersecurity to digital transformation, we help
            organisations protect what matters and build what comes next.
          </p>

          <div className="svc-hero-actions">
            <a href="#service-directory" className="svc-primary-btn">
              Explore our services <ArrowUpRight size={18} />
            </a>
            <Link href="/contact" className="svc-outline-btn">
              Talk to our team <ArrowRight size={17} />
            </Link>
          </div>

          <div className="svc-hero-bottom">
            <div className="svc-hero-stat">
              <span className="svc-stat-icon">
                <ShieldCheck size={19} />
              </span>
              <span>
                <strong>Security-first</strong>
                <small>At every layer</small>
              </span>
            </div>

            <div className="svc-hero-stat">
              <span className="svc-stat-icon">
                <Cpu size={19} />
              </span>
              <span>
                <strong>Technology-led</strong>
                <small>Built for progress</small>
              </span>
            </div>

            <div className="svc-hero-stat">
              <span className="svc-stat-icon">
                <Globe size={19} />
              </span>
              <span>
                <strong>Business-focused</strong>
                <small>Designed around you</small>
              </span>
            </div>
          </div>
        </div>

        <div className="svc-hero-decoration" aria-hidden="true">
          <div className="svc-orbit svc-orbit-one" />
          <div className="svc-orbit svc-orbit-two" />
          <div className="svc-orbit-core">
            <ShieldCheck size={54} strokeWidth={1.2} />
          </div>
          <span className="svc-orbit-point svc-orbit-point-one" />
          <span className="svc-orbit-point svc-orbit-point-two" />
          <span className="svc-orbit-point svc-orbit-point-three" />
        </div>

        <div className="svc-hero-scroll">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* INTRO */}
      <section className="svc-intro">
        <div className="svc-container svc-intro-grid">
          <div>
            <div className="svc-eyebrow svc-light-eyebrow">
              <span className="svc-eyebrow-dot" />
              THE AXISCORE APPROACH
            </div>
            <h2>
              One partner.
              <br />
              <span>Multiple possibilities.</span>
            </h2>
          </div>

          <div className="svc-intro-copy">
            <p>
              Technology should empower your business, not hold it back.
              AXISCORE brings cybersecurity, infrastructure and digital
              expertise together to help you navigate complexity with
              confidence.
            </p>
            <p>
              Explore our capabilities and discover how the right combination
              of services can support your next step.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE DIRECTORY */}
      <section className="svc-directory" id="service-directory">
        <div className="svc-container">
          <div className="svc-section-heading">
            <div>
              <div className="svc-eyebrow svc-light-eyebrow">
                <span className="svc-eyebrow-dot" />
                OUR CAPABILITIES
              </div>
              <h2>
                Services designed
                <br />
                <span>around your business.</span>
              </h2>
            </div>

            <p>
              Explore our service areas. Select any capability to see how we
              can help.
            </p>
          </div>

          <div className="svc-service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;

              return (
                <button
                  type="button"
                  key={service.id}
                  className={`svc-card ${isActive ? "is-active" : ""}`}
                  onClick={() => openService(service.id)}
                  aria-expanded={isActive}
                  aria-controls="service-detail"
                >
                  <div className="svc-card-top">
                    <span className="svc-card-number">{service.number}</span>
                    <span className="svc-card-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                  </div>

                  <span className="svc-card-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>

                  <div className="svc-card-bottom">
                    <span>{isActive ? "SELECTED" : "EXPLORE SERVICE"}</span>
                    <span className="svc-card-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SELECTED SERVICE DETAIL */}
          {selectedService && (
            <section
              className="svc-detail"
              id="service-detail"
              key={selectedService.id}
            >
              <div className="svc-detail-topline">
                <span>
                  <span className="svc-detail-dot" />
                  SERVICE OVERVIEW
                </span>
                <button
                  type="button"
                  className="svc-detail-close"
                  onClick={() => setActiveService(null)}
                  aria-label="Close service details"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="svc-detail-content">
                <div className="svc-detail-main">
                  <div className="svc-detail-icon">
                    <selectedService.icon size={30} />
                  </div>

                  <span className="svc-detail-category">
                    {selectedService.category}
                  </span>

                  <h2>{selectedService.title}</h2>
                  <h3>{selectedService.subtitle}</h3>
                  <p>{selectedService.description}</p>

                  <div className="svc-detail-tags">
                    {selectedService.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link href="/contact" className="svc-primary-btn">
                    Discuss this service <ArrowUpRight size={18} />
                  </Link>
                </div>

                <div className="svc-detail-features">
                  <span className="svc-detail-label">
                    WHAT WE CAN HELP WITH
                  </span>
                  <h3>Explore our capabilities</h3>

                  <ul>
                    {selectedService.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={19} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-detail-note">
                    <LockKeyhole size={18} />
                    <span>
                      A practical approach shaped around your environment and
                      business requirements.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      {/* CLOUD SERVICES */}
      <section className="svc-cloud">
        <div className="svc-cloud-glow" />
        <div className="svc-container svc-cloud-inner">
          <div className="svc-cloud-heading">
            <div>
              <div className="svc-eyebrow svc-dark-eyebrow">
                <span className="svc-eyebrow-dot" />
                CLOUD CAPABILITIES
              </div>
              <h2>
                Make the cloud
                <br />
                <span>work smarter.</span>
              </h2>
            </div>

            <p>
              Build a cloud environment that is scalable, manageable and
              protected. Our cloud capabilities support your journey from
              planning to ongoing operations.
            </p>
          </div>

          <div className="svc-cloud-grid">
            {cloudServices.map((item) => {
              const Icon = item.icon;

              return (
                <div className="svc-cloud-card" key={item.number}>
                  <div className="svc-cloud-card-top">
                    <span>{item.number}</span>
                    <Icon size={25} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="svc-cloud-line" />
                </div>
              );
            })}
          </div>

          <div className="svc-cloud-footer">
            <div className="svc-cloud-footer-icon">
              <Database size={21} />
            </div>
            <p>
              Your cloud strategy should support your business goals and
              security requirements.
            </p>
            <Link href="/contact">
              Explore cloud solutions <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="svc-approach">
        <div className="svc-container">
          <div className="svc-approach-heading">
            <div className="svc-eyebrow svc-light-eyebrow">
              <span className="svc-eyebrow-dot" />
              HOW WE WORK
            </div>
            <h2>
              A clear path to
              <br />
              <span>lasting progress.</span>
            </h2>
            <p>
              The right outcomes begin with understanding your needs and
              building a solution that can evolve with your organisation.
            </p>
          </div>

          <div className="svc-approach-grid">
            {approach.map((item) => {
              const Icon = item.icon;

              return (
                <div className="svc-approach-card" key={item.number}>
                  <div className="svc-approach-top">
                    <span>{item.number}</span>
                    <div className="svc-approach-icon">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="svc-approach-bottom">
                    AXISCORE <ChevronRight size={15} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
     <Footer />
    </main>
      </>
  );
}
