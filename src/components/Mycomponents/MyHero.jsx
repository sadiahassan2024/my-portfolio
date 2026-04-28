import React from "react";
import "./MyHero.css";

// ── Your actual profile image ──
import profileImg from  "../../assets/WhatsApp Image 2026-02-22 at 11.15.19 PM.jpeg";

/* ── Icon: Arrow Right ── */
const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Icon: Download ── */
const Download = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

/* ════════════════════════════════════════
   MyHero Component
   Props (all optional – defaults shown):
     name        – "Eliana Jade"
     tagline     – "frontend web developer based in London."
     description – the sub-paragraph text
     resumeUrl   – href for the resume button
     onContact   – click handler for contact button
   ════════════════════════════════════════ */
const MyHero = ({
  name = "Sadia Hassan",
  tagline = "frontend web developer\nbased in pakistan.",
  description = "Frontend Web Developer & WordPress Designer.",
  resumeUrl = "#",
  onContact = () => alert("Contact clicked!"),
}) => {
  return (
    <section className="hero-section" aria-label="Hero section">
      <div className="hero-inner">

        {/* ── Avatar ── */}
        <div className="hero-avatar-wrapper">
          <img
            src={profileImg}
            alt={`Portrait of ${name}`}
            className="hero-avatar"
            loading="eager"
          />
        </div>

        {/* ── Greeting ── */}
        <p className="hero-greeting">
          Hi! I'm {name} 👋
        </p>

        {/* ── Headline ── */}
        <h1 className="hero-headline">
          {tagline.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < tagline.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* ── Sub-text ── */}
        <p className="hero-subtext">{description}</p>

        {/* ── CTA Buttons ── */}
        <div className="hero-btn-group">
          <button
            className="btn-contact"
            onClick={onContact}
            aria-label="Contact me"
          >
            contact me <ArrowRight />
          </button>

          <a
            href={resumeUrl}
            className="btn-resume"
            download
            aria-label="Download my resume"
          >
            my resume <Download />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MyHero;