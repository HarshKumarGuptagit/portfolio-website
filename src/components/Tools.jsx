import React from 'react';
import { Radio, Cpu, Database, GitMerge, CheckCircle, ArrowRight } from 'lucide-react';

const pipelineStages = [
  {
    step: "01",
    stage: "Ingestion & Streaming",
    icon: <Radio size={18} color="#38bdf8" />,
    summary: "Capturing high-velocity telemetry, real-time event streams, CDC change feeds, and multi-channel API data.",
    tech: [
      "Spark Streaming (Structured Streaming)",
      "Apache Kafka",
      "Debezium CDC",
      "AWS Lambda (Serverless)",
      "GCP Cloud Run & Cloud Scheduler",
      "Python",
      "REST APIs"
    ]
  },
  {
    step: "02",
    stage: "Distributed Compute & Processing",
    icon: <Cpu size={18} color="#34d399" />,
    summary: "Distributed windowing, real-time micro-batch processing, and high-throughput transformations.",
    tech: [
      "Apache Spark",
      "Databricks (Delta Lake, PySpark)",
      "Polars (High-Performance Engine)",
      "PyArrow",
      "Apache Airflow (DAG Orchestration)",
      "Pandas & NumPy"
    ]
  },
  {
    step: "03",
    stage: "Storage & Cloud Warehousing",
    icon: <Database size={18} color="#fbbf24" />,
    summary: "Scalable object lakes, partitioned analytical warehouses, and enterprise column stores.",
    tech: [
      "Google BigQuery (Partitioning & Clustering)",
      "Snowflake",
      "Amazon S3 (Medallion Data Lake)",
      "MinIO Object Storage",
      "Elasticsearch Telemetry Indexes"
    ]
  },
  {
    step: "04",
    stage: "Transformation & Modeling",
    icon: <GitMerge size={18} color="#a78bfa" />,
    summary: "Medallion architecture staging, dimensional schemas, and historical audit tracking.",
    tech: [
      "dbt (Bronze, Silver, Gold Medallion)",
      "SCD Type-2 Dimensional Tracking",
      "Advanced SQL & Stored Procedures",
      "Analytical Data Marts"
    ]
  },
  {
    step: "05",
    stage: "Quality, Observability & Serving",
    icon: <CheckCircle size={18} color="#f472b6" />,
    summary: "Automated test suites, backfills, anomaly detection, and governed self-service analytics.",
    tech: [
      "dbt Testing & Documentation",
      "S3 Ingestion Backfills",
      "Looker Studio Dashboards",
      "Hex Governed Self-Service Analytics",
      "Cloud IAM Security & Governance"
    ]
  }
];

const Tools = () => {
  return (
    <section className="section-margin" id="tools" aria-labelledby="tools-heading">
      <div className="section-header-clean">
        <div className="section-tag-mono">02 // STACK ARCHITECTURE</div>
        <h2 id="tools-heading" className="section-heading-clean">Data Pipeline Capabilities</h2>
        <p className="section-subtext-clean">
          Technologies structured across the full modern data lifecycle: from real-time streaming to governed serving.
        </p>
      </div>

      <div className="pipeline-stages-container">
        {pipelineStages.map((stage, idx) => (
          <div key={stage.step} className="pipeline-stage-card">
            
            <div className="stage-card-meta">
              <span className="stage-index-badge">{stage.step}</span>
              <div className="stage-icon-wrap">{stage.icon}</div>
              <h3 className="stage-title">{stage.stage}</h3>
            </div>

            <p className="stage-summary">{stage.summary}</p>

            <div className="stage-tech-pills">
              {stage.tech.map((item, tIdx) => (
                <span 
                  key={tIdx} 
                  className={`tech-badge-clean ${item.includes('Spark Streaming') ? 'highlight-tech' : ''}`}
                >
                  {item}
                </span>
              ))}
            </div>

            {idx < pipelineStages.length - 1 && (
              <div className="stage-connector-arrow">
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
