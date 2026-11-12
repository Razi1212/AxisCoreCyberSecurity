
import NeuralNetwork from "../components/NeuralNetwork";
import Navbar from "../components/Navbar";

const services = [
  {
    number: "01",
    icon: "◈",
    title: "Threat Detection",
    description:
      "Identify suspicious activity and potential vulnerabilities before they become serious security incidents.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Network Security",
    description:
      "Protect your infrastructure with intelligent network monitoring and security-focused architecture.",
  },
  {
    number: "03",
    icon: "⬡",
    title: "Data Protection",
    description:
      "Strengthen data security with access controls, encryption strategies, and risk management.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">
        <NeuralNetwork />

        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-bg-text">AXISCORE</div>

        <div className="hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              NEXT-GENERATION CYBERSECURITY
            </div>

            <h1>
              Intelligence That
              <br />
              Protects. <span>Security</span>
              <br />
              That Evolves.
            </h1>

            <p className="hero-description">
              Stay ahead of digital threats with intelligent security
              solutions built to protect your infrastructure, data,
              and digital future.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-btn">
                Explore Solutions <span>↗</span>
              </a>

              <a href="#about" className="secondary-btn">
                Discover More <span>→</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-icon">✓</div>
              <div>
                <strong>Security-first thinking</strong>
                <span>Built around protection and resilience</span>
              </div>
            </div>

            <div className="hero-features">
              <div>
                <span className="feature-number">01</span>
                <strong>ANALYZE</strong>
              </div>
              <div>
                <span className="feature-number">02</span>
                <strong>DETECT</strong>
              </div>
              <div>
                <span className="feature-number">03</span>
                <strong>PROTECT</strong>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual">
            <div className="radar-display">
              <div className="radar-ring ring-one" />
              <div className="radar-ring ring-two" />
              <div className="radar-ring ring-three" />

              <div className="radar-grid-line radar-horizontal" />
              <div className="radar-grid-line radar-vertical" />

              <div className="radar-diagonal radar-diagonal-one" />
              <div className="radar-diagonal radar-diagonal-two" />

              <div className="radar-center">
                <span />
              </div>

              <div className="radar-blip blip-one" />
              <div className="radar-blip blip-two" />
              <div className="radar-blip blip-three" />
            </div>

            <div className="radar-label">
              <span className="live-dot" />
              AXISCORE SECURITY NETWORK
            </div>

            <div className="radar-coordinate">
              <span>SECURE CONNECTION</span>
              <span>NETWORK / 01</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>DESIGNED FOR A MORE SECURE DIGITAL WORLD</span>
          <span className="bottom-line" />
          <span>01 / 04</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="section-label">
          <span /> WHO WE ARE
        </div>

        <div className="about-grid">
          <div>
            <h2>
              Security is not just
              <br />
              a feature. It's a <span>foundation.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              In a world where digital threats continue to evolve,
              security needs to evolve with them. AXISCORE represents
              a forward-thinking approach to cybersecurity,
              focused on resilience, intelligence, and trust.
            </p>

            <a href="#contact" className="text-link">
              Learn more about us <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-padding" id="services">
        <div className="services-heading">
          <div>
            <div className="section-label">
              <span /> WHAT WE DO
            </div>

            <h2>
              Protection built for
              <br />
              the <span>digital frontier.</span>
            </h2>
          </div>

          <p>
            A security-first approach designed to help businesses
            navigate digital complexity with confidence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span>{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#contact">
                Explore service <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-padding" id="contact">
        <div className="contact-panel">
          <div className="contact-decoration">AXISCORE</div>

          <div className="section-label">
            <span /> LET'S CONNECT
          </div>

          <h2>
            Ready to make your
            <br />
            digital world <span>safer?</span>
          </h2>

          <p>
            Let's discuss how a stronger security approach can
            support your business.
          </p>

          <a href="mailto:hello@axiscore.com" className="primary-btn">
            Get in Touch <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-symbol">A</span>
          <span className="brand-name">AXIS<span className="brand-light">CORE</span></span>
        </a>

        <span>
          © {new Date().getFullYear()} AXISCORE. All rights reserved.
        </span>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
      
    </main>
  );
}
