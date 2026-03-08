import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, category, imageUrl, repoUrl, liveUrl }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
      
      {/* Image container with fixed aspect ratio */}
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)' }}>
        {imageUrl ? (
            <img 
            src={imageUrl} 
            alt={`${title} preview`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
        ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                No Image Available
            </div>
        )}
      </div>
      
      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>{title}</h3>
          <span style={{ 
            fontSize: '0.75rem', 
            background: 'var(--accent-half)', 
            color: 'var(--accent-color)', 
            padding: '0.25rem 0.5rem', 
            borderRadius: '4px',
            border: '1px solid var(--accent-half)' 
          }}>
            {category}
          </span>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
          {description}
        </p>
        
        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
              <Github size={18} /> Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
