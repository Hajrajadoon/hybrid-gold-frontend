import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ShieldCheck, Vault, Coins, Wallet, Link2, Globe2, Activity, LockKeyhole, Cpu, Network, Scale, CheckCircle2 } from "lucide-react";

// ---------------------------------------------
// Theme (White + Gold)
// ---------------------------------------------
const brand = {
  gold: "#D4AF37", // rich metallic gold
  goldSoft: "#F6E27F",
  ink: "#0A1220",
  slate: "#475569",
  border: "#E5E7EB",
  bg: "#FFFFFF",
};

// Mock data
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

const COLORS = [brand.gold, "#1E3A8A", "#16A34A"]; // Pie slices (gold + blue + green)

// Decorative blockchain background (inline SVG)
const ChainBG = () => (
  <svg className="absolute inset-0 w-full h-full" aria-hidden>
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#EAEAEA" strokeWidth="1" />
      </pattern>
      <radialGradient id="goldGlow" cx="50%" cy="20%" r="80%">
        <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.9" />
        <stop offset="60%" stopColor="#FFF3C4" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#goldGlow)" />
    {/* chain links */}
    <g opacity="0.2" stroke="#D4AF37" fill="none">
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={40 + i * 140} y={40 + (i % 2) * 80} rx="12" ry="12" width="110" height="36" />
      ))}
    </g>
  </svg>
);

const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
  <div>
    <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--ink)] flex items-center gap-2" style={{"--ink": brand.ink} as React.CSSProperties}>
      <Icon className="w-6 h-6" color={brand.gold} /> {title}
    </h2>
    {subtitle && <p className="mt-2 text-[color:var(--slate)] max-w-3xl" style={{"--slate": brand.slate} as React.CSSProperties}>{subtitle}</p>}
  </div>
);

// ---------------------------------------------
// Wallet demo logic (local state only)
// ---------------------------------------------
function useDemoWallet() {
  const [goldGrams, setGoldGrams] = useState(250); // tokenized gold units
  const [cryptoUSD, setCryptoUSD] = useState(400); // stablecoin balance
  const [address] = useState(() =>
    "0x" + Math.random().toString(16).slice(2, 6) + "..." + Math.random().toString(16).slice(2, 6)
  );

  const rateUSDperGram = 75; // demo conversion

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
    setCryptoUSD((v) => v - cost);
    setGoldGrams((v) => v + amount);
  }

  function redeem(amount: number) {
    if (!amount || amount <= 0) return;
    if (goldGrams < amount) return alert("Not enough gold tokens.");
    const proceeds = amount * rateUSDperGram;
    setGoldGrams((v) => v - amount);
    setCryptoUSD((v) => v + proceeds);
  }

  return { address, goldGrams, cryptoUSD, rateUSDperGram, portfolio, mint, redeem } as const;
}

// ---------------------------------------------
// Main App (White + Gold, solution-driven)
// ---------------------------------------------
export default function App() {
  const wallet = useDemoWallet();
  const [amount, setAmount] = useState(10);

  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.bg }}>
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b" style={{ borderColor: brand.border }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFF2B3" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="28" fill="url(#g)" stroke="#D4AF37" strokeWidth="2" />
              <path d="M20 34c0-6 5-10 12-10s12 4 12 10-5 10-12 10-12-4-12-10zm6 0c0 3 3 6 6 6s6-3 6-6-3-6-6-6-6 3-6 6z" fill={brand.ink} opacity="0.7" />
            </svg>
            <span className="font-semibold tracking-tight" style={{ color: brand.ink }}>New Gold Standard</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: brand.slate }}>
            <a href="#mission" className="hover:text-black">Mission</a>
            <a href="#solution" className="hover:text-black">Solution</a>
            <a href="#token" className="hover:text-black">Token</a>
            <a href="#wallet" className="hover:text-black">Wallet</a>
            <a href="#hybrid" className="hover:text-black">Hybrid</a>
          </nav>
          <Button className="text-black" style={{ backgroundColor: brand.gold }}>Pitch Demo</Button>
        </div>
      </header>

      {/* HERO MISSION */}
      <section id="mission" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ChainBG />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: brand.ink }}>
                The New Gold Standard
              </motion.h1>
              <p className="mt-3 max-w-prose" style={{ color: brand.slate }}>
                A transparent, blockchain‑based gold financial system providing secure, efficient finance for individuals and businesses — powered by insured vault reserves and on‑chain proof‑of‑reserves.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge className="bg-white border" style={{ borderColor: brand.border, color: brand.ink }}>Proof‑of‑Reserves</Badge>
                <Badge className="bg-white border" style={{ borderColor: brand.border, color: brand.ink }}>Regulatory‑Compliant</Badge>
                <Badge className="bg-white border" style={{ borderColor: brand.border, color: brand.ink }}>24/7 Liquidity</Badge>
                <Badge className="bg-white border" style={{ borderColor: brand.border, color: brand.ink }}>1 Token = 1 Gram</Badge>
              </div>
              <div className="mt-6 flex gap-3">
                <Button className="text-black" style={{ backgroundColor: brand.gold }}>Get Early Access</Button>
                <Button variant="outline" className="border" style={{ borderColor: brand.border, color: brand.ink }}>Read Litepaper</Button>
              </div>
            </div>
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: brand.ink }}><ShieldCheck className="w-5 h-5" color={brand.gold}/> Mission in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <ResponsiveContainer width="100%" height={180}>
                      <AreaChart data={supplyData} margin={{ top: 8, right: 12, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor={brand.gold} stopOpacity={0.6} />
                            <stop offset="100%" stopColor={brand.gold} stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="t" stroke={brand.slate} />
                        <YAxis stroke={brand.slate} />
                        <Tooltip contentStyle={{ background: "#ffffff", border: `1px solid ${brand.border}`, color: brand.ink }} />
                        <Area type="monotone" dataKey="onchain" stroke={brand.gold} fill="url(#a)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between"><span className="text-slate-600">Vaulted Gold</span><span className="font-medium text-slate-900">1,000 kg</span></div>
                    <Progress value={72} className="h-2" />
                    <div className="text-xs text-slate-600 flex items-center gap-1"><LockKeyhole className="w-4 h-4" color={brand.gold}/> Insured: Brinks, Loomis</div>
                    <div className="text-xs text-slate-600 flex items-center gap-1"><Activity className="w-4 h-4" color={brand.gold}/> Last attestation: 24h</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SOLUTION (exactly reflects your solution slide) */}
      <section id="solution" className="max-w-7xl mx-auto px-4 py-12">
        <SectionTitle icon={ShieldCheck} title="Solution Overview" subtitle="Tokenized gold system backed by physical, insured vault reserves. Blockchain + Proof‑of‑Reserves for transparency. Instant settlement, 24/7 liquidity, global access. Regulatory‑compliant and auditable. 1 token = 1 gram." />
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Vault className="w-5 h-5" color={brand.gold}/> Physically Backed</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">Insured vault reserves of real gold. Partners: Brinks, Loomis.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><ShieldCheck className="w-5 h-5" color={brand.gold}/> Proof‑of‑Reserves</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">On‑chain attestations, public APIs, auditor‑friendly records.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Globe2 className="w-5 h-5" color={brand.gold}/> Global & 24/7</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">Instant settlement, deep liquidity, worldwide access.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Scale className="w-5 h-5" color={brand.gold}/> Compliance</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">Regulatory‑compliant, auditable operations and reporting.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Coins className="w-5 h-5" color={brand.gold}/> Gold‑Backed Token</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">1 token = 1 gram of vaulted gold. Redeemable and fully reserved.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Wallet className="w-5 h-5" color={brand.gold}/> Investor Dashboard</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">Buy, sell, redeem, and view reserves in real‑time.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Link2 className="w-5 h-5" color={brand.gold}/> APIs</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">Integrations for banks, fintechs, and exchanges.</CardContent>
          </Card>
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Activity className="w-5 h-5" color={brand.gold}/> Future</CardTitle></CardHeader>
            <CardContent className="pt-0 text-sm text-slate-700">Payments, lending, derivatives roadmap.</CardContent>
          </Card>
        </div>
      </section>

      {/* TOKEN SYSTEM */}
      <section id="token" className="max-w-7xl mx-auto px-4 py-12">
        <SectionTitle icon={Coins} title="Gold‑Backed Token & Reserves" subtitle="Transparent mix of reserves and on‑chain supply." />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base" style={{ color: brand.ink }}>Reserve Composition</CardTitle></CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={reserves} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
                    {reserves.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#ffffff", border: `1px solid ${brand.border}`, color: brand.ink }} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter className="justify-center gap-3 text-xs text-slate-700">
              <span className="px-2 py-1 rounded-full border" style={{ borderColor: brand.border }}>Fully Reserved</span>
              <span className="px-2 py-1 rounded-full border" style={{ borderColor: brand.border }}>Redeemable</span>
              <span className="px-2 py-1 rounded-full border" style={{ borderColor: brand.border }}>Auditable</span>
            </CardFooter>
          </Card>

          <Card className="bg-white border">
            <CardHeader className="pb-2"><CardTitle className="text-base" style={{ color: brand.ink }}>Mint / Redeem (Demo)</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-slate-700">Rate: 1 g ≈ ${wallet.rateUSDperGram} USD</div>
              <div className="flex gap-2">
                <Input type="number" min={0} value={amount} onChange={(e)=>setAmount(parseFloat(e.target.value))} className="bg-white border" style={{ borderColor: brand.border }} />
                <Button className="text-black" style={{ backgroundColor: brand.gold }} onClick={()=>wallet.mint(amount)}>Mint</Button>
                <Button variant="outline" className="border" style={{ borderColor: brand.border, color: brand.ink }} onClick={()=>wallet.redeem(amount)}>Redeem</Button>
              </div>
              <p className="text-xs text-slate-600">Demo only. No real blockchain calls.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WALLET (hybrid) */}
      <section id="wallet" className="max-w-7xl mx-auto px-4 py-12">
        <SectionTitle icon={Wallet} title="Wallet (Hybrid: Gold + Crypto)" subtitle="Hold tokenized gold and stablecoins in a single UX." />

        <Tabs defaultValue="portfolio" className="mt-4">
          <TabsList>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="reserves">Reserves</TabsTrigger>
          </TabsList>
          <TabsContent value="portfolio" className="mt-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white border">
                <CardHeader className="pb-2"><CardTitle className="text-base" style={{ color: brand.ink }}>Address</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-lg font-mono text-slate-800">{wallet.address}</div>
                  <div className="mt-2 text-sm text-slate-600">Network: Permissioned core + public proofs</div>
                </CardContent>
              </Card>
              <Card className="bg-white border">
                <CardHeader className="pb-2"><CardTitle className="text-base" style={{ color: brand.ink }}>Gold Balance</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold text-slate-900">{wallet.goldGrams.toLocaleString()} g</div>
                  <div className="text-sm text-slate-600">≈ ${(wallet.goldGrams * wallet.rateUSDperGram).toLocaleString()} USD</div>
                </CardContent>
              </Card>
              <Card className="bg-white border">
                <CardHeader className="pb-2"><CardTitle className="text-base" style={{ color: brand.ink }}>Crypto Balance</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold text-slate-900">${wallet.cryptoUSD.toLocaleString()}</div>
                  <div className="text-sm text-slate-600">Stablecoin liquidity</div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4">
              <div className="text-sm text-slate-700">Portfolio: {wallet.portfolio.goldPct}% gold • ${(wallet.portfolio.totalUSD).toLocaleString()} total USD</div>
              <Progress value={wallet.portfolio.goldPct} className="h-2 mt-2" />
            </div>
          </TabsContent>
          <TabsContent value="reserves" className="mt-4">
            <Card className="bg-white border">
              <CardHeader className="pb-2"><CardTitle className="text-base" style={{ color: brand.ink }}>Proof of Reserves (Concept)</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <div className="flex items-center justify-between"><span>On‑chain supply</span><span className="font-medium">1,000,000 g</span></div>
                <div className="flex items-center justify-between"><span>Vaulted gold</span><span className="font-medium">1,001,200 g</span></div>
                <div className="flex items-center gap-2 text-emerald-600"><CheckCircle2 className="w-4 h-4"/> Surplus collateral</div>
                <div className="flex items-center justify-between"><span>Attestation</span><span className="font-medium">24h cadence</span></div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* HYBRID SYSTEM */}
      <section id="hybrid" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* subtle chain motif */}
          <ChainBG />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <SectionTitle icon={Globe2} title="Hybrid: Gold × Blockchain × Crypto" subtitle="A reserve‑backed system blending physical gold custody, compliance‑aware blockchain infrastructure, and crypto‑native liquidity rails." />
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Card className="bg-white border">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Vault className="w-5 h-5" color={brand.gold}/> Physical Layer</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700">Insured vaults hold allocated gold; attestations published on‑chain.</CardContent>
            </Card>
            <Card className="bg-white border">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><ShieldCheck className="w-5 h-5" color={brand.gold}/> Chain Layer</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700">Compliance‑aware core with public proofs for transparency and audits.</CardContent>
            </Card>
            <Card className="bg-white border">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2" style={{ color: brand.ink }}><Coins className="w-5 h-5" color={brand.gold}/> Crypto Liquidity</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700">Stablecoin rails & exchange integrations enable 24/7 global access.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-2xl border bg-white p-8 text-center shadow-sm" style={{ borderColor: brand.border }}>
          <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: brand.ink }}>Ready to set a new gold standard?</h3>
          <p className="mt-2 text-slate-700">Use this live demo to showcase the mission, solution, token, wallet, and hybrid architecture.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button className="text-black" style={{ backgroundColor: brand.gold }}>Request Demo</Button>
            <Button variant="outline" className="border" style={{ borderColor: brand.border, color: brand.ink }}>Contact</Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-6 text-center text-xs" style={{ borderColor: brand.border, color: brand.slate }}>
        © {new Date().getFullYear()} New Gold Standard • For demo use only
      </footer>
    </div>
  );
}
