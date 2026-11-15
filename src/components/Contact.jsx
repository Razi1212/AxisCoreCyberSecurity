"use client";

import { useState } from "react";
import "./Contactus.css";

import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  LockKeyhole,
  Send,
  Building2,
  CheckCircle2,
  Globe,
  Radar,
  Network,
  Activity,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `AXISCORE Inquiry - ${formData.service || "General Inquiry"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service: ${formData.service}

Project Details:
${formData.message}`
    );

    window.location.href =
      `mailto:hello@axiscore.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">

        <div className="contact-page-grid"></div>
        <div className="contact-page-glow"></div>

        <div className="contact-hero-content">

          <div className="contact-eyebrow">
            <span className="eyebrow-line"></span>
            <span>CONNECT WITH AXISCORE</span>
          </div>

          <h1>
            Your Security.
            <br />
            <span>Our Priority.</span>
          </h1>

          <p className="contact-hero-description">
            Stronger security starts with the right conversation.
            Connect with our team to explore intelligent cybersecurity
            solutions designed to protect your business.
          </p>

          <div className="contact-hero-buttons">
            <a href="#inquiry" className="contact-primary-btn">
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact-details" className="contact-secondary-btn">
              Contact Information
            </a>
          </div>

          <div className="contact-trust-stats">

            <div>
              <ShieldCheck size={21} />
              <span>Security First</span>
            </div>

            <div>
              <LockKeyhole size={21} />
              <span>Confidential Approach</span>
            </div>

            <div>
              <Activity size={21} />
              <span>Intelligent Protection</span>
            </div>

          </div>

        </div>

        {/* CYBERSECURITY VISUAL */}
        <div className="contact-hero-visual">

          <div className="cyber-orbit orbit-one"></div>
          <div className="cyber-orbit orbit-two"></div>
          <div className="cyber-orbit orbit-three"></div>

          <div className="cyber-core">
            <div className="cyber-core-inner">
              <ShieldCheck size={76} strokeWidth={1.2} />
            </div>
          </div>

          <div className="cyber-node node-one">
            <Radar size={19} />
          </div>

          <div className="cyber-node node-two">
            <Network size={19} />
          </div>

          <div className="cyber-node node-three">
            <LockKeyhole size={19} />
          </div>

          <div className="cyber-floating-label label-one">
            <span className="status-dot"></span>
            Secure Infrastructure
          </div>

          <div className="cyber-floating-label label-two">
            <Activity size={15} />
            Intelligent Defense
          </div>

        </div>

      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-main" id="inquiry">

        <div className="contact-section-heading">

          <div className="contact-eyebrow dark-eyebrow">
            <span className="eyebrow-line"></span>
            <span>LET'S WORK TOGETHER</span>
          </div>

          <h2>
            Let's secure what
            <span> matters to you.</span>
          </h2>

          <p>
            Tell us about your security goals. Our team is ready
            to help you move forward with confidence.
          </p>

        </div>


        <div className="contact-content-grid">

          {/* LEFT CONTACT INFORMATION */}
          <div className="contact-info" id="contact-details">

            <div className="contact-info-heading">
              <span className="contact-info-label">GET IN TOUCH</span>
              <h3>Let's start a conversation.</h3>
              <p>
                Have a question or need a cybersecurity solution?
                Reach out to our team.
              </p>
            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>Email Us</span>
                <a href="mailto:hello@axiscore.com">
                  hello@axiscore.com
                </a>
              </div>

              <ArrowUpRight size={18} className="info-arrow" />

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>Call Us</span>
                <p>Contact number coming soon</p>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>Our Location</span>
                <p>Connect with AXISCORE online</p>
              </div>

            </div>


            {/* SECURITY PANEL */}
            <div className="contact-security-panel">

              <div className="security-panel-icon">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h4>Your security comes first.</h4>
                <p>
                  We approach every conversation with
                  confidentiality and a security-first mindset.
                </p>
              </div>

              <div className="security-panel-glow"></div>

            </div>

          </div>


          {/* PREMIUM INQUIRY FORM */}
          <div className="contact-form-card">

            <div className="form-top-line"></div>

            <div className="contact-form-header">

              <div>
                <span className="form-label">SECURE INQUIRY</span>
                <h3>Tell us about your project.</h3>
                <p>
                  Complete the details below and let's explore
                  how we can help.
                </p>
              </div>

              <div className="form-send-icon">
                <ShieldCheck size={27} />
              </div>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="contact-field">
                  <label htmlFor="name">FULL NAME *</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="contact-field">
                  <label htmlFor="email">BUSINESS EMAIL *</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              <div className="contact-field">
                <label htmlFor="company">ORGANIZATION</label>

                <div className="input-with-icon">
                  <Building2 size={17} />

                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>


              <div className="contact-field">
                <label htmlFor="service">WHAT DO YOU NEED? *</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
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
                  rows="5"
                  placeholder="Tell us about your project, security requirements or challenges..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>


              <button type="submit" className="contact-submit">

                <span>Submit Secure Inquiry</span>
                <Send size={18} />

              </button>


              {submitted && (
                <p className="form-success">
                  <CheckCircle2 size={17} />
                  Your email application should open with your inquiry.
                </p>
              )}


              <div className="contact-form-note">
                <LockKeyhole size={15} />
                Your information is handled with care.
              </div>

            </form>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="contact-bottom">

        <div className="bottom-glow"></div>

        <div className="bottom-content">

          <span>READY TO STRENGTHEN YOUR SECURITY?</span>

          <h2>
            Let's build a more
            <br />
            <span>secure future.</span>
          </h2>

          <p>
            Take the next step toward smarter, stronger cybersecurity.
          </p>

          <a href="#inquiry" className="contact-primary-btn">
            Talk to Our Team
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="contact-footer">

        <div className="footer-brand">
          <div className="footer-logo">
            <ShieldCheck size={25} />
            <span>AXIS<span>CORE</span></span>
          </div>

          <p>
            Intelligent security. Stronger protection.
            A safer digital future.
          </p>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} AXISCORE. All rights reserved.
        </div>

      </footer>

    </main>
  );
}