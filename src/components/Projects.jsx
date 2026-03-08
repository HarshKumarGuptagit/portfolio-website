import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const GITHUB_JSON_URL = 'https://raw.githubusercontent.com/YourUsername/portfolio-data/main/projects.json';

const fallbackProjects = [
  {
    "id": "1",
    "title": "EdTech Revenue & Funnel Dashboard",
    "description": "End-to-end Looker Studio dashboard tracking revenue KPIs, enrollment funnel conversion rates, and cohort retention across multiple products. Enabled leadership to identify drop-off points and optimize campaign spend.",
    "category": "Dashboard",
    "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com/HarshKumarGuptagit"
  },
  {
    "id": "2",
    "title": "Multi-Channel Lead Attribution Pipeline",
    "description": "ETL pipeline consolidating lead data from Google Ads, Meta Ads, and CRM into BigQuery. Calculates unified CPL, CTR, and ROAS metrics across channels, enabling the marketing team to make data-backed budget decisions.",
    "category": "Data Pipeline",
    "image_url": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com/HarshKumarGuptagit"
  },
  {
    "id": "3",
    "title": "dbt Data Warehouse Modeling (BigQuery)",
    "description": "Production-grade dbt project on BigQuery implementing a star-schema dimensional model for CRM and product data. Includes automated data quality tests, incremental models, and auto-generated documentation.",
    "category": "Data Pipeline",
    "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com/HarshKumarGuptagit"
  },
  {
    "id": "4",
    "title": "Webinar Engagement Analytics",
    "description": "Looker Studio reporting layer tracking user webinar attendance, drop-off rates, and re-engagement signals. Used by the Pre-Sales team to prioritize outreach on high-intent leads.",
    "category": "Dashboard",
    "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com/HarshKumarGuptagit"
  },
  {
    "id": "5",
    "title": "Automated Data Quality Monitor",
    "description": "BigQuery stored procedures + Cloud Scheduler automating daily data freshness checks, null/duplicate detection, and row-count anomaly alerts via email. Reduced silent data failures by catching issues before dashboards were affected.",
    "category": "Data Pipeline",
    "image_url": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com/HarshKumarGuptagit"
  },
  {
    "id": "6",
    "title": "Referral Portal Analytics",
    "description": "Full analytics ownership of a referral program: modeled referrer engagement metrics, built a Looker Studio dashboard segmenting high-value vs. churned referrers, and surfaced actionable leads for the sales team.",
    "category": "Dashboard",
    "image_url": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com/HarshKumarGuptagit"
  }
];


// Category colour palette
const CATEGORY_COLORS = {
  'Dashboard':     { bg: 'rgba(6, 182, 212, 0.12)', text: '#06b6d4', border: 'rgba(6, 182, 212, 0.3)' },  // teal
  'Data Pipeline': { bg: 'rgba(139, 92, 246, 0.12)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.3)' }, // violet
};
const defaultColor = { bg: 'var(--accent-half)', text: 'var(--accent-color)', border: 'var(--accent-half)' };

const getCategoryColor = (cat) => CATEGORY_COLORS[cat] || defaultColor;

/* ─── Mobile Card Deck ───────────────────────────────────── */
const MobileCardDeck = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [throwDir, setThrowDir]         = useState(null); // 'left' | 'right'
  const [isAnimating, setIsAnimating]   = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const total = projects.length;

  const navigate = (dir) => {
    if (isAnimating) return;
    setThrowDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev =>
        dir === 'left'
          ? (prev + 1) % total          // forward, wraps to 0 after last
          : (prev - 1 + total) % total  // backward, wraps to last after first
      );
      setThrowDir(null);
      setIsAnimating(false);
    }, 380);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
      navigate(dx > 0 ? 'right' : 'left'); // swipe right = back, swipe left = forward
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Show up to 3 cards stacked (rendered bottom→top so top card is highest in DOM)
  const visibleCards = [];
  for (let offset = Math.min(2, total - 1); offset >= 0; offset--) {
    const idx = (currentIndex + offset) % total;
    visibleCards.push({ project: projects[idx], stackIndex: offset });
  }

  const isFirst = false; // looping — always enabled
  const isLast  = false;

  return (
    <div className="projects-mobile-deck">
      <div
        className="deck-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleCards.map(({ project, stackIndex }) => {
          const isTop      = stackIndex === 0;
          const stackClass = isTop ? 'top-card' : `stack-${stackIndex}`;
          const throwClass = isTop && throwDir ? `throw-${throwDir}` : '';
          const col        = getCategoryColor(project.category);

          return (
            <div
              key={project.id || project.title}
              className={`deck-card ${stackClass} ${throwClass}`}
            >
              <img
                className="deck-card-image"
                src={project.image_url}
                alt={project.title}
                draggable={false}
              />
              <div className="deck-card-body">
                <span
                  className="deck-card-category"
                  style={{ color: col.text, background: col.bg, border: `1px solid ${col.border}`, borderRadius: '20px', padding: '0.2rem 0.65rem', display: 'inline-block' }}
                >
                  {project.category}
                </span>
                <h3 className="deck-card-title">{project.title}</h3>
                <p className="deck-card-desc">{project.description}</p>
                <div className="deck-card-links">
                  {project.repo_url && (
                    <a href={project.repo_url} target="_blank" rel="noopener noreferrer"
                      className="deck-card-link">
                      GitHub
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                      className="deck-card-link primary">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="deck-controls">
        <button
          className="deck-arrow-btn"
          onClick={() => navigate('right')}
          disabled={isAnimating || isFirst}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="deck-counter">
          {currentIndex + 1} <span style={{ opacity: 0.5 }}>/ {total}</span>
        </div>
        <button
          className="deck-arrow-btn"
          onClick={() => navigate('left')}
          disabled={isAnimating || isLast}
          aria-label="Next"
        >
          →
        </button>
      </div>
      <p className="deck-hint">← Swipe or tap arrows to browse →</p>
    </div>
  );
};

/* ─── Main Projects Component ────────────────────────────── */
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter]     = useState('All');
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_JSON_URL);
        if (!response.ok) throw new Error('Network response not ok');
        const data = await response.json();
        setProjects(Array.isArray(data) ? data : fallbackProjects);
      } catch {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section className="section-margin" style={{ paddingTop: '2rem' }}>
      <h2 className="title" style={{ color: 'var(--text-primary)' }}>Portfolio Projects</h2>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {['All', 'Dashboard', 'Data Pipeline'].map((category) => {
          const col     = getCategoryColor(category);
          const isActive = filter === category;
          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                background:   isActive ? (col.text || 'var(--accent-color)') : 'var(--bg-secondary)',
                color:        isActive ? '#fff' : (category === 'All' ? 'var(--text-primary)' : col.text),
                borderColor:  isActive ? (col.text || 'var(--accent-color)') : (category === 'All' ? 'var(--border-color)' : col.border),
                fontWeight:   600,
                border:       '1px solid',
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          Loading projects...
        </div>
      ) : (
        <>
          {/* ── Desktop grid ── */}
          <div className="projects-grid-wrapper reveal-stagger">
            {filteredProjects.map((project, index) => (
              <div key={project.id || project.title} className={`stagger-${(index % 12) + 1}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  imageUrl={project.image_url}
                  repoUrl={project.repo_url}
                  liveUrl={project.live_url}
                />
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <p style={{ color: 'var(--text-secondary)', gridColumn: '1 / -1' }}>
                No projects found for this category.
              </p>
            )}
          </div>

          {/* ── Mobile card deck ── */}
          {filteredProjects.length > 0 ? (
            <MobileCardDeck key={filter} projects={filteredProjects} />
          ) : (
            <div className="projects-mobile-deck">
              <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem 0' }}>
                No projects in this category.
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Projects;
