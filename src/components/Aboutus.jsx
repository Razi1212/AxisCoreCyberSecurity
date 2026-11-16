
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  ShieldCheck,
  Fingerprint,
  Target,
  Eye,
  Lightbulb,
  Handshake,
  Check,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsAnimations from "./AboutUsAnimations";
import "./Aboutus.css";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Security First",
    description:
      "We put security at the heart of every decision, helping businesses approach their digital future with confidence.",
    color: "red",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Trust & Integrity",
    description:
      "We believe strong partnerships are built through honesty, transparency and accountability.",
    color: "blue",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Purposeful Innovation",
    description:
      "We embrace new technologies with a clear purpose: creating meaningful and practical value.",
    color: "purple",
  },
  {
    number: "04",
    icon: Fingerprint,
    title: "Quality & Precision",
    description:
      "We care about the details and strive to deliver thoughtful, reliable and well-crafted solutions.",
    color: "teal",
  },
];

const commitments = [
  "A security-first mindset",
  "Understanding real business challenges",
  "Purposeful use of technology",
  "A commitment to quality and reliability",
];

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <main className="axis-about-premium">
        <AboutUsAnimations />

        {/* HERO */}
        <section className="ap-hero">
          <div className="ap-hero-glow ap-glow-one" />
          <div className="ap-hero-glow ap-glow-two" />
          <div className="ap-hero-glow ap-glow-three" />
          <div className="ap-hero-grid" />

          <div className="ap-container ap-hero-content">
            <div className="ap-overline">
              <span className="ap-overline-dot" />
              INDEPENDENT TECHNOLOGY COMPANY
              <span className="ap-year">EST. 2026</span>
            </div>

            <h1>
              Technology
              <br />
              deserves a
              <br />
              <span className="ap-gradient-text">
                stronger future.
              </span>
            </h1>

            <div className="ap-hero-bottom">
              <p>
                We are AXISCORE. A cybersecurity-focused technology
                company built around the belief that digital progress
                should always move forward with confidence.
              </p>

              <a href="#our-story" className="ap-discover">
                DISCOVER OUR STORY
                <ArrowDownRight size={20} />
              </a>
            </div>

            <div className="ap-hero-stats">
              <div>
                <strong>2026</strong>
                <span>ESTABLISHED</span>
              </div>

              <div>
                <strong>01</strong>
                <span>CORE FOCUS — SECURITY</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>ROOM TO INNOVATE</span>
              </div>
            </div>
          </div>

          <div className="ap-hero-art" aria-hidden="true">
            <div className="ap-art-orbit ap-orbit-one" />
            <div className="ap-art-orbit ap-orbit-two" />
            <div className="ap-art-orbit ap-orbit-three" />

            <div className="ap-art-core">
              <ShieldCheck size={92} strokeWidth={1.1} />
            </div>

            <div className="ap-art-label ap-label-top">
              <LockKeyhole size={15} />
              <span>SECURITY</span>
            </div>

            <div className="ap-art-label ap-label-bottom">
              <Sparkles size={15} />
              <span>INNOVATION</span>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="ap-intro ap-section" id="our-story">
          <div className="ap-container">
            <div className="ap-section-top">
              <span className="ap-section-number">
                01 / THE BEGINNING
              </span>
              <span className="ap-section-label">
                OUR STORY
              </span>
            </div>

            <div className="ap-intro-grid">
              <div>
                <span className="ap-small-tag ap-tag-blue">
                  A VISION WITH PURPOSE
                </span>

                <h2>
                  Built for a world
                  <br />
                  that <span>never stands still.</span>
                </h2>

                <div className="ap-founded-block">
                  <span className="ap-founded-year">2026</span>

                  <div>
                    <strong>THE YEAR AXISCORE BEGAN</strong>
                    <small>Our journey starts here.</small>
                  </div>
                </div>
              </div>

              <div className="ap-intro-copy">
                <p className="ap-lead">
                  The digital world creates opportunity. It also
                  demands responsibility.
                </p>

                <p>
                  Established in 2026, AXISCORE was founded with a
                  clear ambition: to help businesses approach
                  technology with greater confidence, stronger
                  security awareness and a forward-looking mindset.
                </p>

                <p>
                  Cybersecurity is at the heart of our identity.
                  We also recognise the role modern digital solutions
                  play in business growth, which is why our wider
                  capabilities include web and application development.
                </p>

                <p>
                  We are building AXISCORE around thoughtful work,
                  meaningful partnerships and a commitment to
                  doing things with purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="ap-statement">
          <div className="ap-statement-shape ap-statement-shape-one" />
          <div className="ap-statement-shape ap-statement-shape-two" />

          <div className="ap-container ap-statement-content">
            <span className="ap-section-number">
              02 / OUR BELIEF
            </span>

            <span className="ap-statement-kicker">
              THE AXISCORE PERSPECTIVE
            </span>

            <h2>
              Security doesn't
              <br />
              slow progress.
              <br />
              <span>It empowers it.</span>
            </h2>

            <p>
              We believe technology should create opportunities,
              strengthen businesses and make the future more secure.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="ap-identity ap-section">
          <div className="ap-container ap-identity-grid">
            <div className="ap-identity-visual">
              <div className="ap-identity-orb ap-identity-orb-one" />
              <div className="ap-identity-orb ap-identity-orb-two" />

              <div className="ap-identity-glass">
                <span className="ap-identity-code">
                  AX / 001
                </span>

                <div className="ap-identity-icon">
                  <ShieldCheck size={80} strokeWidth={1.2} />
                </div>

                <strong>SECURITY FIRST.</strong>
                <small>INNOVATION WITH PURPOSE.</small>

                <div className="ap-identity-bottom">
                  <span>AXISCORE</span>
                  <span>EST. 2026</span>
                </div>
              </div>
            </div>

            <div className="ap-identity-copy">
              <div className="ap-section-top">
                <span className="ap-section-number">
                  03 / OUR IDENTITY
                </span>
              </div>

              <span className="ap-small-tag ap-tag-purple">
                MORE THAN TECHNOLOGY
              </span>

              <h2>
                We think beyond
                <br />
                <span>the technology.</span>
              </h2>

              <p>
                AXISCORE is a technology company with cybersecurity
                at its core. We believe building a digital future
                requires more than adopting new technology — it
                requires understanding the risks, responsibilities
                and opportunities that come with it.
              </p>

              <p>
                Our approach brings together security-focused thinking,
                practical problem-solving and modern development
                capabilities. We aim to understand the purpose behind
                every project and approach it with care.
              </p>

              <Link href="/services" className="ap-text-link">
                EXPLORE OUR CAPABILITIES
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="ap-purpose ap-section">
          <div className="ap-container">
            <div className="ap-section-top">
              <span className="ap-section-number">
                04 / OUR DIRECTION
              </span>
              <span className="ap-section-label">
                PURPOSE & AMBITION
              </span>
            </div>

            <div className="ap-purpose-grid">
              <article className="ap-purpose-card ap-mission">
                <div className="ap-purpose-heading">
                  <div className="ap-purpose-icon">
                    <Target size={25} />
                  </div>
                  <span>OUR MISSION</span>
                </div>

                <h3>
                  Helping businesses move forward with confidence.
                </h3>

                <p>
                  To support businesses through security-focused
                  thinking and purposeful technology solutions that
                  help them protect, improve and progress.
                </p>

                <span className="ap-purpose-index">01</span>
                <div className="ap-purpose-decoration" />
              </article>

              <article className="ap-purpose-card ap-vision">
                <div className="ap-purpose-heading">
                  <div className="ap-purpose-icon">
                    <Eye size={25} />
                  </div>
                  <span>OUR VISION</span>
                </div>

                <h3>
                  Becoming a trusted name in security and technology.
                </h3>

                <p>
                  To build a future where businesses can embrace
                  digital innovation with confidence, supported by
                  dependable technology and a strong security mindset.
                </p>

                <span className="ap-purpose-index">02</span>
                <div className="ap-purpose-decoration" />
              </article>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="ap-values ap-section">
          <div className="ap-container">
            <div className="ap-values-heading">
              <div>
                <div className="ap-section-top">
                  <span className="ap-section-number">
                    05 / WHAT GUIDES US
                  </span>
                </div>

                <h2>
                  Principles that
                  <br />
                  <span>define our approach.</span>
                </h2>
              </div>

              <p>
                Our values shape how we think, how we work and the
                relationships we aim to build.
              </p>
            </div>

            <div className="ap-values-grid">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className={`ap-value-card ap-value-${item.color}`}
                    key={item.number}
                  >
                    <div className="ap-value-top">
                      <span>{item.number}</span>
                      <ArrowUpRight size={20} />
                    </div>

                    <div className="ap-value-icon">
                      <Icon size={27} strokeWidth={1.6} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="ap-value-bottom-line" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PREMIUM COMMITMENT */}
        <section className="ap-commitment ap-section">
          <div className="ap-container">
            <div className="ap-section-top">
              <span className="ap-section-number">
                06 / OUR COMMITMENT
              </span>
              <span className="ap-section-label">
                THE AXISCORE STANDARD
              </span>
            </div>

            <div className="ap-commitment-grid">
              <div className="ap-commitment-content">
                <span className="ap-small-tag ap-tag-blue">
                  BUILT ON PRINCIPLES
                </span>

                <h2>
                  A standard we
                  <br />
                  <span>strive to uphold.</span>
                </h2>

                <p>
                  Trust is earned through consistency. We approach
                  every opportunity with care, clarity and a genuine
                  commitment to quality.
                </p>

                <p>
                  As AXISCORE grows, our principles remain the
                  foundation of how we think, work and build
                  lasting relationships.
                </p>

                <div className="ap-commitment-signature">
                  <span className="ap-signature-line" />
                  <span>THE AXISCORE WAY</span>
                </div>
              </div>

              <div className="ap-commitment-right">
                <div className="ap-commitment-visual">
                  <div className="ap-commitment-orbit ap-commitment-orbit-one" />
                  <div className="ap-commitment-orbit ap-commitment-orbit-two" />
                  <div className="ap-commitment-orbit ap-commitment-orbit-three" />

                  <div className="ap-commitment-shield">
                    <ShieldCheck size={75} strokeWidth={1.25} />
                  </div>

                  <div className="ap-commitment-floating">
                    <Sparkles size={17} />
                    <span>BUILT WITH PURPOSE</span>
                  </div>
                </div>

                <div className="ap-commitment-list">
                  {commitments.map((item, index) => (
                    <div
                      className="ap-commitment-item"
                      key={item}
                    >
                      <span>0{index + 1}</span>
                      <p>{item}</p>
                      <Check size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
