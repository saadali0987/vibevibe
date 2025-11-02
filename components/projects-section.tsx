"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiStar } from "react-icons/fi";

const projects = [
  {
    name: "SaadDocs",
    tagline: "Google Docs, but make it spicy.",
    description:
      "Realtime collaboration with live doodles, emoji reactions, and ambient lo-fi playlists baked in.",
    accent: "from-vibe-500 via-fuchsia-500 to-orange-400"
  },
  {
    name: "VibeStream",
    tagline: "The Twitch of tech talks - no boring slides allowed.",
    description:
      "Interactive streams where devs drop code, audience drops prompts, and confetti rains on shipped features.",
    accent: "from-sky-400 via-cyan-400 to-emerald-400"
  },
  {
    name: "PixelPulse",
    tagline: "Analytics dashboards with a pulse and personality.",
    description:
      "Data storytelling that feels like a graphic novel. Motion-powered charts, sass-powered tooltips.",
    accent: "from-amber-400 via-rose-500 to-violet-500"
  },
  {
    name: "BugBuddy",
    tagline: "Your friendly debugging sidekick with jokes on tap.",
    description:
      "AI-assisted triage, meme generated changelog summaries, and celebratory gifs when tickets close.",
    accent: "from-emerald-400 via-lime-400 to-sky-400"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 text-slate-900 dark:text-slate-100 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-slate-200/50 to-slate-100/60 dark:via-slate-900/50 dark:to-black/70" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
        <div className="flex flex-col gap-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-500 dark:text-fuchsia-200">
            Projects that vibe
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Side quests, passion projects, and shipped experiences we cannot stop talking about.
          </h2>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-200/80">
            Every build starts with a "what if?" and ends with "wait, can we make it glow?"
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 p-8 shadow-xl shadow-fuchsia-500/15 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={`absolute -inset-40 bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition duration-700 group-hover:opacity-30`}
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {project.name}
                    </h3>
                    <motion.span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-lg text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
                      whileHover={{ rotate: 8, scale: 1.05 }}
                    >
                      <FiExternalLink />
                    </motion.span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-200/85">{project.description}</p>
                </div>
                <motion.div
                  className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiStar aria-hidden />
                  <span>Hover to feel the sparkle</span>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
