"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowDown,
  FiCoffee,
  FiGlobe,
  FiMapPin,
  FiPenTool,
  FiZap
} from "react-icons/fi";
import { LightDarkToggle } from "./light-dark-toggle";

const headlineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      type: "spring",
      stiffness: 90,
      damping: 12
    }
  })
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-transparent py-12 text-slate-900 dark:text-slate-100 sm:py-16"
    >
      <div className="absolute inset-0 -z-20 opacity-70">
        <motion.div
          className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-vibe-500 blur-[140px]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 0.95]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-sky-400 blur-[150px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.05, 0.95]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="noise-overlay" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 sm:px-10">
        <header className="flex items-center justify-between">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-md drop-shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white/80"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Spark check: we don&apos;t just code - we vibe.
          </motion.span>
          <LightDarkToggle />
        </header>

        <div className="grid flex-1 grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <motion.h1
              className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={0}
            >
              We&apos;re <span className="font-display">CodeVibe Collective</span> -
              your friendly neighborhood code wizards.
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg text-slate-700 sm:text-xl dark:text-slate-200/90"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={1}
            >
              We build delightful digital experiences fueled by caffeine, curiosity,
              and just the right amount of chaos. If it needs code, story, and a
              little sparkle, we&apos;re already vibing with it.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={2}
            >
              <Link
                href="#story"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-vibe-400/30 transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:text-white dark:shadow-vibe-500/30"
              >
                Meet the vibe
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="text-lg"
                  aria-hidden
                >
                  <FiArrowDown />
                </motion.span>
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-slate-900/20 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:text-slate-950 dark:border-white/20 dark:text-white/90 dark:hover:border-white dark:hover:text-white"
              >
                See the magic
                <FiZap aria-hidden />
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/70"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={3}
            >
              <span className="flex items-center gap-2">
                <FiGlobe aria-hidden />
                Web + Creative Tech Studio
              </span>
              <span className="flex items-center gap-2">
                <FiPenTool aria-hidden />
                Next.js | Tailwind | Motion
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin aria-hidden />
                Remote from Everywhere
              </span>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden h-[520px] rounded-3xl bg-white/70 p-6 shadow-2xl shadow-vibe-500/10 backdrop-blur-xl dark:bg-white/5 md:block"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-3xl border border-slate-900/10 dark:border-white/10" />
            <div className="vibe-gradient absolute inset-6 rounded-2xl opacity-80" />
            <div className="relative flex h-full flex-col justify-between rounded-2xl bg-white/80 p-8 text-slate-900 shadow-inner dark:bg-slate-950/70 dark:text-slate-100">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                  The Vibe Forecast
                </p>
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">
                  100% chance of shipping something delightful.
                </p>
              </div>
              <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-200/90">
                <li className="flex items-center gap-2">
                  <FiZap aria-hidden className="text-base" />
                  <span>
                    Realtime collaboration, minus the boring meetings.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FiPenTool aria-hidden className="text-base" />
                  <span>
                    Interfaces that feel like a comic strip meets a spaceship.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCoffee aria-hidden className="text-base" />
                  <span>
                    Caffeine-powered commits deployed with a grin.
                  </span>
                </li>
              </ul>
              <motion.div
                className="flex items-center justify-between rounded-2xl bg-white/70 px-6 py-4 text-slate-900 dark:bg-white/10 dark:text-white"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs uppercase tracking-[0.4em] text-slate-600 dark:text-white/80">
                  Scroll to vibe with us
                </div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="text-3xl"
                  aria-hidden
                >
                  <FiArrowDown />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
