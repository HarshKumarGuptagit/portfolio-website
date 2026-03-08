import React from 'react';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Data Analytics Engineer",
      company: "Nxtwave Disruptive Technologies Pvt. Ltd., Hyderabad",
      period: "Dec 2024 - Present",
      points: [
        "Enabled the Pre-Sales team to track user webinar engagement and retention to facilitate data-backed decision-making.",
        "Took full ownership of Referral Portal Analytics to boost referrer engagement and ensure sales efforts are prioritized on high-value leads.",
        "Modeled and built an end-to-end reporting layer for user onboarding and engagement for the \"NIAT Launchpad\" product.",
        "Collaborated with Pre-Sales and Marketing teams to provide full visibility into lead generation across Google and Meta Ads, calculating key metrics such as CPL, clicks, and impressions.",
        "Managed and ensured seamless data synchronization into the analytics platform by developing dashboards for ingestion sources like CRM, CloudWatch, and Google Data Transfer service.",
        "Authored report documents on multi-channel lead generation and provided strategic recommendations to improve efficiency through new performance metrics."
      ],
      current: true
    },
    {
      title: "Analytics Engineer Intern",
      company: "Nxtwave Disruptive Technologies Pvt. Ltd., Hyderabad",
      period: "Jun 2024 - Dec 2024",
      points: [
        "Assisted in the transformation of raw CRM data using SQL and dbt to develop foundational data modeling skills while supporting data reliability through automated stored procedures.",
        "Gained technical proficiency in BigQuery optimization techniques, including table partitioning and clustering, to improve query performance.",
        "Developed a strong foundation in GCP, AWS, dbt, Git, and BigQuery through hands-on participation in infrastructure maintenance.",
        "Built interactive reporting dashboards for stakeholders using Looker Studio to translate complex data into visual insights."
      ],
      certificate: "https://drive.google.com/file/d/11i99oPBGhNSXNj1dvyAutcEKvD67tVb2/view?usp=sharing"
    }
  ];

  return (
    <section className="section-margin">
      <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <Briefcase color="var(--accent-color)" size={28} />
        <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Work Experience</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card" style={{ borderLeft: `4px solid ${exp.current ? 'var(--accent-color)' : 'var(--border-color)'}` }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{exp.title}</h4>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem' }}>{exp.company}</p>
            <p style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{exp.period}</p>
            <ul style={{ color: 'var(--text-primary)', fontSize: '0.95rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: exp.certificate ? '1.5rem' : 0 }}>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {exp.certificate && (
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Completion Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
