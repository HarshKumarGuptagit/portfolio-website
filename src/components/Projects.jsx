import React, { useState, useEffect } from 'react';
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

  return (
    <section className="section-margin">
      <h2 className="title" style={{ color: 'var(--text-primary)' }}>Portfolio Projects</h2>
      
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

      <div className="projects-grid-wrapper reveal-stagger">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)', gridColumn: '1 / -1' }}>
            Loading projects...
          </div>
        ) : (
          <>
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
              <p style={{ color: 'var(--text-secondary)', gridColumn: '1 / -1' }}>No projects found for this category.</p>
            )}
          </>
        )}
      </div>
      
      <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        <p><strong>Pro Tip:</strong> You can host your project data in a <code>projects.json</code> file on GitHub and update the <code>GITHUB_JSON_URL</code> in <code>Projects.jsx</code> for dynamic updates!</p>
      </div>
    </section>
  );
};

export default Projects;
