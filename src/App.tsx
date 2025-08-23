import React from "react";
import { Button } from "./components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/Tabs";

export default function App() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const tabs = {
    tab1: { label: "Tab 1", content: "Content for Tab 1" },
    tab2: { label: "Tab 2", content: "Content for Tab 2" },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Hybrid Gold Demo</h1>

      <Tabs>
        <TabsList>
          {Object.keys(tabs).map((key) => (
            <TabsTrigger key={key} value={key} onClick={() => setActiveTab(key)}>
              {tabs[key].label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(tabs).map((key) => (
          <TabsContent key={key} value={key}>
            {activeTab === key && (
              <div className="p-4 bg-white rounded-xl shadow-md">{tabs[key].content}</div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Demo Card</CardTitle>
        </CardHeader>
        <CardContent>Some content here.</CardContent>
        <CardFooter>
          <Button>Click Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
