"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    closeMenu();
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* BRAND */}
        <Link href="/" className="navbar-brand" onClick={closeMenu}>
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
              scroll={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="navbar-cta"
          scroll={false}
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            scroll={false}
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mobile-nav-cta"
          scroll={false}
          onClick={closeMenu}
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
