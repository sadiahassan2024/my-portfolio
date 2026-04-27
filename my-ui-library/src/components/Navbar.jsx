import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home",       to: "/",          icon: "fas fa-home" },
    { label: "About me",   to: "/about",      icon: "fas fa-user" },
    { label: "Services",   to: "/services",   icon: "fas fa-briefcase" },
    { label: "My Work",    to: "/mywork",     icon: "fas fa-laptop-code" },
    { label: "Contact me", to: "/contact",    icon: "fas fa-envelope" },
  ];

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">

        {/* ── Brand ── */}
        <NavLink to="/" className="navbar-brand">
          Sadia<span className="dot">.</span>
        </NavLink>

        {/* ── Center Nav Links ── */}
        <div className={`nav-links-wrapper ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <i className={link.icon}></i> {link.label}
            </NavLink>
          ))}
        </div>

        {/* ── Right Side ── */}
        <div className="navbar-right">

          {/* Dark mode toggle */}
          <button className="theme-toggle" aria-label="Toggle theme">
            ☾
          </button>

          {/* Contact Button */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `contact-btn ${isActive ? "contact-btn-active" : ""}`
            }
          >
            Contact <span className="arrow">↗</span>
          </NavLink>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;