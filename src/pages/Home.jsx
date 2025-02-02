import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Transforming Business with AI Agents</h1>
          <p>Empower your organization with intelligent automation solutions</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      
      <section className="features">
        <h2>Our Solutions</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Custom AI Agents</h3>
            <p>Tailored AI solutions for your specific business needs</p>
          </div>
          <div className="feature-card">
            <h3>Process Automation</h3>
            <p>Streamline operations with intelligent automation</p>
          </div>
          <div className="feature-card">
            <h3>Data Analytics</h3>
            <p>Make data-driven decisions with AI-powered insights</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 