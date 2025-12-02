"use client";

import { useState } from "react";
import { StatsRow } from "@/components/dashboard/StatsRow";
import { VibeMarketCard } from "@/components/dashboard/VibeMarketCard";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles, Trophy, X, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [isReadMeOpen, setIsReadMeOpen] = useState(false);

  // Mock leaderboard data matching screenshot
  const leaderboardData = [
    { 
      rank: 1,
      name: '@lucky_winner', 
      desc: 'pulled a miracle',
      amount: '1250 MP',
      time: 'today',
      medal: '🥇',
      color: 'text-amber-400'
    },
    { 
      rank: 2,
      name: '@fortune_seeker', 
      desc: 'escaped the abyss',
      amount: '980 MP',
      time: 'today',
      medal: '🥈',
      color: 'text-slate-300'
    },
    { 
      rank: 3,
      name: '@chaos_rider', 
      desc: 'blessed by chaos',
      amount: '750 MP',
      time: 'today',
      medal: '🥉',
      color: 'text-amber-700'
    },
  ];

  // Mock Market Data
  const allMarkets = [
    {
        id: 1,
        title: "What's your vibe right now?",
        description: "Pick the one that matches your brain's current state. Trust your gut — your mood might just make you money today.",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop",
        pool: "20 MP",
        bets: 1,
        timeLeft: "9h 0m",
        tag: "Poll-Style"
    },
    {
        id: 2,
        title: "Will Bitcoin hit $100k by Friday?",
        description: "The charts are screaming, but the bears are lurking. Place your bets on the crypto king's next move.",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop",
        pool: "1500 MP",
        bets: 42,
        timeLeft: "2d 4h",
        tag: "Binary"
    },
    {
        id: 3,
        title: "Next Viral Meme Token?",
        description: "Which animal-themed coin is going to the moon next? Doge, Pepe, or something entirely new?",
        image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
        pool: "500 MP",
        bets: 15,
        timeLeft: "12h 30m",
        tag: "Prediction"
    },
    {
        id: 4,
        title: "Who wins the Super Bowl?",
        description: "The playoffs are heating up. Predict the champion and take home the glory (and the MP).",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop",
        pool: "5000 MP",
        bets: 128,
        timeLeft: "5d 10h",
        tag: "Sports"
    },
    {
        id: 5,
        title: "Best Tech Release of 2025?",
        description: "VR headsets, AI glasses, or foldable phones? What gadget will define the year?",
        image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=1000&auto=format&fit=crop",
        pool: "800 MP",
        bets: 30,
        timeLeft: "3d 2h",
        tag: "Tech"
    },
    {
        id: 6,
        title: "Will it rain in London tomorrow?",
        description: "A classic British gamble. Check the forecast, or trust your intuition.",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1000&auto=format&fit=crop",
        pool: "100 MP",
        bets: 8,
        timeLeft: "14h 0m",
        tag: "Weather"
    }
  ];

  const recurringMarkets = [
    {
        id: 101,
        title: "Weekly Crypto Close: Above $60k?",
        description: "A staple for the crypto-curious. Where will the king of coins settle this week?",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop",
        pool: "2500 MP",
        bets: 156,
        timeLeft: "4d 2h",
        tag: "Crypto"
    },
    {
        id: 102,
        title: "Top Billboard 100 Song",
        description: "Predict which track will top the charts this week. Pop culture knowledge pays off.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
        pool: "1200 MP",
        bets: 89,
        timeLeft: "2d 12h",
        tag: "Music"
    },
    {
        id: 103,
        title: "Monday Night Football Winner",
        description: "The weekly gridiron clash. Pick the winner and claim your bragging rights.",
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1000&auto=format&fit=crop",
        pool: "3000 MP",
        bets: 210,
        timeLeft: "6d 5h",
        tag: "Sports"
    }
  ];

  const oneTimeMarkets = [
    {
        id: 201,
        title: "Oscars 2025: Best Picture",
        description: "The biggest night in Hollywood. Who takes home the golden statue?",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
        pool: "10000 MP",
        bets: 542,
        timeLeft: "14d 8h",
        tag: "Entertainment"
    },
    {
        id: 202,
        title: "SpaceX Mars Landing Date",
        description: "Will they make it by the target date? A long-term bet for the visionaries.",
        image: "https://images.unsplash.com/photo-1614728853913-1e32005e307a?q=80&w=1000&auto=format&fit=crop",
        pool: "50000 MP",
        bets: 1205,
        timeLeft: "365d",
        tag: "Space"
    },
    {
        id: 203,
        title: "Next James Bond Actor",
        description: "The rumors are swirling. Who will don the tuxedo next?",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000&auto=format&fit=crop",
        pool: "4500 MP",
        bets: 320,
        timeLeft: "30d",
        tag: "Movies"
    }
  ];

  const [activeTab, setActiveTab] = useState("All Markets");
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const getActiveMarkets = () => {
    switch (activeTab) {
        case "Recurring Weekly Markets":
            return recurringMarkets;
        case "One-Time Markets":
            return oneTimeMarkets;
        default:
            return allMarkets;
    }
  };

  const activeMarkets = getActiveMarkets();
  const totalPages = Math.ceil(activeMarkets.length / ITEMS_PER_PAGE);
  
  const currentMarkets = activeMarkets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-normal tracking-tight text-black">
            Welcome, <span className="font-semibold">@zanyfool</span>
          </h1>
          <p className="mt-2 text-neutral-500">No stats, no signals. Just a betting market of foolish confidence</p>
        </div>
        <div className="flex items-center gap-2">
            <Button 
                onClick={() => setIsWheelOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-6 shadow-md transition-all hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
                <Sparkles className="w-4 h-4" />
                Spin the Wheel
            </Button>
            <Button variant="outline" size="icon" className="rounded-lg border-neutral-200 cursor-pointer">
                <RefreshCw className="h-4 w-4 text-neutral-500" />
            </Button>
        </div>
      </div>

      {/* Stats Row */}
      <StatsRow />

      {/* Hall of the Unreasonably Lucky (Light/Neumorphic Theme) */}
      <DashboardCard className="p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-50 rounded-xl border border-neutral-100">
                    <Trophy className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-lg font-semibold text-black">Hall of the Unreasonably Lucky</h2>
            </div>
            <button className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors cursor-pointer">
                View Full
            </button>
        </div>

        {/* Visual Separator - Top Performers */}
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Top Performers</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
        </div>

        <div className="space-y-2">
            {leaderboardData.map((user) => (
                <div key={user.name} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 transition-colors group cursor-pointer border border-transparent hover:border-neutral-100">
                    <div className="flex items-center gap-5">
                        <div className="text-2xl filter drop-shadow-sm">{user.medal}</div>
                        <div>
                            <div className="font-semibold text-black group-hover:text-neutral-700 transition-colors">{user.name}</div>
                            <div className="text-xs text-neutral-400 font-medium italic">{user.desc}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-semibold text-black flex items-center gap-1 justify-end font-mono">
                            <span className="text-green-500 text-xs">↗</span> {user.amount}
                        </div>
                        <div className="text-xs text-neutral-400 font-medium">{user.time}</div>
                    </div>
                </div>
            ))}
        </div>
      </DashboardCard>

      {/* Markets Section */}
      <div className="space-y-6">
        {/* Visual Separator - Active Markets */}
        <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Active Markets</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <div className="flex gap-8">
                {["All Markets", "Recurring Weekly Markets", "One-Time Markets"].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setCurrentPage(1);
                        }}
                        className={`pb-3 text-sm font-semibold transition-colors relative cursor-pointer ${activeTab === tab ? "text-black" : "text-neutral-500 hover:text-black"}`}
                    >
                        {tab}
                        {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full" />}
                    </button>
                ))}
            </div>
            <button 
                onClick={() => setIsReadMeOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-black transition-colors cursor-pointer"
            >
                <HelpCircle className="w-4 h-4" />
                Read Me
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMarkets.map((market) => (
                <VibeMarketCard 
                    key={market.id}
                    title={market.title}
                    description={market.description}
                    image={market.image}
                    pool={market.pool}
                    bets={market.bets}
                    timeLeft={market.timeLeft}
                    tag={market.tag}
                />
            ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 mt-20">
            <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
                Previous
            </button>
            <span className="text-sm font-medium text-neutral-600">
                Page {currentPage} of {totalPages}
            </span>
            <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
                Next
            </button>
        </div>
      </div>

      {/* Spin the Wheel Modal */}
      <AnimatePresence>
        {isWheelOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden"
                >
                    <div className="p-8 text-center relative">
                        <button 
                            onClick={() => setIsWheelOpen(false)}
                            className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-2xl font-semibold text-black mb-2">Wheel of Delusion</h3>
                        <p className="text-sm text-neutral-500 mb-8 font-medium">Spin to win MP!</p>

                        {/* Wheel Graphic Placeholder */}
                        <div className="relative w-64 h-64 mx-auto mb-8 rounded-full border-4 border-neutral-100 flex items-center justify-center bg-neutral-50 shadow-inner">
                             {/* Simple CSS Wheel Representation */}
                             <div className="absolute inset-0 rounded-full border-[16px] border-blue-500/10 border-t-black border-r-neutral-300 border-b-neutral-200 border-l-neutral-400 animate-spin duration-[3s]" style={{ animationDuration: '10s' }} />
                             <div className="text-black font-semibold text-lg tracking-widest">SPIN</div>
                             <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-black">▼</div>
                        </div>

                        <Button className="w-full bg-black hover:bg-neutral-800 text-white font-semibold py-6 text-lg shadow-lg rounded-xl cursor-pointer">
                            Spin the Wheel
                        </Button>

                        <p className="text-xs text-neutral-400 mt-6 font-medium">One free spin per day. Rewards: 0-1000 MP</p>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      {/* Read Me Modal */}
      <AnimatePresence>
        {isReadMeOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-neutral-900">How Moltaire Works</h3>
                            <button 
                                onClick={() => setIsReadMeOpen(false)}
                                className="text-neutral-400 hover:text-black transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
                            <p>
                                Moltaire runs on a simple idea: the majority is usually right—but not always rewarded equally.
                            </p>
                            <p>
                                When a market settles, everyone who picked the correct outcome splits the prize pool. The twist?
                            </p>
                            <ul className="list-disc pl-5 space-y-2 my-4">
                                <li>The smaller the correct group is, the bigger your payout.</li>
                                <li>The bigger the correct group is, the smaller your slice.</li>
                            </ul>
                            <p>
                                Sometimes the smartest choice is obvious. Sometimes it's contrarian.
                            </p>
                            <p className="font-semibold text-neutral-900 pt-2">
                                Either way—your payout depends entirely on how many people join you.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}

