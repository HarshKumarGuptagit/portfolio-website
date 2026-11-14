import React, { useState, useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import DataPipelineSpine from './components/DataPipelineSpine';
import Background from './components/Background';
import Intro from './components/Intro';
import Tools from './components/Tools';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeModal from './components/ResumeModal';
import FloatingContact from './components/FloatingContact';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback || null;
    return this.props.children;
  }
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  useScrollReveal();

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="portfolio-app-root">
      {/* Background with clean data stream tracks */}
      <ErrorBoundary fallback={null}>
        <Background />
      </ErrorBoundary>

      {/* Vertical Data Pipeline Scroll Animation & Indicator */}
      <DataPipelineSpine />

      {/* Minimal Top Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={handleOpenResume} 
      />

      {/* Main Container Layout */}
      <main className="main-content-layout">
        
        <div id="intro" className="reveal reveal-up">
          <Intro onOpenResume={handleOpenResume} />
        </div>

        <div id="tools" className="reveal reveal-up">
          <Tools />
        </div>

        <div id="work" className="reveal reveal-up">
          <WorkExperience />
        </div>

        <div id="projects" className="reveal reveal-up">
          <Projects />
        </div>

        <div id="education" className="reveal reveal-up">
          <Education />
        </div>

        <FloatingContact />

        <footer className="clean-footer">
          <div className="clean-footer-inner">
            <p className="footer-lead">
              HARSH KUMAR GUPTA <span className="footer-dot">•</span> DATA ENGINEER
            </p>
            <p className="footer-sub">
              Scalable Telemetry & ETL Pipelines • AWS & GCP • Bengaluru, India
            </p>
            <div className="footer-links-row">
              <a href="https://github.com/HarshKumarGuptagit" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span className="footer-sep">/</span>
              <a href="https://www.linkedin.com/in/harshkumargupta49/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <span className="footer-sep">/</span>
              <a href="mailto:harshkumargupta49@gmail.com">
                Email
              </a>
              <span className="footer-sep">/</span>
              <button 
                onClick={handleOpenResume}
                className="clean-footer-text-btn"
                title="View Resume in Pop-up"
              >
                Resume.pdf
              </button>
            </div>
          </div>
        </footer>

      </main>

      {/* Dedicated Pop-Up Overlay (Modal) */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={handleCloseResume} 
      />
    </div>
  );
}

export default App;
