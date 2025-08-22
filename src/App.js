import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 drop-shadow-lg">
          🌍 Hybrid Gold Financial System
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          A blockchain-powered, gold-backed financial ecosystem designed to
          replace uncertainty with stability and trust.
        </p>
        <button className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-yellow-600 transition duration-300">
          🚀 Get Started
        </button>
      </header>

      {/* Features Section */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">💰 Gold-Backed</h2>
          <p className="text-gray-600">
            Every token is backed by physical gold, ensuring real value and
            global trust.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🔗 Blockchain</h2>
          <p className="text-gray-600">
            Transparent blockchain technology eliminates fraud and corruption,
            making every transaction secure.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🌐 Global Access</h2>
          <p className="text-gray-600">
            Accessible to anyone, anywhere — bringing financial stability
            without borders.
          </p>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-yellow-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📩 Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Interested in partnering or learning more? Reach out to us today!
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
