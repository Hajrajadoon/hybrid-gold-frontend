import React from "react";
import { ArrowRight, Globe, Coins, Shield } from "lucide-react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white">
        <h1 className="text-5xl font-bold mb-4">The Hybrid Gold Standard</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          A transparent, blockchain-based financial system backed by real gold —
          combining stability with innovation.
        </p>
        <button className="bg-white text-yellow-600 px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition flex items-center mx-auto">
          🚀 Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <Coins className="w-10 h-10 text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">💰 Gold-Backed</h2>
          <p>Every token is physically backed by gold, ensuring real value and long-term stability.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <Shield className="w-10 h-10 text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">🔗 Blockchain Transparency</h2>
          <p>All transactions are secured and publicly verifiable on the blockchain.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <Globe className="w-10 h-10 text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">🌐 Global Access</h2>
          <p>Accessible to anyone, anywhere — a financial system without borders.</p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">📈 Roadmap</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Phase 1: Tokenization</h3>
            <p>Launch gold-backed tokens secured on blockchain.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Phase 2: Global Adoption</h3>
            <p>Enable cross-border transactions and merchant adoption worldwide.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Phase 3: Banking Integration</h3>
            <p>Connect with banks & governments for mainstream use.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">⚙️ How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">1️⃣ Gold Reserves</h3>
            <p>Physical gold is securely stored and audited.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">2️⃣ Token Issuance</h3>
            <p>Digital tokens are created on blockchain, fully backed by gold.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">3️⃣ Global Use</h3>
            <p>People can trade, save, and pay using hybrid gold tokens.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-yellow-600 text-white">
        <h2 className="text-lg font-semibold">📩 Contact Us</h2>
        <p className="mb-2">Interested in partnering or learning more? Let’s connect!</p>
        <a
          href="mailto:info@hybridgoldsystem.com"
          className="underline font-semibold"
        >
          ✉️ Email Us
        </a>
        <p className="mt-4 text-sm">© 2025 Hybrid Gold System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
