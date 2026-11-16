import React from 'react';
import { GitBranch, ExternalLink, Github, ArrowUpRight, ArrowRight, Layers, Database } from 'lucide-react';

const topRepositories = [
  {
    id: "banking-data-engineering-pipeline",
    title: "banking-data-engineering-pipeline",
    repoName: "HarshKumarGuptagit/banking-data-engineering-pipeline",
    repoUrl: "https://github.com/HarshKumarGuptagit/banking-data-engineering-pipeline",
    badge: "Real-Time CDC & Medallion",
    architectureNodes: ["PostgreSQL", "Debezium CDC", "Kafka", "MinIO Lake", "Airflow", "Snowflake (dbt)", "Looker Studio"],
    description: "End-to-end modern data engineering pipeline for banking analytics. Captures real-time financial transactions via Debezium Change Data Capture (CDC), streams events through Kafka into MinIO object storage, orchestrates containerized DAGs in Airflow, transforms dimensional models in Snowflake with dbt (SCD Type-2), and serves Looker Studio dashboards.",
    highlights: [
      "Real-time event streaming with Apache Kafka and Debezium CDC",
      "Bronze ➔ Silver ➔ Gold Medallion modeling in Snowflake via dbt",
      "Slowly Changing Dimensions (SCD Type-2) historical audit tracking",
      "End-to-end multi-service orchestration with Docker Compose & Airflow"
    ],
    techStack: ["PostgreSQL", "Kafka", "Debezium", "MinIO", "Apache Airflow", "Snowflake", "dbt", "Docker"]
  },
  {
    id: "pubg-analytics-end-to-end-pipeline",
    title: "pubg-analytics-end-to-end-pipeline",
    repoName: "HarshKumarGuptagit/pubg-analytics-end-to-end-pipeline",
    repoUrl: "https://github.com/HarshKumarGuptagit/pubg-analytics-end-to-end-pipeline",
    badge: "GCP Cloud ELT & Gaming Telemetry",
    architectureNodes: ["PUBG Developer API", "Python Engine", "Google BigQuery", "dbt Transformations", "Looker Studio"],
    description: "Robust cloud ELT pipeline extracting granular esports match data and player telemetry from the official PUBG Developer API. Orchestrates automated batch ingestion via containerized Apache Airflow directly into Google BigQuery with JSON-native schemas, transforming raw telemetry into high-performance dimensional models with dbt for Looker Studio analytics.",
    highlights: [
      "Automated extraction of esports player match telemetry from PUBG API",
      "Containerized workflow scheduling and dependency orchestration in Apache Airflow",
      "JSON-native ingestion and partition optimization in Google BigQuery",
      "Modular dbt dimensional models delivering combat KPIs and match insights"
    ],
    techStack: ["Python", "Apache Airflow", "Google BigQuery", "dbt", "Looker Studio", "Docker", "GCP"]
  },
  {
    id: "Data-Analytics-Portfolio",
    title: "Data-Analytics-Portfolio",
    repoName: "HarshKumarGuptagit/Data-Analytics-Portfolio",
    repoUrl: "https://github.com/HarshKumarGuptagit/Data-Analytics-Portfolio",
    badge: "Analytics Engineering & BI",
    architectureNodes: ["Raw Business Events", "SQL & Python Staging", "Cohort & Churn Logic", "Tableau & Looker BI"],
    description: "Curated suite of production data analysis and analytics engineering workflows. Models customer churn, sales revenue funnels, and user engagement cohorts using advanced SQL window functions, Python (Pandas/NumPy), and interactive dashboards in Tableau and Looker Studio.",
    highlights: [
      "Customer Churn and Lifetime Value (LTV) cohort analysis",
      "Sales performance and multi-touch marketing attribution models",
      "Complex SQL stored procedures, CTEs, and analytical window functions",
      "Interactive executive reporting in Looker Studio and Tableau"
    ],
    techStack: ["SQL", "Python", "Tableau", "Looker Studio", "Data Modeling", "ETL"]
  }
];

const Projects = () => {
  return (
    <section className="section-margin" id="projects" aria-labelledby="projects-heading">
      <div className="section-header-clean">
        <div className="section-tag-mono">04 // REPOSITORIES</div>
        <h2 id="projects-heading" className="section-heading-clean">Featured GitHub Projects</h2>
        <p className="section-subtext-clean">
          Verified production data architectures and pipeline implementations from{' '}
          <a 
            href="https://github.com/HarshKumarGuptagit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-github-link"
            aria-label="Visit Harsh Kumar Gupta's GitHub Profile"
          >
            @HarshKumarGuptagit <ArrowUpRight size={13} />
          </a>
        </p>
      </div>

      <div className="repo-cards-stack">
        {topRepositories.map((repo, idx) => (
          <article key={repo.id} className="repo-card-minimal">
            
            {/* Top metadata row */}
            <div className="repo-card-topbar">
              <div className="repo-badge-pill">
                <span className="repo-stage-index">0{idx + 1}</span>
                <span className="repo-badge-label">{repo.badge}</span>
              </div>

              <a
                href={repo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link-action"
                title={`Open ${repo.title} on GitHub`}
                aria-label={`Open repository ${repo.title} on GitHub`}
              >
                <Github size={14} />
                <span>View on GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Title */}
            <h3 className="repo-main-title">
              <a href={repo.repoUrl} target="_blank" rel="noopener noreferrer">
                {repo.title}
              </a>
            </h3>

            {/* Interactive Architecture Flow Diagram */}
            <div className="repo-flow-conduit-box">
              <span className="flow-conduit-tag">CONDUIT ARCHITECTURE</span>
              <div className="flow-conduit-track">
                {repo.architectureNodes.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className="flow-conduit-node">{node}</span>
                    {nIdx < repo.architectureNodes.length - 1 && (
                      <span className="flow-conduit-arrow">
                        <ArrowRight size={12} />
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="repo-description-text">{repo.description}</p>

            {/* Key Engineering Highlights */}
            <div className="repo-highlights-box">
              <span className="highlights-title">Key Engineering Highlights:</span>
              <ul className="highlights-list">
                {repo.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="highlight-item">
                    <span className="highlight-bullet">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack tags */}
            <div className="repo-stack-row">
              {repo.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="repo-stack-pill">{tech}</span>
              ))}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
