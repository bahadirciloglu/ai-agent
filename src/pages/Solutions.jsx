import React from 'react';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-container">
      <section className="solutions-hero">
        <h1>Our AI Solutions</h1>
        <p>Transforming businesses with cutting-edge AI technology</p>
      </section>

      <section className="solutions-grid">
        <div className="solution-card">
          <h3>Custom AI Agents</h3>
          <p>Tailored AI solutions designed specifically for your business needs</p>
          <ul>
            <li>Natural Language Processing</li>
            <li>Custom AI Models</li>
            <li>Integration Services</li>
          </ul>
        </div>

        <div className="solution-card">
          <h3>Process Automation</h3>
          <p>Streamline your operations with intelligent automation</p>
          <ul>
            <li>Workflow Automation</li>
            <li>Document Processing</li>
            <li>Task Management</li>
          </ul>
        </div>

        <div className="solution-card">
          <h3>Data Analytics</h3>
          <p>Make informed decisions with AI-powered insights</p>
          <ul>
            <li>Predictive Analytics</li>
            <li>Business Intelligence</li>
            <li>Data Visualization</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Solutions; 