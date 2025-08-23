import React, { useState, useMemo } from "react";
import { Button } from "./components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/Tabs";
import { Input } from "./components/ui/Input";
import { Badge } from "./components/ui/Badge";
import { Progress } from "./components/ui/Progress";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ShieldCheck, Vault, Coins, Wallet } from "lucide-react";

// ------------------- Theme -------------------
const brand = {
  gold: "#D4AF37",
  ink: "#0A1220",
  slate: "#475569",
  border: "#E5E7EB",
  bg: "#FFFFFF",
};

// ------------------- Mock Data -------------------
const supplyData = [
  { t: "Jan", onchain: 50 },
  { t: "Feb", onchain: 120 },
  { t: "Mar", onchain: 220 },
  { t: "Apr", onchain: 300 },
  { t: "May", onchain: 420 },
  { t: "Jun", onchain: 550 },
];

const reserves = [
  { name: "Physical Gold", value: 70 },
  { name: "Stablecoin Liquidity", value: 20 },
  { name: "Crypto Treasury", value: 10 },
];

const COLORS = [brand.gold, "#1E3A8A", "#16A34A"];

// ------------------- Wallet Demo -------------------
function useDemoWallet() {
  const [goldGrams, setGoldGrams] = useState(250);
  const [cryptoUSD, setCryptoUSD] = useState(400);
  const [address] = useState(() =>
    "0x" + Math.random().toString(16).slice(2, 6) + "..." + Math.random().toString(16).slice(2, 6)
  );

  const rateUSDperGram = 75;

  const portfolio = useMemo(() => {
    const goldUSD = goldGrams * rateUSDperGram;
    const totalUSD = goldUSD + cryptoUSD;
    const goldPct = Math.round((goldUSD / Math.max(totalUSD, 1)) * 100);
    return { goldUSD, totalUSD, goldPct };
  }, [goldGrams, cryptoUSD]);

  function mint(amount: number) {
    if (!amount || amount <= 0) return;
    const cost = amount * rateUSDperGram;
    if (cryptoUSD < cost) return alert("Not enough USD liquidity to mint that amount.");
    setCryptoUSD(v => v - cost);
    setGoldGrams(v => v + amount);
  }

  function redeem(amount: number) {
    if (!amount || amount <= 0) return;
    if (goldGrams < amount) return alert("Not enough gold tokens.");
    const proceeds = amount * rateUSDperGram;
    setGoldGrams(v => v - amount);
    setCryptoUSD(v => v + proceeds);
  }

  return { address, goldGrams, cryptoUSD, rateUSDperGram, portfolio, mint, redeem } as const;
}

// ------------------- Main App -------------------
export default function App() {
  const wallet = useDemoWallet();
  const [amount, setAmount] = useState(10);
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-white p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[color:var(--ink)]" style={{ "--ink": brand.ink } as React.CSSProperties}>
          New Gold Standard
        </h1>
      </header>

      <section className="mb-6">
        <Card>
          <CardHeader><CardTitle>Wallet Demo</CardTitle></CardHeader>
          <CardContent>
            <div className="mb-2">Address: {wallet.address}</div>
            <div className="mb-2">Gold: {wallet.goldGrams} g ≈ ${(wallet.goldGrams * wallet.rateUSDperGram).toLocaleString()}</div>
            <div className="mb-2">USD: ${wallet.cryptoUSD.toLocaleString()}</div>
          </CardContent>
          <CardFooter>
            <Input
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mr-2"
            />
            <Button onClick={() => wallet.mint(amount)}>Mint</Button>
            <Button onClick={() => wallet.redeem(amount)}>Redeem</Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <Tabs>
          <TabsList>
            <TabsTrigger value="portfolio" onClick={() => setActiveTab("portfolio")}>Portfolio</TabsTrigger>
            <TabsTrigger value="reserves" onClick={() => setActiveTab("reserves")}>Reserves</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <Card className="mt-4 p-4">
              <h2>Portfolio</h2>
              <Progress value={wallet.portfolio.goldPct} className="h-2 mt-2" />
              <p>{wallet.portfolio.goldPct}% gold • ${wallet.portfolio.totalUSD.toLocaleString()} total USD</p>
            </Card>
          </TabsContent>

          <TabsContent value="reserves">
            <Card className="mt-4 p-4">
              <h2>Reserves</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={reserves} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                    {reserves.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

