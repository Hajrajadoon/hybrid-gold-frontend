import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./components/ui/card";
import Dashboard from "./components/ui/dashboard"; // Correct import path

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Hybrid Gold Demo</h1>

      {/* Dashboard Component */}
      <Dashboard />

      {/* Example Card outside Dashboard */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Demo Card</CardTitle>
        </CardHeader>
        <CardContent>
          Some content here.
        </CardContent>
        <CardFooter>
          <Button>Click Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
