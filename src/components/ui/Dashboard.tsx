import { Tabs } from "./components/ui/tabs";

export default function Dashboard() {
  const tabData = [
    { label: "📊 Charts", content: <p>Chart goes here</p> },
    { label: "💰 Wallet", content: <p>Wallet details go here</p> },
    { label: "⚡ Transactions", content: <p>Transaction history</p> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Tabs tabs={tabData} />
    </div>
  );
}
