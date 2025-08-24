import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Input } from "./input";
import { Progress } from "./progress";

type TabKey = "tab1" | "tab2";

const tabs: Record<TabKey, { title: string; content: JSX.Element }> = {
  tab1: { title: "Tab 1", content: <p>Content for Tab 1</p> },
  tab2: { title: "Tab 2", content: <p>Content for Tab 2</p> },
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("tab1");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Tabs */}
      <Tabs>
        <TabsList>
          {(Object.keys(tabs) as TabKey[]).map((tabKey) => (
            <TabsTrigger
              key={tabKey}
              value={tabKey}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabs[tabKey].title}
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(tabs) as TabKey[]).map((tabKey) => (
          <TabsContent key={tabKey} value={tabKey}>
            {tabs[tabKey].content}
          </TabsContent>
        ))}
      </Tabs>

      {/* Example Card */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Example Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
          <Badge>New</Badge>
          <Progress value={50} />
          <Input placeholder="Type something..." />
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
