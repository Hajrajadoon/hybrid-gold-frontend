import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <h1>🌟 Hybrid Gold System</h1>
        <p>A Transparent, Blockchain-Powered Gold Financial System</p>
        <button className="cta-btn">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Hybrid Gold?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>💰 Backed by Real Gold</h3>
            <p>Unlike paper money, our system is secured by physical gold reserves.</p>
          </div>
          <div className="feature-card">
            <h3>🔗 Blockchain Transparency</h3>
            <p>All transactions are recorded on the blockchain for trust and fairness.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Global Access</h3>
            <p>Accessible to anyone, anywhere — a truly borderless financial system.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Hybrid Gold System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
