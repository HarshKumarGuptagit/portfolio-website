import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-margin">
      <div className="hero-wrapper" style={{ padding: '4rem 3rem' }}>
        <div className="hero-bg-blobs">
          <div className="blob blob-1" style={{
            background: 'radial-gradient(circle, var(--blob-color) 0%, rgba(88, 166, 255, 0) 70%)',
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px) scale(${1 + scrollY * 0.0005})`
          }}></div>
          <div className="blob blob-2" style={{
            background: 'radial-gradient(circle, var(--blob-color) 0%, rgba(110, 64, 201, 0) 70%)',
            transform: `translate(${scrollY * -0.15}px, ${scrollY * 0.2}px) scale(${1 + scrollY * 0.0003})`
          }}></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="hero-content-wrapper" style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>

          {/* Left Side: Text and Links */}
          <div className="hero-text-container" style={{ flex: '1 1 300px' }}>
            <h1 className="title hero-title" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Harsh Kumar Gupta</span>
            </h1>
            <h2 className="subtitle hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
              Data Analytics Engineer
            </h2>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Data Analytics Engineer dedicated to building high-performance data architectures. From engineering seamless pipelines to designing intuitive dashboards, I focus on delivering the "North Star" metrics that fuel business success.
            </p>

            <div className="hero-socials" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/Harshkumarguptagit" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <Github size={24} />
                <span style={{ fontSize: '1rem', fontWeight: '500' }}>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/harshkumargupta49/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <Linkedin size={24} />
                <span style={{ fontSize: '1rem', fontWeight: '500' }}>LinkedIn</span>
              </a>
              <a href="mailto:harshkumargupta49@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <Mail size={24} />
                <span style={{ fontSize: '1rem', fontWeight: '500' }}>Email</span>
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div style={{
            flex: '0 1 300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--accent-color)',
              boxShadow: '0 8px 32px var(--accent-half)',
              transition: 'transform 0.3s ease',
            }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
