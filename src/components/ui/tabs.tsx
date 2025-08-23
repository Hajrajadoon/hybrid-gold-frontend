import React from "react";

export const Tabs: React.FC<{ defaultValue?: string; children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
export const TabsTrigger: React.FC<{ value: string; children: React.ReactNode }> = ({ children }) => <button>{children}</button>;
export const TabsContent: React.FC<{ value: string; children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

      {/* Tabs Content */}
      <div className="p-4 bg-white rounded-xl shadow-md">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
}
