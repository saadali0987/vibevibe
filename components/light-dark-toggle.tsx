"use client";

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCoffee, FiSun } from "react-icons/fi";

export function LightDarkToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = resolvedTheme ?? theme ?? "light";
  const isDark = current === "dark";

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg shadow-vibe-500/20 backdrop-blur transition hover:border-vibe-400 hover:text-vibe-100 dark:bg-slate-800/60"
      aria-label="Toggle light and dark mode"
    >
      <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">
        {isDark ? "Night Shift" : "Day Shift"}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "coffee" : "sun"}
          initial={{ rotate: -20, y: 10, opacity: 0 }}
          animate={{ rotate: 0, y: 0, opacity: 1 }}
          exit={{ rotate: 20, y: -10, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-lg"
          aria-hidden
        >
          {isDark ? <FiCoffee /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
