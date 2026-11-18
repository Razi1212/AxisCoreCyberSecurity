
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Network,
  Code2,
} from "lucide-react";

import "./Servicescta.css";

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div
        className="services-cta__texture"
        aria-hidden="true"
      />

      <div className="services-cta__container">

        {/* Top row */}
        <div className="services-cta__top">
          <div className="services-cta__eyebrow">
            <span className="services-cta__eyebrow-line" />
            THE AXISCORE ADVANTAGE
          </div>

          <span className="services-cta__number">
            01 <span>/</span> 10
          </span>
        </div>

        {/* Main content */}
        <div className="services-cta__main">

          <div className="services-cta__copy">
            <h2>
              The right expertise.
              <br />
              <span>One connected</span>
              <br />
              vision.
            </h2>

            <p>
              Explore how cybersecurity, cloud, infrastructure
              and digital engineering come together to move your
              business forward.
            </p>

            <Link
              href="/services"
              className="services-cta__link"
              aria-label="Explore all AXISCORE services"
            >
              <span>Explore our services</span>

              <span className="services-cta__link-icon">
                <ArrowUpRight size={21} />
              </span>
            </Link>
          </div>

          {/* Architectural visual */}
          <div
            className="services-cta__visual"
            aria-hidden="true"
          >
            <div className="services-cta__visual-label">
              <span>AXISCORE</span>
              <span>CONNECTED TECHNOLOGY</span>
            </div>

            <div className="services-cta__architecture">
              <div className="services-cta__structure structure-one" />
              <div className="services-cta__structure structure-two" />
              <div className="services-cta__structure structure-three" />
              <div className="services-cta__structure structure-four" />

              <div className="services-cta__red-line" />
              <div className="services-cta__floor" />
            </div>

            <div className="services-cta__visual-bottom">
              TECHNOLOGY / SECURITY / INNOVATION
            </div>
          </div>

        </div>

        {/* NEW TECHNOLOGY EXPERTISE SECTION */}
        <div className="services-cta__expertise">

          <div className="services-cta__expertise-heading">
            <div>
              <span className="services-cta__expertise-label">
                BEYOND THE EXPECTED
              </span>

              <h3>
                Technology that moves business forward.
              </h3>
            </div>

            <span className="services-cta__expertise-index">
              CAPABILITIES / 04
            </span>
          </div>

          <div className="services-cta__expertise-grid">

            <div className="services-cta__expertise-item">
              <BrainCircuit size={25} />
              <span>01</span>

              <h4>AI & Automation</h4>

              <p>
                Intelligent systems. Smarter operations.
              </p>

              <ArrowUpRight
                size={18}
                className="expertise-arrow"
              />
            </div>

            <div className="services-cta__expertise-item">
              <Cloud size={25} />
              <span>02</span>

              <h4>Cloud Solutions</h4>

              <p>
                Flexible and scalable digital environments.
              </p>

              <ArrowUpRight
                size={18}
                className="expertise-arrow"
              />
            </div>

            <div className="services-cta__expertise-item">
              <Network size={25} />
              <span>03</span>

              <h4>Infrastructure</h4>

              <p>
                Connected systems built for performance.
              </p>

              <ArrowUpRight
                size={18}
                className="expertise-arrow"
              />
            </div>

            <div className="services-cta__expertise-item">
              <Code2 size={25} />
              <span>04</span>

              <h4>Digital Engineering</h4>

              <p>
                Modern solutions for evolving businesses.
              </p>

              <ArrowUpRight
                size={18}
                className="expertise-arrow"
              />
            </div>

          </div>
        </div>
     

{/* =====================================
    AXISCORE FAQ SECTION
===================================== */}

<section className="services-cta__faq">

  <div className="services-cta__faq-header">

    <div className="services-cta__faq-intro">
      <span className="services-cta__expertise-label">
        KNOWLEDGE / CLARITY / CONFIDENCE
      </span>

      <h3>
        Questions worth
        <br />
        <span>answering.</span>
      </h3>

      <p>
        Find answers to common questions about our technology,
        cybersecurity and digital solutions.
      </p>
    </div>

    <div className="services-cta__faq-aside">
      <span className="services-cta__faq-aside-number">
        FAQ / 001
      </span>

      <p>
        Have a different question?
        <br />
        Our team is ready to help.
      </p>

      <Link href="/contact" className="services-cta__faq-contact">
        Talk to our team
        <ArrowUpRight size={17} />
      </Link>
    </div>

  </div>

  <div className="services-cta__faq-list">

    <details className="services-cta__faq-item" open>
      <summary>
        <span className="services-cta__faq-number">01</span>
        <span className="services-cta__faq-question">
          What services does AXISCORE provide?
        </span>
        <span className="services-cta__faq-toggle" />
      </summary>

      <div className="services-cta__faq-answer">
        AXISCORE focuses on cybersecurity, cloud solutions,
        IT infrastructure, network engineering and digital
        technology services designed to support modern
        business environments.
      </div>
    </details>

    <details className="services-cta__faq-item">
      <summary>
        <span className="services-cta__faq-number">02</span>
        <span className="services-cta__faq-question">
          How can cybersecurity solutions protect my business?
        </span>
        <span className="services-cta__faq-toggle" />
      </summary>

      <div className="services-cta__faq-answer">
        Cybersecurity solutions help identify vulnerabilities,
        reduce security risks and protect business systems,
        networks and sensitive information against digital
        threats.
      </div>
    </details>

    <details className="services-cta__faq-item">
      <summary>
        <span className="services-cta__faq-number">03</span>
        <span className="services-cta__faq-question">
          Does AXISCORE provide cloud infrastructure solutions?
        </span>
        <span className="services-cta__faq-toggle" />
      </summary>

      <div className="services-cta__faq-answer">
        Cloud infrastructure can help businesses improve
        scalability, flexibility and operational efficiency.
        Contact our team to discuss cloud requirements and
        suitable solutions for your environment.
      </div>
    </details>

    <details className="services-cta__faq-item">
      <summary>
        <span className="services-cta__faq-number">04</span>
        <span className="services-cta__faq-question">
          Can AXISCORE help with digital transformation?
        </span>
        <span className="services-cta__faq-toggle" />
      </summary>

      <div className="services-cta__faq-answer">
        Yes. Digital transformation initiatives can include
        modernizing infrastructure, integrating business
        systems, improving workflows and adopting modern
        technologies based on business requirements.
      </div>
    </details>

    <details className="services-cta__faq-item">
      <summary>
        <span className="services-cta__faq-number">05</span>
        <span className="services-cta__faq-question">
          How do I get started with AXISCORE?
        </span>
        <span className="services-cta__faq-toggle" />
      </summary>

      <div className="services-cta__faq-answer">
        Start by contacting our team through the contact page.
        Share your business requirements, technology challenges
        or project objectives so we can understand your needs.
      </div>
    </details>

    <details className="services-cta__faq-item">
      <summary>
        <span className="services-cta__faq-number">06</span>
        <span className="services-cta__faq-question">
          Can solutions be tailored to specific business needs?
        </span>
        <span className="services-cta__faq-toggle" />
      </summary>

      <div className="services-cta__faq-answer">
        Technology requirements differ between organizations.
        Solutions can be evaluated around your existing systems,
        operational requirements, security priorities and
        long-term business objectives.
      </div>
    </details>

  </div>

  <div className="services-cta__faq-bottom">
    <span>STILL HAVE QUESTIONS?</span>

    <Link href="/contact">
      Let's talk about your project
      <ArrowUpRight size={18} />
    </Link>
  </div>

</section>


      </div>
    </section>
  );
}
