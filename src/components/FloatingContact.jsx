import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, X, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="desktop-only" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '1rem',
          boxShadow: 'var(--card-shadow)',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '0.75rem',
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isOpen ? 'all' : 'none'
        }}>
          <a
            href="mailto:harshkumargupta49@gmail.com"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', color: 'var(--text-primary)', borderRadius: '6px', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-half)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Mail size={20} color="var(--accent-color)" />
            <span style={{ fontWeight: 500 }}>Message on Gmail</span>
          </a>

          <a
            href="https://www.linkedin.com/in/harshkumargupta49/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', color: 'var(--text-primary)', borderRadius: '6px', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-half)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Linkedin size={20} color="var(--accent-color)" />
            <span style={{ fontWeight: 500 }}>Connect on LinkedIn</span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-color)',
            color: 'var(--bg-color)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            boxShadow: 'var(--card-shadow)',
            cursor: 'pointer',
            transition: 'transform 0.2s, background-color 0.2s',
            padding: 0
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>

      {/* Mobile Sticky Bar */}
      <div className={`mobile-bottom-bar ${isVisible ? 'visible active-pop' : ''}`}>
        <a href="https://www.linkedin.com/in/harshkumargupta49/" target="_blank" rel="noopener noreferrer" className="mobile-bar-btn">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href="mailto:harshkumargupta49@gmail.com" className="mobile-bar-btn primary">
          <Mail size={18} /> Message on Gmail
        </a>
      </div>
    </>
  );
};

export default FloatingContact;
