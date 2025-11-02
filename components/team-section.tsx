"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiActivity, FiFeather, FiFramer, FiMap, FiServer } from "react-icons/fi";

type TeamMember = {
  name: string;
  role: string;
  icon: IconType;
  image: string;
  bio: string;
  quote: string;
};

const team: TeamMember[] = [
  {
    name: "Saad",
    role: "Frontend Magician",
    icon: FiFramer,
    image: "https://ibb.co/cc7gCPd8",
    bio: "Turns coffee into components and bug reports into punchlines.",
    quote: "CSS? More like see-yes!"
  },
  {
    name: "Indie",
    role: "Motion Maestro",
    icon: FiActivity,
    image: "https://ibb.co/HLR3k1jm",
    bio: "Time traveler from the future sent back to make interfaces dance.",
    quote: "If it moves, it grooves."
  },
  {
    name: "Nova",
    role: "Product Strategist",
    icon: FiMap,
    image: "https://ibb.co/cS1Zw8jk",
    bio: "Keeps the chaos charming and the roadmap full of plot twists.",
    quote: "User delight isn't optional."
  },
  {
    name: "Jet",
    role: "Fullstack Adventurer",
    icon: FiServer,
    image: "https://ibb.co/Gv6r5xzs",
    bio: "Writes APIs that read like mixtapes and deploy like mic drops.",
    quote: "Ship it with swagger."
  },
  {
    name: "Lyric",
    role: "Experience Alchemist",
    icon: FiFeather,
    image: "https://ibb.co/DfxtWrn8",
    bio: "Blends narrative, design, and tech until every screen sings.",
    quote: "Great UX should feel like a plot twist you didn?t see coming."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 text-slate-900 dark:text-slate-100 sm:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
        <div className="flex flex-col gap-4 text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-sky-500 dark:text-sky-200">
            Meet the collective
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            The crew making the internet a little weirder - in the best way.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-200/80">
            Hover over each human to reveal their superpowers. Spoiler: everyone has
            at least three.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 p-6 shadow-xl shadow-sky-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-vibe-500/10 opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative flex flex-col gap-5">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <motion.span
                    className="absolute left-4 top-4 text-3xl"
                    animate={{ rotate: [0, 12, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <member.icon aria-hidden />
                  </motion.span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/70">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-200/90">{member.bio}</p>
                </div>
                <motion.div
                  className="relative rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                    Signature move
                  </span>
                  <p className="mt-2 text-sm">"{member.quote}"</p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
