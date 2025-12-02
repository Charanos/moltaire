"use client";

import { Info } from "lucide-react";
import { DashboardCard } from "./DashboardCard";

const stats = [
  { label: "Total Bets", value: "3", icon: "target" },
  { label: "Points Balance", value: "1659 MP", icon: "trophy", info: true },
  { label: "Today's Earnings", value: "+0 MP", icon: "zap", info: true },
  { label: "Rank", value: "#2", icon: "medal", info: true },
  { label: "Win Rate", value: "0%", icon: "percent" },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <DashboardCard key={stat.label}>
          <div className="flex items-center gap-2 mb-3">
            {/* Icons based on label */}
            {stat.icon === "target" && (
                <div className="p-1 rounded-full border border-black/10">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
            )}
            {stat.icon === "trophy" && <div className="text-black"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>}
            {stat.icon === "zap" && <div className="text-black"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>}
            {stat.icon === "medal" && <div className="text-black"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>}
            {stat.icon === "percent" && <div className="text-black"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg></div>}

            <span className="text-xs font-semibold text-neutral-500">{stat.label}</span>
            {stat.info && <Info className="w-3 h-3 text-neutral-400 ml-auto" />}
          </div>
          
          <div className="text-2xl font-semibold tracking-tight text-black font-mono">
            {stat.value}
          </div>
        </DashboardCard>
      ))}
    </div>
  );
}
