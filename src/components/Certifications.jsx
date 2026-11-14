import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Professional Course in Data Analytics",
      issuer: "NIIT Technologies",
      issued: "Feb 2024",
      url: "https://drive.google.com/file/d/1tnsxQV4vhWnMjGFVRJsAOEbJLqTdCy-_/view?usp=sharing",
      skills: ["Data Analytics", "SQL", "Python", "Data Visualization", "Statistical Analysis"]
    }
  ];

  return (
    <section className="section-margin" id="certifications-section">
      <div className="section-header-badge">
        <span className="badge-tag">CREDENTIALS</span>
        <h2 className="title section-title-glow">Certifications</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card-modern">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="cert-icon-wrap">
                  <Award size={22} color="#fbbf24" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 600 }}>{cert.title}</h3>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', margin: '0.2rem 0 0', fontWeight: 500 }}>{cert.issuer}</p>
                </div>
              </div>
              <span className="cert-issued-pill">Issued: {cert.issued}</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {cert.skills.map((s, idx) => (
                <span key={idx} style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '999px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)'
                }}>
                  {s}
                </span>
              ))}
            </div>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link-modern"
            >
              <span>View Verified Certificate</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
