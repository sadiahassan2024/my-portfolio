import React from 'react';
import './Cards.css';

const servicesData = [
  {
    id: 1,
    icon: '🌐',
    title: 'Web Development',
    description:
      'Responsive and modern websites built with HTML, CSS and JavaScript — clean code, fast loading and mobile friendly...',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'CSS & Styling',
    description:
      'Pixel-perfect styling using pure CSS, animations, Flexbox, Grid and beautiful UI designs without any framework...',
  },
  {
    id: 3,
    icon: '⚛',
    title: 'React Development',
    description:
      'Dynamic and interactive web apps built with React.js — reusable components, hooks and smooth user experience...',
  },
  {
    id: 4,
    icon: 'WP',
    title: 'WordPress Sites',
    description:
      'Custom WordPress websites with theme customization, plugin setup and fully responsive design for all devices...',
    isText: true,
  },
];

const Cards = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="services-subtitle">What i offer</p>
        <h2 className="services-title">My services</h2>
        <p className="services-description">
          I am a Frontend Developer specializing in HTML, CSS, JavaScript, React and WordPress —
          building clean, responsive and user-friendly websites.
        </p>
      </div>

      <div className="cards-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="card-icon-wrapper">
              <span className={`card-icon ${service.isText ? 'card-icon--text' : ''}`}>
                {service.icon}
              </span>
            </div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <a href="#" className="card-link">
              Read more <span className="card-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;