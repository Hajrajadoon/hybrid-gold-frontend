import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
      <div className="p-8 bg-white rounded-2xl shadow-2xl text-center max-w-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🌍 Hybrid Gold Blockchain
        </h1>
        <p className="text-gray-700 mb-6">
          A transparent, blockchain-based financial system backed by real gold.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600">
          Demo Transaction
        </button>
      </div>
    </div>
  );
}

export default App;
