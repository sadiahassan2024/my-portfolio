import React from "react";
import profileImg from "../../assets/WhatsApp Image 2026-02-22 at 11.15.19 PM.jpeg";
import "./MyAbout.css";

/* ── Info Cards data ── */
const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Languages",
    detail: "HTML, CSS, JavaScript\nReact JS",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4" />
        <rect x="2" y="10" width="20" height="12" rx="2" />
        <path d="M12 10v12" />
      </svg>
    ),
    title: "Education",
    detail: "Computer System\nEngineering",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Projects",
    detail: "Landing pages, practice\nwebsites in React JS\n& FYP project",
  },
];

/* ── Tools data ── */
const tools = [
  {
    name: "VS Code",
    svg: (
      <svg viewBox="0 0 128 128" width="30" height="30">
        <path fill="#0065A9" d="M90.767 127.126a10.294 10.294 0 0 0 6.304-.138l25.249-12.211c2.785-1.349 4.68-4.158 4.68-7.38V20.603c0-3.22-1.895-6.03-4.68-7.38L97.071 1.012a10.294 10.294 0 0 0-11.988 2.34L36.902 51.225 15.32 35.372a6.863 6.863 0 0 0-8.772.465L1.946 40.31c-2.59 2.484-2.59 6.631 0 9.115L20.77 64 1.946 78.574c-2.59 2.484-2.59 6.631 0 9.115l4.602 4.473a6.863 6.863 0 0 0 8.772.465l21.582-15.853 48.181 47.872a10.294 10.294 0 0 0 5.684 2.48z"/>
        <path fill="#007ACC" d="M97.071 1.012 48.89 48.884l-34.3-25.263L90.767.988a10.294 10.294 0 0 1 6.304.024z"/>
        <path fill="#1F9CF0" d="M97.071 126.988 48.89 79.116l-34.3 25.263 76.177 22.633a10.294 10.294 0 0 0 6.304-.024z"/>
        <path fill="rgba(0,0,0,0.25)" d="M90.767 127.126a10.294 10.294 0 0 0 6.304-.138l25.249-12.211c2.785-1.349 4.68-4.158 4.68-7.38V20.603c0-3.22-1.895-6.03-4.68-7.38L97.071 1.012a10.294 10.294 0 0 0-11.988 2.34L36.902 51.225 15.32 35.372a6.863 6.863 0 0 0-8.772.465L1.946 40.31c-2.59 2.484-2.59 6.631 0 9.115L20.77 64 1.946 78.574c-2.59 2.484-2.59 6.631 0 9.115l4.602 4.473a6.863 6.863 0 0 0 8.772.465l21.582-15.853 48.181 47.872a10.294 10.294 0 0 0 5.684 2.48z" opacity=".25"/>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    svg: (
      <svg viewBox="0 0 128 128" width="30" height="30">
        <path fill="#7952b3" d="M0 14.1C0 6.3 6.3 0 14.1 0h99.8c7.8 0 14.1 6.3 14.1 14.1v99.8c0 7.8-6.3 14.1-14.1 14.1H14.1C6.3 128 0 121.7 0 113.9z"/>
        <path fill="#fff" d="M36.1 96.8V31.2h28.6c5.7 0 10.4.8 14.1 2.5a20 20 0 0 1 8.6 7.1 18.5 18.5 0 0 1 2.9 10.3c0 3.3-.8 6.3-2.5 9a17.7 17.7 0 0 1-7 6.2c4 1.1 7.1 3.1 9.3 5.9 2.3 2.9 3.4 6.3 3.4 10.3 0 3.2-.7 6.2-2.1 8.9a17.5 17.5 0 0 1-5.8 6.5 26 26 0 0 1-9 3.5 57 57 0 0 1-12 1.4zm14-38.2h12.7c3.5 0 6-.2 7.6-.7a9.4 9.4 0 0 0 4.6-2.8 7.4 7.4 0 0 0 1.6-4.9 8 8 0 0 0-1.5-4.9 7.7 7.7 0 0 0-4.3-2.8c-1.8-.5-5-.7-9.4-.7H50.1zm0 28h14.6c2.5 0 4.4-.1 5.5-.3 1.9-.4 3.5-1 4.7-1.8a9 9 0 0 0 2.9-3.2 9.7 9.7 0 0 0 1.1-4.7 9 9 0 0 0-1.8-5.6 9.3 9.3 0 0 0-5-3.2 31 31 0 0 0-8.1-.8H50.1z"/>
      </svg>
    ),
  },
 
   
   
  
  {
    name: "Github",
    svg: (
      <svg viewBox="0 0 128 128" width="30" height="30">
        <path fill="#F34F29" d="M124.742 58.378L69.625 3.264a10.687 10.687 0 0 0-15.117 0L42.12 15.648l15.192 15.192a12.693 12.693 0 0 1 16.083 16.148l14.646 14.646a12.7 12.7 0 1 1-7.61 7.16L66.523 54.886v33.77a12.72 12.72 0 1 1-10.44-.232V54.16a12.696 12.696 0 0 1-6.886-16.633L33.976 22.875 3.252 53.6a10.687 10.687 0 0 0 0 15.116l55.117 55.114a10.687 10.687 0 0 0 15.116 0l51.257-51.257a10.687 10.687 0 0 0 0-15.195z"/>
      </svg>
    ),
  },
];

const MyAbout = () => {
  return (
    <section className="about-section" id="about">
      {/* ── Section Header ── */}
      <div className="about-header">
        <span className="about-eyebrow">Introduction</span>
        <h2 className="about-title">About me</h2>
      </div>

      {/* ── Main Content ── */}
      <div className="about-body container-fluid px-0">
        <div className="row align-items-start g-0 justify-content-center">

          {/* ── Left: Image with rotating badge ── */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-5 mb-md-0">
            <div className="about-img-wrapper">
              <img
                src={profileImg}
                alt="Sadia Hassan — Frontend Developer"
                className="about-img"
              />
              {/* Rotating circular badge */}
              <div className="about-badge" aria-hidden="true">
                <svg viewBox="0 0 140 140" className="badge-ring">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    />
                  </defs>
                  <text fontSize="13.5" fill="#555" letterSpacing="2.5" fontFamily="DM Sans, sans-serif" fontWeight="600">
                    <textPath href="#circlePath">
                      FRONT-END WEB DEVELOPER ·
                    </textPath>
                  </text>
                </svg>
                <span className="badge-emoji">👩‍💻</span>
              </div>
            </div>
          </div>

          {/* ── Right: Text + Cards + Tools ── */}
          <div className="col-12 col-md-7 col-lg-6 about-right">

            {/* Bio */}
            <p className="about-bio">
             I am a Computer Systems Engineering student and Frontend Web Developer from Pakistan. 
             I have built multiple websites including landing pages, eCommerce stores, and a professional final year project. 
             I work with HTML, CSS, Bootstrap, React.js, and WordPress to create responsive and modern web designs.
             
            </p>

            {/* Info Cards */}
            <div className="about-cards">
              {cards.map((card, i) => (
                <div className="about-card" key={i}>
                  <div className="about-card-icon">{card.icon}</div>
                  <h4 className="about-card-title">{card.title}</h4>
                  <p className="about-card-detail">
                    {card.detail.split("\n").map((line, j) => (
                      <React.Fragment key={j}>
                        {line}
                        {j < card.detail.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="about-tools-section">
              <p className="about-tools-label">Tools I use</p>
              <div className="about-tools-list">
                {tools.map((tool, i) => (
                  <div className="about-tool-icon" key={i} title={tool.name}>
                    {tool.svg}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAbout;