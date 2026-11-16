import Link from "next/link";
import "./policy.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | AXISCORE",
  description:
    "Review the terms and conditions governing the use of the AXISCORE website and services.",
};

const sections = [
  {
    title: "1. About AXISCORE",
    content: (
      <>
        <p>
          AXISCORE provides information about cybersecurity, IT security, and
          technology-related services.
        </p>
        <ul>
          <li>Threat Detection</li>
          <li>Network Security</li>
          <li>Data Protection</li>
          <li>Security Consulting</li>
        </ul>
        <p>
          Specific services, deliverables, pricing, and contractual obligations
          may be governed by separate agreements.
        </p>
      </>
    ),
  },
  {
    title: "2. Website Usage",
    content: (
      <>
        <p>You agree to use this website only for lawful purposes.</p>
        <p>You must not:</p>
        <ul>
          <li>Attempt unauthorized access to our website or systems.</li>
          <li>Introduce malicious software, viruses, or harmful code.</li>
          <li>Interfere with website functionality or security.</li>
          <li>Access restricted areas without authorization.</li>
          <li>Copy or distribute website content without permission.</li>
          <li>Use the website for unlawful or fraudulent activities.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, website content including text, graphics,
        logos, branding, designs, images, and other materials belongs to
        AXISCORE or its respective licensors. You may not reproduce, distribute,
        modify, or commercially exploit these materials without prior written
        permission, except where permitted by applicable law.
      </p>
    ),
  },
  {
    title: "4. Cybersecurity Services",
    content: (
      <>
        <p>
          Information on this website is provided for general informational
          purposes. Cybersecurity threats and technologies continuously evolve,
          and published recommendations may not be suitable for every
          environment.
        </p>
        <p>
          Penetration testing, vulnerability assessments, and other security
          activities must only be performed with appropriate authorization and
          an agreed scope of work.
        </p>
      </>
    ),
  },
  {
    title: "5. Service Agreements",
    content: (
      <>
        <p>
          Submitting an inquiry through our website does not automatically
          establish a client relationship or create a contractual obligation.
        </p>
        <p>Separate service agreements may define:</p>
        <ul>
          <li>Scope of services and deliverables.</li>
          <li>Project timelines and fees.</li>
          <li>Responsibilities of each party.</li>
          <li>Confidentiality and data-handling requirements.</li>
          <li>Applicable warranties and limitations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Third-Party Links",
    content: (
      <p>
        Our website may contain links to external websites and services. These
        links are provided for convenience. AXISCORE does not control or
        guarantee the availability, accuracy, or security of third-party
        websites. Accessing them is at your own discretion.
      </p>
    ),
  },
  {
    title: "7. Disclaimer",
    content: (
      <p>
        To the extent permitted by applicable law, the website and its content
        are provided on an "as is" and "as available" basis. We make reasonable
        efforts to maintain accurate information but do not guarantee
        uninterrupted, error-free, or completely secure operation. Nothing on
        this website guarantees that every cybersecurity risk, vulnerability, or
        attack can be prevented.
      </p>
    ),
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, AXISCORE shall not be
        liable for indirect, incidental, special, or consequential damages
        arising from the use of, or inability to use, this website. Nothing in
        these Terms excludes liability where such exclusion is prohibited by
        applicable law.
      </p>
    ),
  },
  {
    title: "9. Privacy",
    content: (
      <p>
        Your use of this website is also subject to our Privacy Policy, which
        explains how we collect and process personal information. Please review
        our Privacy Policy for further details.
      </p>
    ),
  },
  {
    title: "10. Changes to These Terms",
    content: (
      <p>
        AXISCORE may update or modify these Terms at any time. Changes will
        become effective when published on this page. Continued use of the
        website after updates indicates acceptance of the revised Terms, to the
        extent permitted by applicable law.
      </p>
    ),
  },
  {
    title: "11. Governing Law",
    content: (
      <p>
        These Terms shall be governed by and interpreted in accordance with the
        laws and regulations of the Kingdom of Saudi Arabia (KSA). Any disputes
        arising in connection with these Terms shall be subject to the
        jurisdiction of the competent courts of the Kingdom of Saudi Arabia.
      </p>
    ),
  },
];

export default function TermsConditions() {
  return (
    
    <main className="policy-page">
      <Navbar/>
      <div className="policy-grid" />
      <div className="policy-glow" />

      <section className="policy-hero">
        <div className="policy-eyebrow">
          <span className="policy-dot" />
          AXISCORE / LEGAL CENTER
        </div>

        <h1>
          Terms & <span>Conditions.</span>
        </h1>

        <p>
          Please review the terms governing your access to and use of the
          AXISCORE website.
        </p>

        <div className="policy-meta">
          <span>LAST UPDATED</span>
          <strong>November 16, 2026</strong>
        </div>
      </section>

      <section className="policy-layout">
        <aside className="policy-sidebar">
          <span className="sidebar-label">ON THIS PAGE</span>

          {sections.map((section, index) => (
            <a href={`#terms-${index + 1}`} key={section.title}>
              {section.title}
            </a>
          ))}

          <Link href="/privacy-policy" className="sidebar-related">
            Privacy Policy →
          </Link>
        </aside>

        <article className="policy-content">
          <div className="policy-intro">
            <span className="intro-icon">A</span>
            <div>
              <h2>Welcome to AXISCORE.</h2>
              <p>
                These Terms & Conditions explain the rules and responsibilities
                associated with using our website.
              </p>
            </div>
          </div>

          {sections.map((section, index) => (
            <section
              className="policy-section"
              id={`terms-${index + 1}`}
              key={section.title}
            >
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}

          <section className="policy-contact">
            <div>
              <span className="contact-label">NEED CLARIFICATION?</span>
              <h2>Let's talk.</h2>
              <p>
                If you have questions about these Terms, our team is ready to
                assist.
              </p>
            </div>

            <a href="mailto:hello@axiscore.com">Contact AXISCORE ↗</a>
          </section>
        </article>
      </section>

      <div className="policy-bottom">
        <Link href="/">← Back to Home</Link>
        <span>© {new Date().getFullYear()} AXISCORE. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy Policy →</Link>
      </div>
      <Footer/>
    </main>
  );
}
