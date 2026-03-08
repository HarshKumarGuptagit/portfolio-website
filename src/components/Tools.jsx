import { 
  Database, LineChart, Code2, Server, 
  Terminal, Layers, BarChart3, Activity, 
  GitBranch, Box, Cpu, Workflow, 
  Search, ShieldCheck, Zap
} from 'lucide-react';

const toolIcons = {
  // Languages
  "SQL": <Terminal size={14} />,
  "Python": <Cpu size={14} />,
  "JavaScript": <Code2 size={14} />,
  // Warehousing
  "BigQuery": <Layers size={14} />,
  "Snowflake": <Box size={14} />,
  "dbt": <Workflow size={14} />,
  "PostgreSQL": <Database size={14} />,
  "Pandas": <Activity size={14} />,
  // Viz
  "Tableau": <BarChart3 size={14} />,
  "Looker Studio": <Search size={14} />,
  "PowerBI": <LineChart size={14} />,
  "Matplotlib": <Activity size={14} />,
  // DE
  "Airflow": <Zap size={14} />,
  "PySpark": <Layers size={14} />,
  "AWS CodeCommit": <Server size={14} />,
  "Git/GitHub": <GitBranch size={14} />,
  "Docker": <Box size={14} />,
  // Modeling
  "Star Schema": <Layers size={14} />,
  "Snowflake Schema": <Layers size={14} />,
  "Dimensional Modeling": <Workflow size={14} />,
  "Kimball Methodology": <ShieldCheck size={14} />
};

const tools = [
  {
    category: "Languages",
    icon: <Code2 size={24} color="var(--accent-color)" />,
    items: ["SQL", "Python", "JavaScript"]
  },
  {
    category: "Data Warehousing & Transformation",
    icon: <Database size={24} color="var(--accent-color)" />,
    items: ["BigQuery", "Snowflake", "dbt", "PostgreSQL", "Pandas"]
  },
  {
    category: "Visualization & BI",
    icon: <LineChart size={24} color="var(--accent-color)" />,
    items: ["Tableau", "Looker Studio", "PowerBI", "Matplotlib"]
  },
  {
    category: "Data Engineering / Orchestration",
    icon: <Server size={24} color="var(--accent-color)" />,
    items: ["Airflow", "PySpark", "AWS CodeCommit", "Git/GitHub", "Docker"]
  },
  {
    category: "Data Modeling",
    icon: <Database size={24} color="var(--accent-color)" />,
    items: ["Star Schema", "Snowflake Schema", "Dimensional Modeling", "Kimball Methodology"]
  }
];

import React from 'react';

const Tools = () => {
  return (
    <section className="section-margin">
      <h2 className="title" style={{ color: 'var(--text-primary)' }}>Tools & Technologies</h2>
      <div className="tech-grid reveal-stagger">
        {tools.map((toolGroup, index) => (
          <div key={index} className={`card stagger-${index + 1}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {toolGroup.icon}
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>{toolGroup.category}</h3>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {toolGroup.items.map((item, i) => (
                <li key={i} style={{
                  background: 'var(--accent-half)',
                  color: 'var(--accent-color)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  border: '1px solid var(--accent-half)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {toolIcons[item]}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
