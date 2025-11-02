"use client";

import { motion } from "framer-motion";

const storyBeats = [
  {
    title: "Chapter 1: The First Ping",
    caption: "It started with one random message: 'Bro, what if we actually build this?'",
    punchline: "No funding. No plan. Just caffeine and questionable confidence.",
    icon: "💡" // light bulb
  },
  {
    title: "Chapter 2: Late Nights, Bright Screens",
    caption: "Days blurred into nights as Git commits piled up and bugs multiplied.",
    punchline: "We didn’t sleep much, but our error logs sure did grow.",
    icon: "🌙" // moon
  },
  {
    title: "Chapter 3: The First Launch",
    caption: "After weeks of chaos, we finally shipped our first project — and it *worked!*",
    punchline: "Only crashed twice on launch day. A win in our books.",
    icon: "🚀" // rocket
  },
  {
    title: "Chapter 4: From Hustle to Harmony",
    caption: "We learned how to mix creativity with clean code, turning side projects into real work.",
    punchline: "Now, we build for clients who value good vibes as much as good design.",
    icon: "🤝" // handshake
  },
  {
    title: "Chapter 5: What’s Next?",
    caption: "The story’s still being written — and you might just be part of the next chapter.",
    punchline: "Stick around. The best bugs make the best stories.",
    icon: "✨" // sparkle
  }
];


export function StorySection() {
  return (
    <section id="story" className="relative py-24 text-slate-900 dark:text-slate-100 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-200/40 to-transparent dark:via-slate-900/40" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-vibe-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-vibe-500 dark:text-vibe-200">
              Our Origin Story
            </p>
            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              From caffeine-fueled brainstorms to story-driven build sprints.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600 dark:text-slate-200/80">
            Think of this as a mini-comic where the heroes wield keyboards, ping-pong
            tabs like boomerangs, and refactor plot holes on the fly.
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-2">
          {storyBeats.map((beat, index) => (
            <motion.article
              key={beat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 p-8 shadow-xl shadow-vibe-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="absolute -top-14 right-6 h-28 w-28 rounded-full bg-gradient-to-tr from-vibe-500/30 via-fuchsia-400/30 to-transparent blur-3xl" />
              <div className="relative flex flex-col gap-4">
                <span className="text-3xl" role="img" aria-hidden>
                  {beat.icon}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {beat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-200/90">{beat.caption}</p>
                <motion.p
                  className="text-base font-medium text-vibe-600 dark:text-vibe-100"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {beat.punchline}
                </motion.p>
              </div>
              <motion.div
                className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-vibe-500 to-sky-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
