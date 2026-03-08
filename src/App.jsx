import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import useScrollReveal from './hooks/useScrollReveal';
import ScrollProgress from './components/ScrollProgress';
import Intro from './components/Intro';
import Tools from './components/Tools';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import FloatingContact from './components/FloatingContact';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');
  useScrollReveal();

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container">
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="theme-toggle-btn"
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          zIndex: 3000,
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      >
        {theme === 'dark' ? <Sun size={20} color="var(--accent-color)" /> : <Moon size={20} color="var(--accent-color)" />}
      </button>

      <ScrollProgress />
      
      <div id="intro" className="reveal reveal-up">
        <Intro />
      </div>

      <div id="tools">
        <Tools />
      </div>

      <div id="work" className="reveal reveal-up">
        <WorkExperience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="education" className="reveal reveal-up">
        <Education />
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <FloatingContact />

      <footer style={{ marginTop: '8rem', paddingBottom: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Harsh Kumar Gupta. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
