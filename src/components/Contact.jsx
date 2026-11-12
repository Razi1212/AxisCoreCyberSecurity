
"use client";

import "./Contactus.css";

import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  LockKeyhole,
  Send,
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `New Contact Request - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:hello@axiscore.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">

      {/* BACKGROUND */}
      <div className="contact-page-grid" />
      <div className="contact-page-glow" />

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-eyebrow">
          <span className="contact-eyebrow-dot" />
          CONTACT AXISCORE
        </div>

        <h1>
          Let's build a <br />
          <span>safer digital future.</span>
        </h1>

        <p>
          Have a security challenge or a project in mind?
          Let's discuss how AXISCORE can help protect
          your digital infrastructure.
        </p>

        <div className="contact-hero-bottom">
          <div className="contact-trust">
            <ShieldCheck size={17} />
            Your security starts with a conversation.
          </div>

          <span className="contact-page-index">
            CONTACT / 001
          </span>
        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="contact-main">

        {/* LEFT INFORMATION */}
        <div className="contact-information">

          <div className="contact-section-label">
            <span />
            LET'S CONNECT
          </div>

          <h2>
            Have a project?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p className="contact-information-text">
            Whether you need advanced threat detection,
            network protection, or data security,
            our team is ready to help you move forward
            with confidence.
          </p>

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <a
              href="mailto:hello@axiscore.com"
              className="contact-detail-card"
            >
              <div className="contact-detail-icon">
                <Mail size={20} />
              </div>

              <div>
                <span className="contact-detail-label">
                  EMAIL US
                </span>
                <strong>hello@axiscore.com</strong>
              </div>

              <ArrowUpRight
                size={17}
                className="contact-detail-arrow"
              />
            </a>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <MessageCircle size={20} />
              </div>

              <div>
                <span className="contact-detail-label">
                  SUPPORT
                </span>
                <strong>Let's discuss your requirements</strong>
              </div>

              <ArrowUpRight
                size={17}
                className="contact-detail-arrow"
              />
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <span className="contact-detail-label">
                  OUR APPROACH
                </span>
                <strong>Security-first solutions</strong>
              </div>

              <ArrowUpRight
                size={17}
                className="contact-detail-arrow"
              />
            </div>

          </div>

          {/* SECURITY NOTE */}
          <div className="contact-note">
            <div className="contact-note-icon">
              <LockKeyhole size={21} />
            </div>

            <div>
              <strong>Your information matters.</strong>
              <p>
                Every inquiry is treated with care.
                Your information is handled responsibly
                and kept private.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="contact-form-card">

          <div className="contact-form-heading">

            <div>
              <span className="contact-form-label">
                GET IN TOUCH
              </span>

              <h3>
                Tell us about your project<span>.</span>
              </h3>

              <p>
                Share your requirements and our team
                will get back to you.
              </p>
            </div>

            <div className="contact-form-icon">
              <Send size={22} />
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="service">
                  Service Interested In
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Threat Detection">
                    Threat Detection
                  </option>
                  <option value="Network Security">
                    Network Security
                  </option>
                  <option value="Data Protection">
                    Data Protection
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            <div className="contact-field">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your security requirements..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <ArrowUpRight size={18} />
            </button>

            <div className="contact-form-privacy">
              <LockKeyhole size={14} />
              <span>
                Your information is kept private and secure.
              </span>
            </div>

          </form>

        </div>

      </section>

      {/* BOTTOM */}
      <div className="contact-bottom">

        <div>
          <span className="contact-bottom-line" />
          <span>AXISCORE SECURITY</span>
        </div>

        <a href="/#home">
          <ArrowUpRight size={15} />
          BACK TO HOME
        </a>

      </div>

    </main>
  );
}
