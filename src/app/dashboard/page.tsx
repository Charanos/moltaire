import { Card, CardContent } from "@/components/ui/card"
import { mockUser, mockLeaderboard } from "@/lib/mockData"
import { Award, RefreshCw, Trophy, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarketsFeed } from "@/components/dashboard/MarketsFeed"

export default async function DashboardPage() {
  const user = mockUser

  // Mock leaderboard data
  const mockLeaderboardData = [
    { 
      id: 1, 
      name: 'ShadowTrader', 
      winnings: 12450, 
      betsWon: 8, 
      avatar: 'ST',
      color: 'from-amber-500 to-yellow-600',
      bgAccent: 'from-amber-50 to-yellow-50'
    },
    { 
      id: 2, 
      name: 'LuckyDuck88', 
      winnings: 9850, 
      betsWon: 6, 
      avatar: 'LD',
      color: 'from-slate-400 to-gray-500',
      bgAccent: 'from-slate-50 to-gray-50'
    },
    { 
      id: 3, 
      name: 'TheBetMaster', 
      winnings: 8200, 
      betsWon: 5, 
      avatar: 'BM',
      color: 'from-orange-500 to-amber-600',
      bgAccent: 'from-orange-50 to-amber-50'
    },
    { 
      id: 4, 
      name: 'CryptoWhale', 
      winnings: 6750, 
      betsWon: 4, 
      avatar: 'CW',
      color: 'from-blue-500 to-indigo-600',
      bgAccent: 'from-blue-50 to-indigo-50'
    },
    { 
      id: 5, 
      name: 'RiskTaker', 
      winnings: 5300, 
      betsWon: 4, 
      avatar: 'RT',
      color: 'from-purple-500 to-violet-600',
      bgAccent: 'from-purple-50 to-violet-50'
    },
  ]

  return (
    <div className="space-y-10 pb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Explore Public Markets
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">No stats, no signals. Just a betting market of foolish confidence</p>
        </div>
        <Button variant="outline" size="icon" className="shrink-0 rounded-full h-11 w-11 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all">
            <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Hall of Fame Banner - Premium Style */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-zinc-50 shadow-[0_18px_50px_rgb(15,23,42,0.06)] border border-zinc-100/60 transition-all duration-500">
        {/* Subtle gold shimmer */}
        <div className="absolute -right-28 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-amber-100/30 to-transparent blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-56 w-56 rounded-full bg-gradient-to-tr from-slate-50/40 to-transparent blur-3xl" />

        <div className="absolute top-6 right-6 z-10">
            <Button variant="ghost" className="rounded-full bg-white/80 hover:bg-white text-xs font-semibold text-zinc-900 h-10 px-4 backdrop-blur-md border border-zinc-100 shadow-sm transition-all hover:shadow-md">
                View Full Leaderboard
            </Button>
        </div>

        <div className="p-10 relative z-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
    
                <div>
                    <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">Hall of the Unreasonably Lucky</h2>
                    <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-0.5 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-400" />
                        Daily Top Winners
                    </p>
                </div>
            </div>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-end">
                {mockLeaderboardData.slice(0, 3).map((winner, index) => (
                    <div 
                        key={winner.id} 
                        className={`relative overflow-hidden rounded-2xl bg-white p-6 border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-300 ${
                            index === 0 ? 'md:order-2 md:scale-105 md:z-10' : index === 1 ? 'md:order-1' : 'md:order-3'
                        }`}
                    >
                        {/* Accent stripe */}
                        <div className={`absolute left-0 top-0 h-1 w-full ${
                            index === 0 ? 'bg-gradient-to-r from-amber-400 to-amber-500' : index === 1 ? 'bg-gradient-to-r from-slate-300 to-gray-400' : 'bg-gradient-to-r from-orange-400 to-orange-500'
                        }`} />

                        {/* Rank Badge */}
                        <div className="absolute top-4 right-4">
                            <div className={`flex items-center justify-center h-10 w-10 rounded-full font-semibold text-sm shadow-md ${
                                index === 0 
                                    ? 'bg-amber-500 text-white ring-2 ring-amber-100' 
                                    : index === 1 
                                    ? 'bg-zinc-200 text-zinc-800 ring-2 ring-zinc-50' 
                                    : 'bg-orange-500 text-white ring-2 ring-orange-100'
                            }`}>
                                {index + 1}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative space-y-4 flex flex-col items-center">
                            {/* Avatar - circular premium */}
                            <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br ${winner.color} text-white font-semibold text-lg shadow-xl ring-1 ring-zinc-50`}> 
                                {winner.avatar}
                            </div>

                            {/* Name */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-zinc-900 truncate">{winner.name}</h3>
                                <p className="text-sm text-zinc-500 mt-1">{winner.betsWon} bets won</p>
                            </div>

                            {/* Winnings */}
                            <div className="text-center pt-3">
                                <div className="text-2xl font-mono font-semibold text-zinc-900">
                                    ${winner.winnings.toLocaleString()}
                                </div>
                                <p className="text-sm text-emerald-600 font-medium mt-1 flex items-center justify-center gap-2">
                                    <TrendingUp className="h-4 w-4" />
                                    +{Math.round(winner.winnings / 100)}% ROI
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Remaining Winners */}
            <div className="space-y-3">
                {mockLeaderboardData.slice(3).map((winner, index) => (
                    <div 
                        key={winner.id} 
                        className="flex items-center gap-5 p-4 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        {/* Rank */}
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 text-zinc-800 font-semibold text-sm">
                            {index + 4}
                        </div>

                        {/* Avatar */}
                        <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br ${winner.color} text-white font-semibold text-sm shadow-md`}> 
                            {winner.avatar}
                        </div>

                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-zinc-900 truncate">{winner.name}</h3>
                            <p className="text-xs text-zinc-500 mt-0.5">{winner.betsWon} bets won today</p>
                        </div>

                        {/* Winnings */}
                        <div className="flex-shrink-0 text-right">
                            <div className="text-lg font-mono font-semibold text-zinc-900">
                                ${winner.winnings.toLocaleString()}
                            </div>
                            <p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center justify-end gap-1">
                                <TrendingUp className="h-3 w-3" />
                                +{Math.round(winner.winnings / 100)}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <MarketsFeed />
    </div>
  )
}
