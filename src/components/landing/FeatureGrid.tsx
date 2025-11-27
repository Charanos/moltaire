"use client";

import { motion } from "framer-motion";
import { Trophy, Wallet, Users, BarChart3, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Public Betting Markets",
    description:
      "Create and join poll-style prediction markets. You set the odds, you run the market.",
    icon: BarChart3,
    className: "md:col-span-2",
    gradient: "from-neutral-100 to-neutral-200",
  },
  {
    title: "Virtual Currency",
    description:
      "All the thrill, none of the risk. Bet with Moltaire Points (MP).",
    icon: Wallet,
    className: "md:col-span-1",
    gradient: "from-neutral-200 to-neutral-100",
  },
  {
    title: "Daily Leaderboards",
    description:
      "Join the Hall of the Unreasonably Lucky. Compete for top ranks.",
    icon: Trophy,
    className: "md:col-span-1",
    gradient: "from-neutral-100 to-neutral-200",
  },
  {
    title: "Community Driven",
    description: "A social platform where reputation is everything.",
    icon: Users,
    className: "md:col-span-2",
    gradient: "from-neutral-200 to-neutral-100",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-black">
            Everything you need to win.
          </h2>
          <p className="text-neutral-600 text-lg font-medium max-w-2xl mx-auto">
            Powerful tools designed for the modern bettor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 rounded-3xl border border-black/10 bg-neutral-100/50 backdrop-blur-sm overflow-hidden cursor-pointer ${feature.className}`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center border border-black/5 group-hover:bg-black/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
