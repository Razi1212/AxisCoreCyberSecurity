
import Link from "next/link";
import "./Aboutcta.css";

import {
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Innovation",
    description: "Technology designed to move businesses forward.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Technology",
    description: "Modern solutions built around real business needs.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Digital Growth",
    description: "Creating experiences that deliver lasting value.",
    icon: Globe,
  },
];

export default function AboutCTA() {
  return (
    <section className="aboutCTA">
      <div className="aboutCTA__ambient" aria-hidden="true" />
      <div className="aboutCTA__grid" aria-hidden="true" />

      <div className="aboutCTA__container">
        <div className="aboutCTA__top">
          <div className="aboutCTA__eyebrow">
            <span className="aboutCTA__eyebrowDot" />
            ABOUT AXISCORE
          </div>

          <span className="aboutCTA__reference">
            TECHNOLOGY <span>/</span> INNOVATION <span>/</span> TRUST
          </span>
        </div>

        <div className="aboutCTA__main">
          <div className="aboutCTA__content">
            <span className="aboutCTA__overline">
              ENGINEERING WHAT COMES NEXT
            </span>

            <h2>
              Technology That
              <br />
              Moves Business
              <br />
              <span>Forward.</span>
            </h2>

            <p className="aboutCTA__description">
              At AXISCORE, we combine website development,
              application development and cybersecurity to create
              digital experiences that help businesses evolve.
              We turn ambitious ideas into practical, reliable
              and future-ready solutions.
            </p>

            <div className="aboutCTA__actions">
              <Link href="/aboutus" className="aboutCTA__button">
                Discover AXISCORE
                <ArrowUpRight size={18} />
              </Link>

              <span className="aboutCTA__actionNote">
                Built for a changing digital world.
              </span>
            </div>

            <div className="aboutCTA__trust">
              <span className="aboutCTA__trustLine" />
              <span>
                Thoughtful engineering. Meaningful innovation.
              </span>
            </div>
          </div>

          <div className="aboutCTA__visual">
            <div className="aboutCTA__visualHeader">
              <span>AX / DIGITAL ARCHITECTURE</span>
              <span className="aboutCTA__visualStatus">
                <i />
                SYSTEMS CONNECTED
              </span>
            </div>

            <div className="aboutCTA__stage">
              <div className="aboutCTA__stageGlow" />

              <div className="aboutCTA__architecture">
                <div className="aboutCTA__platform aboutCTA__platform--back" />
                <div className="aboutCTA__platform aboutCTA__platform--middle" />
                <div className="aboutCTA__platform aboutCTA__platform--front" />

                <div className="aboutCTA__pillar aboutCTA__pillar--one" />
                <div className="aboutCTA__pillar aboutCTA__pillar--two" />
                <div className="aboutCTA__pillar aboutCTA__pillar--three" />

                <div className="aboutCTA__glassPanel aboutCTA__glassPanel--one" />
                <div className="aboutCTA__glassPanel aboutCTA__glassPanel--two" />

                <div className="aboutCTA__lightBeam" />

                <div className="aboutCTA__structureLine aboutCTA__structureLine--one" />
                <div className="aboutCTA__structureLine aboutCTA__structureLine--two" />

                <div className="aboutCTA__structureCore">
                  <span>A</span>
                </div>
              </div>

              <div className="aboutCTA__visualLabel aboutCTA__visualLabel--left">
                <span>01</span>
                DIGITAL ENGINEERING
              </div>

              <div className="aboutCTA__visualLabel aboutCTA__visualLabel--right">
                <span>02</span>
                FUTURE READY
              </div>

              <span className="aboutCTA__stageDot aboutCTA__stageDot--one" />
              <span className="aboutCTA__stageDot aboutCTA__stageDot--two" />
              <span className="aboutCTA__stageDot aboutCTA__stageDot--three" />
            </div>

            <div className="aboutCTA__visualFooter">
              <span>DESIGN WITH PURPOSE</span>
              <span className="aboutCTA__footerDivider" />
              <span>BUILT TO PERFORM</span>
            </div>
          </div>
        </div>

        <div className="aboutCTA__divider" />

        <div className="aboutCTA__highlights">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="aboutCTA__highlight" key={item.number}>
                <span className="aboutCTA__number">
                  {item.number}
                </span>

                <div className="aboutCTA__highlightIcon">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                <div className="aboutCTA__highlightContent">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight
                  className="aboutCTA__highlightArrow"
                  size={17}
                />
              </div>
            );
          })}
        </div>

        <div className="aboutCTA__bottom">
          <span>AXISCORE / DIGITAL SOLUTIONS</span>
          <span>ENGINEERED FOR WHAT'S NEXT.</span>
        </div>
      </div>
    </section>
  );
}
