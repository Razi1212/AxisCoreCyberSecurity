
import Link from "next/link";
import "../terms/policy.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | AXISCORE",
  description:
    "Learn how AXISCORE collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information when you visit our website or contact us.</p>
        <h3>Personal Information</h3>
        <ul>
          <li>Full name</li>
          <li>Business email address</li>
          <li>Company name</li>
          <li>Phone number, if provided</li>
          <li>Information submitted through contact forms</li>
        </ul>
        <h3>Technical Information</h3>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device and operating system information</li>
          <li>Pages visited and website usage data</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>AXISCORE may use collected information to:</p>
        <ul>
          <li>Respond to inquiries and service requests.</li>
          <li>Provide information about our cybersecurity services.</li>
          <li>Communicate with potential and existing clients.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Maintain website security and prevent fraudulent activity.</li>
          <li>Meet applicable legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Information Security",
    content: (
      <p>
        We implement reasonable technical and organizational safeguards
        designed to protect personal information against unauthorized
        access, disclosure, alteration, loss, or misuse. However, no
        electronic transmission or storage method can be guaranteed to
        be completely secure.
      </p>
    ),
  },
  {
    title: "4. Sharing of Information",
    content: (
      <p>
        We do not sell personal information. We may share information
        with trusted service providers when necessary to operate our
        website, provide services, maintain security, or comply with
        legal requirements. Such sharing should be limited to what is
        reasonably necessary.
      </p>
    ),
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: (
      <p>
        Our website may use cookies and similar technologies to improve
        functionality, understand website usage, and enhance user
        experience. You can manage cookies through your browser
        settings. Where legally required, consent will be obtained
        before using non-essential cookies.
      </p>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably
        necessary to fulfill the purposes described in this policy,
        meet legal obligations, resolve disputes, and enforce agreements.
      </p>
    ),
  },
  {
    title: "7. Third-Party Websites",
    content: (
      <p>
        Our website may contain links to third-party websites. AXISCORE
        is not responsible for their privacy practices, content, or
        security. We encourage visitors to review the privacy policies
        of external websites before sharing personal information.
      </p>
    ),
  },
  {
    title: "8. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on your location and applicable laws, you may have
          the right to:
        </p>
        <ul>
          <li>Request access to your personal information.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of personal information.</li>
          <li>Object to or restrict certain processing activities.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Request a copy of your information where applicable.</li>
        </ul>
        <p>Contact us to exercise any applicable rights.</p>
      </>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p>
        Our website is intended for businesses and general audiences.
        We do not knowingly collect personal information from children.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy to reflect changes in our
        services, business practices, or legal requirements. Updates
        will be published on this page with a revised date.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
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
          Privacy <span>Policy.</span>
        </h1>

        <p>
          Your privacy matters. Learn how we handle, protect, and
          respect your personal information.
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
            <a href={`#privacy-${index + 1}`} key={section.title}>
              {section.title}
            </a>
          ))}

          <Link href="/terms" className="sidebar-related">
            Terms & Conditions →
          </Link>
        </aside>

        <article className="policy-content">
          <div className="policy-intro">
            <span className="intro-icon">A</span>
            <div>
              <h2>Your trust is our priority.</h2>
              <p>
                At AXISCORE, we are committed to respecting your privacy
                and protecting the information you share with us.
              </p>
            </div>
          </div>

          {sections.map((section, index) => (
            <section
              className="policy-section"
              id={`privacy-${index + 1}`}
              key={section.title}
            >
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}

          <section className="policy-contact">
            <div>
              <span className="contact-label">HAVE QUESTIONS?</span>
              <h2>We're here to help.</h2>
              <p>
                Contact our team if you have questions about your
                personal information or this Privacy Policy.
              </p>
            </div>

            <a href="mailto:hello@axiscore.com">
              Contact AXISCORE ↗
            </a>
          </section>
        </article>
      </section>

      <div className="policy-bottom">
        <Link href="/">← Back to Home</Link>
        <span>© {new Date().getFullYear()} AXISCORE. All rights reserved.</span>
        <Link href="/terms">Terms & Conditions →</Link>
      </div>
      <Footer/>
    </main>
  );
}
