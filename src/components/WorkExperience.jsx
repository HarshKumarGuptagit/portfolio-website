import React from 'react';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Avathon",
      period: "Aug 2026 – Present",
      points: [
        "Event-Driven ETL Engineering: Engineered serverless telemetry ETL pipelines using AWS Lambda and implemented a Medallion Architecture on Amazon S3 to process data from solar, wind, and energy storage assets.",
        "Sensor Data Processing & Accuracy: Processed high-frequency sensor streams into 5-minute statistical windows using Polars and PyArrow, achieving 99.99% data accuracy across Elasticsearch indexes.",
        "Pipeline Reliability & Recovery: Implemented CI/CD-driven deployments, executed S3-based backfills, and resolved ingestion failures to restore missing asset, site, and meteorological data while strengthening end-to-end pipeline reliability.",
        "Data Recovery & Operational Continuity: Streamlined pipeline recovery procedures and backfill execution, reducing data restoration turnaround and improving operational continuity."
      ],
      current: true
    },
    {
      title: "Analytics Engineer",
      company: "Nxtwave",
      period: "Jun 2024 – Aug 2026",
      points: [
        "ELT Pipeline Automation: Engineered automated ELT pipelines using GCP Cloud Run and Cloud Scheduler to integrate Meta Ads, Salesforce CRM, Google Ads, and GA4 data into BigQuery, reducing reporting turnaround from days to minutes.",
        "Medallion Data Modeling: Designed and developed Bronze (staging), Silver (intermediate), and Gold (mart) layers in BigQuery using dbt, implementing a Medallion Architecture that reduced data maintenance effort by 40% and improved model scalability.",
        "Historical Data Tracking: Implemented SCD Type 2 using BigQuery SQL and stored procedures within dbt workflows, ensuring 100% historical tracking accuracy across dimensional models.",
        "Query Optimization & Access Governance: Optimized BigQuery queries through partitioning, clustering, and performance tuning, improving query performance by 25% and reducing processing costs by 10%; configured IAM roles to manage secure access for 20+ stakeholders and systems.",
        "Service Analytics & Reporting: Built analytics‑ready data models in BigQuery using dbt and maintained comprehensive dbt documentation, enabling governed self‑service analytics through Hex and reducing ad‑hoc data requests by 30%.",
        "End-to‑to‑Product Analytics: Managed product analytics across data modelling, table development, insight generation, reporting, and dashboard delivery, translating business requirements into actionable data insights."
      ]
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
              <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="cert-link">
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
