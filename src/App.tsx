// src/App.tsx
import React from "react";
import {
  ArrowRight,
  BarChart,
  Lock,
  Globe,
  Wallet,
  LineChart,
  Shield,
} from "lucide-react";

// ✅ Brand colors
const brand = {
  gold: "#FFD700",
  ink: "#1A1A1A",
  slate: "#4B5563",
};

// ✅ SectionTitle component
const SectionTitle = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle?: string;
}) => (
  <div>
    <h2
      className="text-2xl md:text-3xl font-semibold text-[color:var(--ink)] flex items-center gap-2"
      style={{ "--ink": brand.ink } as React.CSSProperties}
    >
      <Icon className="w-6 h-6" color={brand.gold} /> {title}
    </h2>
    {subtitle && (
      <p
        className="mt-2 text-[color:var(--slate)] max-w-3xl"
        style={{ "--slate": brand.slate } as React.CSSProperties}
      >
        {subtitle}
      </p>
    )}
  </div>
);

// ✅ Main App Component
function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-yellow-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-600">
          The Hybrid Gold Standard
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A transparent, blockchain-based financial system backed by real gold —
          combining stability with innovation.
        </p>

        {/* 🚀 Get Started Button */}
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="bg-white text-yellow-600 px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition flex items-center mx-auto mt-6"
        >
          🚀 Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-10 py-20 px-6 bg-gray-50">
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <SectionTitle
            icon={Shield}
            title="Gold-Backed"
            subtitle="Every token is physically backed by gold, ensuring real value and long-term stability."
          />
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <SectionTitle
            icon={Lock}
            title="Blockchain Transparency"
            subtitle="All transactions are secured and publicly verifiable on the blockchain."
          />
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <SectionTitle
            icon={Globe}
            title="Global Access"
            subtitle="Accessible to anyone, anywhere — a financial system without borders."
          />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-6">
        <SectionTitle
          icon={BarChart}
          title="Roadmap"
          subtitle="Our journey towards a secure, transparent, and gold-backed financial future."
        />
        <ul className="mt-6 space-y-4 text-gray-700 max-w-2xl mx-auto">
          <li>✅ Phase 1: Token Development & Gold Integration</li>
          <li>✅ Phase 2: Blockchain Security Implementation</li>
          <li>🚧 Phase 3: Wallet & Exchange Launch</li>
          <li>🔮 Phase 4: Global Partnerships & Expansion</li>
        </ul>
      </section>

      {/* Charts & Wallet Section */}
      <section className="py-20 px-6 bg-gray-100">
        <SectionTitle
          icon={LineChart}
          title="Financial Insights"
          subtitle="Interactive graphs and charts showing blockchain-gold market performance."
        />
        <div className="mt-6 h-64 bg-white shadow rounded-2xl flex items-center justify-center">
          📊 [Insert Graph/Chart Here]
        </div>

        <SectionTitle
          icon={Wallet}
          title="Wallet Access"
          subtitle="Securely manage your gold-backed tokens with our wallet system."
        />
        <div className="mt-6 h-48 bg-white shadow rounded-2xl flex items-center justify-center">
          🔐 [Wallet UI Placeholder]
        </div>
      </section>
    </div>
  );
}

export default App;
