import React, { useState, useEffect } from 'react';
import { Layers, Cpu, Database, GitBranch, Award } from 'lucide-react';

const pipelineStages = [
  { id: 'intro', label: '01 / INGESTION', name: 'Overview', icon: <Layers size={14} /> },
  { id: 'tools', label: '02 / PROCESSING', name: 'Tech Stack', icon: <Cpu size={14} /> },
  { id: 'work', label: '03 / WAREHOUSE', name: 'Experience', icon: <Database size={14} /> },
  { id: 'projects', label: '04 / REPOSITORIES', name: 'GitHub Projects', icon: <GitBranch size={14} /> },
  { id: 'education', label: '05 / CREDENTIALS', name: 'Education', icon: <Award size={14} /> },
];

const DataPipelineSpine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const scrollPos = window.scrollY + 220;
      for (const stage of pipelineStages) {
        const el = document.getElementById(stage.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveStage(stage.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. Top Horizontal Precision Progress Bar (Data Stream Cable) */}
      <div className="pipeline-top-cable">
        <div 
          className="pipeline-top-stream" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Side Pipeline Conduit (Interactive Stage Controller) */}
      <aside className="pipeline-conduit-nav" aria-label="Data Pipeline Navigation">
        <div className="pipeline-conduit-header">
          <span className="pipeline-status-light"></span>
          <span className="pipeline-header-text">ETL PIPELINE STREAM</span>
        </div>

        <div className="pipeline-track-wrapper">
          {/* Vertical conduit line */}
          <div className="pipeline-track-rail">
            <div 
              className="pipeline-track-liquid" 
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Pipeline stage nodes */}
          <div className="pipeline-nodes-column">
            {pipelineStages.map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => scrollTo(stage.id)}
                  className={`pipeline-node-btn ${isActive ? 'is-active-stage' : ''}`}
                >
                  <div className="pipeline-node-bullet">
                    <span className="node-inner-dot" />
                  </div>
                  <div className="pipeline-node-info">
                    <span className="pipeline-node-tag">{stage.label}</span>
                    <span className="pipeline-node-name">{stage.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pipeline-metrics-footer">
          <span className="pipeline-metric-value">{Math.round(scrollProgress)}%</span>
          <span className="pipeline-metric-label">PIPELINE PROCESSED</span>
        </div>
      </aside>
    </>
  );
};

export default DataPipelineSpine;
