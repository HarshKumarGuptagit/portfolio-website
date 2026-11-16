import React from 'react';
import { Briefcase, Calendar, MapPin, Check, ExternalLink, Zap, ShieldCheck, TrendingUp, Activity, Award } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Avathon",
      period: "Aug 2026 – Present",
      location: "Bengaluru, India",
      active: true,
      summary: "Telemetry ETL and serverless streaming pipelines for solar, wind, and renewable storage assets.",
      metrics: [
        { label: "Data Accuracy", value: "99.99%", icon: <Activity size={13} /> },
        { label: "Window Aggregations", value: "5-Min Windows", icon: <Zap size={13} /> },
        { label: "Pipeline Uptime", value: "24/7 Operational", icon: <ShieldCheck size={13} /> }
      ],
      stack: ["AWS Lambda", "Amazon S3", "Medallion Architecture", "Polars", "PyArrow", "Elasticsearch", "CI/CD"],
      bulletPoints: [
        "Engineered serverless telemetry ETL pipelines using AWS Lambda and implemented a Medallion Architecture on Amazon S3 to ingest renewable energy asset data.",
        "Processed high-frequency sensor streams into 5-minute statistical windows using Polars and PyArrow, achieving 99.99% data accuracy across Elasticsearch indexes.",
        "Automated CI/CD-driven deployments, executed S3-based historical backfills, and resolved ingestion failures to restore missing meteorological telemetry.",
        "Streamlined data recovery protocols, reducing restoration turnaround and ensuring 24/7 operational continuity."
      ]
    },
    {
      role: "Analytics Engineer",
      company: "Nxtwave",
      period: "Jun 2024 – Aug 2026",
      location: "Hyderabad, India",
      active: false,
      summary: "Automated ELT pipelines, Medallion data warehouse in BigQuery, and enterprise dbt dimensional modeling.",
      metrics: [
        { label: "Model Maintenance", value: "-40% Reduction", icon: <TrendingUp size={13} /> },
        { label: "Query Performance", value: "+25% Speedup", icon: <Zap size={13} /> },
        { label: "Historical Audit", value: "100% SCD Type-2", icon: <Check size={13} /> }
      ],
      stack: ["Google BigQuery", "dbt", "GCP Cloud Run", "Cloud Scheduler", "SCD Type-2", "Hex", "Looker Studio"],
      bulletPoints: [
        "Engineered automated ELT pipelines using GCP Cloud Run and Cloud Scheduler integrating Meta Ads, Salesforce, Google Ads, and GA4 data into BigQuery.",
        "Designed and implemented Bronze (staging), Silver (intermediate), and Gold (mart) layers in BigQuery using dbt, cutting model maintenance effort by 40%.",
        "Implemented SCD Type-2 historical tracking using BigQuery SQL and stored procedures within dbt workflows for 100% historical accuracy.",
        "Optimized BigQuery through partitioning, clustering, and query tuning—improving query performance by 25% and reducing processing costs by 10%.",
        "Modeled analytics-ready data in BigQuery and maintained dbt documentation, enabling governed self-service analytics through Hex and reducing ad-hoc requests by 30%."
      ],
      certificate: "https://drive.google.com/file/d/11i99oPBGhNSXNj1dvyAutcEKvD67tVb2/view?usp=sharing"
    }
  ];

  return (
    <section className="section-margin" id="work" aria-labelledby="work-heading">
      <div className="section-header-clean">
        <div className="section-tag-mono">03 // TRACK RECORD</div>
        <h2 id="work-heading" className="section-heading-clean">Work Experience</h2>
        <p className="section-subtext-clean">
          Engineering production pipelines and scalable data platforms in fast-paced environments.
        </p>
      </div>

      <div className="experience-log-stack">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`exp-log-card ${exp.active ? 'is-active' : ''}`}>
            
            {/* Header info */}
            <div className="exp-log-header">
              <div>
                <div className="exp-role-row">
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <span className="exp-at-symbol">@</span>
                  <span className="exp-company-text">{exp.company}</span>
                  {exp.active ? (
                    <span className="exp-active-badge">
                      <span className="active-dot"></span> CURRENT ROLE
                    </span>
                  ) : (
                    <span className="exp-past-badge">COMPLETED</span>
                  )}
                </div>
                <div className="exp-subinfo">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-sep">•</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Impact Metric Chips */}
            <div className="exp-metrics-row">
              {exp.metrics.map((m, mIdx) => (
                <div key={mIdx} className="exp-metric-chip">
                  <span className="metric-chip-icon">{m.icon}</span>
                  <span className="metric-chip-val">{m.value}</span>
                  <span className="metric-chip-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            <p className="exp-lead-summary">{exp.summary}</p>

            <ul className="exp-bullets-clean">
              {exp.bulletPoints.map((point, bIdx) => (
                <li key={bIdx} className="exp-bullet-item">
                  <span className="exp-bullet-marker">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="exp-stack-footer">
              <span className="exp-stack-label">STACK:</span>
              <div className="exp-stack-tags">
                {exp.stack.map((item, sIdx) => (
                  <span key={sIdx} className="tech-badge-clean small">{item}</span>
                ))}
              </div>
            </div>

            {exp.certificate && (
              <div className="exp-cert-row">
                <a 
                  href={exp.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="exp-cert-btn"
                  title="View Verified Internship Completion Certificate"
                >
                  <Award size={14} />
                  <span>Verified Completion Certificate</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
