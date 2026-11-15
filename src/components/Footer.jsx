
import Link from "next/link";
import "./Footer.css";

const services = [
  "Threat Detection",
  "Network Security",
  "Data Protection",
  "Security Consulting",
];

export default function Footer() {
  return (
    <footer className="axis-footer" id="top">
      {/* BACKGROUND */}
      <div className="footer-grid-bg" />
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      {/* CTA SECTION */}
      <section className="footer-cta">
        <div className="footer-cta-content">
          <div className="footer-eyebrow">
            <span className="status-dot" />
            SECURE YOUR DIGITAL FUTURE
          </div>

          <h2>
            Security begins
            <br />
            with <span>the right partner.</span>
          </h2>

          <p>
            Build resilience, strengthen your infrastructure,
            and stay ahead of evolving cyber threats with AXISCORE.
          </p>

          <Link href="/contact" className="footer-cta-button">
            Discuss Your Security Needs
            <span>↗</span>
          </Link>
        </div>

        {/* ANIMATED SHIELD */}
        <div className="footer-visual">
          <div className="footer-visual-inner">
            <div className="footer-orbit orbit-one" />
            <div className="footer-orbit orbit-two" />
            <div className="footer-orbit orbit-three" />

            <div className="footer-shield">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path
                  d="M32 5L53 13V29C53 43 44 53 32 59C20 53 11 43 11 29V13L32 5Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 31L29 38L43 23"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="footer-floating-tag tag-top">
              <span className="tag-dot" />
              SYSTEM PROTECTED
            </div>

            <div className="footer-floating-tag tag-bottom">
              <span className="tag-line" />
              ADVANCED DEFENSE
            </div>
          </div>
        </div>
      </section>

      <div className="footer-divider" />

      {/* UNIFIED FOOTER CONTENT */}
      <section className="footer-content">

        {/* BRAND */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="logo-symbol">A</span>
            <span className="logo-name">
              AXIS<span>CORE</span>
            </span>
          </Link>

          <p>
            Intelligent cybersecurity for a connected world.
            Protecting businesses through proactive defense,
            trusted expertise, and advanced security solutions.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 8.5H2V22h3.2V8.5ZM3.6 2A1.9 1.9 0 1 0 3.6 5.8 1.9 1.9 0 0 0 3.6 2ZM22 13.8c0-4.1-2.2-6-5.1-6a4.4 4.4 0 0 0-4 2.2V8.5H9.7V22H13v-7.1c0-1.9.4-3.7 2.7-3.7s2.3 2.1 2.3 3.8V22h3.3l.7-8.2Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.8"
                  r="1"
                  className="instagram-dot"
                />
              </svg>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.9.1-.6.4-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* EXPERTISE */}
        <div className="footer-column">
          <h4>EXPERTISE</h4>
          {services.map((service) => (
            <Link href="/services" key={service}>
              {service}
            </Link>
          ))}
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h4>CONTACT</h4>

          <a href="mailto:hello@axiscore.com">
            <span className="contact-icon">@</span>
            hello@axiscore.com
          </a>

          <Link href="/contact">
            <span className="contact-icon">↗</span>
            Start a conversation
          </Link>

          <div className="footer-security-note">
            <div className="security-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5L20 5.5V11.5C20 16.5 16.7 20 12 22C7.3 20 4 16.5 4 11.5V5.5L12 2.5Z" />
                <path d="M8.5 12L11 14.5L16 9.5" />
              </svg>
            </div>

            <div>
              <strong>Built around trust.</strong>
              <small>Security without compromise.</small>
            </div>
          </div>
        </div>
      </section>

      {/* WATERMARK */}
      <div className="footer-watermark" aria-hidden="true">
        AXISCORE
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AXISCORE. All rights reserved.
        </p>

        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span />
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>

        <a href="#top" className="back-to-top">
          BACK TO TOP
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
