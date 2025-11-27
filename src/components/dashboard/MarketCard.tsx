"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tag, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface MarketCardProps {
  id: number
  title: string
  category: string
  volume: string
  participants: number
  endingAt: string
  isLive?: boolean
  imageGradient: string
  odds: string
  poolProgress: number
  tags: string[]
}

export function MarketCard({
  id,
  title,
  category,
  volume,
  participants,
  endingAt,
  isLive,
  imageGradient,
  odds,
  poolProgress,
  tags,
}: MarketCardProps) {
  return (
    <Card 
      onClick={() => console.log(`Navigate to market ${id}`)}
      className="group relative overflow-hidden border-none bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] cursor-pointer h-full flex flex-col"
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neutral-50 via-transparent to-transparent" />
      
      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col">
        <CardHeader className="p-6 pb-4 space-y-4">
          {/* Top row: Category badge and Odds */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                {category}
              </span>
              {isLive && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black dark:bg-white px-2.5 py-1 text-[10px] font-semibold text-white dark:text-black uppercase tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white dark:bg-black"></span>
                  </span>
                  LIVE
                </span>
              )}
            </div>
            <div className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <TrendingUp className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span className="text-sm font-semibold text-black dark:text-white">{odds}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold tracking-tight leading-snug text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors line-clamp-2 min-h-[3.5rem]">
            {title}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-1 px-6 pb-6 space-y-5">
          {/* Pool Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Pool</span>
              <span className="text-sm font-semibold text-black dark:text-white">{poolProgress}%</span>
            </div>
            <div className="relative h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-black to-neutral-700 dark:from-white dark:to-neutral-300 transition-all duration-700 group-hover:shadow-lg" 
                style={{ width: `${poolProgress}%` }}
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Volume</span>
              <span className="text-base font-mono font-semibold text-black dark:text-white">{volume}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Users</span>
              <span className="text-base font-mono font-semibold text-black dark:text-white">{participants}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Ends</span>
              <span className="text-base font-mono font-semibold text-black dark:text-white">{endingAt}</span>
            </div>
          </div>
        </CardContent>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-neutral-600 dark:from-white dark:to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Card>
  )
}
