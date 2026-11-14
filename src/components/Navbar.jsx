import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#intro' },
    { label: 'Stack', href: '#tools' },
    { label: 'Experience', href: '#work' },
    { label: 'Repositories', href: '#projects' },
    { label: 'Credentials', href: '#education' },
  ];

  return (
    <header className={`clean-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="clean-navbar-inner">
        
        {/* Minimal Terminal Brand */}
        <a href="#intro" className="navbar-brand-mono" aria-label="Harsh Kumar Gupta Portfolio Home">
          <span className="brand-prompt">$</span>
          <span className="brand-name">harsh.pipeline</span>
          <span className="brand-badge-status">RUNNING</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar-links-desktop" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-clean-link">
              {link.label}
            </a>
          ))}

          {/* Opens Pop-Up Overlay */}
          <button
            onClick={onOpenResume}
            className="nav-resume-btn"
            title="Open Resume Pop-up Viewer"
            aria-label="Open Resume Pop-up Viewer"
          >
            <FileText size={14} />
            <span>View Resume</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="nav-theme-btn"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="navbar-mobile-toggle">
          <button
            onClick={toggleTheme}
            className="nav-theme-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-menu-btn"
            aria-label="Open Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-drawer-link"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="mobile-drawer-resume"
          >
            <FileText size={15} /> View Resume (Pop-up)
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
