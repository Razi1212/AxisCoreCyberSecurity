
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your inquiry."
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err.message || "Something went wrong. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
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
                 axiscore546@gmail.com
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
                    maxLength={100}
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
                    maxLength={254}
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
                    maxLength={150}
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
                  maxLength={5000}
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >

                <span>
                  {isSubmitting
                    ? "Sending..."
                    : "Submit Secure Inquiry"}
                </span>

                {isSubmitting ? (
                  <Activity size={18} />
                ) : (
                  <Send size={18} />
                )}

              </button>


              {/* SUCCESS MESSAGE */}
              {submitted && (
                <p className="form-success" role="status">
                  <CheckCircle2 size={17} />
                  Your inquiry has been sent successfully!
                </p>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <p className="form-error" role="alert">
                  {error}
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

    </main>
  );
}
