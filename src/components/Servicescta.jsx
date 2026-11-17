
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./Servicescta.css";

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta__texture" aria-hidden="true" />

      <div className="services-cta__container">

        <div className="services-cta__top">
          <div className="services-cta__eyebrow">
            <span className="services-cta__eyebrow-line" />
            THE AXISCORE ADVANTAGE
          </div>

          <span className="services-cta__number">
            01 <span>/</span> 10
          </span>
        </div>

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
              Explore how cybersecurity, cloud, infrastructure and digital
              engineering come together to move your business forward.
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

          <div className="services-cta__visual" aria-hidden="true">
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

        <div className="services-cta__footer">
          <span>CYBERSECURITY</span>
          <span className="services-cta__separator" />
          <span>CLOUD</span>
          <span className="services-cta__separator" />
          <span>INFRASTRUCTURE</span>
          <span className="services-cta__separator" />
          <span>DIGITAL TRANSFORMATION</span>
        </div>

      </div>
    </section>
  );
}
