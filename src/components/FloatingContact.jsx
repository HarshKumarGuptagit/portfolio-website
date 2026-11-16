import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, X, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText('harshkumargupta49@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Action Dock */}
      <div className="floating-dock-desktop" ref={menuRef}>
        {/* Floating Contact Card Menu */}
        {isOpen && (
          <div className="floating-dock-card">
            <div className="floating-card-header">
              <div className="floating-live-beacon">
                <span className="beacon-ring"></span>
                <span className="beacon-dot"></span>
              </div>
              <div className="floating-header-info">
                <span className="floating-header-title">Harsh Kumar Gupta</span>
                <span className="floating-header-sub">Data Engineer • Bengaluru, India</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="floating-close-btn"
                aria-label="Close contact card"
              >
                <X size={15} />
              </button>
            </div>

            <div className="floating-card-body">
              {/* Primary Email Item */}
              <div className="floating-action-tile">
                <a
                  href="mailto:harshkumargupta49@gmail.com"
                  className="floating-tile-main"
                  title="Send email via default client"
                >
                  <div className="tile-icon-box mail">
                    <Mail size={16} />
                  </div>
                  <div className="tile-details">
                    <span className="tile-label">Direct Email</span>
                    <span className="tile-value">harshkumargupta49@gmail.com</span>
                  </div>
                </a>
                <button
                  onClick={copyEmail}
                  className="tile-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                </button>
              </div>

              {/* LinkedIn Item */}
              <a
                href="https://www.linkedin.com/in/harshkumargupta49/"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-action-tile"
              >
                <div className="tile-icon-box linkedin">
                  <Linkedin size={16} />
                </div>
                <div className="tile-details">
                  <span className="tile-label">LinkedIn Profile</span>
                  <span className="tile-value">in/harshkumargupta49</span>
                </div>
                <ExternalLink size={14} className="tile-ext-icon" />
              </a>

              {/* GitHub Item */}
              <a
                href="https://github.com/HarshKumarGuptagit"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-action-tile"
              >
                <div className="tile-icon-box github">
                  <Github size={16} />
                </div>
                <div className="tile-details">
                  <span className="tile-label">GitHub Repositories</span>
                  <span className="tile-value">@HarshKumarGuptagit</span>
                </div>
                <ExternalLink size={14} className="tile-ext-icon" />
              </a>
            </div>

            <div className="floating-card-footer">
              <span className="footer-status-text">⚡ Open to Data Engineering &amp; Streaming roles</span>
            </div>
          </div>
        )}

        {/* Floating Bubble Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`floating-fab-btn ${isOpen ? 'is-active' : ''}`}
          aria-label="Toggle quick contact options"
          title="Contact Harsh Kumar Gupta"
        >
          {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
          <span className="fab-online-dot"></span>
        </button>
      </div>

      {/* Mobile Sticky Contact Bar */}
      <div className={`mobile-bottom-bar ${isVisible ? 'visible active-pop' : ''}`}>
        <a
          href="https://www.linkedin.com/in/harshkumargupta49/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn"
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:harshkumargupta49@gmail.com"
          className="mobile-bar-btn primary"
        >
          <Mail size={16} />
          <span>Send Email</span>
        </a>
      </div>
    </>
  );
};

export default FloatingContact;
