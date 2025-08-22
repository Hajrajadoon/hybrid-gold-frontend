import React, { useState } from "react";

export function Tabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 -mb-px border-b-2 font-semibold transition ${
              activeTab === index
                ? "border-yellow-600 text-yellow-600"
                : "border-transparent text-gray-600 hover:text-yellow-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-4 bg-white rounded-xl shadow-md">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
}
