import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col font-sans">
      
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 drop-shadow-lg">
          🌍 The Hybrid Gold Standard
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          A transparent, blockchain-based financial system backed by real gold — 
          combining stability with innovation.
        </p>
        <button className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-yellow-600 transition duration-300">
          🚀 Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">💰 Gold-Backed</h2>
          <p className="text-gray-600">
            Every token is physically backed by gold, ensuring real value and
            long-term stability.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🔗 Blockchain Transparency</h2>
          <p className="text-gray-600">
            All transactions are secured and publicly verifiable on the
            blockchain.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🌐 Global Access</h2>
          <p className="text-gray-600">
            Accessible to anyone, anywhere — a financial system without borders.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-yellow-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">📈 Roadmap</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-yellow-600">Phase 1: Tokenization</h3>
            <p className="text-gray-600">
              Launch gold-backed tokens secured on blockchain.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-yellow-600">Phase 2: Global Adoption</h3>
            <p className="text-gray-600">
              Enable cross-border transactions and merchant adoption worldwide.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-yellow-600">Phase 3: Banking Integration</h3>
            <p className="text-gray-600">
              Connect with banks & governments for mainstream use.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">⚙️ How It Works</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">1️⃣ Gold Reserves</h3>
            <p className="text-gray-600">Physical gold is securely stored and audited.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">2️⃣ Token Issuance</h3>
            <p className="text-gray-600">Digital tokens are created on blockchain, fully backed by gold.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">3️⃣ Global Use</h3>
            <p className="text-gray-600">People can trade, save, and pay using hybrid gold tokens.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-yellow-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📩 Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Interested in partnering or learning more? Let’s connect!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition duration-300"
        >
          ✉️ Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-8 py-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Hybrid Gold System. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
