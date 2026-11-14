import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = (props) => {
  const p = props.project || props;
  const title = p.title;
  const description = p.description;
  const category = p.category;
  const imageUrl = p.image_url || p.imageUrl;
  const repoUrl = p.repo_url || p.repoUrl;
  const liveUrl = p.live_url || p.liveUrl;

  return (
    <div className="card project-card-modern">
      {/* Image container */}
      <div className="project-image-box">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} preview`} 
            className="project-img"
            loading="lazy"
          />
        ) : (
          <div className="project-img-placeholder">
            Data Architecture
          </div>
        )}
        <span className="project-badge-tag">{category}</span>
      </div>
      
      {/* Content */}
      <div className="project-card-body">
        <h3 className="project-title-text">{title}</h3>
        <p className="project-desc-text">{description}</p>
        
        {/* Links */}
        <div className="project-actions-row">
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn"
            >
              <Github size={16} />
              <span>View Source</span>
              <ArrowUpRight size={14} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn primary"
            >
              <ExternalLink size={16} />
              <span>Live System</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
