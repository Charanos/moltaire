"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WaveBackground } from "@/components/ui/WaveBackground";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20 overflow-hidden text-center">
      {/* Custom Wave Background */}
      <WaveBackground />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-50/40 via-white to-white" style={{ zIndex: -10 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" style={{ zIndex: -5 }} />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto space-y-8 pt-16 z-10"
      >

        <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-black leading-[1.1]">
          The only social betting <br className="hidden md:block" />
          platform you need.
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-600 font-medium leading-relaxed">
          Free easy-to-use tools built for players who want full control. Track
          your wins, climb the leaderboard, and master the market.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="group relative inline-flex items-center gap-2 px-8 py-2 text-lg font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started for Free
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#features"
            className="px-8 py-2 text-lg font-semibold text-black border border-black/10 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          >
            Explore Features
          </Link>
        </div>
      </motion.div>

      {/* Dashboard Mockup Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="relative mt-20 w-full max-w-6xl perspective-1000"
      >
        <div className="relative rounded-2xl border border-black/5 bg-white shadow-2xl overflow-hidden group cursor-pointer">
          {/* Dashboard Screenshot */}
          <img 
            src="/dashboard-mockup.png" 
            alt="Moltaire Dashboard Preview" 
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Reflection */}
        <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-black/5 to-transparent blur-xl opacity-50 transform scale-y-[-1]" />
      </motion.div>
    </section>
  );
}
