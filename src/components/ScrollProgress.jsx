import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Intro' },
    { id: 'tools', label: 'Tools' },
    { id: 'work', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="scroll-progress-nav">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`nav-dot-wrapper ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          <span className="nav-label">{section.label}</span>
          <div className="nav-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default ScrollProgress;
