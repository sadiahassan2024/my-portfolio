import React, { useState } from 'react';
import './MyContact.css';

const MyContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHuman, setIsHuman] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) { setError('Please fill out the name field.'); return; }
    if (!formData.email.trim()) { setError('Please fill out the email field.'); return; }
    if (!formData.message.trim()) { setError('Please fill out the message field.'); return; }
    if (!isHuman) { setError('Please confirm that you are human.'); return; }
    setSubmitted(true);
  };

  return (
    <section className="contact-section">

      {/* Header */}
      <div className="contact-header">
        <p className="contact-subtitle">Connect with me</p>
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-description">
          I'd love to hear from you! If you have any questions, comments or feedback,
          please use the form below.
        </p>
      </div>

      {/* Success message - form stays visible */}
      {submitted && (
        <div className="contact-success">
          <span>✅</span>
          <p>Thank you! Your message has been sent.</p>
        </div>
      )}

      {/* Form - always visible */}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-row">
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          rows={8}
        />

        {error && <p className="contact-error">⚠️ {error}</p>}

        <div className="contact-captcha">
          <label className="captcha-label">
            <input
              type="checkbox"
              checked={isHuman}
              onChange={() => setIsHuman(!isHuman)}
              className="captcha-checkbox"
            />
            <span>I am human</span>
          </label>
          <div className="captcha-badge">
            <div className="captcha-icon">🛡️</div>
            <div className="captcha-text">
              <span>hCaptcha</span>
              <small>Privacy · Terms</small>
            </div>
          </div>
        </div>

        <button type="submit" className="contact-btn">
          Submit now &nbsp;→
        </button>
      </form>

      {/* Sadia branding - neeche */}
      <div className="contact-brand">
        <h3 className="contact-brand-name">
          Sadia<span className="contact-brand-dot">.</span>
        </h3>
        <a href="mailto:sadia2023hassan@gmail.com" className="contact-brand-email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="contact-brand-icon">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <polyline points="2,4 12,13 22,4"/>
          </svg>
          sadia2023hassan@gmail.com
        </a>
      </div>

    </section>
  );
};

export default MyContact;