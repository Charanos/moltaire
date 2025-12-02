"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <span className="text-xl font-semibold tracking-tighter text-black">
          MOLTAIRE
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Features", "Leaderboard", "Community"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-semibold text-neutral-600 hover:text-black transition-colors cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="hidden md:block text-sm font-semibold text-neutral-600 hover:text-black transition-colors cursor-pointer"
        >
          Sign In
        </Link>
        <Link
          href="/dashboard"
          className="px-5 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-neutral-800 hover:scale-105 transition-all cursor-pointer shadow-md hover:shadow-lg"
        >
          Launch App
        </Link>
      </div>
    </motion.nav>
  );
}
