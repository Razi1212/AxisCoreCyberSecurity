"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* BRAND */}
        <Link href="#home" className="navbar-brand">
          <span className="navbar-logo">A</span>
          <span className="navbar-brand-name">
            AXI<span>SCORE</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link href="#contact" className="navbar-cta">
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="#contact"
          className="mobile-nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
