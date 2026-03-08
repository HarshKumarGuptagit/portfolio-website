import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const GITHUB_JSON_URL = 'https://raw.githubusercontent.com/YourUsername/portfolio-data/main/projects.json';

const fallbackProjects = [
  {
    "id": "1",
    "title": "Sales Analytics Dashboard",
    "description": "Interactive Tableau dashboard for tracking global sales metrics across multiple regions. Features drill-down capabilities and forecasting models.",
    "category": "Dashboard",
    "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com",
    "live_url": "https://public.tableau.com"
  },
  {
    "id": "2",
    "title": "Automated ETL Pipeline",
    "description": "Robust data pipeline built with Python and Airflow. Automates the extraction from APIs, transforms data using Pandas, and loads it into a Snowflake warehouse hourly.",
    "category": "Data Pipeline",
    "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com"
  },
  {
    "id": "3",
    "title": "Customer Segmentation Model",
    "description": "K-Means clustering model implemented in Python to segment retail customers based on purchasing behavior. Containerized via Docker for easy deployment.",
    "category": "Data Pipeline",
    "image_url": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com"
  },
  {
    "id": "4",
    "title": "Real-time Operations Monitor",
    "description": "Streamlit application rendering real-time metrics generated from Kafka streams. Designed for the operations team to monitor system health.",
    "category": "Dashboard",
    "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "repo_url": "https://github.com",
    "live_url": "https://streamlit.io"
  }
];

/* ─── Mobile Card Deck ───────────────────────────────────── */
const MobileCardDeck = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [throwDir, setThrowDir] = useState(null); // 'left' | 'right'
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const total = projects.length;
  const remaining = total - currentIndex;

  const throwCard = (dir) => {
    if (isAnimating || remaining === 0) return;
    setThrowDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
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
    // Only register horizontal swipes (dx > 50px and more horizontal than vertical)
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
      throwCard(dx > 0 ? 'right' : 'left');
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const reset = () => {
    setCurrentIndex(0);
    setThrowDir(null);
    setIsAnimating(false);
  };

  // Render up to 3 visible cards (bottom → top in DOM order so top card is on top)
  const visibleCards = [];
  for (let i = Math.min(currentIndex + 2, total - 1); i >= currentIndex; i--) {
    visibleCards.push({ project: projects[i], stackIndex: i - currentIndex });
  }

  return (
    <div className="projects-mobile-deck">

      <div className="deck-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {remaining === 0 ? (
          <div className="deck-empty">
            <span style={{ fontSize: '2.5rem' }}>🎉</span>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>You've seen them all!</p>
            <button className="deck-reset-btn" onClick={reset}>Shuffle Again</button>
          </div>
        ) : (
          visibleCards.map(({ project, stackIndex }) => {
            const isTop = stackIndex === 0;
            const stackClass = isTop ? 'top-card' : `stack-${stackIndex}`;
            const throwClass = isTop && throwDir ? `throw-${throwDir}` : '';

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
                  <span className="deck-card-category">{project.category}</span>
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
          })
        )}
      </div>

      {remaining > 0 && (
        <>
          <div className="deck-controls">
            <button
              className="deck-arrow-btn"
              onClick={() => throwCard('left')}
              disabled={isAnimating}
              aria-label="Previous"
            >
              ←
            </button>
            <div className="deck-counter">
              {currentIndex + 1} <span style={{ opacity: 0.5 }}>/ {total}</span>
            </div>
            <button
              className="deck-arrow-btn"
              onClick={() => throwCard('right')}
              disabled={isAnimating}
              aria-label="Next"
            >
              →
            </button>
          </div>
          <p className="deck-hint">← Swipe or tap arrows to browse →</p>
        </>
      )}
    </div>
  );
};

/* ─── Main Projects Component ────────────────────────────── */
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_JSON_URL);
        if (!response.ok) throw new Error('Network response not ok');
        const data = await response.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.warn('Using fallback data.', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  const filterButtons = (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
      {['All', 'Dashboard', 'Data Pipeline'].map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          style={{
            background: filter === category ? 'var(--accent-color)' : 'var(--bg-secondary)',
            color: filter === category ? 'var(--bg-color)' : 'var(--text-primary)',
            borderColor: filter === category ? 'var(--accent-color)' : 'var(--border-color)',
            fontWeight: 600
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );

  return (
    <section className="section-margin">
      <h2 className="title" style={{ color: 'var(--text-primary)' }}>Portfolio Projects</h2>

      {filterButtons}

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

      <div style={{
        marginTop: '2.5rem', padding: '1.25rem',
        background: 'var(--bg-secondary)', borderRadius: '12px',
        border: '1px solid var(--border-color)',
        fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6
      }}>
        <p><strong>Pro Tip:</strong> Host your project data in a <code>projects.json</code> file on GitHub and update the <code>GITHUB_JSON_URL</code> in <code>Projects.jsx</code> for dynamic updates!</p>
      </div>
    </section>
  );
};

export default Projects;
