
"use client";

import { useEffect } from "react";

export default function AboutUsAnimations() {
  useEffect(() => {
    const page = document.querySelector(".axis-about-premium");

    if (!page) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const groups = [
      [".ap-hero-content", "ap-reveal-up"],
      [".ap-hero-art", "ap-reveal-scale"],
      [".ap-intro-grid > div:first-child", "ap-reveal-left"],
      [".ap-intro-grid > div:last-child", "ap-reveal-right"],
      [".ap-statement-content", "ap-reveal-up"],
      [".ap-identity-visual", "ap-reveal-left"],
      [".ap-identity-copy", "ap-reveal-right"],
      [".ap-purpose-card", "ap-reveal-up", true],
      [".ap-values-heading", "ap-reveal-up"],
      [".ap-value-card", "ap-reveal-up", true],
      [".ap-commitment-content", "ap-reveal-left"],
      [".ap-commitment-visual", "ap-reveal-scale"],
      [".ap-commitment-list", "ap-reveal-right"],
      [".ap-commitment-item", "ap-reveal-up", true],
    ];

    const elements = [];

    groups.forEach(([selector, animation, stagger]) => {
      page.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("ap-reveal", animation);

        if (stagger) {
          element.style.setProperty(
            "--ap-reveal-delay",
            `${Math.min(index * 110, 440)}ms`
          );
        }

        elements.push(element);
      });
    });

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add("ap-is-visible");
      });

      return;
    }

    page.classList.add("ap-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ap-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -55px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      page.classList.remove("ap-reveal-ready");
    };
  }, []);

  return null;
}
