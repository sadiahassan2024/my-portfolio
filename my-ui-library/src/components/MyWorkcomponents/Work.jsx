import React from 'react';
import './Work.css';
 
const worksData = [
  
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    title: 'Frontend Project',
    category: 'Web Design',
    link: null,
    url: null,
    isLive: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    title: 'Responsive Website',
    category: 'HTML & CSS',
    link: null,
    url: null,
    isLive: false,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    title: 'Speed-test.pk',
    category: 'React.js · Frontend',
    link: 'https://speed-test.pk',
    url: 'speed-test.pk',
    isLive: true,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80',
    title: 'swisschems.pk',
    category: 'WordPress · E-commerce',
    link: 'https://swisschems.pk',
    url: 'swisschems.pk',
    isLive: true,
  },
];
 
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="work-card-icon"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
 
const Work = () => {
  return (
    <section className="work-section">
      <div className="work-header">
        <p className="work-subtitle">My portfolio</p>
        <h2 className="work-title">My latest work</h2>
        <p className="work-description">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my
          expertise in front-end development.
        </p>
      </div>
 
      <div className="work-grid">
        {worksData.map((work) => (
          <a
            className={`work-card ${work.isLive ? 'work-card--live' : ''}`}
            key={work.id}
            href={work.link || '#'}
            target={work.link ? '_blank' : '_self'}
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${work.image})` }}
            aria-label={`View ${work.title}`}
          >
            {work.isLive && (
              <div className="live-badge">
                <span className="live-dot"></span>
                LIVE
              </div>
            )}
 
            <div className="work-card-info">
              <div className="work-card-text">
                <h3 className="work-card-title">{work.title}</h3>
                <p className="work-card-category">{work.category}</p>
                {work.url && <p className="work-card-url">{work.url} ↗</p>}
              </div>
              <button className="work-card-btn" aria-label={`Open ${work.title}`}>
                <ArrowIcon />
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
 
export default Work;