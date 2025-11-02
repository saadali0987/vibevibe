"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import {
  FiCheckCircle,
  FiInstagram,
  FiMail,
  FiSend,
  FiTwitter,
  FiGithub
} from "react-icons/fi";

const socials = [
  {
    name: "Twitter",
    icon: FiTwitter,
    href: "https://twitter.com/",
    label: "Tweet us a vibe"
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    href: "https://instagram.com/",
    label: "Peek behind the scenes"
  },
  {
    name: "GitHub",
    icon: FiGithub,
    href: "https://github.com/",
    label: "Fork the fun"
  },
  {
    name: "Email",
    icon: FiMail,
    href: "mailto:hey@codevibecollective.com",
    label: "Slide into our inbox"
  }
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const launchConfetti = () => {
    if (typeof window === "undefined") return;
    const end = Date.now() + 800;
    const colors = ["#8B5CF6", "#EC4899", "#38BDF8", "#FBBF24"];

    const frame = () => {
      confetti({
        particleCount: 3,
        startVelocity: 18,
        ticks: 200,
        gravity: 0.9,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      launchConfetti();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 text-slate-900 dark:text-slate-100 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-100 via-white to-transparent dark:from-slate-950 dark:via-slate-900/70" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-center sm:px-10">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-200">
            Join the vibe
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Got an idea? Let\'s make it vibe.
          </h2>
          <p className="max-w-lg text-sm text-slate-600 dark:text-slate-200/80">
            We craft playful, polished experiences for teams who are ready to be unforgettable.
            Tell us what you are building and we will bring the groove.
          </p>
          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-900/10 bg-white/80 p-4 text-sm text-slate-700 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:text-white"
                whileHover={{ scale: 1.02 }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-lg text-emerald-500 dark:text-emerald-200">
                  <social.icon />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-slate-900 dark:text-white">{social.name}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                    {social.label}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/90 p-8 shadow-2xl shadow-emerald-400/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="absolute -inset-32 bg-gradient-to-br from-emerald-400/20 via-transparent to-vibe-500/20 opacity-0 blur-3xl transition group-hover:opacity-20"
            aria-hidden
          />
          <div className="relative space-y-6">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                placeholder="Wanda the Visionary"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                placeholder="wanda@vision.studio"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                Tell us everything
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                placeholder="We want a platform that updates itself while cracking jokes."
                disabled={isSubmitting}
              />
            </div>
            <motion.button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              disabled={isSubmitting}
            >
              {submitted ? "Message vibed!" : isSubmitting ? "Summoning confetti..." : "Send the vibe"}
              <motion.span
                animate={{ rotate: submitted ? [0, 10, -10, 0] : [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                aria-hidden
                className="text-lg"
              >
                {submitted ? <FiCheckCircle /> : <FiSend />}
              </motion.span>
            </motion.button>
            {submitted && (
              <motion.p
                className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-600 dark:text-emerald-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                We got your message! Expect a response faster than you can say "deploy to prod."
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
