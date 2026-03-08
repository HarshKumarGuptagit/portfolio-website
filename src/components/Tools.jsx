import { 
  Database, LineChart, Code2, Server, 
  Terminal, Layers, BarChart3, Activity, 
  GitBranch, Box, Cpu, Workflow, 
  Search, ShieldCheck, Zap
} from 'lucide-react';

const toolIcons = {
  // Data Engineering
  "Python": <Cpu size={14} />,
  "Pandas": <Activity size={14} />,
  "NumPy": <Activity size={14} />,
  "PySpark": <Layers size={14} />,
  "Apache Spark": <Zap size={14} />,
  "dbt": <Workflow size={14} />,
  "SQL": <Terminal size={14} />,
  "Docker": <Box size={14} />,
  "Apache Airflow": <Workflow size={14} />,
  "ETL/ELT Pipelines": <Workflow size={14} />,
  "Git/GitHub": <GitBranch size={14} />,
  "Data Structures & Algorithms": <Code2 size={14} />,
  
  // Cloud & Warehousing
  "GCP": <Layers size={14} />,
  "BigQuery": <Database size={14} />,
  "Cloud Run": <Server size={14} />,
  "AWS": <Server size={14} />,
  "Data Modeling": <Database size={14} />,
  
  // Visualization & Analytics
  "Looker Studio": <BarChart3 size={14} />,
  "Tableau": <LineChart size={14} />,
  "Exploratory Data Analysis": <Search size={14} />,
  "Storytelling": <Zap size={14} />
};

const tools = [
  {
    category: "Data Engineering",
    icon: <Workflow size={24} color="var(--accent-color)" />,
    items: [
      "Python", "SQL", "dbt", "Apache Airflow", 
      "Apache Spark", "PySpark", "Pandas", "NumPy",
      "Docker", "ETL/ELT Pipelines", "Git/GitHub", 
      "Data Structures & Algorithms"
    ]
  },
  {
    category: "Cloud & Warehousing",
    icon: <Database size={24} color="var(--accent-color)" />,
    items: ["GCP", "BigQuery", "Cloud Run", "AWS", "Data Modeling"]
  },
  {
    category: "Visualization & Analytics",
    icon: <LineChart size={24} color="var(--accent-color)" />,
    items: ["Looker Studio", "Tableau", "Data Modeling", "Exploratory Data Analysis", "Storytelling"]
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
