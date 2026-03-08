import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Data Analyst - NIIT",
      issued: "Feb 2024",
      url: "https://drive.google.com/file/d/1tnsxQV4vhWnMjGFVRJsAOEbJLqTdCy-_/view?usp=sharing"
    }
  ];

  return (
    <section className="section-margin">
      <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <Award color="var(--accent-color)" size={28} />
        <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Certifications</h3>
      </div>

      <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {certifications.map((cert, index) => (
          <div key={index} className={`card stagger-${index + 1}`} style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{cert.title}</h4>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Issued: {cert.issued}</p>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
              style={{ fontSize: '0.85rem' }}
            >
              <Award size={14} style={{ marginRight: '0.5rem' }} /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
