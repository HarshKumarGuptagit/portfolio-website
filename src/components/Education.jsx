import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="section-margin" id="education">
      <div className="section-header-clean">
        <div className="section-tag-mono">05 // CREDENTIALS</div>
        <h2 className="section-heading-clean">Education & Certification</h2>
        <p className="section-subtext-clean">
          Academic foundations in computer science and specialized professional data training.
        </p>
      </div>

      <div className="credentials-grid">
        
        {/* Degree 1 */}
        <div className="credential-card-clean">
          <div className="cred-top-row">
            <span className="cred-badge">IN PROGRESS</span>
            <span className="cred-date">Jul 2026 – Jul 2028</span>
          </div>
          <h3 className="cred-title">MS in Computer Science and Data Analytics (Remote)</h3>
          <p className="cred-subtitle">Master's Degree Program</p>
          <p className="cred-detail">
            Advanced curriculum covering distributed data processing, modern cloud architectures, and machine learning data engineering.
          </p>
        </div>

        {/* Degree 2 */}
        <div className="credential-card-clean">
          <div className="cred-top-row">
            <span className="cred-badge success">CGPA: 8.46 / 10</span>
            <span className="cred-date">Jun 2020 – May 2023</span>
          </div>
          <h3 className="cred-title">Bachelor of Computer Science</h3>
          <p className="cred-subtitle">Kohima Science College, Jotsoma, Nagaland</p>
          <p className="cred-detail">
            Foundations in Data Structures, Database Systems (DBMS), Algorithms, Distributed Computing, and Software Engineering principles.
          </p>
        </div>

        {/* Certification */}
        <div className="credential-card-clean cert-highlight">
          <div className="cred-top-row">
            <span className="cred-badge cert">PROFESSIONAL CERTIFICATION</span>
            <span className="cred-date">Feb 2024</span>
          </div>
          <h3 className="cred-title">Professional Course in Data Analytics</h3>
          <p className="cred-subtitle">NIIT Technologies</p>
          <p className="cred-detail">
            Comprehensive practical training in SQL, Python for data manipulation, ETL workflows, and business intelligence reporting.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <a 
              href="https://drive.google.com/file/d/1tnsxQV4vhWnMjGFVRJsAOEbJLqTdCy-_/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-cert-link"
            >
              <span>View Verified NIIT Certificate</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
