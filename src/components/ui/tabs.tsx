import React, { useState } from "react";

// ---------------------------------------------
// Tabs primitives
// ---------------------------------------------
export const Tabs: React.FC<{ defaultValue?: string; children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

export const TabsTrigger: React.FC<{ value: string; activeTab: string; setActiveTab: (tab: string) => void; children: React.ReactNode }> = ({ value, activeTab, setActiveTab, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl ${activeTab === value ? "bg-yellow-600 text-white" : "bg-gray-200 text-gray-800"} font-semibold`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<{ value: string; activeTab: string; children: React.ReactNode }> = ({ value, activeTab, children }) => {
  if (value !== activeTab) return null;
  return <div className="p-4 bg-white rounded-xl shadow-md">{children}</div>;
};

// ---------------------------------------------
// Example Tabs component wrapper
// ---------------------------------------------
export const DemoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  const tabs = {
    portfolio: { content: <div>Portfolio content goes here</div> },
    reserves: { content: <div>Reserves content goes here</div> },
  };

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="portfolio" activeTab={activeTab} setActiveTab={setActiveTab}>
          Portfolio
        </TabsTrigger>
        <TabsTrigger value="reserves" activeTab={activeTab} setActiveTab={setActiveTab}>
          Reserves
        </TabsTrigger>
      </TabsList>

      <TabsContent value="portfolio" activeTab={activeTab}>
        {tabs.portfolio.content}
      </TabsContent>
      <TabsContent value="reserves" activeTab={activeTab}>
        {tabs.reserves.content}
      </TabsContent>
    </Tabs>
  );
};
