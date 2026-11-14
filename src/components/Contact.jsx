
"use client";

import "./Contactus.css";

import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  LockKeyhole,
  Send,
  Fingerprint,
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
      `AXISCORE Inquiry - ${service}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}`
    );

    window.location.href =
      `mailto:hello@axiscore.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">

      {/* SCANNING BACKGROUND */}
      <div className="contact-data-layer">
        <div className="contact-data-scanner" />
      </div>

      {/* MAIN CONTENT */}
      <section className="contact-layout">

        {/* LEFT CONTENT */}
        <div className="contact-left">

          <div className="contact-brand">
            AXISCORE<span>.</span>
          </div>

          <div className="contact-eyebrow">
            <span className="contact-status-dot" />
            SECURE COMMUNICATION CHANNEL
          </div>

          <h1>
            Let's talk
            <span> security.</span>
          </h1>

          <p className="contact-description">
            Every strong security strategy starts with a conversation.
            Tell us about your challenges, and let's build something
            more secure together.
          </p>

          <div className="contact-divider" />

          <div className="contact-details">

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={19} />
              </div>

              <div>
                <span>EMAIL US</span>
                <a href="mailto:hello@axiscore.com">
                  hello@axiscore.com
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <ShieldCheck size={19} />
              </div>

              <div>
                <span>OUR APPROACH</span>
                <p>Security-first. Always.</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <LockKeyhole size={19} />
              </div>

              <div>
                <span>YOUR PRIVACY</span>
                <p>Your information stays protected.</p>
              </div>
            </div>

          </div>

          <div className="contact-left-footer">
            <Fingerprint size={18} />
            <span>YOUR SECURITY IS OUR PRIORITY</span>
          </div>

        </div>

        {/* HIGHLIGHTED CONTACT FORM */}
        <div className="contact-right">

          <div className="contact-form-top">

            <div className="contact-form-tag">
              <span className="contact-status-dot" />
              PROJECT INQUIRY
            </div>

            <span className="contact-form-index">
              AX / 001
            </span>

          </div>

          <div className="contact-form-heading">
            <h2>
              Start a conversation<span>.</span>
            </h2>

            <p>
              Tell us what you need. Our team will get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">FULL NAME *</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">WORK EMAIL *</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

            </div>

            <div className="contact-field">
              <label htmlFor="company">COMPANY</label>

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your organization"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="service">
                WHAT CAN WE HELP WITH? *
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

                <option value="Security Consulting">
                  Security Consulting
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">PROJECT DETAILS *</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your security requirements..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>Send Secure Inquiry</span>
              <Send size={17} />
            </button>

            <div className="privacy-note">
              <LockKeyhole size={13} />
              <span>
                Your information is handled with confidentiality.
              </span>
            </div>

          </form>

          <div className="contact-card-decoration">
            <span />
            <span />
            <span />
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="contact-bottom">

        <div className="contact-bottom-brand">
          AXISCORE SECURITY
        </div>

        <p>INTELLIGENCE THAT PROTECTS.</p>

        <a href="/">
          BACK TO HOME
          <ArrowUpRight size={15} />
        </a>

      </footer>

    </main>
  );
}
