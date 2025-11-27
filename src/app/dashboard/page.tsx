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
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
            Explore Public Markets
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">No stats, no signals. Just a betting market of foolish confidence</p>
        </div>
        <Button variant="outline" size="icon" className="shrink-0 rounded-full h-11 w-11 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all">
            <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Hall of Fame Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50/80 via-white to-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-purple-100/20 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)]">
        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-100/40 to-pink-100/40 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-100/30 to-purple-100/30 blur-3xl" />
        
        <div className="absolute top-6 right-6 z-10">
            <Button variant="ghost" className="rounded-full bg-white/70 hover:bg-white text-xs font-semibold text-purple-900 h-9 px-5 backdrop-blur-md border border-purple-100/50 shadow-sm transition-all hover:shadow-md">
                View Full Leaderboard
            </Button>
        </div>
        
        <div className="p-10 relative z-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30">
                    <Trophy className="h-7 w-7 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Hall of the Unreasonably Lucky</h2>
                    <p className="text-sm font-semibold text-purple-600/70 uppercase tracking-wide mt-0.5 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        Daily Top Winners
                    </p>
                </div>
            </div>
            
            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {mockLeaderboardData.slice(0, 3).map((winner, index) => (
                    <div 
                        key={winner.id} 
                        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${winner.bgAccent} p-6 border border-gray-100/50 shadow-sm hover:shadow-lg transition-all duration-300 group ${
                            index === 0 ? 'md:order-2 md:scale-105 md:z-10' : index === 1 ? 'md:order-1' : 'md:order-3'
                        }`}
                    >
                        {/* Decorative blur */}
                        <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${winner.color} opacity-10 blur-2xl`} />
                        
                        {/* Rank Badge */}
                        <div className="absolute top-4 right-4">
                            <div className={`flex items-center justify-center h-10 w-10 rounded-xl font-bold text-base shadow-lg ${
                                index === 0 
                                    ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white' 
                                    : index === 1 
                                    ? 'bg-gradient-to-br from-slate-300 to-gray-400 text-white' 
                                    : 'bg-gradient-to-br from-orange-500 to-amber-600 text-white'
                            }`}>
                                {index + 1}
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative space-y-4">
                            {/* Avatar */}
                            <div className={`flex items-center justify-center h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br ${winner.color} text-white font-bold text-lg shadow-xl shadow-gray-900/10 group-hover:scale-110 transition-transform duration-300`}>
                                {winner.avatar}
                            </div>
                            
                            {/* Name */}
                            <div className="text-center">
                                <h3 className="text-base font-bold text-gray-900 truncate">{winner.name}</h3>
                                <p className="text-xs text-gray-500 font-medium mt-1">{winner.betsWon} bets won</p>
                            </div>
                            
                            {/* Winnings */}
                            <div className="text-center pt-2 border-t border-gray-200/50">
                                <div className="text-2xl font-mono font-bold text-gray-900">
                                    ${winner.winnings.toLocaleString()}
                                </div>
                                <p className="text-xs text-green-600 font-bold mt-1 flex items-center justify-center gap-1">
                                    <TrendingUp className="h-3 w-3" />
                                    +{Math.round(winner.winnings / 100)}% ROI
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Remaining Winners */}
            <div className="space-y-2.5">
                {mockLeaderboardData.slice(3).map((winner, index) => (
                    <div 
                        key={winner.id} 
                        className="flex items-center gap-5 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100/80 hover:bg-white hover:shadow-md hover:border-gray-200/80 transition-all duration-300 group"
                    >
                        {/* Rank */}
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 font-bold text-base shadow-sm">
                            {index + 4}
                        </div>
                        
                        {/* Avatar */}
                        <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${winner.color} text-white font-bold text-base shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                            {winner.avatar}
                        </div>
                        
                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-gray-900 truncate">{winner.name}</h3>
                            <p className="text-sm text-gray-500 font-medium mt-0.5">{winner.betsWon} bets won today</p>
                        </div>
                        
                        {/* Winnings */}
                        <div className="flex-shrink-0 text-right">
                            <div className="text-xl font-mono font-bold text-gray-900">
                                ${winner.winnings.toLocaleString()}
                            </div>
                            <p className="text-xs text-green-600 font-bold mt-0.5 flex items-center justify-end gap-1">
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
