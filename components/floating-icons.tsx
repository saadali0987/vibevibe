"use client";

import { motion } from "framer-motion";

const ICONS = [
  { emoji: "\uD83D\uDCA1", top: "12%", left: "8%", delay: 0 }, // lightbulb
  { emoji: "\uD83E\uDE84", top: "28%", left: "78%", delay: 1.2 }, // magic wand
  { emoji: "\uD83C\uDFA7", top: "58%", left: "18%", delay: 2.4 }, // headphones
  { emoji: "\uD83D\uDE80", top: "75%", left: "85%", delay: 3.2 }, // rocket
  { emoji: "\uD83C\uDFA8", top: "40%", left: "50%", delay: 1.9 } // paint palette
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 select-none">
      {ICONS.map((icon, index) => (
        <motion.span
          key={icon.emoji}
          className="absolute text-4xl opacity-50 blur-[0.4px] drop-shadow"
          style={{ top: icon.top, left: icon.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: icon.delay,
            ease: "easeInOut"
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
          >
            {icon.emoji}
          </motion.span>
        </motion.span>
      ))}
    </div>
  );
}
