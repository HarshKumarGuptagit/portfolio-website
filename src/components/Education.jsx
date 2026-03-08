import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="section-margin">
      <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <GraduationCap color="var(--accent-color)" size={28} />
        <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Education</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Bachelor of Computer Science</h4>
          <p style={{ color: 'var(--accent-color)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '1rem' }}>Kohima Science College, Jotsoma, Nagaland • 2020 - 2023</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            CGPA: 8.46
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
