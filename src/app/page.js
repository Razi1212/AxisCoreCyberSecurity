import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero3DLoader from "@/components/Hero3DLoader";
import AboutCTA from "@/components/Aboutcta";
import ServicesSection from "@/components/Servicescta";


import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  LockKeyhole,
  Database,
  Code2,
  Globe,
} from "lucide-react";

/* =========================================
   CYBER MARQUEE
========================================= */

function CyberMarquee() {
  const items = [
    { label: "WEB DEVELOPMENT", color: "white", icon: Code2 },
    { label: "CYBERSECURITY", color: "red", icon: ShieldCheck },
    { label: "APPLICATION DEVELOPMENT", color: "cyan", icon: Globe },
    { label: "THREAT INTELLIGENCE", color: "purple", icon: Activity },
    { label: "DATA PROTECTION", color: "white", icon: Database },
  ];

  return (
    <section
      className="cyber-marquee cyber-marquee-dark"
      aria-label="AXISCORE capabilities"
    >
      <div className="marquee-heading">
        <span className="marquee-heading-line" />
        <p>INNOVATION POWERED BY SECURITY</p>
        <span className="marquee-heading-line" />
      </div>

      <div className="marquee-window">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              className="marquee-content"
              key={copy}
              aria-hidden={copy === 1}
            >
              {items.map(({ label, color, icon: Icon }, index) => (
                <div className={`marquee-item ${color}`} key={label}>
                  <span className="marquee-index">
                    0{index + 1}
                  </span>

                  <span className="marquee-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>

                  <span className="marquee-text">
                    {label}
                  </span>

                  <span className="marquee-separator" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   HOMEPAGE
========================================= */

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="axis-home">

        {/* HERO SECTION */}

        <section className="hero-section hero-section-dark">

          {/* Optimized lazy-loaded 3D background */}
          <Hero3DLoader />

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="eyebrow-dot" />

              WEB &amp; APPLICATION DEVELOPMENT | SECURITY AT OUR CORE
            </div>

            <h1>
              Building Websites.
              <br />
              Creating <span>Applications.</span>
              <br />
              Securing What Matters.
            </h1>

            <p className="hero-description">
              We design and develop powerful websites and intelligent
              applications that help businesses grow and innovate.
              But what makes AXISCORE different is our foundation:
              cybersecurity is at the core of everything we build,
              keeping your digital future protected from the ground up.
            </p>

            <div className="hero-actions">

              <a href="/services" className="button button-primary">
                Explore Our Services
                <ArrowUpRight size={18} />
              </a>

              <a href="/aboutus" className="button button-outline">
                Discover AXISCORE
                <ArrowRight size={17} />
              </a>

            </div>

            <div className="trust-points">

              <div className="trust-item">
                <Code2 />

                <span>
                  Website &amp; Application
                  <br />
                  Development
                </span>
              </div>

              <div className="trust-item">
                <ShieldCheck />

                <span>
                  Cybersecurity at
                  <br />
                  Our Core
                </span>
              </div>

              <div className="trust-item">
                <LockKeyhole />

                <span>
                  Security-First
                  <br />
                  Engineering
                </span>
              </div>

            </div>
          </div>

          {/* Holds the right-side hero layout on desktop */}
          <div
            className="hero-visual-spacer"
            aria-hidden="true"
          />

        </section>

        {/* MARQUEE */}

        <CyberMarquee />
         <AboutCTA />
         <ServicesSection />

      </main>


      <Footer />
    </>
  );
}
