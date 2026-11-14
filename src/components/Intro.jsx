import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';

const Intro = ({ onOpenResume }) => {
  return (
    <section className="section-margin intro-hero-container" id="intro" aria-label="Introduction and Overview">
      <div className="hero-clean-wrapper">

        <div className="hero-two-column-grid">
          
          {/* Left Column: Authoritative Text & Actions */}
          <div className="hero-column-content">
            
            {/* Live Status Pill */}
            <div className="hero-status-row">
              <span className="clean-status-indicator">
                <span className="status-ping-dot" />
                Active • Bengaluru, India
              </span>
              <span className="clean-status-detail">
                Data Engineer @ <strong>Avathon</strong>
              </span>
            </div>

            {/* Name Heading with Subtle Glow */}
            <h1 className="hero-name-heading">
              Harsh Kumar <span className="hero-name-accent">Gupta</span>
            </h1>

            {/* Animated Role Monospace Line */}
            <div className="hero-role-terminal">
              <span className="terminal-prefix">&gt;</span>
              <span className="terminal-role-text">Data Engineer</span>
              <span className="terminal-divider">/</span>
              <span className="terminal-sub-role">Analytics Engineer</span>
              <span className="terminal-cursor" />
            </div>

            {/* Reduced Concise Pitch */}
            <p className="hero-pitch-lead">
              Data Engineer building scalable batch and real-time streaming pipelines (<strong>Spark Streaming</strong>, <strong>AWS Lambda</strong>, <strong>Kafka</strong>) 
              and cloud Medallion data platforms across <strong>AWS</strong> &amp; <strong>GCP</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="cta-btn-primary" aria-label="Scroll to featured GitHub repositories">
                <span>Explore Repositories</span>
                <ArrowDown size={15} />
              </a>

              <button 
                onClick={onOpenResume} 
                className="cta-btn-secondary"
                aria-label="Open Resume Pop-up Viewer"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Contact Links */}
            <div className="hero-social-strip">
              <a 
                href="https://github.com/HarshKumarGuptagit" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub Profile"
                aria-label="GitHub Profile of Harsh Kumar Gupta"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <span className="strip-dot">•</span>
              <a 
                href="https://www.linkedin.com/in/harshkumargupta49/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile of Harsh Kumar Gupta"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <span className="strip-dot">•</span>
              <a 
                href="mailto:harshkumargupta49@gmail.com" 
                title="Email Harsh Kumar Gupta"
                aria-label="Email Harsh Kumar Gupta"
              >
                <Mail size={18} />
                <span className="social-email-desktop">harshkumargupta49@gmail.com</span>
                <span className="social-email-mobile">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Enlarged DP with Ambient Aura (No distracting text badges) */}
          <div className="hero-column-showcase">
            <div className="hero-avatar-card">
              
              {/* Outer Breathing Glow Ring */}
              <div className="avatar-ambient-glow" />

              {/* Enlarged Avatar Box */}
              <div className="avatar-frame-large">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.png`}
                  alt="Harsh Kumar Gupta - Data Engineer & Analytics Engineer"
                  className="avatar-large-img"
                  width="220"
                  height="220"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/profile-2.jpg`;
                  }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;
